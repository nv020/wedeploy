import { motion } from "framer-motion";

const usps = [
  {
    num: "01",
    title: "Geen cv-doorsturen",
    desc: "We sturen geen stapels profielen door. Alleen kandidaten die professioneel én persoonlijk écht passen.",
  },
  {
    num: "02",
    title: "Persoonlijke screening",
    desc: "We nemen de tijd om kandidaten te leren kennen voordat we ze voorstellen.",
  },
  {
    num: "03",
    title: "Aandacht voor teamfit",
    desc: "Samenwerking, cultuur en verwachtingen bepalen het succes — niet alleen een cv.",
  },
  {
    num: "04",
    title: "Transparant proces",
    desc: "Heldere communicatie voor zowel opdrachtgevers als kandidaten gedurende het hele traject.",
  },
  {
    num: "05",
    title: "Blijvende betrokkenheid",
    desc: "We blijven betrokken vóór, tijdens en na plaatsing voor een goede start.",
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {usps.map((usp) => (
            <motion.div
              key={usp.num}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: "0 16px 40px hsl(220 50% 18% / 0.07)" }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-border/50 p-6 flex flex-col"
            >
              <span className="text-[11px] font-bold text-accent tracking-wider mb-4">{usp.num}</span>
              <h3 className="text-[15px] font-bold text-primary mb-2.5 leading-snug">{usp.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{usp.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
