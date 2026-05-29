import { motion } from "framer-motion";

const areas = [
  {
    id: "fm",
    title: "Facility Management",
    sentence: "Van facilitaire managers en coördinatoren tot servicespecialisten op strategisch niveau.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    alt: "Wedeploy recruitment voor Facility Management en kantooromgeving",
    span: "lg:col-span-2",
    height: "h-[300px] lg:h-[360px]",
    imgW: 900, imgH: 600,
  },
  {
    id: "pm",
    title: "Projectmanagement",
    sentence: "Projectmanagers en programmamanagers voor complexe trajecten in vastgoed en infra.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
    alt: "Persoonlijke screening van kandidaten bij Wedeploy projectmanagement recruitment",
    span: "lg:col-span-1",
    height: "h-[300px] lg:h-[360px]",
    imgW: 700, imgH: 467,
  },
  {
    id: "tech",
    title: "Techniek & Installaties",
    sentence: "Technisch specialisten, werktuigbouwkundigen, E&W-engineers en installatieprofessionals.",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&q=80",
    alt: "Recruitment en detachering voor technische en vastgoedfuncties bij Wedeploy",
    span: "lg:col-span-1",
    height: "h-[280px] lg:h-[320px]",
    imgW: 700, imgH: 467,
  },
  {
    id: "vastgoed",
    title: "Vastgoed- en Property Management",
    sentence: "Property managers, asset managers en vastgoedprofessionals voor commercieel en institutioneel vastgoed.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    alt: "Vastgoed- en property management recruitment door Wedeploy",
    span: "lg:col-span-2",
    height: "h-[280px] lg:h-[320px]",
    imgW: 900, imgH: 600,
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
    <section id="diensten-expertise" className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Expertisegebieden</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Matches die je niet<br className="hidden md:block" /> op LinkedIn vindt.
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-xl">
            Binnen Facility Management, vastgoed en techniek draait succes om context:
            stakeholders, operatie, locaties, budgetten en draagvlak. Wij begrijpen
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
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.28 }}
              className={`group relative overflow-hidden rounded-2xl cursor-default ${area.span} ${area.height}`}
            >
              <img
                src={area.img}
                alt={area.alt}
                width={area.imgW}
                height={area.imgH}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark gradient base */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, hsl(220 50% 8% / 0.92) 0%, hsl(220 50% 10% / 0.30) 50%, transparent 100%)",
                }}
              />

              {/* Accent dot top-left */}
              <div className="absolute top-5 left-5 w-2 h-2 rounded-full bg-accent opacity-70" />

              {/* Glassmorphism text panel */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div
                  className="rounded-xl px-5 py-4 backdrop-blur-md border border-white/10"
                  style={{
                    background: "hsl(220 50% 12% / 0.70)",
                    boxShadow: "0 8px 32px hsl(220 50% 18% / 0.25), inset 0 1px 0 hsl(0 0% 100% / 0.08)",
                  }}
                >
                  <h3 className="text-white text-[16px] font-bold leading-snug mb-1">
                    {area.title}
                  </h3>
                  <p className="text-white/65 text-[12.5px] leading-snug">
                    {area.sentence}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tag cloud */}
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
