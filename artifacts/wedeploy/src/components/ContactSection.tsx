import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Upload, CheckCircle2, AlertCircle } from "lucide-react";
import nickyPhoto from "@assets/Nick_1779994992412.webp";

/**
 * Contact form — submits to /api/contact on the API server.
 *
 * To connect the form to real email delivery, configure the following
 * Replit Secrets on the api-server:
 *   SMTP_HOST     — SMTP server hostname
 *   SMTP_PORT     — SMTP port (default: 587)
 *   SMTP_USER     — SMTP username
 *   SMTP_PASS     — SMTP password or API key
 *   SMTP_FROM     — From address (default: noreply@wedeploy.nl)
 *   CONTACT_TO    — Recipient (default: info@wedeploy.nl)
 *
 * The API URL is read from VITE_API_URL (set as a Replit Secret on the
 * wedeploy app). Leave it unset to use the same origin (works when a
 * reverse proxy routes /api/* to the api-server).
 */

type Tab = "kandidaat" | "opdrachtgever";

const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? "";

async function submitForm(payload: Record<string, string>): Promise<void> {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { error?: string }).error ?? "Versturen mislukt.");
  }
}

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<Tab>("kandidaat");
  const [kandFile, setKandFile] = useState<File | null>(null);
  const [opdrFile, setOpdrFile] = useState<File | null>(null);
  const [isDraggingKand, setIsDraggingKand] = useState(false);
  const [isDraggingOpdr, setIsDraggingOpdr] = useState(false);
  const [kandSent, setKandSent] = useState(false);
  const [opdrSent, setOpdrSent] = useState(false);
  const [kandError, setKandError] = useState<string | null>(null);
  const [opdrError, setOpdrError] = useState<string | null>(null);
  const [kandLoading, setKandLoading] = useState(false);
  const [opdrLoading, setOpdrLoading] = useState(false);

  const kandFileRef = useRef<HTMLInputElement>(null);
  const opdrFileRef = useRef<HTMLInputElement>(null);
  const kandFormRef = useRef<HTMLFormElement>(null);
  const opdrFormRef = useRef<HTMLFormElement>(null);

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-4 py-3.5 text-[14.5px] text-foreground placeholder:text-muted-foreground/55 outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-200";

  const labelCls = "block text-[12.5px] font-semibold text-primary mb-2 tracking-wide";

  const handleKandSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKandError(null);
    setKandLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      await submitForm({
        type: "kandidaat",
        _gotcha: fd.get("_gotcha") as string,
        naam: fd.get("naam") as string,
        email: fd.get("email") as string,
        telefoon: fd.get("telefoon") as string,
        linkedin: fd.get("linkedin") as string,
        bericht: fd.get("bericht") as string,
      });
      setKandSent(true);
    } catch (err) {
      setKandError(err instanceof Error ? err.message : "Versturen mislukt. Probeer het later opnieuw.");
    } finally {
      setKandLoading(false);
    }
  };

  const handleOpdrSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpdrError(null);
    setOpdrLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      await submitForm({
        type: "opdrachtgever",
        _gotcha: fd.get("_gotcha") as string,
        bedrijf: fd.get("bedrijf") as string,
        naam: fd.get("naam") as string,
        email: fd.get("email") as string,
        telefoon: fd.get("telefoon") as string,
        typeAanvraag: fd.get("typeAanvraag") as string,
        bericht: fd.get("bericht") as string,
      });
      setOpdrSent(true);
    } catch (err) {
      setOpdrError(err instanceof Error ? err.message : "Versturen mislukt. Probeer het later opnieuw.");
    } finally {
      setOpdrLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="mb-12">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent">Contact</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary tracking-tight leading-[1.1] max-w-2xl">
            Klaar voor een betere match?
          </h2>
          <p className="mt-4 text-[16px] text-muted-foreground leading-relaxed max-w-xl">
            Of u nu tijdelijke expertise zoekt of als professional toe bent aan een volgende stap:
            wij denken graag met u mee.
          </p>
        </div>

        {/* Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden shadow-[0_24px_80px_hsl(220_50%_18%/0.10)] border border-border/30">

          {/* Left — typographic navy panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-primary relative overflow-hidden flex flex-col p-10 lg:p-14"
          >
            <div
              className="absolute top-0 right-0 w-80 h-80 opacity-[0.07] -translate-y-1/3 translate-x-1/3 pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(205 85% 53%) 0%, transparent 70%)", borderRadius: "50%" }}
            />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.05] -translate-x-1/3 translate-y-1/3 pointer-events-none"
              style={{ background: "hsl(205 85% 53%)" }} />
            {/* Subtle vignette — adds depth and richness without being visible */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 25% 10%, transparent 35%, hsl(220 58% 10% / 0.22) 100%)" }}
            />

            <div className="relative flex-1 flex flex-col">
              {/* Portrait — horizontal editorial composition */}
              <div className="flex flex-row items-center gap-4 mb-8">
                <div className="w-[88px] h-[96px] flex-shrink-0 rounded-[14px] overflow-hidden border border-white/[0.10]">
                  <img
                    src={nickyPhoto}
                    alt="Nicky — Wedeploy"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "grayscale(50%) brightness(1.08) contrast(0.96)",
                      objectPosition: "50% 18%",
                      transform: "scale(1.08)",
                      transformOrigin: "50% 20%",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] font-semibold tracking-[0.5px] text-white/55">Nicky</span>
                  <span className="text-[11px] text-white/28 leading-relaxed">Persoonlijk contact<br />&amp; begeleiding</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-5 h-0.5 rounded-full bg-accent" />
                <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-accent/80">Direct contact</span>
              </div>

              <div className="flex-1">
                <h3 className="text-[1.85rem] font-bold text-white leading-[1.18] mb-5 tracking-tight">
                  Direct schakelen<br />met een specialist.
                </h3>
                <p className="text-[15px] text-white/55 leading-[1.8] mb-10 max-w-[290px]">
                  Heb je een vraag, zoek je versterking of wil je vrijblijvend kennismaken? Laat je
                  gegevens achter, dan nemen we persoonlijk contact op.
                </p>

                <div className="w-10 h-0.5 rounded-full bg-accent/40 mb-10" />

                <div className="space-y-3.5">
                  {[
                    "Korte lijnen, persoonlijk contact",
                    "Reactie binnen één werkdag",
                    "Volledig vertrouwelijk & vrijblijvend",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-[7px] flex-shrink-0" />
                      <span className="text-[13.5px] text-white/55 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 pt-10 border-t border-white/[0.08] mt-10">
                <a href="mailto:info@wedeploy.nl" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors duration-250">
                    <Mail className="w-[17px] h-[17px] text-white/50 group-hover:text-white transition-colors duration-250" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[2px] uppercase text-white/25 mb-1">E-mail</p>
                    <p className="text-[14px] text-white/80 font-medium group-hover:text-white transition-colors duration-200">info@wedeploy.nl</p>
                  </div>
                </a>

                <a href="tel:0852128668" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors duration-250">
                    <Phone className="w-[17px] h-[17px] text-white/50 group-hover:text-white transition-colors duration-250" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[2px] uppercase text-white/25 mb-1">Telefoon</p>
                    <p className="text-[14px] text-white/80 font-medium group-hover:text-white transition-colors duration-200">085 212 8668</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-[17px] h-[17px] text-white/50" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[2px] uppercase text-white/25 mb-1">Adres</p>
                    <p className="text-[14px] text-white/80 font-medium leading-[1.7]">
                      Krijn Taconiskade 461<br />1087 HW Amsterdam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
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
                  {tab === "kandidaat" ? "Voor professionals" : "Voor opdrachtgevers"}
                </button>
              ))}
            </div>

            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                {activeTab === "kandidaat" ? (
                  <motion.div key="kandidaat"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                    {kandSent ? (
                      <div className="text-center py-14">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                          <CheckCircle2 className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-[20px] font-bold text-primary mb-2">Bericht ontvangen</h3>
                        <p className="text-muted-foreground text-[15px] max-w-xs mx-auto leading-relaxed">
                          We nemen binnen één werkdag persoonlijk contact met u op.
                        </p>
                      </div>
                    ) : (
                      <form ref={kandFormRef} onSubmit={handleKandSubmit} className="flex flex-col gap-5">
                        {/* Honeypot — must stay empty */}
                        <input type="text" name="_gotcha" tabIndex={-1} aria-hidden="true" autoComplete="off" style={{ display: "none" }} />
                        {/* TODO: Add Cloudflare Turnstile widget — set CLOUDFLARE_TURNSTILE_SITE_KEY in Replit Secrets */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelCls}>Naam <span className="text-accent">*</span></label>
                            <input required type="text" name="naam" placeholder="Uw volledige naam" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>E-mail <span className="text-accent">*</span></label>
                            <input required type="email" name="email" placeholder="uw@email.nl" className={inputCls} />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelCls}>Telefoonnummer</label>
                            <input type="tel" name="telefoon" placeholder="+31 6 ..." className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>LinkedIn-profiel</label>
                            <input type="url" name="linkedin" placeholder="linkedin.com/in/..." className={inputCls} />
                          </div>
                        </div>

                        <div>
                          <label className={labelCls}>CV uploaden
                            <span className="font-normal text-muted-foreground/60 ml-1">(optioneel)</span>
                          </label>
                          <input ref={kandFileRef} type="file" accept=".pdf,.doc,.docx" className="hidden"
                            onChange={(e) => setKandFile(e.target.files?.[0] ?? null)} />
                          <div
                            onClick={() => kandFileRef.current?.click()}
                            onDragOver={(e) => { e.preventDefault(); setIsDraggingKand(true); }}
                            onDragLeave={() => setIsDraggingKand(false)}
                            onDrop={(e) => { e.preventDefault(); setIsDraggingKand(false); const f = e.dataTransfer.files[0]; if (f) setKandFile(f); }}
                            className={`flex flex-col items-center justify-center gap-2.5 rounded-xl border-2 border-dashed py-8 cursor-pointer transition-all duration-200 ${
                              isDraggingKand ? "border-accent bg-accent/5 scale-[1.01]" : "border-border/60 hover:border-accent/50 bg-background/50"
                            }`}
                          >
                            <Upload className={`w-5 h-5 ${kandFile ? "text-accent" : "text-muted-foreground/40"}`} />
                            <span className="text-[13.5px] text-muted-foreground text-center px-4">
                              {kandFile
                                ? <span className="text-accent font-semibold">{kandFile.name}</span>
                                : <>Sleep uw cv hierheen of <span className="text-accent font-semibold">klik om te uploaden</span></>}
                            </span>
                            <span className="text-[11.5px] text-muted-foreground/45">PDF, DOC of DOCX — max. 10MB</span>
                          </div>
                          <p className="text-[11.5px] text-muted-foreground/45 mt-2">
                            Bestandsuploads worden verwerkt in de productieversie. Vermeld uw cv-link in het berichtveld indien gewenst.
                          </p>
                        </div>

                        <div>
                          <label className={labelCls}>Bericht <span className="text-accent">*</span></label>
                          <textarea required rows={4} name="bericht"
                            placeholder="Vertel ons kort over uzelf, uw achtergrond en waarnaar u op zoek bent..."
                            className={`${inputCls} resize-none`} />
                        </div>

                        {kandError && (
                          <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-100 p-4 text-[13.5px] text-red-700">
                            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            {kandError}
                          </div>
                        )}

                        <motion.button type="submit" disabled={kandLoading}
                          whileHover={!kandLoading ? { y: -2, boxShadow: "0 10px 28px hsl(220 50% 18% / 0.18)" } : {}}
                          whileTap={!kandLoading ? { y: 0 } : {}} transition={{ duration: 0.2 }}
                          className="w-full rounded-full bg-primary text-white py-4 text-[14.5px] font-bold mt-1 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity">
                          {kandLoading ? "Versturen..." : "Verstuur aanmelding"}
                        </motion.button>
                      </form>
                    )}
                  </motion.div>
                ) : (
                  <motion.div key="opdrachtgever"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                    {opdrSent ? (
                      <div className="text-center py-14">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                          <CheckCircle2 className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-[20px] font-bold text-primary mb-2">Bericht ontvangen</h3>
                        <p className="text-muted-foreground text-[15px] max-w-xs mx-auto leading-relaxed">
                          We nemen binnen één werkdag persoonlijk contact met u op.
                        </p>
                      </div>
                    ) : (
                      <form ref={opdrFormRef} onSubmit={handleOpdrSubmit} className="flex flex-col gap-5">
                        {/* Honeypot — must stay empty */}
                        <input type="text" name="_gotcha" tabIndex={-1} aria-hidden="true" autoComplete="off" style={{ display: "none" }} />
                        {/* TODO: Add Cloudflare Turnstile widget — set CLOUDFLARE_TURNSTILE_SITE_KEY in Replit Secrets */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelCls}>Bedrijf <span className="text-accent">*</span></label>
                            <input required type="text" name="bedrijf" placeholder="Bedrijfsnaam" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>Contactpersoon <span className="text-accent">*</span></label>
                            <input required type="text" name="naam" placeholder="Uw naam" className={inputCls} />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelCls}>E-mail <span className="text-accent">*</span></label>
                            <input required type="email" name="email" placeholder="uw@bedrijf.nl" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>Telefoonnummer</label>
                            <input type="tel" name="telefoon" placeholder="+31 ..." className={inputCls} />
                          </div>
                        </div>

                        <div>
                          <label className={labelCls}>Type aanvraag</label>
                          <select name="typeAanvraag" className={`${inputCls} cursor-pointer`}>
                            <option value="">Selecteer een optie</option>
                            <option value="Werving & Selectie">Werving & Selectie</option>
                            <option value="Detachering">Detachering</option>
                            <option value="Interim-oplossing">Interim-oplossing</option>
                            <option value="Anders">Anders</option>
                          </select>
                        </div>

                        <div>
                          <label className={labelCls}>Omschrijving <span className="text-accent">*</span></label>
                          <textarea required rows={4} name="bericht"
                            placeholder="Beschrijf het type professional, de functie, sector en eventuele bijzonderheden..."
                            className={`${inputCls} resize-none`} />
                        </div>

                        <div>
                          <label className={labelCls}>Bijlage uploaden
                            <span className="font-normal text-muted-foreground/60 ml-1">(optioneel)</span>
                          </label>
                          <input ref={opdrFileRef} type="file" accept=".pdf,.doc,.docx" className="hidden"
                            onChange={(e) => setOpdrFile(e.target.files?.[0] ?? null)} />
                          <div
                            onClick={() => opdrFileRef.current?.click()}
                            onDragOver={(e) => { e.preventDefault(); setIsDraggingOpdr(true); }}
                            onDragLeave={() => setIsDraggingOpdr(false)}
                            onDrop={(e) => { e.preventDefault(); setIsDraggingOpdr(false); const f = e.dataTransfer.files[0]; if (f) setOpdrFile(f); }}
                            className={`flex flex-col items-center justify-center gap-2.5 rounded-xl border-2 border-dashed py-7 cursor-pointer transition-all duration-200 ${
                              isDraggingOpdr ? "border-accent bg-accent/5 scale-[1.01]" : "border-border/60 hover:border-accent/50 bg-background/50"
                            }`}
                          >
                            <Upload className={`w-5 h-5 ${opdrFile ? "text-accent" : "text-muted-foreground/40"}`} />
                            <span className="text-[13.5px] text-muted-foreground text-center px-4">
                              {opdrFile
                                ? <span className="text-accent font-semibold">{opdrFile.name}</span>
                                : <>Sleep een bestand hierheen of <span className="text-accent font-semibold">klik om te uploaden</span></>}
                            </span>
                          </div>
                        </div>

                        {opdrError && (
                          <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-100 p-4 text-[13.5px] text-red-700">
                            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            {opdrError}
                          </div>
                        )}

                        <motion.button type="submit" disabled={opdrLoading}
                          whileHover={!opdrLoading ? { y: -2, boxShadow: "0 10px 28px hsl(205 85% 53% / 0.3)" } : {}}
                          whileTap={!opdrLoading ? { y: 0 } : {}} transition={{ duration: 0.2 }}
                          className="w-full rounded-full bg-accent text-white py-4 text-[14.5px] font-bold mt-1 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity">
                          {opdrLoading ? "Versturen..." : "Plan een kennismaking"}
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
