import { PageLayout, Section, ClosingCTA } from "@/components/PageLayout";
import { faqGroups } from "@/data/faq";

export function FAQPage() {
  return <PageLayout variant="editorial" hero="paper" label="Veelgestelde vragen" title="Helder antwoord." intro="Over onze diensten, samenwerken en jouw cv. Staat je vraag er niet bij? Neem contact met ons op." cta="Stel jouw vraag" ctaHref="/contact">
    {faqGroups.map(group => <Section key={group.title}><div className="faq-composition"><div><p className="eyebrow">Wedeploy</p><h2 className="faq-title">{group.title}</h2></div><div className="divide-y divide-border">{group.items.map(item => <details key={item.question} className="faq-item py-4 group"><summary className="cursor-pointer font-bold text-primary leading-snug">{item.question}</summary><p className="pt-3 text-muted-foreground leading-relaxed">{item.answer}</p></details>)}</div></div></Section>)}
    <Section tone="white"><p className="text-muted-foreground leading-relaxed">Meer over <a href="/expertise-diensten" className="font-bold text-accent">onze diensten</a>, <a href="/opdrachtgevers" className="font-bold text-accent">werken met Wedeploy</a>, <a href="/vacatures" className="font-bold text-accent">vacatures en cv insturen</a> of <a href="/privacy" className="font-bold text-accent">privacy</a>.</p></Section>
    <ClosingCTA title="Nog iets onduidelijk?" text="Stel ons jouw vraag. Dan bespreken we direct wat je wilt weten." label="Neem contact op" />
  </PageLayout>;
}
