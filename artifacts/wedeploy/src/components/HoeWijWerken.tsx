import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Kennismaking",
    desc: "We starten met de context, verwachtingen en echte behoefte.",
  },
  {
    number: "02",
    title: "Diepgaande intake",
    desc: "We brengen functie, team, cultuur en succescriteria scherp in beeld.",
  },
  {
    number: "03",
    title: "Zorgvuldige screening",
    desc: "We beoordelen ervaring, motivatie en fit voordat we iemand voorstellen.",
  },
  {
    number: "04",
    title: "Begeleiding",
    desc: "We begeleiden kandidaat en opdrachtgever tijdens het proces.",
  },
  {
    number: "05",
    title: "Duurzame plaatsing",
    desc: "We blijven betrokken na de start voor een goede landing.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function HoeWijWerken() {
  return (
    <section id="werkwijze" className="py-28 bg-card border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Werkwijze</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight mb-5">
              Hoe wij werken
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-sm">
              Een helder proces, zonder onnodige ruis.
            </p>
          </div>

          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="absolute left-[1.375rem] top-3 bottom-3 w-px bg-border hidden md:block" />

            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative flex gap-7 items-start"
                >
                  <div className="flex-shrink-0 z-10">
                    <div className="w-11 h-11 rounded-full bg-card border-2 border-accent flex items-center justify-center">
                      <span className="text-[11px] font-bold text-accent tabular-nums">{step.number}</span>
                    </div>
                  </div>
                  <div className="pt-2.5">
                    <h3 className="text-[15px] font-bold text-primary mb-1">{step.title}</h3>
                    <p className="text-[13.5px] text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
