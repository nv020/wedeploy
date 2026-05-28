import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const diensten = [
  {
    num: "01",
    title: "Werving & Selectie",
    desc: "Voor organisaties die zorgvuldig geselecteerde professionals zoeken voor vaste posities.",
    href: "#contact",
  },
  {
    num: "02",
    title: "Detachering",
    desc: "Flexibele inzet van professionals met persoonlijke begeleiding en betrokkenheid.",
    href: "#contact",
  },
  {
    num: "03",
    title: "Interim Oplossingen",
    desc: "Tijdelijke expertise voor projecten, transities en organisatieveranderingen.",
    href: "#contact",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function DienstenOverview() {
  return (
    <section id="diensten" className="py-28 bg-card border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Diensten</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight">Hoe wij helpen</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {diensten.map((d) => (
            <motion.div
              key={d.title}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: "0 16px 40px hsl(220 50% 18% / 0.07)" }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col bg-background rounded-2xl border border-border/50 p-9 hover:border-accent/25 transition-colors duration-300"
            >
              <span className="text-[11px] font-bold text-accent tracking-wider mb-6">{d.num}</span>
              <h3 className="text-xl font-bold text-primary mb-3 leading-snug">{d.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[14px] flex-1">{d.desc}</p>
              <a
                href={d.href}
                className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-accent group-hover:gap-3 transition-all duration-200"
              >
                Meer informatie <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
