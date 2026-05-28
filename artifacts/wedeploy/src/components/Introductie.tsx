import { motion } from "framer-motion";

export function Introductie() {
  return (
    <section
      className="py-24 border-y border-border/30"
      style={{ background: "hsl(213 30% 97%)" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-10 bg-accent/40 rounded-full" />
            <span className="text-[10px] font-bold tracking-[3px] uppercase text-accent/70">Onze overtuiging</span>
            <div className="h-px w-10 bg-accent/40 rounded-full" />
          </div>

          <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-primary leading-[1.15] tracking-tight">
            Wij geloven niet in CV's schuiven.
          </h2>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-primary/40 leading-[1.15] tracking-tight mt-1">
            Wij geloven in het bouwen van fundamenten.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
