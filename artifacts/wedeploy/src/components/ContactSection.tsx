import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Paperclip, X } from "lucide-react";


import { resolveContactContext, switchContactRole, type ContactRole as Role } from "./contact-context";
import { contactPerson } from "@/data/contact-person";
import { trackContactSubmission } from "@/lib/lead-events";
import { TALENTPOOL_CONSENT_TEXT, TALENTPOOL_CONSENT_VERSION, TALENTPOOL_OPTIONAL_NOTE } from "../../../../shared/talentpool-consent";

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

function CompensationPreference({ freelance = false }: { freelance?: boolean }) {
  const [later, setLater] = useState(false);
  const name = freelance ? "candidateRate" : "candidateSalary";
  return (
    <div className="space-y-2 min-w-0">
      <p className="text-sm font-semibold text-primary">{freelance ? "Uurtarief (all-in)" : "Salarisindicatie (bruto per maand)"}</p>
      <p className="text-xs leading-relaxed text-muted-foreground">{freelance ? "Richtbedrag per uur, incl. reiskosten en excl. btw." : "Geef een richtbedrag en het aantal uren waarop het is gebaseerd."}</p>
      {!later && <div className={freelance ? "" : "grid gap-2 sm:grid-cols-2"}>
        <label className="block min-w-0">
          <span className="sr-only">{freelance ? "Uurtarief in euro per uur" : "Richtbedrag in euro per maand"}</span>
          <input className={inputCls} type="number" name={name} min="1" max={freelance ? "10000" : "999999"} step={freelance ? "0.01" : "1"} placeholder={freelance ? "Bijv. € 85 per uur" : "Bijv. € 4.500 per maand"} />
        </label>
        {!freelance && <label className="block min-w-0">
          <span className="sr-only">Uren per week waarop het salaris is gebaseerd</span>
          <input className={inputCls} type="number" name="candidateSalaryHours" min="1" max="80" step="0.5" placeholder="Bijv. 36 uur per week" />
        </label>}
      </div>}
      <label className="inline-flex min-h-9 items-center gap-2 text-sm text-primary">
        <input type="checkbox" name={name + "Later"} value="yes" checked={later} onChange={event => setLater(event.target.checked)} className="size-4 shrink-0 accent-primary" />
        Bespreek ik liever later
      </label>
    </div>
  );
}

function CandidatePreferences() {
  const [engagement, setEngagement] = useState("");
  const [availability, setAvailability] = useState("");
  const caption = "mb-1.5 block text-sm font-semibold text-primary";
  return (
    <fieldset className="min-w-0 space-y-3 rounded-xl border border-primary/10 p-4">
      <legend className="px-1 text-sm font-semibold text-primary">Je werkvoorkeuren <span className="font-normal text-muted-foreground">(optioneel)</span></legend>
      <p className="text-sm leading-relaxed text-muted-foreground">Met je voorkeuren kunnen we gerichter voor je zoeken. Vul in wat je al weet.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block min-w-0">
          <span className={caption}>Waar sta je voor open?</span>
          <select name="candidateEngagement" className={inputCls} value={engagement} onChange={event => setEngagement(event.target.value)}>
            <option value="">Maak een keuze</option>
            <option value="permanent">Vaste baan</option>
            <option value="freelance">Zzp-opdracht</option>
            <option value="both">Geen voorkeur (beide)</option>
          </select>
        </label>
        <label className="block min-w-0">
          <span className={caption}>Wanneer kun je starten?</span>
          <select name="candidateAvailability" className={inputCls} value={availability} onChange={event => setAvailability(event.target.value)}>
            <option value="">Maak een keuze</option>
            <option value="now">Per direct</option>
            <option value="date">Vanaf een datum</option>
            <option value="discuss">In overleg</option>
          </select>
        </label>
        {availability === "date" && <label className="block min-w-0">
          <span className={caption}>Startdatum</span>
          <input name="candidateStartDate" type="date" className={inputCls} />
        </label>}
        <label className="block min-w-0">
          <span className={caption}>Hoeveel uur per week wil je werken?</span>
          <input name="candidateHours" type="number" min="1" max="80" step="0.5" placeholder="Bijv. 8, 16, 24, 32 of 40" className={inputCls} />
        </label>
      </div>
      <label className="block min-w-0">
        <span className={caption}>Hoe wil je werken?</span>
        <select name="candidateWorkplace" className={inputCls} defaultValue="">
          <option value="">Maak een keuze</option>
          <option value="onsite">Op locatie</option>
          <option value="hybrid">Hybride</option>
          <option value="remote">Volledig remote</option>
        </select>
      </label>
      {(engagement === "permanent" || engagement === "both") && <CompensationPreference key="salary" />}
      {(engagement === "freelance" || engagement === "both") && <CompensationPreference key="rate" freelance />}
    </fieldset>
  );
}

