export function VariantC() {
  const navy = "#0D2340";
  const blue = "hsl(205, 85%, 53%)";
  const cream = "#FAF8F5";
  const sand = "#EDE5D8";
  const sandLight = "#F5F0E8";
  const muted = "#6B7688";
  const mutedLight = "#9AA3AF";

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: cream, minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 56px", height: "68px",
        borderBottom: `1px solid ${sand}`,
        background: cream,
      }}>
        {/* Logo — exact match to current site */}
        <div style={{ fontWeight: 800, fontSize: "19px", letterSpacing: "-0.5px", lineHeight: 1 }}>
          <span style={{ color: blue }}>WE</span>
          <span style={{ color: navy }}>DEPLOY</span>
        </div>

        <div style={{ display: "flex", gap: "32px", fontSize: "13.5px", fontWeight: 500, color: muted }}>
          {["Home", "Diensten", "Kandidaten", "Opdrachtgevers", "Werkwijze", "Contact"].map((item) => (
            <span key={item} style={{ cursor: "pointer", transition: "color .15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = navy)}
              onMouseLeave={e => (e.currentTarget.style.color = muted)}>
              {item}
            </span>
          ))}
        </div>

        <button style={{
          background: navy, color: "#fff", border: "none",
          borderRadius: "100px", padding: "11px 26px",
          fontSize: "13px", fontWeight: 600, cursor: "pointer",
          letterSpacing: "0.1px",
        }}>
          Neem contact op
        </button>
      </nav>

      {/* Hero */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        minHeight: "calc(100vh - 68px)",
        alignItems: "center",
        padding: "72px 56px 72px 72px",
        gap: "64px",
        maxWidth: "1380px", margin: "0 auto",
      }}>

        {/* Left — text */}
        <div style={{ display: "flex", flexDirection: "column" }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
            <div style={{ width: "28px", height: "2px", background: blue, borderRadius: "2px" }} />
            <span style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "2px",
              color: blue, textTransform: "uppercase",
            }}>
              Werving &amp; selectie · Detachering
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: "58px", fontWeight: 800, lineHeight: 1.07,
            color: navy, letterSpacing: "-2px",
            margin: "0 0 26px 0",
          }}>
            Geen cv-doorschuiver.<br />
            Wél de juiste match.
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: "17px", lineHeight: 1.7, color: muted,
            margin: "0 0 10px 0", maxWidth: "440px",
          }}>
            Wedeploy verbindt professionals en organisaties via zorgvuldige screening, persoonlijke aandacht en langetermijndenken.
          </p>

          {/* Sector line */}
          <p style={{ fontSize: "12.5px", color: mutedLight, margin: "0 0 40px 0", fontStyle: "italic" }}>
            Gespecialiseerd in Facility Management, Projectmanagement, Vastgoed en Technische rollen.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "36px" }}>
            <button style={{
              background: navy, color: "#fff", border: "none",
              borderRadius: "100px", padding: "15px 32px",
              fontSize: "14.5px", fontWeight: 700, cursor: "pointer",
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              Op zoek naar talent
              <span style={{ fontSize: "16px" }}>→</span>
            </button>
            <button style={{
              background: "transparent", color: navy,
              border: `1.5px solid ${sand}`,
              borderRadius: "100px", padding: "15px 32px",
              fontSize: "14.5px", fontWeight: 600, cursor: "pointer",
            }}>
              Ik ben kandidaat
            </button>
          </div>

          {/* Trust line */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {["Persoonlijke aanpak", "Zorgvuldige screening", "Transparante communicatie"].map((item, i) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {i > 0 && <span style={{ color: sand, fontSize: "14px" }}>·</span>}
                <span style={{ fontSize: "12px", color: mutedLight, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div style={{ position: "relative", height: "560px" }}>

          {/* Sand background accent */}
          <div style={{
            position: "absolute", top: "-16px", right: "-16px",
            width: "85%", height: "100%",
            background: sandLight,
            borderRadius: "24px",
            zIndex: 0,
          }} />

          {/* Photo */}
          <div style={{
            position: "relative", zIndex: 1,
            width: "95%", height: "100%",
            borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 24px 64px rgba(13,35,64,0.10)",
          }}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
              alt="Professioneel gesprek op de werkvloer"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* Floating info card */}
          <div style={{
            position: "absolute", bottom: "36px", left: "-32px", zIndex: 2,
            background: "#fff", borderRadius: "14px",
            padding: "14px 20px",
            boxShadow: "0 12px 40px rgba(13,35,64,0.11)",
            display: "flex", alignItems: "center", gap: "12px",
            minWidth: "220px",
          }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "10px",
              background: sandLight, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: blue }} />
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: navy }}>Persoonlijke aanpak</div>
              <div style={{ fontSize: "11.5px", color: mutedLight, marginTop: "2px" }}>Altijd op maat, nooit op volume</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
