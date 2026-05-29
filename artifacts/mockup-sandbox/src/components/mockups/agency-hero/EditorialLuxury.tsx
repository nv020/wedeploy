export function EditorialLuxury() {
  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", backgroundColor: "#F8F5F0", minHeight: "100vh", color: "#1a1a1a", overflow: "hidden", position: "relative" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" />

      {/* Thin vertical rule */}
      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "rgba(26,26,26,0.08)", pointerEvents: "none" }} />

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 52px", position: "relative", zIndex: 10, borderBottom: "1px solid rgba(26,26,26,0.08)" }}>
        <div>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", letterSpacing: "5px", textTransform: "uppercase" as const, color: "#1a1a1a" }}>WEDEPLOY</span>
        </div>
        <div style={{ display: "flex", gap: "36px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(26,26,26,0.55)", letterSpacing: "1px", textTransform: "uppercase" as const, alignItems: "center" }}>
          {["Diensten", "Kandidaten", "Werkwijze"].map(n => <span key={n} style={{ cursor: "pointer" }}>{n}</span>)}
        </div>
        <button style={{ fontFamily: "'DM Sans', sans-serif", background: "#1a1a1a", color: "#F8F5F0", border: "none", padding: "10px 24px", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, cursor: "pointer", fontWeight: 500 }}>
          Plan een gesprek
        </button>
      </nav>

      {/* Two-column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 77px)" }}>

        {/* Left: Typography */}
        <div style={{ padding: "60px 52px 52px", display: "flex", flexDirection: "column" as const, justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
              <div style={{ width: "28px", height: "1px", background: "#C9A96E" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase" as const, color: "#C9A96E", fontWeight: 500 }}>Boutique Recruitment</span>
            </div>

            <h1 style={{ fontSize: "72px", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-1px", marginBottom: "12px", color: "#1a1a1a" }}>
              De juiste
            </h1>
            <h1 style={{ fontSize: "72px", fontWeight: 300, lineHeight: 1.05, fontStyle: "italic", letterSpacing: "-1px", marginBottom: "12px", color: "#1a1a1a" }}>
              professionals.
            </h1>
            <h1 style={{ fontSize: "72px", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-1px", marginBottom: "40px", color: "#1a1a1a" }}>
              De beste matches.
            </h1>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", lineHeight: 1.9, color: "rgba(26,26,26,0.62)", maxWidth: "380px", marginBottom: "44px", fontWeight: 300 }}>
              Wij brengen rust en executiekracht in complexe trajecten binnen projectmanagement, facility, vastgoed en techniek. Zonder cv-shiften, gericht op resultaat.
            </p>

            <div style={{ display: "flex", gap: "16px" }}>
              <button style={{ fontFamily: "'DM Sans', sans-serif", background: "#1a1a1a", color: "#F8F5F0", border: "none", padding: "15px 30px", fontSize: "12px", fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase" as const, cursor: "pointer" }}>
                Ik zoek versterking →
              </button>
              <button style={{ fontFamily: "'DM Sans', sans-serif", background: "transparent", color: "#1a1a1a", border: "1px solid rgba(26,26,26,0.3)", padding: "15px 30px", fontSize: "12px", fontWeight: 400, cursor: "pointer", letterSpacing: "0.5px" }}>
                Ik ben professional
              </button>
            </div>
          </div>

          {/* Bottom disciplines */}
          <div>
            <div style={{ height: "1px", background: "rgba(26,26,26,0.1)", marginBottom: "24px" }} />
            <div style={{ display: "flex", gap: "24px" }}>
              {["Projectmanagement", "Facility", "Vastgoed", "Techniek"].map((d, i) => (
                <div key={d}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", color: i === 0 ? "#C9A96E" : "rgba(26,26,26,0.45)", letterSpacing: "1.5px", textTransform: "uppercase" as const, fontWeight: i === 0 ? 600 : 400 }}>
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Full-bleed image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%" }}
          />
          {/* Warm overlay */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(248,245,240,0.05) 0%, rgba(201,169,110,0.12) 100%)" }} />
          {/* Caption */}
          <div style={{ position: "absolute", bottom: "32px", left: "32px" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.7)", letterSpacing: "2px", textTransform: "uppercase" as const }}>Persoonlijke begeleiding</p>
          </div>
          {/* Issue tag */}
          <div style={{ position: "absolute", top: "28px", right: "28px", background: "rgba(248,245,240,0.92)", padding: "10px 18px", backdropFilter: "blur(8px)" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, color: "#1a1a1a", fontWeight: 500 }}>NL / 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}
