import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const invites = new Map([
  ["5TKBelQpTo8VfwsyhRN6Jw", "Testbedrijf A"],
  ["u_CQzff9oWW0rvdIFf2KUw", "Testbedrijf B"],
  ["-MLP5__-9f3UA59o7GrDqw", "Testbedrijf C"],
]);
const sessionPattern = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  // These public-source invitations are exclusively for the fictional preview.
  if (process.env.VERCEL_ENV === "production") return res.status(404).end();
  if (req.method !== "POST") return res.status(405).setHeader("Allow", "POST").end();
  if (!req.headers["content-type"]?.startsWith("application/json")) return res.status(415).end();

  const { action, invite, session } = req.body ?? {};
  const company = invites.get(invite);
  if (!company || typeof session !== "string" || !sessionPattern.test(session)) return res.status(404).end();
  if (!["visit", "open", "download"].includes(action)) return res.status(400).end();

  const entry = { company, action, session, at: new Date().toISOString() };
  if (action === "download") {
    const pdf = await readFile(join(process.cwd(), "shared/kluis-testprofiel.pdf"));
    console.info("kluis-test", JSON.stringify(entry));
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="Wedeploy-testprofiel.pdf"');
    return res.status(200).send(pdf);
  }
  console.info("kluis-test", JSON.stringify(entry));
  if (action === "visit") return res.status(200).json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY_WEDEPLOY;
  if (!apiKey) return res.status(200).json({ notification: "unconfigured" });

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
        // Resend deduplicates identical requests for 24 hours.
        "Idempotency-Key": "wedeploy-kluis-test-v1/" + invite,
      },
      body: JSON.stringify({
        from: "Wedeploy <no-reply@wedeploy.nl>",
        to: "info@wedeploy.nl",
        subject: "Wedeploy kluistest | " + company + " heeft het profiel geopend",
        text: company + " heeft op Open profiel geklikt via de testuitnodiging. Het verzendtijdstip van deze melding geeft het moment van openen aan.",
      }),
      signal: AbortSignal.timeout(4000),
    });
    if (response.ok) return res.status(200).json({ notification: "accepted" });
    console.warn("kluis-test: e-mailprovider antwoordde", response.status);
  } catch {
    console.warn("kluis-test: e-mailprovider niet bereikbaar");
  }
  return res.status(200).json({ notification: "failed" });
}
