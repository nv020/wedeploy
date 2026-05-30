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

export function VariantD() {
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
      <div style={{ maxWidth: "1040px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>

        {/* LEFT — Form card */}
        <div style={{ background: "white", borderRadius: "20px", padding: "36px", boxShadow: `0 4px 40px ${NAVY}07`, border: `1px solid ${NAVY}08` }}>

          {/* Role toggle */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }}>
            {[
              { label: "Ik zoek versterking", sub: "Opdrachtgever", active: true },
              { label: "Ik ben professional", sub: "Kandidaat", active: false },
            ].map(opt => (
              <button key={opt.label} style={{
                background: opt.active ? NAVY : "white", color: opt.active ? "white" : NAVY,
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

        {/* RIGHT — Profile column */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: "12px", gap: "0" }}>

          {/* Circular photo */}
          <div style={{ width: "116px", height: "116px", borderRadius: "50%", overflow: "hidden", border: `3px solid white`, boxShadow: `0 8px 32px ${NAVY}18`, marginBottom: "24px", flexShrink: 0 }}>
            <img src="/Nick_1779994992412.png" alt="Nicky" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 10%" }} />
          </div>

          {/* Name + role */}
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: NAVY, letterSpacing: "-0.3px" }}>Nicky</div>
            <div style={{ fontSize: "10.5px", fontWeight: 700, color: `${NAVY}50`, letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "3px" }}>Recruitment & Detachering</div>
          </div>

          {/* Divider */}
          <div style={{ width: "32px", height: "2px", background: ACCENT, borderRadius: "2px", marginBottom: "24px" }} />

          {/* Quote */}
          <p style={{ fontSize: "16px", lineHeight: 1.72, color: NAVY, fontWeight: 500, maxWidth: "320px", fontStyle: "italic", margin: "0 0 28px 0" }}>
            "Geen zin in het standaard LinkedIn-circus of eindeloos cv's schuiven? Ik ook niet. Laten we gewoon kijken waar de echte klik zit."
          </p>

          {/* CTA */}
          <p style={{ fontSize: "14.5px", lineHeight: 1.65, color: `${NAVY}90`, fontWeight: 600, maxWidth: "300px", margin: 0 }}>
            Klaar voor een upgrade? Drop je gegevens links en ik neem binnen 24 uur contact met je op. <span style={{ color: ACCENT }}>De koffie staat klaar.</span>
          </p>

          {/* Trust row */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "28px", alignItems: "flex-start", alignSelf: "flex-start", paddingLeft: "8px" }}>
            {["Persoonlijk contact, geen doorverwijzingen", "Reactie binnen één werkdag", "Volledig vertrouwelijk & vrijblijvend"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: `${NAVY}70` }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
