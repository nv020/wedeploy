import { useState } from "react";

const NAVY = "#172A4E";
const ACCENT = "#22A4E8";
const CREAM = "#F9F7F3";

const steps = ["Wie bent u?", "Uw gegevens", "Uw bericht"];

export function VariantC() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState<"professional" | "opdrachtgever" | null>(null);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: CREAM, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "44px", maxWidth: "500px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `${ACCENT}12`, border: `1px solid ${ACCENT}30`, borderRadius: "100px", padding: "5px 14px", marginBottom: "18px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: ACCENT }} />
          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: ACCENT }}>Contact</span>
        </div>
        <h2 style={{ fontSize: "38px", fontWeight: 800, color: NAVY, letterSpacing: "-1.5px", lineHeight: 1.1, margin: "0 0 10px 0" }}>
          Laten we kennis<br />maken.
        </h2>
        <p style={{ fontSize: "14px", color: `${NAVY}65`, lineHeight: 1.75, margin: 0 }}>
          Drie stappen. Geen formulier-stress.
        </p>
      </div>

      {/* Step progress */}
      <div style={{ display: "flex", alignItems: "center", gap: "0", marginBottom: "40px" }}>
        {steps.map((label, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "50%",
                background: i < step ? ACCENT : i === step ? NAVY : "white",
                border: i === step ? `2px solid ${NAVY}` : i < step ? "none" : `2px solid ${NAVY}18`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "12px", fontWeight: 800,
                color: i <= step ? "white" : `${NAVY}40`,
                transition: "all 0.3s"
              }}>
                {i < step ? "✓" : i + 1}
              </div>
              <span style={{ fontSize: "10px", fontWeight: i === step ? 700 : 400, color: i === step ? NAVY : `${NAVY}40`, whiteSpace: "nowrap" }}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div style={{ width: "80px", height: "2px", background: i < step ? ACCENT : `${NAVY}12`, margin: "0 6px", marginBottom: "18px", transition: "background 0.3s" }} />
            )}
          </div>
        ))}
      </div>

      {/* Step card */}
      <div style={{ width: "100%", maxWidth: "480px", background: "white", borderRadius: "20px", padding: "40px", boxShadow: `0 8px 48px ${NAVY}08`, border: `1px solid ${NAVY}06`, minHeight: "320px", display: "flex", flexDirection: "column" }}>

        {/* Step 0 — role choice */}
        {step === 0 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 800, color: NAVY, margin: "0 0 8px 0" }}>Wie bent u?</h3>
            <p style={{ fontSize: "13.5px", color: `${NAVY}60`, margin: "0 0 28px 0", lineHeight: 1.6 }}>Kies de situatie die op u van toepassing is.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
              {[
                { key: "opdrachtgever", title: "Ik zoek versterking", sub: "Ik ben opdrachtgever en zoek een professional" },
                { key: "professional", title: "Ik ben professional", sub: "Ik zoek een nieuwe uitdaging of opdracht" }
              ].map(opt => (
                <button key={opt.key} onClick={() => setRole(opt.key as "professional" | "opdrachtgever")} style={{
                  background: role === opt.key ? `${NAVY}06` : CREAM,
                  border: role === opt.key ? `2px solid ${NAVY}` : `2px solid ${NAVY}10`,
                  borderRadius: "14px", padding: "16px 20px", cursor: "pointer", textAlign: "left",
                  transition: "all 0.2s"
                }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: NAVY, marginBottom: "3px" }}>{opt.title}</div>
                  <div style={{ fontSize: "12px", color: `${NAVY}55` }}>{opt.sub}</div>
                </button>
              ))}
            </div>
            <button onClick={() => role && setStep(1)} style={{
              background: role ? ACCENT : `${NAVY}15`,
              color: "white", border: "none", borderRadius: "100px", padding: "14px",
              fontSize: "14px", fontWeight: 700, cursor: role ? "pointer" : "default",
              marginTop: "24px", transition: "background 0.2s",
              boxShadow: role ? `0 8px 24px ${ACCENT}35` : "none"
            }}>
              Volgende stap →
            </button>
          </div>
        )}

        {/* Step 1 — contact details */}
        {step === 1 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 800, color: NAVY, margin: "0 0 8px 0" }}>Uw gegevens</h3>
            <p style={{ fontSize: "13.5px", color: `${NAVY}60`, margin: "0 0 24px 0", lineHeight: 1.6 }}>Hoe kunnen wij u bereiken?</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
              {role === "opdrachtgever" && (
                <div>
                  <label style={{ display: "block", fontSize: "10.5px", fontWeight: 700, color: `${NAVY}55`, letterSpacing: "0.5px", marginBottom: "5px" }}>Bedrijfsnaam</label>
                  <input placeholder="Uw organisatie" style={{ width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}12`, padding: "10px 14px", fontSize: "13px", outline: "none", boxSizing: "border-box", background: CREAM, fontFamily: "inherit" }} />
                </div>
              )}
              {[
                { label: "Volledige naam", placeholder: "Uw naam", type: "text" },
                { label: "E-mail", placeholder: "uw@email.nl", type: "email" },
                { label: "Telefoon", placeholder: "+31 6 ...", type: "tel" }
              ].map(f => (
                <div key={f.label}>
                  <label style={{ display: "block", fontSize: "10.5px", fontWeight: 700, color: `${NAVY}55`, letterSpacing: "0.5px", marginBottom: "5px" }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}12`, padding: "10px 14px", fontSize: "13px", outline: "none", boxSizing: "border-box", background: CREAM, fontFamily: "inherit" }} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
              <button onClick={() => setStep(0)} style={{ flex: 1, background: "white", color: NAVY, border: `1.5px solid ${NAVY}15`, borderRadius: "100px", padding: "13px", fontSize: "13.5px", fontWeight: 600, cursor: "pointer" }}>← Terug</button>
              <button onClick={() => setStep(2)} style={{ flex: 2, background: ACCENT, color: "white", border: "none", borderRadius: "100px", padding: "13px", fontSize: "13.5px", fontWeight: 700, cursor: "pointer", boxShadow: `0 8px 24px ${ACCENT}35` }}>Volgende stap →</button>
            </div>
          </div>
        )}

        {/* Step 2 — message */}
        {step === 2 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 800, color: NAVY, margin: "0 0 8px 0" }}>
              {role === "opdrachtgever" ? "Uw opdracht" : "Uw verhaal"}
            </h3>
            <p style={{ fontSize: "13.5px", color: `${NAVY}60`, margin: "0 0 24px 0", lineHeight: 1.6 }}>
              {role === "opdrachtgever"
                ? "Beschrijf het type professional dat u zoekt."
                : "Vertel ons over uzelf en uw volgende stap."}
            </p>
            <textarea rows={6} placeholder={
              role === "opdrachtgever"
                ? "Functie, sector, gewenste startdatum en bijzonderheden..."
                : "Uw achtergrond, expertise en wat u zoekt..."
            } style={{
              width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}12`,
              padding: "12px 14px", fontSize: "13px", color: NAVY,
              background: CREAM, outline: "none", resize: "none", flex: 1, fontFamily: "inherit", boxSizing: "border-box"
            }} />
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button onClick={() => setStep(1)} style={{ flex: 1, background: "white", color: NAVY, border: `1.5px solid ${NAVY}15`, borderRadius: "100px", padding: "13px", fontSize: "13.5px", fontWeight: 600, cursor: "pointer" }}>← Terug</button>
              <button style={{ flex: 2, background: NAVY, color: "white", border: "none", borderRadius: "100px", padding: "13px", fontSize: "13.5px", fontWeight: 700, cursor: "pointer", boxShadow: `0 8px 24px ${NAVY}25` }}>Verstuur bericht ✓</button>
            </div>
          </div>
        )}
      </div>

      {/* Trust strip */}
      <div style={{ display: "flex", gap: "24px", marginTop: "28px" }}>
        {["Reactie binnen één werkdag", "Volledig vertrouwelijk", "Vrijblijvend gesprek"].map(item => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
            <span style={{ fontSize: "11.5px", color: `${NAVY}55`, fontWeight: 500 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
