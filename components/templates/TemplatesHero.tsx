"use client"

export default function TemplatesHero() {
  return (
    <section style={{
      background: "#0d0d0f",
      padding: "8rem 2.5rem 5rem",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Glow */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(212,168,75,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", maxWidth: "52rem", margin: "0 auto" }}>
        <div style={{
          display: "inline-block", padding: "0.35rem 1rem", borderRadius: "2rem",
          border: "1px solid rgba(212,168,75,0.3)", background: "rgba(212,168,75,0.08)",
          fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em",
          color: "#d4a84b", textTransform: "uppercase", marginBottom: "1.5rem",
        }}>
          Live in 7 days
        </div>

        <h1 style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, lineHeight: 1.1,
          color: "#e8e8f0", marginBottom: "1.5rem", letterSpacing: "-0.02em",
        }}>
          A professional website,<br />
          <span style={{ color: "#d4a84b" }}>built to your spec.</span>
        </h1>

        <p style={{
          fontSize: "1.1rem", color: "#808090", lineHeight: 1.7,
          maxWidth: "36rem", margin: "0 auto 2.5rem",
        }}>
          Pick a template, configure it live — layout, fonts, colours, sections.
          Submit your brief. We build and launch it within 7 days.
        </p>

        {/* 3-step process */}
        <div style={{
          display: "flex", justifyContent: "center", gap: "0",
          flexWrap: "wrap", marginBottom: "3rem",
        }}>
          {[
            { step: "01", label: "Pick a template" },
            { step: "02", label: "Configure it live" },
            { step: "03", label: "We build & launch" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                padding: "1rem 2rem",
              }}>
                <span style={{
                  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
                  color: "#d4a84b", marginBottom: "0.35rem",
                }}>
                  {item.step}
                </span>
                <span style={{ fontSize: "0.875rem", color: "#a0a0b0", fontWeight: 500 }}>
                  {item.label}
                </span>
              </div>
              {i < 2 && (
                <div style={{ width: "2rem", height: "1px", background: "rgba(255,255,255,0.1)" }} />
              )}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#templates" style={{
            padding: "0.875rem 2rem", borderRadius: "0.5rem", fontWeight: 600,
            fontSize: "0.9rem", textDecoration: "none", color: "#0d0d0f",
            background: "linear-gradient(135deg, #d4a84b, #b8922a)",
            boxShadow: "0 4px 16px rgba(212,168,75,0.25)",
          }}>
            Browse Templates
          </a>
          <div style={{
            padding: "0.875rem 2rem", borderRadius: "0.5rem", fontWeight: 500,
            fontSize: "0.9rem", color: "#808090",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            From £299
          </div>
        </div>
      </div>
    </section>
  )
}
