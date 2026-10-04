import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

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
    const activeLink = menuRef.current?.querySelector<HTMLAnchorElement>('a[aria-current="page"]');
    (activeLink ?? menuRef.current?.querySelector<HTMLAnchorElement>("a"))?.focus();
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
          <div className="mobile-menu-inner flex flex-col gap-6 px-5 sm:px-8 py-6 mx-auto max-w-3xl">
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
          <div className="mt-auto pt-4 pb-2">
          <p className="text-sm text-muted-foreground mb-4">Waarmee kunnen we je helpen?</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-accent text-white px-5 py-3 text-sm font-bold hover:bg-accent/90"
          >
            Contact opnemen
          </a>
          <a href="tel:+31852128668" onClick={() => setIsOpen(false)} className="inline-flex items-center min-h-11 text-sm font-semibold text-primary hover:text-accent">Bel 085 212 8668</a>
          </div>
          </div>
          </div>
        </div>
      )}
    </header></>
  );
}
