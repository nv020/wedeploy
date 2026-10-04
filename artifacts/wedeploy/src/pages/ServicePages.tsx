import { diensten, type DienstKey } from '@/data/diensten';
import { vakgebieden } from '@/data/vakgebieden';
import { PageLayout, Section, ActionLink, FAQ, ClosingCTA } from '@/components/PageLayout';
import { DirectoryItem, EditorialSection, NumberedSection, StatementSection } from '@/components/PageSections';
export function ServicePage({ serviceKey }: { serviceKey: DienstKey }) {
  const page = diensten[serviceKey];
  return <PageLayout label={page.label} title={page.title} intro={page.intro} variant={serviceKey === 'detachering' ? 'split' : 'editorial'} cta="Bespreek jouw personeelsvraag" ctaHref={`/contact?type=opdrachtgever&onderwerp=${encodeURIComponent(page.label)}#contact`} secondary={{label:'Ik zoek werk',href:'#voor-professionals'}}>
    <EditorialSection eyebrow="Voor opdrachtgevers" title={page.heading}>{page.paragraphs.map(text => <p key={text}>{text}</p>)}</EditorialSection>
    <NumberedSection eyebrow="Zo werken we" title="Van eerste gesprek tot start." items={page.steps.map(([title,body]) => ({title,body:<p>{body}</p>}))} layout="steps" />
    <div id={serviceKey === 'detachering' ? 'detavast' : undefined}><StatementSection eyebrow={serviceKey === 'detachering' ? 'Met uitzicht op vast' : serviceKey === 'werving' ? 'Exclusieve samenwerking' : 'Passende ervaring'} title={page.decisionTitle} dark={serviceKey === 'interim'}><p>{page.decision}</p><p>{page.agreements}</p></StatementSection></div>
    <Section><p className="eyebrow">Waarvoor we zoeken</p><h2 className="section-title">Onze vakgebieden</h2><p className="section-lead">We zoeken voor leidinggevende, coördinerende en ondersteunende functies. Bekijk de vakgebieden om te zien welke ervaring en werkzaamheden we daarbij bespreken.</p><div className="role-directory mt-7">{Object.values(vakgebieden).map(area => <DirectoryItem key={area.path} href={area.path} title={area.label} description={area.description} label="Bekijk dit vakgebied" />)}</div></Section>
    <div id="voor-professionals"><EditorialSection eyebrow="Voor professionals" title={page.candidateTitle} tone="white"><p>{page.candidate}</p><div className="flex flex-wrap gap-x-6 gap-y-2"><ActionLink href="/vacatures">Vacatures & opdrachten</ActionLink><ActionLink secondary href={serviceKey === 'interim' ? '/zzp-opdrachten' : '/vacatures#inschrijven'}>{serviceKey === 'interim' ? 'Deel jouw beschikbaarheid' : 'Laat jouw cv achter'}</ActionLink></div></EditorialSection></div>
    <FAQ items={[...page.faq]} /><ClosingCTA title="Wat heeft jouw team nodig?" text="Vertel welk werk er ligt. We bespreken het profiel, de mogelijkheden en de afspraken voor een gerichte zoektocht." label="Bespreek jouw personeelsvraag" href={`/contact?type=opdrachtgever&onderwerp=${encodeURIComponent(page.label)}#contact`} />
  </PageLayout>;
}
