import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const disciplines = ["Projectmanagement", "Facility", "Vastgoed", "Techniek"];

const stats = [
  { n: "100+", l: "Geplaatste professionals" },
  { n: "98%", l: "Match-tevredenheid" },
  { n: "<48u", l: "Eerste reactie" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="bg-primary overflow-hidden relative min-h-[92vh] flex items-center"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Accent glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-150px", right: "200px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, hsl(205 85% 53% / 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-8 lg:px-16 py-24 lg:py-0 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Discipline pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
              {disciplines.map((d, i) => (
                <span
                  key={d}
                  className={`text-[11px] px-4 py-1.5 rounded-full font-semibold ${
                    i === 0
                      ? "bg-accent text-white"
                      : "text-white/65 border border-white/[0.15]"
                  }`}
                  style={i !== 0 ? { background: "rgba(255,255,255,0.07)" } : undefined}
                >
                  {d}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-bold text-white tracking-[-3px] leading-[0.95] mb-7"
              style={{ fontSize: "clamp(44px, 5.8vw, 80px)" }}
            >
              De juiste<br />
              professionals<span className="text-accent">.</span><br />
              De beste<br />
              matches<span className="text-accent">.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="text-[16px] leading-[1.82] mb-9 max-w-[440px]"
              style={{ color: "rgba(255,255,255,0.58)" }}
            >
              Wij brengen rust en executiekracht in complexe trajecten binnen
              projectmanagement, facility, vastgoed en techniek. Geen snelle
              cv's, maar duurzame matches.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-9">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 14px 36px hsl(205 85% 53% / 0.35)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-8 py-4 text-[14px] font-bold"
              >
                Ik zoek versterking <span aria-hidden>→</span>
              </motion.a>
              <motion.a
                href="#kandidaten"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2 rounded-full text-white border border-white/20 px-8 py-4 text-[14px] font-semibold hover:border-white/40 transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                Ik ben professional
              </motion.a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fadeUp}
              className="flex gap-9 pt-7"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {stats.map(({ n, l }) => (
                <div key={n}>
                  <div className="text-[22px] font-bold text-white tracking-tight">{n}</div>
                  <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: image in frame ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block relative h-[580px]"
          >
            {/* Accent offset frame */}
            <div
              className="absolute w-full h-full rounded-[14px] border"
              style={{ top: "-14px", right: "-14px", borderColor: "hsl(205 85% 53% / 0.4)" }}
            />

            <div
              className="h-full rounded-[14px] overflow-hidden relative"
              style={{ boxShadow: "0 32px 80px hsl(220 50% 18% / 0.40)" }}
            >
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1"
                srcSet="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=480&dpr=1 480w, https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=900&dpr=1 900w"
                sizes="420px"
                alt="Twee professionals in gesprek bij Wedeploy recruitment en detachering"
                title="Wedeploy — persoonlijke begeleiding van kandidaten en opdrachtgevers"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 20%" }}
                loading="eager"
              />
              {/* Bottom gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, hsl(220 50% 12% / 0.82) 0%, transparent 55%)" }}
              />
              {/* Caption card */}
              <div
                className="absolute bottom-5 left-5 right-5 rounded-[10px] p-4 border border-white/[0.12]"
                style={{ background: "hsl(220 50% 14% / 0.65)", backdropFilter: "blur(12px)" }}
              >
                <div className="text-[10px] tracking-[2px] uppercase mb-1" style={{ color: "rgba(255,255,255,0.48)" }}>
                  Persoonlijke screening
                </div>
                <div className="text-[13px] font-semibold text-white">
                  Transparante communicatie · Duurzame match
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
