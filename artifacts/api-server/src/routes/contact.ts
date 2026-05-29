/**
 * Contact form route — sends form submissions to info@wedeploy.nl via Resend
 *
 * Uses Replit's Resend connector (no API key needed in secrets).
 * Optionally sends a confirmation email to the submitter.
 * Accepts an optional CV attachment (PDF/Word, max 10 MB) via multipart/form-data.
 *
 * Environment variable overrides (Replit Secrets):
 *   CONTACT_TO    — Recipient address (default: info@wedeploy.nl)
 *   CONTACT_FROM  — Sender address (default: WeDeploy <noreply@absent.app>)
 *                   Must be a verified domain in the connected Resend account.
 */

import { Router, type IRouter } from "express";
import multer from "multer";
import { ReplitConnectors } from "@replit/connectors-sdk";

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

// ─── Send via Resend connector ────────────────────────────────────────────────
async function sendEmail(payload: {
  from: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
}): Promise<void> {
  const connectors = new ReplitConnectors();
  const body: Record<string, unknown> = {
    from: payload.from,
    to: payload.to,
    subject: payload.subject,
    html: payload.html,
  };
  if (payload.replyTo) {
    body["reply_to"] = payload.replyTo;
  }
  const res = await connectors.proxy("resend", "/emails", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "(no body)");
    throw new Error(`Resend API error ${res.status}: ${text}`);
  }
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

    // Honeypot check (field must be empty)
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

    if (!naam || !email || !bericht) {
      res.status(400).json({ error: "Naam, e-mail en bericht zijn verplicht." });
      return;
    }

    const isKandidaat = type === "kandidaat";
    const to = process.env["CONTACT_TO"] ?? "info@wedeploy.nl";
    const from = process.env["CONTACT_FROM"] ?? "WeDeploy <noreply@absent.app>";
    const now = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });

    const subject = isKandidaat
      ? `Nieuwe kandidaat via wedeploy.nl — ${naam ?? email}`
      : `Nieuwe aanvraag via wedeploy.nl — ${naam ?? email}`;

    const notificationHtml = `
<div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #1a2744;">
  <div style="background: #1a2744; padding: 28px 32px; border-radius: 12px 12px 0 0;">
    <img src="https://wedeploy.nl/logo-white.svg" alt="WeDeploy" style="height: 32px;" onerror="this.style.display='none'" />
    <h1 style="color: #fff; font-size: 20px; margin: 12px 0 0; font-weight: 700;">Nieuw bericht via wedeploy.nl</h1>
  </div>
  <div style="background: #f8f9fc; padding: 28px 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e8f0; border-top: none;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px 0; color: #6b7a9f; width: 140px; font-size: 13px; font-weight: 600; vertical-align: top;">Type</td>
        <td style="padding: 10px 0; font-size: 14px; color: #1a2744; font-weight: 600;">${isKandidaat ? "Kandidaat / Professional" : "Opdrachtgever"}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #6b7a9f; font-size: 13px; font-weight: 600; vertical-align: top;">Naam</td>
        <td style="padding: 10px 0; font-size: 14px; color: #1a2744;">${naam}</td>
      </tr>
      ${bedrijf ? `<tr>
        <td style="padding: 10px 0; color: #6b7a9f; font-size: 13px; font-weight: 600; vertical-align: top;">Bedrijf</td>
        <td style="padding: 10px 0; font-size: 14px; color: #1a2744;">${bedrijf}</td>
      </tr>` : ""}
      <tr>
        <td style="padding: 10px 0; color: #6b7a9f; font-size: 13px; font-weight: 600; vertical-align: top;">E-mail</td>
        <td style="padding: 10px 0; font-size: 14px; color: #1a2744;"><a href="mailto:${email}" style="color: #2a9fd6;">${email}</a></td>
      </tr>
      ${telefoon ? `<tr>
        <td style="padding: 10px 0; color: #6b7a9f; font-size: 13px; font-weight: 600; vertical-align: top;">Telefoon</td>
        <td style="padding: 10px 0; font-size: 14px; color: #1a2744;">${telefoon}</td>
      </tr>` : ""}
      ${linkedin ? `<tr>
        <td style="padding: 10px 0; color: #6b7a9f; font-size: 13px; font-weight: 600; vertical-align: top;">LinkedIn</td>
        <td style="padding: 10px 0; font-size: 14px; color: #1a2744;"><a href="${linkedin}" style="color: #2a9fd6;">${linkedin}</a></td>
      </tr>` : ""}
      ${typeAanvraag ? `<tr>
        <td style="padding: 10px 0; color: #6b7a9f; font-size: 13px; font-weight: 600; vertical-align: top;">Type aanvraag</td>
        <td style="padding: 10px 0; font-size: 14px; color: #1a2744;">${typeAanvraag}</td>
      </tr>` : ""}
      ${req.file ? `<tr>
        <td style="padding: 10px 0; color: #6b7a9f; font-size: 13px; font-weight: 600; vertical-align: top;">CV</td>
        <td style="padding: 10px 0; font-size: 14px; color: #1a2744;">${req.file.originalname} (zie bijlage)</td>
      </tr>` : ""}
    </table>
    <div style="margin-top: 20px; background: #fff; border: 1px solid #e5e8f0; border-radius: 8px; padding: 16px 20px;">
      <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; color: #6b7a9f; text-transform: uppercase; letter-spacing: 1px;">${isKandidaat ? "Motivatie" : "Bericht"}</p>
      <p style="margin: 0; font-size: 14px; color: #1a2744; white-space: pre-wrap; line-height: 1.7;">${bericht}</p>
    </div>
    <p style="margin-top: 24px; font-size: 11px; color: #aab2c8;">Verzonden via wedeploy.nl &middot; ${now}</p>
  </div>
</div>
    `.trim();

    const confirmationHtml = `
<div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #1a2744;">
  <div style="background: #1a2744; padding: 28px 32px; border-radius: 12px 12px 0 0;">
    <img src="https://wedeploy.nl/logo-white.svg" alt="WeDeploy" style="height: 32px;" onerror="this.style.display='none'" />
    <h1 style="color: #fff; font-size: 20px; margin: 12px 0 0; font-weight: 700;">Bedankt voor uw bericht</h1>
  </div>
  <div style="background: #f8f9fc; padding: 28px 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e8f0; border-top: none;">
    <p style="font-size: 15px; line-height: 1.7; color: #1a2744; margin-top: 0;">Beste ${naam},</p>
    <p style="font-size: 15px; line-height: 1.7; color: #1a2744;">Wij hebben uw bericht ontvangen en nemen binnen <strong>één werkdag</strong> persoonlijk contact met u op.</p>
    <p style="font-size: 15px; line-height: 1.7; color: #1a2744;">Heeft u vragen? U kunt ons altijd bereiken via:</p>
    <ul style="font-size: 14px; color: #1a2744; line-height: 2; padding-left: 20px;">
      <li>E-mail: <a href="mailto:info@wedeploy.nl" style="color: #2a9fd6;">info@wedeploy.nl</a></li>
      <li>Telefoon: <a href="tel:0852128668" style="color: #2a9fd6;">085 212 8668</a></li>
    </ul>
    <p style="font-size: 15px; line-height: 1.7; color: #1a2744; margin-bottom: 0;">Met vriendelijke groet,<br /><strong>Het WeDeploy team</strong></p>
    <p style="margin-top: 24px; font-size: 11px; color: #aab2c8;">WeDeploy &middot; Krijn Taconiskade 461, 1087 HW Amsterdam</p>
  </div>
</div>
    `.trim();

    try {
      // Send notification to info@wedeploy.nl
      await sendEmail({
        from,
        to,
        replyTo: email,
        subject,
        html: notificationHtml,
      });

      // Send confirmation to the submitter (best-effort; non-fatal)
      sendEmail({
        from,
        to: email,
        subject: "Wij hebben uw bericht ontvangen — WeDeploy",
        html: confirmationHtml,
      }).catch((err) => {
        console.warn("[contact] Confirmation email failed (non-fatal):", err);
      });

      res.json({ ok: true });
    } catch (err) {
      console.error("[contact] Email send failed:", err);
      res.status(500).json({
        error:
          "Versturen mislukt. Probeer het later opnieuw of stuur een e-mail naar info@wedeploy.nl.",
      });
    }
  },
);

export default router;
