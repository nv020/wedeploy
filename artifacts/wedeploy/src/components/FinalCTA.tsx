import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(220 50% 14%) 0%, hsl(220 50% 22%) 60%, hsl(210 60% 26%) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 85%, hsl(205 85% 53%) 0%, transparent 45%), radial-gradient(circle at 85% 15%, hsl(205 85% 53%) 0%, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-6">Klaar om te starten?</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Zet de juiste stap vandaag.
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-12 max-w-md mx-auto">
            Of je nu een nieuwe uitdaging zoekt of een sterke kandidaat — we denken graag met je mee. Zonder druk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ y: -3, boxShadow: "0 12px 40px hsl(205 85% 53% / 0.5)" }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white px-9 py-4 text-sm font-bold"
            >
              Plan een kennismaking
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#vacatures"
              whileHover={{ y: -3, boxShadow: "0 8px 24px hsl(0 0% 0% / 0.2)" }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white/80 px-9 py-4 text-sm font-semibold hover:bg-white/5 transition-colors duration-200"
            >
              Bekijk vacatures
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
