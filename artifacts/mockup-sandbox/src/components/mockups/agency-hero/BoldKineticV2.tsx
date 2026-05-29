export function BoldKineticV2() {
  const NAVY = "#172A4E";
  const ACCENT = "#22A4E8";
  const CREAM = "#F9F7F3";

  return (
    <div style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif", backgroundColor: NAVY, minHeight: "100vh", color: "white", overflow: "hidden", position: "relative" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" />

      {/* Subtle dot grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none" }} />

      {/* Accent glow top-right */}
      <div style={{ position: "absolute", top: "-150px", right: "200px", width: "500px", height: "500px", borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT}22 0%, transparent 70%)`, pointerEvents: "none" }} />

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "26px 52px", position: "relative", zIndex: 10 }}>
        <span style={{ fontWeight: 800, fontSize: "17px", letterSpacing: "-0.3px" }}>
          <span style={{ color: ACCENT }}>WE</span>DEPLOY
        </span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: "rgba(255,255,255,0.6)", alignItems: "center" }}>
          {["Diensten", "Kandidaten", "Werkwijze"].map(n => <span key={n}>{n}</span>)}
          <span style={{ background: ACCENT, color: "white", padding: "9px 22px", borderRadius: "999px", fontWeight: 700, fontSize: "13px" }}>Plan gesprek</span>
        </div>
      </nav>

      {/* Hero grid */}
      <div style={{ padding: "32px 52px 0", display: "grid", gridTemplateColumns: "1fr 440px", gap: "40px", alignItems: "center", position: "relative", zIndex: 10, minHeight: "calc(100vh - 82px)" }}>

        {/* Left: text */}
        <div>
          <div style={{ display: "flex", gap: "10px", marginBottom: "28px", flexWrap: "wrap" as const }}>
            {["Projectmanagement", "Facility", "Vastgoed", "Techniek"].map((d, i) => (
              <span key={d} style={{
                background: i === 0 ? ACCENT : "rgba(255,255,255,0.08)",
                color: i === 0 ? "white" : "rgba(255,255,255,0.7)",
                padding: "6px 16px", borderRadius: "999px", fontSize: "12px", fontWeight: i === 0 ? 700 : 500,
                border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.15)"
              }}>{d}</span>
            ))}
          </div>

          <h1 style={{ fontSize: "80px", fontWeight: 700, lineHeight: 0.94, letterSpacing: "-3.5px", marginBottom: "32px" }}>
            De juiste<br />
            professionals<span style={{ color: ACCENT }}>.</span><br />
            De beste<br />
            matches<span style={{ color: ACCENT }}>.</span>
          </h1>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.6)", maxWidth: "420px", marginBottom: "40px" }}>
            Wij brengen rust en executiekracht in complexe trajecten. Zonder cv-shiften — gericht op resultaat en een duurzame match.
          </p>

          <div style={{ display: "flex", gap: "14px", marginBottom: "44px" }}>
            <button style={{ background: ACCENT, color: "white", border: "none", padding: "16px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
              Ik zoek versterking →
            </button>
            <button style={{ background: "transparent", color: "white", border: `1.5px solid rgba(255,255,255,0.25)`, padding: "16px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>
              Ik ben professional
            </button>
          </div>

          <div style={{ display: "flex", gap: "36px" }}>
            {[["100+", "Geplaatste professionals"], ["98%", "Match-tevredenheid"], ["<48u", "Eerste reactie"]].map(([n, l]) => (
              <div key={n}>
                <div style={{ fontSize: "22px", fontWeight: 700, color: "white", letterSpacing: "-0.5px" }}>{n}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "3px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: hero image */}
        <div style={{ position: "relative", height: "620px" }}>
          {/* Accent border frame */}
          <div style={{ position: "absolute", top: "-16px", right: "-16px", width: "100%", height: "100%", border: `1.5px solid ${ACCENT}44`, borderRadius: "16px" }} />
          <div style={{ height: "100%", borderRadius: "16px", overflow: "hidden", position: "relative" }}>
            <img
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Wedeploy professional"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${NAVY}cc 0%, transparent 50%)` }} />
            <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
              <div style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "14px 18px" }}>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", letterSpacing: "1.5px", textTransform: "uppercase" as const, marginBottom: "4px" }}>Persoonlijke screening</div>
                <div style={{ fontSize: "13px", color: "white", fontWeight: 600 }}>Transparante communicatie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
