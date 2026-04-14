import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Kennismaking en intake",
    desc: "We starten met een open gesprek. Geen standaardformulieren, maar een eerlijk gesprek over jouw situatie, verwachtingen en ambities.",
  },
  {
    number: "02",
    title: "Gerichte search",
    desc: "Op basis van de intake gaan we actief op zoek — binnen ons netwerk en daarbuiten. Gericht, persoonlijk en zonder ruis.",
  },
  {
    number: "03",
    title: "Selectie en afstemming",
    desc: "We presenteren alleen kandidaten die écht relevant zijn. Geen stapels cv's — maar een doordachte voorselectie met context.",
  },
  {
    number: "04",
    title: "Begeleiding tijdens plaatsing",
    desc: "Na de start laten we je niet los. We blijven betrokken bij zowel kandidaat als opdrachtgever gedurende de hele samenwerking.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HoeWijWerken() {
  return (
    <section id="hoe-wij-werken" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14 max-w-xl">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Werkwijze</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Hoe wij werken</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Een helder, persoonlijk proces — van eerste contact tot langdurige samenwerking.
          </p>
        </div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-18 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-accent bg-background flex items-center justify-center z-10">
                    <span className="text-sm font-bold text-accent">{step.number}</span>
                  </div>
                </div>
                <div className="pb-2 pt-2">
                  <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
