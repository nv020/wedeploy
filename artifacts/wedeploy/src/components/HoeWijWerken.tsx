import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Kennismaking",
    desc: "We starten met de context, verwachtingen en echte behoefte.",
    align: "left",
  },
  {
    number: "02",
    title: "Diepgaande intake",
    desc: "We brengen functie, team, cultuur en succescriteria scherp in beeld.",
    align: "right",
  },
  {
    number: "03",
    title: "Zorgvuldige screening",
    desc: "We beoordelen ervaring, motivatie en fit voordat we iemand voorstellen.",
    align: "left",
  },
  {
    number: "04",
    title: "Begeleiding",
    desc: "We begeleiden kandidaat en opdrachtgever tijdens het proces.",
    align: "right",
  },
  {
    number: "05",
    title: "Duurzame plaatsing",
    desc: "We blijven betrokken na de start voor een goede landing.",
    align: "left",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

export function HoeWijWerken() {
  return (
    <section id="werkwijze" className="py-28 bg-card border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Werkwijze</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Hoe wij werken
          </h2>
          <p className="text-[16px] text-muted-foreground">Een helder proces, zonder onnodige ruis.</p>
        </div>

        {/* Alternating timeline — desktop only */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Center timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className={`relative flex items-center gap-0 ${
                  step.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row`}
              >
                {/* Content block */}
                <div
                  className={`flex-1 ${
                    step.align === "right" ? "md:text-right md:pl-12 pr-0" : "md:pr-12"
                  } pr-6`}
                >
                  <div
                    className={`bg-background border border-border/50 rounded-2xl p-7 inline-block w-full ${
                      step.align === "right" ? "md:ml-auto" : ""
                    }`}
                    style={{ maxWidth: "360px" }}
                  >
                    <h3 className="text-[16px] font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-[13.5px] text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot — desktop */}
                <div className="hidden md:flex flex-shrink-0 z-10 items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-accent bg-card flex items-center justify-center">
                    <span className="text-[11px] font-bold text-accent tabular-nums">{step.number}</span>
                  </div>
                </div>

                {/* Spacer — desktop right side */}
                <div className="hidden md:block flex-1" />

                {/* Mobile: dot on left */}
                <div className="md:hidden flex-shrink-0 mr-5">
                  <div className="w-10 h-10 rounded-full border-2 border-accent bg-card flex items-center justify-center">
                    <span className="text-[10px] font-bold text-accent tabular-nums">{step.number}</span>
                  </div>
                </div>
                {/* Mobile content */}
                <div className="md:hidden flex-1 bg-background border border-border/50 rounded-2xl p-6">
                  <h3 className="text-[15px] font-bold text-primary mb-1.5">{step.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
