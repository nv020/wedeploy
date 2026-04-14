import { motion } from "framer-motion";
import { Users, Target, Eye, Network, HeartHandshake } from "lucide-react";

const usps = [
  {
    icon: Users,
    title: "De persoon, niet het cv",
    desc: "Wij kijken voorbij papier en verbinden mensen die écht bij elkaar passen.",
    accent: "hsl(205 85% 53%)",
    colSpan: "md:col-span-2",
    bg: "bg-white",
  },
  {
    icon: Target,
    title: "Minder mismatches",
    desc: "Diepgaande intake vooraf. Zodat beide kanten precies weten waar ze aan toe zijn.",
    accent: "hsl(220 50% 18%)",
    colSpan: "md:col-span-1",
    bg: "bg-background",
  },
  {
    icon: Eye,
    title: "Transparant proces",
    desc: "Geen verrassingen. Je weet elke stap wat er speelt.",
    accent: "hsl(205 85% 53%)",
    colSpan: "md:col-span-1",
    bg: "bg-background",
  },
  {
    icon: Network,
    title: "Netwerkgedreven",
    desc: "We posten niet en hopen. We zoeken actief in ons zorgvuldig opgebouwde netwerk.",
    accent: "hsl(220 50% 18%)",
    colSpan: "md:col-span-2",
    bg: "bg-white",
  },
  {
    icon: HeartHandshake,
    title: "Nazorg als standaard",
    desc: "Na plaatsing blijven we betrokken. Niet als service — maar als manier van werken.",
    accent: "hsl(205 85% 53%)",
    colSpan: "md:col-span-3",
    bg: "bg-primary",
    dark: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function USPSection() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Onze belofte</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight">Waarom Wedeploy?</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {usps.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={usp.colSpan}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`h-full rounded-2xl p-8 border transition-all duration-300 ${
                    usp.dark
                      ? "bg-primary border-primary text-white"
                      : `${usp.bg} border-border/50 hover:border-accent/40 hover:shadow-xl shadow-sm`
                  }`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: usp.dark ? "rgba(255,255,255,0.1)" : `${usp.accent}18`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: usp.dark ? "hsl(205 85% 53%)" : usp.accent }}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 leading-snug ${
                      usp.dark ? "text-white" : "text-primary"
                    }`}
                  >
                    {usp.title}
                  </h3>
                  <p className={`leading-relaxed text-sm ${usp.dark ? "text-white/70" : "text-muted-foreground"}`}>
                    {usp.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
