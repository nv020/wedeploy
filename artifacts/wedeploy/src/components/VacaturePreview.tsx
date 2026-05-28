import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const vacatures = [
  {
    title: "Interim Facility Manager",
    category: "Facility Management",
    location: "Amsterdam",
    type: "Interim",
    typeColor: "bg-accent/10 text-accent",
    popular: true,
    desc: "Interimopdracht voor een ervaren facility manager bij een grote zakelijke dienstverlener in de regio Amsterdam.",
  },
  {
    title: "Projectleider Huisvesting",
    category: "Vastgoed / Workplace",
    location: "Utrecht",
    type: "Project",
    typeColor: "bg-primary/10 text-primary",
    popular: false,
    desc: "Leidende rol in een huisvestingstraject voor een overheidsorganisatie in transitie. Complexe stakeholderdynamiek.",
  },
  {
    title: "Technisch Vastgoed Coördinator",
    category: "Technisch beheer",
    location: "Rotterdam",
    type: "Vast",
    typeColor: "bg-muted text-muted-foreground",
    popular: false,
    desc: "Verantwoordelijk voor het technisch beheer en onderhoud van een omvangrijke commerciële vastgoedportefeuille.",
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
              Actuele projecten &amp; rollen
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent hover:gap-3 transition-all duration-200 whitespace-nowrap"
          >
            Neem contact op <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-[14.5px] text-muted-foreground mb-12 max-w-xl leading-relaxed">
          Wij werken aan opdrachten binnen Facility Management, vastgoed, workplace en techniek.
          Niet iedere rol wordt openbaar gepubliceerd.
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
              href="#contact"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 16px 40px hsl(220 50% 18% / 0.08)" }}
              whileTap={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col bg-white rounded-2xl border border-border/50 p-9 cursor-pointer hover:border-accent/30 transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex flex-col gap-2">
                  <span className={`text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full self-start ${v.typeColor}`}>
                    {v.type}
                  </span>
                  {v.popular && (
                    <span className="text-[10.5px] font-semibold text-accent/80 px-3 py-1 rounded-full bg-accent/8 border border-accent/15 self-start">
                      Veelgevraagde rol
                    </span>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 mt-1" />
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

        <p className="mt-8 text-[13px] text-muted-foreground/60 text-center max-w-lg mx-auto leading-relaxed">
          Heeft u een specifieke rol in gedachten? Neem contact op — veel opdrachten worden
          discreet ingevuld en zijn niet openbaar gepubliceerd.
        </p>
      </div>
    </section>
  );
}
