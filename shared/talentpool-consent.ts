// Keep displayed wording and the server-side consent receipt in one versioned source.
export const TALENTPOOL_CONSENT_VERSION = "2026-10-31.v1";
export const TALENTPOOL_RETENTION_MONTHS = 12;
export const TALENTPOOL_CONSENT_TEXT = "Ja, Wedeploy mag mijn cv, contactgegevens en kandidaatprofiel twaalf maanden bewaren om mij te benaderen voor passende functies en opdrachten. Ik kan deze toestemming op ieder moment intrekken via info@wedeploy.nl.";
export const TALENTPOOL_OPTIONAL_NOTE = "Dit is optioneel. Zonder toestemming behandelen we jouw huidige reactie gewoon, maar nemen we je niet op in ons kandidatenbestand voor toekomstige mogelijkheden.";

export function talentpoolExpiry(receivedAt: string): string {
  const start = new Date(receivedAt);
  const year = start.getUTCFullYear() + 1;
  const month = start.getUTCMonth();
  const lastDay = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  start.setUTCFullYear(year, month, Math.min(start.getUTCDate(), lastDay));
  return start.toISOString();
}
