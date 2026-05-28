import { motion } from "framer-motion";

const areas = [
  {
    title: "Facility Management",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Modern faciliteitenbeheer en kantooromgeving",
  },
  {
    title: "Projectmanagement",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    alt: "Professioneel team in projectoverleg",
  },
  {
    title: "Vastgoed & Property Management",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    alt: "Modern vastgoed en gebouwbeheer",
  },
  {
    title: "Technische & Engineering rollen",
    img: "https://images.unsplash.com/photo-1581092921461-7031c12c4c1d?w=800&q=80",
    alt: "Technische professional aan het werk",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function ExpertiseAreas() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Expertisegebieden</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Expertise in omgevingen<br className="hidden md:block" /> waar kwaliteit telt.
          </h2>
          <p className="mt-4 text-[14px] text-muted-foreground max-w-lg">
            Onze ervaring ligt in deze sectoren, terwijl we flexibel blijven voor andere specialistische posities.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {areas.map((area) => (
            <motion.div
              key={area.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl h-64 md:h-72 cursor-pointer"
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
                    "linear-gradient(to top, hsl(220 50% 12% / 0.85) 0%, hsl(220 50% 12% / 0.25) 55%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="text-white text-xl font-bold leading-snug">{area.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
