"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateIn from "@/components/ui/AnimateIn";
import { slideInLeft, slideInRight } from "@/lib/motion";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

        <AnimateIn variants={slideInLeft}>
          <p style={{ color: "#4a7fa5", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>About</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Built by someone who gives a damn
          </h2>
          <p style={{ color: "#a0a0b0", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            I'm Lewis — the developer behind Mordax Labs. I started this because I believe small businesses deserve websites that are genuinely well built, not just functional enough to get by.
          </p>
          <p style={{ color: "#a0a0b0", lineHeight: 1.7 }}>
            Every site I build is something I'd be proud to put my name on. The code is clean, the design is intentional, and the process is transparent from start to finish. When the project is done, you own it completely — no lock-in, no dependency on me to keep the lights on.
          </p>
        </AnimateIn>

        <AnimateIn variants={slideInRight} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative" }}>
            {/* Photo placeholder */}
            <div style={{ width: "18rem", height: "22rem", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(74,127,165,0.2) 0%, #13131a 100%)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", opacity: 0.35 }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4a7fa5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span style={{ color: "#606070", fontSize: "0.75rem" }}>Photo coming soon</span>
              </div>
            </div>

            {/* Stat cards */}
            <div style={{ position: "absolute", bottom: "-1.5rem", left: "-1.5rem", background: "#13131a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#4a7fa5", fontFamily: "var(--font-syne), system-ui, sans-serif" }}>100%</div>
              <div style={{ color: "#606070", fontSize: "0.75rem", marginTop: "0.1rem" }}>Custom built</div>
            </div>

            <div style={{ position: "absolute", top: "-1.5rem", right: "-1.5rem", background: "#13131a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#c9a84c", fontFamily: "var(--font-syne), system-ui, sans-serif" }}>95+</div>
              <div style={{ color: "#606070", fontSize: "0.75rem", marginTop: "0.1rem" }}>Lighthouse target</div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </SectionWrapper>
  );
}
