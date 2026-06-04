import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import formidable from "formidable";

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const form = formidable({});
    const [fields] = await form.parse(req);
    const get = (k: string) => (fields[k]?.[0] ?? "").trim();

    const naam = get("naam");
    const email = get("email");
    const bericht = get("bericht");

    if (!naam || !email || !bericht) {
      return res.status(400).json({ error: "Naam, e-mail en bericht zijn verplicht." });
    }

    const apiKey = process.env.RESEND_API_KEY_WEDEPLOY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY_WEDEPLOY is not set");
      return res.status(500).json({ error: "E-mail service niet geconfigureerd." });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "WeDeploy <no-reply@wedeploy.nl>",
      to: "info@wedeploy.nl",
      replyTo: "info@wedeploy.nl",
      subject: "Nieuwe aanvraag via wedeploy.nl",
      text: `Je hebt een nieuw bericht ontvangen via de website:\n\nNaam: ${naam}\nE-mailadres: ${email}\n\nBericht:\n${bericht}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return res.status(500).json({ error: "Mail verzenden mislukt" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return res.status(500).json({ error: "Mail verzenden mislukt" });
  }
}
