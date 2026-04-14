import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="py-28 bg-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, hsl(205 85% 53%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(205 85% 53%) 0%, transparent 40%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Klaar om de juiste stap te zetten?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Of je nu op zoek bent naar een nieuwe uitdaging of een sterke kandidaat — we denken graag met je mee. Zonder druk, gewoon een goed gesprek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full bg-accent text-white hover:bg-accent/90 h-14 px-8 text-base font-semibold"
            >
              Plan een kennismaking
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base"
            >
              Bekijk vacatures
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
