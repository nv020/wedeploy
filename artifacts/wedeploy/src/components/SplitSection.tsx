import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Briefcase, User } from "lucide-react";

const kandidaatItems = [
  {
    label: "Grondige voorselectie",
    detail: "We presenteren je alleen bij rollen die écht bij je passen — qua niveau, sector en ambitie.",
  },
  {
    label: "Sectorkennis die werkt",
    detail: "We kennen facility management en vastgoed van binnenuit. Geen generalist die jouw cv snel doorleest.",
  },
  {
    label: "Actieve nazorg na plaatsing",
    detail: "Onze begeleiding stopt niet bij de handtekening. We blijven in contact en zijn er als het nodig is.",
  },
  {
    label: "Eerlijk contact — altijd",
    detail: "Je spreekt direct met een ervaren consultant, niet met een junior die jouw dossier beheert.",
  },
];

const opdrachtgeverItems = [
  {
    label: "Scherpe intake als fundament",
    detail: "We starten met een diepgaand gesprek over uw organisatie, team en cultuur — niet een formulier.",
  },
  {
    label: "Screening verder dan het cv",
    detail: "Motivatie, werkstijl en teamfit zijn minstens zo belangrijk als een lijst met ervaringen.",
  },
  {
    label: "Specialistische marktkijk",
    detail: "Ruim 20 jaar in facility, vastgoed en techniek. We weten wie er beschikbaar is — en wie er écht bij past.",
  },
  {
    label: "Duurzame nazorg inbegrepen",
    detail: "Na de plaatsing blijven we betrokken. Zo borgen we dat een match ook op de lange termijn standhoudt.",
  },
];

const sideVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function SplitSection() {
  return (
    <section id="kandidaten" className="py-28 bg-background">
      <span id="opdrachtgevers" className="sr-only" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">De visie achter Wedeploy</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight max-w-2xl">
            Hoe wij het anders doen.
          </h2>
          <p className="mt-4 text-[15.5px] text-muted-foreground leading-relaxed max-w-2xl">
            Wedeploy is ontstaan vanuit een duidelijke ambitie: de standaard in recruitment en
            detachering verhogen. In een dynamische markt zien we dat de behoefte aan échte
            inhoudelijke diepgang groter is dan ooit. Wij geloven dat een succesvolle match verder
            gaat dan het alleen delen van een profiel. Het vraagt om een partner die de taal van de
            werkvloer spreekt, de complexiteit van een project overziet en investeert in een
            duurzame relatie. Bij Wedeploy bouwen we aan partnerships voor de lange termijn —
            voor kandidaten én voor opdrachtgevers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Kandidaten */}
          <motion.div
            variants={sideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-card rounded-2xl border border-border/50 p-10 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                <User className="w-4 h-4 text-accent" />
              </div>
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-accent">Voor kandidaten</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3 leading-snug">
              Jouw volgende stap,<br />met echte begeleiding.
            </h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed mb-7">
              Geen snelle doorplaatsing. We nemen de tijd om jouw verhaal te begrijpen — je ambities,
              je voorkeuren en wat je écht verder wil brengen.
            </p>
            <ul className="space-y-5 mb-8 flex-1">
              {kandidaatItems.map((item) => (
                <li key={item.label} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-[17px] h-[17px] text-accent flex-shrink-0 mt-[2px]" />
                  <div>
                    <span className="block text-[13.5px] font-semibold text-primary leading-snug">{item.label}</span>
                    <span className="block text-[13px] text-muted-foreground leading-relaxed mt-0.5">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 8px 24px hsl(220 50% 18% / 0.15)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-[13.5px] font-semibold"
              >
                Vertrouwelijk kennismaken <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#vacatures"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-border text-muted-foreground px-6 py-3 text-[13.5px] font-semibold hover:border-primary hover:text-primary transition-colors duration-200"
              >
                Bekijk vacatures
              </motion.a>
            </div>
          </motion.div>

          {/* Opdrachtgevers */}
          <motion.div
            variants={sideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative bg-primary rounded-2xl p-10 overflow-hidden flex flex-col"
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background: "radial-gradient(circle at 80% 20%, hsl(205 85% 53%) 0%, transparent 60%)",
              }}
            />
            <div className="relative flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-accent" />
                </div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-accent">Voor opdrachtgevers</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                De juiste professional,<br />niet het snelste cv.
              </h3>
              <p className="text-[14px] text-white/65 leading-relaxed mb-7">
                We sturen geen stapel cv's. We sturen één of twee kandidaten die we zelf al grondig
                hebben gesproken en die we met overtuiging durven aanbevelen.
              </p>
              <ul className="space-y-5 mb-8 flex-1">
                {opdrachtgeverItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-[17px] h-[17px] text-accent flex-shrink-0 mt-[2px]" />
                    <div>
                      <span className="block text-[13.5px] font-semibold text-white leading-snug">{item.label}</span>
                      <span className="block text-[13px] text-white/60 leading-relaxed mt-0.5">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 8px 30px hsl(205 85% 53% / 0.4)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3 text-[13.5px] font-semibold hover:bg-accent/90 transition-colors duration-200 mt-auto"
              >
                Sparren over capaciteit <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
