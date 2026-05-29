import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Intake gesprek",
    desc: "We leren jouw organisatie, cultuur en de opdracht grondig kennen.",
  },
  {
    number: "02",
    title: "Gerichte search",
    desc: "Actieve aanpak: wij zoeken, benaderen en screenen persoonlijk.",
  },
  {
    number: "03",
    title: "Selectie & presentatie",
    desc: "Één of twee kandidaten die écht passen, met onze motivatie.",
  },
  {
    number: "04",
    title: "Match & nazorg",
    desc: "Na de start blijven wij betrokken voor een vliegende start.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function HoeWijWerken() {
  return (
    <section id="werkwijze" className="py-20 bg-primary overflow-hidden relative">
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
        <div className="mb-12">
          <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full border"
            style={{ background: "hsl(205 85% 53% / 0.12)", borderColor: "hsl(205 85% 53% / 0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-accent">Werkwijze</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Zo werken wij.
          </h2>
        </div>

        {/* Desktop: compact linked cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="hidden md:grid md:grid-cols-4 gap-3"
        >
          {steps.map((step) => (
            <motion.a
              key={step.number}
              href="#contact"
              variants={stepVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col p-6 rounded-2xl border transition-all duration-250 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(205 85% 53% / 0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-black tracking-[2.5px] text-accent">{step.number}</span>
                <ArrowRight
                  className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                  style={{ color: "hsl(205 85% 53%)" }}
                />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2 leading-snug">{step.title}</h3>
              <p className="text-[12.5px] leading-relaxed mt-auto" style={{ color: "rgba(255,255,255,0.50)" }}>
                {step.desc}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile: compact vertical */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="md:hidden flex flex-col gap-3"
        >
          {steps.map((step) => (
            <motion.a
              key={step.number}
              href="#contact"
              variants={stepVariants}
              className="flex items-start gap-4 rounded-xl p-5 border"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <span className="text-[11px] font-black tracking-[2px] text-accent mt-0.5 w-6 flex-shrink-0">{step.number}</span>
              <div>
                <h3 className="text-[15px] font-bold text-white mb-1">{step.title}</h3>
                <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>{step.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA underneath */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-8 py-3.5 text-[13.5px] font-bold hover:bg-accent/90 transition-colors duration-200"
          >
            Plan een gesprek <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
