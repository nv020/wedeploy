const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Expertisegebieden", href: "#diensten-expertise" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Vacatures", href: "#vacatures" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden pt-44 md:pt-56 pb-16">

      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 leading-none pointer-events-none">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="block w-full h-36 md:h-52">
          <ellipse cx="720" cy="0" rx="900" ry="160" fill="hsl(36 28% 97%)" />
        </svg>
      </div>

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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 pb-14 border-b border-white/10">
          <div>
            <a
              href="#home"
              className="inline-flex items-baseline text-[26px] font-extrabold tracking-tight leading-none mb-3"
            >
              <span className="text-accent">WE</span>
              <span className="text-white">DEPLOY</span>
            </a>
            <p className="text-[13.5px] leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.42)" }}>
              Recruitment &amp; detachering voor<br />
              Facility, Vastgoed, Projectmanagement<br />
              en Techniek.
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
            <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.32)" }}>
              Krijn Taconiskade 461 · Amsterdam
            </p>
          </div>
        </div>

        {/* Bottom: nav + legal */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.40)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.80)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.40)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-[11px]" style={{ color: "rgba(255,255,255,0.28)" }}>
            <span>&copy; {new Date().getFullYear()} Wedeploy</span>
            <a href="#privacy" className="hover:text-white/55 transition-colors">Privacy</a>
            <a href="#cookies" className="hover:text-white/55 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
