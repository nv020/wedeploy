import { availableProfessionals } from '@/data/opportunities';
import { isProfessionalPublic } from '@/data/publication';
const formatDate = (date: string) => new Intl.DateTimeFormat('nl-NL', {dateStyle:'long',timeZone:'Europe/Amsterdam'}).format(new Date(date));
export function AvailableProfessionals({limit}: {limit?: number}) {
  const profiles = availableProfessionals.filter(profile => isProfessionalPublic(profile)).slice(0,limit);
  if (!profiles.length) return <div className="availability-note"><h3>Wie past bij jouw opdracht?</h3><p>Niet iedereen uit ons netwerk staat openbaar op de website. Vertel welke ervaring en inzet je zoekt. We bespreken jouw vraag en bevestigen beschikbaarheid voordat we iemand introduceren.</p><a className="action-arrow" href="/contact?type=opdrachtgever&onderwerp=Beschikbare%20professional#contact">Vraag naar beschikbaarheid</a></div>;
  return <div className="role-directory available-directory">{profiles.map(profile => <article key={profile.reference} className="available-profile">
    <p className="eyebrow">{profile.reference}</p><h3>{profile.title}</h3>
    <ul className="profile-labels" aria-label="Contractvorm en expertise"><li>{profile.contract}</li>{profile.labels?.map(label => <li key={label}>{label}</li>)}</ul>
    <dl className="profile-facts"><div><dt>Beschikbaarheid</dt><dd>{profile.availabilityLabel ?? formatDate(profile.availableFrom)}</dd></div><div><dt>Inzet</dt><dd>{profile.hours}</dd></div><div><dt>Regio</dt><dd>{profile.region}</dd></div></dl>
    <p>{profile.summary}</p><ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-muted-foreground">{profile.experience.map(item => <li key={item}>{item}</li>)}</ul>
    <p className="text-xs text-muted-foreground mt-5">Profiel bijgewerkt op {formatDate(profile.confirmedAt)}.</p>
    <a className="action-arrow inline-flex font-bold text-accent mt-4" href={`/contact?type=opdrachtgever&profiel=${encodeURIComponent(`${profile.reference} — ${profile.title}`)}#contact`}>Bespreek deze professional<span className="sr-only">: {profile.reference}</span></a>
  </article>)}</div>;
}
