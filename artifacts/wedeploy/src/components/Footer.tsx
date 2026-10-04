const navLinks = [
  { label: "Voor opdrachtgevers", href: "/opdrachtgevers" },
  { label: "Ons netwerk", href: "/professionals" },
  { label: "Voor professionals", href: "/vacatures" },
  { label: "Expertise & diensten", href: "/expertise-diensten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden pt-10 md:pt-20 pb-8">

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Top: wordmark + contact */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6 pb-6 border-b border-white/10">
          <div>
            <a
              href="/"
              className="inline-flex items-baseline text-[26px] font-extrabold leading-none mb-3"
              style={{ letterSpacing: "-0.3px" }}
            >
              <span className="text-accent">WE</span>
              <span className="text-white">DEPLOY</span>
            </a>
            <p className="text-sm font-bold leading-relaxed text-white max-w-xs mb-2">
              De juiste professionals. De beste matches.
            </p>
            <p className="text-[13.5px] leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.70)" }}>
              Kwaliteit boven kwantiteit. Voor vaste functies en tijdelijke opdrachten.
            </p>
          </div>

          <div className="flex flex-col gap-1.5 md:text-right">
            <a
              href="mailto:info@wedeploy.nl"
              className="text-[14px] font-semibold text-white/75 hover:text-white transition-colors duration-200"
            >
              info@wedeploy.nl
            </a>
            <a
              href="tel:0852128668"
              className="text-[14px] font-semibold text-white/75 hover:text-white transition-colors duration-200"
            >
              085 212 8668
            </a>
            <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>
              Krijn Taconiskade 461 · 1087 HW Amsterdam
            </p>
            <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.65)" }}>KvK 42072275</p>
          </div>
        </div>

        <details className="footer-landings border-b border-white/10 pb-5 mb-5">
          <summary className="cursor-pointer text-xs font-semibold text-white/75">Vakgebieden & inzet</summary>
          <nav aria-label="Vakgebieden en inzet" className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-xs text-white/70">
            <a href="/interim-projectmanagement">Projectmanagement & PMO</a><a href="/facility-management">Facility Management</a><a href="/vastgoed">Vastgoed & huisvesting</a><a href="/workplace-hospitality">Workplace & hospitality</a><a href="/management-leiding">Management & leiding</a><a href="/administratie-support">Administratie & support</a><a href="/techniek-installaties">Techniek & installaties</a><a href="/interim-professionals">Interim professionals</a><a href="/zzp-opdrachten">Zzp-opdrachten</a>
          </nav>
        </details>
        {/* Bottom: nav + legal */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-5 gap-y-3 md:flex md:flex-wrap md:gap-x-6 md:gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.70)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.80)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.70)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px]" style={{ color: "rgba(255,255,255,0.60)" }}>
            <span>&copy; {new Date().getFullYear()} Wedeploy</span>
            <a href="/privacy" className="hover:text-white/55 transition-colors">Privacy & cookies</a>
            <a href="/veelgestelde-vragen" className="hover:text-white/55 transition-colors">Veelgestelde vragen</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
