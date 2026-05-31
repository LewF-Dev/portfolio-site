"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateIn from "@/components/ui/AnimateIn";

const steps = [
  {
    number: "01",
    title: "Discovery call",
    description: "We start with a conversation. You tell me about your business, your goals, and what you need. I ask the right questions so we build the right thing — not just something that looks good.",
  },
  {
    number: "02",
    title: "Design & build",
    description: "Design and development happen together. You see progress as it happens and have input throughout — not just at the end when it's too late to change direction.",
  },
  {
    number: "03",
    title: "Launch & revise",
    description: "Two weeks after launch, visual changes are free. Text, colours, fonts, images, layout — anything you can see. Functional changes are quoted separately. No surprises.",
  },
  {
    number: "04",
    title: "Handoff & app",
    description: "You get the code, the companion app, and the keys. Day-to-day content updates are yours to make. Bigger changes can come back to me or any capable developer.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" style={{ background: "#0d0d0f" }}>
      <AnimateIn style={{ marginBottom: "5rem", maxWidth: "40rem" }}>
        <p style={{ color: "#4a7fa5", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>The Process</p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1.1, marginBottom: "1rem" }}>
          Simple from start to finish
        </h2>
        <p style={{ color: "#a0a0b0", fontSize: "1.1rem", lineHeight: 1.7 }}>
          No jargon, no black box. Here's exactly what working with Mordax Labs looks like.
        </p>
      </AnimateIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "1.25rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
        {steps.map((step, i) => (
          <AnimateIn key={step.number} delay={i * 0.1}>
            <div
              style={{ background: "#0d0d0f", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem", height: "100%", transition: "background 0.25s ease", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#111118"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "#0d0d0f"}
            >
              {/* Step number — large watermark */}
              <span style={{ position: "absolute", top: "1rem", right: "1.5rem", fontSize: "5rem", fontWeight: 800, color: "rgba(255,255,255,0.03)", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1, userSelect: "none" }}>
                {step.number}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "2rem", height: "2rem", borderRadius: "50%", background: "rgba(74,127,165,0.12)", border: "1px solid rgba(74,127,165,0.25)", color: "#4a7fa5", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em", flexShrink: 0 }}>
                  {step.number}
                </span>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif" }}>
                  {step.title}
                </h3>
              </div>
              <p style={{ color: "#a0a0b0", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "28rem" }}>
                {step.description}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Connector line between steps */}
      <AnimateIn delay={0.3} style={{ marginTop: "4rem", padding: "2rem 2.5rem", borderRadius: "1rem", background: "rgba(74,127,165,0.05)", border: "1px solid rgba(74,127,165,0.12)", display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "rgba(74,127,165,0.12)", border: "1px solid rgba(74,127,165,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a7fa5" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div>
          <p style={{ color: "#f0f0f0", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.25rem" }}>Ongoing maintenance available</p>
          <p style={{ color: "#a0a0b0", fontSize: "0.85rem", lineHeight: 1.6 }}>
            Optional monthly retainer covers hosting, updates, security patches, and priority support. You focus on your business — I keep the site running.
          </p>
        </div>
      </AnimateIn>
    </SectionWrapper>
  );
}
