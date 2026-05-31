"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateIn from "@/components/ui/AnimateIn";

const services = [
  {
    title: "Custom Design",
    description: "Every site is designed from scratch around your brand, your audience, and your goals. No templates, no shortcuts.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  },
  {
    title: "Clean Code",
    description: "Built to a standard any capable developer can maintain. Performant, accessible, and structured for longevity.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  },
  {
    title: "Companion App",
    description: "Every site comes paired with a free mobile app. Update text, colours, and images yourself — no developer needed for day-to-day changes.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  },
  {
    title: "SEO & Performance",
    description: "Fast load times, clean markup, and proper meta structure baked in from the start — not bolted on as an afterthought.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    title: "Transparent Process",
    description: "You know what you're getting, what it costs, and when it's done. No surprises, no scope creep, no hidden fees.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  },
  {
    title: "Ongoing Support",
    description: "Optional monthly retainer for updates, maintenance, and anything that needs a developer's hand. Or hand it off — the code is yours.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <AnimateIn style={{ marginBottom: "4rem", maxWidth: "36rem" }}>
        <p style={{ color: "#4a7fa5", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>What We Build</p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1.1, marginBottom: "1rem" }}>
          Sites that work as hard as you do
        </h2>
        <p style={{ color: "#a0a0b0", fontSize: "1.1rem", lineHeight: 1.7 }}>
          Every project is built from scratch — designed around your business, your brand, and the clients you want to attract.
        </p>
      </AnimateIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", background: "rgba(255,255,255,0.06)", borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
        {services.map((service, i) => (
          <AnimateIn key={service.title} delay={i * 0.08} style={{ borderRight: i % 3 !== 2 ? "1px solid rgba(255,255,255,0.06)" : "none", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
            <div
              style={{ background: "#0d0d0f", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", height: "100%", transition: "background 0.25s ease" }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#111118"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "#0d0d0f"}
            >
              <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", background: "rgba(74,127,165,0.1)", border: "1px solid rgba(74,127,165,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4a7fa5", flexShrink: 0 }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif" }}>{service.title}</h3>
              <p style={{ color: "#a0a0b0", fontSize: "0.875rem", lineHeight: 1.7 }}>{service.description}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
