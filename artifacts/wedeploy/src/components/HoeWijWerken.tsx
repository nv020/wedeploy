import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Kennismaking",
    desc: "Een open gesprek — geen formulieren, maar een eerlijk verhaal.",
  },
  {
    number: "02",
    title: "Gerichte search",
    desc: "Actief zoeken in ons netwerk. Gericht, persoonlijk en zonder ruis.",
  },
  {
    number: "03",
    title: "Doordachte selectie",
    desc: "Alleen relevante kandidaten — met context, niet in bulk.",
  },
  {
    number: "04",
    title: "Begeleiding",
    desc: "Na de start blijven we betrokken. Bij kandidaat én opdrachtgever.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function HoeWijWerken() {
  return (
    <section id="hoe-wij-werken" className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-lg">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Werkwijze</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight">Hoe wij werken</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Van eerste contact tot langdurige samenwerking.
          </p>
        </div>

        <motion.div
          className="relative max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="absolute left-[1.375rem] top-3 bottom-3 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative flex gap-7 items-start"
              >
                <div className="flex-shrink-0 z-10">
                  <div className="w-11 h-11 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                    <span className="text-xs font-bold text-accent tabular-nums">{step.number}</span>
                  </div>
                </div>
                <div className="pt-2.5">
                  <h3 className="text-base font-bold text-primary mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
