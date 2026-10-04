import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
export const buttonClass = "inline-flex items-center justify-center gap-2 max-w-full rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white hover:bg-accent/90 transition-colors";
export function ActionLink({ href, children, secondary = false, arrow = false }: { href: string; children: ReactNode; secondary?: boolean; arrow?: boolean }) {
  return <a href={href} className={secondary ? "secondary-action inline-flex items-center py-3 text-sm font-semibold" : buttonClass}>{children}{arrow && <span className="drawn-arrow" aria-hidden="true" />}</a>;
}
type IntroVariant = "editorial" | "split" | "quiet" | "navy";
export function PageLayout({ label, title, intro, children, cta, ctaHref = "/contact", secondary, variant = "editorial", hero = "type" }: { label: string; title: string; intro: string; children: ReactNode; cta?: string; ctaHref?: string; secondary?: { label: string; href: string }; variant?: IntroVariant; hero?: "type" | "graphic" | "paper" | "line" | "contact" }) {
  const actions = cta && <div className="intro-actions flex flex-wrap gap-x-6 gap-y-2 mt-7"><ActionLink href={ctaHref} arrow>{cta}</ActionLink>{secondary && <ActionLink href={secondary.href} secondary>{secondary.label}</ActionLink>}</div>;
  return <div className={`page-shell page-${variant} min-h-screen bg-background`}><Header /><main id="main-content">
    <section className={`agency-intro intro-${variant} hero-${hero}`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav aria-label="Broodkruimel" className="intro-breadcrumb flex flex-wrap items-center gap-2 text-xs mb-8"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{label}</span></nav>
        <div className="intro-editorial-grid">
          <div className="intro-title-wrap"><h1 className="page-title">{title}</h1></div>
          <div className="intro-copy"><p className="intro-description">{intro}</p>{actions}</div>
        </div>
      </div>
    </section>
    {children}
  </main><Footer /></div>;
}
export function Section({ children, id, navy = false, tone = "plain" }: { children: ReactNode; id?: string; navy?: boolean; tone?: "plain" | "white" | "wash" }) {
  return <section id={id} className={`agency-section ${navy ? "section-navy" : `section-${tone}`}`}><div className="container mx-auto px-4 md:px-6">{children}</div></section>;
}
export function ClosingCTA({ title = "Even kennismaken?", text = "Vertel ons wat je zoekt. Dan bespreken we hoe Wedeploy kan helpen.", label = "Bespreek jouw vraag", href = "/contact" }: { title?: string; text?: string; label?: string; href?: string }) {
  return <section className="agency-closing"><div className="container mx-auto px-4 md:px-6"><p className="eyebrow">Laten we praten</p><div className="closing-composition"><h2>{title}</h2><div><p className="text-muted-foreground leading-relaxed mb-6">{text}</p><div className="flex flex-wrap items-center gap-x-6 gap-y-2"><ActionLink href={href} arrow>{label}</ActionLink><ActionLink href="tel:+31852128668" secondary>Bel ons direct</ActionLink></div></div></div></div></section>;
}
export function FAQ({ items, showMore = true }: { items: { question: string; answer: string }[]; showMore?: boolean }) {
  return <Section tone="white"><div className="faq-composition"><div><p className="eyebrow">Goed om te weten</p><h2 className="faq-title">Veelgestelde vragen</h2></div><div><div className="divide-y divide-border">{items.map(item => <details key={item.question} className="faq-item py-4 group"><summary className="cursor-pointer font-bold text-primary leading-snug">{item.question}</summary><p className="pt-3 text-muted-foreground leading-relaxed">{item.answer}</p></details>)}</div>{showMore && <a href="/veelgestelde-vragen" className="inline-flex items-center min-h-11 mt-3 text-sm font-bold text-accent">Bekijk alle veelgestelde vragen</a>}</div></div></Section>;
}
