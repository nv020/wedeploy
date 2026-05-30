import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Paperclip, X } from "lucide-react";
import nickPhoto from "@assets/Nick_1780149335945.png";

type Role = "opdrachtgever" | "kandidaat";

const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? "";

async function submitForm(data: FormData): Promise<void> {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    body: data,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { error?: string }).error ?? "Versturen mislukt.");
  }
}

const inputCls =
  "w-full rounded-[10px] border border-primary/10 bg-[#FEFDF9] px-3.5 py-2.5 text-[13.5px] text-primary placeholder:text-primary/30 outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-200";

const labelCls = "block text-[11px] font-bold text-primary mb-1.5 tracking-wide uppercase";

export function ContactSection() {
  const [role, setRole] = useState<Role>("opdrachtgever");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    setRole(r);
    setSent(false);
    setError(null);
    setCvFile(null);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border"
              style={{ background: "hsl(205 85% 53% / 0.08)", borderColor: "hsl(205 85% 53% / 0.28)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-accent">Contact</span>
            </div>
            <h2 className="text-[2.4rem] md:text-[2.8rem] font-extrabold text-primary tracking-[-2px] leading-[1.06]">
              Klaar voor een{" "}
              <span className="text-accent">duurzame</span> match?
            </h2>
          </div>
          <div className="flex gap-9 md:gap-10">
            {[
              { label: "Reactie binnen", val: "24 uur" },
              { label: "Vrijblijvend", val: "Altijd" },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-[1.75rem] font-black text-accent tracking-tight leading-none">{stat.val}</div>
                <div className="text-[10px] font-bold text-primary/40 tracking-[1px] uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-7 items-start">

          {/* LEFT — Form card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white rounded-[22px] p-9 shadow-[0_4px_40px_hsl(220_50%_18%/0.07)] border border-primary/5"
          >
            {/* Role toggle — pill bar */}
            <div className="flex gap-1.5 mb-7 bg-background rounded-[14px] p-1.5">
              {([
                { key: "opdrachtgever", label: "Ik zoek versterking" },
                { key: "kandidaat",     label: "Ik ben professional" },
              ] as { key: Role; label: string }[]).map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => handleRoleSwitch(opt.key)}
                  className={`flex-1 rounded-[10px] py-3 text-[12.5px] font-bold transition-all duration-200 ${
                    role === opt.key
                      ? "bg-primary text-white shadow-sm"
                      : "text-primary/40 hover:text-primary/70"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-[20px] font-bold text-primary mb-2">Bericht ontvangen</h3>
                  <p className="text-muted-foreground text-[15px] max-w-xs mx-auto leading-relaxed">
                    We nemen binnen één werkdag persoonlijk contact met u op.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key={role}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  {/* Honeypot */}
                  <input type="text" name="_gotcha" tabIndex={-1} aria-hidden="true" autoComplete="off" style={{ display: "none" }} />

                  {/* Naam + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Naam <span className="text-accent">*</span></label>
                      <input required type="text" name="naam" placeholder="Volledige naam" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>E-mail <span className="text-accent">*</span></label>
                      <input required type="email" name="email" placeholder="uw@email.nl" className={inputCls} />
                    </div>
                  </div>

                  {/* Telefoon */}
                  <div>
                    <label className={labelCls}>
                      Telefoon{" "}
                      <span className="text-primary/30 font-normal normal-case">(optioneel)</span>
                    </label>
                    <input type="tel" name="telefoon" placeholder="+31 6 ..." className={inputCls} />
                  </div>

                  {/* Bericht */}
                  <div>
                    <label className={labelCls}>
                      {role === "opdrachtgever" ? "Omschrijving" : "Motivatie"}{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      name="bericht"
                      placeholder={
                        role === "opdrachtgever"
                          ? "Beschrijf het type professional, de functie en eventuele bijzonderheden..."
                          : "Vertel ons kort over uzelf, uw achtergrond en waarnaar u op zoek bent..."
                      }
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {/* CV upload — kandidaat only */}
                  <AnimatePresence>
                    {role === "kandidaat" && (
                      <motion.div
                        key="cv-upload"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        style={{ overflow: "hidden" }}
                      >
                        <label className={labelCls}>
                          CV uploaden{" "}
                          <span className="text-primary/30 font-normal normal-case">(optioneel · PDF, Word)</span>
                        </label>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          className="hidden"
                          onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
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
                              Klik om uw CV te uploaden
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

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { y: -2, boxShadow: "0 10px 32px hsl(220 50% 18% / 0.28)" } : {}}
                    whileTap={!loading ? { y: 0 } : {}}
                    transition={{ duration: 0.18 }}
                    className="w-full rounded-full bg-primary text-white py-4 text-[14px] font-bold disabled:opacity-60 disabled:cursor-not-allowed transition-opacity mt-1 tracking-[-0.2px]"
                  >
                    {loading ? "Versturen..." : <>Verstuur bericht <span className="text-accent">→</span></>}
                  </motion.button>

                  <p className="text-center text-[11.5px] text-primary/25">
                    Reactie binnen 24 uur · Volledig vertrouwelijk
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT — Profile column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-4"
          >
            {/* White profile card */}
            <div className="bg-white rounded-[22px] p-8 shadow-[0_4px_24px_hsl(220_50%_18%/0.06)] border border-primary/5">

              {/* Photo + name row */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[76px] h-[76px] rounded-full overflow-hidden flex-shrink-0 border-[2.5px] border-accent shadow-[0_0_0_4px_hsl(205_85%_53%/0.12)]">
                  <img
                    src={nickPhoto}
                    alt="Nicky"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 12%" }}
                  />
                </div>
                <div>
                  <div className="text-[17px] font-extrabold text-primary tracking-[-0.4px] leading-tight">Nicky</div>
                  <div className="text-[10.5px] font-bold text-accent tracking-[1.2px] uppercase mt-1">Recruitment & Detachering</div>
                  <div className="flex gap-1.5 mt-2">
                    {["Recruitment", "Detachering"].map(tag => (
                      <span key={tag} className="text-[10px] font-bold bg-accent/10 text-accent rounded-full px-2.5 py-0.5">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="border-l-[3px] border-accent pl-4">
                <p className="text-[14px] leading-[1.72] text-primary/55 font-medium italic mb-3.5">
                  "De juiste professional op de juiste plek. Of het nu gaat om teamuitbreiding of jouw volgende project: laat je gegevens achter en we spreken elkaar snel."
                </p>
                <p className="text-[14px] font-extrabold text-accent tracking-[-0.1px]">
                  ☕️ De koffie staat klaar.
                </p>
              </div>
            </div>

            {/* Contact pills */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "E-mail",    val: "info@wedeploy.nl",  href: "mailto:info@wedeploy.nl" },
                { label: "Telefoon",  val: "085 212 8668",      href: "tel:0852128668" },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="bg-white rounded-[14px] p-4 border border-primary/5 shadow-[0_2px_12px_hsl(220_50%_18%/0.04)] hover:border-accent/30 hover:shadow-[0_4px_20px_hsl(205_85%_53%/0.10)] transition-all duration-200 block"
                >
                  <div className="text-[9.5px] font-bold text-primary/35 tracking-[1.2px] uppercase mb-1">{item.label}</div>
                  <div className="text-[12.5px] font-bold text-primary">{item.val}</div>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
