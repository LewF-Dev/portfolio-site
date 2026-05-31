"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateIn from "@/components/ui/AnimateIn";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", budget: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Formspree or similar can be wired up here
    await new Promise(r => setTimeout(r, 1200));
    setStatus("sent");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.875rem 1rem", borderRadius: "0.5rem",
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    color: "#f0f0f0", fontSize: "0.9rem", outline: "none",
    transition: "border-color 0.2s ease, background 0.2s ease",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "0.75rem", color: "#a0a0b0",
    letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem", fontWeight: 500,
  };

  return (
    <SectionWrapper id="contact" style={{ background: "#13131a" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>

        <AnimateIn>
          <p style={{ color: "#4a7fa5", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>Contact</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Let&apos;s build something worth having
          </h2>
          <p style={{ color: "#a0a0b0", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Tell me about your project. I&apos;ll get back to you within one business day with honest thoughts on what you need and what it&apos;ll cost.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", value: "lewis@mordaxlabs.com" },
              { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Location", value: "Bristol, UK" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", background: "rgba(74,127,165,0.08)", border: "1px solid rgba(74,127,165,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a7fa5" strokeWidth="1.5">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "0.7rem", color: "#606070", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.label}</p>
                  <p style={{ fontSize: "0.9rem", color: "#c0c0d0", marginTop: "0.1rem" }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          {status === "sent" ? (
            <div style={{ padding: "3rem 2rem", borderRadius: "1.25rem", border: "1px solid rgba(74,127,165,0.2)", background: "rgba(74,127,165,0.05)", textAlign: "center" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(74,127,165,0.12)", border: "1px solid rgba(74,127,165,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a7fa5" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", marginBottom: "0.75rem" }}>Message sent</h3>
              <p style={{ color: "#a0a0b0", fontSize: "0.9rem", lineHeight: 1.7 }}>I&apos;ll get back to you within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input required type="text" placeholder="Your name" value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "rgba(74,127,165,0.5)"; (e.target as HTMLInputElement).style.background = "rgba(255,255,255,0.06)"; }}
                    onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLInputElement).style.background = "rgba(255,255,255,0.04)"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input required type="email" placeholder="your@email.com" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "rgba(74,127,165,0.5)"; (e.target as HTMLInputElement).style.background = "rgba(255,255,255,0.06)"; }}
                    onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLInputElement).style.background = "rgba(255,255,255,0.04)"; }}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Budget</label>
                <select value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={e => { (e.target as HTMLSelectElement).style.borderColor = "rgba(74,127,165,0.5)"; }}
                  onBlur={e => { (e.target as HTMLSelectElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                >
                  <option value="" style={{ background: "#13131a" }}>Select a budget range</option>
                  <option value="under-800" style={{ background: "#13131a" }}>Under £800</option>
                  <option value="800-1500" style={{ background: "#13131a" }}>£800 – £1,500</option>
                  <option value="1500-3000" style={{ background: "#13131a" }}>£1,500 – £3,000</option>
                  <option value="3000+" style={{ background: "#13131a" }}>£3,000+</option>
                  <option value="unsure" style={{ background: "#13131a" }}>Not sure yet</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea required placeholder="Tell me about your project..." value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(74,127,165,0.5)"; (e.target as HTMLTextAreaElement).style.background = "rgba(255,255,255,0.06)"; }}
                  onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLTextAreaElement).style.background = "rgba(255,255,255,0.04)"; }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  padding: "0.875rem 2rem", borderRadius: "0.5rem", border: "none",
                  background: "linear-gradient(135deg, #d4a84b, #b8922a)",
                  color: "#0d0d0f", fontSize: "0.9rem", fontWeight: 600,
                  cursor: status === "sending" ? "wait" : "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: "0 4px 16px rgba(201,168,76,0.3)",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
                onMouseEnter={e => { if (status !== "sending") { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(201,168,76,0.45)"; }}}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(201,168,76,0.3)"; }}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </AnimateIn>
      </div>
    </SectionWrapper>
  );
}
