const NAVY = "#172A4E";
const ACCENT = "#22A4E8";
const CREAM = "#F9F7F3";

export function VariantA() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: NAVY, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 48px", height: "68px", flexShrink: 0, position: "relative", zIndex: 20 }}>
        <a style={{ fontWeight: 800, fontSize: "19px", letterSpacing: "-0.5px", lineHeight: 1, textDecoration: "none" }}>
          <span style={{ color: ACCENT }}>WE</span>
          <span style={{ color: "#fff" }}>DEPLOY</span>
        </a>
        <div style={{ display: "flex", gap: "32px", fontSize: "13.5px", fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>
          {["Diensten", "Kandidaten", "Opdrachtgevers", "Werkwijze", "Vacatures", "Contact"].map(item => (
            <span key={item} style={{ cursor: "pointer" }}>{item}</span>
          ))}
        </div>
        <button style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: "100px", padding: "10px 24px", fontSize: "13px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.1px" }}>
          Plan een gesprek
        </button>
      </nav>

      {/* Hero — true 50/50 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", flex: 1, overflow: "hidden" }}>

        {/* LEFT — navy text column */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 64px 80px 64px", position: "relative" }}>
          {/* Dot grid */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }} />

          <div style={{ position: "relative" }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div style={{ width: "24px", height: "2px", background: ACCENT, borderRadius: "2px" }} />
              <span style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px", color: ACCENT, textTransform: "uppercase" }}>
                Recruitment &amp; Detachering
              </span>
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: "62px", fontWeight: 800, lineHeight: 1.05, color: "#fff", letterSpacing: "-2.5px", margin: "0 0 28px 0" }}>
              De juiste<br />
              professionals<span style={{ color: ACCENT }}>.</span><br />
              De beste<br />
              matches<span style={{ color: ACCENT }}>.</span>
            </h1>

            {/* Sub */}
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", margin: "0 0 40px 0", maxWidth: "380px" }}>
              Wij brengen rust en executiekracht in complexe trajecten binnen projectmanagement, facility, vastgoed en techniek.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "48px" }}>
              <button style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: "100px", padding: "15px 32px", fontSize: "14px", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                Ik zoek versterking →
              </button>
              <button style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: "100px", padding: "15px 32px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>
                Ik ben professional
              </button>
            </div>

            {/* Contact strip */}
            <div style={{ display: "flex", alignItems: "center", gap: "28px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>📞</span> 085 212 8668
              </span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>✉️</span> info@wedeploy.nl
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — full-bleed image, flush to all edges */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="/hero-professionals.webp"
            alt="Professional aan het werk"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
          {/* Navy gradient overlay bleeding LEFT from image into navy */}
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to right, ${NAVY} 0%, ${NAVY}60 25%, transparent 55%)`
          }} />
          {/* Bottom vignette */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(23,42,78,0.5) 0%, transparent 40%)"
          }} />
          {/* Floating badge */}
          <div style={{
            position: "absolute", bottom: "40px", left: "40px",
            background: "rgba(255,255,255,0.10)", backdropFilter: "blur(12px)",
            borderRadius: "14px", padding: "14px 20px",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff"
          }}>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: ACCENT, textTransform: "uppercase", marginBottom: "4px" }}>
              Persoonlijke screening
            </div>
            <div style={{ fontSize: "13px", fontWeight: 600 }}>Transparante communicatie · Duurzame match</div>
          </div>
        </div>
      </div>
    </div>
  );
}
