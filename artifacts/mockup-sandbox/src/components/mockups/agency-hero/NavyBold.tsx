export function NavyBold() {
  const NAVY = "#172A4E";
  const ACCENT = "#22A4E8";
  const CREAM = "#F9F7F3";

  return (
    <div style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif", backgroundColor: NAVY, minHeight: "100vh", color: "white", overflow: "hidden", position: "relative" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" />

      {/* Large faint circle accent */}
      <div style={{ position: "absolute", top: "-300px", left: "-200px", width: "800px", height: "800px", borderRadius: "50%", border: `1px solid rgba(255,255,255,0.04)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-200px", left: "-100px", width: "600px", height: "600px", borderRadius: "50%", border: `1px solid rgba(255,255,255,0.04)`, pointerEvents: "none" }} />

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "26px 52px", position: "relative", zIndex: 10 }}>
        <span style={{ fontWeight: 800, fontSize: "17px", letterSpacing: "-0.3px" }}>
          <span style={{ color: ACCENT }}>WE</span>DEPLOY
        </span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: "rgba(255,255,255,0.55)", alignItems: "center" }}>
          {["Diensten", "Kandidaten", "Werkwijze", "Vacatures"].map(n => <span key={n} style={{ cursor: "pointer" }}>{n}</span>)}
          <span style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "white", padding: "8px 22px", borderRadius: "999px", fontSize: "13px", cursor: "pointer" }}>Contact</span>
        </div>
      </nav>

      {/* Full-width hero image layer */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "52%", pointerEvents: "none", zIndex: 1 }}>
        <img
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", opacity: 0.38 }}
        />
        {/* Gradient fade to navy on left */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${NAVY} 0%, ${NAVY}aa 30%, transparent 60%)` }} />
        {/* Bottom fade */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${NAVY} 0%, transparent 40%)` }} />
      </div>

      {/* Content */}
      <div style={{ padding: "52px 52px 0", position: "relative", zIndex: 10, minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: "640px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "36px" }}>
            <div style={{ width: "36px", height: "2px", background: ACCENT, borderRadius: "999px" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" as const, color: ACCENT }}>Recruitment & Detachering</span>
          </div>

          <h1 style={{ fontSize: "82px", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-3.5px", marginBottom: "32px" }}>
            De juiste<br />
            professionals.<br />
            <span style={{ color: ACCENT }}>De beste</span><br />
            <span style={{ color: ACCENT }}>matches.</span>
          </h1>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.6)", maxWidth: "460px", marginBottom: "44px" }}>
            Wij brengen rust en executiekracht in complexe trajecten binnen projectmanagement, facility, vastgoed en techniek. Zonder cv-shiften.
          </p>

          <div style={{ display: "flex", gap: "14px", marginBottom: "52px" }}>
            <button style={{ background: ACCENT, color: "white", border: "none", padding: "16px 32px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, cursor: "pointer", boxShadow: `0 8px 32px ${ACCENT}44` }}>
              Ik zoek versterking →
            </button>
            <button style={{ background: "rgba(255,255,255,0.07)", color: "white", border: "1.5px solid rgba(255,255,255,0.18)", padding: "16px 32px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>
              Ik ben professional
            </button>
          </div>

          {/* Bottom strip */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", display: "flex", gap: "36px" }}>
            {[["Projectmanagement", true], ["Facility Management", false], ["Vastgoed", false], ["Techniek", false]].map(([d, hi]) => (
              <span key={d as string} style={{
                fontSize: "12px",
                color: hi ? ACCENT : "rgba(255,255,255,0.42)",
                fontWeight: hi ? 700 : 400,
                letterSpacing: "0.3px"
              }}>{d as string}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
