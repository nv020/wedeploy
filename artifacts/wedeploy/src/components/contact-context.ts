export type ContactRole = "opdrachtgever" | "kandidaat";
export function resolveContactContext(search: string, defaults: { role: ContactRole; context: string; vacancyId: string }) {
  const query = new URLSearchParams(search);
  const requestedRole = query.get("type");
  const role = requestedRole === "opdrachtgever" || requestedRole === "kandidaat" ? requestedRole : defaults.role;
  const profile = role === "opdrachtgever" ? query.get("profiel") : "";
  return { role, context: (profile || query.get("onderwerp") || defaults.context).slice(0, 200), vacancyId: defaults.vacancyId };
}
export function switchContactRole(current: { role: ContactRole; context: string; vacancyId: string }, role: ContactRole) {
  return role === current.role ? current : { role, context: "", vacancyId: "" };
}
