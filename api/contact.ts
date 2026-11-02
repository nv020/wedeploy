import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import formidable, { type File } from "formidable";
import { readFile, rm } from "node:fs/promises";
import { basename, extname } from "node:path";
import { randomUUID } from "node:crypto";
import { TALENTPOOL_RETENTION_MONTHS, PRIVACY_POLICY_URL, talentpoolExpiry, talentpoolPolicy } from "../shared/talentpool-consent";

export const config = { api: { bodyParser: false } };

// Leave room for multipart fields below Vercel's request body limit.
const MAX_CV_BYTES = 3 * 1024 * 1024;
const MIME_TYPES: Record<string, string> = {
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const temporaryFiles: File[] = [];
  try {
    const form = formidable({
      maxFiles: 1,
      maxFileSize: MAX_CV_BYTES,
      maxTotalFileSize: MAX_CV_BYTES,
      maxFields: 16,
      maxFieldsSize: 32 * 1024,
      allowEmptyFiles: false,
    });
    form.on("fileBegin", (_name, file) => temporaryFiles.push(file));
    const [fields, files] = await form.parse(req);
    const get = (key: string) => (fields[key]?.[0] ?? "").trim();

    if (get("_gotcha")) return res.status(200).json({ success: true });

    const naam = get("naam");
    const email = get("email");
    const bericht = get("bericht");
    if (!naam || !email || !bericht) {
      return res.status(400).json({ error: "Naam, e-mail en bericht zijn verplicht." });
    }
    if (naam.length > 200 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Vul een geldige naam en e-mailadres in." });
    }
    if (Object.keys(files).some((key) => key !== "cv")) {
      return res.status(400).json({ error: "Upload uw bestand via het cv-veld." });
    }

    const isCandidate = get("type") === "kandidaat";
    const consentValue = get("talentpoolConsent");
    const submittedVersion = get("talentpoolConsentVersion");
    const policy = talentpoolPolicy(submittedVersion);
    if (isCandidate && ((fields.talentpoolConsent?.length ?? 0) > 1 || (fields.talentpoolConsentVersion?.length ?? 0) > 1 || !["", "yes", "no"].includes(consentValue))) {
      return res.status(400).json({ error: "De toestemmingskeuze is ongeldig. Kies opnieuw of je toestemming wilt geven." });
    }
    const consentGranted = isCandidate && consentValue === "yes";
    if (consentGranted && !policy) {
      return res.status(400).json({ error: "De toestemmingstekst is bijgewerkt. Vernieuw de pagina en maak jouw keuze opnieuw." });
    }
    const receivedAt = new Date().toISOString();
    const sourcePath = get("sourcePath");
    const consentRecord = isCandidate ? {
      recordId: randomUUID(),
      receivedAt,
      source: "wedeploy.nl/contact-form",
      sourcePath: /^\/(?!\/)[a-zA-Z0-9/_-]*$/.test(sourcePath) && sourcePath.length <= 300 ? sourcePath : null,
      name: naam,
      email,
      purpose: "future_functions_and_assignments",
      choice: consentGranted ? "granted" : "not_granted",
      // Old cached forms without a version do not prove that wording was shown.
      consentVersion: policy ? submittedVersion : null,
      consentText: policy?.text ?? null,
      supportingText: policy?.note ?? null,
      privacyPolicyUrl: PRIVACY_POLICY_URL,
      retentionMonths: consentGranted ? TALENTPOOL_RETENTION_MONTHS : null,
      expiresAt: consentGranted ? talentpoolExpiry(receivedAt) : null,
    } : null;

    const cv = files.cv?.[0];
    const attachments = [];
    if (cv) {
      const filename = basename((cv.originalFilename ?? "cv").replace(/\\/g, "/"))
        .replace(/[\r\n\x00-\x1f]/g, "").slice(-200);
      const contentType = MIME_TYPES[extname(filename).toLowerCase()];
      if (!contentType) {
        return res.status(400).json({ error: "Upload een cv in PDF- of Word-formaat." });
      }
      attachments.push({ filename, content: await readFile(cv.filepath), contentType });
    }
    if (consentRecord) attachments.push({
      filename: `kandidatenbestand-${consentRecord.recordId}.json`,
      content: Buffer.from(JSON.stringify(consentRecord, null, 2), "utf8"),
      contentType: "application/json",
    });

    const apiKey = process.env.RESEND_API_KEY_WEDEPLOY;
    if (!apiKey) {
      console.error("[contact] E-mail service niet geconfigureerd");
      return res.status(500).json({ error: "E-mail service niet geconfigureerd." });
    }
    const functie = get("functie").replace(/[\r\n]/g, " ").slice(0, 200);
    const referentie = get("vacatureId").slice(0, 100);
    const onderwerp = get("onderwerp").replace(/[\r\n]/g, " ").slice(0, 200);
    const type = get("type") === "kandidaat" ? "Professional" : "Opdrachtgever";
    const { error } = await new Resend(apiKey).emails.send({
      from: "Wedeploy <no-reply@wedeploy.nl>",
      to: "info@wedeploy.nl",
      replyTo: email,
      subject: functie ? `Nieuwe reactie — ${functie}` : onderwerp ? `Nieuwe aanvraag — ${onderwerp}` : `Nieuwe aanvraag — ${type}`,
      text: [
        "Nieuw bericht via wedeploy.nl", "",
        `Naam: ${naam}`, `E-mailadres: ${email}`,
        `Telefoon: ${get("telefoon") || "Niet ingevuld"}`, `Type: ${type}`,
        ...(functie ? [`Functie: ${functie}`] : []),
        ...(onderwerp ? [`Onderwerp / profiel: ${onderwerp}`] : []),
        ...(referentie ? [`Vacaturereferentie: ${referentie}`] : []),
        `CV: ${cv ? attachments[0].filename : "Niet meegestuurd"}`,
        ...(consentRecord ? [
          "", `Kandidatenpool: ${consentGranted ? "TOESTEMMING GEGEVEN" : "GEEN TOESTEMMING"}`,
          consentGranted
            ? "De kandidaat heeft toestemming gegeven voor 12 maanden bewaren en benaderen voor passende functies en opdrachten."
            : "Geen toestemming geregistreerd voor 12 maanden bewaren. Behandel deze reactie en plan een kennismaking; vraag apart toestemming voor opname in de kandidatenpool.",
          ...(consentRecord.expiresAt ? [`Geldig tot (UTC): ${consentRecord.expiresAt}`] : []),
        ] : []),
        "", "Bericht:", bericht,
        ...(consentRecord ? [
          "", "--- Registratiegegevens ---",
          `Ontvangen op (UTC): ${consentRecord.receivedAt}`,
          `Registratie: ${consentRecord.recordId}`,
          `Pagina: ${consentRecord.sourcePath ?? "Niet meegestuurd"}`,
          `Tekstversie: ${consentRecord.consentVersion ?? "Onbekend (bijvoorbeeld een ouder formulier)"}`,
          `Privacyverklaring: ${consentRecord.privacyPolicyUrl}`,
          "De getoonde keuzetekst en de vastgelegde uitkomst staan ook in de JSON-bijlage. Bewaking van de bewaartermijn gebeurt niet automatisch via dit formulier.",
        ] : []),
      ].join("\n"),
      attachments,
    });
    if (error) {
      console.error("[contact] Resend error:", error.name);
      return res.status(500).json({ error: "Mail verzenden mislukt. Probeer het later opnieuw." });
    }
    return res.status(200).json({ success: true, ...(consentRecord ? { receiptId: consentRecord.recordId } : {}) });
  } catch (err) {
    const uploadError = err as { code?: number };
    if (uploadError.code && uploadError.code >= 1000 && uploadError.code < 2000) {
      return res.status(400).json({ error: "Upload maximaal één PDF- of Word-bestand van 3 MB." });
    }
    console.error("[contact] Mail verzenden mislukt");
    return res.status(500).json({ error: "Mail verzenden mislukt. Probeer het later opnieuw." });
  } finally {
    await Promise.all(temporaryFiles.map((file) => rm(file.filepath, { force: true }).catch(() => undefined)));
  }
}
