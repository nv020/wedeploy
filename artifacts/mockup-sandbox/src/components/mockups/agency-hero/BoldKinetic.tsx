export function BoldKinetic() {
  const disciplines = ["Projectmanagement", "Facility", "Vastgoed", "Techniek"];

  return (
    <div style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif", backgroundColor: "#1A2EE6", minHeight: "100vh", color: "white", overflow: "hidden", position: "relative" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" />

      {/* Dotted texture */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

      {/* Large decorative circle */}
      <div style={{ position: "absolute", top: "-200px", right: "-200px", width: "700px", height: "700px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.10)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)", pointerEvents: "none" }} />

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 52px", position: "relative", zIndex: 10 }}>
        <span style={{ fontWeight: 700, fontSize: "18px", letterSpacing: "-0.5px" }}>We<span style={{ color: "#FFE03D" }}>deploy</span></span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: "rgba(255,255,255,0.7)", alignItems: "center" }}>
          {["Diensten", "Kandidaten", "Werkwijze"].map(n => <span key={n} style={{ cursor: "pointer" }}>{n}</span>)}
          <span style={{ background: "#FFE03D", color: "#1A2EE6", padding: "9px 24px", borderRadius: "999px", fontWeight: 700, fontSize: "13px", cursor: "pointer" }}>Plan gesprek</span>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ padding: "36px 52px 0", position: "relative", zIndex: 10 }}>

        {/* Floating discipline badges */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "32px", flexWrap: "wrap" as const }}>
          {disciplines.map((d, i) => (
            <span key={d} style={{
              background: i === 0 ? "#FFE03D" : "rgba(255,255,255,0.12)",
              color: i === 0 ? "#1A2EE6" : "white",
              padding: "7px 18px", borderRadius: "999px", fontSize: "12px", fontWeight: 700,
              border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.2)"
            }}>{d}</span>
          ))}
        </div>

        {/* Giant headline */}
        <h1 style={{ fontSize: "88px", fontWeight: 700, lineHeight: 0.92, letterSpacing: "-4px", marginBottom: "40px", maxWidth: "860px" }}>
          De juiste<br />
          professionals<span style={{ color: "#FFE03D" }}>.</span><br />
          De beste<br />
          matches<span style={{ color: "#FFE03D" }}>.</span>
        </h1>

        {/* Sub + CTA row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "end" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "rgba(255,255,255,0.72)", marginBottom: "0" }}>
            Wij brengen rust en executiekracht in complexe trajecten. Zonder cv-shiften — gericht op resultaat en een duurzame match.
          </p>

          <div>
            <div style={{ display: "flex", gap: "14px", marginBottom: "28px" }}>
              <button style={{ background: "#FFE03D", color: "#1A2EE6", border: "none", padding: "18px 32px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" as const }}>
                Ik zoek versterking →
              </button>
              <button style={{ background: "transparent", color: "white", border: "2px solid rgba(255,255,255,0.4)", padding: "18px 32px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" as const }}>
                Ik ben professional
              </button>
            </div>

            {/* Metric strip */}
            <div style={{ display: "flex", gap: "32px" }}>
              {[["100+", "Geplaatste professionals"], ["4 sec.", "Gem. responstijd"], ["98%", "Match-tevredenheid"]].map(([num, label]) => (
                <div key={num}>
                  <div style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.5px" }}>{num}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image strip bottom */}
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "340px", height: "340px", overflow: "hidden", pointerEvents: "none" }}>
        <img src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", opacity: 0.25, mixBlendMode: "luminosity" as const }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #1A2EE6 40%, transparent 100%)" }} />
      </div>
    </div>
  );
}
