"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateIn from "@/components/ui/AnimateIn";
import { signatureradio, placeholder1, placeholder2, placeholder3 } from "@/lib/screenshots";

const projects = [
  {
    id: "sig",
    name: "Signature Radio",
    url: "signatureradio.uk",
    href: "https://www.signatureradio.uk",
    category: "Music & Broadcasting",
    description: "A full-stack web presence for an independent UK radio station — live stream integration, dynamic show schedules, and a CMS the team runs themselves.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    img: signatureradio,
    live: true,
  },
  {
    id: "alpha",
    name: "Project Alpha",
    url: "example-alpha.com",
    href: null,
    category: "E-Commerce",
    description: "Placeholder — a custom storefront built for a boutique retailer. Fast, accessible, and fully managed through the companion app.",
    tags: ["Next.js", "Stripe", "Sanity", "Tailwind"],
    img: placeholder1,
    live: false,
  },
  {
    id: "beta",
    name: "Project Beta",
    url: "example-beta.com",
    href: null,
    category: "Professional Services",
    description: "Placeholder — a lead-generation site for a consultancy firm. Clean design, fast load times, and a contact flow that converts.",
    tags: ["Next.js", "TypeScript", "Resend", "Motion"],
    img: placeholder2,
    live: false,
  },
  {
    id: "gamma",
    name: "Project Gamma",
    url: "example-gamma.com",
    href: null,
    category: "Hospitality",
    description: "Placeholder — a booking and events site for a venue. Integrated calendar, gallery, and a CMS the client updates themselves.",
    tags: ["Next.js", "Supabase", "Tailwind", "Motion"],
    img: placeholder3,
    live: false,
  },
];

const CYCLE_MS = 5000;
const ease = [0.22, 1, 0.36, 1] as const;

export default function Work() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDir(1);
    setActive(a => (a + 1) % projects.length);
  }, []);

  const prev = useCallback(() => {
    setDir(-1);
    setActive(a => (a - 1 + projects.length) % projects.length);
  }, []);

  const goTo = useCallback((i: number, current: number) => {
    setDir(i > current ? 1 : -1);
    setActive(i);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, CYCLE_MS);
    return () => clearInterval(t);
  }, [paused, next]);

  const p = projects[active];

  return (
    <SectionWrapper id="work" style={{ background: "#13131a" }}>
      <AnimateIn style={{ marginBottom: "4rem", maxWidth: "36rem" }}>
        <p style={{ color: "#4a7fa5", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>The Work</p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", lineHeight: 1.1, marginBottom: "1rem" }}>
          Proof, not promises
        </h2>
        <p style={{ color: "#a0a0b0", fontSize: "1.1rem", lineHeight: 1.7 }}>Real sites, built for real clients.</p>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div style={{ borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0f", overflow: "hidden" }}>

            {/* Screenshot */}
            <div style={{ position: "relative", paddingBottom: "56.25%", overflow: "hidden", background: "#0a0a0f" }}>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={p.id}
                  custom={dir}
                  variants={{
                    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease }}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                >
                  <img src={p.img} alt={p.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                </motion.div>
              </AnimatePresence>

              {p.live && (
                <div style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 2, background: "rgba(13,13,15,0.7)", backdropFilter: "blur(6px)", borderRadius: "2rem", padding: "0.3rem 0.85rem", border: "1px solid rgba(74,127,165,0.35)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span style={{ width: "0.4rem", height: "0.4rem", borderRadius: "50%", background: "#4a7fa5", display: "inline-block" }} />
                  <span style={{ fontSize: "0.7rem", color: "#4a7fa5" }}>Live</span>
                </div>
              )}
              <div style={{ position: "absolute", top: "1rem", right: "1rem", zIndex: 2, background: "rgba(13,13,15,0.7)", backdropFilter: "blur(6px)", borderRadius: "2rem", padding: "0.3rem 0.85rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: "0.7rem", color: "#a0a0b0", fontFamily: "monospace" }}>{p.url}</span>
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: "1.75rem 2rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem", minHeight: "9rem" }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <AnimatePresence mode="wait">
                  <motion.div key={p.id + "-info"} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease }}>
                    <p style={{ fontSize: "0.7rem", color: "#606070", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{p.category}</p>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-syne), system-ui, sans-serif", marginBottom: "0.6rem" }}>{p.name}</h3>
                    <p style={{ color: "#a0a0b0", fontSize: "0.875rem", lineHeight: 1.7 }}>{p.description}</p>
                    {p.href && (
                      <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", marginTop: "1rem", color: "#4a7fa5", fontSize: "0.8rem", textDecoration: "none" }}>
                        Visit site
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      </a>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div style={{ flexShrink: 0 }}>
                <AnimatePresence mode="wait">
                  <motion.div key={p.id + "-tags"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, delay: 0.05 }} style={{ display: "flex", flexDirection: "column", gap: "0.4rem", alignItems: "flex-end" }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ padding: "0.2rem 0.7rem", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.08)", color: "#606070", fontSize: "0.75rem", whiteSpace: "nowrap" }}>{tag}</span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.25rem", marginTop: "1.5rem" }}>
            <button onClick={prev} aria-label="Previous" style={{ width: "2.25rem", height: "2.25rem", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", color: "#a0a0b0", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {projects.map((proj, i) => (
                <button key={proj.id} onClick={() => goTo(i, active)} aria-label={`Project ${i + 1}`}
                  style={{ width: i === active ? "1.5rem" : "0.5rem", height: "0.5rem", borderRadius: "9999px", background: i === active ? "#4a7fa5" : "rgba(255,255,255,0.18)", border: "none", cursor: "pointer", padding: 0, transition: "width 0.3s ease, background 0.3s ease" }} />
              ))}
            </div>
            <button onClick={next} aria-label="Next" style={{ width: "2.25rem", height: "2.25rem", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", color: "#a0a0b0", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.2} style={{ marginTop: "3rem", textAlign: "center" }}>
        <p style={{ color: "#606070", fontSize: "0.875rem" }}>More case studies added as client work is completed.</p>
      </AnimateIn>
    </SectionWrapper>
  );
}
