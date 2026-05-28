import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Briefcase, User } from "lucide-react";

const kandidaatItems = [
  "We luisteren voordat we adviseren",
  "Duidelijke en eerlijke communicatie",
  "Kansen die passen bij je ambitie",
  "Begeleiding tijdens het hele proces",
];

const opdrachtgeverItems = [
  "Scherpe intake van functie en organisatie",
  "Screening verder dan het cv",
  "Aandacht voor team- en cultuurfit",
  "Transparante communicatie",
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
        <div className="mb-14 text-center">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Voor iedereen</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight">Wat u kunt verwachten</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Kandidaten */}
          <motion.div
            variants={sideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-card rounded-2xl border border-border/50 p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                <User className="w-4 h-4 text-accent" />
              </div>
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-accent">Voor kandidaten</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-7 leading-snug">
              Jouw volgende stap,<br />met persoonlijke begeleiding.
            </h3>
            <ul className="space-y-3.5 mb-6">
              {kandidaatItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-[14px]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[12px] text-muted-foreground/60 italic mb-8">
              Actief binnen o.a. Facility Management, vastgoed en technische rollen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 8px 24px hsl(220 50% 18% / 0.15)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-[13.5px] font-semibold"
              >
                Upload je cv <ArrowRight className="w-4 h-4" />
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
            className="relative bg-primary rounded-2xl p-10 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background: "radial-gradient(circle at 80% 20%, hsl(205 85% 53%) 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-accent" />
                </div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-accent">Voor opdrachtgevers</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-7 leading-snug">
                De juiste professional,<br />niet het snelste cv.
              </h3>
              <ul className="space-y-3.5 mb-9">
                {opdrachtgeverItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/75 text-[14px]">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 8px 30px hsl(205 85% 53% / 0.4)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3 text-[13.5px] font-semibold hover:bg-accent/90 transition-colors duration-200"
              >
                Plan een kennismaking <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
