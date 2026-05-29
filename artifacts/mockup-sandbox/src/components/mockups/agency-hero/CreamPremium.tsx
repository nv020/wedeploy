export function CreamPremium() {
  const NAVY = "#172A4E";
  const ACCENT = "#22A4E8";
  const CREAM = "#F9F7F3";

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", backgroundColor: CREAM, minHeight: "100vh", color: NAVY, overflow: "hidden", position: "relative" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" />

      {/* Subtle blob background */}
      <div style={{ position: "absolute", top: "-100px", right: "0", width: "640px", height: "640px", borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT}0d 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", left: "0", width: "400px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle, ${NAVY}06 0%, transparent 70%)`, pointerEvents: "none" }} />

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 52px", position: "relative", zIndex: 10 }}>
        <span style={{ fontWeight: 800, fontSize: "17px", letterSpacing: "-0.3px", color: NAVY }}>
          <span style={{ color: ACCENT }}>WE</span>DEPLOY
        </span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: `${NAVY}70`, alignItems: "center" }}>
          {["Diensten", "Kandidaten", "Werkwijze", "Vacatures"].map(n => <span key={n} style={{ cursor: "pointer" }}>{n}</span>)}
          <span style={{ background: NAVY, color: "white", padding: "9px 22px", borderRadius: "999px", fontWeight: 700, fontSize: "13px" }}>Plan gesprek</span>
        </div>
      </nav>

      {/* Hero content — asymmetric grid */}
      <div style={{ padding: "44px 52px 0", display: "grid", gridTemplateColumns: "1fr 460px", gap: "48px", alignItems: "center", position: "relative", zIndex: 10, minHeight: "calc(100vh - 78px)" }}>

        {/* Left */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `${ACCENT}14`, border: `1px solid ${ACCENT}30`, borderRadius: "999px", padding: "6px 16px", marginBottom: "32px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: ACCENT, display: "inline-block" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: ACCENT }}>Recruitment & Detachering</span>
          </div>

          <h1 style={{ fontSize: "70px", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-3px", color: NAVY, marginBottom: "28px" }}>
            De juiste<br />
            professionals.<br />
            De beste<br />
            matches.
          </h1>

          {/* Accent underline on last word */}
          <div style={{ width: "240px", height: "3px", background: ACCENT, borderRadius: "999px", marginBottom: "32px", marginTop: "-20px" }} />

          <p style={{ fontSize: "16px", lineHeight: 1.85, color: `${NAVY}80`, maxWidth: "420px", marginBottom: "40px" }}>
            Wij brengen rust en executiekracht in complexe trajecten binnen projectmanagement, facility, vastgoed en techniek. Zonder cv-shiften — gericht op resultaat.
          </p>

          <div style={{ display: "flex", gap: "12px", marginBottom: "44px" }}>
            <button style={{ background: NAVY, color: "white", border: "none", padding: "16px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
              Ik zoek versterking →
            </button>
            <button style={{ background: "transparent", color: NAVY, border: `1.5px solid ${NAVY}30`, padding: "16px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>
              Ik ben professional
            </button>
          </div>

          {/* Discipline pills */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
            {["Projectmanagement", "Facility Management", "Vastgoed", "Techniek"].map((d, i) => (
              <span key={d} style={{
                fontSize: "12px", padding: "6px 16px", borderRadius: "999px",
                background: i === 0 ? ACCENT : "white",
                color: i === 0 ? "white" : `${NAVY}80`,
                fontWeight: i === 0 ? 700 : 400,
                border: i === 0 ? "none" : `1px solid ${NAVY}14`,
                boxShadow: i !== 0 ? "0 1px 4px rgba(23,42,78,0.06)" : "none"
              }}>{d}</span>
            ))}
          </div>
        </div>

        {/* Right — organic image shape */}
        <div style={{ position: "relative", height: "580px" }}>
          {/* Decorative accent block */}
          <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "85%", height: "88%", background: `${ACCENT}18`, borderRadius: "48% 52% 44% 56% / 40% 44% 56% 60%", pointerEvents: "none" }} />

          <div style={{ height: "100%", borderRadius: "44% 56% 52% 48% / 42% 48% 52% 58%", overflow: "hidden", position: "relative", boxShadow: `0 32px 80px ${NAVY}28` }}>
            <img
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Wedeploy professional"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(175deg, ${ACCENT}18 0%, transparent 40%, ${NAVY}44 100%)` }} />
          </div>

          {/* Floating info chip */}
          <div style={{ position: "absolute", top: "28px", left: "-28px", background: "white", borderRadius: "12px", padding: "14px 18px", boxShadow: `0 12px 40px ${NAVY}1a`, border: `1px solid ${NAVY}08` }}>
            <div style={{ fontSize: "10px", color: `${NAVY}60`, letterSpacing: "1.5px", textTransform: "uppercase" as const, marginBottom: "4px" }}>Reactietijd</div>
            <div style={{ fontSize: "16px", fontWeight: 800, color: NAVY }}>{"< 48 uur"}</div>
          </div>

          {/* Bottom chip */}
          <div style={{ position: "absolute", bottom: "60px", right: "-24px", background: "white", borderRadius: "12px", padding: "14px 18px", boxShadow: `0 12px 40px ${NAVY}1a`, border: `1px solid ${NAVY}08` }}>
            <div style={{ fontSize: "10px", color: `${NAVY}60`, letterSpacing: "1.5px", textTransform: "uppercase" as const, marginBottom: "4px" }}>Tevredenheid</div>
            <div style={{ fontSize: "16px", fontWeight: 800, color: ACCENT }}>98%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
