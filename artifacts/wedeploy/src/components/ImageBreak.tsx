import { motion } from "framer-motion";

export function ImageBreak() {
  return (
    <section className="relative h-[480px] md:h-[560px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1800&q=85"
        alt="Professioneel team in gesprek rond een tafel"
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(125deg, hsl(220 50% 8% / 0.90) 0%, hsl(220 50% 15% / 0.60) 55%, hsl(220 50% 20% / 0.30) 100%)",
        }}
      />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-0.5 bg-accent rounded-full" />
              <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-accent/80">
                Onze overtuiging
              </span>
            </div>
            <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-white leading-[1.15] tracking-tight mb-6">
              Een cv vertelt niet hoe iemand samenwerkt.
            </h2>
            <p className="text-[15.5px] text-white/50 leading-relaxed">
              Daarom kijken we verder dan functietitels en beschikbaarheid.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
