import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import heroImg from "@assets/hero-professionals.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="bg-primary overflow-hidden relative min-h-screen flex flex-col"
    >
      {/* Full-bleed editorial image — absolutely positioned right 75% */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 right-0 h-full"
        style={{ width: "75%" }}
      >
        <img
          src={heroImg}
          alt="Twee professionals in gesprek bij Wedeploy recruitment en detachering"
          title="Wedeploy — persoonlijke begeleiding van kandidaten en opdrachtgevers"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
          loading="eager"
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

      {/* Hero text content — overlaps image via z-index */}
      <div className="flex-1 flex items-center relative z-10 px-6 md:px-12 lg:px-20 xl:px-28 pb-24 pt-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col max-w-[580px]"
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

          {/* Four-line headline */}
          <motion.h1
            variants={fadeUp}
            className="font-black text-white leading-[1.01] mb-8"
            style={{ fontSize: "clamp(56px, 6vw, 86px)", letterSpacing: "-3.5px" }}
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
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            Geen snelle cv's. Duurzame matches — binnen projectmanagement,
            facility, vastgoed en techniek.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            <motion.a
              href="#contact"
              whileHover={{ y: -2, boxShadow: "0 14px 36px hsl(205 85% 53% / 0.38)" }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.18 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-9 py-4 text-[14.5px] font-bold"
            >
              Ik zoek versterking <span aria-hidden>→</span>
            </motion.a>
            <motion.a
              href="#kandidaten"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.18 }}
              className="inline-flex items-center gap-2 rounded-full text-white border border-white/20 px-8 py-4 text-[14px] font-semibold hover:border-white/40 transition-colors duration-200"
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
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
              </div>
              <span
                className="text-[13.5px] font-medium group-hover:text-white transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                085 212 8668
              </span>
            </a>

            <a href="mailto:info@wedeploy.nl" className="flex items-center gap-2.5 group">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
              </div>
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

      {/* Curved bottom edge — cream arch */}
      <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none" style={{ zIndex: 20 }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-24 md:h-36">
          <ellipse cx="720" cy="120" rx="900" ry="120" fill="hsl(36 28% 97%)" />
        </svg>
      </div>
    </section>
  );
}
