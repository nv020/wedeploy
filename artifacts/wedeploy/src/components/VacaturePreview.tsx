import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const vacatures = [
  {
    title: "Interim Facility Manager",
    category: "Facility Management",
    location: "Amsterdam",
    badge: "Typisch project",
    desc: "Interimopdracht bij een grote zakelijke dienstverlener in Amsterdam. Tactisch opereren, directe impact, korte lijnen.",
  },
  {
    title: "Projectleider Huisvesting",
    category: "Utrecht · Projectmanagement",
    location: "Utrecht",
    badge: "Type rol",
    desc: "Huisvestingstraject voor een organisatie in beweging. Navigeren door complexe stakeholders met volledige regie.",
  },
  {
    title: "Technisch Vastgoed Coördinator",
    category: "Technisch beheer",
    location: "Randstad",
    badge: "Typisch project",
    desc: "Verantwoordelijk voor het technisch beheer van een commerciële vastgoedportefeuille in de Randstad. Inhoudelijke diepgang en strategisch overzicht.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export function VacaturePreview() {
  return (
    <section id="vacatures" className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-5">
          <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full border"
            style={{ background: "hsl(205 85% 53% / 0.08)", borderColor: "hsl(205 85% 53% / 0.28)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-accent">Actueel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Altijd in beweging.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <p className="text-[15px] text-muted-foreground max-w-xl leading-relaxed">
            Wij werken doorlopend aan uitdagende opdrachten binnen projectmanagement, facility, vastgoed
            en techniek. Grote kans dat jouw volgende stap hier al tussen zit. Laat je gegevens achter
            en we matchen zodra een passend project landt.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-7 py-3.5 text-[13.5px] font-bold whitespace-nowrap self-start md:self-auto hover:bg-primary/90 transition-colors duration-200"
          >
            Schrijf je proactief in <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
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
              whileHover={{ y: -4, boxShadow: "0 12px 36px hsl(220 50% 18% / 0.07)" }}
              whileTap={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col bg-white rounded-2xl border border-border/50 p-8 cursor-pointer hover:border-accent/30 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-[10px] font-bold tracking-[2px] uppercase text-primary/40 px-3 py-1 rounded-full border border-border/60 bg-background">
                  {v.badge}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground/25 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200 mt-0.5 flex-shrink-0" />
              </div>

              <h3 className="text-[17px] font-bold text-primary leading-snug mb-3">{v.title}</h3>
              <p className="text-[13.5px] text-muted-foreground leading-[1.75] flex-1">{v.desc}</p>

              <div className="flex items-center gap-3 text-[11.5px] text-muted-foreground/60 mt-6 pt-5 border-t border-border/40">
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

        <p className="mt-8 text-[12.5px] text-muted-foreground/45 text-center max-w-md mx-auto leading-relaxed">
          Veel opdrachten worden discreet ingevuld en zijn niet openbaar zichtbaar.
        </p>
      </div>
    </section>
  );
}
