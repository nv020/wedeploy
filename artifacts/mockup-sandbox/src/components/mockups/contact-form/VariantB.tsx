const NAVY = "#172A4E";
const ACCENT = "#22A4E8";
const CREAM = "#F9F7F3";

export function VariantB() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "white", minHeight: "100vh", display: "flex", flexDirection: "column", padding: "56px 40px" }}>

      {/* Header row — left heading + right contact details */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "52px", gap: "32px" }}>
        <div style={{ maxWidth: "460px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `${ACCENT}12`, border: `1px solid ${ACCENT}30`, borderRadius: "100px", padding: "5px 14px", marginBottom: "18px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: ACCENT }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: ACCENT }}>Contact</span>
          </div>
          <h2 style={{ fontSize: "38px", fontWeight: 800, color: NAVY, letterSpacing: "-1.5px", lineHeight: 1.1, margin: "0 0 10px 0" }}>
            Neem contact<br />met ons op.
          </h2>
          <p style={{ fontSize: "14px", color: `${NAVY}65`, lineHeight: 1.75, margin: 0 }}>
            Persoonlijk, snel en vrijblijvend. Wij reageren binnen één werkdag.
          </p>
        </div>

        <div style={{ display: "flex", gap: "32px", flexShrink: 0, paddingTop: "8px" }}>
          {[
            { label: "Telefoon", value: "085 212 8668" },
            { label: "E-mail", value: "info@wedeploy.nl" },
            { label: "Adres", value: "Krijn Taconiskade 461\n1087 HW Amsterdam" }
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ fontSize: "10px", fontWeight: 700, color: `${NAVY}45`, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "5px" }}>{label}</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: NAVY, lineHeight: 1.6, whiteSpace: "pre-line" }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: `${NAVY}08`, marginBottom: "40px" }} />

      {/* Two cards side by side */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", flex: 1 }}>

        {/* Card 1 — Opdrachtgever */}
        <div style={{ background: NAVY, borderRadius: "20px", padding: "36px", display: "flex", flexDirection: "column", gap: "16px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: `${ACCENT}18`, pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, color: ACCENT, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px" }}>Opdrachtgever</div>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "white", letterSpacing: "-0.5px", margin: "0 0 4px 0" }}>Ik zoek versterking</h3>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", margin: "0 0 20px 0", lineHeight: 1.6 }}>Vertel ons over de opdracht.</p>
          </div>

          {[
            { label: "Bedrijfsnaam", placeholder: "Uw organisatie", type: "text" },
            { label: "Uw naam", placeholder: "Contactpersoon", type: "text" },
            { label: "E-mail", placeholder: "uw@bedrijf.nl", type: "email" },
          ].map(f => (
            <div key={f.label}>
              <label style={{ display: "block", fontSize: "10.5px", fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.5px", marginBottom: "5px" }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} style={{
                width: "100%", borderRadius: "10px", border: "1.5px solid rgba(255,255,255,0.10)",
                padding: "10px 14px", fontSize: "13px", color: "white",
                background: "rgba(255,255,255,0.07)", outline: "none", boxSizing: "border-box",
                fontFamily: "inherit"
              }} />
            </div>
          ))}

          <div>
            <label style={{ display: "block", fontSize: "10.5px", fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.5px", marginBottom: "5px" }}>Omschrijving</label>
            <textarea rows={3} placeholder="Welk type professional zoekt u?" style={{
              width: "100%", borderRadius: "10px", border: "1.5px solid rgba(255,255,255,0.10)",
              padding: "10px 14px", fontSize: "13px", color: "white",
              background: "rgba(255,255,255,0.07)", outline: "none", resize: "none", boxSizing: "border-box",
              fontFamily: "inherit"
            }} />
          </div>

          <button style={{
            background: ACCENT, color: "white", border: "none", borderRadius: "100px",
            padding: "14px", fontSize: "13.5px", fontWeight: 700, cursor: "pointer",
            marginTop: "4px", boxShadow: `0 8px 24px ${ACCENT}40`
          }}>
            Verstuur aanvraag →
          </button>
        </div>

        {/* Card 2 — Professional */}
        <div style={{ background: CREAM, borderRadius: "20px", padding: "36px", display: "flex", flexDirection: "column", gap: "16px", border: `1.5px solid ${NAVY}08` }}>
          <div>
            <div style={{ fontSize: "10px", fontWeight: 700, color: ACCENT, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px" }}>Kandidaat</div>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: NAVY, letterSpacing: "-0.5px", margin: "0 0 4px 0" }}>Ik ben professional</h3>
            <p style={{ fontSize: "13px", color: `${NAVY}60`, margin: "0 0 20px 0", lineHeight: 1.6 }}>Vertel ons over jezelf.</p>
          </div>

          {[
            { label: "Volledige naam", placeholder: "Uw naam", type: "text" },
            { label: "E-mail", placeholder: "uw@email.nl", type: "email" },
            { label: "Telefoonnummer", placeholder: "+31 6 ...", type: "tel" },
          ].map(f => (
            <div key={f.label}>
              <label style={{ display: "block", fontSize: "10.5px", fontWeight: 700, color: `${NAVY}55`, letterSpacing: "0.5px", marginBottom: "5px" }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} style={{
                width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}12`,
                padding: "10px 14px", fontSize: "13px", color: NAVY,
                background: "white", outline: "none", boxSizing: "border-box",
                fontFamily: "inherit"
              }} />
            </div>
          ))}

          <div>
            <label style={{ display: "block", fontSize: "10.5px", fontWeight: 700, color: `${NAVY}55`, letterSpacing: "0.5px", marginBottom: "5px" }}>Bericht</label>
            <textarea rows={3} placeholder="Uw achtergrond en wat u zoekt..." style={{
              width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}12`,
              padding: "10px 14px", fontSize: "13px", color: NAVY,
              background: "white", outline: "none", resize: "none", boxSizing: "border-box",
              fontFamily: "inherit"
            }} />
          </div>

          <button style={{
            background: NAVY, color: "white", border: "none", borderRadius: "100px",
            padding: "14px", fontSize: "13.5px", fontWeight: 700, cursor: "pointer",
            marginTop: "4px", boxShadow: `0 8px 24px ${NAVY}20`
          }}>
            Verstuur aanmelding →
          </button>
        </div>
      </div>
    </div>
  );
}
