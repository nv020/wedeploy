const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Expertisegebieden", href: "#diensten-expertise" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Vacatures", href: "#vacatures" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden" style={{ paddingTop: "clamp(120px, 12vw, 192px)", paddingBottom: "64px" }}>

      {/* Curved top edge — cream arch dips down into navy footer */}
      <div className="absolute top-0 left-0 right-0 leading-none pointer-events-none">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="block w-full h-32 md:h-48">
          <ellipse cx="720" cy="0" rx="900" ry="160" fill="hsl(36 28% 97%)" />
        </svg>
      </div>

      {/* Dot grid accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Top: wordmark + tagline */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 pb-16 border-b border-white/10">
          <div>
            <a
              href="#home"
              className="inline-flex items-baseline font-extrabold tracking-tight leading-none mb-4"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
            >
              <span className="text-accent">WE</span>
              <span className="text-white">DEPLOY</span>
            </a>
            <p className="text-[15px] leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.42)" }}>
              Recruitment &amp; detachering voor<br />
              Facility, Vastgoed, Projectmanagement<br />
              en Techniek.
            </p>
          </div>

          {/* Contact block — right aligned */}
          <div className="flex flex-col gap-2 md:text-right">
            <a
              href="mailto:info@wedeploy.nl"
              className="text-[15px] font-semibold text-white/80 hover:text-white transition-colors duration-200"
            >
              info@wedeploy.nl
            </a>
            <a
              href="tel:0852128668"
              className="text-[15px] font-semibold text-white/80 hover:text-white transition-colors duration-200"
            >
              085 212 8668
            </a>
            <p className="text-[13px] mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
              Krijn Taconiskade 461 · Amsterdam
            </p>
          </div>
        </div>

        {/* Bottom: nav + legal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12.5px] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.42)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.42)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5 text-[11.5px]" style={{ color: "rgba(255,255,255,0.28)" }}>
            <span>&copy; {new Date().getFullYear()} Wedeploy</span>
            <a href="#privacy" className="hover:text-white/55 transition-colors">Privacy</a>
            <a href="#cookies" className="hover:text-white/55 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
