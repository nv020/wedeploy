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

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-200";
  const labelCls = "block text-[12px] font-semibold text-primary mb-1.5 tracking-wide";

  return (
    <section id="contact" className="py-28" style={{ background: "hsl(36 28% 97%)" }}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Contact</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight leading-[1.1] mb-5">
            Op zoek naar de juiste professional —<br className="hidden md:block" /> of jouw volgende stap?
          </h2>
          <p className="text-[16px] text-muted-foreground mb-10">We maken graag kennis.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 flex-wrap">
            <a
              href="mailto:info@wedeploy.nl"
              className="inline-flex items-center gap-2.5 text-[14px] font-medium text-primary hover:text-accent transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              info@wedeploy.nl
            </a>
            <a
              href="tel:+31652345011"
              className="inline-flex items-center gap-2.5 text-[14px] font-medium text-primary hover:text-accent transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              +31 6 52345011
            </a>
            <span className="inline-flex items-center gap-2.5 text-[14px] text-muted-foreground">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              Krijn Taconiskade 461, 1087 HW Amsterdam
            </span>
          </div>
        </div>

        {/* Form card */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-border/50 shadow-[0_20px_64px_hsl(220_50%_18%/0.08)] overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-border/50">
            {(["kandidaat", "opdrachtgever"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-[13.5px] font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "text-accent border-b-2 border-accent bg-accent/[0.03]"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {tab === "kandidaat" ? "Ik ben kandidaat" : "Ik zoek talent"}
              </button>
            ))}
          </div>

          {/* Forms */}
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
                    <form
                      onSubmit={(e) => { e.preventDefault(); setKandSent(true); }}
                      className="flex flex-col gap-5"
                    >
                      {/* Honeypot — hidden from humans, traps bots */}
                      <input
                        type="text"
                        name="_gotcha"
                        tabIndex={-1}
                        aria-hidden="true"
                        autoComplete="off"
                        style={{ display: "none" }}
                      />
                      {/* TODO: Add Cloudflare Turnstile widget here */}
                      {/* Site key: CLOUDFLARE_TURNSTILE_SITE_KEY */}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls}>Naam *</label>
                          <input required type="text" placeholder="Uw volledige naam" className={inputCls} />
                        </div>
                        <div>
                          <label className={labelCls}>E-mail *</label>
                          <input required type="email" placeholder="uw@email.nl" className={inputCls} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls}>Telefoonnummer</label>
                          <input type="tel" placeholder="+31 6 ..." className={inputCls} />
                        </div>
                        <div>
                          <label className={labelCls}>LinkedIn-profiel</label>
                          <input type="url" placeholder="linkedin.com/in/..." className={inputCls} />
                        </div>
                      </div>

                      {/* CV Upload */}
                      <div>
                        <label className={labelCls}>CV uploaden</label>
                        <input
                          ref={kandFileRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={(e) => setKandFile(e.target.files?.[0] ?? null)}
                        />
                        <div
                          onClick={() => kandFileRef.current?.click()}
                          onDragOver={(e) => { e.preventDefault(); setIsDraggingKand(true); }}
                          onDragLeave={() => setIsDraggingKand(false)}
                          onDrop={(e) => {
                            e.preventDefault();
                            setIsDraggingKand(false);
                            const file = e.dataTransfer.files[0];
                            if (file) setKandFile(file);
                          }}
                          className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed py-7 cursor-pointer transition-all duration-200 ${
                            isDraggingKand
                              ? "border-accent bg-accent/5 scale-[1.01]"
                              : "border-border hover:border-accent/50 bg-background"
                          }`}
                        >
                          <Upload className={`w-5 h-5 ${kandFile ? "text-accent" : "text-muted-foreground/50"}`} />
                          <span className="text-[13px] text-muted-foreground text-center px-4">
                            {kandFile
                              ? <span className="text-accent font-medium">{kandFile.name}</span>
                              : <>Sleep je cv hierheen of <span className="text-accent font-medium">klik om te uploaden</span></>
                            }
                          </span>
                          <span className="text-[11px] text-muted-foreground/50">PDF, DOC of DOCX</span>
                        </div>
                      </div>

                      <div>
                        <label className={labelCls}>Bericht</label>
                        <textarea
                          rows={3}
                          placeholder="Vertel ons kort over jezelf en je zoekopdracht..."
                          className={`${inputCls} resize-none`}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ y: -2, boxShadow: "0 10px 28px hsl(220 50% 18% / 0.18)" }}
                        whileTap={{ y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full rounded-full bg-primary text-white py-[15px] text-[14.5px] font-bold mt-1"
                      >
                        Verstuur aanmelding
                      </motion.button>
                      {/* TODO: Rate limiting — add backend validation before production */}
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
                    <form
                      onSubmit={(e) => { e.preventDefault(); setOpdrSent(true); }}
                      className="flex flex-col gap-5"
                    >
                      {/* Honeypot — hidden from humans, traps bots */}
                      <input
                        type="text"
                        name="_gotcha"
                        tabIndex={-1}
                        aria-hidden="true"
                        autoComplete="off"
                        style={{ display: "none" }}
                      />
                      {/* TODO: Add Cloudflare Turnstile widget here */}
                      {/* Site key: CLOUDFLARE_TURNSTILE_SITE_KEY */}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls}>Bedrijf *</label>
                          <input required type="text" placeholder="Bedrijfsnaam" className={inputCls} />
                        </div>
                        <div>
                          <label className={labelCls}>Contactpersoon *</label>
                          <input required type="text" placeholder="Uw naam" className={inputCls} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls}>E-mail *</label>
                          <input required type="email" placeholder="uw@bedrijf.nl" className={inputCls} />
                        </div>
                        <div>
                          <label className={labelCls}>Telefoonnummer</label>
                          <input type="tel" placeholder="+31 ..." className={inputCls} />
                        </div>
                      </div>

                      <div>
                        <label className={labelCls}>Type vraag</label>
                        <select className={`${inputCls} cursor-pointer`}>
                          <option value="">Selecteer een optie</option>
                          <option value="werving">Werving & Selectie</option>
                          <option value="detachering">Detachering</option>
                          <option value="interim">Interim-oplossing</option>
                          <option value="anders">Anders</option>
                        </select>
                      </div>

                      <div>
                        <label className={labelCls}>Omschrijving *</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Beschrijf het type professional, de functie, sector en eventuele bijzonderheden..."
                          className={`${inputCls} resize-none`}
                        />
                      </div>

                      {/* Optional file upload */}
                      <div>
                        <label className={labelCls}>Bestand uploaden <span className="font-normal text-muted-foreground/60">(optioneel)</span></label>
                        <input
                          ref={opdrFileRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={(e) => setOpdrFile(e.target.files?.[0] ?? null)}
                        />
                        <div
                          onClick={() => opdrFileRef.current?.click()}
                          onDragOver={(e) => { e.preventDefault(); setIsDraggingOpdr(true); }}
                          onDragLeave={() => setIsDraggingOpdr(false)}
                          onDrop={(e) => {
                            e.preventDefault();
                            setIsDraggingOpdr(false);
                            const file = e.dataTransfer.files[0];
                            if (file) setOpdrFile(file);
                          }}
                          className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed py-6 cursor-pointer transition-all duration-200 ${
                            isDraggingOpdr
                              ? "border-accent bg-accent/5 scale-[1.01]"
                              : "border-border hover:border-accent/50 bg-background"
                          }`}
                        >
                          <Upload className={`w-5 h-5 ${opdrFile ? "text-accent" : "text-muted-foreground/50"}`} />
                          <span className="text-[13px] text-muted-foreground text-center px-4">
                            {opdrFile
                              ? <span className="text-accent font-medium">{opdrFile.name}</span>
                              : <>Sleep een bestand hierheen of <span className="text-accent font-medium">klik om te uploaden</span></>
                            }
                          </span>
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ y: -2, boxShadow: "0 10px 28px hsl(205 85% 53% / 0.3)" }}
                        whileTap={{ y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full rounded-full bg-accent text-white py-[15px] text-[14.5px] font-bold mt-1"
                      >
                        Plan een kennismaking
                      </motion.button>
                      {/* TODO: Rate limiting — add backend validation before production */}
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
