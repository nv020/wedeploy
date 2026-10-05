import { BrandLogo } from "@/components/BrandLogo";

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
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6 pb-6 border-b border-white/10">
          <div>
            <BrandLogo className="mb-4" />
            <p className="text-sm font-bold leading-relaxed text-white max-w-xs mb-2">
              De juiste professionals. De beste matches.
            </p>
            <p className="text-[13.5px] leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.70)" }}>
              Kwaliteit boven kwantiteit. Voor vaste functies en tijdelijke opdrachten.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5">
              <a href="/contact" className="action-arrow inline-flex items-center justify-center min-h-11 px-4 rounded-full bg-accent text-white text-[13px] font-semibold hover:bg-accent/90">Neem contact op</a>
              <a href="https://www.linkedin.com/company/wedeploy/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 min-h-11 text-[13px] font-medium text-white/80 hover:text-white" aria-label="Volg Wedeploy op LinkedIn (opent in een nieuw tabblad)">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Volg Wedeploy
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 md:text-left">
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
            <a href="/projectmanagement">Projectmanagement & PMO</a><a href="/facility-management">Facility Management</a><a href="/vastgoed">Vastgoed & huisvesting</a><a href="/technisch-beheer">Gebouwgebonden techniek</a><a href="/werving-selectie">Werving & selectie</a><a href="/detachering">Detachering & detavast</a><a href="/interim-zzp">Interim & zzp-bemiddeling</a><a href="/zzp-opdrachten">Zzp-opdrachten</a>
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
