import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import { sectorPages } from "@/data/sectors";

const navItems = [
  { label: "Voor opdrachtgevers", href: "/opdrachtgevers" },
  { label: "Ons netwerk", href: "/professionals" },
  { label: "Voor professionals", href: "/vacatures" },
  { label: "Expertise & diensten", href: "/expertise-diensten" },
  { label: "Over ons", href: "/over-ons" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Keep focus on the menu trigger when opened by touch. The links remain
    // in normal tab order, avoiding a misleading focus ring on the first item.
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key !== "Tab") return;
      const elements = [toggleRef.current, ...Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [])].filter((element): element is HTMLButtonElement | HTMLAnchorElement => element !== null);
      const first = elements[0];
      const last = elements.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const onResize = () => { if (window.innerWidth >= 1280) setIsOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      toggleRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <><a href="#main-content" className="skip-link">Naar de inhoud</a><header className="sticky top-0 z-50 w-full bg-primary">
      <div className="container mx-auto px-4 md:px-6 h-[68px] flex items-center justify-between">
        <a href="/" className="flex items-center font-extrabold text-[26px] leading-none" style={{ letterSpacing: "-0.3px" }}>
          <span className="text-accent">WE</span>
          <span className="text-white">DEPLOY</span>
        </a>

        <nav className="hidden xl:flex items-center gap-7 text-[13px] font-medium">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/55 hover:text-white transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-accent text-white px-6 py-2.5 text-[13px] font-bold hover:bg-accent/90 transition-colors duration-200"
          >
            Plan een gesprek
          </a>
        </div>

        <button
          ref={toggleRef}
          className="xl:hidden flex items-center gap-2 py-3 pl-3 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="text-xs font-semibold">{isOpen ? "Sluiten" : "Menu"}</span>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div ref={menuRef} id="mobile-menu" className="mobile-menu xl:hidden fixed top-[68px] inset-x-0 bg-background text-primary overflow-y-auto overscroll-contain">
          <div className="mobile-menu-inner flex flex-col gap-0 px-5 sm:px-8 pt-5 mx-auto max-w-3xl" style={{ paddingBottom: 0 }}>
          <nav aria-label="Mobiele navigatie" className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={location === item.href ? "page" : undefined}
              className={`mobile-nav-link block py-3 text-[clamp(21px,5.8vw,30px)] leading-tight font-bold tracking-tight transition-colors ${location === item.href ? "text-accent" : "text-primary hover:text-accent"}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          </nav>
          <nav aria-label="Vakgebieden" className="mt-7 mb-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-3">Vakgebieden</p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-1">
              {[
                { path: "/interim-projectmanagement", label: "Projectmanagement & PMO" },
                ...sectorPages.filter((item) => item.path !== "/interim-projectmanagement"),
              ].map((item, index) => (
                <a key={item.path} href={item.path} onClick={() => setIsOpen(false)} aria-current={location === item.path ? "page" : undefined} className={`flex items-center min-h-11 py-2 text-[14px] leading-snug font-medium hover:text-accent ${index === 0 ? "col-span-2 text-[16px] font-semibold" : ""} ${location === item.path ? "text-accent" : "text-primary"}`}>
                  <span className="[text-wrap:balance]">{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
          <div className="bg-primary text-white -mx-5 sm:-mx-8 px-5 sm:px-8 py-6 mt-1 flex-1" style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}>
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/55 mb-3">Contact</p>
            <a href="tel:+31852128668" onClick={() => setIsOpen(false)} className="inline-flex items-center min-h-11 text-[26px] font-semibold tracking-tight text-white hover:text-accent">085 212 8668</a>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mt-1">
              <a href="mailto:info@wedeploy.nl" onClick={() => setIsOpen(false)} className="inline-flex items-center min-h-11 text-sm text-white/75 hover:text-white">info@wedeploy.nl</a>
              <a href="/contact" onClick={() => setIsOpen(false)} className="inline-flex items-center min-h-11 text-sm font-semibold text-accent hover:text-white">Stuur een bericht</a>
            </div>
            <nav aria-label="Snel regelen" className="flex flex-wrap items-center gap-x-6 gap-y-1 mt-4">
              <a href="/vacatures?type=kandidaat#contact" onClick={() => setIsOpen(false)} className="inline-flex items-center justify-center rounded-full bg-accent text-white px-4 min-h-11 text-sm font-semibold hover:bg-accent/90">Stuur je cv</a>
              <a href="/veelgestelde-vragen" onClick={() => setIsOpen(false)} aria-current={location === "/veelgestelde-vragen" ? "page" : undefined} className={`inline-flex items-center min-h-11 text-[13px] hover:text-white ${location === "/veelgestelde-vragen" ? "text-accent" : "text-white/70"}`}>Veelgestelde vragen</a>
            </nav>
          </div>
          </div>
        </div>
      )}
    </header></>
  );
}
