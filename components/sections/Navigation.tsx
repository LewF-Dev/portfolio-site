"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Templates", href: "/templates" },
  { label: "Pricing", href: "/how-it-works#pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mordax-labs-logo.png"
              alt="Mordax Labs"
              style={{ height: "4rem", width: "auto", objectFit: "contain", display: "block" }}
            />
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.45rem 0.9rem",
                  fontSize: "0.8rem",
                  letterSpacing: "0.03em",
                  color: "#8a8a9a",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontWeight: 400,
                  borderRadius: "0.375rem",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#f0f0f0"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#8a8a9a"}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: CTA */}
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.6rem 1.4rem",
            borderRadius: "0.5rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            textDecoration: "none",
            color: "#0d0d0f",
            background: "linear-gradient(135deg, #d4a84b 0%, #c9a84c 50%, #b8922a 100%)",
            boxShadow: "0 1px 0 rgba(255,255,255,0.15) inset, 0 4px 12px rgba(201,168,76,0.25)",
            transition: "box-shadow 0.2s ease, transform 0.2s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.15) inset, 0 6px 20px rgba(201,168,76,0.4)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.15) inset, 0 4px 12px rgba(201,168,76,0.25)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          Start a Project
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
