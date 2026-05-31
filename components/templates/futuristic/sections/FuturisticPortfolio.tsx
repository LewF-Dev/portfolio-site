const PROJECTS = [
  {
    number: "01",
    title: "Brand Redesign",
    category: "Design & Development",
    description: "Full rebrand and website rebuild for a Bristol-based consultancy. 40% increase in enquiries within 3 months.",
    tags: ["Next.js", "Figma", "SEO"],
    accent: true,
  },
  {
    number: "02",
    title: "E-commerce Launch",
    category: "Shopify Development",
    description: "Custom Shopify storefront for an independent retailer. Launched in 6 days, £12k revenue in first month.",
    tags: ["Shopify", "Stripe", "Analytics"],
    accent: false,
  },
  {
    number: "03",
    title: "SaaS Dashboard",
    category: "Web Application",
    description: "Internal tooling dashboard for a logistics startup. Replaced three separate tools with one unified interface.",
    tags: ["React", "TypeScript", "API"],
    accent: false,
  },
  {
    number: "04",
    title: "Portfolio Site",
    category: "Design & Development",
    description: "Personal portfolio for a London-based photographer. Optimised for image loading and mobile experience.",
    tags: ["Next.js", "Performance", "CMS"],
    accent: false,
  },
]

export default function FuturisticPortfolio() {
  return (
    <section style={{
      padding: "var(--t-section-pad) 5rem",
      borderTop: "1px solid var(--t-border)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "var(--t-gap)", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <p style={labelStyle}>Selected Work</p>
          <h2 style={h2Style}>Portfolio</h2>
        </div>
        <button style={{
          padding: "0.6rem 1.25rem", borderRadius: "0.5rem",
          border: "1px solid var(--t-border)", background: "transparent",
          color: "var(--t-muted)", fontSize: "0.8rem", cursor: "pointer",
          fontFamily: "var(--t-font-body)",
        }}>
          View all work →
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--t-border)", border: "1px solid var(--t-border)", borderRadius: "1rem", overflow: "hidden" }}>
        {PROJECTS.map((p) => (
          <div key={p.number} style={{
            display: "grid", gridTemplateColumns: "5rem 1fr auto",
            alignItems: "center", gap: "2rem",
            padding: "1.75rem var(--t-card-pad)",
            background: p.accent ? "var(--t-surface)" : "var(--t-bg)",
          }}>
            <span style={{
              fontFamily: "var(--t-font-heading)", fontSize: "0.75rem",
              fontWeight: 700, color: "var(--t-muted)", letterSpacing: "0.1em",
            }}>
              {p.number}
            </span>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.4rem" }}>
                <h3 style={{
                  fontFamily: "var(--t-font-heading)", fontWeight: 600,
                  fontSize: "1.1rem", color: "var(--t-text)",
                }}>
                  {p.title}
                </h3>
                <span style={{
                  fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.06em",
                  padding: "0.2rem 0.6rem", borderRadius: "0.25rem",
                  background: "var(--t-surface)", color: "var(--t-accent)",
                  border: "1px solid var(--t-border)",
                  fontFamily: "var(--t-font-body)",
                }}>
                  {p.category}
                </span>
              </div>
              <p style={{
                fontSize: "0.85rem", color: "var(--t-muted)",
                fontFamily: "var(--t-font-body)", lineHeight: 1.5,
              }}>
                {p.description}
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  fontSize: "0.65rem", padding: "0.2rem 0.6rem", borderRadius: "0.25rem",
                  background: "var(--t-surface)", color: "var(--t-muted)",
                  border: "1px solid var(--t-border)", fontFamily: "var(--t-font-body)",
                }}>
                  {t}
                </span>
              ))}
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
