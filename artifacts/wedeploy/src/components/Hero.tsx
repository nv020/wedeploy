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
          alt="Twee professionals in gesprek bij Wedeploy recruitment en detachering"
          title="Wedeploy — persoonlijke begeleiding van kandidaten en opdrachtgevers"
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
      <div className="flex-1 flex items-center relative z-10 pb-12 md:pb-24 pt-10 w-full">
        <div className="container mx-auto px-4 md:px-6 w-full">
        <motion.div
          variants={stagger}
          initial={false}
          animate="visible"
          className="flex flex-col w-full max-w-[520px]"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
            <div className="w-8 h-[2px] rounded-full bg-accent flex-shrink-0" />
            <span
              className="text-[10.5px] font-bold tracking-[2.5px] uppercase"
              style={{ color: "hsl(205 85% 53%)" }}
            >
              Recruitment · Detachering
            </span>
          </motion.div>

          {/* Short, intentional headline lines */}
          <motion.h1
            variants={fadeUp}
            className="font-black text-white leading-[1.01] mb-8"
            style={{ fontSize: "clamp(32px, 5.5vw, 72px)", letterSpacing: "-0.045em" }}
          >
            <span className="block">De juiste</span><span className="block">professionals.</span><span className="block text-accent">De beste matches.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-[16.5px] leading-[1.78] mb-10 max-w-[420px]"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Werving & selectie, detachering en interim. Sterk in vastgoed, facility en projecten. Ook voor andere functies denken we graag mee.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            <motion.a
              href="/opdrachtgevers"
              whileHover={{ y: -2, boxShadow: "0 14px 36px hsl(205 85% 53% / 0.38)" }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.18 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 sm:px-9 py-4 text-[14.5px] font-bold"
            >
              Ik zoek versterking
            </motion.a>
            <motion.a
              href="/vacatures"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.18 }}
              className="inline-flex items-center gap-2 rounded-full text-white border border-white/20 px-6 sm:px-8 py-4 text-[14px] font-semibold hover:border-white/40 transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              Ik ben professional
            </motion.a>
          </motion.div>

          {/* Contact details strip */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-6 pt-7"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <a href="tel:0852128668" className="flex items-center gap-2.5 group">

              <span
                className="text-[13.5px] font-medium group-hover:text-white transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                085 212 8668
              </span>
            </a>

            <a href="mailto:info@wedeploy.nl" className="flex items-center gap-2.5 group">

              <span
                className="text-[13.5px] font-medium group-hover:text-white transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                info@wedeploy.nl
              </span>
            </a>
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Curved bottom edge — cream arch */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 leading-none pointer-events-none" style={{ zIndex: 20 }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-24 md:h-36">
          <ellipse cx="720" cy="120" rx="900" ry="120" fill="hsl(36 28% 97%)" />
        </svg>
      </div>
    </section>
  );
}
