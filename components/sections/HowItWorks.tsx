"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateIn from "@/components/ui/AnimateIn";

const steps = [
  { number: "01", title: "Discovery", description: "We start with a conversation. You tell me about your business, your goals, and what you need. I'll ask the right questions to make sure we build the right thing." },
  { number: "02", title: "Build", description: "Design and development happen together. You'll see progress as it happens and have input throughout — not just at the end." },
  { number: "03", title: "Revision Window", description: "Two weeks after launch, visual changes are free. Text, colours, fonts, images, layout adjustments, removing sections — anything you can see. Functional changes are quoted separately." },
  { number: "04", title: "Handoff & App", description: "You get the code, the companion app, and the keys. Day-to-day content updates are yours to make. Bigger changes can come back to me or any capable developer." },
];

const visualChanges = ["Text and copy", "Colours and fonts", "Images and media", "Layout adjustments", "Section removal", "Spacing and sizing"];
const functionalChanges = ["New pages or sections", "Forms and integrations", "Booking or e-commerce", "Animations and interactions", "Third-party services", "Structural changes"];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" style={{ background: "#13131a" }}>
      <AnimateIn style={{ marginBottom: "4rem", maxWidth: "36rem" }}>
        <p style={{ color: "#4a7fa5", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>The Process</p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1.1, marginBottom: "1rem" }}>
          How it works
        </h2>
        <p style={{ color: "#a0a0b0", fontSize: "1.1rem", lineHeight: 1.7 }}>
          A clear process from first conversation to launch — and beyond.
        </p>
      </AnimateIn>

      {/* Steps */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginBottom: "4rem" }}>
        {steps.map((step, i) => (
          <AnimateIn key={step.number} delay={i * 0.1}>
            <div style={{ display: "flex", gap: "1.5rem", padding: "2rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.06)", background: "#0d0d0f", height: "100%" }}>
              <span style={{ fontSize: "3rem", fontWeight: 700, color: "rgba(74,127,165,0.15)", lineHeight: 1, flexShrink: 0, fontFamily: "var(--font-syne), system-ui, sans-serif" }}>{step.number}</span>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ color: "#a0a0b0", fontSize: "0.875rem", lineHeight: 1.7 }}>{step.description}</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Revision window breakdown */}
      <AnimateIn>
        <div style={{ borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
          <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#0d0d0f" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", marginBottom: "0.25rem" }}>What's included in the revision window</h3>
            <p style={{ color: "#a0a0b0", fontSize: "0.875rem" }}>Two weeks post-launch. Visual changes are free. Functional changes are quoted.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#0d0d0f" }}>
            <div style={{ padding: "2rem", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "#4a7fa5", display: "inline-block" }} />
                <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#f0f0f0" }}>Visual changes — free</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {visualChanges.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "#a0a0b0" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "#4a7fa5", flexShrink: 0 }}><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "#c9a84c", display: "inline-block" }} />
                <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#f0f0f0" }}>Functional changes — quoted</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {functionalChanges.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "#a0a0b0" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "#c9a84c", flexShrink: 0 }}><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimateIn>
    </SectionWrapper>
  );
}