export function ContactSection({ defaultRole = "opdrachtgever", heading, description, context = "", readQuery = false, vacancyId = "", showProfile = false, compact = false, lockRole = false, retainContext = false }: { defaultRole?: Role; heading?: string; description?: string; context?: string; readQuery?: boolean; vacancyId?: string; showProfile?: boolean; compact?: boolean; lockRole?: boolean; retainContext?: boolean }) {
  const [role, setRole] = useState<Role>(defaultRole);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [talentpoolConsent, setTalentpoolConsent] = useState(false);
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
      setTalentpoolConsent(false);
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
    fd.set("sourcePath", window.location.pathname);
    if (cvFile) fd.set("cv", cvFile);
    try {
      await submitForm(fd);
      setSent(true);
      trackContactSubmission(role);
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
    setTalentpoolConsent(false);
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
              {heading ?? "Laten we kennismaken."}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{description ?? (role === "kandidaat" ? "Laat jouw cv achter. In een persoonlijke intake bespreken we jouw ervaring, wensen en volgende stap." : "Een vacature, tijdelijke versterking of een samenwerking bespreken? Vertel ons waar je naar zoekt.")}</p>
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

                  {role === "opdrachtgever" && (
                    <div>
                      <label htmlFor="contact-bericht" className={labelCls}>Omschrijving <span className="text-accent">*</span></label>
                      <textarea required rows={4} id="contact-bericht" name="bericht" placeholder="Vertel welke professional je zoekt en wat diegene moet doen..." className={`${inputCls} resize-none`} />
                    </div>
                  )}

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

                  {role === "kandidaat" && <>
                    <CandidatePreferences key={activeVacancyId} />
                    <div>
                      <label htmlFor="contact-opmerkingen" className={labelCls}>
                        Opmerkingen{" "}
                        {cvFile ? <span className="text-primary/30 font-normal normal-case">(optioneel)</span> : <span className="text-accent">*</span>}
                      </label>
                      <textarea required={!cvFile} rows={3} id="contact-opmerkingen" name="bericht" placeholder="Wil je nog iets toelichten?" className={`${inputCls} resize-none`} />
                      {!cvFile && <p className="mt-1.5 text-xs text-muted-foreground">Stuur je geen cv mee? Geef dan kort een toelichting.</p>}
                    </div>
                  </>}

                  {/* Error */}
                  {error && (
                    <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-100 p-4 text-[13.5px] text-red-700">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  <p className="text-xs leading-relaxed text-muted-foreground">We verwerken je gegevens volgens onze <a href="/privacy" className="underline">privacyverklaring</a>.</p>
                  {role === "kandidaat" && <fieldset className="talentpool-consent" disabled={loading}>
                    <legend className="sr-only">Bewaren voor toekomstige mogelijkheden (optioneel)</legend>
                    <input type="hidden" name="talentpoolConsentVersion" value={TALENTPOOL_CONSENT_VERSION} />
                    <label><input type="checkbox" name="talentpoolConsent" value="yes" checked={talentpoolConsent} onChange={event => setTalentpoolConsent(event.target.checked)} aria-describedby="talentpool-consent-note" /><span>{TALENTPOOL_CONSENT_TEXT}</span></label>
                    <p id="talentpool-consent-note">{TALENTPOOL_OPTIONAL_NOTE}</p>
                  </fieldset>}
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
                  <img src={contactPerson.src} alt={contactPerson.alt} width="76" height="76" loading="lazy" className="w-[76px] h-[76px] shrink-0 rounded-full object-cover" style={{ objectPosition: "50% 12%" }} />
                  <div><h3 className="text-lg font-semibold text-primary">{contactPerson.name}</h3><p className="text-sm text-muted-foreground mt-1">{contactPerson.role}</p></div>
                </div>
              ) : <><p className="eyebrow">Direct contact</p><h3 className="text-2xl font-bold text-primary mb-5">Korte lijnen.</h3></>}
              <div className="contact-invitation">
                <p>{role === "kandidaat" ? "We horen graag wat je zoekt in een volgende functie of opdracht. Een cv is een begin; in een gesprek leren we je kennen." : "Vertel welke versterking jouw organisatie nodig heeft. Samen bespreken we de functie, het team en een passende aanpak."}</p>
                <a href="tel:+31852128668" className="contact-call">Bel ons: 085 212 8668</a>
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
