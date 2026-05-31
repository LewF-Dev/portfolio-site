"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const breatheKeyframes = `
@keyframes ctaBreathe {
  0%   { box-shadow: 0 0 10px 2px rgba(212,168,75,0.35), 0 0 24px 4px rgba(184,146,42,0.2); background-position: 0% 50%; }
  50%  { box-shadow: 0 0 18px 6px rgba(212,168,75,0.6), 0 0 40px 10px rgba(184,146,42,0.3); background-position: 100% 50%; }
  100% { box-shadow: 0 0 10px 2px rgba(212,168,75,0.35), 0 0 24px 4px rgba(184,146,42,0.2); background-position: 0% 50%; }
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
            borderRadius: "0.5rem",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textDecoration: "none",
            color: "#0d0d0f",
            background: "linear-gradient(270deg, #f0c060, #d4a84b, #b8922a, #d4a84b, #f0c060)",
            backgroundSize: "300% 300%",
            animation: "ctaBreathe 3s ease-in-out infinite",
            marginRight: "-60px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Gloss overlay — top half highlight */}
          <span style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "50%",
            background: "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.04) 100%)",
            borderRadius: "0.5rem 0.5rem 0 0",
            pointerEvents: "none",
          }} />
          {/* Gloss shimmer line */}
          <span style={{
            position: "absolute",
            top: "1px", left: "8%", right: "8%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
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
