import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Role = "opdrachtgever" | "kandidaat";

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

const inputCls =
  "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-[13.5px] text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-200";

const labelCls = "block text-[11px] font-bold text-primary mb-1.5 tracking-wide";

export function ContactSection() {
  const [role, setRole] = useState<Role>("opdrachtgever");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      await submitForm({
        type: role,
        _gotcha: fd.get("_gotcha") as string,
        naam: fd.get("naam") as string,
        email: fd.get("email") as string,
        telefoon: fd.get("telefoon") as string,
        bericht: fd.get("bericht") as string,
      });
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Versturen mislukt. Probeer het later opnieuw.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">

        {/* Section header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 max-w-[540px]"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border"
            style={{ background: "hsl(205 85% 53% / 0.08)", borderColor: "hsl(205 85% 53% / 0.28)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-accent">Contact</span>
          </div>
          <h2 className="text-[2.4rem] md:text-[2.8rem] font-extrabold text-primary tracking-[-2px] leading-[1.08] mb-3">
            Klaar voor een{" "}
            <span className="text-accent">duurzame</span> match?
          </h2>
          <p className="text-[15px] text-muted-foreground leading-[1.78]">
            Laat je gegevens achter — wij nemen persoonlijk contact op.
          </p>
        </motion.div>

        {/* Role toggle */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex gap-3 mb-10"
        >
          {([
            { key: "opdrachtgever", label: "Ik zoek versterking", sub: "Opdrachtgever" },
            { key: "kandidaat",     label: "Ik ben professional", sub: "Kandidaat" },
          ] as { key: Role; label: string; sub: string }[]).map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => { setRole(opt.key); setSent(false); setError(null); }}
              className={`rounded-2xl px-7 py-4 text-left transition-all duration-200 ${
                role === opt.key
                  ? "bg-primary text-white shadow-[0_8px_28px_hsl(220_50%_18%/0.20)]"
                  : "bg-white text-primary border border-border/50 hover:border-primary/20"
              }`}
            >
              <div className="text-[13.5px] font-bold mb-0.5">{opt.label}</div>
              <div className={`text-[11px] font-medium ${role === opt.key ? "text-white/50" : "text-muted-foreground/60"}`}>
                {opt.sub}
              </div>
            </button>
          ))}
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[520px]"
        >
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_48px_hsl(220_50%_18%/0.07)] border border-border/30">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10"
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
                      <input required type="text" name="naam" placeholder="Uw volledige naam" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>E-mail <span className="text-accent">*</span></label>
                      <input required type="email" name="email" placeholder="uw@email.nl" className={inputCls} />
                    </div>
                  </div>

                  {/* Telefoon */}
                  <div>
                    <label className={labelCls}>
                      Telefoonnummer{" "}
                      <span className="text-muted-foreground/50 font-normal">(optioneel)</span>
                    </label>
                    <input type="tel" name="telefoon" placeholder="+31 6 ..." className={inputCls} />
                  </div>

                  {/* Bericht */}
                  <div>
                    <label className={labelCls}>
                      {role === "opdrachtgever" ? "Omschrijving" : "Bericht"}{" "}
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
                    whileHover={!loading ? { y: -2, boxShadow: "0 10px 32px hsl(205 85% 53% / 0.35)" } : {}}
                    whileTap={!loading ? { y: 0 } : {}}
                    transition={{ duration: 0.18 }}
                    className="w-full rounded-full bg-accent text-white py-3.5 text-[14px] font-bold disabled:opacity-60 disabled:cursor-not-allowed transition-opacity mt-1"
                  >
                    {loading ? "Versturen..." : "Verstuur bericht →"}
                  </motion.button>

                  <p className="text-center text-[11.5px] text-muted-foreground/40">
                    Reactie binnen één werkdag · Volledig vertrouwelijk
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Contact details strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-8 mt-10"
        >
          {[
            { label: "Telefoon", value: "085 212 8668", href: "tel:0852128668" },
            { label: "E-mail",   value: "info@wedeploy.nl", href: "mailto:info@wedeploy.nl" },
            { label: "Adres",    value: "Krijn Taconiskade 461 · 1087 HW Amsterdam", href: null },
          ].map(({ label, value, href }) => (
            <div key={label} className="text-center">
              <div className="text-[9.5px] font-bold tracking-[1.5px] uppercase text-muted-foreground/40 mb-1">{label}</div>
              {href ? (
                <a href={href} className="text-[13px] font-semibold text-primary hover:text-accent transition-colors duration-200">
                  {value}
                </a>
              ) : (
                <div className="text-[13px] font-semibold text-primary">{value}</div>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
