export function VariantA() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FAF8F5", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 48px", borderBottom: "1px solid #EDE8E1" }}>
        <div style={{ fontWeight: 800, fontSize: "18px", color: "#0D2340", letterSpacing: "-0.3px" }}>
          <span style={{ color: "#0D2340" }}>WE</span><span style={{ color: "#C8A96E" }}>DEPLOY</span>
        </div>
        <div style={{ display: "flex", gap: "36px", fontSize: "14px", fontWeight: 500, color: "#4A5568" }}>
          <span style={{ cursor: "pointer" }}>Home</span>
          <span style={{ cursor: "pointer" }}>Diensten</span>
          <span style={{ cursor: "pointer" }}>Kandidaten</span>
          <span style={{ cursor: "pointer" }}>Opdrachtgevers</span>
          <span style={{ cursor: "pointer" }}>Werkwijze</span>
          <span style={{ cursor: "pointer" }}>Contact</span>
        </div>
        <button style={{ background: "#0D2340", color: "#fff", border: "none", borderRadius: "100px", padding: "12px 24px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
          Neem contact op
        </button>
      </nav>

      {/* Hero */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 73px)", alignItems: "center", padding: "80px 48px 80px 72px", gap: "80px", maxWidth: "1400px", margin: "0 auto" }}>
        {/* Left: text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#C8A96E", textTransform: "uppercase", marginBottom: "24px" }}>
            Werving &amp; selectie en detachering met aandacht
          </span>

          <h1 style={{ fontSize: "60px", fontWeight: 800, lineHeight: 1.05, color: "#0D2340", letterSpacing: "-2px", margin: "0 0 28px 0" }}>
            Geen cv-doorschuiver.<br />
            <span style={{ color: "#0D2340" }}>Wél de juiste match.</span>
          </h1>

          <p style={{ fontSize: "18px", lineHeight: 1.65, color: "#5A6478", margin: "0 0 12px 0", maxWidth: "460px" }}>
            Wedeploy verbindt professionals en organisaties via zorgvuldige screening, persoonlijke aandacht en langetermijndenken.
          </p>

          <p style={{ fontSize: "13px", color: "#9AA3AF", margin: "0 0 40px 0" }}>
            Gespecialiseerd in Facility Management, Projectmanagement, Vastgoed en Technische rollen.
          </p>

          <div style={{ display: "flex", gap: "14px", marginBottom: "32px" }}>
            <button style={{ background: "#0D2340", color: "#fff", border: "none", borderRadius: "100px", padding: "16px 32px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
              Op zoek naar talent →
            </button>
            <button style={{ background: "transparent", color: "#0D2340", border: "2px solid #D5CFC6", borderRadius: "100px", padding: "16px 32px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
              Ik ben kandidaat
            </button>
          </div>

          <p style={{ fontSize: "12px", color: "#B0BACA", letterSpacing: "0.5px" }}>
            Persoonlijke aanpak&nbsp;&nbsp;·&nbsp;&nbsp;Zorgvuldige screening&nbsp;&nbsp;·&nbsp;&nbsp;Transparante communicatie
          </p>
        </div>

        {/* Right: image */}
        <div style={{ position: "relative", height: "580px" }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 60px rgba(13,35,64,0.12)" }}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
              alt="Professioneel gesprek op de werkvloer"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* Floating trust badge */}
          <div style={{ position: "absolute", bottom: "32px", left: "-28px", background: "#fff", borderRadius: "16px", padding: "16px 22px", boxShadow: "0 8px 32px rgba(13,35,64,0.12)", display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "40px", height: "40px", background: "#F0EBE2", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>🤝</div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#0D2340" }}>Persoonlijke aanpak</div>
              <div style={{ fontSize: "12px", color: "#9AA3AF" }}>Altijd op maat, nooit op volume</div>
            </div>
          </div>
          {/* Sand accent blob */}
          <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "120px", height: "120px", borderRadius: "50%", background: "#F0EBE2", zIndex: -1 }} />
        </div>
      </div>
    </div>
  );
}
