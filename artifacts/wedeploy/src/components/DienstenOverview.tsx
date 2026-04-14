import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const diensten = [
  {
    title: "Detachering & Detavast",
    desc: "Flexibele plaatsingen met de ruimte om door te groeien naar een vast dienstverband. Geschikt voor organisaties die zekerheid willen zonder risico.",
    href: "#diensten",
  },
  {
    title: "Recruitment",
    desc: "Wij zoeken de kandidaat die écht bij jouw organisatie past — niet alleen op papier, maar ook op cultuur en ambitie.",
    href: "#diensten",
  },
  {
    title: "Interim",
    desc: "Ervaren professionals die snel inzetbaar zijn en direct impact maken. Ideaal voor projecten, pieken of tijdelijke vervanging.",
    href: "#diensten",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function DienstenOverview() {
  return (
    <section id="diensten" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Onze diensten</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Hoe wij helpen</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {diensten.map((d) => (
            <motion.div
              key={d.title}
              variants={itemVariants}
              className="group relative flex flex-col bg-background rounded-2xl border border-border/60 p-8 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-4 leading-snug">{d.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">{d.desc}</p>
              <a
                href={d.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all duration-200"
              >
                Meer lezen <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
