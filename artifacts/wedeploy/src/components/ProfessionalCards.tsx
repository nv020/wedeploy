
import { professionalProfiles } from "@/data/site";
export function ProfessionalCards({ limit }: { limit?: number }) {
  return <div className="professional-list">{professionalProfiles.slice(0, limit).map(profile => <article key={profile.id} className="professional-row"><p className="text-xs font-bold text-accent uppercase tracking-wide mb-3">{profile.area}</p><h3 className="text-xl font-bold text-primary mb-3">{profile.title}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1">{profile.description}</p><a href={`/contact?type=opdrachtgever&profiel=${encodeURIComponent(profile.title)}`} className="text-sm text-accent font-bold flex gap-2 items-center mt-4">Bespreek dit profiel </a></article>)}</div>;
}
export function ProfessionalPreview() {
  return <section className="py-14 md:py-20 bg-white" id="professionals"><div className="container mx-auto px-4 md:px-6"><div className="flex flex-col md:flex-row justify-between md:items-end gap-5 mb-8"><div><p className="eyebrow">Ons netwerk</p><h2 className="section-title">Versterking uit ons netwerk.</h2><p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">Een indruk van de expertise in ons netwerk. Vraag ons naar een passende professional voor jouw team of project.</p></div><a href="/professionals" className="text-accent font-bold inline-flex items-center gap-2 shrink-0">Ons netwerk </a></div><ProfessionalCards limit={3} /></div></section>;
}
