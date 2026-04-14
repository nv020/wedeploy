import { motion } from "framer-motion";

export function TrustIntro() {
  return (
    <section
      id="over-ons"
      className="py-20 text-center"
      style={{ background: "linear-gradient(180deg, hsl(210 30% 95%) 0%, hsl(220 15% 97%) 100%)" }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-6">Over ons</p>
          <h2 className="text-2xl md:text-[2rem] font-semibold text-primary leading-snug tracking-tight">
            Geen cv-schuivers. Wij investeren in eerlijke gesprekken en
            zorgvuldige matches — zodat professionals en organisaties
            verbindingen maken die duren.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
