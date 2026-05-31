export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "0 2rem" }}>

      <div aria-hidden="true" style={{ pointerEvents: "none", position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74,127,165,0.12) 0%, transparent 70%)" }} />
      <div aria-hidden="true" style={{ pointerEvents: "none", position: "absolute", inset: 0, zIndex: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "88rem", margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

        <div style={{ marginBottom: "2.5rem" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/mordax-labs-logo.png" alt="Mordax Labs"
            style={{ height: "auto", width: "clamp(320px, 38vw, 500px)", objectFit: "contain", display: "block" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.375rem 1rem", borderRadius: "9999px", border: "1px solid rgba(74,127,165,0.3)", background: "rgba(74,127,165,0.1)", color: "#6399be", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
            Custom Web Development
          </span>

          <h1 style={{ fontFamily: "var(--font-syne), system-ui, sans-serif", fontSize: "clamp(2.25rem, 5.5vw, 4rem)", fontWeight: 700, color: "#f0f0f0", lineHeight: 1.05, letterSpacing: "-0.02em", maxWidth: "52rem", textAlign: "center" }}>
            Your site.{" "}
            <span style={{ color: "#4a7fa5" }}>Built right.</span>
            <br />
            <span style={{ color: "#c9a84c" }}>Built to last.</span>
          </h1>

          <p style={{ color: "#a0a0b0", fontSize: "1.1rem", maxWidth: "36rem", lineHeight: 1.7, textAlign: "center" }}>
            Mordax Labs designs and builds custom websites for businesses that
            want to stand out — with a companion app so you stay in control after launch.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.5rem" }}>
            <a href="/contact" style={{ background: "linear-gradient(135deg, #d4a84b 0%, #c9a84c 50%, #b8922a 100%)", color: "#0d0d0f", padding: "0.875rem 2rem", borderRadius: "0.5rem", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-inter), system-ui, sans-serif", boxShadow: "0 4px 16px rgba(201,168,76,0.3)" }}>
              Start a Project
            </a>
            <a href="/work" style={{ background: "transparent", color: "#f0f0f0", padding: "0.875rem 2rem", borderRadius: "0.5rem", fontSize: "0.9rem", fontWeight: 500, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
              See the Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
