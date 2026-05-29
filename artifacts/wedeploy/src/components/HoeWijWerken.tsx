import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Intake",
    desc: "We nemen de tijd om de vraag achter de vraag te begrijpen — de context, het team, de organisatiefase en de succescriteria.",
  },
  {
    number: "02",
    title: "Selectie",
    desc: "We beoordelen professionals op inhoud, motivatie en fit — niet op beschikbaarheid. Alleen wie we overtuigd aanbevelen, stellen we voor.",
  },
  {
    number: "03",
    title: "Introductie",
    desc: "We introduceren een selecte groep. Elke kandidaat heeft een duidelijke reden waarom we hem of haar voordragen — geen stapels profielen.",
  },
  {
    number: "04",
    title: "Match & opvolging",
    desc: "Na de start blijven we betrokken. Een goede match moet ook écht landen — we checken in bij zowel de professional als de opdrachtgever.",
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
    <section id="werkwijze" className="py-28 bg-card border-y border-border/40 overflow-hidden">
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

        {/* ── Desktop: horizontal 4-step layout ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="hidden md:grid md:grid-cols-4 relative"
        >
          {/* Connecting line */}
          <div
            className="absolute top-[38px] left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(to right, transparent, hsl(205 85% 53% / 0.35) 20%, hsl(205 85% 53% / 0.35) 80%, transparent)" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative px-5 pt-0 pb-0 flex flex-col items-center text-center"
            >
              {/* Large faded background number — shifted up, bleeds out of box */}
              <div
                className="absolute -top-8 left-0 right-0 text-center text-[130px] font-black leading-none select-none pointer-events-none"
                style={{ color: "hsl(220 50% 18% / 0.04)" }}
              >
                {step.number}
              </div>

              {/* Step dot */}
              <div className="relative z-10 mb-8">
                <div
                  className="w-[76px] h-[76px] rounded-full flex items-center justify-center"
                  style={{
                    background:
                      i === 0
                        ? "hsl(220 50% 18%)"
                        : "hsl(36 28% 97%)",
                    border: `2px solid ${i === 0 ? "hsl(220 50% 18%)" : "hsl(205 85% 53% / 0.5)"}`,
                    boxShadow: i === 0
                      ? "0 8px 24px hsl(220 50% 18% / 0.22)"
                      : "0 4px 16px hsl(205 85% 53% / 0.12)",
                  }}
                >
                  <span
                    className="text-[14px] font-black tabular-nums tracking-tight"
                    style={{ color: i === 0 ? "white" : "hsl(205 85% 53%)" }}
                  >
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="relative z-10 max-w-[200px]">
                <h3 className="text-[16px] font-bold text-primary mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Mobile: clean vertical layout ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="md:hidden flex flex-col gap-5"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="flex items-start gap-5 relative overflow-hidden bg-background border border-border/50 rounded-2xl p-6"
            >
              {/* Faded number background */}
              <div
                className="absolute -bottom-2 -right-1 text-[72px] font-black leading-none select-none pointer-events-none"
                style={{ color: "hsl(220 50% 18% / 0.05)" }}
              >
                {step.number}
              </div>

              {/* Number badge */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-accent bg-card flex items-center justify-center mt-0.5">
                <span className="text-[10px] font-bold text-accent tabular-nums">{step.number}</span>
              </div>

              <div className="relative z-10">
                <h3 className="text-[15px] font-bold text-primary mb-1.5">{step.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
