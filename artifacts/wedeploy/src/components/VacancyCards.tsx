
import { vacancies } from "@/data/site";
export function VacancyCards({ limit, emptyVariant = "preview" }: { limit?: number; emptyVariant?: "preview" | "listing" }) {
  if (!vacancies.length && emptyVariant === "listing") return null;
  if (!vacancies.length) return <div className="open-application"><div><p className="eyebrow">Open inschrijving</p><h3>Een vaste functie of een tijdelijke opdracht.</h3><p>Stuur je cv en vertel wat je zoekt. We nemen contact met je op zodra er een passende mogelijkheid is om te bespreken.</p></div><a href="/vacatures#inschrijven" className="inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3.5 text-sm font-bold">Stuur jouw cv</a></div>;
  return <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{vacancies.slice(0, limit).map(job => <a key={job.slug} href={`/vacatures/${job.slug}`} className="content-card group"><p className="text-xs text-accent font-bold uppercase tracking-wide mb-4">{job.contract}</p><h3 className="text-xl font-bold text-primary mb-4">{job.title}</h3><p className="flex gap-2 items-center text-sm text-muted-foreground">{job.location} · {job.hours}</p><p className="text-sm text-muted-foreground leading-relaxed mt-4">{job.intro}</p><span className="text-accent font-bold text-sm flex items-center gap-2 mt-6">Bekijk de vacature </span></a>)}</div>;
}
