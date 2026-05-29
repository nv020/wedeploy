const NAVY = "#172A4E";
const ACCENT = "#22A4E8";

export function VariantB() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: NAVY, minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>

      {/* Full-bleed image — right 75%, positioned absolutely */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "75%", height: "100%", zIndex: 1 }}>
        <img
          src="/hero-professionals.webp"
          alt="Professional aan het werk"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
        />
        {/* Strong navy gradient masking LEFT side of photo */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to right, ${NAVY} 0%, ${NAVY}F2 8%, ${NAVY}BB 28%, ${NAVY}55 50%, transparent 72%)`
        }} />
        {/* Top + bottom darkening */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(23,42,78,0.5) 0%, transparent 35%, rgba(23,42,78,0.3) 100%)" }} />
      </div>

      {/* Dot grid — left portion only */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "45%", height: "100%", zIndex: 2, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "28px 28px"
      }} />

      {/* Nav — matches FullPage style: solid navy, filled accent CTA */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 56px", height: "72px", flexShrink: 0, position: "relative", zIndex: 30, background: NAVY }}>
        <a style={{ fontWeight: 800, fontSize: "19px", letterSpacing: "-0.5px", lineHeight: 1, textDecoration: "none" }}>
          <span style={{ color: ACCENT }}>WE</span>
          <span style={{ color: "#fff" }}>DEPLOY</span>
        </a>
        <div style={{ display: "flex", gap: "32px", fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.55)" }}>
          {["Diensten", "Kandidaten", "Opdrachtgevers", "Werkwijze", "Vacatures", "Contact"].map(item => (
            <span key={item} style={{ cursor: "pointer" }}>{item}</span>
          ))}
        </div>
        <button style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: "999px", padding: "10px 24px", fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>
          Plan gesprek
        </button>
      </nav>

      {/* Hero content — text overlaps image */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 56px 80px 72px", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "600px" }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
            <div style={{ width: "32px", height: "2px", background: ACCENT, borderRadius: "2px" }} />
            <span style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px", color: ACCENT, textTransform: "uppercase" }}>
              Recruitment · Detachering
            </span>
          </div>

          {/* Four-line headline — overlapping the image */}
          <h1 style={{
            fontSize: "clamp(64px, 6.5vw, 88px)",
            fontWeight: 900,
            lineHeight: 1.0,
            color: "#fff",
            letterSpacing: "-3.5px",
            margin: "0 0 32px 0"
          }}>
            De juiste<br />
            professionals<span style={{ color: ACCENT }}>.</span><br />
            De beste<br />
            <span style={{ color: ACCENT }}>matches.</span>
          </h1>

          {/* Sub */}
          <p style={{ fontSize: "16.5px", lineHeight: 1.75, color: "rgba(255,255,255,0.50)", margin: "0 0 44px 0", maxWidth: "420px" }}>
            Geen snelle cv's. Duurzame matches — binnen projectmanagement, facility, vastgoed en techniek.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            <button style={{
              background: ACCENT, color: "#fff", border: "none",
              borderRadius: "100px", padding: "17px 38px",
              fontSize: "15px", fontWeight: 800, cursor: "pointer",
              letterSpacing: "0.1px",
              boxShadow: "0 12px 40px rgba(34,164,232,0.35)"
            }}>
              Ik zoek versterking →
            </button>
            <button style={{
              background: "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.75)",
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: "100px",
              padding: "17px 32px",
              fontSize: "14px", fontWeight: 600, cursor: "pointer"
            }}>
              Ik ben professional
            </button>
          </div>
        </div>
      </div>

      {/* Bottom contact bar */}
      <div style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.07)", padding: "18px 72px", display: "flex", gap: "36px", flexShrink: 0 }}>
        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>085 212 8668</span>
        <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "14px" }}>·</span>
        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>info@wedeploy.nl</span>
        <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "14px" }}>·</span>
        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>Krijn Taconiskade 461 · Amsterdam</span>
      </div>
    </div>
  );
}
