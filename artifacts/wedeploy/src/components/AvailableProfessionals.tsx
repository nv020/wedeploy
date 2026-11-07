import { useEffect, useId, useState } from 'react';
import { availableProfessionals } from '@/data/opportunities';
import { isProfessionalPublic } from '@/data/publication';
import { matchingProfessionals, sectorLabels } from '@/data/profileOverview';
import type { ProfessionalSectorKey } from '@/data/publication';


type SearchRole = { id: string; title: string; area: string; description: string };

const hasProfileFact = (value?: string) => Boolean(value?.trim() && !/^(in overleg|by agreement)$/i.test(value.trim()));

export function AvailableProfessionals({ limit, sectorFilter, engagementFilter, searchRoles = [] }: { limit?: number; sectorFilter?: ProfessionalSectorKey; engagementFilter?: 'loondienst' | 'zzp'; searchRoles?: readonly SearchRole[] }) {
  const id = useId();
  const [interactive, setInteractive] = useState(false);
  const [sector, setSector] = useState('');
  const [engagement, setEngagement] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);
  useEffect(() => { setInteractive(true); }, []);
  const profiles = availableProfessionals.filter(profile => isProfessionalPublic(profile)
    && (!sectorFilter || profile.sector === sectorFilter)
    && (!engagementFilter || profile.engagementTypes?.includes(engagementFilter))).slice(0, limit);
  const overview = limit === undefined;
  const examples = limit === undefined ? [] : searchRoles.slice(0, Math.max(0, limit - profiles.length));
  const matches = matchingProfessionals(profiles, sector, engagement);
  // All public content is rendered in the initial HTML. JavaScript only changes visibility.
  const shown = new Set(matches.slice(0, interactive && overview ? visibleCount : undefined).map(profile => profile.reference));
  const sectors = [...new Set(profiles.map(profile => profile.sector))];

  if (!profiles.length && !examples.length) return <div className="availability-note"><h3>Wie past bij jouw opdracht?</h3><p>Ons netwerk omvat professionals voor vaste functies en tijdelijke opdrachten. Vertel wie je zoekt; we bespreken graag de mogelijkheden.</p><a className="action-arrow" href="/contact?type=opdrachtgever&onderwerp=Beschikbare%20professional#contact">Vraag naar beschikbaarheid</a></div>;

  return <div className="professional-overview">
    {overview && <div className="profile-controls">
      <div className="profile-filters">
        <label htmlFor={id + '-sector'}>Vakgebied<select id={id + '-sector'} disabled={!interactive} value={sector} onChange={event => { setSector(event.target.value); setVisibleCount(9); }}>
          <option value="">Alle vakgebieden</option>{sectors.map(value => <option key={value} value={value}>{sectorLabels[value]}</option>)}
        </select></label>
        <label htmlFor={id + '-engagement'}>Inzet<select id={id + '-engagement'} disabled={!interactive} value={engagement} onChange={event => { setEngagement(event.target.value); setVisibleCount(9); }}>
          <option value="">Alle vormen</option><option value="loondienst">Loondienst</option><option value="zzp">Zzp / interim</option>
        </select></label>
      </div>
      <p role="status" aria-live="polite">{matches.length} {matches.length === 1 ? 'professional' : 'professionals'}</p>
    </div>}
    <div className="role-directory available-directory" id={id + '-profiles'}>
      {profiles.map(profile => {
        const english = profile.language === 'en';
        const facts = [
          [english ? 'Availability' : 'Beschikbaarheid', profile.availabilityLabel],
          [english ? 'Hours' : 'Inzet', profile.hours],
          [english ? 'Location' : 'Regio', profile.region],
        ].filter(([, value]) => hasProfileFact(value));
        const labels = [profile.contract, ...(profile.labels ?? [])].filter(hasProfileFact);
        return <article key={profile.reference} lang={profile.language ?? 'nl'} className="available-profile" hidden={!shown.has(profile.reference)}>
        <h3>{profile.title}</h3>
        {labels.length > 0 && <ul className="profile-labels" aria-label={english ? 'Engagement and expertise' : 'Contractvorm en expertise'}>{labels.map(label => <li key={label}>{label}</li>)}</ul>}
        {facts.length > 0 && <dl className="profile-facts">
          {facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>}
        <p className="profile-preview">{profile.preview ?? profile.summary.split(/(?<=\.)\s+/).slice(0, 2).join(' ')}</p>
        <details className="profile-details">
          <summary className="profile-toggle action-arrow"><span className="profile-toggle-closed">{profile.language === 'en' ? 'View profile' : 'Bekijk profiel'}</span><span className="profile-toggle-open">{profile.language === 'en' ? 'Close profile' : 'Sluit profiel'}</span><span className="sr-only">: {profile.title}</span></summary>
          <div className="profile-details-body">
            <p>{profile.summary}</p>
            <ul>{profile.experience.map(item => <li key={item}>{item}</li>)}</ul>
            <a className="action-arrow profile-request" href={`/contact?type=opdrachtgever&profiel=${encodeURIComponent(`${profile.reference} — ${profile.title}`)}#contact`}>{profile.language === 'en' ? 'Request the full profile' : 'Vraag het volledige profiel op'}<span className="sr-only">: {profile.title}</span></a>
          </div>
        </details>
      </article>;
      })}
      {examples.map(role => <article key={role.id} className="available-profile profile-search-role">
        <h3>{role.title}</h3>
        <ul className="profile-labels" aria-label="Type en vakgebied"><li>Zoekprofiel</li><li>{role.area}</li></ul>
        <p className="profile-preview">{role.description}</p>
        <p className="profile-search-note">We zoeken iemand voor deze rol op aanvraag.</p>
        <a className="action-arrow profile-toggle" href={`/contact?type=opdrachtgever&onderwerp=${encodeURIComponent(role.title)}#contact`}>Bespreek deze rol</a>
      </article>)}
    </div>
    {overview && !matches.length && <div className="profile-empty"><p>Geen profiel gevonden met deze combinatie. Vertel ons wie je zoekt; we kijken ook in ons bredere netwerk.</p><button type="button" className="profile-reset" onClick={() => { setSector(''); setEngagement(''); setVisibleCount(9); }}>Wis filters</button><a className="action-arrow" href="/contact?type=opdrachtgever#contact">Neem contact op</a></div>}
    {overview && interactive && matches.length > visibleCount && <div className="profile-more"><p>{Math.min(visibleCount, matches.length)} van {matches.length} professionals</p><button type="button" className="agency-button" aria-controls={id + '-profiles'} onClick={() => setVisibleCount(count => count + 9)}>Toon meer</button></div>}
  </div>;
}
