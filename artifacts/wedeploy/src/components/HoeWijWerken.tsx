import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Intake gesprek",
    desc: "Wij leren jouw organisatie, cultuur en de opdracht grondig kennen — de vraag achter de vraag.",
  },
  {
    number: "02",
    title: "Gerichte search",
    desc: "Actieve aanpak: wij zoeken, benaderen en screenen geschikte kandidaten persoonlijk.",
  },
  {
    number: "03",
    title: "Selectie & presentatie",
    desc: "Één of twee kandidaten die écht passen — inclusief onze motivatie waarom.",
  },
  {
    number: "04",
    title: "Match & nazorg",
    desc: "Na de start blijven wij betrokken voor een vliegende start en duurzame samenwerking.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

export function HoeWijWerken() {
  return (
    <section id="werkwijze" className="py-28 bg-primary overflow-hidden relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full border"
            style={{ background: "hsl(205 85% 53% / 0.12)", borderColor: "hsl(205 85% 53% / 0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-accent">Werkwijze</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Zo werken wij.
          </h2>
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
            className="absolute left-[12.5%] right-[12.5%] h-px"
            style={{
              top: "40px",
              background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent)",
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative px-5 flex flex-col items-center text-center"
            >
              {/* Ghost number */}
              <div
                className="absolute -top-8 left-0 right-0 text-center text-[130px] font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.03)" }}
              >
                {step.number}
              </div>

              {/* Accent circle with ring glow */}
              <div className="relative z-10 mb-8">
                <div
                  className="w-[52px] h-[52px] rounded-full flex items-center justify-center bg-accent"
                  style={{
                    boxShadow: i === 0
                      ? "0 0 0 6px hsl(220 50% 18%), 0 0 0 8px hsl(205 85% 53% / 0.35), 0 8px 24px hsl(205 85% 53% / 0.30)"
                      : "0 0 0 6px hsl(220 50% 18%), 0 0 0 7px rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="text-[13px] font-black text-white tabular-nums">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-[200px]">
                <h3 className="text-[16px] font-bold text-white mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
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
          className="md:hidden flex flex-col gap-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="flex items-start gap-5 relative overflow-hidden rounded-2xl p-6 border"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center mt-0.5">
                <span className="text-[10px] font-bold text-white tabular-nums">{step.number}</span>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-white mb-1.5">{step.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
