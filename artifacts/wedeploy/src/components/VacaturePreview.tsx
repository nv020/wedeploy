import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const vacatures = [
  {
    title: "Senior Softwareontwikkelaar",
    location: "Amsterdam",
    type: "Vast",
    typeColor: "bg-accent/10 text-accent",
  },
  {
    title: "HR Business Partner",
    location: "Utrecht",
    type: "Interim",
    typeColor: "bg-primary/10 text-primary",
  },
  {
    title: "Projectmanager",
    location: "Rotterdam",
    type: "Detachering",
    typeColor: "bg-secondary text-secondary-foreground",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function VacaturePreview() {
  return (
    <section id="vacatures" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">Actueel</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Recente vacatures</h2>
          </div>
          <a href="#vacatures" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
            Alle vacatures <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {vacatures.map((v) => (
            <motion.a
              key={v.title}
              href="#vacatures"
              variants={itemVariants}
              className="group flex flex-col bg-card rounded-2xl border border-border/60 p-8 hover:border-accent/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <span className={`text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full ${v.typeColor}`}>
                  {v.type}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 leading-snug">{v.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto pt-4 border-t border-border/40">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{v.location}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
