const NAVY = "#172A4E";
const ACCENT = "#22A4E8";
const CREAM = "#F9F7F3";

export function VariantA() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: CREAM, minHeight: "100vh", display: "grid", gridTemplateColumns: "420px 1fr" }}>

      {/* ── LEFT — photo + details ── */}
      <div style={{ background: NAVY, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", minHeight: "100vh" }}>

        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        {/* Accent glow */}
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "280px", height: "280px", borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT}20 0%, transparent 70%)`, pointerEvents: "none" }} />

        {/* Photo — large editorial, flush to top */}
        <div style={{ position: "relative", height: "420px", flexShrink: 0 }}>
          <img
            src="/Nick_1779994992412.png"
            alt="Nicky — Wedeploy"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 15%", display: "block" }}
          />
          {/* Bottom fade into navy */}
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 40%, ${NAVY} 100%)` }} />
          {/* Name tag overlay */}
          <div style={{ position: "absolute", bottom: "24px", left: "32px" }}>
            <div style={{ fontSize: "22px", fontWeight: 800, color: "white", letterSpacing: "-0.5px", lineHeight: 1.1 }}>Nicky</div>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "4px" }}>
              Recruitment &amp; Detachering
            </div>
          </div>
        </div>

        {/* Content below photo */}
        <div style={{ padding: "28px 32px 40px", position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column" }}>

          {/* Quote */}
          <div style={{ marginBottom: "28px" }}>
            <div style={{ width: "24px", height: "2px", background: ACCENT, borderRadius: "2px", marginBottom: "14px" }} />
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
              "Heb je een vraag of wil je kennismaken? Ik sta voor je klaar."
            </p>
          </div>

          {/* Trust bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
            {[
              "Persoonlijk contact, geen doorverwijzingen",
              "Reactie binnen één werkdag",
              "Volledig vertrouwelijk &amp; vrijblijvend",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: ACCENT, flexShrink: 0, marginTop: "6px" }} />
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.50)", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "24px" }} />

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "auto" }}>
            {[
              { label: "E-mail", value: "info@wedeploy.nl", href: "mailto:info@wedeploy.nl" },
              { label: "Telefoon", value: "085 212 8668", href: "tel:0852128668" },
              { label: "Adres", value: "Krijn Taconiskade 461\n1087 HW Amsterdam", href: null },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <div style={{ fontSize: "9.5px", fontWeight: 700, color: "rgba(255,255,255,0.28)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "3px" }}>{label}</div>
                {href ? (
                  <a href={href} style={{ fontSize: "13.5px", fontWeight: 600, color: "rgba(255,255,255,0.75)", textDecoration: "none", lineHeight: 1.5 }}>{value}</a>
                ) : (
                  <div style={{ fontSize: "13.5px", fontWeight: 600, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, whiteSpace: "pre-line" }}>{value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT — clean form ── */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "64px 56px" }}>

        {/* Section header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `${ACCENT}12`, border: `1px solid ${ACCENT}28`, borderRadius: "100px", padding: "5px 14px", marginBottom: "16px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: ACCENT }} />
            <span style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: ACCENT }}>Direct contact</span>
          </div>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: NAVY, letterSpacing: "-1.5px", lineHeight: 1.1, margin: "0 0 10px 0" }}>
            Klaar voor een<br /><span style={{ color: ACCENT }}>duurzame</span> match?
          </h2>
          <p style={{ fontSize: "14.5px", color: `${NAVY}65`, lineHeight: 1.75, margin: 0, maxWidth: "380px" }}>
            Laat je gegevens achter — Nicky neemt persoonlijk contact op.
          </p>
        </div>

        {/* Role selector */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
          {[
            { label: "Ik zoek versterking", active: true },
            { label: "Ik ben professional", active: false }
          ].map(opt => (
            <button key={opt.label} style={{
              flex: 1,
              background: opt.active ? NAVY : "white",
              color: opt.active ? "white" : `${NAVY}80`,
              border: opt.active ? "none" : `1.5px solid ${NAVY}14`,
              borderRadius: "100px",
              padding: "10px 18px",
              fontSize: "13px",
              fontWeight: opt.active ? 700 : 500,
              cursor: "pointer",
              transition: "all 0.2s"
            }}>
              {opt.label}
            </button>
          ))}
        </div>

        {/* Form fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* Naam + Email row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            {[
              { label: "Naam", placeholder: "Uw volledige naam", type: "text" },
              { label: "E-mail", placeholder: "uw@email.nl", type: "email" }
            ].map(f => (
              <div key={f.label}>
                <label style={{ display: "block", fontSize: "10.5px", fontWeight: 700, color: NAVY, letterSpacing: "0.3px", marginBottom: "6px" }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} style={{
                  width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}12`,
                  padding: "11px 14px", fontSize: "13.5px", color: NAVY, background: "white",
                  outline: "none", boxSizing: "border-box", fontFamily: "inherit"
                }} />
              </div>
            ))}
          </div>

          {/* Telefoon */}
          <div>
            <label style={{ display: "block", fontSize: "10.5px", fontWeight: 700, color: NAVY, letterSpacing: "0.3px", marginBottom: "6px" }}>
              Telefoonnummer <span style={{ color: `${NAVY}40`, fontWeight: 400 }}>(optioneel)</span>
            </label>
            <input type="tel" placeholder="+31 6 ..." style={{
              width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}12`,
              padding: "11px 14px", fontSize: "13.5px", color: NAVY, background: "white",
              outline: "none", boxSizing: "border-box", fontFamily: "inherit"
            }} />
          </div>

          {/* Bericht */}
          <div>
            <label style={{ display: "block", fontSize: "10.5px", fontWeight: 700, color: NAVY, letterSpacing: "0.3px", marginBottom: "6px" }}>Bericht</label>
            <textarea rows={5} placeholder="Vertel ons kort over uzelf en waarnaar u op zoek bent..." style={{
              width: "100%", borderRadius: "10px", border: `1.5px solid ${NAVY}12`,
              padding: "11px 14px", fontSize: "13.5px", color: NAVY, background: "white",
              outline: "none", resize: "none", boxSizing: "border-box", fontFamily: "inherit"
            }} />
          </div>

          {/* Submit */}
          <button style={{
            width: "100%", background: ACCENT, color: "white", border: "none",
            borderRadius: "100px", padding: "16px",
            fontSize: "14.5px", fontWeight: 700, cursor: "pointer",
            boxShadow: `0 10px 32px ${ACCENT}35`, marginTop: "4px"
          }}>
            Verstuur bericht →
          </button>

          <p style={{ textAlign: "center", marginTop: "4px", fontSize: "11.5px", color: `${NAVY}38` }}>
            Reactie binnen één werkdag · Volledig vertrouwelijk
          </p>
        </div>
      </div>
    </div>
  );
}
