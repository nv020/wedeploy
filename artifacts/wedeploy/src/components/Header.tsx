import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-[68px] flex items-center justify-between">
        <a href="#home" className="flex items-center font-extrabold text-[19px] tracking-tight leading-none">
          <span className="text-accent">WE</span>
          <span className="text-primary">DEPLOY</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            variant="default"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-[13px] font-semibold px-6"
          >
            <a href="#contact">Neem contact op</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-[68px] left-0 w-full bg-background border-b shadow-lg p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-medium text-foreground py-2 border-b border-border/50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="default" className="w-full mt-2 rounded-full">
            <a href="#contact" onClick={() => setIsOpen(false)}>Neem contact op</a>
          </Button>
        </div>
      )}
    </header>
  );
}
