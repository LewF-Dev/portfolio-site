"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateIn from "@/components/ui/AnimateIn";
import { slideInLeft, slideInRight } from "@/lib/motion";
import Link from "next/link";

const budgetOptions = ["Under £800", "£800 – £1,800", "£1,800 – £3,500", "£3,500+", "Not sure yet"];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#0d0d0f",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "0.5rem",
  padding: "0.75rem 1rem",
  fontSize: "0.875rem",
  color: "#f0f0f0",
  outline: "none",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.7rem",
  color: "#606070",
  letterSpacing: "0.08em",
  marginBottom: "0.5rem",
  textTransform: "uppercase" as const,
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" style={{ background: "#13131a" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}>

        {/* Left */}
        <AnimateIn variants={slideInLeft}>
          <p style={{ color: "#4a7fa5", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>Contact</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Let's build something worth building
          </h2>
          <p style={{ color: "#a0a0b0", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            Tell me about your project. I'll get back to you within 48 hours with thoughts, questions, and next steps.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              {
                label: "Email",
                value: "lewis@mordaxlabs.com",
                href: "mailto:lewis@mordaxlabs.com",
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
              },
              {
                label: "GitHub",
                value: "github.com/LewF-Dev",
                href: "https://github.com/LewF-Dev",
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
              },
              {
                label: "LinkedIn",
                value: "Lewis Freeman",
                href: "https://www.linkedin.com/in/lewis-freeman-89230a310/",
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
              },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", background: "rgba(74,127,165,0.1)", border: "1px solid rgba(74,127,165,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4a7fa5", flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "#606070", marginBottom: "0.2rem" }}>{item.label}</div>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: "#f0f0f0", fontSize: "0.875rem", textDecoration: "none" }}>{item.value}</a>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Right — form */}
        <AnimateIn variants={slideInRight} delay={0.1}>
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "1rem", textAlign: "center", padding: "4rem 0" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "50%", background: "rgba(74,127,165,0.1)", border: "1px solid rgba(74,127,165,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4a7fa5" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif" }}>Message sent</h3>
              <p style={{ color: "#a0a0b0", fontSize: "0.875rem" }}>I'll get back to you within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input name="name" type="text" required placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input name="email" type="email" required placeholder="your@email.com" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Project brief</label>
                <textarea name="brief" required rows={5} placeholder="Tell me about your project — what you need, what you're trying to achieve, and any details that matter." style={{ ...inputStyle, resize: "none" }} />
              </div>
              <div>
                <label style={labelStyle}>Budget range <span style={{ color: "#606070", textTransform: "none" }}>(optional)</span></label>
                <select name="budget" style={{ ...inputStyle, cursor: "pointer", color: "#a0a0b0" }}>
                  <option value="">Select a range</option>
                  {budgetOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <button type="submit" style={{ background: "#c9a84c", color: "#0d0d0f", border: "none", borderRadius: "0.5rem", padding: "0.875rem 1.5rem", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-inter), system-ui, sans-serif", transition: "background 0.2s" }}>
                Send Message
              </button>
            </form>
          )}
        </AnimateIn>
      </div>
    </SectionWrapper>
  );
}
