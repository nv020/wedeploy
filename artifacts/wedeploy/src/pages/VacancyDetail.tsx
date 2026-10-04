import { PageLayout, Section, ActionLink } from '@/components/PageLayout';
import { ContactSection } from '@/components/ContactSection';
import { publicVacancies } from '@/data/opportunities';
import { isVacancyOpen } from '@/data/publication';
import NotFound from './not-found';
export function VacancyDetail({slug}: {slug:string}) {
  const job = publicVacancies.find(job => job.slug === slug);
  if (!job) return <NotFound />;
  const open = isVacancyOpen(job);
  return <PageLayout label={job.title} title={job.title} intro={job.intro} cta={open ? 'Reageer op deze vacature' : 'Bekijk andere vacatures'} ctaHref={open ? '#reageren' : '/vacatures'}>
    <Section><dl className="vacancy-facts">{[['Locatie',job.location],['Uren',job.hours],['Inzetvorm',job.contract],['Start',job.start],['Organisatie',job.employer],['Referentie',job.reference]].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="text-sm text-muted-foreground mt-5">Reageren vóór {new Intl.DateTimeFormat('nl-NL',{timeZone:'Europe/Amsterdam',dateStyle:'long',timeStyle:'short'}).format(new Date(job.deadline))}.</p></Section>
    <Section tone="white"><div className="vacancy-description"><div><h2 className="section-title">Wat ga je doen?</h2><ul>{job.responsibilities.map(item => <li key={item}>{item}</li>)}</ul></div><div><h2 className="section-title">Wat breng je mee?</h2><ul>{job.requirements.map(item => <li key={item}>{item}</li>)}</ul></div></div></Section>
    <Section><h2 className="section-title">Wat kun je verwachten?</h2><ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed mt-6">{job.benefits.map(item => <li key={item}>{item}</li>)}</ul><p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">Na jouw reactie nemen we contact met je op om een persoonlijke intake te plannen. We bespreken jouw ervaring, motivatie en wensen, naast de functie en voorwaarden. Een introductie bij de opdrachtgever gebeurt pas na jouw akkoord.</p></Section>
    {open ? <div id="reageren"><ContactSection compact lockRole defaultRole="kandidaat" heading="Reageer op deze vacature." description="Stuur jouw cv en een korte motivatie. De functietitel en referentie gaan automatisch mee met je reactie." context={job.title} vacancyId={job.reference} /></div> : <Section tone="white"><h2 className="section-title">Deze vacature is gesloten.</h2><p className="text-muted-foreground my-5">Reageren op deze vacature is niet meer mogelijk. Bekijk andere vacatures of laat jouw cv achter voor een volgende mogelijkheid.</p><ActionLink href="/vacatures">Bekijk vacatures & opdrachten</ActionLink></Section>}
  </PageLayout>;
}
