"use client";

import Link from "next/link";

const links = [
  { label: "Work", href: "/work" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Templates", href: "/templates" },
  { label: "Pricing", href: "/how-it-works#pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0d0d0f", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "3rem 2.5rem" }}>
      <div style={{ maxWidth: "88rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mordax-labs-logo.png" alt="Mordax Labs" style={{ height: "2.5rem", width: "auto", display: "block", opacity: 0.85 }} />
          </Link>

          <nav style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
            {links.map(l => (
              <Link key={l.href} href={l.href}
                style={{ padding: "0.4rem 0.875rem", fontSize: "0.8rem", color: "#606070", textDecoration: "none", borderRadius: "0.375rem", transition: "color 0.2s ease" }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#a0a0b0"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#606070"}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact"
            style={{ padding: "0.6rem 1.25rem", borderRadius: "0.5rem", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", color: "#0d0d0f", background: "linear-gradient(135deg, #d4a84b, #b8922a)", transition: "box-shadow 0.2s ease, transform 0.2s ease", boxShadow: "0 2px 8px rgba(201,168,76,0.2)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(201,168,76,0.4)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 8px rgba(201,168,76,0.2)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            Start a Project
          </Link>
        </div>

        <div style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.75rem", color: "#404050" }}>
            © {new Date().getFullYear()} Mordax Labs. All rights reserved.
          </p>
          <p style={{ fontSize: "0.75rem", color: "#404050" }}>
            Built by Mordax Labs — Bristol, UK
          </p>
        </div>
      </div>
    </footer>
  );
}
