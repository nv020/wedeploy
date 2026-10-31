// Keep displayed wording and the server-side consent receipt in one versioned source.
export const TALENTPOOL_CONSENT_VERSION = "2026-10-31.v2";
export const TALENTPOOL_RETENTION_MONTHS = 12;
export const TALENTPOOL_CONSENT_TEXT = "Wedeploy mag mijn cv en gegevens 12 maanden bewaren voor passende functies en opdrachten.";
export const TALENTPOOL_OPTIONAL_NOTE = "Optioneel. Je kunt je toestemming altijd intrekken.";
export const PRIVACY_NOTICE_TEXT = "We verwerken je gegevens volgens onze privacyverklaring.";
export const PRIVACY_POLICY_URL = "https://www.wedeploy.nl/privacy";

// Preserve the evidence for previously displayed wording, including cached forms.
// Never replace an old version's text with today's wording in a consent receipt.
const policies: Record<string, { text: string; note: string }> = {
  "2026-10-31.v1": {
    text: "Ja, Wedeploy mag mijn cv, contactgegevens en kandidaatprofiel twaalf maanden bewaren om mij te benaderen voor passende functies en opdrachten. Ik kan deze toestemming op ieder moment intrekken via info@wedeploy.nl.",
    note: "Dit is optioneel. Zonder toestemming behandelen we jouw huidige reactie gewoon, maar nemen we je niet op in ons kandidatenbestand voor toekomstige mogelijkheden.",
  },
  [TALENTPOOL_CONSENT_VERSION]: { text: TALENTPOOL_CONSENT_TEXT, note: TALENTPOOL_OPTIONAL_NOTE },
};
export function talentpoolPolicy(version: string) {
  return Object.prototype.hasOwnProperty.call(policies, version) ? policies[version] : undefined;
}

export function talentpoolExpiry(receivedAt: string): string {
  const start = new Date(receivedAt);
  const year = start.getUTCFullYear() + 1;
  const month = start.getUTCMonth();
  const lastDay = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  start.setUTCFullYear(year, month, Math.min(start.getUTCDate(), lastDay));
  return start.toISOString();
}
