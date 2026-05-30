const NAVY = "#172A4E";
const ACCENT = "#22A4E8";
const CREAM = "#F9F7F3";

const inputStyle: React.CSSProperties = {
  width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}14`,
  padding: "10px 14px", fontSize: "13.5px", color: NAVY,
  outline: "none", boxSizing: "border-box", background: "#FEFDF9",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "11px", fontWeight: 700, color: NAVY,
  letterSpacing: "0.5px", marginBottom: "6px",
};

export function VariantG() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: CREAM, minHeight: "100vh", padding: "72px 40px" }}>

      {/* Bold section header */}
      <div style={{ maxWidth: "1040px", margin: "0 auto 52px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `${ACCENT}12`, border: `1px solid ${ACCENT}30`, borderRadius: "100px", padding: "5px 16px", marginBottom: "14px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: ACCENT }} />
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: ACCENT }}>Contact</span>
            </div>
            <h2 style={{ fontSize: "42px", fontWeight: 900, color: NAVY, letterSpacing: "-2px", lineHeight: 1.06, margin: 0 }}>
              Klaar voor een<br /><span style={{ color: ACCENT }}>duurzame</span> match?
            </h2>
          </div>
          <div style={{ display: "flex", gap: "36px" }}>
            {[
              { label: "Reactie binnen", val: "24 uur" },
              { label: "Vrijblijvend", val: "Altijd" },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "28px", fontWeight: 900, color: ACCENT, letterSpacing: "-1px" }}>{stat.val}</div>
                <div style={{ fontSize: "10px", fontWeight: 700, color: `${NAVY}50`, letterSpacing: "1px", textTransform: "uppercase" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2-column grid */}
      <div style={{ maxWidth: "1040px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "28px", alignItems: "start" }}>

        {/* LEFT — Form card */}
        <div style={{ background: "white", borderRadius: "22px", padding: "38px", boxShadow: `0 4px 40px ${NAVY}07`, border: `1px solid ${NAVY}08` }}>

          {/* Role toggle — pill bar */}
          <div style={{ display: "flex", gap: "6px", marginBottom: "26px", background: CREAM, borderRadius: "14px", padding: "5px" }}>
            {[
              { label: "Ik zoek versterking", active: true },
              { label: "Ik ben professional", active: false },
            ].map(opt => (
              <button key={opt.label} style={{
                flex: 1, background: opt.active ? NAVY : "transparent",
                color: opt.active ? "white" : `${NAVY}55`,
                border: "none", borderRadius: "10px", padding: "11px 12px",
                cursor: "pointer", fontSize: "12.5px", fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                {opt.label}
              </button>
            ))}
          </div>

          {/* Fields */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "13px", marginBottom: "13px" }}>
            <div>
              <label style={labelStyle}>Naam <span style={{ color: ACCENT }}>*</span></label>
              <input type="text" placeholder="Volledige naam" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>E-mail <span style={{ color: ACCENT }}>*</span></label>
              <input type="email" placeholder="uw@email.nl" style={inputStyle} />
            </div>
          </div>
          <div style={{ marginBottom: "13px" }}>
            <label style={labelStyle}>Telefoon <span style={{ fontSize: "11px", color: `${NAVY}40`, fontWeight: 400 }}>(optioneel)</span></label>
            <input type="tel" placeholder="+31 6 ..." style={inputStyle} />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <label style={labelStyle}>Bericht <span style={{ color: ACCENT }}>*</span></label>
            <textarea rows={4} placeholder="Vertel ons kort over uzelf en waarnaar u op zoek bent..." style={{ ...inputStyle, resize: "none" }} />
          </div>

          {/* Submit */}
          <button style={{
            width: "100%", background: NAVY, color: "white", border: "none",
            borderRadius: "100px", padding: "15px", fontSize: "14px", fontWeight: 700,
            cursor: "pointer", boxShadow: `0 8px 28px ${NAVY}25`,
            letterSpacing: "-0.2px", fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Verstuur bericht <span style={{ color: ACCENT }}>→</span>
          </button>

          <p style={{ textAlign: "center", marginTop: "12px", fontSize: "11px", color: `${NAVY}35`, margin: "12px 0 0" }}>
            Reactie binnen 24 uur · Volledig vertrouwelijk
          </p>
        </div>

        {/* RIGHT — Profile column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

          {/* White profile card */}
          <div style={{ background: "white", borderRadius: "22px", padding: "30px 28px", boxShadow: `0 4px 24px ${NAVY}06`, border: `1px solid ${NAVY}07` }}>

            {/* Photo + name row */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "22px" }}>
              <div style={{
                width: "76px", height: "76px", borderRadius: "50%", overflow: "hidden",
                border: `2.5px solid ${ACCENT}`, flexShrink: 0,
                boxShadow: `0 0 0 4px ${ACCENT}18`,
              }}>
                <img
                  src="/Nick_1780149335945.png"
                  alt="Nicky"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 12%" }}
                />
              </div>
              <div>
                <div style={{ fontSize: "17px", fontWeight: 800, color: NAVY, letterSpacing: "-0.4px", lineHeight: 1.2 }}>Nicky</div>
                <div style={{ fontSize: "10.5px", fontWeight: 700, color: ACCENT, letterSpacing: "1.2px", textTransform: "uppercase", marginTop: "4px" }}>Recruitment & Detachering</div>
                <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
                  {["Recruitment", "Detachering"].map(tag => (
                    <span key={tag} style={{ fontSize: "10px", fontWeight: 700, background: `${ACCENT}10`, color: ACCENT, borderRadius: "100px", padding: "3px 10px" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote with accent border */}
            <div style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "16px" }}>
              <p style={{
                fontSize: "14px", lineHeight: 1.72, color: `${NAVY}88`,
                fontWeight: 500, margin: 0, fontStyle: "italic",
              }}>
                "Bij Wedeploy kijken we verder dan alleen een cv of online profiel. Het gaat om de juiste energie en de perfecte match op de werkvloer. Laten we kennismaken."
              </p>
            </div>
          </div>

          {/* Navy CTA card */}
          <div style={{
            background: NAVY, borderRadius: "22px", padding: "28px",
            boxShadow: `0 8px 32px ${NAVY}22`, position: "relative", overflow: "hidden",
          }}>
            {/* Dot-grid texture */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "white", lineHeight: 1.65, margin: "0 0 14px 0" }}>
                Klaar voor de volgende stap? Laat je gegevens links achter. Binnen 24 uur hebben we contact en kijken we wat er mogelijk is.
              </p>
              <p style={{ fontSize: "15px", fontWeight: 800, color: ACCENT, margin: 0, letterSpacing: "-0.2px" }}>
                ☕️ De koffie staat klaar.
              </p>
            </div>
          </div>

          {/* Mini contact strip */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { label: "E-mail", val: "info@wedeploy.nl" },
              { label: "Telefoon", val: "085 212 8668" },
            ].map(item => (
              <div key={item.label} style={{
                flex: 1, background: "white", borderRadius: "14px",
                padding: "13px 16px", border: `1px solid ${NAVY}08`,
                boxShadow: `0 2px 12px ${NAVY}04`,
              }}>
                <div style={{ fontSize: "9.5px", fontWeight: 700, color: `${NAVY}40`, letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "12.5px", fontWeight: 700, color: NAVY }}>{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
