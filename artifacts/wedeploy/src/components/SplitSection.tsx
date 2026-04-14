import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Briefcase, User } from "lucide-react";

const kandidaatItems = [
  "Eerlijk gesprek, geen verkooppraatje",
  "Volledige transparantie over het proces",
  "Persoonlijk contact, op jouw tempo",
  "Begeleiding van begin tot einde",
];

const opdrachtgeverItems = [
  "Zorgvuldige intake — geen aannames",
  "Voorselectie op kwaliteit, niet volume",
  "Heldere communicatie in elke fase",
  "Betrokkenheid na plaatsing",
];

const sideVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function SplitSection() {
  return (
    <section id="kandidaten" className="py-28 bg-card">
      <span id="opdrachtgevers" className="sr-only" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Voor iedereen</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight">Wat je kunt verwachten</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            variants={sideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-background rounded-2xl border border-border/60 p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                <User className="w-4 h-4 text-accent" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-accent">
                Voor kandidaten
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-7 leading-snug">
              Jouw volgende stap,<br />op jouw manier.
            </h3>
            <ul className="space-y-3.5 mb-6">
              {kandidaatItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground/70 mb-8 leading-relaxed">
              Actief binnen o.a. Facility Management, vastgoed en technische rollen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#vacatures"
                whileHover={{ y: -2, boxShadow: "0 8px 24px hsl(220 50% 18% / 0.15)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary px-6 py-3 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                Bekijk vacatures <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 8px 20px hsl(0 0% 0% / 0.06)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-border text-muted-foreground px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-colors duration-200"
              >
                Laat je gegevens achter
              </motion.a>
            </div>
          </motion.div>

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
                background:
                  "radial-gradient(circle at 80% 20%, hsl(205 85% 53%) 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-accent" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-accent">
                  Voor opdrachtgevers
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-7 leading-snug">
                De juiste kandidaat,<br />niet de snelste.
              </h3>
              <ul className="space-y-3.5 mb-9">
                {opdrachtgeverItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/75 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 8px 30px hsl(205 85% 53% / 0.4)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3 text-sm font-semibold hover:bg-accent/90 transition-colors duration-200"
              >
                Neem contact op <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
