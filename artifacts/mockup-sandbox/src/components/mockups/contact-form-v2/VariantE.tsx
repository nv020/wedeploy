const NAVY = "#172A4E";
const ACCENT = "#22A4E8";
const CREAM = "#F9F7F3";

const inputStyle: React.CSSProperties = {
  width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}14`,
  padding: "10px 14px", fontSize: "13.5px", color: NAVY,
  outline: "none", boxSizing: "border-box", background: CREAM,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "11px", fontWeight: 700, color: NAVY,
  letterSpacing: "0.5px", marginBottom: "6px",
};

export function VariantE() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: CREAM, minHeight: "100vh", padding: "72px 32px" }}>

      {/* Section header — centered */}
      <div style={{ textAlign: "center", marginBottom: "52px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `${ACCENT}12`, border: `1px solid ${ACCENT}30`, borderRadius: "100px", padding: "5px 16px", marginBottom: "18px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: ACCENT }} />
          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: ACCENT }}>Contact</span>
        </div>
        <h2 style={{ fontSize: "44px", fontWeight: 800, color: NAVY, letterSpacing: "-2px", lineHeight: 1.08, margin: 0 }}>
          Klaar voor een <span style={{ color: ACCENT }}>duurzame</span> match?
        </h2>
      </div>

      {/* 2-column grid */}
      <div style={{ maxWidth: "1040px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", alignItems: "stretch", borderRadius: "24px", overflow: "hidden", boxShadow: `0 12px 60px ${NAVY}12` }}>

        {/* LEFT — Form card */}
        <div style={{ background: "white", padding: "40px" }}>

          {/* Role toggle */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }}>
            {[
              { label: "Ik zoek versterking", sub: "Opdrachtgever", active: true },
              { label: "Ik ben professional", sub: "Kandidaat", active: false },
            ].map(opt => (
              <button key={opt.label} style={{
                background: opt.active ? NAVY : CREAM, color: opt.active ? "white" : NAVY,
                border: opt.active ? "none" : `1.5px solid ${NAVY}15`, borderRadius: "14px",
                padding: "12px 16px", cursor: "pointer", textAlign: "left",
                boxShadow: opt.active ? `0 6px 20px ${NAVY}20` : "none",
              }}>
                <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "2px" }}>{opt.label}</div>
                <div style={{ fontSize: "10.5px", color: opt.active ? "rgba(255,255,255,0.45)" : `${NAVY}50`, fontWeight: 500 }}>{opt.sub}</div>
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
            <div>
              <label style={labelStyle}>Naam <span style={{ color: ACCENT }}>*</span></label>
              <input type="text" placeholder="Uw volledige naam" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>E-mail <span style={{ color: ACCENT }}>*</span></label>
              <input type="email" placeholder="uw@email.nl" style={inputStyle} />
            </div>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <label style={labelStyle}>Telefoonnummer <span style={{ fontSize: "11px", color: `${NAVY}40`, fontWeight: 400 }}>(optioneel)</span></label>
            <input type="tel" placeholder="+31 6 ..." style={inputStyle} />
          </div>
          <div style={{ marginBottom: "22px" }}>
            <label style={labelStyle}>Bericht <span style={{ color: ACCENT }}>*</span></label>
            <textarea rows={4} placeholder="Vertel ons kort over uzelf en waarnaar u op zoek bent..." style={{ ...inputStyle, resize: "none" }} />
          </div>
          <button style={{ width: "100%", background: ACCENT, color: "white", border: "none", borderRadius: "100px", padding: "14px", fontSize: "14px", fontWeight: 700, cursor: "pointer", boxShadow: `0 8px 28px ${ACCENT}35` }}>
            Verstuur bericht →
          </button>
          <p style={{ textAlign: "center", marginTop: "12px", fontSize: "11px", color: `${NAVY}38` }}>Reactie binnen 24 uur · Volledig vertrouwelijk</p>
        </div>

        {/* RIGHT — Navy profile panel */}
        <div style={{
          background: NAVY, padding: "48px 40px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          {/* Subtle dot-grid texture */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

          {/* Circular photo */}
          <div style={{ width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", border: `3px solid ${ACCENT}`, boxShadow: `0 0 0 6px rgba(34,164,232,0.15)`, marginBottom: "22px", position: "relative", zIndex: 1, flexShrink: 0 }}>
            <img src="/Nick_1779994992412.png" alt="Nicky" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 10%" }} />
          </div>

          {/* Name */}
          <div style={{ position: "relative", zIndex: 1, marginBottom: "6px" }}>
            <div style={{ fontSize: "16px", fontWeight: 800, color: "white", letterSpacing: "-0.3px" }}>Nicky</div>
            <div style={{ fontSize: "10px", fontWeight: 700, color: `${ACCENT}`, letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "4px" }}>Recruitment & Detachering</div>
          </div>

          {/* Divider */}
          <div style={{ width: "28px", height: "2px", background: `${ACCENT}60`, borderRadius: "2px", margin: "20px auto 24px", position: "relative", zIndex: 1 }} />

          {/* Quote */}
          <p style={{ fontSize: "15.5px", lineHeight: 1.72, color: "rgba(255,255,255,0.82)", fontWeight: 500, maxWidth: "280px", fontStyle: "italic", margin: "0 0 26px 0", position: "relative", zIndex: 1 }}>
            "Geen zin in het standaard LinkedIn-circus of eindeloos cv's schuiven? Ik ook niet. Laten we gewoon kijken waar de echte klik zit."
          </p>

          {/* CTA */}
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: "16px", padding: "18px 20px", maxWidth: "280px", position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: "13.5px", lineHeight: 1.65, color: "rgba(255,255,255,0.75)", fontWeight: 500, margin: 0 }}>
              Klaar voor een upgrade? Drop je gegevens en ik neem binnen 24 uur contact op.{" "}
              <span style={{ color: ACCENT, fontWeight: 700 }}>De koffie staat klaar.</span>
            </p>
          </div>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "28px", position: "relative", zIndex: 1 }}>
            {[
              { icon: "✉", text: "info@wedeploy.nl" },
              { icon: "☎", text: "085 212 8668" },
            ].map(item => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "rgba(255,255,255,0.55)" }}>
                <span style={{ fontSize: "11px" }}>{item.icon}</span> {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
