import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blocks = [
  {
    num: "01",
    title: "Interim professionals",
    desc: "Snel schakelen zonder concessies aan kwaliteit. Wij leveren ervaren interimmers die direct inzetbaar zijn en zelfstandig kunnen opereren binnen complexe omgevingen.",
    tags: ["Facility Management", "Vastgoed", "Workplace", "Operations"],
    cta: "Interim capaciteit bespreken",
  },
  {
    num: "02",
    title: "Projectrollen",
    desc: "Voor trajecten die specialistische kennis en projectervaring vragen. Wij selecteren professionals die projecten beheersen van intake tot oplevering.",
    tags: ["Projectmanagement", "Huisvesting", "Techniek", "Transformatie"],
    cta: "Projectondersteuning bespreken",
  },
  {
    num: "03",
    title: "Vaste functies",
    desc: "Zorgvuldige werving voor posities waarbij de langetermijnfit met het team en de organisatie bepalend is. Geen stapels cv's, maar gerichte introducties.",
    tags: ["Werving & Selectie", "Senior functies", "Leidinggevenden", "Specialisten"],
    cta: "Wervingsopdracht bespreken",
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

export function USPSection() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Werkwijze</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Werving zoals het hoort.
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-xl">
            Goed werven vraagt meer dan snelheid. Het vraagt inhoudelijke kennis, scherpe vragen
            en het lef om niet zomaar iedereen voor te stellen.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col divide-y divide-border/40"
        >
          {blocks.map((block) => (
            <motion.div
              key={block.num}
              variants={rowVariants}
              className="group grid grid-cols-1 lg:grid-cols-[100px_1fr_auto] gap-6 lg:gap-10 items-start py-10"
            >
              {/* Number */}
              <div className="flex items-start gap-3">
                <span className="text-[11px] font-bold text-accent/60 tracking-[2px] pt-1">{block.num}</span>
                <h3 className="text-[18px] font-bold text-primary leading-snug lg:hidden">{block.title}</h3>
              </div>

              {/* Content */}
              <div>
                <h3 className="hidden lg:block text-[19px] font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors duration-200">
                  {block.title}
                </h3>
                <p className="text-[14.5px] text-muted-foreground leading-relaxed mb-5 max-w-xl">
                  {block.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {block.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-primary/60 bg-background border border-border/60 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="hidden lg:flex items-center gap-2 text-[13px] font-semibold text-accent hover:gap-3 transition-all duration-200 whitespace-nowrap mt-1 self-start"
              >
                {block.cta} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
