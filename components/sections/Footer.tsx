"use client";

import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/LewF-Dev",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lewis-freeman-89230a310/",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: "Email",
    href: "mailto:lewis@mordaxlabs.com",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0d0d0f" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>

          <div>
            <span style={{ fontFamily: "var(--font-syne), system-ui, sans-serif", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f0f0f0" }}>
              Mordax Labs
            </span>
            <p style={{ color: "#606070", fontSize: "0.75rem", marginTop: "0.4rem", maxWidth: "18rem" }}>
              Custom web development for businesses that want to stand out.
            </p>
          </div>

          <nav style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem 1.5rem" }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} style={{ fontSize: "0.875rem", color: "#606070", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f0f0f0")}
                onMouseLeave={e => (e.currentTarget.style.color = "#606070")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                style={{ color: "#606070", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f0f0f0")}
                onMouseLeave={e => (e.currentTarget.style.color = "#606070")}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ color: "#606070", fontSize: "0.75rem" }}>© {new Date().getFullYear()} Mordax Labs. All rights reserved.</p>
          <p style={{ color: "#606070", fontSize: "0.75rem" }}>Built by Mordax Labs</p>
        </div>
      </div>
    </footer>
  );
}
