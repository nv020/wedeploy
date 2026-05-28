import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

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
              className="text-5xl md:text-[3.6rem] font-extrabold leading-[1.07] text-primary tracking-tight mb-6"
            >
              Geen cv-doorschuivers.<br />
              Mensen die écht passen.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[17px] leading-[1.7] text-muted-foreground mb-2.5 max-w-[460px]"
            >
              Wedeploy helpt organisaties en professionals vooruit met persoonlijke begeleiding,
              zorgvuldige screening en matches voor de lange termijn.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[13px] text-muted-foreground/60 italic mb-10"
            >
              Gespecialiseerd in Facility Management, Projectmanagement, Vastgoed en Technische functies.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-9">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 12px 32px hsl(220 50% 18% / 0.18)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-8 py-[15px] text-[14.5px] font-bold"
              >
                Ik zoek talent <span>→</span>
              </motion.a>
              <motion.a
                href="#kandidaten"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent text-primary px-8 py-[15px] text-[14.5px] font-semibold hover:border-primary/40 transition-colors duration-200"
              >
                Ik ben kandidaat
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 text-[12px] text-muted-foreground/55 font-medium">
              {["Persoonlijke aanpak", "Zorgvuldige screening", "Transparante communicatie", "Kwaliteit boven volume"].map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {i > 0 && <span className="text-border text-base leading-none">·</span>}
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[480px] lg:h-[560px] hidden lg:block"
          >
            {/* Sand accent block */}
            <div
              className="absolute top-[-16px] right-[-16px] w-[85%] h-full rounded-2xl"
              style={{ background: "hsl(36 35% 92%)" }}
            />

            {/* Photo */}
            <div className="relative z-10 w-[95%] h-full rounded-[20px] overflow-hidden shadow-[0_24px_64px_hsl(220_50%_18%/0.10)]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                alt="Professionals in gesprek op de werkvloer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="absolute bottom-9 left-[-28px] z-20 bg-white rounded-2xl px-5 py-3.5 shadow-[0_12px_40px_hsl(220_50%_18%/0.11)] flex items-center gap-3 min-w-[220px]"
            >
              <div
                className="w-9 h-9 rounded-[10px] flex-shrink-0 flex items-center justify-center"
                style={{ background: "hsl(36 35% 92%)" }}
              >
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-primary leading-tight">Persoonlijke aanpak</div>
                <div className="text-[11.5px] text-muted-foreground mt-0.5">Altijd op maat, nooit op volume</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
