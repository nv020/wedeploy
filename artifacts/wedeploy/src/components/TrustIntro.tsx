import { motion } from "framer-motion";

export function TrustIntro() {
  return (
    <section id="over-ons" className="py-24 bg-card text-center">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-medium text-primary leading-tight tracking-tight">
            Bij Wedeploy geloven we niet in cv-schuiven. We investeren in diepgaande intakes en eerlijke verwachtingen, zodat we professionals en organisaties verbinden die écht bij elkaar passen. Kwaliteit boven kwantiteit.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
