import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Paperclip, X } from "lucide-react";


import { resolveContactContext, switchContactRole, type ContactRole as Role } from "./contact-context";

const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? "";

async function submitForm(data: FormData): Promise<void> {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    body: data,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { error?: string }).error ?? (res.status === 413 ? "Het bestand is te groot. Upload een cv van maximaal 3 MB." : "Versturen mislukt."));
  }
}

const inputCls =
  "w-full rounded-[10px] border border-primary/10 bg-[#FEFDF9] px-3.5 py-2.5 text-base text-primary placeholder:text-primary/30 outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-200";

const labelCls = "block text-[11px] font-bold text-primary mb-1.5 tracking-wide uppercase";

export function ContactSection({ defaultRole = "opdrachtgever", heading, description, context = "", readQuery = false, vacancyId = "", showProfile = false, compact = false, lockRole = false, retainContext = false }: { defaultRole?: Role; heading?: string; description?: string; context?: string; readQuery?: boolean; vacancyId?: string; showProfile?: boolean; compact?: boolean; lockRole?: boolean; retainContext?: boolean }) {
  const [role, setRole] = useState<Role>(defaultRole);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [requestContext, setRequestContext] = useState(context);
  const [activeVacancyId, setActiveVacancyId] = useState(vacancyId);
  const [activeVacancyTitle, setActiveVacancyTitle] = useState(vacancyId ? context : "");
  useEffect(() => {
    const syncContext = () => {
      const resolved = resolveContactContext(readQuery ? window.location.search : "", { role: defaultRole, context, vacancyId });
      setRole(resolved.role);
      setRequestContext(resolved.context);
      setActiveVacancyId(resolved.vacancyId);
      setActiveVacancyTitle(resolved.vacancyId ? resolved.context : "");
      setSent(false);
      setError(null);
      setCvFile(null);
    };
    syncContext();
    window.addEventListener("popstate", syncContext);
    return () => window.removeEventListener("popstate", syncContext);
  }, [readQuery, context, defaultRole, vacancyId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    if (cvFile) fd.set("cv", cvFile);
    try {
      await submitForm(fd);
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Versturen mislukt. Probeer het later opnieuw.");
    } finally {
      setLoading(false);
    }
  };

  const handleRoleSwitch = (r: Role) => {
    if (r === role) return;
    const next = switchContactRole({ role, context: requestContext, vacancyId: activeVacancyId }, r);
    setRole(next.role);
    setRequestContext(retainContext ? context : next.context);
    setActiveVacancyId(next.vacancyId);
    setActiveVacancyTitle("");
    setSent(false);
    setError(null);
    setCvFile(null);
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section header */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className={`contact-heading mb-8 md:mb-10 ${compact ? "max-w-3xl mx-auto" : ""}`}
        >
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="text-[clamp(1.85rem,6vw,2.8rem)] font-extrabold text-primary tracking-tight leading-[1.06]">
              {heading ?? <>Klaar voor een <span className="text-accent">goede</span> samenwerking?</>}
            </h2>
            {(role === "kandidaat" || description) && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{role === "kandidaat" ? "Laat jouw cv achter. We nemen contact met je op om een persoonlijke intake te plannen. We willen weten wie je bent, wat je kunt en wat je zoekt." : description}</p>}
          </div>

        </motion.div>

        {/* 2-column grid */}
        <div className={compact ? "max-w-3xl mx-auto" : "contact-composition grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-7 items-start"}>

          {/* LEFT — Form card */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
            className={compact ? "landing-form" : "bg-white rounded-[22px] p-5 sm:p-9 shadow-[0_4px_40px_hsl(220_50%_18%/0.07)] border border-primary/5"}
          >
            {/* Role toggle — pill bar */}
            {!lockRole && (<div className="flex gap-1.5 mb-7 bg-background rounded-[14px] p-1.5">
              {([
                { key: "opdrachtgever", label: "Ik zoek versterking" },
                { key: "kandidaat",     label: "Ik ben professional" },
              ] as { key: Role; label: string }[]).map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => handleRoleSwitch(opt.key)}
                  aria-pressed={role === opt.key}
                  disabled={loading}
                  className={`flex-1 rounded-[10px] py-3 text-[12.5px] font-bold transition-all duration-200 ${
                    role === opt.key
                      ? "bg-primary text-white shadow-sm"
                      : "text-primary/40 hover:text-primary/70"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>)}

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={false}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-[20px] font-bold text-primary mb-2">Bericht ontvangen</h3>
                  <p className="text-muted-foreground text-[15px] max-w-xs mx-auto leading-relaxed">
                    {role === "kandidaat" ? "Bedankt voor je reactie. We nemen contact met je op om een persoonlijke intake te plannen." : "Je bericht is ontvangen. We nemen contact met je op."}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key={role}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  className="contact-form flex flex-col gap-4"
                >
                  {/* Honeypot */}
                  <input type="text" name="_gotcha" tabIndex={-1} aria-hidden="true" autoComplete="off" style={{ display: "none" }} />
                  <input type="hidden" name="type" value={role} />
                  <input type="hidden" name="vacatureId" value={activeVacancyId} />
                  <input type="hidden" name="functie" value={activeVacancyTitle} />

                  {/* Naam + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-naam" className={labelCls}>Naam <span className="text-accent">*</span></label>
                      <input required id="contact-naam" type="text" name="naam" placeholder="Volledige naam" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelCls}>E-mail <span className="text-accent">*</span></label>
                      <input required id="contact-email" type="email" name="email" placeholder="jouw@email.nl" className={inputCls} />
                    </div>
                  </div>

                  {/* Telefoon */}
                  <div>
                    <label htmlFor="contact-telefoon" className={labelCls}>
                      Telefoon{" "}
                      <span className="text-primary/30 font-normal normal-case">(optioneel)</span>
                    </label>
                    <input id="contact-telefoon" type="tel" name="telefoon" placeholder="+31 6 ..." className={inputCls} />
                  </div>

                  <div>
                    <label htmlFor="contact-onderwerp" className={labelCls}>
                      Onderwerp{" "}<span className="text-primary/30 font-normal normal-case">(optioneel)</span>
                    </label>
                    <input id="contact-onderwerp" type="text" name="onderwerp" maxLength={200} value={requestContext} onChange={(e) => setRequestContext(e.target.value)} placeholder={role === "opdrachtgever" ? "Bijvoorbeeld een functie of samenwerking" : "Bijvoorbeeld een functie of opdracht"} className={inputCls} />
                  </div>

                  {/* Bericht */}
                  <div>
                    <label htmlFor="contact-bericht" className={labelCls}>
                      {role === "opdrachtgever" ? "Omschrijving" : "Motivatie"}{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      id="contact-bericht"
                      name="bericht"
                      placeholder={
                        role === "opdrachtgever"
                          ? "Vertel welke professional je zoekt en wat diegene moet doen..."
                          : "Vertel kort over jouw ervaring, gewenste functie of opdracht, regio en beschikbaarheid..."
                      }
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {/* CV upload — kandidaat only */}
                  <AnimatePresence>
                    {role === "kandidaat" && (
                      <motion.div
                        key="cv-upload"
                        initial={false}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        style={{ overflow: "hidden" }}
                      >
                        <label htmlFor="contact-cv" className={labelCls}>
                          CV uploaden{" "}
                          <span className="text-primary/30 font-normal normal-case">(optioneel · PDF, Word · max. 3 MB)</span>
                        </label>
                        <input
                          ref={fileInputRef}
                          id="contact-cv"
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            setError(null);
                            if (file && (file.size > 3 * 1024 * 1024 || !/\.(pdf|doc|docx)$/i.test(file.name))) {
                              setError("Upload een PDF- of Word-bestand van maximaal 3 MB.");
                              setCvFile(null);
                              e.target.value = "";
                              return;
                            }
                            setCvFile(file ?? null);
                          }}
                        />
                        {cvFile ? (
                          <div className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/5 px-4 py-3">
                            <Paperclip className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-[13px] font-medium text-primary flex-1 truncate">{cvFile.name}</span>
                            <button
                              type="button"
                              onClick={() => { setCvFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                              className="text-primary/30 hover:text-primary transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full rounded-xl border-2 border-dashed border-primary/10 hover:border-accent/40 bg-background hover:bg-accent/5 transition-all duration-200 py-4 px-4 flex items-center justify-center gap-2.5 group"
                          >
                            <Paperclip className="w-4 h-4 text-primary/30 group-hover:text-accent transition-colors" />
                            <span className="text-[13px] text-primary/30 group-hover:text-primary transition-colors">
                              Kies jouw cv
                            </span>
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Error */}
                  {error && (
                    <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-100 p-4 text-[13.5px] text-red-700">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  <p className="text-xs leading-relaxed text-muted-foreground">We gebruiken jouw gegevens om deze reactie te behandelen. Lees onze <a href="/privacy" className="underline">privacyverklaring</a>.</p>
                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { y: -2, boxShadow: "0 10px 32px hsl(220 50% 18% / 0.28)" } : {}}
                    whileTap={!loading ? { y: 0 } : {}}
                    transition={{ duration: 0.18 }}
                    className="self-start inline-flex items-center justify-center min-h-12 rounded-full bg-primary text-white px-7 py-3 text-[14px] font-bold disabled:opacity-60 disabled:cursor-not-allowed transition-opacity mt-1 tracking-[-0.2px]"
                  >
                    {loading ? "Versturen..." : role === "kandidaat" ? "Verstuur mijn reactie" : "Verstuur bericht"}
                  </motion.button>

                  <p className="text-left text-sm text-primary/70">Liever bellen? <a href="tel:+31852128668" className="inline-flex items-center min-h-11 font-bold text-primary hover:text-accent">085 212 8668</a></p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT — Profile column */}
          {!compact && (<motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="contact-aside flex flex-col gap-4"
          >
            {/* White profile card */}
            <div className="contact-note">

              {showProfile ? (
                <div className="flex items-center gap-4 mb-6">
                  <img src="/nicky-verkooij.webp" alt="Nicky, consultant bij Wedeploy" width="76" height="76" loading="lazy" className="w-[76px] h-[76px] shrink-0 rounded-full object-cover border-2 border-accent" style={{ objectPosition: "50% 12%" }} />
                  <div><h3 className="text-xl font-extrabold text-primary">Nicky</h3><p className="text-sm text-muted-foreground mt-1">Consultant</p></div>
                </div>
              ) : <><p className="eyebrow">Direct contact</p><h3 className="text-2xl font-bold text-primary mb-5">Korte lijnen.</h3></>}
              {/* Quote */}
              <div className="border-l-[3px] border-accent pl-4">
                <p className="text-[14px] leading-[1.72] text-primary/55 font-medium italic mb-3.5">
                  {showProfile ? "Een professional nodig of toe aan een nieuwe opdracht? Laat je gegevens achter. We nemen contact met je op om jouw vraag of wensen te bespreken." : "Vertel wat je zoekt. We bespreken de mogelijkheden en maken duidelijke afspraken over de volgende stap."}
                </p>
                <p className="text-[14px] font-extrabold text-accent tracking-[-0.1px]">
                  {showProfile ? "Je krijgt persoonlijk antwoord." : "Een eerste gesprek is vrijblijvend."}
                </p>
              </div>
            </div>

            {/* Contact pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "E-mail",    val: "info@wedeploy.nl",  href: "mailto:info@wedeploy.nl" },
                { label: "Telefoon",  val: "085 212 8668",      href: "tel:0852128668" },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="contact-direct-link block"
                >
                  <div className="text-[9.5px] font-bold text-primary/35 tracking-[1.2px] uppercase mb-1">{item.label}</div>
                  <div className="text-[12.5px] font-bold text-primary">{item.val}</div>
                </a>
              ))}
            </div>
          </motion.div>)}

        </div>
      </div>
    </section>
  );
}
