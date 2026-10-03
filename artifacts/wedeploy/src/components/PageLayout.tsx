import type { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const buttonClass = "inline-flex items-center justify-center gap-2 max-w-full rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white hover:bg-accent/90 transition-colors";
export function ActionLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <a href={href} className={secondary ? "inline-flex items-center gap-2 rounded-full border border-current/25 px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors" : buttonClass}>{children}</a>;
}
export function PageLayout({ label, title, intro, children, cta, ctaHref = "/contact", secondary }: { label: string; title: string; intro: string; children: ReactNode; cta?: string; ctaHref?: string; secondary?: { label: string; href: string } }) {
  return <div className="min-h-screen bg-background"><Header /><main id="main-content">
    <section className="page-intro bg-primary text-white relative overflow-hidden py-12 md:py-24">
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <nav aria-label="Broodkruimel" className="flex items-center gap-2 text-xs text-white/60 mb-9"><a href="/" className="hover:text-white">Home</a><span aria-hidden="true" className="text-white/30">/</span><span aria-current="page">{label}</span></nav>
        <p className="text-accent uppercase text-xs font-bold tracking-[2px] mb-5">{label}</p>
        <h1 className="page-title max-w-4xl font-extrabold leading-[1.1] tracking-tight">{title}</h1>
        <p className="max-w-2xl text-base md:text-lg text-white/75 leading-relaxed mt-6">{intro}</p>
        {cta && <div className="flex flex-wrap gap-3 mt-8"><ActionLink href={ctaHref}>{cta}</ActionLink>{secondary && <ActionLink href={secondary.href} secondary>{secondary.label}</ActionLink>}</div>}
      </div>
    </section>
    {children}
  </main><Footer /></div>;
}
export function Section({ children, id, navy = false }: { children: ReactNode; id?: string; navy?: boolean }) {
  return <section id={id} className={`py-12 md:py-20 ${navy ? "bg-primary text-white" : ""}`}><div className="container mx-auto px-4 md:px-6">{children}</div></section>;
}
export function ClosingCTA({ title = "Even kennismaken?", text = "Vertel ons wat je zoekt. Dan bespreken we hoe Wedeploy kan helpen.", label = "Bespreek jouw vraag", href = "/contact" }: { title?: string; text?: string; label?: string; href?: string }) {
  return <section className="closing-cta"><div className="container mx-auto px-4 md:px-6"><div className="flex flex-col md:flex-row md:items-center justify-between gap-7"><div><h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2><p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">{text}</p></div><div className="shrink-0"><ActionLink href={href}>{label}</ActionLink></div></div></div></section>;
}
export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return <Section><div className="max-w-3xl mx-auto"><h2 className="text-3xl font-bold text-primary mb-7">Goed om te weten</h2><div className="divide-y divide-border">{items.map(item => <details key={item.question} className="py-5 group"><summary className="cursor-pointer font-bold text-primary leading-relaxed">{item.question}</summary><p className="pt-3 text-muted-foreground leading-relaxed">{item.answer}</p></details>)}</div></div></Section>;
}
