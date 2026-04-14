import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const W_NODES = [
  { id: "n1", cx: 52, cy: 298 },
  { id: "n2", cx: 138, cy: 98 },
  { id: "n3", cx: 200, cy: 218 },
  { id: "n4", cx: 262, cy: 98 },
  { id: "n5", cx: 348, cy: 298 },
  { id: "n6", cx: 38, cy: 168 },
  { id: "n7", cx: 362, cy: 168 },
];

const W_LINES = [
  { id: "l1", d: "M52,298 L138,98", delay: 0 },
  { id: "l2", d: "M138,98 L200,218", delay: 0.25 },
  { id: "l3", d: "M200,218 L262,98", delay: 0.5 },
  { id: "l4", d: "M262,98 L348,298", delay: 0.75 },
  { id: "l5", d: "M38,168 L138,98", delay: 0.15, faint: true },
  { id: "l6", d: "M362,168 L262,98", delay: 0.9, faint: true },
  { id: "l7", d: "M38,168 L52,298", delay: 0.05, faint: true },
  { id: "l8", d: "M362,168 L348,298", delay: 0.95, faint: true },
];

function WVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative w-full max-w-[520px] mx-auto"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {W_LINES.map((line) => (
            <motion.path
              key={line.id}
              d={line.d}
              stroke={line.faint ? "hsl(205 85% 53%)" : "hsl(220 50% 18%)"}
              strokeWidth={line.faint ? 1 : 1.5}
              strokeLinecap="round"
              opacity={line.faint ? 0.25 : 0.7}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: line.delay, ease: "easeOut" }}
            />
          ))}

          {W_NODES.map((node, i) => {
            const isAccent = [1, 3].includes(i);
            const r = isAccent ? 7 : 5;
            return (
              <motion.circle
                key={node.id}
                cx={node.cx}
                cy={node.cy}
                r={r}
                fill={isAccent ? "hsl(205 85% 53%)" : "hsl(220 50% 18%)"}
                opacity={isAccent ? 1 : 0.6}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: isAccent ? [1, 0.7, 1] : [0.6, 0.4, 0.6],
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity, delay: i * 0.4 },
                  opacity: { duration: 3, repeat: Infinity, delay: i * 0.4 },
                  default: { duration: 0.4, delay: 0.6 + i * 0.08 },
                }}
              />
            );
          })}
        </svg>
      </motion.div>

      <div
        className="absolute inset-0 -z-10 rounded-3xl opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 55% 45%, hsl(205 85% 53% / 0.18) 0%, transparent 70%)",
        }}
      />
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
      <div className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 80%, hsl(205 85% 53% / 0.08) 0%, transparent 50%)",
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
              whileHover={{ y: -2, boxShadow: "0 8px 30px hsl(220 50% 18% / 0.25)" }}
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

        <div className="hidden lg:flex items-center justify-center">
          <WVisual />
        </div>
      </div>
    </section>
  );
}
