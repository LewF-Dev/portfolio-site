import type { LayoutVariant } from "@/types/template"

interface Props { layout: LayoutVariant }

export default function FuturisticHero({ layout }: Props) {
  if (layout === "split") return <HeroSplit />
  if (layout === "editorial") return <HeroEditorial />
  if (layout === "bold") return <HeroBold />
  return <HeroCentered />
}

// ─── Centered ────────────────────────────────────────────────────────────────
function HeroCentered() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "var(--t-section-pad) 4rem", textAlign: "center",
      position: "relative", overflow: "hidden",
    }}>
      <Glow />
      <GridLines />
      <div style={{ position: "relative", maxWidth: "56rem" }}>
        <Badge />
        <h1 style={headingStyle("clamp(3rem,6vw,5.5rem)")}>
          Your Business Name
        </h1>
        <p style={subStyle}>
          We help ambitious companies build products that matter.
          Strategy, design, and engineering — end to end.
        </p>
        <CTARow />
      </div>
    </section>
  )
}

// ─── Split ────────────────────────────────────────────────────────────────────
function HeroSplit() {
  return (
    <section style={{
      minHeight: "100vh", display: "grid",
      gridTemplateColumns: "1fr 1fr",
      position: "relative", overflow: "hidden",
    }}>
      <Glow />
      <GridLines />
      {/* Left */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "var(--t-section-pad) 4rem var(--t-section-pad) 5rem",
        position: "relative",
      }}>
        <Badge />
        <h1 style={headingStyle("clamp(2.5rem,4.5vw,4.5rem)")}>
          Your<br />Business<br />Name
        </h1>
        <p style={{ ...subStyle, textAlign: "left", maxWidth: "28rem" }}>
          We help ambitious companies build products that matter.
          Strategy, design, and engineering — end to end.
        </p>
        <CTARow align="left" />
        <StatRow />
      </div>
      {/* Right — visual panel */}
      <div style={{
        position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
        borderLeft: "1px solid var(--t-border)",
        background: "linear-gradient(135deg, var(--t-surface) 0%, var(--t-bg) 100%)",
      }}>
        <MockupCard />
      </div>
    </section>
  )
}

// ─── Editorial ────────────────────────────────────────────────────────────────
function HeroEditorial() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "flex-end",
      padding: "var(--t-section-pad) 5rem",
      position: "relative", overflow: "hidden",
      borderBottom: "1px solid var(--t-border)",
    }}>
      <GridLines />
      <div style={{ maxWidth: "72rem" }}>
        <p style={{
          fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase",
          color: "var(--t-accent)", marginBottom: "2rem", fontFamily: "var(--t-font-body)",
        }}>
          Est. 2024 — Bristol, UK
        </p>
        <h1 style={{
          fontFamily: "var(--t-font-heading)", fontWeight: 700,
          fontSize: "clamp(4rem,9vw,9rem)", lineHeight: 0.95,
          color: "var(--t-text)", letterSpacing: "-0.03em",
          marginBottom: "3rem",
        }}>
          Your<br />Business<br />Name
        </h1>
        <div style={{ display: "flex", gap: "4rem", alignItems: "flex-end" }}>
          <p style={{ ...subStyle, textAlign: "left", maxWidth: "24rem", flex: 1 }}>
            We help ambitious companies build products that matter.
          </p>
          <CTARow align="left" />
        </div>
      </div>
    </section>
  )
}

// ─── Bold ─────────────────────────────────────────────────────────────────────
function HeroBold() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "var(--t-section-pad) 4rem", textAlign: "center",
      position: "relative", overflow: "hidden",
      background: "linear-gradient(180deg, var(--t-surface) 0%, var(--t-bg) 60%)",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(var(--t-accent-rgb,212,168,75),0.15) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "relative", maxWidth: "64rem" }}>
        <h1 style={{
          fontFamily: "var(--t-font-heading)", fontWeight: 700,
          fontSize: "clamp(4rem,9vw,8rem)", lineHeight: 0.9,
          color: "var(--t-text)", letterSpacing: "-0.04em",
          marginBottom: "2rem",
          textTransform: "uppercase",
        }}>
          Your Business Name
        </h1>
        <div style={{
          width: "6rem", height: "4px",
          background: "var(--t-accent)",
          margin: "0 auto 2rem",
        }} />
        <p style={subStyle}>
          We help ambitious companies build products that matter.
          Strategy, design, and engineering — end to end.
        </p>
        <CTARow />
        <StatRow centered />
      </div>
    </section>
  )
}

// ─── Shared sub-components ────────────────────────────────────────────────────

function Badge() {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "0.5rem",
      padding: "0.35rem 1rem", borderRadius: "2rem",
      border: "1px solid rgba(var(--t-accent-rgb,212,168,75),0.3)",
      background: "rgba(var(--t-accent-rgb,212,168,75),0.08)",
      fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em",
      color: "var(--t-accent)", textTransform: "uppercase",
      marginBottom: "1.5rem",
    }}>
      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--t-accent)" }} />
      Available for new projects
    </div>
  )
}

