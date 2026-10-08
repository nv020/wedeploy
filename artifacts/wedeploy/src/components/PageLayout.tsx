import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { pageImages, type PageImage } from "@/data/page-images";
import { FunctionRelated } from "./FunctionRelated";
import { KnowledgeRelated } from "./KnowledgeRelated";
export const buttonClass = "action-arrow page-action inline-flex items-center justify-center gap-2 max-w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors";
export function ActionLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean; arrow?: boolean }) {
  return <a href={href} className={secondary ? `${href.startsWith("tel:") || href.startsWith("mailto:") ? "" : "action-arrow "}secondary-action inline-flex items-center py-3 text-sm font-semibold` : buttonClass}>{children}</a>;
}
type IntroVariant = "editorial" | "split" | "quiet" | "navy";
export function PageLayout({ label, title, intro, children, cta, ctaHref = "/contact", secondary, variant = "editorial", hero = "type", photo: customPhoto, breadcrumbs = [] }: { label: string; title: string; intro: string; children: ReactNode; cta?: string; ctaHref?: string; secondary?: { label: string; href: string }; photo?: PageImage; breadcrumbs?: { label: string; href: string }[]; variant?: IntroVariant; hero?: "type" | "graphic" | "paper" | "line" | "contact" }) {
  const photo = customPhoto ?? pageImages[label];
  return <div className={`page-shell page-${variant} min-h-screen bg-background`}><Header /><main id="main-content">
    <section className={`agency-intro hero-${hero}${photo ? " hero-with-image" : ""}`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav aria-label="Broodkruimel" className="intro-breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span>{breadcrumbs.map(crumb => <span key={crumb.href}><a href={crumb.href}>{crumb.label}</a><span aria-hidden="true">/</span></span>)}<span aria-current="page">{label}</span></nav>
        <div className="intro-editorial-grid">
          <div className="intro-content"><h1 className="page-title">{title}</h1><p className="intro-description">{intro}</p>{cta && <div className="intro-actions"><ActionLink href={ctaHref}>{cta}</ActionLink>{secondary && <ActionLink href={secondary.href} secondary>{secondary.label}</ActionLink>}</div>}</div>
          {photo && <div className="hero-media"><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} fetchPriority="high" decoding="async" style={photo.position ? {objectPosition:photo.position} : undefined} /></div>}
        </div>
      </div>
    </section>
    {children}
  </main><Footer /></div>;
}
export function Section({ children, id, navy = false, tone = "plain", className = "" }: { children: ReactNode; id?: string; navy?: boolean; tone?: "plain" | "white" | "wash"; className?: string }) {
  return <section id={id} className={`agency-section ${navy ? "section-navy" : `section-${tone}`} ${className}`}><div className="container mx-auto px-4 md:px-6">{children}</div></section>;
}
export function ClosingCTA({ title = "Laten we kennismaken", text = "Vertel ons wat je zoekt. We bespreken hoe Wedeploy kan helpen.", label = "Neem contact op", href = "/contact", portrait }: { title?: string; text?: string; label?: string; href?: string; portrait?: { src: string; alt: string; name: string; role: string } }) {
  return <section className="agency-closing"><div className="container mx-auto px-4 md:px-6"><div className={`closing-composition${portrait ? " closing-with-portrait" : ""}`}>{portrait && <figure className="closing-portrait"><div><img src={portrait.src} alt={portrait.alt} width="800" height="591" loading="lazy" /></div><figcaption>{portrait.name}<span>{portrait.role}</span></figcaption></figure>}<div><h2>{title}</h2><p>{text}</p></div><div className="closing-actions"><ActionLink href={href}>{label}</ActionLink><ActionLink href="tel:+31852128668" secondary>Bel 085 212 8668</ActionLink></div></div></div></section>;
}
export function FAQ({ items, showMore = true }: { items: { question: string; answer: string }[]; showMore?: boolean }) {
  return <><FunctionRelated /><KnowledgeRelated /><Section tone="white" className="page-faq"><div className="faq-composition"><header><h2 className="faq-title">Veelgestelde vragen</h2><p>Praktische antwoorden voordat je contact opneemt.</p></header><div><div>{items.map(item => <details key={item.question} className="faq-item"><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>{showMore && <a href="/veelgestelde-vragen" className="faq-more action-arrow">Bekijk alle veelgestelde vragen</a>}</div></div></Section></>;
}
