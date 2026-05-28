import { motion } from "framer-motion";

const cards = [
  {
    title: "Context boven keywords",
    desc: "We kijken naar de opdracht, organisatiecultuur, fase van het project en het team — niet alleen naar het profiel.",
    num: "01",
  },
  {
    title: "Kwaliteit boven volume",
    desc: "Geen stapels profielen, maar zorgvuldig geselecteerde professionals die we zelf al grondig hebben gesproken.",
    num: "02",
  },
  {
    title: "Relaties boven transacties",
    desc: "We bouwen aan duurzame samenwerking met opdrachtgevers én professionals, ook na de plaatsing.",
    num: "03",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function Introductie() {
  return (
    <section
      className="py-28 border-y border-border/30"
      style={{ background: "hsl(213 25% 97%)" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent/40 rounded-full" />
            <span className="text-[10px] font-bold tracking-[3px] uppercase text-accent/70">Onze visie</span>
          </div>
          <h2 className="text-4xl md:text-[2.8rem] font-bold text-primary leading-[1.1] tracking-tight mb-5">
            Een cv vertelt niet hoe iemand samenwerkt.
          </h2>
          <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
            Daarom kijken wij verder dan functietitels, beschikbaarheid en werkervaring. We willen
            begrijpen wie iemand is, wat een team nodig heeft en wanneer een samenwerking op lange
            termijn echt klopt.
          </p>
          <p className="text-[13.5px] font-bold text-accent tracking-wide">
            Niet meer cv's. Betere matches.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              variants={cardVariants}
              className={`rounded-2xl p-9 flex flex-col gap-4 ${
                i === 0
                  ? "bg-primary text-white"
                  : "bg-white border border-border/50"
              }`}
            >
              <span className={`text-[10.5px] font-bold tracking-[2.5px] ${i === 0 ? "text-accent" : "text-accent/80"}`}>
                {card.num}
              </span>
              <h3 className={`text-[17px] font-bold leading-snug ${i === 0 ? "text-white" : "text-primary"}`}>
                {card.title}
              </h3>
              <p className={`text-[14px] leading-relaxed ${i === 0 ? "text-white/60" : "text-muted-foreground"}`}>
                {card.desc}
              </p>
              {i === 0 && (
                <div className="mt-auto pt-4">
                  <div className="w-8 h-0.5 rounded-full bg-accent/40" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
