import { motion } from "framer-motion";

const quotes = [
  {
    text: "Wedeploy nam echt de tijd om te begrijpen wat wij zochten. De match was raak — de kandidaat werkt er nog steeds.",
    author: "Manager Operations",
    company: "Tech bedrijf, Amsterdam",
  },
  {
    text: "Fijn dat ze ook na de plaatsing bereikbaar bleven. Dat zie je niet vaak bij bureaus van deze omvang.",
    author: "HR-directeur",
    company: "Financiële sector, Utrecht",
  },
];

const PlaceholderLogo = ({ width = 100 }: { width?: number }) => (
  <div
    style={{ width }}
    className="h-8 rounded bg-muted/60 opacity-50"
  />
);

export function SocialProof() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Ervaringen</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Wat anderen zeggen</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mb-20 items-center">
          <PlaceholderLogo width={90} />
          <PlaceholderLogo width={120} />
          <PlaceholderLogo width={80} />
          <PlaceholderLogo width={110} />
          <PlaceholderLogo width={95} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-background rounded-2xl border border-border/60 p-8"
            >
              <div className="text-accent text-3xl font-serif leading-none mb-4 opacity-50">&ldquo;</div>
              <p className="text-foreground/80 leading-relaxed mb-6 text-base">{q.text}</p>
              <footer>
                <p className="font-semibold text-primary text-sm">{q.author}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{q.company}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
