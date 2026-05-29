import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import imgPM from "@assets/expertise-projectmanagement.webp";
import imgFM from "@assets/expertise-facility.webp";
import imgVastgoed from "@assets/expertise-vastgoed.webp";
import imgTechniek from "@assets/expertise-techniek.webp";

const areas = [
  {
    id: "pm",
    num: "01",
    title: "Projectmanagement",
    sentence: "Projectmanagers en programmamanagers voor complexe, multidisciplinaire trajecten.",
    img: imgPM,
    alt: "Projectmanagement recruitment Wedeploy",
    span: "lg:col-span-2",
    height: "h-[360px] lg:h-[440px]",
    imgW: 900, imgH: 600,
    gradient: "linear-gradient(135deg, hsl(220 50% 10% / 0.95) 0%, hsl(220 50% 14% / 0.40) 55%, transparent 100%)",
    accent: "#22A4E8",
  },
  {
    id: "fm",
    num: "02",
    title: "Facility Management",
    sentence: "Facilitair coördinatoren en managers op tactisch en strategisch niveau.",
    img: imgFM,
    alt: "Facility Management recruitment Wedeploy",
    span: "lg:col-span-1",
    height: "h-[360px] lg:h-[440px]",
    imgW: 700, imgH: 467,
    gradient: "linear-gradient(to top, hsl(220 50% 8% / 0.96) 0%, hsl(220 50% 12% / 0.55) 50%, transparent 100%)",
    accent: "#22A4E8",
  },
  {
    id: "vastgoed",
    num: "03",
    title: "Vastgoed & Real Estate",
    sentence: "Asset-, property- en vastgoedmanagers voor commercieel en institutioneel vastgoed.",
    img: imgVastgoed,
    alt: "Vastgoed recruitment Wedeploy",
    span: "lg:col-span-1",
    height: "h-[300px] lg:h-[360px]",
    imgW: 700, imgH: 467,
    gradient: "linear-gradient(to top, hsl(220 50% 8% / 0.96) 0%, hsl(220 50% 12% / 0.55) 50%, transparent 100%)",
    accent: "#22A4E8",
  },
  {
    id: "tech",
    num: "04",
    title: "Techniek & Installaties",
    sentence: "Technische coördinatoren, projectleiders en engineers voor E&W installaties.",
    img: imgTechniek,
    alt: "Techniek installaties recruitment Wedeploy",
    span: "lg:col-span-2",
    height: "h-[300px] lg:h-[360px]",
    imgW: 900, imgH: 600,
    gradient: "linear-gradient(to right, hsl(220 50% 8% / 0.96) 0%, hsl(220 50% 12% / 0.50) 45%, transparent 100%)",
    accent: "#22A4E8",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export function ExpertiseAreas() {
  return (
    <section id="diensten-expertise" className="py-28 bg-primary">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full border"
              style={{ background: "hsl(205 85% 53% / 0.12)", borderColor: "hsl(205 85% 53% / 0.3)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              <span className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-accent">Expertisegebieden</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.08]">
              Expertise die verder gaat<br className="hidden md:block" /> dan een online profiel.
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed max-w-xs md:text-right" style={{ color: "rgba(255,255,255,0.50)" }}>
            Wij begrijpen de sectoren en selecteren professionals die daarbinnen kunnen leveren.
          </p>
        </div>

        {/* Editorial bento grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {areas.map((area) => (
            <motion.div
              key={area.id}
              variants={cardVariant}
              className={`group relative overflow-hidden cursor-default ${area.span} ${area.height}`}
              style={{ borderRadius: "16px" }}
            >
              {/* Photo */}
              <img
                src={area.img}
                alt={area.alt}
                width={area.imgW}
                height={area.imgH}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay — directional per card */}
              <div className="absolute inset-0" style={{ background: area.gradient }} />

              {/* Top-left number */}
              <div className="absolute top-5 left-6 z-10">
                <span
                  className="text-[11px] font-black tracking-[3px]"
                  style={{ color: area.accent }}
                >
                  {area.num}
                </span>
              </div>

              {/* Arrow — top right, appears on hover */}
              <div
                className="absolute top-5 right-5 z-10 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                style={{ background: area.accent }}
              >
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>

              {/* Ghost watermark number */}
              <div
                className="absolute bottom-0 right-4 text-[120px] font-black leading-none select-none pointer-events-none opacity-[0.06] group-hover:opacity-[0.09] transition-opacity duration-500"
                style={{ color: "white" }}
              >
                {area.num}
              </div>

              {/* Text — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-white text-[19px] font-bold leading-tight mb-2 tracking-tight">
                  {area.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed max-w-[340px] transition-all duration-300"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {area.sentence}
                </p>
              </div>

              {/* Bottom accent line — grows on hover */}
              <div
                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out z-20"
                style={{ background: area.accent }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
