import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { naam, email, bericht } = req.body as {
      naam?: string;
      email?: string;
      bericht?: string;
    };

    if (!naam || !email || !bericht) {
      return res.status(400).json({ error: "Naam, e-mail en bericht zijn verplicht." });
    }

    await transporter.sendMail({
      from: "noreply@wedeploy.nl",
      to: "info@wedeploy.nl",
      replyTo: email,
      subject: `Nieuw contactformulier bericht van ${naam}`,
      text: `Je hebt een nieuw bericht ontvangen via de website:\n\nNaam: ${naam}\nE-mailadres: ${email}\n\nBericht:\n${bericht}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Mail verzenden mislukt" });
  }
}
