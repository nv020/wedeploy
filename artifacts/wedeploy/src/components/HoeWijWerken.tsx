import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Intake",
    desc: "We nemen de tijd om de vraag achter de vraag te begrijpen — de context, het team, de organisatiefase en de succescriteria.",
    align: "left",
  },
  {
    number: "02",
    title: "Selectie",
    desc: "We beoordelen professionals op inhoud, motivatie en fit — niet op beschikbaarheid. Alleen wie we overtuigd aanbevelen, stellen we voor.",
    align: "right",
  },
  {
    number: "03",
    title: "Introductie",
    desc: "We introduceren een selecte groep — geen stapels profielen. Elke kandidaat heeft een duidelijke reden waarom we hem of haar voordragen.",
    align: "left",
  },
  {
    number: "04",
    title: "Match & opvolging",
    desc: "Na de start blijven we betrokken. We checken in bij zowel de professional als de opdrachtgever om een duurzame landing te borgen.",
    align: "right",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

export function HoeWijWerken() {
  return (
    <section id="werkwijze" className="py-28 bg-card border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Werkwijze</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Hoe wij werken
          </h2>
          <p className="text-[15.5px] text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Een helder proces. Geen onnodige ruis, geen beloftes die we niet waarmaken.
          </p>
        </div>

        {/* Alternating timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Center line — desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className={`relative flex items-center gap-0 ${
                  step.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row`}
              >
                {/* Content block — desktop */}
                <div
                  className={`flex-1 hidden md:block ${
                    step.align === "right" ? "pl-10 pr-0" : "pr-10 pl-0"
                  }`}
                >
                  <div
                    className={`bg-background border border-border/50 rounded-2xl p-7 ${
                      step.align === "right" ? "" : "ml-auto"
                    }`}
                    style={{ maxWidth: "340px", marginLeft: step.align === "left" ? "auto" : undefined }}
                  >
                    <h3 className="text-[16px] font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-[13.5px] text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot — desktop */}
                <div className="hidden md:flex flex-shrink-0 z-10 items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-accent bg-card flex items-center justify-center shadow-[0_0_0_6px_hsl(36_28%_97%)]">
                    <span className="text-[11px] font-bold text-accent tabular-nums">{step.number}</span>
                  </div>
                </div>

                {/* Spacer — desktop opposite side */}
                <div className="hidden md:block flex-1" />

                {/* Mobile layout */}
                <div className="md:hidden flex-shrink-0 mr-5">
                  <div className="w-10 h-10 rounded-full border-2 border-accent bg-card flex items-center justify-center">
                    <span className="text-[10px] font-bold text-accent tabular-nums">{step.number}</span>
                  </div>
                </div>
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
