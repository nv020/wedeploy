export function SplitScreen() {
  const NAVY = "#172A4E";
  const ACCENT = "#22A4E8";
  const CREAM = "#F9F7F3";

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", minHeight: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" as const }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" />

      {/* Nav — spans full width, cream bg */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 52px", background: CREAM, zIndex: 20, borderBottom: "1px solid rgba(23,42,78,0.08)", flexShrink: 0 }}>
        <span style={{ fontWeight: 800, fontSize: "17px", letterSpacing: "-0.3px", color: NAVY }}>
          <span style={{ color: ACCENT }}>WE</span>DEPLOY
        </span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: `${NAVY}80`, alignItems: "center" }}>
          {["Diensten", "Kandidaten", "Werkwijze", "Vacatures"].map(n => <span key={n} style={{ cursor: "pointer" }}>{n}</span>)}
        </div>
        <button style={{ background: NAVY, color: "white", border: "none", padding: "10px 24px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>
          Plan gesprek
        </button>
      </nav>

      {/* Split hero */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", flex: 1 }}>

        {/* Left — cream */}
        <div style={{ background: CREAM, padding: "56px 52px 52px", display: "flex", flexDirection: "column" as const, justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "36px" }}>
              <div style={{ width: "32px", height: "2px", background: ACCENT, borderRadius: "999px" }} />
              <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: ACCENT, fontWeight: 700 }}>Boutique Recruitment</span>
            </div>

            <h1 style={{ fontSize: "64px", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-2.5px", color: NAVY, marginBottom: "28px" }}>
              De juiste<br />
              professionals<span style={{ color: ACCENT }}>.</span><br />
              De beste<br />
              matches<span style={{ color: ACCENT }}>.</span>
            </h1>

            <p style={{ fontSize: "15.5px", lineHeight: 1.85, color: `${NAVY}99`, maxWidth: "380px", marginBottom: "40px", fontWeight: 400 }}>
              Wij brengen rust en executiekracht in complexe trajecten binnen projectmanagement, facility, vastgoed en techniek.
            </p>

            <div style={{ display: "flex", gap: "12px" }}>
              <button style={{ background: NAVY, color: "white", border: "none", padding: "15px 28px", borderRadius: "999px", fontSize: "13.5px", fontWeight: 700, cursor: "pointer" }}>
                Ik zoek versterking →
              </button>
              <button style={{ background: "transparent", color: NAVY, border: `1.5px solid ${NAVY}40`, padding: "15px 28px", borderRadius: "999px", fontSize: "13.5px", fontWeight: 500, cursor: "pointer" }}>
                Ik ben professional
              </button>
            </div>
          </div>

          {/* Bottom discipline tags */}
          <div>
            <div style={{ height: "1px", background: `${NAVY}10`, marginBottom: "20px" }} />
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
              {["Projectmanagement", "Facility Management", "Vastgoed", "Techniek & Installaties"].map((d, i) => (
                <span key={d} style={{
                  fontSize: "11px", padding: "5px 14px", borderRadius: "999px",
                  background: i === 0 ? `${ACCENT}15` : "transparent",
                  color: i === 0 ? ACCENT : `${NAVY}70`,
                  border: i === 0 ? `1px solid ${ACCENT}40` : `1px solid ${NAVY}15`,
                  fontWeight: i === 0 ? 600 : 400
                }}>{d}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — navy with full-bleed image */}
        <div style={{ background: NAVY, position: "relative", overflow: "hidden" }}>
          <img
            src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Wedeploy professional"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", opacity: 0.55 }}
          />
          {/* Navy overlay gradient */}
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${NAVY}bb 0%, ${NAVY}33 60%, transparent 100%)` }} />
          {/* Accent overlay at bottom */}
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${NAVY}dd 0%, transparent 45%)` }} />

          {/* Floating card */}
          <div style={{ position: "absolute", bottom: "40px", left: "36px", right: "36px" }}>
            <div style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "12px", padding: "20px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "6px" }}>Wedeploy</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "white" }}>Persoonlijke screening</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>Transparante communicatie</div>
                </div>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>→</div>
              </div>
            </div>
          </div>

          {/* Top-right accent tag */}
          <div style={{ position: "absolute", top: "28px", right: "28px", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: "999px", padding: "6px 16px" }}>
            <span style={{ fontSize: "11px", color: ACCENT, fontWeight: 600, letterSpacing: "0.5px" }}>085 212 8668</span>
          </div>
        </div>
      </div>
    </div>
  );
}
