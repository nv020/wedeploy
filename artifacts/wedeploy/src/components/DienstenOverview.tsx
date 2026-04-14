import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const diensten = [
  {
    title: "Detachering & Detavast",
    desc: "Flexibel starten, met ruimte om door te groeien. Zekerheid voor organisaties, bewegingsvrijheid voor professionals.",
    href: "#diensten",
  },
  {
    title: "Recruitment",
    desc: "De kandidaat die écht past — niet alleen op papier, maar op cultuur en ambitie.",
    href: "#diensten",
  },
  {
    title: "Interim",
    desc: "Ervaren professionals, direct inzetbaar. Voor projecten, pieken of tijdelijke vervanging.",
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
    <section id="diensten" className="py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Onze diensten</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight">Hoe wij helpen</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {diensten.map((d) => (
            <motion.div
              key={d.title}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 16px 40px hsl(0 0% 0% / 0.08)" }}
              transition={{ duration: 0.2 }}
              className="group relative flex flex-col bg-background rounded-2xl border border-border/60 p-9 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-accent mb-6 opacity-70" />
              <h3 className="text-xl font-bold text-primary mb-3 leading-snug">{d.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm flex-1">{d.desc}</p>
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
