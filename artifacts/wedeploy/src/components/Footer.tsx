import { Linkedin } from "lucide-react";

const navLinks = [
  "Home", "Diensten", "Kandidaten", "Opdrachtgevers", "Vacatures", "Over ons", "Contact"
];

export function Footer() {
  return (
    <footer className="bg-primary/95 text-white/70 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-1 font-bold text-xl tracking-tight mb-4">
              <span className="text-accent">WE</span>
              <span className="text-white">DEPLOY</span>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Wij verbinden professionals en organisaties met zorg, niet met volume.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wide">Navigatie</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="mailto:info@wedeploy.nl" className="hover:text-white transition-colors">
                  info@wedeploy.nl
                </a>
              </li>
              <li>
                <a href="tel:+31200000000" className="hover:text-white transition-colors">
                  +31 20 000 0000
                </a>
              </li>
              <li>Amsterdam, Nederland</li>
            </ul>

            <div className="mt-6">
              <a
                href="#linkedin"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Wedeploy. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white/70 transition-colors">Privacybeleid</a>
            <a href="#cookies" className="hover:text-white/70 transition-colors">Cookiebeleid</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
