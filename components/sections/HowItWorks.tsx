"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateIn from "@/components/ui/AnimateIn";

const steps = [
  {
    number: "01",
    title: "Get in touch",
    description: "Drop me an email or jump on a quick call — whichever you prefer. We'll talk through what you need, what you like, and what success looks like for your business. No jargon, no pressure, roughly 30 minutes.",
    note: "Call or email — your choice",
  },
  {
    number: "02",
    title: "50% deposit to begin",
    description: "Once we've agreed exactly what you want and the price, a deposit secures your spot and I start building. The remaining 50% is due when the site is ready to go live.",
    note: "Invoiced via Stripe — pay by card or bank transfer",
  },
  {
    number: "03",
    title: "I build it — typically 7 days",
    description: "I build your site to the exact spec we agreed. You'll see it before it goes live and have a chance to review everything.",
    note: "Custom built — no page builders, no templates",
  },
  {
    number: "04",
    title: "Revisions — included",
    description: "If anything isn't quite right, I'll fix it. One round of revisions is included at no extra cost — that means one consolidated list of changes, not a rolling back-and-forth.",
    note: "Covers anything visual: layout, colours, copy, images",
  },
  {
    number: "05",
    title: "Launch + free first month",
    description: "Your site goes live. The first month of maintenance is on me — hosting, any post-launch tweaks, and support while you settle in.",
    note: "Full handover included — you own everything",
  },
  {
    number: "06",
    title: "Ongoing maintenance — from £100/mo",
    description: "After the free month, keep me on to handle hosting, security, updates, and support. Cancel anytime — if you ever want to move on, I'll hand everything over cleanly with no fuss.",
    note: "No lock-in. Your site, your credentials, always.",
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
          <AnimateIn key={step.number} delay={i * 0.08}>
            <div
              style={{ background: "#0d0d0f", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem", height: "100%", transition: "background 0.25s ease", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#111118"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "#0d0d0f"}
            >
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
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "auto", paddingTop: "0.5rem" }}>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#d4a84b", flexShrink: 0 }} />
                <span style={{ fontSize: "0.72rem", color: "#606070", fontStyle: "italic" }}>{step.note}</span>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={0.3} style={{ marginTop: "4rem", padding: "2rem 2.5rem", borderRadius: "1rem", background: "rgba(212,168,75,0.04)", border: "1px solid rgba(212,168,75,0.12)", display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "rgba(212,168,75,0.1)", border: "1px solid rgba(212,168,75,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4a84b" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div>
          <p style={{ color: "#f0f0f0", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.25rem" }}>You're never locked in</p>
          <p style={{ color: "#a0a0b0", fontSize: "0.85rem", lineHeight: 1.6 }}>
            Every site comes with a full handover — your code, your credentials, your domain. If you ever want to move on or bring in another developer, I'll make it seamless. No strings attached.
          </p>
        </div>
      </AnimateIn>
    </SectionWrapper>
  );
}
