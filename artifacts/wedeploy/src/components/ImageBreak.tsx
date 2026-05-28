import { motion } from "framer-motion";

export function ImageBreak() {
  return (
    <section className="relative h-[420px] md:h-[500px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&q=80"
        alt="Professioneel team in gesprek rond een tafel"
        className="w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, hsl(220 50% 10% / 0.80) 0%, hsl(220 50% 10% / 0.45) 100%)" }}
      />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent/90 mb-5">
              Onze overtuiging
            </p>
            <h2 className="text-3xl md:text-[2.6rem] font-bold text-white leading-[1.2] tracking-tight">
              Achter elke functie zit een team.<br className="hidden md:block" /> Achter elk cv zit een mens.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
