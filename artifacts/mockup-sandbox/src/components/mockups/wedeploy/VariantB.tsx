export function VariantB() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FFFFFF", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 56px", background: "#fff", borderBottom: "1px solid #F0F0F0" }}>
        <div style={{ fontWeight: 800, fontSize: "18px", color: "#0D2340", letterSpacing: "-0.3px" }}>
          WEDEPLOY
        </div>
        <div style={{ display: "flex", gap: "36px", fontSize: "14px", fontWeight: 500, color: "#6B7280" }}>
          <span style={{ cursor: "pointer" }}>Home</span>
          <span style={{ cursor: "pointer" }}>Diensten</span>
          <span style={{ cursor: "pointer" }}>Kandidaten</span>
          <span style={{ cursor: "pointer" }}>Opdrachtgevers</span>
          <span style={{ cursor: "pointer" }}>Werkwijze</span>
          <span style={{ cursor: "pointer" }}>Contact</span>
        </div>
        <button style={{ background: "transparent", color: "#0D2340", border: "1.5px solid #0D2340", borderRadius: "100px", padding: "11px 24px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
          Neem contact op
        </button>
      </nav>

      {/* Hero — full-width split with navy left panel */}
      <div style={{ display: "grid", gridTemplateColumns: "52% 48%", minHeight: "calc(100vh - 73px)" }}>
        {/* Left: dark navy panel */}
        <div style={{ background: "#0D2340", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 72px 80px 72px", position: "relative", overflow: "hidden" }}>
          {/* Subtle texture */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle at 20% 80%, #C8A96E 0%, transparent 60%), radial-gradient(circle at 80% 20%, #4A90E2 0%, transparent 60%)" }} />

          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", color: "#C8A96E", textTransform: "uppercase", marginBottom: "32px", display: "block" }}>
            Werving &amp; selectie · Detachering
          </span>

          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "58px", fontWeight: 700, lineHeight: 1.1, color: "#FFFFFF", letterSpacing: "-1px", margin: "0 0 32px 0" }}>
            Geen cv-doorschuiver.<br />
            <em style={{ color: "#C8A96E", fontStyle: "italic" }}>Wél de juiste match.</em>
          </h1>

          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#A8B8CC", margin: "0 0 14px 0", maxWidth: "420px" }}>
            Wedeploy verbindt professionals en organisaties via zorgvuldige screening, persoonlijke aandacht en langetermijndenken.
          </p>

          <p style={{ fontSize: "13px", color: "#6B8099", margin: "0 0 48px 0" }}>
            Gespecialiseerd in Facility Management, Projectmanagement, Vastgoed en Technische rollen.
          </p>

          <div style={{ display: "flex", gap: "14px", marginBottom: "40px" }}>
            <button style={{ background: "#C8A96E", color: "#0D2340", border: "none", borderRadius: "100px", padding: "16px 32px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
              Op zoek naar talent →
            </button>
            <button style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: "100px", padding: "16px 32px", fontSize: "15px", fontWeight: 500, cursor: "pointer" }}>
              Ik ben kandidaat
            </button>
          </div>

          <div style={{ display: "flex", gap: "24px" }}>
            {["Persoonlijke aanpak", "Zorgvuldige screening", "Transparant"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C8A96E" }} />
                <span style={{ fontSize: "12px", color: "#7A8EA0", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: full-bleed image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80"
            alt="Professional in gesprek"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
          {/* Subtle left edge fade */}
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "60px", background: "linear-gradient(to right, #0D2340, transparent)" }} />
          {/* Bottom overlay with stat */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 40px 40px 40px", background: "linear-gradient(to top, rgba(13,35,64,0.85), transparent)" }}>
            <div style={{ display: "flex", gap: "40px" }}>
              {[
                { n: "100%", label: "Persoonlijke begeleiding" },
                { n: "Boutique", label: "Geen massaal bureau" },
                { n: "Long-term", label: "Langetermijnfocus" },
              ].map((stat) => (
                <div key={stat.n}>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>{stat.n}</div>
                  <div style={{ fontSize: "12px", color: "#A8B8CC", marginTop: "2px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
