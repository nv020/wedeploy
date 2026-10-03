import { PageLayout, Section } from "@/components/PageLayout";
import { ContactSection } from "@/components/ContactSection";
import { vacancies } from "@/data/site";
import NotFound from "./not-found";
export function VacancyDetail({ slug }: { slug: string }) {
  const job = vacancies.find(vacancy => vacancy.slug === slug);
  if (!job) return <NotFound />;
  return <PageLayout label={job.title} title={job.title} intro={job.intro} cta="Reageer op deze vacature" ctaHref="#reageren">
    <Section><dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{[["Locatie", job.location], ["Uren", job.hours], ["Inzetvorm", job.contract], ["Reageren voor", new Intl.DateTimeFormat('nl-NL', { timeZone: 'Europe/Amsterdam', dateStyle: 'long' }).format(new Date(job.deadline))]].map(([label, value]) => <div key={label} className="content-card"><dt className="text-xs font-bold uppercase text-accent tracking-wide">{label}</dt><dd className="font-bold text-primary mt-2">{value}</dd></div>)}</dl><div className="grid md:grid-cols-2 gap-10 mt-12"><div><h2 className="section-title mb-6">Wat ga je doen?</h2><ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed">{job.responsibilities.map(item => <li key={item}>{item}</li>)}</ul></div><div><h2 className="section-title mb-6">Wat breng je mee?</h2><ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed">{job.requirements.map(item => <li key={item}>{item}</li>)}</ul></div></div></Section>
    <div id="reageren"><ContactSection defaultRole="kandidaat" heading="Interesse? We horen graag van je." context={job.title} vacancyId={job.slug} /></div>
  </PageLayout>;
}
