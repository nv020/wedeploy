import { motion } from "framer-motion";

const quotes = [
  {
    text: "Wedeploy nam echt de tijd om te begrijpen wat we zochten. De match was raak — de kandidaat werkt er nog steeds.",
    author: "Manager Operations",
    company: "Tech bedrijf, Amsterdam",
  },
  {
    text: "Fijn dat ze ook na plaatsing bereikbaar bleven. Dat zie je niet vaak bij bureaus van deze omvang.",
    author: "HR-directeur",
    company: "Financiële sector, Utrecht",
  },
];

const PlaceholderLogo = ({ width = 100 }: { width?: number }) => (
  <div style={{ width }} className="h-6 rounded-md bg-primary/10 opacity-40" />
);

export function SocialProof() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Ervaringen</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight">Wat anderen zeggen</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mb-20 items-center opacity-60">
          <PlaceholderLogo width={88} />
          <PlaceholderLogo width={112} />
          <PlaceholderLogo width={76} />
          <PlaceholderLogo width={104} />
          <PlaceholderLogo width={92} />
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card rounded-2xl border border-border/60 p-8"
            >
              <div className="text-accent text-4xl font-serif leading-none mb-4 opacity-40 select-none">&ldquo;</div>
              <p className="text-foreground/75 leading-relaxed mb-6 text-sm">{q.text}</p>
              <footer>
                <p className="font-bold text-primary text-sm">{q.author}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{q.company}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
