"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateIn from "@/components/ui/AnimateIn";

const tiers = [
  {
    name: "Starter",
    price: "£799",
    description: "For businesses that need a clean, professional web presence fast.",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
      "2-week revision window",
      "Companion app access",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "£1,499",
    badge: "Most popular",
    description: "For businesses ready to stand out and convert visitors into customers.",
    features: [
      "Up to 10 pages",
      "Custom animations",
      "Blog or news section",
      "Advanced SEO",
      "Analytics integration",
      "2-week revision window",
      "Companion app access",
      "Priority support",
    ],
    cta: "Get started",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    description: "For complex builds — e-commerce, booking systems, custom integrations.",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "Third-party integrations",
      "E-commerce / bookings",
      "Dedicated project management",
      "Extended revision window",
      "Full handoff + documentation",
    ],
    cta: "Book a call",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" style={{ background: "#13131a" }}>
      <AnimateIn style={{ marginBottom: "4rem", maxWidth: "40rem" }}>
        <p style={{ color: "#4a7fa5", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>Pricing</p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1.1, marginBottom: "1rem" }}>
          Transparent pricing.<br />No surprises.
        </h2>
        <p style={{ color: "#a0a0b0", fontSize: "1.1rem", lineHeight: 1.7 }}>
          Fixed project fees. You know the cost before we start.
        </p>
      </AnimateIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
        {tiers.map((tier, i) => (
          <AnimateIn key={tier.name} delay={i * 0.1}>
            <div
              style={{
                position: "relative", display: "flex", flexDirection: "column",
                borderRadius: "1.25rem", padding: "2rem",
                border: tier.highlighted ? "1px solid rgba(74,127,165,0.4)" : "1px solid rgba(255,255,255,0.07)",
                background: tier.highlighted ? "rgba(74,127,165,0.05)" : "#0d0d0f",
                height: "100%",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = tier.highlighted
                  ? "0 16px 48px rgba(74,127,165,0.2)"
                  : "0 16px 48px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {tier.badge && (
                <div style={{ position: "absolute", top: "-0.75rem", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #d4a84b, #b8922a)", color: "#0d0d0f", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.875rem", borderRadius: "9999px", whiteSpace: "nowrap" }}>
                  {tier.badge}
                </div>
              )}

              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "0.75rem", color: "#606070", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{tier.name}</p>
                <p style={{ fontSize: tier.price === "Let's talk" ? "2rem" : "2.75rem", fontWeight: 800, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1, marginBottom: "0.75rem" }}>{tier.price}</p>
                <p style={{ color: "#a0a0b0", fontSize: "0.875rem", lineHeight: 1.6 }}>{tier.description}</p>
              </div>

              <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "1.5rem" }} />

              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.7rem", flex: 1, marginBottom: "2rem" }}>
                {tier.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem", color: "#c0c0d0" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a7fa5" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                style={{
                  display: "block", textAlign: "center", padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem", fontSize: "0.875rem", fontWeight: 600,
                  textDecoration: "none",
                  background: tier.highlighted ? "linear-gradient(135deg, #d4a84b, #b8922a)" : "transparent",
                  color: tier.highlighted ? "#0d0d0f" : "#f0f0f0",
                  border: tier.highlighted ? "none" : "1px solid rgba(255,255,255,0.15)",
                  transition: "background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: tier.highlighted ? "0 4px 12px rgba(201,168,76,0.25)" : "none",
                }}
                onMouseEnter={e => {
                  if (!tier.highlighted) {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                  } else {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(201,168,76,0.4)";
                  }
                }}
                onMouseLeave={e => {
                  if (!tier.highlighted) {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  } else {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 12px rgba(201,168,76,0.25)";
                  }
                }}
              >
                {tier.cta}
              </a>
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={0.3} style={{ marginTop: "3rem", textAlign: "center" }}>
        <p style={{ color: "#606070", fontSize: "0.875rem" }}>
          Not sure which fits?{" "}
          <a href="/contact" style={{ color: "#4a7fa5", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline"}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none"}
          >Get in touch</a>
          {" "}and we'll figure it out together.
        </p>
      </AnimateIn>
    </SectionWrapper>
  );
}
