import { motion } from "framer-motion";

const featured = {
  num: "01",
  title: "Geen cv-doorsturen",
  desc: "Wij sturen geen stapels profielen. We stellen alleen mensen voor die echt passen bij de functie en context.",
};

const smallCards = [
  {
    num: "02",
    title: "Persoonlijke screening",
    desc: "We nemen de tijd om ervaring, motivatie, verwachtingen en persoonlijkheid goed te begrijpen.",
  },
  {
    num: "03",
    title: "Team- en cultuurfit",
    desc: "Een sterke match klopt niet alleen op papier, maar ook binnen het team en de organisatie.",
  },
  {
    num: "04",
    title: "Transparant proces",
    desc: "Heldere communicatie voor opdrachtgevers en kandidaten. Geen ruis, geen loze beloftes.",
  },
  {
    num: "05",
    title: "Begeleiding na plaatsing",
    desc: "We blijven betrokken na de start, zodat de samenwerking goed landt.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function USPSection() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Waarom Wedeploy</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Werving zoals het hoort.
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Large featured card */}
          <motion.div
            variants={itemVariants}
            className="bg-primary rounded-2xl p-9 flex flex-col justify-between min-h-[280px] lg:min-h-0 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{ background: "radial-gradient(circle at 80% 100%, hsl(205 85% 53%) 0%, transparent 60%)" }}
            />
            <div className="relative">
              <span className="text-[11px] font-bold text-accent/80 tracking-wider">{featured.num}</span>
              <h3 className="mt-4 text-2xl font-bold text-white leading-snug">{featured.title}</h3>
            </div>
            <p className="relative text-white/65 leading-relaxed text-[14.5px] mt-6">{featured.desc}</p>
          </motion.div>

          {/* 4 smaller cards — 2x2 */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {smallCards.map((card) => (
              <motion.div
                key={card.num}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: "0 16px 40px hsl(220 50% 18% / 0.07)" }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-border/50 p-7 flex flex-col"
              >
                <span className="text-[11px] font-bold text-accent tracking-wider mb-4">{card.num}</span>
                <h3 className="text-[15px] font-bold text-primary mb-2.5 leading-snug">{card.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
