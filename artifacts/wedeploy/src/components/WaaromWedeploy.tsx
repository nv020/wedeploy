import { motion } from "framer-motion";


const pillars = [
  {
    num: "01",
    title: "Kwaliteit boven volume",
    desc: "Geen stapels profielen. Wij stellen alleen professionals voor die we zelf grondig hebben gesproken en met overtuiging aanbevelen.",
  },
  {
    num: "02",
    title: "Het werk en het team",
    desc: "We kijken naar de opdracht, het team en wat iemand moet bereiken. Ervaring én samenwerking tellen mee.",
  },
  {
    num: "03",
    title: "Betrokken na de match",
    desc: "Een goede match moet ook landen. We blijven in contact met zowel professional als opdrachtgever — ook na de start.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

export function WaaromWedeploy() {
  return (
    <section
      id="aanpak"
      className="pt-4 pb-28 bg-background relative overflow-hidden"
    >
      {/* Navigation anchors for header links */}
      <span id="kandidaten" className="sr-only" />
      <span id="opdrachtgevers" className="sr-only" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — editorial text */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-1.5 rounded-full border"
              style={{ background: "hsl(205 85% 53% / 0.08)", borderColor: "hsl(205 85% 53% / 0.28)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              <span className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-accent">Onze aanpak</span>
            </div>

            <h2 className="text-4xl md:text-[2.8rem] font-bold text-primary leading-[1.08] tracking-tight mb-6">
              Een cv vertelt niet hoe iemand <span className="text-accent">samenwerkt.</span>
            </h2>

            <p className="text-[16px] text-muted-foreground leading-[1.85] mb-4 max-w-[430px]">
              Daarom kijken wij verder dan functietitels en beschikbaarheid. We willen
              begrijpen wie iemand is, wat een team nodig heeft en wanneer een samenwerking
              op lange termijn écht klopt.
            </p>

            <p className="text-[13.5px] font-bold text-accent tracking-wide mb-10">
              Niet meer cv's. Betere matches.
            </p>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 10px 28px hsl(220 50% 18% / 0.18)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-7 py-3.5 text-[13.5px] font-bold"
              >
                Laten we matchen
              </motion.a>
              <motion.a
                href="/vacatures"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2 rounded-full border border-border text-muted-foreground px-7 py-3.5 text-[13.5px] font-semibold hover:border-primary/40 hover:text-primary transition-colors duration-200"
              >
                Bekijk jouw mogelijkheden
              </motion.a>
            </div>
          </motion.div>

          {/* Right — 3 numbered white cards */}
          <motion.div
            variants={stagger}
            initial={false}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-4 pt-2"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.num}
                variants={cardVariants}
                className="group border-t border-border py-6 flex gap-4 items-start"
              >
                <span className="text-[12px] font-black tracking-[2px] text-accent mt-0.5 flex-shrink-0 w-8">
                  {pillar.num}
                </span>
                <div>
                  <h3 className="text-[16.5px] font-bold text-primary mb-2 leading-snug group-hover:text-accent transition-colors duration-200">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
