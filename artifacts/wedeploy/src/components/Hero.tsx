import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SEG_DUR = 0.55;
const SEG_MID = 0.42;

const W_NODES = [
  { id: "n_tl", cx: 62,  cy: 58,  glow: true  },
  { id: "n_vl", cx: 145, cy: 292, glow: false },
  { id: "n_cp", cx: 200, cy: 155, glow: true  },
  { id: "n_vr", cx: 255, cy: 292, glow: false },
  { id: "n_tr", cx: 338, cy: 58,  glow: true  },
  { id: "n_fl", cx: 36,  cy: 172, glow: false },
  { id: "n_fr", cx: 364, cy: 172, glow: false },
];

const W_SEGS = [
  { id: "l1", d: `M62,58 L145,292`,   dur: SEG_DUR, start: 0 },
  { id: "l2", d: `M145,292 L200,155`, dur: SEG_MID, start: SEG_DUR },
  { id: "l3", d: `M200,155 L255,292`, dur: SEG_MID, start: SEG_DUR + SEG_MID },
  { id: "l4", d: `M255,292 L338,58`,  dur: SEG_DUR, start: SEG_DUR + SEG_MID * 2 },
];

const FAINT_LINES = [
  { id: "f1", d: "M36,172 L62,58",   delay: 0.05 },
  { id: "f2", d: "M36,172 L145,292", delay: 0.35 },
  { id: "f3", d: "M364,172 L338,58", delay: SEG_DUR * 2 + SEG_MID * 2 + 0.05 },
  { id: "f4", d: "M364,172 L255,292",delay: SEG_DUR + SEG_MID * 2 + 0.1 },
];

function WVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.25 }}
      className="relative w-full max-w-[520px] mx-auto"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, hsl(205 85% 53% / 0.12) 0%, transparent 100%)",
        }}
      />

      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 400 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <filter id="glow-accent" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-soft" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="12" result="blur" />
            </filter>
          </defs>

          {FAINT_LINES.map((line) => (
            <motion.path
              key={line.id}
              d={line.d}
              stroke="hsl(205 85% 53%)"
              strokeWidth="1"
              strokeLinecap="round"
              opacity={0.22}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: line.delay, ease: "easeOut" }}
            />
          ))}

          {W_SEGS.map((seg) => (
            <motion.path
              key={seg.id}
              d={seg.d}
              stroke="hsl(220 50% 18%)"
              strokeWidth="1.75"
              strokeLinecap="round"
              opacity={0.72}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: seg.dur, delay: seg.start, ease: "easeOut" }}
            />
          ))}

          {W_NODES.map((node, i) => {
            const isAccent = node.glow;
            const r = isAccent ? 7 : 5;
            const fill = isAccent ? "hsl(205 85% 53%)" : "hsl(220 50% 18%)";
            const nodeDelay = i < 5
              ? [0, SEG_DUR, SEG_DUR + SEG_MID, SEG_DUR + SEG_MID * 2, SEG_DUR * 2 + SEG_MID * 2][i]
              : 0.1 + i * 0.12;

            return (
              <g key={node.id}>
                {isAccent && (
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r={18}
                    fill="hsl(205 85% 53%)"
                    opacity={0}
                    filter="url(#glow-soft)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.35, 0.15, 0.35, 0.15] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: nodeDelay + 0.3,
                      ease: "easeInOut",
                    }}
                  />
                )}
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r={r}
                  fill={fill}
                  opacity={isAccent ? 1 : 0.55}
                  filter={isAccent ? "url(#glow-accent)" : undefined}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [1, isAccent ? 1.3 : 1.15, 1],
                    opacity: isAccent ? [1, 0.75, 1] : [0.55, 0.35, 0.55],
                  }}
                  transition={{
                    scale: { duration: 3, repeat: Infinity, delay: nodeDelay + 0.5 + i * 0.3 },
                    opacity: { duration: 3, repeat: Infinity, delay: nodeDelay + 0.5 + i * 0.3 },
                    default: { duration: 0.35, delay: nodeDelay + 0.15 },
                  }}
                />
              </g>
            );
          })}
        </svg>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-20 pb-24 lg:pt-0 overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, hsl(220 15% 97%) 0%, hsl(210 30% 95%) 100%)",
      }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 80%, hsl(205 85% 53% / 0.07) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-7 max-w-xl z-10"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-5"
            >
              Boutique staffing & recruitment
            </motion.span>
            <h1 className="text-5xl md:text-[3.75rem] font-bold text-primary leading-[1.05] tracking-tight">
              Wij vinden mensen<br />die blijven.
            </h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Persoonlijke verbindingen tussen professionals en organisaties. Kwaliteit boven kwantiteit, altijd.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <motion.a
              href="#opdrachtgevers"
              whileHover={{ y: -2, boxShadow: "0 10px 32px hsl(220 50% 18% / 0.28)" }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground h-13 px-8 text-sm font-semibold"
            >
              Voor opdrachtgevers
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#kandidaten"
              whileHover={{ y: -2, boxShadow: "0 8px 24px hsl(0 0% 0% / 0.08)" }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/60 text-primary h-13 px-8 text-sm font-semibold backdrop-blur-sm"
            >
              Voor kandidaten
            </motion.a>
          </div>
        </motion.div>

        <div className="flex items-center justify-center mt-8 lg:mt-0">
          <div className="w-full max-w-[300px] sm:max-w-[380px] lg:max-w-none opacity-90">
            <WVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
