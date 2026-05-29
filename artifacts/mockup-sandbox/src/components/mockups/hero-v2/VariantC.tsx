const NAVY = "#172A4E";
const ACCENT = "#22A4E8";
const CREAM = "#F9F7F3";

export function VariantC() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: NAVY, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "28px 28px"
      }} />

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 56px", height: "68px", flexShrink: 0, position: "relative", zIndex: 20 }}>
        <a style={{ fontWeight: 800, fontSize: "19px", letterSpacing: "-0.5px", lineHeight: 1, textDecoration: "none" }}>
          <span style={{ color: ACCENT }}>WE</span>
          <span style={{ color: "#fff" }}>DEPLOY</span>
        </a>
        <div style={{ display: "flex", gap: "32px", fontSize: "13.5px", fontWeight: 500, color: "rgba(255,255,255,0.55)" }}>
          {["Diensten", "Kandidaten", "Opdrachtgevers", "Werkwijze", "Vacatures", "Contact"].map(item => (
            <span key={item} style={{ cursor: "pointer" }}>{item}</span>
          ))}
        </div>
        <button style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: "100px", padding: "10px 24px", fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>
          Plan een gesprek
        </button>
      </nav>

      {/* Hero — stacked, centered */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 56px 0 56px", position: "relative", zIndex: 10, textAlign: "center" }}>

        {/* Eyebrow */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "28px", padding: "6px 16px", borderRadius: "100px", border: `1px solid rgba(34,164,232,0.3)`, background: "rgba(34,164,232,0.08)" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
          <span style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px", color: ACCENT, textTransform: "uppercase" }}>
            Recruitment &amp; Detachering
          </span>
        </div>

        {/* Very large centered headline */}
        <h1 style={{
          fontSize: "clamp(56px, 6.5vw, 84px)",
          fontWeight: 900,
          lineHeight: 1.04,
          color: "#fff",
          letterSpacing: "-3.5px",
          margin: "0 0 28px 0",
          maxWidth: "820px"
        }}>
          De juiste professionals<span style={{ color: ACCENT }}>.</span><br />
          De beste matches<span style={{ color: ACCENT }}>.</span>
        </h1>

        {/* Sub */}
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(255,255,255,0.50)", margin: "0 0 40px 0", maxWidth: "520px" }}>
          Wij brengen rust en executiekracht in complexe trajecten binnen projectmanagement, facility, vastgoed en techniek. Geen snelle cv's — duurzame matches.
        </p>

        {/* Single centered CTA pill */}
        <button style={{
          background: ACCENT, color: "#fff", border: "none",
          borderRadius: "100px", padding: "17px 44px",
          fontSize: "15px", fontWeight: 800, cursor: "pointer",
          marginBottom: "60px",
          boxShadow: "0 12px 40px rgba(34,164,232,0.30)",
          display: "flex", alignItems: "center", gap: "8px"
        }}>
          Ik zoek versterking →
        </button>

        {/* Cinematic photo strip — 70% wide, cropped as widescreen */}
        <div style={{ width: "72%", position: "relative", borderRadius: "20px 20px 0 0", overflow: "hidden", flexShrink: 0 }}>
          <img
            src="/hero-professionals.webp"
            alt="Professional aan het werk"
            style={{
              width: "100%",
              height: "340px",
              objectFit: "cover",
              objectPosition: "center 30%",
              display: "block"
            }}
          />
          {/* Vignette — fades into navy bottom */}
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to bottom, transparent 30%, ${NAVY} 100%)`
          }} />
          {/* Left vignette */}
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${NAVY} 0%, transparent 18%, transparent 82%, ${NAVY} 100%)` }} />

          {/* Floating tag */}
          <div style={{
            position: "absolute", top: "24px", left: "32px",
            background: "rgba(255,255,255,0.10)", backdropFilter: "blur(12px)",
            borderRadius: "10px", padding: "10px 16px",
            border: "1px solid rgba(255,255,255,0.12)"
          }}>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: ACCENT, textTransform: "uppercase", marginBottom: "3px" }}>Persoonlijke screening</div>
            <div style={{ fontSize: "12.5px", fontWeight: 600, color: "#fff" }}>Transparante communicatie · Duurzame match</div>
          </div>
        </div>
      </div>

      {/* Contact strip at the very bottom */}
      <div style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.07)", padding: "16px 72px", display: "flex", justifyContent: "center", gap: "32px", flexShrink: 0, marginTop: "auto" }}>
        <span style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.32)" }}>085 212 8668</span>
        <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
        <span style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.32)" }}>info@wedeploy.nl</span>
        <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
        <span style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.32)" }}>Krijn Taconiskade 461 · Amsterdam</span>
      </div>
    </div>
  );
}
