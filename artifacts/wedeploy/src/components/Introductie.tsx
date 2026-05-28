import { motion } from "framer-motion";

export function Introductie() {
  return (
    <section className="py-28 overflow-hidden" style={{ background: "hsl(36 40% 93%)" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left — vertical label + big statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-5"
          >
            {/* Vertical label */}
            <div className="hidden md:flex flex-col items-center gap-2 pt-1 flex-shrink-0">
              <div className="w-px h-14 rounded-full bg-accent/40" />
              <span
                className="text-[9px] font-bold tracking-[3px] uppercase text-accent/60"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                Onze visie
              </span>
            </div>

            <div>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-primary leading-[1.15] tracking-tight">
                Een cv vertelt niet hoe iemand samenwerkt.
              </h2>
              <div className="mt-8 pt-8 border-t border-primary/10">
                <p
                  className="text-[17px] font-semibold text-primary/40 italic leading-snug tracking-tight"
                >
                  "Minder volume. Meer relevantie."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pt-12"
          >
            <p className="text-[16.5px] text-primary/65 leading-[1.85]">
              Daarom kijken wij verder dan ervaring en beschikbaarheid. We willen begrijpen wie
              iemand is, wat een team nodig heeft en wanneer een samenwerking op lange termijn
              echt klopt.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
