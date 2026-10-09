
import { VacancyCards } from "./VacancyCards";
export function VacaturePreview() {
  return <section id="vacatures" className="vacancy-preview py-14 md:py-20 bg-primary text-white"><div className="container mx-auto px-4 md:px-6"><div className="preview-heading flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8"><div><p className="eyebrow">Voor professionals</p><h2 className="section-title">Toe aan een volgende stap?</h2><p className="text-white/75 leading-relaxed mt-4 max-w-xl">Bekijk onze mogelijkheden of laat ons weten welke functie of opdracht bij jou past.</p></div></div><VacancyCards limit={3} /><div className="home-preview-actions"><a href="/vacatures" className="action-arrow home-preview-more">Bekijk alle vacatures & opdrachten</a><p>Een vacature invullen? <a className="action-arrow" href="/contact?type=opdrachtgever#contact">Bespreek jouw vraag met ons</a></p></div></div></section>;
}
