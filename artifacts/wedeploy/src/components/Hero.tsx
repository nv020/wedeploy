import { motion } from "framer-motion";

import heroImg from "@assets/hero-professionals.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="bg-primary overflow-hidden relative min-h-[calc(100svh-68px)] flex flex-col"
    >
      {/* Full-bleed editorial image — absolutely positioned right */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="absolute top-0 right-0 h-full w-[65%] md:w-[72%] lg:w-[75%]"
      >
        <img
          src={heroImg}
          alt="Twee mensen in gesprek aan een tafel met een laptop"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
          loading="eager"
          fetchPriority="high"
          width="1200" height="800"
        />
        {/* Strong navy gradient masking left into text column */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(220 50% 18%) 0%, hsl(220 50% 18% / 0.94) 8%, hsl(220 50% 18% / 0.73) 28%, hsl(220 50% 18% / 0.33) 52%, transparent 74%)",
          }}
        />
        {/* Top + bottom darkening */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, hsl(220 50% 18% / 0.50) 0%, transparent 35%, hsl(220 50% 18% / 0.30) 100%)",
          }}
        />
      </motion.div>

      {/* Dot grid — left portion */}
      <div
        className="absolute top-0 left-0 h-full pointer-events-none"
        style={{
          width: "45%",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.038) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 2,
        }}
      />

      {/* Hero text content — overlaps image via z-index, aligned with container */}
      <div className="flex-1 flex items-center relative z-10 pb-8 pt-10 w-full">
        <div className="container mx-auto px-4 md:px-6 w-full">
        <motion.div
          variants={stagger}
          initial={false}
          animate="visible"
          className="flex flex-col w-full max-w-[520px] [container-type:inline-size]"
        >
          {/* Short, intentional headline lines */}
          <motion.h1
            variants={fadeUp}
            className="font-black text-white leading-[1.01] mb-8"
            style={{ fontSize: "clamp(30px, 15.5cqw, 80px)", letterSpacing: "-0.06em" }}
          >
            De juiste<br />
            professionals<span className="text-accent">.</span><br />
            De beste<br />
            <span className="text-accent">matches.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-[16.5px] leading-[1.78] mb-10 max-w-[420px]"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            We verbinden organisaties en professionals voor vaste functies en tijdelijke opdrachten.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="hero-home-actions flex flex-nowrap gap-2 sm:gap-3 mb-10">
            <motion.a
              href="/opdrachtgevers"
              whileHover={{ y: -2, boxShadow: "0 14px 36px hsl(205 85% 53% / 0.38)" }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.18 }}
              className="action-arrow inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-accent text-white px-4 sm:px-9 py-4 text-[14.5px] font-bold"
            >
              Ik zoek versterking
            </motion.a>
            <motion.a
              href="/vacatures"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.18 }}
              className="action-arrow inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full text-white border border-white/20 px-4 sm:px-8 py-4 text-[14px] font-semibold hover:border-white/40 transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              Ik ben professional
            </motion.a>
          </motion.div>

          {/* Contact details strip */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-x-6 gap-y-1 border-t border-white/15 pt-3"
          >
            <a href="tel:0852128668" className="inline-flex min-h-11 items-center text-sm font-medium text-white/85 hover:text-white hover:underline underline-offset-4">
              085 212 8668
            </a>

            <a href="mailto:info@wedeploy.nl" className="inline-flex min-h-11 items-center text-sm font-medium text-white/85 hover:text-white hover:underline underline-offset-4">
              info@wedeploy.nl
            </a>
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Reserve space for the wave so it cannot cover the contact links. */}
      <div aria-hidden="true" className="hidden md:block relative shrink-0 leading-none pointer-events-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-[clamp(4rem,8vw,9rem)]">
          <ellipse cx="720" cy="120" rx="900" ry="120" fill="hsl(36 28% 97%)" />
        </svg>
      </div>
    </section>
  );
}
