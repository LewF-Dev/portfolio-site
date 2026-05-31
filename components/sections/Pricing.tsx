"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateIn from "@/components/ui/AnimateIn";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "From £800",
    description: "A clean, professional site for businesses getting started online.",
    features: ["Up to 5 sections", "Mobile responsive", "Contact form", "Basic SEO setup", "2-week revision window", "Companion app access"],
    highlighted: false,
  },
  {
    name: "Studio",
    price: "From £1,800",
    description: "A fully custom site built to convert — for businesses ready to invest in their web presence.",
    features: ["Unlimited sections", "Custom animations", "Advanced SEO & performance", "Integrations (booking, forms, etc.)", "2-week revision window", "Companion app access", "1 month free support"],
    highlighted: true,
  },
  {
    name: "Retainer",
    price: "From £150/mo",
    description: "Ongoing maintenance, updates, and support for your existing Mordax Labs site.",
    features: ["Monthly updates", "Priority response", "Performance monitoring", "Security updates", "Small changes included", "Cancel anytime"],
    highlighted: false,
  },
];

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
    <path d="M2 7l3.5 3.5L12 3" stroke="#4a7fa5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <AnimateIn style={{ marginBottom: "4rem", maxWidth: "36rem" }}>
        <p style={{ color: "#4a7fa5", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>Pricing</p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1.1, marginBottom: "1rem" }}>
          Transparent from the start
        </h2>
        <p style={{ color: "#a0a0b0", fontSize: "1.1rem", lineHeight: 1.7 }}>
          No surprise costs. Build complexity is factored into the quote upfront. Every project is scoped before work begins.
        </p>
      </AnimateIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
        {tiers.map((tier, i) => (
          <AnimateIn key={tier.name} delay={i * 0.1}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              borderRadius: "1rem",
              padding: "2rem",
              border: tier.highlighted ? "1px solid rgba(74,127,165,0.5)" : "1px solid rgba(255,255,255,0.06)",
              background: tier.highlighted ? "rgba(74,127,165,0.06)" : "#13131a",
              height: "100%",
              transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = tier.highlighted ? "0 12px 40px rgba(74,127,165,0.2)" : "0 12px 40px rgba(0,0,0,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
            >
              {tier.highlighted && (
                <>
                  <div style={{ position: "absolute", top: 0, left: "2rem", right: "2rem", height: "1px", background: "linear-gradient(90deg, transparent, #4a7fa5, transparent)" }} />
                  <div style={{ position: "absolute", top: "-0.75rem", left: "50%", transform: "translateX(-50%)", background: "#4a7fa5", color: "#0d0d0f", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em", padding: "0.2rem 0.75rem", borderRadius: "9999px" }}>
                    Most Popular
                  </div>
                </>
              )}
              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", marginBottom: "0.25rem" }}>{tier.name}</h3>
                <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", marginBottom: "0.75rem" }}>{tier.price}</div>
                <p style={{ color: "#a0a0b0", fontSize: "0.875rem", lineHeight: 1.6 }}>{tier.description}</p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1, marginBottom: "2rem" }}>
                {tier.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "#a0a0b0" }}>
                    <Check />{f}
                  </li>
                ))}
              </ul>
              <Link href="#contact" style={{
                display: "block",
                textAlign: "center",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                background: tier.highlighted ? "#c9a84c" : "transparent",
                color: tier.highlighted ? "#0d0d0f" : "#f0f0f0",
                border: tier.highlighted ? "none" : "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.2s",
              }}>
                Start a Project
              </Link>
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn style={{ marginTop: "2.5rem", textAlign: "center" }}>
        <p style={{ color: "#606070", fontSize: "0.875rem" }}>
          Not sure which tier fits?{" "}
          <Link href="#contact" style={{ color: "#4a7fa5", textDecoration: "none" }}>Get in touch</Link>
          {" "}and we'll figure it out together. Small tasks under a few minutes are always free.
        </p>
      </AnimateIn>
    </SectionWrapper>
  );
}