function CTARow({ align = "center" }: { align?: "center" | "left" }) {
  return (
    <div style={{
      display: "flex", gap: "1rem", flexWrap: "wrap",
      justifyContent: align === "center" ? "center" : "flex-start",
      marginTop: "2.5rem",
    }}>
      <button style={{
        padding: "0.875rem 2rem", borderRadius: "0.5rem", fontWeight: 600,
        fontSize: "0.9rem", border: "none", cursor: "pointer",
        color: "var(--t-bg)", background: "var(--t-accent)",
        fontFamily: "var(--t-font-body)",
      }}>
        Get Started
      </button>
      <button style={{
        padding: "0.875rem 2rem", borderRadius: "0.5rem", fontWeight: 500,
        fontSize: "0.9rem", cursor: "pointer",
        color: "var(--t-text)", background: "transparent",
        border: "1px solid var(--t-border)",
        fontFamily: "var(--t-font-body)",
      }}>
        View Our Work
      </button>
    </div>
  )
}

function StatRow({ centered = false }: { centered?: boolean }) {
  const stats = [
    { value: "50+", label: "Projects delivered" },
    { value: "7 days", label: "Average launch time" },
    { value: "100%", label: "Client satisfaction" },
  ]
  return (
    <div style={{
      display: "flex", gap: "3rem", flexWrap: "wrap",
      justifyContent: centered ? "center" : "flex-start",
      marginTop: "3rem", paddingTop: "2rem",
      borderTop: "1px solid var(--t-border)",
    }}>
      {stats.map(s => (
        <div key={s.label}>
          <div style={{
            fontFamily: "var(--t-font-heading)", fontSize: "1.75rem",
            fontWeight: 700, color: "var(--t-accent)",
          }}>{s.value}</div>
          <div style={{ fontSize: "0.75rem", color: "var(--t-muted)", marginTop: "0.25rem" }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}

function MockupCard() {
  return (
    <div style={{
      width: "340px", background: "var(--t-bg)",
      border: "1px solid var(--t-border)", borderRadius: "1rem",
      overflow: "hidden", boxShadow: "0 32px 64px rgba(0,0,0,0.4)",
    }}>
      {/* Browser chrome */}
      <div style={{
        padding: "0.75rem 1rem", background: "var(--t-surface)",
        borderBottom: "1px solid var(--t-border)",
        display: "flex", alignItems: "center", gap: "0.5rem",
      }}>
        {["#ff5f57","#febc2e","#28c840"].map(c => (
          <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
        ))}
        <div style={{
          flex: 1, height: "20px", borderRadius: "0.25rem",
          background: "var(--t-bg)", marginLeft: "0.5rem",
        }} />
      </div>
      {/* Content skeleton */}
      <div style={{ padding: "1.5rem" }}>
        <div style={{ height: "120px", borderRadius: "0.5rem", background: "var(--t-surface)", marginBottom: "1rem" }} />
        <div style={{ height: "12px", borderRadius: "0.25rem", background: "var(--t-surface)", marginBottom: "0.5rem", width: "80%" }} />
        <div style={{ height: "12px", borderRadius: "0.25rem", background: "var(--t-surface)", marginBottom: "0.5rem", width: "60%" }} />
        <div style={{ height: "12px", borderRadius: "0.25rem", background: "var(--t-surface)", width: "70%" }} />
        <div style={{
          marginTop: "1.25rem", height: "36px", borderRadius: "0.375rem",
          background: "var(--t-accent)", width: "120px", opacity: 0.8,
        }} />
      </div>
    </div>
  )
}

function Glow() {
  return (
    <div style={{
      position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
      width: "800px", height: "400px", borderRadius: "50%",
      background: "radial-gradient(ellipse, rgba(var(--t-accent-rgb,212,168,75),0.1) 0%, transparent 70%)",
      pointerEvents: "none",
    }} />
  )
}

function GridLines() {
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none",
      backgroundImage: `
        linear-gradient(var(--t-border) 1px, transparent 1px),
        linear-gradient(90deg, var(--t-border) 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
      opacity: 0.4,
    }} />
  )
}

// ─── Shared styles ────────────────────────────────────────────────────────────
function headingStyle(fontSize: string): React.CSSProperties {
  return {
    fontFamily: "var(--t-font-heading)", fontWeight: 700,
    fontSize, lineHeight: 1.05, letterSpacing: "-0.02em",
    color: "var(--t-text)", marginBottom: "1.5rem",
  }
}

const subStyle: React.CSSProperties = {
  fontSize: "1.1rem", color: "var(--t-muted)",
  lineHeight: "var(--t-line-height)",
  maxWidth: "36rem", margin: "0 auto",
  fontFamily: "var(--t-font-body)",
}
