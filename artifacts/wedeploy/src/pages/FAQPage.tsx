import { PageLayout, Section, ClosingCTA } from "@/components/PageLayout";
import { faqGroups } from "@/data/faq";

export function FAQPage() {
  return <PageLayout variant="editorial" hero="paper" label="Veelgestelde vragen" title="Veelgestelde vragen" intro="Over onze diensten, samenwerken en jouw cv. Staat je vraag er niet bij? Neem contact met ons op." cta="Stel jouw vraag" ctaHref="/contact">
    <Section tone="white"><nav aria-label="Onderwerpen veelgestelde vragen" className="faq-topics">{faqGroups.map((group, index) => <a key={group.title} href={`#faq-${index}`} className="font-bold text-primary">{group.title}</a>)}</nav>{faqGroups.map((group, index) => <section key={group.title} id={`faq-${index}`} className="faq-composition faq-topic"><div><h2 className="faq-title">{group.title}</h2></div><div className="divide-y divide-border">{group.items.map(item => <details key={item.question} className="faq-item py-4 group"><summary className="cursor-pointer font-bold text-primary leading-snug">{item.question}</summary><p className="pt-3 text-muted-foreground leading-relaxed">{item.answer}</p></details>)}</div></section>)}</Section>
    <Section tone="white"><p className="text-muted-foreground leading-relaxed">Meer over <a href="/expertise-diensten" className="font-bold text-accent">onze diensten</a>, <a href="/opdrachtgevers" className="font-bold text-accent">werken met Wedeploy</a>, <a href="/vacatures" className="font-bold text-accent">vacatures en cv insturen</a> of <a href="/privacy" className="font-bold text-accent">privacy</a>.</p></Section>
    <ClosingCTA title="Nog iets onduidelijk?" text="Stel ons jouw vraag. Dan bespreken we direct wat je wilt weten." label="Neem contact op" />
  </PageLayout>;
}
