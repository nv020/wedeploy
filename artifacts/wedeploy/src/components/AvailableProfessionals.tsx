import { useEffect, useId, useState } from 'react';
import { availableProfessionals } from '@/data/opportunities';
import { isProfessionalPublic } from '@/data/publication';
import { matchingProfessionals, sectorLabels } from '@/data/profileOverview';

const formatDate = (date: string) => new Intl.DateTimeFormat('nl-NL', { dateStyle: 'long', timeZone: 'Europe/Amsterdam' }).format(new Date(date));

export function AvailableProfessionals({ limit }: { limit?: number }) {
  const id = useId();
  const [interactive, setInteractive] = useState(false);
  const [sector, setSector] = useState('');
  const [engagement, setEngagement] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  useEffect(() => { setInteractive(true); }, []);
  const profiles = availableProfessionals.filter(profile => isProfessionalPublic(profile)).slice(0, limit);
  const overview = limit === undefined;
  const matches = matchingProfessionals(profiles, sector, engagement);
  // All public content is rendered in the initial HTML. JavaScript only changes visibility.
  const shown = new Set(matches.slice(0, interactive && overview ? visibleCount : undefined).map(profile => profile.reference));
  const sectors = [...new Set(profiles.map(profile => profile.sector))];

  if (!profiles.length) return <div className="availability-note"><h3>Wie past bij jouw opdracht?</h3><p>Ons netwerk omvat professionals voor vaste functies en tijdelijke opdrachten. Vertel wie je zoekt; we bespreken graag de mogelijkheden.</p><a className="action-arrow" href="/contact?type=opdrachtgever&onderwerp=Beschikbare%20professional#contact">Vraag naar beschikbaarheid</a></div>;

  return <div className="professional-overview">
    {overview && <div className="profile-controls">
      <div className="profile-filters">
        <label htmlFor={id + '-sector'}>Vakgebied<select id={id + '-sector'} disabled={!interactive} value={sector} onChange={event => { setSector(event.target.value); setVisibleCount(6); }}>
          <option value="">Alle vakgebieden</option>{sectors.map(value => <option key={value} value={value}>{sectorLabels[value]}</option>)}
        </select></label>
        <label htmlFor={id + '-engagement'}>Inzet<select id={id + '-engagement'} disabled={!interactive} value={engagement} onChange={event => { setEngagement(event.target.value); setVisibleCount(6); }}>
          <option value="">Alle vormen</option><option value="loondienst">Loondienst</option><option value="zzp">Zzp / interim</option>
        </select></label>
      </div>
      <p role="status" aria-live="polite">{matches.length} {matches.length === 1 ? 'professional' : 'professionals'}</p>
    </div>}
    <div className="role-directory available-directory" id={id + '-profiles'}>
      {profiles.map(profile => <article key={profile.reference} className="available-profile" hidden={!shown.has(profile.reference)}>
        <h3>{profile.title}</h3>
        <ul className="profile-labels" aria-label="Contractvorm en expertise"><li>{profile.contract}</li>{profile.labels?.map(label => <li key={label}>{label}</li>)}</ul>
        <dl className="profile-facts">
          <div><dt>Beschikbaarheid</dt><dd>{profile.availabilityLabel ?? formatDate(profile.availableFrom)}</dd></div>
          <div><dt>Inzet</dt><dd>{profile.hours}</dd></div>
          <div><dt>Regio</dt><dd>{profile.region}</dd></div>
        </dl>
        <p className="profile-preview">{profile.preview ?? profile.summary.split(/(?<=\.)\s+/).slice(0, 2).join(' ')}</p>
        <details className="profile-details">
          <summary className="profile-toggle action-arrow"><span className="profile-toggle-closed">Bekijk profiel</span><span className="profile-toggle-open">Sluit profiel</span><span className="sr-only">: {profile.title}</span></summary>
          <div className="profile-details-body">
            <p>{profile.summary}</p>
            <ul>{profile.experience.map(item => <li key={item}>{item}</li>)}</ul>
            <p className="profile-updated">Bijgewerkt op <time dateTime={profile.confirmedAt}>{formatDate(profile.confirmedAt)}</time>.</p>
            <a className="action-arrow profile-request" href={`/contact?type=opdrachtgever&profiel=${encodeURIComponent(`${profile.reference} — ${profile.title}`)}#contact`}>Vraag het volledige profiel op<span className="sr-only">: {profile.title}</span></a>
          </div>
        </details>
      </article>)}
    </div>
    {overview && !matches.length && <div className="profile-empty"><p>Geen profiel gevonden met deze combinatie. Vertel ons wie je zoekt; we kijken ook in ons bredere netwerk.</p><button type="button" className="profile-reset" onClick={() => { setSector(''); setEngagement(''); setVisibleCount(6); }}>Wis filters</button><a className="action-arrow" href="/contact?type=opdrachtgever#contact">Neem contact op</a></div>}
    {overview && interactive && matches.length > visibleCount && <div className="profile-more"><p>{Math.min(visibleCount, matches.length)} van {matches.length} professionals</p><button type="button" className="agency-button" aria-controls={id + '-profiles'} onClick={() => setVisibleCount(count => count + 6)}>Toon meer</button></div>}
  </div>;
}
