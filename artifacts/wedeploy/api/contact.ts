import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import formidable from "formidable";

export const config = {
  api: { bodyParser: false },
};

const ipRequests = new Map<string, { count: number; resetAt: number }>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

function createTransport() {
  return nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER ?? "info@wedeploy.nl",
      pass: process.env.SMTP_PASS,
    },
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Te veel aanvragen. Probeer het later opnieuw." });
  }

  const form = formidable({ maxFileSize: 10 * 1024 * 1024 });
  let fields: formidable.Fields;
  try {
    [fields] = await form.parse(req);
  } catch {
    return res.status(400).json({ error: "Ongeldige aanvraag." });
  }

  const get = (k: string) => (fields[k]?.[0] ?? "").trim();

  if (get("_gotcha")) return res.status(200).json({ ok: true });

  const naam = get("naam");
  const email = get("email");
  const bericht = get("bericht");
  const type = get("type");
  const telefoon = get("telefoon");

  if (!naam || !email || !bericht) {
    return res.status(400).json({ error: "Naam, e-mail en bericht zijn verplicht." });
  }

  if (!process.env.SMTP_PASS) {
    return res.status(500).json({ error: "E-mail service niet geconfigureerd." });
  }

  const isKandidaat = type === "kandidaat";
  const from = `"WeDeploy" <${process.env.SMTP_USER ?? "info@wedeploy.nl"}>`;
  const to = process.env.CONTACT_TO ?? "info@wedeploy.nl";
  const now = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });

  const subject = isKandidaat
    ? `Nieuwe kandidaat via wedeploy.nl — ${naam}`
    : `Nieuwe aanvraag via wedeploy.nl — ${naam}`;

  const notificationHtml = `
<div style="font-family:-apple-system,sans-serif;max-width:600px;margin:0 auto;color:#1a2744">
  <div style="background:#172A4E;padding:28px 32px;border-radius:12px 12px 0 0">
    <h1 style="color:#fff;font-size:20px;margin:0;font-weight:700">Nieuw bericht via wedeploy.nl</h1>
  </div>
  <div style="background:#f8f9fc;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #e5e8f0;border-top:none">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:10px 0;color:#6b7a9f;width:140px;font-size:13px;font-weight:600;vertical-align:top">Type</td>
          <td style="padding:10px 0;font-size:14px;color:#1a2744;font-weight:600">${isKandidaat ? "Kandidaat / Professional" : "Opdrachtgever"}</td></tr>
      <tr><td style="padding:10px 0;color:#6b7a9f;font-size:13px;font-weight:600;vertical-align:top">Naam</td>
          <td style="padding:10px 0;font-size:14px;color:#1a2744">${naam}</td></tr>
      <tr><td style="padding:10px 0;color:#6b7a9f;font-size:13px;font-weight:600;vertical-align:top">E-mail</td>
          <td style="padding:10px 0;font-size:14px;color:#1a2744"><a href="mailto:${email}" style="color:#22A4E8">${email}</a></td></tr>
      ${telefoon ? `<tr><td style="padding:10px 0;color:#6b7a9f;font-size:13px;font-weight:600;vertical-align:top">Telefoon</td>
          <td style="padding:10px 0;font-size:14px;color:#1a2744">${telefoon}</td></tr>` : ""}
    </table>
    <div style="margin-top:20px;background:#fff;border:1px solid #e5e8f0;border-radius:8px;padding:16px 20px">
      <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#6b7a9f;text-transform:uppercase;letter-spacing:1px">${isKandidaat ? "Motivatie" : "Bericht"}</p>
      <p style="margin:0;font-size:14px;color:#1a2744;white-space:pre-wrap;line-height:1.7">${bericht}</p>
    </div>
    <p style="margin-top:24px;font-size:11px;color:#aab2c8">Verzonden via wedeploy.nl &middot; ${now}</p>
  </div>
</div>`.trim();

  const confirmationHtml = `
<div style="font-family:-apple-system,sans-serif;max-width:600px;margin:0 auto;color:#1a2744">
  <div style="background:#172A4E;padding:28px 32px;border-radius:12px 12px 0 0">
    <h1 style="color:#fff;font-size:20px;margin:0;font-weight:700">Bedankt voor uw bericht</h1>
  </div>
  <div style="background:#f8f9fc;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #e5e8f0;border-top:none">
    <p style="font-size:15px;line-height:1.7;color:#1a2744;margin-top:0">Beste ${naam},</p>
    <p style="font-size:15px;line-height:1.7;color:#1a2744">Wij hebben uw bericht ontvangen en nemen binnen <strong>één werkdag</strong> persoonlijk contact met u op.</p>
    <ul style="font-size:14px;color:#1a2744;line-height:2;padding-left:20px">
      <li>E-mail: <a href="mailto:info@wedeploy.nl" style="color:#22A4E8">info@wedeploy.nl</a></li>
      <li>Telefoon: <a href="tel:0852128668" style="color:#22A4E8">085 212 8668</a></li>
    </ul>
    <p style="font-size:15px;line-height:1.7;color:#1a2744;margin-bottom:0">Met vriendelijke groet,<br/><strong>Het WeDeploy team</strong></p>
    <p style="margin-top:24px;font-size:11px;color:#aab2c8">WeDeploy &middot; Krijn Taconiskade 461, 1087 HW Amsterdam</p>
  </div>
</div>`.trim();

  const transport = createTransport();

  try {
    await transport.sendMail({ from, to, replyTo: email, subject, html: notificationHtml });

    transport.sendMail({
      from, to: email,
      subject: "Wij hebben uw bericht ontvangen — WeDeploy",
      html: confirmationHtml,
    }).catch((e) => console.warn("[contact] confirmation failed:", e));

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return res.status(500).json({
      error: "Versturen mislukt. Probeer het later opnieuw of stuur een e-mail naar info@wedeploy.nl.",
    });
  }
}
