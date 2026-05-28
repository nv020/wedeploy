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
                Recruitment &amp; Detachering
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[2.75rem] md:text-[3.4rem] font-extrabold leading-[1.06] text-primary tracking-tight mb-6"
            >
              Duurzame matches in Facility Management, Vastgoed &amp; Techniek.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[16.5px] leading-[1.85] text-muted-foreground mb-9 max-w-[460px]"
            >
              Wedeploy verbindt organisaties en professionals met aandacht voor
              kwaliteit, teamfit en duurzame samenwerking.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-7">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 14px 36px hsl(220 50% 18% / 0.20)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2.5 rounded-full bg-primary text-white px-8 py-4 text-[14.5px] font-bold"
              >
                Ik zoek versterking <span aria-hidden>→</span>
              </motion.a>
              <motion.a
                href="#kandidaten"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent text-primary px-8 py-4 text-[14.5px] font-semibold hover:border-primary/40 transition-colors duration-200"
              >
                Ik ben professional
              </motion.a>
            </motion.div>

            {/* Supporting line — no pill styling */}
            <motion.p
              variants={fadeUp}
              className="text-[11.5px] tracking-[0.8px] text-primary/38 font-medium"
            >
              Persoonlijke screening · Transparante communicatie · Duurzame matches
            </motion.p>
          </motion.div>

          {/* Right — layered image composition */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative h-[560px] lg:h-[660px] hidden lg:block"
          >
            {/* Beige offset block — slightly larger for more asymmetric editorial feel */}
            <div
              className="absolute bottom-[-16px] right-[-16px] w-[88%] h-[92%] rounded-[28px] opacity-55"
              style={{ background: "hsl(36 35% 90%)" }}
            />
            {/* Navy accent shape — taller, more asymmetric */}
            <div
              className="absolute top-[-20px] left-[-20px] w-[48%] h-[62%] rounded-[22px] opacity-[0.055]"
              style={{ background: "hsl(220 50% 18%)" }}
            />

            {/* Main photo */}
            <div className="relative z-10 w-[97%] h-full rounded-[22px] overflow-hidden shadow-[0_28px_72px_hsl(220_50%_18%/0.13)]">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1"
                alt="Twee professionals in gesprek bij Wedeploy recruitment en detachering"
                title="Wedeploy — persoonlijke begeleiding van kandidaten en opdrachtgevers"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 20%" }}
                loading="eager"
              />
              {/* Warm cinematic overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(175deg, hsl(36 55% 70% / 0.10) 0%, transparent 38%, hsl(220 50% 10% / 0.22) 100%)",
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
