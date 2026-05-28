import { motion } from "framer-motion";

const cards = [
  {
    num: "01",
    title: "Geen cv-doorschuiven",
    desc: "Wij sturen geen stapels profielen. We stellen alleen mensen voor die echt passen bij de functie, het team en de context.",
    style: "navy",
  },
  {
    num: "02",
    title: "Persoonlijke screening",
    desc: "We nemen de tijd om ervaring, motivatie, verwachtingen en persoonlijkheid goed te begrijpen.",
    style: "sand",
  },
  {
    num: "03",
    title: "Team- en cultuurfit",
    desc: "Een sterke match klopt niet alleen op papier, maar ook binnen het team en de organisatie.",
    style: "white",
  },
  {
    num: "04",
    title: "Transparant proces",
    desc: "Heldere communicatie voor opdrachtgevers en kandidaten. Geen ruis, geen loze beloftes.",
    style: "accent-light",
  },
  {
    num: "05",
    title: "Begeleiding na plaatsing",
    desc: "We blijven betrokken na de start, zodat de samenwerking goed landt.",
    style: "white",
  },
];

const cardStyles: Record<string, string> = {
  navy: "bg-primary text-white",
  sand: "border border-border/50",
  white: "bg-white border border-border/50",
  "accent-light": "border border-border/50",
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export function USPSection() {
  const [featured, ...rest] = cards;

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
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-4"
        >
          {/* Row 1: large navy card (2/3) + sand card (1/3) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Large navy feature */}
            <motion.div
              variants={fadeIn}
              className="lg:col-span-2 relative overflow-hidden bg-primary rounded-2xl p-10 min-h-[220px] flex flex-col justify-between"
            >
              <div
                className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-10 translate-x-1/4 translate-y-1/4"
                style={{ background: "hsl(205 85% 53%)" }}
              />
              <span className="text-[11px] font-bold text-accent/70 tracking-wider">{featured.num}</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 leading-snug">{featured.title}</h3>
                <p className="text-white/60 text-[14.5px] leading-relaxed max-w-md">{featured.desc}</p>
              </div>
            </motion.div>

            {/* Sand card */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -4, boxShadow: "0 16px 40px hsl(220 50% 18% / 0.07)" }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-border/50 p-8 flex flex-col justify-between min-h-[220px]"
              style={{ background: "hsl(36 40% 93%)" }}
            >
              <span className="text-[11px] font-bold text-accent tracking-wider">{rest[0].num}</span>
              <div>
                <h3 className="text-[16px] font-bold text-primary mb-2.5 leading-snug">{rest[0].title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{rest[0].desc}</p>
              </div>
            </motion.div>
          </div>

          {/* Row 2: three equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {rest.slice(1).map((card, i) => (
              <motion.div
                key={card.num}
                variants={fadeIn}
                whileHover={{ y: -4, boxShadow: "0 16px 40px hsl(220 50% 18% / 0.07)" }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl p-8 flex flex-col justify-between min-h-[180px] ${
                  i === 1
                    ? "border border-accent/20 bg-accent/[0.04]"
                    : "bg-white border border-border/50"
                }`}
              >
                <span className="text-[11px] font-bold text-accent tracking-wider">{card.num}</span>
                <div>
                  <h3 className="text-[15px] font-bold text-primary mb-2.5 leading-snug">{card.title}</h3>
                  <p className="text-[12.5px] text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
