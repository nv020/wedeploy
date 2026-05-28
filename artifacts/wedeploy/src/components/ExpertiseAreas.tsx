import { motion } from "framer-motion";

const areas = [
  {
    id: "fm",
    title: "Facility Management",
    sentence: "Van facilitaire managers tot coördinatoren en servicespecialisten.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    alt: "Modern faciliteitenbeheer en kantooromgeving",
    span: "lg:col-span-2",
    height: "h-72 lg:h-80",
  },
  {
    id: "pm",
    title: "Projectmanagement",
    sentence: "Projectmanagers en programmamanagers voor complexe trajecten.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
    alt: "Professioneel team in projectoverleg",
    span: "lg:col-span-1",
    height: "h-72 lg:h-80",
  },
  {
    id: "tech",
    title: "Techniek & Installaties",
    sentence: "Technisch specialisten, engineers en installatieprofessionals.",
    img: "https://images.unsplash.com/photo-1581092921461-7031c12c4c1d?w=700&q=80",
    alt: "Technische professional aan het werk",
    span: "lg:col-span-1",
    height: "h-64 lg:h-72",
  },
  {
    id: "vastgoed",
    title: "Vastgoedmanagement",
    sentence: "Property managers, assetmanagers en vastgoedprofessionals.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    alt: "Modern vastgoed en gebouwbeheer",
    span: "lg:col-span-2",
    height: "h-64 lg:h-72",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function ExpertiseAreas() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Expertisegebieden</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Expertise die verder gaat<br className="hidden md:block" /> dan een LinkedIn-profiel.
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-xl">
            Met ruim twee decennia aan ervaring binnen de top van facility- en vastgoedmanagement
            begrijpen we de dynamiek van de markt door en door.
          </p>
        </div>

        {/* Bento grid — FM + Vastgoed: 2/3 wide, PM + Techniek: 1/3 wide */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {areas.map((area) => (
            <motion.div
              key={area.id}
              variants={fadeIn}
              className={`group relative overflow-hidden rounded-2xl cursor-default ${area.span} ${area.height}`}
            >
              <img
                src={area.img}
                alt={area.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, hsl(220 50% 10% / 0.92) 0%, hsl(220 50% 10% / 0.30) 55%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="text-white text-xl font-bold leading-snug mb-1.5">{area.title}</h3>
                <p className="text-white/60 text-[12.5px] leading-snug opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  {area.sentence}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-[13.5px] text-muted-foreground/70 text-center max-w-xl mx-auto leading-relaxed">
          Onze ervaring ligt in deze vakgebieden, maar we denken ook graag mee over andere
          specialistische functies waar kwaliteit en fit belangrijk zijn.
        </p>
      </div>
    </section>
  );
}
