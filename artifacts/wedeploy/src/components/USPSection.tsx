import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const insightCards = [
  {
    num: "01",
    title: "Persoonlijke screening",
    desc: "Wij kijken verder dan beschikbaarheid en functietitels. Beschikbaar zijn is niet hetzelfde als passen.",
  },
  {
    num: "02",
    title: "Teamfit & cultuur",
    desc: "Een goede samenwerking begint vóór de eerste werkdag. We kijken naar de mens achter het cv.",
  },
  {
    num: "03",
    title: "Transparante communicatie",
    desc: "Heldere verwachtingen voor kandidaat én opdrachtgever. We houden contact, ook als er even geen update is.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function USPSection() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — editorial text, sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Werkwijze</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight leading-[1.08] mb-6">
              Werving zoals het hoort.
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.85] mb-4 max-w-[420px]">
              Goede werving begint met aandacht. Niet met zoveel mogelijk profielen doorsturen,
              maar met begrijpen wat iemand kan, wil en nodig heeft om succesvol te zijn.
            </p>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[420px] mb-10">
              We nemen liever iets meer tijd dan dat we de verkeerde match voorstellen.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.18 }}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary border border-primary/25 rounded-full px-6 py-3 hover:border-primary/60 transition-colors duration-200"
            >
              Bespreek uw vraagstuk <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right — 3 compact insight cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-4"
          >
            {insightCards.map((card) => (
              <motion.div
                key={card.num}
                variants={cardVariants}
                className="group rounded-2xl border border-border/50 bg-white p-8 flex gap-6 items-start hover:border-accent/30 hover:shadow-[0_8px_30px_hsl(220_50%_18%/0.06)] transition-all duration-300"
              >
                <span className="text-[11px] font-bold text-accent/60 tracking-[2px] mt-1 flex-shrink-0 w-8">{card.num}</span>
                <div>
                  <h3 className="text-[16.5px] font-bold text-primary mb-2 leading-snug group-hover:text-accent transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
