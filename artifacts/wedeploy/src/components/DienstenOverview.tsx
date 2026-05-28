import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const diensten = [
  {
    num: "01",
    title: "Werving & Selectie",
    desc: "Voor vaste functies waarbij zorgvuldige selectie het verschil maakt.",
  },
  {
    num: "02",
    title: "Detachering",
    desc: "Flexibele inzet van professionals met persoonlijke betrokkenheid.",
  },
  {
    num: "03",
    title: "Interim-oplossingen",
    desc: "Tijdelijke expertise voor projecten, veranderingen en organisatorische vraagstukken.",
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function DienstenOverview() {
  return (
    <section id="diensten" className="py-28 bg-card border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Diensten</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight">Hoe wij helpen</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left — editorial list */}
          <div className="lg:col-span-3">
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="divide-y divide-border/40"
            >
              {diensten.map((d) => (
                <motion.div
                  key={d.title}
                  variants={rowVariants}
                  className="group flex items-start gap-6 py-8 cursor-default"
                >
                  <span className="text-[11px] font-bold text-accent tracking-wider pt-1 flex-shrink-0 w-6">{d.num}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2 leading-snug group-hover:text-accent transition-colors duration-200">
                      {d.title}
                    </h3>
                    <p className="text-muted-foreground text-[14px] leading-relaxed">{d.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/25 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 10px 28px hsl(220 50% 18% / 0.15)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2.5 rounded-full bg-primary text-white px-8 py-[15px] text-[14px] font-bold"
              >
                Bespreek je personeelsvraag <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right — editorial image with accent shape */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 relative hidden lg:block"
          >
            {/* Accent shape behind image */}
            <div
              className="absolute bottom-[-14px] right-[-14px] w-[88%] h-[88%] rounded-2xl"
              style={{ background: "hsl(36 40% 88%)" }}
            />
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-[0_20px_60px_hsl(220_50%_18%/0.10)]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                alt="Professionals in overleg bij een zakelijke afspraak"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
