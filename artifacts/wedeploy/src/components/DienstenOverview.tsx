import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const opdrachtgeverBullets = [
  "Interim capaciteit",
  "Projectleiding",
  "Specialistische rollen",
  "Vaste invulling",
];

const professionalBullets = [
  "Interim opdrachten",
  "Projectrollen",
  "Detavast",
  "Vaste functies",
];

export function DienstenOverview() {
  return (
    <section id="diensten" className="py-28 bg-card border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Diensten</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight">Hoe wij helpen</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

          {/* Opdrachtgevers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -5 }}
            className="bg-primary rounded-2xl p-10 lg:p-12 flex flex-col relative overflow-hidden cursor-default shadow-[0_4px_24px_hsl(220_50%_18%/0.10)] hover:shadow-[0_16px_48px_hsl(220_50%_18%/0.22)] transition-shadow duration-300"
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 opacity-[0.08] -translate-y-1/4 translate-x-1/4 pointer-events-none rounded-full"
              style={{ background: "hsl(205 85% 53%)" }}
            />
            <div className="relative flex flex-col flex-1">
              <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-accent/80 mb-6">Voor opdrachtgevers</span>
              <h3 className="text-[1.55rem] font-bold text-white leading-[1.2] mb-4">
                Professionals die direct waarde toevoegen.
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-8">
                Wij helpen organisaties aan professionals die direct waarde toevoegen binnen
                Facility Management, vastgoed en technische projecten.
              </p>
              <ul className="space-y-3.5 flex-1 mb-10">
                {opdrachtgeverBullets.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-[14.5px] text-white/75">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 8px 30px hsl(205 85% 53% / 0.4)" }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-[13.5px] font-bold self-start mt-auto"
              >
                Laten we matchen <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Professionals */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            whileHover={{ y: -5 }}
            className="bg-white border border-border/50 rounded-2xl p-10 lg:p-12 flex flex-col cursor-default shadow-[0_4px_16px_hsl(220_50%_18%/0.05)] hover:shadow-[0_16px_40px_hsl(220_50%_18%/0.09)] hover:border-accent/25 transition-all duration-300"
          >
            <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-accent/80 mb-6">Voor professionals</span>
            <h3 className="text-[1.55rem] font-bold text-primary leading-[1.2] mb-4">
              Opdrachten die passen bij wie u bent.
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
              Wij verbinden ervaren professionals met opdrachten en functies die passen bij hun
              expertise, ambitie en manier van werken.
            </p>
            <ul className="space-y-3.5 flex-1 mb-10">
              {professionalBullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-[14.5px] text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <motion.a
              href="#kandidaten"
              whileHover={{ y: -2, boxShadow: "0 8px 24px hsl(220 50% 18% / 0.10)" }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-7 py-3.5 text-[13.5px] font-bold self-start mt-auto"
            >
              Bekijk mogelijkheden <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
