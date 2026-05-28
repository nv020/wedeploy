import { motion } from "framer-motion";

export function Introductie() {
  return (
    <section className="py-24 border-y border-border/40" style={{ background: "hsl(36 30% 95%)" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — big statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent mb-6">Onze visie</p>
            <h2 className="text-3xl md:text-[2.4rem] font-bold text-primary leading-[1.2] tracking-tight">
              Goede recruitment draait niet om snelheid.<br className="hidden md:block" /> Het draait om de juiste fit.
            </h2>
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-[15px] text-muted-foreground/70 italic font-medium">
                "Minder volume. Meer relevantie."
              </p>
            </div>
          </motion.div>

          {/* Right — paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pt-14"
          >
            <p className="text-[16.5px] text-muted-foreground leading-[1.85]">
              Te vaak worden kandidaten voorgesteld voordat de functie, het team en de organisatie echt goed zijn
              begrepen. Wij geloven dat betere matches ontstaan door scherpere vragen, eerlijke gesprekken en
              echte aandacht voor de mens achter het cv.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
