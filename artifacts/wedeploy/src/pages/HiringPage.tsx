import { hiringPages, vacancyContact } from '@/data/hiring';
import { diensten } from '@/data/diensten';
import { PageLayout, Section, ActionLink, ClosingCTA, FAQ } from '@/components/PageLayout';
import { SearchAgreements } from '@/components/HiringSections';
import NotFound from './not-found';

type HiringSpecialty = (typeof hiringPages)[number];
const directions = {
  facility: { theme: 'facility', heading: 'Wie houdt jouw werkplek draaiende?', label: 'Facility Management', roles: 'Van facilitaire regie tot hospitality' },
  projecten: { theme: 'projects', heading: 'Breng je projecten vooruit.', label: 'Projectmanagement & PMO', roles: 'Van projectleiding tot projectbeheersing' },
  vastgoed: { theme: 'property', heading: 'Wie neemt de regie over jouw vastgoed?', label: 'Vastgoed & huisvesting', roles: 'Van portefeuille tot dagelijks beheer' },
  techniek: { theme: 'property', heading: 'Goed beheer begint bij de juiste vakkennis.', label: 'Technisch beheer', roles: 'De mensen achter goed technisch beheer' },
  hr: { theme: 'facility', heading: 'Een vaste collega voor jouw team.', label: 'HR & recruitment', roles: 'Functies binnen dit vakgebied' },
  cybersecurity: { theme: 'projects', heading: 'Een vaste collega voor jouw team.', label: 'Cybersecurity', roles: 'Functies binnen dit vakgebied' },
  city: { theme: 'city', heading: 'Een nieuwe collega in Amsterdam?', label: 'Amsterdam', roles: 'Waar kunnen we bij helpen?' },
} as const;

function RoleList({ page, heading }: { page: HiringSpecialty; heading: string }) {
  return <Section id="functies" tone="white" className="recruit-roles">
    <header><p className="eyebrow">Vaste functies</p><h2>{heading}</h2></header>
    <ul>{page.roles.map((role, index) => <li key={role.title}>
      <a href={role.href}><span className="recruit-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span><strong>{role.title}</strong><span>{role.text}</span></span><svg className="recruit-arrow" aria-hidden="true" viewBox="0 0 20 16"><path d="M2 8h15M11 2l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
    </li>)}</ul>
  </Section>;
}

function Selection({ page }: { page: HiringSpecialty }) {
  return <Section tone="wash" className="recruit-selection">
    <div className="recruit-split"><header><p className="eyebrow">Waar we op letten</p><h2>{page.selectionTitle}</h2></header>
      <ul>{page.selection.map(text => <li key={text}>{text}</li>)}</ul>
    </div>
  </Section>;
}

