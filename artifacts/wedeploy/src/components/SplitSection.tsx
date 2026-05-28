import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const proofPoints = [
  {
    title: "Gerichte selectie",
    desc: "We stellen alleen mensen voor die we zelf al grondig hebben gesproken en die we met overtuiging durven aanbevelen.",
  },
  {
    title: "Eerlijke afstemming",
    desc: "Geen loze beloftes. Wij communiceren open over verwachtingen, fit en het proces — aan beide kanten.",
  },
  {
    title: "Begeleiding na de match",
    desc: "We blijven betrokken na de start. Een goede match moet ook binnen het team landen — we houden contact met beide kanten.",
  },
];

export function SplitSection() {
  return (
    <section id="kandidaten" className="py-0 bg-background overflow-hidden">
      <span id="opdrachtgevers" className="sr-only" />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        {/* Left — image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[380px] lg:h-auto order-2 lg:order-1"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
            alt="Moderne werkplek en kantooromgeving"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, transparent 60%, hsl(220 50% 12% / 0.08) 100%)",
            }}
          />
        </motion.div>

        {/* Right — content */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20 order-1 lg:order-2"
        >
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent mb-6">Onze aanpak</span>
          <h2 className="text-4xl md:text-[2.6rem] font-bold text-primary tracking-tight leading-[1.1] mb-5">
            Hoe wij het anders doen.
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-10 max-w-md">
            Wij sturen niet lukraak cv's door. We nemen eerst de tijd om de vraag achter de
            vraag te begrijpen. Pas daarna zoeken we naar professionals die inhoudelijk
            én persoonlijk passen.
          </p>

          <div className="flex flex-col gap-7 mb-10">
            {proofPoints.map((p, i) => (
              <div key={p.title} className="flex items-start gap-5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "hsl(213 25% 97%)" }}
                >
                  <span className="text-[10px] font-bold text-accent tabular-nums">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-primary mb-1">{p.title}</h3>
                  <p className="text-[13.5px] text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#contact"
              whileHover={{ y: -2, boxShadow: "0 8px 24px hsl(220 50% 18% / 0.15)" }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-7 py-3 text-[13.5px] font-bold"
            >
              Bespreek uw vraagstuk <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#vacatures"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-border text-muted-foreground px-7 py-3 text-[13.5px] font-semibold hover:border-primary hover:text-primary transition-colors duration-200"
            >
              Bekijk rollen
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
