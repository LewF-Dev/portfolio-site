"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  // Slowly pulse the glow
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.008;
      const scale = 1 + Math.sin(t) * 0.08;
      const opacity = 0.12 + Math.sin(t * 0.7) * 0.04;
      el.style.transform = `scale(${scale})`;
      el.style.opacity = String(opacity);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "0 2rem" }}>

      {/* Animated glow */}
      <div ref={glowRef} aria-hidden="true" style={{
        pointerEvents: "none", position: "absolute", top: "-10%", left: "50%",
        transform: "translateX(-50%)",
        width: "80vw", height: "70vh",
        background: "radial-gradient(ellipse at center, rgba(74,127,165,0.18) 0%, rgba(74,127,165,0.06) 40%, transparent 70%)",
        transition: "none",
        willChange: "transform, opacity",
      }} />

      {/* Secondary accent glow */}
      <div aria-hidden="true" style={{
        pointerEvents: "none", position: "absolute", bottom: "10%", right: "15%",
        width: "30vw", height: "30vh",
        background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
        animation: "glowPulse 6s ease-in-out infinite alternate",
      }} />

      {/* Grid texture */}
      <div aria-hidden="true" style={{ pointerEvents: "none", position: "absolute", inset: 0, zIndex: 0, opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "88rem", margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

        {/* Logo — fades in first */}
        <div style={{ marginBottom: "2.5rem", animation: "fadeDown 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/mordax-labs-logo.png" alt="Mordax Labs"
            style={{ height: "auto", width: "clamp(320px, 38vw, 500px)", objectFit: "contain", display: "block" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ animation: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.4s both" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.375rem 1rem", borderRadius: "9999px", border: "1px solid rgba(74,127,165,0.3)", background: "rgba(74,127,165,0.08)", color: "#6399be", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
              Custom Web Development
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-syne), system-ui, sans-serif", fontSize: "clamp(2.25rem, 5.5vw, 4rem)", fontWeight: 700, color: "#f0f0f0", lineHeight: 1.05, letterSpacing: "-0.02em", maxWidth: "52rem", textAlign: "center", animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s both" }}>
            Your site.{" "}
            <span style={{ color: "#4a7fa5" }}>Built right.</span>
            <br />
            <span style={{ color: "#c9a84c" }}>Built to last.</span>
          </h1>

          <p style={{ color: "#a0a0b0", fontSize: "1.1rem", maxWidth: "36rem", lineHeight: 1.7, textAlign: "center", animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.7s both" }}>
            Mordax Labs designs and builds custom websites for businesses that
            want to stand out — with a companion app so you stay in control after launch.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.5rem", animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.85s both" }}>
            <a href="/contact"
              style={{ background: "linear-gradient(135deg, #e8b84b 0%, #d4a84b 25%, #c9a84c 50%, #d4a84b 75%, #e8b84b 100%)", backgroundSize: "300% 300%", animation: "ctaFlow 6s ease-in-out infinite", color: "#0d0d0f", padding: "0.875rem 2rem", borderRadius: "0.5rem", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", boxShadow: "0 4px 16px rgba(201,168,76,0.3)", transition: "transform 0.2s ease, box-shadow 0.2s ease", display: "inline-block" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(201,168,76,0.45)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(201,168,76,0.3)"; }}
            >
              Start a Project
            </a>
            <a href="/work"
              style={{ background: "transparent", color: "#f0f0f0", padding: "0.875rem 2rem", borderRadius: "0.5rem", fontSize: "0.9rem", fontWeight: 500, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", transition: "border-color 0.2s ease, background 0.2s ease", display: "inline-block" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.35)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              See the Work
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes glowPulse {
          from { opacity: 0.4; transform: scale(1); }
          to { opacity: 0.8; transform: scale(1.15); }
        }
        @keyframes ctaFlow {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
