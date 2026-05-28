import { motion } from "framer-motion";

export function Introductie() {
  return (
    <section className="py-24 bg-card border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent mb-7">Over ons</p>
          <h2 className="text-3xl md:text-[2.2rem] font-bold text-primary leading-[1.25] tracking-tight mb-7">
            Werving met aandacht voor de mens achter het cv.
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.8] max-w-2xl mx-auto">
            Wij geloven dat een succesvolle match verder gaat dan ervaring en beschikbaarheid.
            Daarom richten we ons op motivatie, persoonlijkheid, teamfit en langetermijnsucces —
            zodat organisaties professionals vinden die écht passen, en kandidaten kansen vinden
            die aansluiten bij hun ambities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
