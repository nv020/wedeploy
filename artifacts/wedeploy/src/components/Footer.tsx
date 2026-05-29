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
  "Interim-oplossingen",
];

const expertises = [
  "Facility Management",
  "Projectmanagement",
  "Vastgoed- en Property Management",
  "Technische rollen",
];

export function Footer() {
  return (
    <footer className="bg-primary text-white/70 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-3">
            <a href="#home" className="flex items-center font-extrabold text-[24px] tracking-tight leading-none mb-5">
              <span className="text-accent">WE</span>
              <span className="text-white">DEPLOY</span>
            </a>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Wedeploy is een recruitment- en detacheringspartner voor organisaties en professionals
              die kiezen voor kwaliteit, aandacht en duurzame matches.
            </p>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/company/wedeploy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] text-white/55 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
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

          {/* Diensten & Expertise */}
          <div>
            <h4 className="text-white font-semibold text-[11px] mb-5 uppercase tracking-widest">Diensten</h4>
            <ul className="space-y-3">
              {diensten.map((d) => (
                <li key={d}>
                  <a href="#diensten" className="text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-[11px] mt-8 mb-5 uppercase tracking-widest">Expertise</h4>
            <ul className="space-y-3">
              {expertises.map((e) => (
                <li key={e}>
                  <a href="#diensten-expertise" className="text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                    {e}
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
                <a href="tel:0852128668" className="hover:text-white transition-colors">
                  085 212 8668
                </a>
              </li>
              <li className="leading-relaxed pt-1">
                Krijn Taconiskade 461<br />
                1087 HW Amsterdam<br />
                Nederland
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/35">
          <p>&copy; {new Date().getFullYear()} Wedeploy. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white/60 transition-colors">Privacybeleid</a>
            <a href="#cookies" className="hover:text-white/60 transition-colors">Cookiebeleid</a>
            <a href="#terms" className="hover:text-white/60 transition-colors">Gebruiksvoorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
