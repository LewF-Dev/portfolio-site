export default function FuturisticAbout() {
  return (
    <section style={{
      padding: "var(--t-section-pad) 5rem",
      borderTop: "1px solid var(--t-border)",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--t-gap)",
      alignItems: "center",
    }}>
      {/* Left — text */}
      <div>
        <p style={labelStyle}>About Us</p>
        <h2 style={h2Style}>
          We build things<br />
          <span style={{ color: "var(--t-accent)" }}>that last.</span>
        </h2>
        <p style={bodyStyle}>
          Founded in 2024, we're a small team of designers and engineers who care
          deeply about craft. We work with startups and established businesses to
          create digital products that are fast, beautiful, and built to grow.
        </p>
        <p style={{ ...bodyStyle, marginTop: "1rem" }}>
          Every project starts with understanding your goals — not just your brief.
          We ask the hard questions early so the build is smooth and the result is right.
        </p>
        <div style={{
          display: "flex", gap: "2rem", marginTop: "2.5rem",
          paddingTop: "2rem", borderTop: "1px solid var(--t-border)",
        }}>
          {[["Bristol, UK", "Based"], ["2024", "Founded"], ["7 days", "Avg. launch"]].map(([val, lbl]) => (
            <div key={lbl}>
              <div style={{ fontFamily: "var(--t-font-heading)", fontSize: "1.25rem", fontWeight: 700, color: "var(--t-accent)" }}>{val}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--t-muted)", marginTop: "0.2rem" }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — visual */}
      <div style={{
        background: "var(--t-surface)", borderRadius: "1rem",
        border: "1px solid var(--t-border)", padding: "var(--t-card-pad)",
        display: "flex", flexDirection: "column", gap: "1rem",
      }}>
        {/* Skill bars */}
        {[
          { label: "Web Development", pct: 95 },
          { label: "UI / UX Design", pct: 88 },
          { label: "Performance & SEO", pct: 92 },
          { label: "E-commerce", pct: 80 },
        ].map(({ label, pct }) => (
          <div key={label}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--t-text)", fontFamily: "var(--t-font-body)" }}>{label}</span>
              <span style={{ fontSize: "0.75rem", color: "var(--t-muted)" }}>{pct}%</span>
            </div>
            <div style={{ height: "4px", background: "var(--t-border)", borderRadius: "2px" }}>
              <div style={{
                height: "100%", width: `${pct}%`, borderRadius: "2px",
                background: "var(--t-accent)",
              }} />
            </div>
          </div>
        ))}

        <div style={{
          marginTop: "1rem", padding: "1.25rem",
          background: "var(--t-bg)", borderRadius: "0.75rem",
          border: "1px solid var(--t-border)",
        }}>
          <p style={{ fontSize: "0.85rem", color: "var(--t-muted)", lineHeight: 1.6, fontFamily: "var(--t-font-body)", fontStyle: "italic" }}>
            "We don't just build websites — we build the foundation your business grows on."
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--t-accent)", marginTop: "0.75rem", fontFamily: "var(--t-font-body)" }}>
            — Founder, Your Business Name
          </p>
        </div>
      </div>
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
  textTransform: "uppercase", color: "var(--t-accent)",
  marginBottom: "1rem", fontFamily: "var(--t-font-body)",
}

const h2Style: React.CSSProperties = {
  fontFamily: "var(--t-font-heading)", fontWeight: 700,
  fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 1.1,
  letterSpacing: "-0.02em", color: "var(--t-text)",
  marginBottom: "1.5rem",
}

const bodyStyle: React.CSSProperties = {
  fontSize: "0.95rem", color: "var(--t-muted)",
  lineHeight: "var(--t-line-height)", fontFamily: "var(--t-font-body)",
}
