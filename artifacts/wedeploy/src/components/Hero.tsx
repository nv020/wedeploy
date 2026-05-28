import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const badges = [
  { label: "Facility Manager geplaatst", sub: "Amsterdam", top: "top-[14%]", left: "left-[-32px]" },
  { label: "Projectleider Huisvesting", sub: "Utrecht", top: "top-[46%]", left: "left-[-40px]" },
  { label: "Interim opdracht ingevuld", sub: "Rotterdam", top: "top-[74%]", left: "left-[-28px]" },
];

export function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-68px)] flex items-center bg-background">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-7">
              <div className="w-7 h-0.5 rounded-full bg-accent" />
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-accent">
                Werving &amp; selectie · Detachering
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-[3.4rem] font-extrabold leading-[1.06] text-primary tracking-tight mb-5"
            >
              Duurzame matches in Facility Management, Vastgoed &amp; Techniek.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[16px] leading-[1.78] text-muted-foreground mb-9 max-w-[480px]"
            >
              We verbinden organisaties met professionals die niet alleen passen op papier,
              maar ook in de praktijk: bij het team, de opdracht en de fase waarin een
              organisatie zich bevindt.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-5">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 12px 32px hsl(220 50% 18% / 0.18)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-8 py-[15px] text-[14.5px] font-bold"
              >
                Bespreek uw vraagstuk <span>→</span>
              </motion.a>
              <motion.a
                href="#kandidaten"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent text-primary px-8 py-[15px] text-[14.5px] font-semibold hover:border-primary/40 transition-colors duration-200"
              >
                Voor professionals
              </motion.a>
            </motion.div>

            <motion.p variants={fadeUp} className="text-[12.5px] text-muted-foreground/55 mb-9">
              Voor interim, project- en vaste rollen binnen Facility Management, Vastgoed en Techniek.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 text-[12px] text-muted-foreground/50 font-medium">
              {["Persoonlijke aanpak", "Kwaliteit boven volume", "Begeleiding na plaatsing"].map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {i > 0 && <span className="text-border text-base leading-none">·</span>}
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image with floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[500px] lg:h-[580px] hidden lg:block"
          >
            {/* Sand accent block */}
            <div
              className="absolute top-[-16px] right-[-16px] w-[85%] h-full rounded-2xl"
              style={{ background: "hsl(36 35% 92%)" }}
            />

            {/* Photo — modern workplace / project context */}
            <div className="relative z-10 w-[95%] h-full rounded-[20px] overflow-hidden shadow-[0_24px_64px_hsl(220_50%_18%/0.10)]">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80"
                alt="Professionals in overleg over een project"
                className="w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(160deg, transparent 50%, hsl(220 50% 12% / 0.18) 100%)" }}
              />
            </div>

            {/* Floating status badges */}
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.7 + i * 0.15 }}
                className={`absolute ${badge.top} ${badge.left} z-20 bg-white rounded-xl px-4 py-2.5 shadow-[0_8px_28px_hsl(220_50%_18%/0.10)] flex items-center gap-2.5 min-w-[210px]`}
              >
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <div>
                  <div className="text-[12.5px] font-bold text-primary leading-tight">{badge.label}</div>
                  <div className="text-[10.5px] text-muted-foreground/60">{badge.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
