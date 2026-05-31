"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const breatheKeyframes = `
@keyframes ctaFlow {
  0%   { background-position: 0% 0%;   box-shadow: 0 0 8px 2px rgba(212,168,75,0.2), 0 2px 16px rgba(184,146,42,0.12); }
  25%  { background-position: 60% 40%; box-shadow: 0 0 12px 3px rgba(240,192,96,0.25), 0 2px 20px rgba(212,168,75,0.15); }
  50%  { background-position: 100% 100%; box-shadow: 0 0 8px 2px rgba(212,168,75,0.2), 0 2px 16px rgba(184,146,42,0.12); }
  75%  { background-position: 40% 60%; box-shadow: 0 0 14px 4px rgba(240,192,96,0.22), 0 2px 18px rgba(212,168,75,0.14); }
  100% { background-position: 0% 0%;   box-shadow: 0 0 8px 2px rgba(212,168,75,0.2), 0 2px 16px rgba(184,146,42,0.12); }
}
`;

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Process", href: "/how-it-works" },
  { label: "Templates", href: "/templates" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <style>{breatheKeyframes}</style>
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
      background: scrolled ? "rgba(10,10,12,0.75)" : "rgba(10,10,12,0.4)",
      backdropFilter: "blur(24px) saturate(180%)",
      WebkitBackdropFilter: "blur(24px) saturate(180%)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      boxShadow: scrolled ? "0 1px 40px rgba(0,0,0,0.4)" : "none",
    }}>
      <div style={{
        maxWidth: "90rem", margin: "0 auto",
        padding: "0 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "5.5rem",
      }}>

        {/* Left: logo + nav links together */}
        <div style={{ display: "flex", alignItems: "center", gap: "3rem", marginLeft: "-100px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mordax-labs-logo.png"
              alt="Mordax Labs"
              style={{ height: "4.75rem", width: "auto", objectFit: "contain", display: "block", marginBottom: "10px" }}
            />
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem", paddingTop: "20px" }}>
            {navLinks.map(link => {
              // Match /how-it-works#pricing as active when on /how-it-works
              const isActive = link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("#")[0]);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "0.45rem 0.9rem",
                    fontSize: "0.8rem",
                    letterSpacing: "0.03em",
                    color: isActive ? "#d4a84b" : "#8a8a9a",
                    textDecoration: "none",
                    fontWeight: isActive ? 600 : 400,
                    borderRadius: "0.375rem",
                    position: "relative",
                    transition: "color 0.2s",
                    textShadow: isActive ? "0 0 12px rgba(212,168,75,0.5)" : "none",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#f0f0f0";
                  }}
                  onMouseLeave={e => {
                    if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#8a8a9a";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "0.9rem",
                      right: "0.9rem",
                      height: "2px",
                      borderRadius: "1px",
                      background: "linear-gradient(90deg, #d4a84b, #b8922a)",
                      boxShadow: "0 0 8px rgba(212,168,75,0.6)",
                    }} />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: CTA */}
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.65rem 1.5rem",
            borderRadius: "0.6rem",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textDecoration: "none",
            color: "#1a0e00",
            // Glass base — translucent amber
            background: "linear-gradient(135deg, rgba(240,192,80,0.82) 0%, rgba(212,148,30,0.75) 40%, rgba(240,180,60,0.80) 70%, rgba(212,168,75,0.78) 100%)",
            backgroundSize: "300% 300%",
            backdropFilter: "blur(12px) saturate(160%)",
            WebkitBackdropFilter: "blur(12px) saturate(160%)",
            // Layered border: bright top edge + subtle outer ring
            border: "1px solid rgba(255,220,100,0.45)",
            outline: "1px solid rgba(180,120,20,0.2)",
            outlineOffset: "1px",
            animation: "ctaFlow 8s ease-in-out infinite",
            marginRight: "-60px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top-half gloss — convex glass highlight */}
          <span style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "52%",
            background: "linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.06) 100%)",
            borderRadius: "0.6rem 0.6rem 40% 40% / 0.6rem 0.6rem 20px 20px",
            pointerEvents: "none",
          }} />
          {/* Inner shimmer line just below top edge */}
          <span style={{
            position: "absolute",
            top: "1px", left: "12%", right: "12%",
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.7) 60%, transparent 100%)",
            pointerEvents: "none",
          }} />
          {/* Bottom inner shadow — depth */}
          <span style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "35%",
            background: "linear-gradient(0deg, rgba(120,70,0,0.18) 0%, transparent 100%)",
            pointerEvents: "none",
          }} />
          <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Start a Project
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </header>
    </>
  );
}
