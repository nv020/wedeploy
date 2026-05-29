export function DarkStudio() {
  return (
    <div style={{ fontFamily: "'Syne', 'Inter', sans-serif", backgroundColor: "#080808", minHeight: "100vh", color: "white", overflow: "hidden", position: "relative" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap" />

      {/* Faint grid lines */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 52px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00FF94", display: "inline-block" }} />
          <span style={{ fontWeight: 800, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase" as const }}>WEDEPLOY</span>
        </div>
        <div style={{ display: "flex", gap: "32px", fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "1.5px", textTransform: "uppercase" as const, alignItems: "center" }}>
          {["Diensten", "Kandidaten", "Werkwijze"].map(n => <span key={n} style={{ cursor: "pointer" }}>{n}</span>)}
          <span style={{ color: "#00FF94", border: "1px solid rgba(0,255,148,0.4)", padding: "7px 20px", borderRadius: "2px", fontWeight: 600 }}>Contact</span>
        </div>
      </nav>

      {/* Main grid */}
      <div style={{ padding: "48px 52px 0", display: "grid", gridTemplateColumns: "1fr 360px", gap: "48px", alignItems: "start", position: "relative", zIndex: 10 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "36px" }}>
            <div style={{ width: "36px", height: "1px", background: "#00FF94" }} />
            <span style={{ fontSize: "10px", letterSpacing: "3.5px", textTransform: "uppercase" as const, color: "#00FF94", fontWeight: 700 }}>Boutique Recruitment</span>
          </div>

          {/* Ghost number */}
          <div style={{ fontSize: "260px", fontWeight: 900, color: "rgba(255,255,255,0.03)", lineHeight: 0.85, position: "absolute", top: "100px", left: "44px", pointerEvents: "none", userSelect: "none" as const, letterSpacing: "-10px" }}>01</div>

          <h1 style={{ fontSize: "76px", fontWeight: 800, lineHeight: 1.0, color: "white", marginBottom: "28px", letterSpacing: "-3px", position: "relative" }}>
            De juiste<br />
            professionals.<br />
            <em style={{ fontStyle: "normal", color: "#00FF94" }}>De beste matches.</em>
          </h1>

          <p style={{ fontSize: "15.5px", lineHeight: 1.85, color: "rgba(255,255,255,0.48)", maxWidth: "420px", marginBottom: "44px" }}>
            Wij brengen rust en executiekracht in complexe trajecten binnen projectmanagement, facility, vastgoed en techniek. Zonder cv-shiften — gericht op resultaat.
          </p>

          <div style={{ display: "flex", gap: "14px", marginBottom: "52px" }}>
            <button style={{ background: "#00FF94", color: "#080808", border: "none", padding: "16px 34px", borderRadius: "2px", fontSize: "12px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase" as const, cursor: "pointer" }}>
              Ik zoek versterking →
            </button>
            <button style={{ background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.18)", padding: "16px 34px", borderRadius: "2px", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>
              Ik ben professional
            </button>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            {["Projectmanagement", "Facility Management", "Vastgoed", "Techniek"].map(tag => (
              <span key={tag} style={{ fontSize: "11px", color: "rgba(255,255,255,0.38)", border: "1px solid rgba(255,255,255,0.1)", padding: "6px 14px", borderRadius: "999px", letterSpacing: "0.3px" }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Right — image in geometric frame */}
        <div style={{ position: "relative", paddingTop: "8px" }}>
          <div style={{ position: "absolute", top: "-14px", right: "-14px", width: "90px", height: "90px", border: "1px solid rgba(0,255,148,0.25)" }} />
          <div style={{ aspectRatio: "3/4", background: "#111", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", position: "relative" }}>
            <img src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", opacity: 0.6, filter: "grayscale(30%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 55%)" }} />
            <div style={{ position: "absolute", bottom: "18px", left: "18px", right: "18px" }}>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.55)", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "6px" }}>Persoonlijke screening</div>
              <div style={{ display: "flex", gap: "6px" }}>
                {["085 212 8668", "LinkedIn"].map(l => (
                  <span key={l} style={{ fontSize: "10px", color: "#00FF94", border: "1px solid rgba(0,255,148,0.3)", padding: "3px 10px", borderRadius: "999px" }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ position: "absolute", bottom: "24px", left: "52px", right: "52px", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "16px" }}>
        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "1.5px", textTransform: "uppercase" as const }}>© 2025 Wedeploy</span>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00FF94", display: "inline-block" }} />
          <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "1px", textTransform: "uppercase" as const }}>Beschikbaar voor nieuwe opdrachten</span>
        </div>
      </div>
    </div>
  );
}
