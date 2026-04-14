import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-16 pb-20 lg:pt-0 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-xl z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary leading-[1.1]">
            Wij vinden mensen <br/>die blijven.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Wedeploy verbindt professionals en organisaties met zorg, niet met volume. Een persoonlijke aanpak voor duurzame samenwerkingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base">
              Voor opdrachtgevers
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-border hover:bg-accent hover:text-accent-foreground hover:border-accent h-14 px-8 text-base transition-all">
              Voor kandidaten
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-square max-w-[600px] mx-auto hidden lg:block"
        >
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="200" cy="200" r="160" fill="hsl(var(--secondary))" opacity="0.5" />
            <circle cx="200" cy="200" r="120" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
            
            <motion.path 
              d="M120 200 L170 150 L250 180 L280 250 L200 280 Z" 
              stroke="hsl(var(--accent))" 
              strokeWidth="2" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            <circle cx="120" cy="200" r="6" fill="hsl(var(--primary))" />
            <circle cx="170" cy="150" r="8" fill="hsl(var(--accent))" />
            <circle cx="250" cy="180" r="6" fill="hsl(var(--primary))" />
            <circle cx="280" cy="250" r="8" fill="hsl(var(--accent))" />
            <circle cx="200" cy="280" r="6" fill="hsl(var(--primary))" />
            
            <circle cx="200" cy="200" r="40" fill="hsl(var(--background))" />
            <circle cx="200" cy="200" r="30" fill="hsl(var(--primary))" opacity="0.1" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
