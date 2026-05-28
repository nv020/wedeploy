import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const vacatures = [
  {
    title: "Facility Manager",
    category: "Facility Management",
    location: "Amsterdam",
    type: "Vast",
    typeColor: "bg-accent/10 text-accent",
    desc: "Zorgdragen voor de facilitaire organisatie van een groeiend bedrijf in Amsterdam.",
  },
  {
    title: "Projectmanager Vastgoed",
    category: "Vastgoed",
    location: "Utrecht",
    type: "Interim",
    typeColor: "bg-primary/10 text-primary",
    desc: "Leiden van vastgoedprojecten in de commerciële sector vanuit Utrecht.",
  },
  {
    title: "Technisch Specialist",
    category: "Engineering",
    location: "Rotterdam",
    type: "Detachering",
    typeColor: "bg-muted text-muted-foreground",
    desc: "Technische expertise inzetten bij complexe installatie- en onderhoudsprojecten.",
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
    <section id="vacatures" className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
          <div>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Actueel</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight">
              Actuele Projecten &amp; Rollen
            </h2>
          </div>
          <a
            href="#vacatures"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent hover:gap-3 transition-all duration-200"
          >
            Bekijk alles <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-[14.5px] text-muted-foreground mb-12 max-w-xl leading-relaxed">
          Een selectie van strategische posities en interim-vraagstukken die wij momenteel exclusief begeleiden.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
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
              whileHover={{ y: -5, boxShadow: "0 16px 40px hsl(220 50% 18% / 0.08)" }}
              whileTap={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col bg-white rounded-2xl border border-border/50 p-9 cursor-pointer hover:border-accent/30 transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-5">
                <span className={`text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${v.typeColor}`}>
                  {v.type}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" />
              </div>
              <h3 className="text-[17px] font-bold text-primary leading-snug mb-2">{v.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">{v.desc}</p>
              <div className="flex items-center gap-4 text-[12px] text-muted-foreground mt-7 pt-5 border-t border-border/40">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  {v.location}
                </span>
                <span className="text-border">·</span>
                <span>{v.category}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
