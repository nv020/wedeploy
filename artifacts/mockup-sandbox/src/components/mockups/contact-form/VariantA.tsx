const NAVY = "#172A4E";
const ACCENT = "#22A4E8";
const CREAM = "#F9F7F3";

export function VariantA() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: CREAM, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px" }}>

      {/* Section header — centered */}
      <div style={{ textAlign: "center", marginBottom: "48px", maxWidth: "560px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `${ACCENT}12`, border: `1px solid ${ACCENT}30`, borderRadius: "100px", padding: "5px 14px", marginBottom: "20px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: ACCENT }} />
          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: ACCENT }}>Contact</span>
        </div>
        <h2 style={{ fontSize: "42px", fontWeight: 800, color: NAVY, letterSpacing: "-2px", lineHeight: 1.08, margin: "0 0 14px 0" }}>
          Klaar voor een <span style={{ color: ACCENT }}>duurzame</span> match?
        </h2>
        <p style={{ fontSize: "15px", color: `${NAVY}80`, lineHeight: 1.75, margin: 0 }}>
          Laat je gegevens achter — wij nemen persoonlijk contact op.
        </p>
      </div>

      {/* Role toggle — large, friendly pill buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "36px" }}>
        {[
          { label: "Ik zoek versterking", sub: "Opdrachtgever" },
          { label: "Ik ben professional", sub: "Kandidaat" }
        ].map((opt, i) => (
          <button key={opt.label} style={{
            background: i === 0 ? NAVY : "white",
            color: i === 0 ? "white" : NAVY,
            border: i === 0 ? "none" : `1.5px solid ${NAVY}20`,
            borderRadius: "14px", padding: "14px 28px",
            cursor: "pointer", textAlign: "left",
            boxShadow: i === 0 ? `0 8px 28px ${NAVY}20` : "none"
          }}>
            <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "2px" }}>{opt.label}</div>
            <div style={{ fontSize: "11px", color: i === 0 ? "rgba(255,255,255,0.5)" : `${NAVY}50`, fontWeight: 500 }}>{opt.sub}</div>
          </button>
        ))}
      </div>

      {/* Minimal form card */}
      <div style={{ width: "100%", maxWidth: "520px", background: "white", borderRadius: "20px", padding: "40px", boxShadow: `0 4px 48px ${NAVY}08`, border: `1px solid ${NAVY}08` }}>

        {/* Row: naam + email */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
          {[
            { label: "Naam", placeholder: "Uw volledige naam", type: "text" },
            { label: "E-mail", placeholder: "uw@email.nl", type: "email" }
          ].map(f => (
            <div key={f.label}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: NAVY, letterSpacing: "0.5px", marginBottom: "6px" }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} style={{
                width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}14`,
                padding: "10px 14px", fontSize: "13.5px", color: NAVY,
                outline: "none", boxSizing: "border-box", background: CREAM
              }} />
            </div>
          ))}
        </div>

        {/* Telefoon */}
        <div style={{ marginBottom: "14px" }}>
          <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: NAVY, letterSpacing: "0.5px", marginBottom: "6px" }}>Telefoonnummer <span style={{ color: `${NAVY}40`, fontWeight: 400 }}>(optioneel)</span></label>
          <input type="tel" placeholder="+31 6 ..." style={{
            width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}14`,
            padding: "10px 14px", fontSize: "13.5px", color: NAVY,
            outline: "none", boxSizing: "border-box", background: CREAM
          }} />
        </div>

        {/* Bericht */}
        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: NAVY, letterSpacing: "0.5px", marginBottom: "6px" }}>Bericht</label>
          <textarea rows={4} placeholder="Vertel ons kort over uzelf en waarnaar u op zoek bent..." style={{
            width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}14`,
            padding: "10px 14px", fontSize: "13.5px", color: NAVY,
            outline: "none", resize: "none", boxSizing: "border-box", background: CREAM, fontFamily: "inherit"
          }} />
        </div>

        {/* Submit */}
        <button style={{
          width: "100%", background: ACCENT, color: "white", border: "none",
          borderRadius: "100px", padding: "15px", fontSize: "14px", fontWeight: 700,
          cursor: "pointer", boxShadow: `0 8px 28px ${ACCENT}35`
        }}>
          Verstuur bericht →
        </button>

        <p style={{ textAlign: "center", marginTop: "14px", fontSize: "11.5px", color: `${NAVY}40` }}>
          Reactie binnen één werkdag · Volledig vertrouwelijk
        </p>
      </div>

      {/* Contact details strip */}
      <div style={{ display: "flex", gap: "28px", marginTop: "32px" }}>
        {[["085 212 8668", "Telefoon"], ["info@wedeploy.nl", "E-mail"]].map(([val, lbl]) => (
          <div key={lbl} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, color: `${NAVY}40`, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "4px" }}>{lbl}</div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: NAVY }}>{val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
