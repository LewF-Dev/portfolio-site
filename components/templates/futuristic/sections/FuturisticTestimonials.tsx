const TESTIMONIALS = [
  {
    quote: "They delivered exactly what we discussed — on time, on budget, and better than we imagined. The site has completely transformed how clients perceive us.",
    name: "Sarah Mitchell",
    role: "Director, Apex Consulting",
    initials: "SM",
  },
  {
    quote: "I've worked with a lot of developers. These guys are different — they actually understand business, not just code. The result speaks for itself.",
    name: "James Hartley",
    role: "Founder, Hartley & Co",
    initials: "JH",
  },
  {
    quote: "From brief to live in 6 days. I was sceptical but they pulled it off. The site is fast, looks incredible, and I've already had three enquiries from it.",
    name: "Priya Sharma",
    role: "Owner, Studio Priya",
    initials: "PS",
  },
]

export default function FuturisticTestimonials() {
  return (
    <section style={{
      padding: "var(--t-section-pad) 5rem",
      borderTop: "1px solid var(--t-border)",
      background: "var(--t-surface)",
    }}>
      <div style={{ marginBottom: "var(--t-gap)", textAlign: "center" }}>
        <p style={labelStyle}>What Clients Say</p>
        <h2 style={h2Style}>Testimonials</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--t-gap)" }}>
        {TESTIMONIALS.map((t) => (
          <div key={t.name} style={{
            background: "var(--t-bg)", border: "1px solid var(--t-border)",
            borderRadius: "1rem", padding: "var(--t-card-pad)",
            display: "flex", flexDirection: "column", gap: "1.5rem",
          }}>
            {/* Stars */}
            <div style={{ display: "flex", gap: "0.25rem" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: "var(--t-accent)", fontSize: "0.9rem" }}>★</span>
              ))}
            </div>

            <p style={{
              fontSize: "0.9rem", color: "var(--t-text)",
              lineHeight: "var(--t-line-height)", fontFamily: "var(--t-font-body)",
              fontStyle: "italic", flex: 1,
            }}>
              "{t.quote}"
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%",
                background: "var(--t-accent)", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "0.75rem", fontWeight: 700, color: "var(--t-bg)",
                fontFamily: "var(--t-font-body)", flexShrink: 0,
              }}>
                {t.initials}
              </div>
              <div>
                <div style={{
                  fontSize: "0.85rem", fontWeight: 600, color: "var(--t-text)",
                  fontFamily: "var(--t-font-body)",
                }}>
                  {t.name}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--t-muted)", fontFamily: "var(--t-font-body)" }}>
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
  textTransform: "uppercase", color: "var(--t-accent)",
  marginBottom: "0.75rem", fontFamily: "var(--t-font-body)",
}

const h2Style: React.CSSProperties = {
  fontFamily: "var(--t-font-heading)", fontWeight: 700,
  fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 1.1,
  letterSpacing: "-0.02em", color: "var(--t-text)",
}