function Brief({ page }: { page: HiringSpecialty }) {
  return <Section className="recruit-brief">
    <div className="recruit-split"><header><p className="eyebrow">De vraag achter de vacature</p><h2>{page.heading}</h2></header>
      <div className="recruit-copy">{page.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
    </div>
  </Section>;
}

function Situations({ page }: { page: HiringSpecialty }) {
  return <Section tone="white" className="recruit-situations">
    <h2>Wanneer we kunnen helpen</h2>
    <div>{page.situations.map(([title, text], i) => <article key={title}><span className="recruit-number" aria-hidden="true">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
  </Section>;
}

export function HiringPage({ slug }: { slug: string }) {
  const page = hiringPages.find(item => item.slug === slug);
  if (!page) return <NotFound />;
  const direction = directions[page.sector ?? 'city'];
  const contact = vacancyContact(page.label);
  const roles = <RoleList page={page} heading={direction.roles} />;
  const brief = <Brief page={page} />;
  const selection = <Selection page={page} />;
  const situations = <Situations page={page} />;

  return <PageLayout className={`hiring-page recruit-page recruit-${direction.theme}`} label={page.label} title={direction.heading} intro={page.intro} photo={page.image} cta="Bespreek jouw vacature" ctaHref={contact} secondary={{ label: 'Bekijk de functies', href: '#functies' }} breadcrumbs={[{ label: 'Werving & selectie', href: '/werving-selectie' }]}>
    {direction.theme === 'facility' && <>{roles}{brief}{selection}</>}
    {direction.theme === 'projects' && <>{situations}{roles}{selection}{brief}</>}
    {direction.theme === 'property' && <>{brief}{selection}{roles}</>}
    {direction.theme === 'city' && <>{roles}{brief}{situations}{selection}</>}
    <Section navy className="recruit-next">
      <div className="recruit-split"><header><p className="eyebrow">Samenwerken</p><h2>{page.contextTitle}</h2></header>
        <div className="recruit-copy"><p>{page.context}</p><a className="action-arrow" href="/werving-selectie#kosten">Bekijk hoe we samenwerken en kosten afspreken</a>{page.areaPath && <a className="action-arrow" href={page.areaPath}>Bekijk het vakgebied en de inzetvormen</a>}</div>
      </div>
    </Section>
    <FAQ items={page.faq} />
    <ClosingCTA title="Vertel ons wie je zoekt." text="Een korte omschrijving is genoeg. We denken mee over de rol en de zoektocht." label="Bespreek jouw vacature" href={contact} />
  </PageLayout>;
}

export function HiringLanding() {
  const page = diensten.werving;
  return <PageLayout className="hiring-page recruit-page recruit-main" label={page.label} title="Een vaste collega die het werk begrijpt." intro="Werving & selectie voor projectmanagement, Facility Management en vastgoed. We kennen het werk van binnenuit en zoeken gericht naar iemand die bij de rol én het team past." cta="Bespreek jouw vacature" ctaHref={vacancyContact(page.label)} secondary={{ label: 'Verken de vakgebieden', href: '#vakgebieden' }}>
    <Section id="vakgebieden" tone="white" className="recruit-directory">
      <p className="eyebrow">Kies je vakgebied</p><h2>Voor wie zoek je versterking?</h2>
      <nav aria-label="Werving en selectie per vakgebied"><ul>
        {hiringPages.map((item, index) => <li key={item.slug}>
          <a href={'/' + item.slug}>
            <span className="recruit-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <strong>{directions[item.sector ?? 'city'].label}</strong>
            <span>{directions[item.sector ?? 'city'].roles}</span>
            <svg className="recruit-arrow" aria-hidden="true" viewBox="0 0 20 16"><path d="M2 8h15M11 2l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </li>)}
      </ul></nav>
    </Section>
    <Section className="recruit-brief">
      <div className="recruit-split"><header><p className="eyebrow">De vraag achter de vacature</p><h2>{page.heading}</h2></header>
        <div className="recruit-copy">{page.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
      </div>
    </Section>
    <Section navy className="recruit-process">
      <p className="eyebrow">Van eerste gesprek tot start</p><h2>Zo pakken we de zoektocht aan.</h2>
      <ol>{page.steps.map(([title, body], i) => <li key={title}><span className="recruit-number" aria-hidden="true">0{i + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
      <details><summary>{page.decisionTitle}</summary><p>{page.decision}</p><p>{page.agreements}</p></details>
    </Section>
    <SearchAgreements />
    <Section tone="wash" className="recruit-candidate"><div className="recruit-split"><div><p className="eyebrow">Ons netwerk</p><h2>Al een profiel in gedachten?</h2><p>Bekijk wie we op dit moment begeleiden. We bespreken graag of een professional past bij jouw vacature.</p></div><ActionLink href="/professionals">Bekijk de professionals</ActionLink></div></Section>
    <Section id="voor-professionals" tone="white" className="recruit-candidate"><div className="recruit-split"><div><p className="eyebrow">Voor professionals</p><h2>{page.candidateTitle}</h2><p>{page.candidate}</p></div><ActionLink href="/vacatures">Bekijk vacatures & opdrachten</ActionLink></div></Section>
    <FAQ items={[...page.faq]} />
    <ClosingCTA title="Wie heeft jouw team nodig?" text="Vertel wat er speelt. Samen maken we scherp wie je zoekt en hoe we die persoon kunnen vinden." label="Bespreek jouw vacature" href={vacancyContact(page.label)} />
  </PageLayout>;
}
