import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateIn from "@/components/ui/AnimateIn";

const stats = [
  { value: "95+", label: "Lighthouse target" },
  { value: "2wk", label: "Revision window" },
  { value: "∞", label: "App updates" },
];

export default function About() {
  return (
    <SectionWrapper id="about" style={{ background: "#0d0d0f" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

        <AnimateIn>
          <p style={{ color: "#4a7fa5", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>About</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Built by someone who gives a damn
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ color: "#a0a0b0", fontSize: "1rem", lineHeight: 1.8 }}>
              I&apos;m Lewis — the developer behind Mordax Labs. I started this because I believe small businesses deserve websites that are genuinely well built, not just functional enough to get by.
            </p>
            <p style={{ color: "#a0a0b0", fontSize: "1rem", lineHeight: 1.8 }}>
              Every site I build is custom — no templates, no page builders, no shortcuts. Fast, accessible, and designed to convert. And because I know you&apos;ll need to update it after launch, every project comes with a companion app so you&apos;re never dependent on me for day-to-day changes.
            </p>
          </div>

          <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem" }}>
            {stats.map(s => (
              <div key={s.label}>
                <p style={{ fontSize: "2rem", fontWeight: 800, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontSize: "0.75rem", color: "#606070", marginTop: "0.35rem", letterSpacing: "0.05em" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div style={{ position: "relative" }}>
            {/* Photo placeholder */}
            <div style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "#13131a", aspectRatio: "4/5", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
              <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", background: "rgba(74,127,165,0.1)", border: "1px solid rgba(74,127,165,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a7fa5" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p style={{ color: "#606070", fontSize: "0.8rem" }}>Photo coming soon</p>
            </div>

            {/* Floating stat card */}
            <div style={{ position: "absolute", bottom: "-1.5rem", left: "-1.5rem", background: "#13131a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1rem", padding: "1.25rem 1.5rem", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
              <p style={{ fontSize: "0.7rem", color: "#606070", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Based in</p>
              <p style={{ fontSize: "1rem", fontWeight: 600, color: "#f0f0f0" }}>Bristol, UK</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </SectionWrapper>
  );
}
