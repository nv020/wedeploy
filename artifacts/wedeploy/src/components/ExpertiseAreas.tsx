import { motion } from "framer-motion";

const areas = [
  {
    id: "fm",
    title: "Facility Management",
    sentence: "Van facilitaire managers en coördinatoren tot servicespecialisten op strategisch niveau.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    alt: "Modern faciliteitenbeheer en kantooromgeving",
    span: "lg:col-span-2",
    height: "h-[300px] lg:h-[340px]",
  },
  {
    id: "pm",
    title: "Projectmanagement",
    sentence: "Projectmanagers en programmamanagers voor complexe trajecten in vastgoed en infra.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
    alt: "Professioneel team in projectoverleg",
    span: "lg:col-span-1",
    height: "h-[300px] lg:h-[340px]",
  },
  {
    id: "tech",
    title: "Techniek & Installaties",
    sentence: "Technisch specialisten, werktuigbouwkundigen, E&W-engineers en installatieprofessionals.",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&q=80",
    alt: "Technische professional aan het werk in industriële omgeving",
    span: "lg:col-span-1",
    height: "h-[280px] lg:h-[300px]",
  },
  {
    id: "vastgoed",
    title: "Vastgoedmanagement",
    sentence: "Property managers, asset managers en vastgoedprofessionals voor commercieel en institutioneel vastgoed.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    alt: "Modern vastgoed en gebouwbeheer",
    span: "lg:col-span-2",
    height: "h-[280px] lg:h-[300px]",
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
            Binnen Facility Management, vastgoed en techniek draait succes vaak om context:
            stakeholders, operatie, locaties, planning, budgetten en draagvlak. Wij begrijpen
            die wereld en selecteren professionals die daarbinnen kunnen leveren.
          </p>
        </div>

        {/* Bento grid — FM + Vastgoed: col-span-2, PM + Techniek: col-span-1 */}
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
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, hsl(220 50% 10% / 0.90) 0%, hsl(220 50% 10% / 0.25) 50%, transparent 100%)",
                }}
              />
              {/* Top-left subtle accent dot */}
              <div className="absolute top-5 left-5 w-2 h-2 rounded-full bg-accent opacity-70" />

              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="text-white text-[18px] font-bold leading-snug mb-1.5">{area.title}</h3>
                <p className="text-white/65 text-[12.5px] leading-snug max-w-[280px] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  {area.sentence}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise tag cloud */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {[
            "Facility Management",
            "Vastgoed",
            "Workplace",
            "Huisvesting",
            "Technische dienstverlening",
            "Onderhoud & beheer",
            "Projectmanagement",
            "Operations",
            "Interim management",
          ].map((tag) => (
            <span
              key={tag}
              className="text-[12px] font-semibold text-primary/65 border border-border/60 bg-white rounded-full px-4 py-1.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
