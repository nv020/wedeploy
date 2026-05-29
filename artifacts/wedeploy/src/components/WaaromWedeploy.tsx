import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Kwaliteit boven volume",
    desc: "Geen stapels profielen. Wij stellen alleen professionals voor die we zelf grondig hebben gesproken en met overtuiging aanbevelen.",
  },
  {
    num: "02",
    title: "Context boven keywords",
    desc: "We kijken naar de opdracht, het team en de organisatiefase — niet alleen naar een functietitel of beschikbaarheid.",
  },
  {
    num: "03",
    title: "Betrokken na de match",
    desc: "Een goede match moet ook landen. We blijven in contact met zowel professional als opdrachtgever — ook na de start.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

export function WaaromWedeploy() {
  return (
    <section
      id="aanpak"
      className="py-28 border-y border-border/30 relative overflow-hidden"
      style={{ background: "hsl(213 22% 97%)" }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none opacity-[0.035]"
        style={{
          background: "radial-gradient(circle at top right, hsl(205 85% 53%), transparent 70%)",
        }}
      />

      {/* Navigation anchors preserved for header links */}
      <span id="kandidaten" className="sr-only" />
      <span id="opdrachtgevers" className="sr-only" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — editorial text */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-8 bg-accent rounded-full" />
              <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">
                Onze aanpak
              </span>
            </div>

            <h2 className="text-4xl md:text-[2.8rem] font-bold text-primary leading-[1.08] tracking-tight mb-6">
              Een cv vertelt niet hoe iemand samenwerkt.
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
                Laten we matchen <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#vacatures"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2 rounded-full border border-border text-muted-foreground px-7 py-3.5 text-[13.5px] font-semibold hover:border-primary/40 hover:text-primary transition-colors duration-200"
              >
                Bekijk openstaande rollen
              </motion.a>
            </div>
          </motion.div>

          {/* Right — 3 pillar cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-4"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.num}
                variants={cardVariants}
                className={`group rounded-2xl p-8 flex gap-6 items-start transition-all duration-300 hover:shadow-[0_8px_32px_hsl(220_50%_18%/0.07)] ${
                  i === 0
                    ? "bg-primary border border-transparent"
                    : "bg-white border border-border/50 hover:border-accent/25"
                }`}
              >
                <span
                  className={`text-[11px] font-bold tracking-[2px] mt-1 flex-shrink-0 w-8 ${
                    i === 0 ? "text-accent" : "text-accent/60"
                  }`}
                >
                  {pillar.num}
                </span>
                <div>
                  <h3
                    className={`text-[16.5px] font-bold mb-2 leading-snug ${
                      i === 0
                        ? "text-white"
                        : "text-primary group-hover:text-accent transition-colors duration-200"
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className={`text-[14px] leading-relaxed ${
                      i === 0 ? "text-white/60" : "text-muted-foreground"
                    }`}
                  >
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
