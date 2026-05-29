const NAVY = "#172A4E";
const ACCENT = "#22A4E8";
const CREAM = "#F9F7F3";
const CREAM2 = "#EEE9E1";

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span style={{ fontWeight: 800, fontSize: "17px", letterSpacing: "-0.3px", color: dark ? NAVY : "white" }}>
      <span style={{ color: ACCENT }}>WE</span>{dark ? <span style={{ color: NAVY }}>DEPLOY</span> : "DEPLOY"}
    </span>
  );
}

function Tag({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <span style={{
      fontSize: "11px", padding: "5px 14px", borderRadius: "999px",
      background: active ? `${ACCENT}18` : "transparent",
      color: active ? ACCENT : `${NAVY}60`,
      border: `1px solid ${active ? ACCENT + "40" : NAVY + "14"}`,
      fontWeight: active ? 700 : 400, whiteSpace: "nowrap" as const
    }}>{label}</span>
  );
}

export function FullPage() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif", background: CREAM, color: NAVY, lineHeight: 1.6 }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" />

      {/* ─── NAVIGATION ────────────────────────────────────────────── */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 52px", background: NAVY, position: "sticky", top: 0, zIndex: 100 }}>
        <Logo />
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: "rgba(255,255,255,0.55)", alignItems: "center" }}>
          {["Diensten", "Kandidaten", "Werkwijze", "Vacatures", "Contact"].map(n => (
            <span key={n} style={{ cursor: "pointer", transition: "color 0.2s" }}>{n}</span>
          ))}
        </div>
        <button style={{ background: ACCENT, color: "white", border: "none", padding: "10px 24px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>
          Plan gesprek
        </button>
      </nav>

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section style={{ background: NAVY, overflow: "hidden", position: "relative", minHeight: "92vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-150px", right: "180px", width: "500px", height: "500px", borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT}22 0%, transparent 70%)`, pointerEvents: "none" }} />

        <div style={{ padding: "0 52px", display: "grid", gridTemplateColumns: "1fr 420px", gap: "48px", alignItems: "center", width: "100%", position: "relative", zIndex: 2 }}>
          <div>
            <div style={{ display: "flex", gap: "8px", marginBottom: "28px", flexWrap: "wrap" as const }}>
              {["Projectmanagement", "Facility", "Vastgoed", "Techniek"].map((d, i) => (
                <span key={d} style={{
                  background: i === 0 ? ACCENT : "rgba(255,255,255,0.08)",
                  color: "white", padding: "5px 14px", borderRadius: "999px", fontSize: "11px",
                  fontWeight: i === 0 ? 700 : 400, border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.15)"
                }}>{d}</span>
              ))}
            </div>
            <h1 style={{ fontSize: "78px", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-3px", color: "white", marginBottom: "28px" }}>
              De juiste<br />
              professionals<span style={{ color: ACCENT }}>.</span><br />
              De beste<br />
              matches<span style={{ color: ACCENT }}>.</span>
            </h1>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.58)", maxWidth: "420px", marginBottom: "36px" }}>
              Wij brengen rust en executiekracht in complexe trajecten binnen projectmanagement, facility, vastgoed en techniek. Geen snelle cv's, maar duurzame matches.
            </p>
            <div style={{ display: "flex", gap: "12px", marginBottom: "44px" }}>
              <button style={{ background: ACCENT, color: "white", border: "none", padding: "15px 28px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>Ik zoek versterking →</button>
              <button style={{ background: "rgba(255,255,255,0.07)", color: "white", border: "1.5px solid rgba(255,255,255,0.2)", padding: "15px 28px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>Ik ben professional</button>
            </div>
            <div style={{ display: "flex", gap: "36px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[["100+", "Geplaatste professionals"], ["98%", "Match-tevredenheid"], ["<48u", "Eerste reactie"]].map(([n, l]) => (
                <div key={n}><div style={{ fontSize: "22px", fontWeight: 700, color: "white" }}>{n}</div><div style={{ fontSize: "11px", color: "rgba(255,255,255,0.42)", marginTop: "2px" }}>{l}</div></div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", height: "580px" }}>
            <div style={{ position: "absolute", top: "-14px", right: "-14px", width: "100%", height: "100%", border: `1.5px solid ${ACCENT}44`, borderRadius: "14px" }} />
            <div style={{ height: "100%", borderRadius: "14px", overflow: "hidden", position: "relative" }}>
              <img src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=700" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%" }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${NAVY}cc 0%, transparent 55%)` }} />
              <div style={{ position: "absolute", bottom: "18px", left: "18px", right: "18px", background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "13px 16px" }}>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "3px" }}>Persoonlijke screening</div>
                <div style={{ fontSize: "13px", color: "white", fontWeight: 600 }}>Transparante communicatie · Duurzame match</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAVE DIVIDER ──────────────────────────────────────────── */}
      <div style={{ background: NAVY, lineHeight: 0 }}>
        <svg viewBox="0 0 1280 48" preserveAspectRatio="none" style={{ width: "100%", height: "48px", display: "block" }}>
          <path d="M0,48 C320,0 960,0 1280,48 L1280,48 L0,48 Z" fill={CREAM} />
        </svg>
      </div>

      {/* ─── WAAROM WEDEPLOY ───────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: "96px 52px" }}>
        <div style={{ maxWidth: "1176px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "2px", background: ACCENT, borderRadius: "999px" }} />
                <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: ACCENT, fontWeight: 700 }}>Onze aanpak</span>
              </div>
              <h2 style={{ fontSize: "52px", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-2px", color: NAVY, marginBottom: "24px" }}>
                Een cv vertelt niet<br />hoe iemand<br /><em style={{ fontStyle: "normal", color: ACCENT }}>samenwerkt.</em>
              </h2>
              <p style={{ fontSize: "15.5px", lineHeight: 1.85, color: `${NAVY}80`, marginBottom: "32px", maxWidth: "420px" }}>
                Daarom gaan wij verder dan het profiel. Wij leren de kandidaat kennen — hoe ze werken, wat ze drijft en waar ze het beste tot hun recht komen.
              </p>
              <button style={{ background: NAVY, color: "white", border: "none", padding: "14px 28px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>
                Laten we matchen →
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "20px", paddingTop: "8px" }}>
              {[
                { num: "01", title: "Persoonlijk contact", body: "Elke kandidaat en opdrachtgever krijgt directe aandacht — geen doorverwijzingen, geen tussenpersonen." },
                { num: "02", title: "Diepte boven volume", body: "Wij sturen één kandidaat die past, niet een stapel cv's die voldoen aan de keywords." },
                { num: "03", title: "Culturele fit first", body: "Technische skills zijn te leren. Of iemand past in een team en de cultuur begrijpt — dát screenen wij." },
              ].map(({ num, title, body }) => (
                <div key={num} style={{ display: "flex", gap: "20px", padding: "24px", background: "white", borderRadius: "12px", border: `1px solid ${NAVY}08`, boxShadow: `0 2px 20px ${NAVY}06` }}>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: ACCENT, minWidth: "28px", marginTop: "2px" }}>{num}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "15px", color: NAVY, marginBottom: "6px" }}>{title}</div>
                    <div style={{ fontSize: "13.5px", color: `${NAVY}70`, lineHeight: 1.7 }}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE BENTO ──────────────────────────────────────── */}
      <section style={{ background: "white", padding: "96px 52px" }}>
        <div style={{ maxWidth: "1176px", margin: "0 auto" }}>
          <div style={{ marginBottom: "52px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" as const, color: ACCENT }}>Expertisegebieden</span>
            <h2 style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-2px", color: NAVY, marginTop: "12px", marginBottom: "16px" }}>
              Expertise die verder gaat<br />dan een online profiel.
            </h2>
            <p style={{ fontSize: "15px", color: `${NAVY}70`, maxWidth: "560px", lineHeight: 1.8 }}>
              Succes in Projectmanagement, Facility, Vastgoed en Techniek draait om context — stakeholders, teamdynamiek en draagvlak.
            </p>
          </div>
          {/* Bento grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {[
              { title: "Projectmanagement", sub: "Projectmanagers en programmamanagers voor complexe, multidisciplinaire trajecten.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80", span: 2, h: "360px" },
              { title: "Facility Management", sub: "Van facilitaire managers tot servicespecialisten op strategisch niveau.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80", span: 1, h: "360px" },
              { title: "Vastgoed & Real Estate", sub: "Property managers en asset managers voor commercieel en institutioneel vastgoed.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80", span: 1, h: "300px" },
              { title: "Techniek & Installaties", sub: "Technisch specialisten, werktuigbouwkundigen en E&W-engineers.", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80", span: 2, h: "300px" },
            ].map(({ title, sub, img, span, h }) => (
              <div key={title} style={{ gridColumn: `span ${span}`, height: h, borderRadius: "14px", overflow: "hidden", position: "relative", cursor: "default" }}>
                <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${NAVY}ee 0%, ${NAVY}44 45%, transparent 100%)` }} />
                <div style={{ position: "absolute", top: "18px", left: "18px", width: "8px", height: "8px", borderRadius: "50%", background: ACCENT, opacity: 0.8 }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px" }}>
                  <div style={{ background: `${NAVY}bb`, backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "14px 16px" }}>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "5px" }}>{title}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIENSTEN ─────────────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: "96px 52px" }}>
        <div style={{ maxWidth: "1176px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: "52px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" as const, color: ACCENT }}>Onze diensten</span>
            <h2 style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-2px", color: NAVY, marginTop: "12px" }}>Voor wie werken wij?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {[
              {
                tag: "Opdrachtgevers", title: "Versterking voor jouw team", body: "Op zoek naar een projectmanager, facility manager of technisch specialist? Wij leveren interim professionals die direct inzetbaar zijn en passen bij jouw organisatie.",
                cta: "Ik zoek versterking", bg: NAVY, color: "white", ctaBg: ACCENT, ctaColor: "white"
              },
              {
                tag: "Kandidaten", title: "Jouw volgende uitdaging", body: "Ben je een ervaren professional op zoek naar een uitdagende opdracht in projectmanagement, facility, vastgoed of techniek? Wij kennen de markt en vinden jouw match.",
                cta: "Bekijk mijn opties", bg: "white", color: NAVY, ctaBg: NAVY, ctaColor: "white"
              }
            ].map(({ tag, title, body, cta, bg, color, ctaBg, ctaColor }) => (
              <div key={tag} style={{ background: bg, borderRadius: "16px", padding: "44px 40px", display: "flex", flexDirection: "column" as const, gap: "20px", border: `1px solid ${NAVY}08`, boxShadow: `0 4px 24px ${NAVY}08` }}>
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase" as const, color: ACCENT }}>{tag}</span>
                <h3 style={{ fontSize: "28px", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.5px", color, margin: 0 }}>{title}</h3>
                <p style={{ fontSize: "14.5px", lineHeight: 1.8, color: bg === NAVY ? "rgba(255,255,255,0.6)" : `${NAVY}70`, margin: 0, flexGrow: 1 }}>{body}</p>
                <button style={{ background: ctaBg, color: ctaColor, border: "none", padding: "14px 26px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, cursor: "pointer", alignSelf: "flex-start" }}>
                  {cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOE WIJ WERKEN ───────────────────────────────────────── */}
      <section style={{ background: NAVY, padding: "96px 52px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1176px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" as const, color: ACCENT }}>Onze werkwijze</span>
            <h2 style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-2px", color: "white", marginTop: "12px" }}>Zo werken wij.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", position: "relative" }}>
            {/* Connecting line */}
            <div style={{ position: "absolute", top: "36px", left: "48px", right: "48px", height: "1px", background: `rgba(255,255,255,0.1)`, zIndex: 0 }} />
            {[
              { n: "01", title: "Intake gesprek", body: "Wij leren jouw organisatie, cultuur en de opdracht grondig kennen." },
              { n: "02", title: "Gerichte search", body: "Actieve aanpak: wij zoeken, benaderen en screenen geschikte kandidaten persoonlijk." },
              { n: "03", title: "Selectie & presentatie", body: "Één of twee kandidaten die écht passen — inclusief onze motivatie waarom." },
              { n: "04", title: "Begeleiding & nazorg", body: "Na plaatsing blijven wij betrokken voor een vliegende start en duurzame samenwerking." },
            ].map(({ n, title, body }) => (
              <div key={n} style={{ padding: "0 24px", position: "relative", zIndex: 1 }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, color: "white", marginBottom: "24px", boxShadow: `0 0 0 6px ${NAVY}, 0 0 0 7px rgba(34,164,232,0.3)` }}>
                  {n}
                </div>
                <div style={{ fontSize: "17px", fontWeight: 700, color: "white", marginBottom: "10px", letterSpacing: "-0.3px" }}>{title}</div>
                <div style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.52)", lineHeight: 1.75 }}>{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: "96px 52px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" as const }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `${ACCENT}14`, border: `1px solid ${ACCENT}30`, borderRadius: "999px", padding: "6px 16px", marginBottom: "28px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: ACCENT, display: "inline-block" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: ACCENT }}>Neem contact op</span>
          </div>
          <h2 style={{ fontSize: "56px", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-2.5px", color: NAVY, marginBottom: "20px" }}>
            Klaar voor een<br /><span style={{ color: ACCENT }}>duurzame match?</span>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: `${NAVY}70`, marginBottom: "44px", maxWidth: "500px", margin: "0 auto 44px" }}>
            Plan een vrijblijvend gesprek. Wij luisteren, denken mee en komen met een gerichte aanpak.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", marginBottom: "40px" }}>
            <button style={{ background: NAVY, color: "white", border: "none", padding: "17px 36px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, cursor: "pointer", boxShadow: `0 8px 32px ${NAVY}30` }}>
              Plan een gesprek →
            </button>
            <button style={{ background: "transparent", color: NAVY, border: `1.5px solid ${NAVY}30`, padding: "17px 36px", borderRadius: "999px", fontSize: "15px", fontWeight: 500, cursor: "pointer" }}>
              085 212 8668
            </button>
          </div>
          <p style={{ fontSize: "12.5px", color: `${NAVY}45`, letterSpacing: "0.5px" }}>
            Persoonlijke screening · Transparante communicatie · Duurzame matches
          </p>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────── */}
      <footer style={{ background: NAVY, padding: "48px 52px", borderTop: `1px solid rgba(255,255,255,0.06)` }}>
        <div style={{ maxWidth: "1176px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Logo />
          <div style={{ display: "flex", gap: "28px", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
            {["Diensten", "Kandidaten", "Werkwijze", "Vacatures", "Contact"].map(n => <span key={n} style={{ cursor: "pointer" }}>{n}</span>)}
          </div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>© 2025 Wedeploy</div>
        </div>
      </footer>
    </div>
  );
}
