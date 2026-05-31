"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.4s ease",
      background: scrolled ? "rgba(10,10,12,0.85)" : "rgba(10,10,12,0.6)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
    }}>
      <div style={{
        maxWidth: "90rem", margin: "0 auto",
        padding: "0 2.5rem",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        height: "5rem",
      }}>

        {/* Logo */}
        <Link href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none", justifyContent: "flex-start" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mordax-labs-logo.png"
            alt="Mordax Labs"
            style={{ height: "3.5rem", width: "auto", objectFit: "contain", display: "block" }}
          />
        </Link>

        {/* Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.125rem" }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                position: "relative",
                padding: "0.5rem 1rem",
                fontSize: "0.8rem",
                letterSpacing: "0.04em",
                color: activeLink === link.href ? "#f0f0f0" : "#8a8a9a",
                textDecoration: "none",
                transition: "color 0.2s",
                fontWeight: 400,
              }}
              onMouseEnter={e => {
                setActiveLink(link.href);
                (e.currentTarget as HTMLAnchorElement).style.color = "#f0f0f0";
              }}
              onMouseLeave={e => {
                setActiveLink(null);
                (e.currentTarget as HTMLAnchorElement).style.color = "#8a8a9a";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <Link
            href="#contact"
            style={{
              position: "relative",
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
              transition: "all 0.2s ease",
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
      </div>
    </header>
  );
}
