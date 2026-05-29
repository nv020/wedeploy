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
    <section
      id="home"
      className="min-h-[calc(100vh-68px)] bg-background overflow-hidden relative flex items-center"
    >
      {/* ── Text content ── */}
      <div className="container mx-auto px-6 md:px-8 lg:px-16 py-20 lg:py-0 w-full relative z-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col max-w-[520px]"
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
            Strategic talent voor projecten met impact.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[16.5px] leading-[1.85] text-muted-foreground mb-9 max-w-[460px]"
          >
            Wij verbinden interim professionals en strategisch talent aan
            uitdagende rollen in Projectmanagement, Facility, Vastgoed en
            Techniek. Zonder cv-shiften, gericht op een duurzame match.
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

          <motion.p
            variants={fadeUp}
            className="text-[11.5px] tracking-[0.8px] text-primary/38 font-medium"
          >
            Persoonlijke screening · Transparante communicatie · Duurzame matches
          </motion.p>
        </motion.div>
      </div>

      {/* ── Image panel — absolute right, blob shape, with glow ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[54%] pointer-events-none"
      >
        {/* Soft glow behind image */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 60% 50%, hsl(205 85% 53% / 0.13) 0%, transparent 70%)",
          }}
        />

        {/* Decorative offset block */}
        <div
          className="absolute bottom-[-20px] right-[-20px] w-[85%] h-[90%] opacity-50"
          style={{
            background: "hsl(36 35% 90%)",
            borderRadius: "42% 58% 50% 50% / 40% 40% 60% 60%",
          }}
        />

        {/* Navy subtle shape top-left */}
        <div
          className="absolute top-[-24px] left-[4%] w-[44%] h-[55%] opacity-[0.05]"
          style={{
            background: "hsl(220 50% 18%)",
            borderRadius: "55% 45% 38% 62% / 48% 62% 38% 52%",
          }}
        />

        {/* Main photo — blob shape */}
        <div
          className="relative z-10 h-full overflow-hidden shadow-[0_32px_80px_hsl(220_50%_18%/0.15)] mx-8 my-10"
          style={{
            borderRadius: "40% 60% 58% 42% / 38% 42% 58% 62%",
          }}
        >
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
    </section>
  );
}
