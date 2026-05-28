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
  { label: "Facility Manager geplaatst", sub: "Amsterdam", top: "top-[12%]", pos: "left-[-20px]" },
  { label: "Projectleider Huisvesting", sub: "Utrecht",    top: "top-[46%]", pos: "left-[-36px]" },
  { label: "Interim opdracht ingevuld", sub: "Rotterdam",  top: "top-[76%]", pos: "left-[-20px]" },
];

export function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-68px)] flex items-center bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
              <div className="w-8 h-0.5 rounded-full bg-accent" />
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-accent">
                Werving &amp; selectie · Detachering
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[2.8rem] md:text-[3.5rem] font-extrabold leading-[1.05] text-primary tracking-tight mb-6"
            >
              Duurzame matches in Facility Management, Vastgoed &amp; Techniek.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[16px] leading-[1.85] text-muted-foreground mb-9 max-w-[460px]"
            >
              We verbinden organisaties met professionals die niet alleen passen op papier,
              maar ook in de praktijk: bij het team, de opdracht en de fase waarin een
              organisatie zich bevindt.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-6">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 14px 36px hsl(220 50% 18% / 0.20)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2.5 rounded-full bg-primary text-white px-8 py-4 text-[14.5px] font-bold"
              >
                Bespreek uw vraagstuk <span aria-hidden>→</span>
              </motion.a>
              <motion.a
                href="#kandidaten"
                whileHover={{ y: -2, borderColor: "hsl(220 50% 18% / 0.5)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent text-primary px-8 py-4 text-[14.5px] font-semibold transition-colors duration-200"
              >
                Voor professionals
              </motion.a>
            </motion.div>

            <motion.p variants={fadeUp} className="text-[12.5px] text-muted-foreground/50 mb-10">
              Voor interim, project- en vaste rollen binnen Facility Management, Vastgoed en Techniek.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-muted-foreground/45 font-medium pt-2 border-t border-border/30"
            >
              {["Persoonlijke aanpak", "Kwaliteit boven volume", "Begeleiding na plaatsing"].map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {i > 0 && <span className="text-border/70">·</span>}
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — layered image composition */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative h-[540px] lg:h-[620px] hidden lg:block"
          >
            {/* Layer 1 — beige offset block (bottom-right) */}
            <div
              className="absolute bottom-[-12px] right-[-12px] w-[90%] h-[90%] rounded-[24px] opacity-60"
              style={{ background: "hsl(36 35% 90%)" }}
            />
            {/* Layer 2 — navy accent block (top-left) */}
            <div
              className="absolute top-[-16px] left-[-16px] w-[60%] h-[60%] rounded-[20px] opacity-[0.06]"
              style={{ background: "hsl(220 50% 18%)" }}
            />

            {/* Main photo */}
            <div className="relative z-10 w-[97%] h-full rounded-[22px] overflow-hidden shadow-[0_28px_72px_hsl(220_50%_18%/0.13)]">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80"
                alt="Professionals in overleg over een project"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle warm vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(160deg, transparent 45%, hsl(220 50% 10% / 0.15) 100%)",
                }}
              />
            </div>

            {/* Floating status badges */}
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
                className={`absolute ${badge.top} ${badge.pos} z-20 bg-white rounded-2xl px-4 py-3 shadow-[0_6px_24px_hsl(220_50%_18%/0.09)] flex items-center gap-3 min-w-[215px] border border-border/30`}
              >
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 shadow-[0_0_0_3px_hsl(205_85%_53%/0.15)]" />
                <div>
                  <div className="text-[12.5px] font-bold text-primary leading-tight">{badge.label}</div>
                  <div className="text-[10.5px] text-muted-foreground/55 mt-0.5">{badge.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
