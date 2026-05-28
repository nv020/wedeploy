import { Linkedin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Diensten", href: "#diensten" },
  { label: "Kandidaten", href: "#kandidaten" },
  { label: "Opdrachtgevers", href: "#opdrachtgevers" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Vacatures", href: "#vacatures" },
  { label: "Contact", href: "#contact" },
];

const diensten = [
  "Werving & Selectie",
  "Detachering",
  "Interim Oplossingen",
];

export function Footer() {
  return (
    <footer className="bg-primary/95 text-white/70 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center font-extrabold text-[19px] tracking-tight leading-none mb-4">
              <span className="text-accent">WE</span>
              <span className="text-white">DEPLOY</span>
            </a>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Werving &amp; selectie en detachering met aandacht.<br />
              Actief in Facility Management, Projectmanagement,
              Vastgoed en Technische rollen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-[11px] mb-5 uppercase tracking-widest">Navigatie</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="text-white font-semibold text-[11px] mb-5 uppercase tracking-widest">Diensten</h4>
            <ul className="space-y-3">
              {diensten.map((d) => (
                <li key={d}>
                  <a
                    href="#diensten"
                    className="text-[13px] text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-[11px] mb-5 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-[13px] text-white/55">
              <li>
                <a href="mailto:info@wedeploy.nl" className="hover:text-white transition-colors">
                  info@wedeploy.nl
                </a>
              </li>
              <li>
                <a href="tel:+31652345011" className="hover:text-white transition-colors">
                  +31 6 52345011
                </a>
              </li>
              <li>Nederland</li>
            </ul>

            <div className="mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] text-white/55 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/35">
          <p>&copy; {new Date().getFullYear()} Wedeploy. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white/60 transition-colors">Privacybeleid</a>
            <a href="#cookies" className="hover:text-white/60 transition-colors">Cookiebeleid</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
