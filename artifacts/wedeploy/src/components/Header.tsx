import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Diensten", href: "#diensten" },
  { label: "Kandidaten", href: "#kandidaten" },
  { label: "Opdrachtgevers", href: "#opdrachtgevers" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Vacatures", href: "#vacatures" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary">
      <div className="container mx-auto px-4 md:px-6 h-[68px] flex items-center justify-between">
        <a href="#home" className="flex items-center font-extrabold text-[26px] tracking-tight leading-none">
          <span className="text-accent">WE</span>
          <span className="text-white">DEPLOY</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium">
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

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent text-white px-6 py-2.5 text-[13px] font-bold hover:bg-accent/90 transition-colors duration-200"
          >
            Plan een gesprek
          </a>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-[68px] left-0 w-full bg-primary border-t border-white/10 shadow-lg p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-medium text-white/70 py-2 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3 text-[14px] font-bold"
          >
            Plan een gesprek
          </a>
        </div>
      )}
    </header>
  );
}
