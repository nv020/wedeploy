import { hiringPages, vacancyContact } from '@/data/hiring';
import { availableProfessionals } from '@/data/opportunities';
import { isProfessionalPublic } from '@/data/publication';
import { PageLayout, Section, ActionLink, ClosingCTA, FAQ } from '@/components/PageLayout';
import { DirectoryItem, EditorialSection, NumberedSection } from '@/components/PageSections';
import { HiringLinks, SearchAgreements } from '@/components/HiringSections';
import { AvailableProfessionals } from '@/components/AvailableProfessionals';
import NotFound from './not-found';

export function HiringPage({ slug }: { slug: string }) {
  const page = hiringPages.find(item => item.slug === slug);
  if (!page) return <NotFound />;
  const contact = vacancyContact(page.label);
  const hasProfiles = availableProfessionals.some(profile => isProfessionalPublic(profile) && (!page.sector || profile.sector === page.sector) && profile.engagementTypes?.includes('loondienst'));
  return <PageLayout className="hiring-page" label={page.label} title={page.label.replace('Facility Management', 'Facility\u00a0Management')} intro={page.intro} photo={page.image} cta="Bespreek jouw vacature" ctaHref={contact} secondary={{ label: 'Bekijk ons netwerk', href: '/professionals' }} breadcrumbs={[{ label: 'Werving & selectie', href: '/werving-selectie' }]}>
    <EditorialSection eyebrow="Een vaste collega" title={page.heading}>{page.paragraphs.map(text => <p key={text}>{text}</p>)}<a className="action-arrow" href="/over-ons">Onze achtergrond en aanpak</a></EditorialSection>
    <Section tone="white"><div className="hiring-section-heading"><p className="eyebrow">Wanneer schakel je ons in?</p><h2 className="section-title">Een gerichte zoektocht.</h2></div><div className="hiring-situations">{page.situations.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></Section>
    <Section><div className="hiring-section-heading"><p className="eyebrow">Functies en verantwoordelijkheden</p><h2 className="section-title">Voor wie we zoeken</h2></div><div className="role-directory">{page.roles.map(role => <DirectoryItem key={role.title} title={role.title} description={role.text} href={role.href} label={page.sector ? 'Meer over de functie' : 'Bekijk de mogelijkheden'} />)}</div></Section>
    <Section navy><div className="hiring-selection"><div><p className="eyebrow">Inhoudelijke selectie</p><h2 className="section-title">{page.selectionTitle}</h2><p>We maken onderscheid tussen wat iemand vanaf de start moet kunnen en wat binnen de functie te leren is. Iedere kandidaat spreken we persoonlijk over ervaring, motivatie en verwachtingen.</p></div><ul>{page.selection.map(item => <li key={item}>{item}</li>)}</ul></div></Section>
    <NumberedSection eyebrow="Samen aan de slag" title="Van vacature naar kennismaking." layout="rows" items={[
      { title: 'De functie scherpstellen', body: <p>We bespreken de taken, het team en de voorwaarden. Daarna ontvang je een voorstel voor de zoektocht en de vergoeding.</p> },
      { title: 'Zoeken en persoonlijk spreken', body: <p>We benaderen passende mensen, ook als zij niet actief solliciteren. In een intake bespreken we hun ervaring en wat zij zoeken in een volgende functie.</p> },
      { title: 'De match bespreken', body: <p>Bij wederzijdse interesse stemmen we een kennismaking af. We begeleiden het vervolg en de afspraken rond een mogelijke start.</p> }
    ]} />
    {hasProfiles && <Section className="hiring-profiles"><div className="hiring-section-heading"><p className="eyebrow">Uit ons netwerk</p><h2 className="section-title">Maak alvast kennis.</h2><p>Deze professionals zoeken een vaste functie. Vraag het volledige profiel op; we bevestigen de actuele beschikbaarheid en bespreken jouw vacature.</p></div><AvailableProfessionals limit={2} sectorFilter={page.sector} engagementFilter="loondienst" /><a className="action-arrow hiring-all-profiles" href="/professionals">Bekijk het volledige netwerk</a></Section>}
    <SearchAgreements topic={page.label} />
    <EditorialSection eyebrow={page.sector ? 'Breder binnen dit vakgebied' : 'Ons werkgebied'} title={page.contextTitle} tone="white"><p>{page.context}</p><div className="text-link-list">{page.areaPath && <a className="action-arrow" href={page.areaPath}>Het vakgebied en alle inzetvormen</a>}<a className="action-arrow" href="/detachering">Detachering & detavast</a><a className="action-arrow" href="/interim-zzp">Interim & zzp-bemiddeling</a></div></EditorialSection>
    <HiringLinks exclude={page.slug} />
    <FAQ items={page.faq} />
    <ClosingCTA title="Wie zoek je voor jouw organisatie?" text="Een korte omschrijving is genoeg. We bespreken de functie, jouw wensen en een aanpak voor de zoektocht." label="Bespreek jouw vacature" href={contact} />
  </PageLayout>;
}
