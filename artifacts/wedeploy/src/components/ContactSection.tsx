import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Upload, ArrowRight } from "lucide-react";

type Tab = "kandidaat" | "opdrachtgever";

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<Tab>("kandidaat");
  const [kandFile, setKandFile] = useState<File | null>(null);
  const [opdrFile, setOpdrFile] = useState<File | null>(null);
  const [isDraggingKand, setIsDraggingKand] = useState(false);
  const [isDraggingOpdr, setIsDraggingOpdr] = useState(false);
  const [kandSent, setKandSent] = useState(false);
  const [opdrSent, setOpdrSent] = useState(false);

  const kandFileRef = useRef<HTMLInputElement>(null);
  const opdrFileRef = useRef<HTMLInputElement>(null);

  const inputClsLight =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-200";

  const labelClsLight = "block text-[12px] font-semibold text-primary mb-1.5 tracking-wide";

  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="mb-12">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Contact</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight leading-[1.1] max-w-2xl">
            Op zoek naar de juiste professional — of jouw volgende stap?
          </h2>
        </div>

        {/* Panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden shadow-[0_24px_80px_hsl(220_50%_18%/0.10)] border border-border/30">

          {/* Left panel — pure typographic navy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-primary relative overflow-hidden flex flex-col p-10 lg:p-14"
          >
            {/* Subtle radial glow accents */}
            <div
              className="absolute top-0 right-0 w-80 h-80 opacity-[0.07] -translate-y-1/3 translate-x-1/3 pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(205 85% 53%) 0%, transparent 70%)", borderRadius: "50%" }}
            />
            <div
              className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.05] -translate-x-1/3 translate-y-1/3 pointer-events-none"
              style={{ background: "hsl(205 85% 53%)" }}
            />

            <div className="relative flex-1 flex flex-col">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-5 h-0.5 rounded-full bg-accent" />
                <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-accent/80">Direct contact</span>
              </div>

              {/* Main typographic statement */}
              <div className="flex-1">
                <h3 className="text-[1.9rem] font-bold text-white leading-[1.18] mb-6 tracking-tight">
                  Direct schakelen<br />met een specialist.
                </h3>
                <p className="text-[14.5px] text-white/60 leading-[1.75] mb-10 max-w-[280px]">
                  Bij Wedeploy geloven we in korte lijnen en directe expertise. Geen omwegen, maar
                  direct om tafel met een partner die uw sector begrijpt.
                </p>

                {/* Accent rule */}
                <div className="w-12 h-0.5 rounded-full bg-accent/40 mb-10" />

                {/* Trust signals */}
                <div className="space-y-3">
                  {[
                    "Altijd direct contact met een senior partner",
                    "Reactie binnen één werkdag",
                    "Volledig vertrouwelijk & vrijblijvend",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-[6px] flex-shrink-0" />
                      <span className="text-[13px] text-white/55 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-5 pt-10 border-t border-white/10 mt-10">
                <a href="mailto:info@wedeploy.nl" className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-0.5">E-mail</p>
                    <p className="text-[13.5px] text-white font-medium">info@wedeploy.nl</p>
                  </div>
                </a>

                <a href="tel:+31652345011" className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-0.5">Telefoon</p>
                    <p className="text-[13.5px] text-white font-medium">+31 6 52345011</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white/70" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-0.5">Adres</p>
                    <p className="text-[13.5px] text-white font-medium leading-relaxed">
                      Krijn Taconiskade 461<br />1087 HW Amsterdam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right panel — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-white"
          >
            {/* Tabs */}
            <div className="flex border-b border-border/50">
              {(["kandidaat", "opdrachtgever"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 text-[13.5px] font-semibold transition-all duration-200 ${
                    activeTab === tab
                      ? "text-accent border-b-2 border-accent bg-accent/[0.02]"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {tab === "kandidaat" ? "Ik ben kandidaat" : "Ik zoek talent"}
                </button>
              ))}
            </div>

            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                {activeTab === "kandidaat" ? (
                  <motion.div
                    key="kandidaat"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {kandSent ? (
                      <div className="text-center py-12">
                        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <ArrowRight className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-[18px] font-bold text-primary mb-2">Bericht ontvangen!</h3>
                        <p className="text-muted-foreground text-[14px]">We nemen zo snel mogelijk contact met je op.</p>
                      </div>
                    ) : (
                      <form onSubmit={(e) => { e.preventDefault(); setKandSent(true); }} className="flex flex-col gap-5">
                        <input type="text" name="_gotcha" tabIndex={-1} aria-hidden="true" autoComplete="off" style={{ display: "none" }} />
                        {/* TODO: Add Cloudflare Turnstile widget here */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClsLight}>Naam *</label>
                            <input required type="text" placeholder="Uw volledige naam" className={inputClsLight} />
                          </div>
                          <div>
                            <label className={labelClsLight}>E-mail *</label>
                            <input required type="email" placeholder="uw@email.nl" className={inputClsLight} />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClsLight}>Telefoonnummer</label>
                            <input type="tel" placeholder="+31 6 ..." className={inputClsLight} />
                          </div>
                          <div>
                            <label className={labelClsLight}>LinkedIn-profiel</label>
                            <input type="url" placeholder="linkedin.com/in/..." className={inputClsLight} />
                          </div>
                        </div>

                        <div>
                          <label className={labelClsLight}>CV uploaden</label>
                          <input ref={kandFileRef} type="file" accept=".pdf,.doc,.docx" className="hidden"
                            onChange={(e) => setKandFile(e.target.files?.[0] ?? null)} />
                          <div
                            onClick={() => kandFileRef.current?.click()}
                            onDragOver={(e) => { e.preventDefault(); setIsDraggingKand(true); }}
                            onDragLeave={() => setIsDraggingKand(false)}
                            onDrop={(e) => { e.preventDefault(); setIsDraggingKand(false); const f = e.dataTransfer.files[0]; if (f) setKandFile(f); }}
                            className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed py-7 cursor-pointer transition-all duration-200 ${
                              isDraggingKand ? "border-accent bg-accent/5 scale-[1.01]" : "border-border hover:border-accent/50 bg-background"
                            }`}
                          >
                            <Upload className={`w-5 h-5 ${kandFile ? "text-accent" : "text-muted-foreground/50"}`} />
                            <span className="text-[13px] text-muted-foreground text-center px-4">
                              {kandFile
                                ? <span className="text-accent font-medium">{kandFile.name}</span>
                                : <>Sleep je cv hierheen of <span className="text-accent font-medium">klik om te uploaden</span></>}
                            </span>
                            <span className="text-[11px] text-muted-foreground/50">PDF, DOC of DOCX</span>
                          </div>
                        </div>

                        <div>
                          <label className={labelClsLight}>Bericht</label>
                          <textarea rows={3} placeholder="Vertel ons kort over jezelf en je zoekopdracht..."
                            className={`${inputClsLight} resize-none`} />
                        </div>

                        <motion.button type="submit"
                          whileHover={{ y: -2, boxShadow: "0 10px 28px hsl(220 50% 18% / 0.18)" }}
                          whileTap={{ y: 0 }} transition={{ duration: 0.2 }}
                          className="w-full rounded-full bg-primary text-white py-[15px] text-[14.5px] font-bold mt-1">
                          Verstuur aanmelding
                        </motion.button>
                      </form>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="opdrachtgever"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {opdrSent ? (
                      <div className="text-center py-12">
                        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <ArrowRight className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-[18px] font-bold text-primary mb-2">Bericht ontvangen!</h3>
                        <p className="text-muted-foreground text-[14px]">We nemen zo snel mogelijk contact met u op.</p>
                      </div>
                    ) : (
                      <form onSubmit={(e) => { e.preventDefault(); setOpdrSent(true); }} className="flex flex-col gap-5">
                        <input type="text" name="_gotcha" tabIndex={-1} aria-hidden="true" autoComplete="off" style={{ display: "none" }} />
                        {/* TODO: Add Cloudflare Turnstile widget here */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClsLight}>Bedrijf *</label>
                            <input required type="text" placeholder="Bedrijfsnaam" className={inputClsLight} />
                          </div>
                          <div>
                            <label className={labelClsLight}>Contactpersoon *</label>
                            <input required type="text" placeholder="Uw naam" className={inputClsLight} />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClsLight}>E-mail *</label>
                            <input required type="email" placeholder="uw@bedrijf.nl" className={inputClsLight} />
                          </div>
                          <div>
                            <label className={labelClsLight}>Telefoonnummer</label>
                            <input type="tel" placeholder="+31 ..." className={inputClsLight} />
                          </div>
                        </div>

                        <div>
                          <label className={labelClsLight}>Type aanvraag</label>
                          <select className={`${inputClsLight} cursor-pointer`}>
                            <option value="">Selecteer een optie</option>
                            <option value="werving">Werving & Selectie</option>
                            <option value="detachering">Detachering</option>
                            <option value="interim">Interim-oplossing</option>
                            <option value="anders">Anders</option>
                          </select>
                        </div>

                        <div>
                          <label className={labelClsLight}>Omschrijving *</label>
                          <textarea required rows={4}
                            placeholder="Beschrijf het type professional, de functie, sector en eventuele bijzonderheden..."
                            className={`${inputClsLight} resize-none`} />
                        </div>

                        <div>
                          <label className={labelClsLight}>Bestand uploaden <span className="font-normal text-muted-foreground/60">(optioneel)</span></label>
                          <input ref={opdrFileRef} type="file" accept=".pdf,.doc,.docx" className="hidden"
                            onChange={(e) => setOpdrFile(e.target.files?.[0] ?? null)} />
                          <div
                            onClick={() => opdrFileRef.current?.click()}
                            onDragOver={(e) => { e.preventDefault(); setIsDraggingOpdr(true); }}
                            onDragLeave={() => setIsDraggingOpdr(false)}
                            onDrop={(e) => { e.preventDefault(); setIsDraggingOpdr(false); const f = e.dataTransfer.files[0]; if (f) setOpdrFile(f); }}
                            className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed py-6 cursor-pointer transition-all duration-200 ${
                              isDraggingOpdr ? "border-accent bg-accent/5 scale-[1.01]" : "border-border hover:border-accent/50 bg-background"
                            }`}
                          >
                            <Upload className={`w-5 h-5 ${opdrFile ? "text-accent" : "text-muted-foreground/50"}`} />
                            <span className="text-[13px] text-muted-foreground text-center px-4">
                              {opdrFile
                                ? <span className="text-accent font-medium">{opdrFile.name}</span>
                                : <>Sleep een bestand hierheen of <span className="text-accent font-medium">klik om te uploaden</span></>}
                            </span>
                          </div>
                        </div>

                        <motion.button type="submit"
                          whileHover={{ y: -2, boxShadow: "0 10px 28px hsl(205 85% 53% / 0.3)" }}
                          whileTap={{ y: 0 }} transition={{ duration: 0.2 }}
                          className="w-full rounded-full bg-accent text-white py-[15px] text-[14.5px] font-bold mt-1">
                          Plan een kennismaking
                        </motion.button>
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
