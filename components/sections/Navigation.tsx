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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "rgba(13,13,15,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ maxWidth: "90rem", margin: "0 auto", padding: "0 2.5rem", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", height: "5rem" }}>

          {/* Logo — left */}
          <Link href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none", justifyContent: "flex-start" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mordax-labs-logo.png"
              alt="Mordax Labs"
              style={{ height: "3.5rem", width: "auto", objectFit: "contain", display: "block" }}
            />
          </Link>

          {/* Nav links — centre */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} style={{ padding: "0.5rem 0.875rem", fontSize: "0.875rem", color: "#a0a0b0", textDecoration: "none", borderRadius: "0.375rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f0f0f0")}
                onMouseLeave={e => (e.currentTarget.style.color = "#a0a0b0")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA — right */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link href="#contact" style={{ background: "#c9a84c", color: "#0d0d0f", padding: "0.6rem 1.25rem", borderRadius: "0.5rem", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#dfc278")}
              onMouseLeave={e => (e.currentTarget.style.background = "#c9a84c")}
            >
              Start a Project
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile menu — hidden for now, desktop first */}
    </>
  );
}


