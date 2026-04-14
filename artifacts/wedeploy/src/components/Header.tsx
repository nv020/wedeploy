import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home", "Diensten", "Kandidaten", "Opdrachtgevers", "Vacatures", "Over ons", "Contact"
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-1 font-bold text-xl tracking-tight">
          <span className="text-accent">WE</span>
          <span className="text-primary">DEPLOY</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="default" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            Neem contact op
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b shadow-lg p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button variant="default" className="w-full mt-4 rounded-full">
            Neem contact op
          </Button>
        </div>
      )}
    </header>
  );
}
