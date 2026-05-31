const SERVICES = [
  {
    icon: "◈",
    title: "Web Development",
    description: "Fast, accessible, production-ready websites built with modern frameworks. From landing pages to complex web apps.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: "◉",
    title: "UI / UX Design",
    description: "Interfaces that feel intuitive and look considered. We design in the browser — what you see is what you get.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: "◎",
    title: "E-commerce",
    description: "Online stores built to convert. Custom storefronts, payment integration, inventory management.",
    tags: ["Shopify", "Stripe", "Custom"],
  },
  {
    icon: "◇",
    title: "SEO & Performance",
    description: "Sites that rank and load fast. Technical SEO, Core Web Vitals optimisation, and ongoing monitoring.",
    tags: ["Core Web Vitals", "Schema", "Analytics"],
  },
  {
    icon: "○",
    title: "Maintenance & Support",
    description: "Monthly plans covering hosting, updates, security patches, and small content changes.",
    tags: ["Hosting", "Updates", "Support"],
  },
  {
    icon: "□",
    title: "Consulting",
    description: "Not sure what you need? We'll audit your current setup and give you a clear, honest roadmap.",
    tags: ["Audit", "Strategy", "Roadmap"],
  },
]

export default function FuturisticServices() {
  return (
    <section style={{
      padding: "var(--t-section-pad) 5rem",
      borderTop: "1px solid var(--t-border)",
      background: "var(--t-surface)",
    }}>
      <div style={{ marginBottom: "var(--t-gap)" }}>
        <p style={labelStyle}>What We Do</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
          <h2 style={h2Style}>Services</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--t-muted)", maxWidth: "28rem", fontFamily: "var(--t-font-body)" }}>
            Everything you need to get online and grow — under one roof.
          </p>
        </div>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1px", background: "var(--t-border)",
        border: "1px solid var(--t-border)", borderRadius: "1rem", overflow: "hidden",
      }}>
        {SERVICES.map((s) => (
          <div key={s.title} style={{
            padding: "var(--t-card-pad)",
            background: "var(--t-bg)",
            transition: "background 0.2s ease",
          }}>
            <div style={{
              fontSize: "1.5rem", color: "var(--t-accent)",
              marginBottom: "1rem", lineHeight: 1,
            }}>
              {s.icon}
            </div>
            <h3 style={{
              fontFamily: "var(--t-font-heading)", fontWeight: 600,
              fontSize: "1rem", color: "var(--t-text)",
              marginBottom: "0.75rem",
            }}>
              {s.title}
            </h3>
            <p style={{
              fontSize: "0.85rem", color: "var(--t-muted)",
              lineHeight: "var(--t-line-height)", fontFamily: "var(--t-font-body)",
              marginBottom: "1.25rem",
            }}>
              {s.description}
            </p>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {s.tags.map(t => (
                <span key={t} style={{
                  fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.06em",
                  padding: "0.2rem 0.6rem", borderRadius: "0.25rem",
                  background: "var(--t-surface)", color: "var(--t-muted)",
                  border: "1px solid var(--t-border)",
                  fontFamily: "var(--t-font-body)",
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
