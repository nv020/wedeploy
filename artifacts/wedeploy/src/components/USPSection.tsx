import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const usps = [
  {
    title: "Geen cv's, maar de juiste mensen",
    desc: "We kijken verder dan papier en verbinden de persoon achter het profiel.",
    colSpan: "md:col-span-2"
  },
  {
    title: "Minder mismatches door diepgaande intake",
    desc: "We investeren tijd vooraf, zodat beide kanten weten waar ze aan toe zijn.",
    colSpan: "md:col-span-1"
  },
  {
    title: "Transparant en duidelijk proces",
    desc: "Geen verrassingen. Je weet precies waar je aan toe bent in elke stap.",
    colSpan: "md:col-span-1"
  },
  {
    title: "Netwerkgedreven search",
    desc: "We posten niet en hopen. We zoeken actief binnen ons zorgvuldig opgebouwde netwerk.",
    colSpan: "md:col-span-2"
  },
  {
    title: "Nazorg als standaard",
    desc: "Na plaatsing blijven we betrokken. Dat is geen extra service, maar hoe wij werken.",
    colSpan: "md:col-span-3"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function USPSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Waarom Wedeploy?</h2>
          <p className="text-lg text-muted-foreground">Onze belofte aan jou.</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {usps.map((usp, idx) => (
            <motion.div key={idx} variants={itemVariants} className={usp.colSpan}>
              <Card className="h-full border-border/50 bg-card hover:border-accent/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{usp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{usp.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
