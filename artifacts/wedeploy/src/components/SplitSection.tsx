import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const kandidaatItems = [
  "Geen verkooppraatje — een eerlijk gesprek",
  "Transparantie over het proces en de voortgang",
  "Persoonlijk contact, niet via een ticketsysteem",
  "Jij bepaalt het tempo",
];

const opdrachtgeverItems = [
  "Zorgvuldige intake — geen aannames",
  "Voorselectie op kwaliteit, niet op kwantiteit",
  "Heldere communicatie in elke fase",
  "Betrokkenheid na plaatsing",
];

const sideVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function SplitSection() {
  return (
    <section id="kandidaten" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Voor iedereen</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Wat je van ons kunt verwachten</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            variants={sideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-background rounded-2xl border border-border/60 p-10"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full mb-6">
              Voor kandidaten
            </span>
            <h3 className="text-2xl font-bold text-primary mb-6 leading-snug">
              Jouw volgende stap, op jouw manier.
            </h3>
            <ul className="space-y-4 mb-8">
              {kandidaatItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              Bekijk vacatures <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={sideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-primary rounded-2xl p-10 text-white"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/20 px-3 py-1 rounded-full mb-6">
              Voor opdrachtgevers
            </span>
            <h3 className="text-2xl font-bold text-white mb-6 leading-snug">
              De juiste kandidaat, niet de snelste.
            </h3>
            <ul className="space-y-4 mb-8">
              {opdrachtgeverItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="rounded-full bg-accent text-white hover:bg-accent/90 transition-all">
              Neem contact op <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
