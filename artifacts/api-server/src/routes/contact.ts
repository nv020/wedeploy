/**
 * Contact form route — sends form submissions to info@wedeploy.nl
 *
 * Required environment variables (set in Replit Secrets):
 *   SMTP_HOST     — SMTP server hostname (e.g. smtp.gmail.com, smtp.sendgrid.net)
 *   SMTP_PORT     — SMTP port (default: 587)
 *   SMTP_USER     — SMTP username / login
 *   SMTP_PASS     — SMTP password or API key
 *   SMTP_FROM     — From address (default: noreply@wedeploy.nl)
 *   CONTACT_TO    — Recipient address (default: info@wedeploy.nl)
 */

import { Router, type IRouter } from "express";
import multer from "multer";
import nodemailer from "nodemailer";

const router: IRouter = Router();

// ─── Multer — memory storage (CV attachment, max 10 MB) ───────────────────────
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter(_req, file, cb) {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    cb(null, allowed.includes(file.mimetype));
  },
});

// ─── In-memory rate limiter ────────────────────────────────────────────────────
const ipRequests = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ─── Mailer transport ─────────────────────────────────────────────────────────
function createTransport() {
  const host = process.env["SMTP_HOST"];
  if (!host) {
    throw new Error("SMTP_HOST is not configured. Set it in Replit Secrets.");
  }
  return nodemailer.createTransport({
    host,
    port: Number(process.env["SMTP_PORT"] ?? 587),
    secure: Number(process.env["SMTP_PORT"] ?? 587) === 465,
    auth: {
      user: process.env["SMTP_USER"],
      pass: process.env["SMTP_PASS"],
    },
  });
}

// ─── POST /api/contact ────────────────────────────────────────────────────────
router.post(
  "/contact",
  upload.single("cv"),
  async (req, res) => {
    const ip =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ??
      req.socket.remoteAddress ??
      "unknown";

    // Honeypot check
    if (req.body._gotcha) {
      res.status(200).json({ ok: true });
      return;
    }

    // Rate limit
    if (isRateLimited(ip)) {
      res.status(429).json({ error: "Te veel aanvragen. Probeer het later opnieuw." });
      return;
    }

    const {
      type,
      naam,
      bedrijf,
      email,
      telefoon,
      linkedin,
      bericht,
      typeAanvraag,
    } = req.body as Record<string, string>;

    if (!email || !bericht) {
      res.status(400).json({ error: "E-mail en bericht zijn verplicht." });
      return;
    }

    const isKandidaat = type === "kandidaat";
    const to = process.env["CONTACT_TO"] ?? "info@wedeploy.nl";
    const from = process.env["SMTP_FROM"] ?? "noreply@wedeploy.nl";
    const subject = isKandidaat
      ? `Nieuwe kandidaat via wedeploy.nl — ${naam ?? email}`
      : `Nieuwe aanvraag via wedeploy.nl — ${naam ?? email}`;

    const html = `
    <div style="font-family: sans-serif; max-width: 600px; color: #1a2744;">
      <h2 style="color: #1a2744; border-bottom: 2px solid #2a9fd6; padding-bottom: 8px;">
        Nieuw bericht via wedeploy.nl
      </h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px 0; color: #666; width: 160px;"><strong>Type</strong></td><td>${isKandidaat ? "Kandidaat / Professional" : "Opdrachtgever"}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;"><strong>Naam</strong></td><td>${naam ?? "—"}</td></tr>
        ${bedrijf ? `<tr><td style="padding: 8px 0; color: #666;"><strong>Bedrijf</strong></td><td>${bedrijf}</td></tr>` : ""}
        <tr><td style="padding: 8px 0; color: #666;"><strong>E-mail</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        ${telefoon ? `<tr><td style="padding: 8px 0; color: #666;"><strong>Telefoon</strong></td><td>${telefoon}</td></tr>` : ""}
        ${linkedin ? `<tr><td style="padding: 8px 0; color: #666;"><strong>LinkedIn</strong></td><td><a href="${linkedin}">${linkedin}</a></td></tr>` : ""}
        ${typeAanvraag ? `<tr><td style="padding: 8px 0; color: #666;"><strong>Type aanvraag</strong></td><td>${typeAanvraag}</td></tr>` : ""}
        ${req.file ? `<tr><td style="padding: 8px 0; color: #666;"><strong>CV</strong></td><td>${req.file.originalname} (zie bijlage)</td></tr>` : ""}
      </table>
      <h3 style="margin-top: 24px; color: #1a2744;">${isKandidaat ? "Motivatie" : "Omschrijving"}</h3>
      <p style="background: #f8f7f4; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${bericht}</p>
      <hr style="margin-top: 32px; border: none; border-top: 1px solid #e5e0d5;" />
      <p style="font-size: 12px; color: #999;">Verzonden via wedeploy.nl · ${new Date().toLocaleString("nl-NL")}</p>
    </div>
  `;

    const attachments = req.file
      ? [{ filename: req.file.originalname, content: req.file.buffer, contentType: req.file.mimetype }]
      : [];

    try {
      const transport = createTransport();
      await transport.sendMail({ from, to, replyTo: email, subject, html, attachments });
      res.json({ ok: true });
    } catch (err) {
      console.error("[contact] Email send failed:", err);
      res.status(500).json({
        error: "Versturen mislukt. Probeer het later opnieuw of stuur een e-mail naar info@wedeploy.nl.",
      });
    }
  }
);

export default router;
