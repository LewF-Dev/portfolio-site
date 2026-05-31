"use client"

import { useState, useCallback } from "react"
import type { TemplateConfig, PresetKey, LayoutVariant, FontPairing, Palette, Density, SectionKey } from "@/types/template"
import { DEFAULT_CONFIG } from "@/types/template"
import { PRESETS, PRESET_LABELS } from "@/lib/templatePresets"
import { PALETTES, FONT_PAIRINGS, DENSITY_TOKENS } from "@/lib/templateTokens"
import TemplatePreview from "./TemplatePreview"

const LAYOUTS: { value: LayoutVariant; label: string; description: string }[] = [
  { value: "split",     label: "Split",     description: "Content left, visual right" },
  { value: "centered",  label: "Centered",  description: "Everything centred, clean" },
  { value: "editorial", label: "Editorial", description: "Large type, asymmetric" },
  { value: "bold",      label: "Bold",      description: "Full-width, high impact" },
]

const SECTIONS: { key: SectionKey; label: string }[] = [
  { key: "hero",         label: "Hero" },
  { key: "about",        label: "About" },
  { key: "services",     label: "Services" },
  { key: "portfolio",    label: "Portfolio" },
  { key: "testimonials", label: "Testimonials" },
  { key: "contact",      label: "Contact" },
]

export default function TemplateCustomiser() {
  const [config, setConfig] = useState<TemplateConfig>(DEFAULT_CONFIG)

  const applyPreset = useCallback((key: PresetKey) => {
    setConfig(prev => ({ ...prev, preset: key, ...PRESETS[key] }))
  }, [])

  const set = useCallback(<K extends keyof TemplateConfig>(key: K, value: TemplateConfig[K]) => {
    setConfig(prev => ({ ...prev, preset: null, [key]: value }))
  }, [])

  const toggleSection = useCallback((key: SectionKey) => {
    setConfig(prev => {
      const has = prev.sections.includes(key)
      // Always keep at least one section
      if (has && prev.sections.length === 1) return prev
      return {
        ...prev,
        preset: null,
        sections: has ? prev.sections.filter(s => s !== key) : [...prev.sections, key],
      }
    })
  }, [])

  return (
    <div id="templates" style={{
      background: "#0a0a0c",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      overflowX: "hidden",
    }}>
      <div style={{
        maxWidth: "1400px", margin: "0 auto",
        padding: "4rem 2.5rem",
      }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={sectionLabel}>Live Customiser</p>
          <h2 style={{ fontFamily: "inherit", fontSize: "1.75rem", fontWeight: 700, color: "#e8e8f0", letterSpacing: "-0.02em" }}>
            Configure your site
          </h2>
          <p style={{ fontSize: "0.875rem", color: "#606070", marginTop: "0.5rem" }}>
            Every change updates the preview instantly. Mix and match freely — presets are just starting points.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 320px) minmax(0, 1fr)",
          gap: "2rem",
          alignItems: "start",
          minWidth: 0,
        }}>
          {/* ── Control Panel ── */}
          <div style={{
            background: "#111118",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "1rem",
            overflow: "hidden",
            position: "sticky",
            top: "5rem",
          }}>
            {/* Presets */}
            <PanelSection title="Start from a preset">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                {(Object.keys(PRESET_LABELS) as PresetKey[]).map(key => (
                  <button
                    key={key}
                    onClick={() => applyPreset(key)}
                    style={{
                      padding: "0.6rem 0.75rem", borderRadius: "0.5rem",
                      border: `1px solid ${config.preset === key ? "rgba(212,168,75,0.5)" : "rgba(255,255,255,0.08)"}`,
                      background: config.preset === key ? "rgba(212,168,75,0.1)" : "transparent",
                      color: config.preset === key ? "#d4a84b" : "#808090",
                      fontSize: "0.78rem", fontWeight: 600, cursor: "pointer",
                      textAlign: "left", transition: "all 0.15s ease",
                    }}
                  >
                    <div>{PRESET_LABELS[key].label}</div>
                    <div style={{ fontSize: "0.65rem", fontWeight: 400, marginTop: "0.15rem", opacity: 0.7 }}>
                      {PRESET_LABELS[key].description}
                    </div>
                  </button>
                ))}
              </div>
            </PanelSection>

            {/* Layout */}
            <PanelSection title="Layout">
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {LAYOUTS.map(l => (
                  <button
                    key={l.value}
                    onClick={() => set("layout", l.value)}
                    style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "0.6rem 0.875rem", borderRadius: "0.5rem",
                      border: `1px solid ${config.layout === l.value ? "rgba(212,168,75,0.5)" : "rgba(255,255,255,0.06)"}`,
                      background: config.layout === l.value ? "rgba(212,168,75,0.08)" : "transparent",
                      color: config.layout === l.value ? "#d4a84b" : "#808090",
                      fontSize: "0.8rem", cursor: "pointer", textAlign: "left",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{l.label}</span>
                    <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>{l.description}</span>
                  </button>
                ))}
              </div>
            </PanelSection>

            {/* Font Pairing */}
            <PanelSection title="Font Pairing">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem" }}>
                {(Object.keys(FONT_PAIRINGS) as FontPairing[]).map(key => {
                  const f = FONT_PAIRINGS[key]
                  const active = config.fontPairing === key
                  return (
                    <button
                      key={key}
                      onClick={() => set("fontPairing", key)}
                      style={{
                        padding: "0.6rem 0.75rem", borderRadius: "0.5rem",
                        border: `1px solid ${active ? "rgba(212,168,75,0.5)" : "rgba(255,255,255,0.06)"}`,
                        background: active ? "rgba(212,168,75,0.08)" : "transparent",
                        color: active ? "#d4a84b" : "#808090",
                        fontSize: "0.75rem", cursor: "pointer", textAlign: "left",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <div style={{ fontWeight: 600 }}>{f.label}</div>
                      <div style={{ fontSize: "0.65rem", opacity: 0.7, marginTop: "0.1rem" }}>{f.description}</div>
                    </button>
                  )
                })}
              </div>
            </PanelSection>

            {/* Palette */}
            <PanelSection title="Colour Palette">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "0.5rem" }}>
                {(Object.keys(PALETTES) as Palette[]).map(key => {
                  const p = PALETTES[key]
                  const active = config.palette === key
                  return (
                    <button
                      key={key}
                      onClick={() => set("palette", key)}
                      title={p.label}
                      style={{
                        display: "flex", flexDirection: "column", alignItems: "center",
                        gap: "0.35rem", padding: "0.5rem 0.25rem",
                        borderRadius: "0.5rem", cursor: "pointer",
                        border: `1px solid ${active ? "rgba(212,168,75,0.6)" : "rgba(255,255,255,0.06)"}`,
                        background: active ? "rgba(212,168,75,0.08)" : "transparent",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {/* Swatch */}
                      <div style={{
                        width: "28px", height: "28px", borderRadius: "50%",
                        background: `linear-gradient(135deg, ${p.bg} 50%, ${p.accent} 50%)`,
                        border: "1px solid rgba(255,255,255,0.1)",
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: "0.6rem", color: active ? "#d4a84b" : "#606070",
                        fontWeight: active ? 600 : 400, textAlign: "center",
                        lineHeight: 1.2,
                      }}>
                        {p.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </PanelSection>

            {/* Density */}
            <PanelSection title="Density">
              <div style={{ display: "flex", gap: "0.4rem" }}>
                {(Object.keys(DENSITY_TOKENS) as Density[]).map(key => {
                  const d = DENSITY_TOKENS[key]
                  const active = config.density === key
                  return (
                    <button
                      key={key}
                      onClick={() => set("density", key)}
                      style={{
                        flex: 1, padding: "0.6rem 0.5rem", borderRadius: "0.5rem",
                        border: `1px solid ${active ? "rgba(212,168,75,0.5)" : "rgba(255,255,255,0.06)"}`,
                        background: active ? "rgba(212,168,75,0.08)" : "transparent",
                        color: active ? "#d4a84b" : "#808090",
                        fontSize: "0.78rem", fontWeight: active ? 600 : 400,
                        cursor: "pointer", transition: "all 0.15s ease",
                      }}
                    >
                      {d.label}
                    </button>
                  )
                })}
              </div>
            </PanelSection>

            {/* Sections */}
            <PanelSection title="Sections" last>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {SECTIONS.map(({ key, label }) => {
                  const active = config.sections.includes(key)
                  return (
                    <button
                      key={key}
                      onClick={() => toggleSection(key)}
                      style={{
                        display: "flex", alignItems: "center", gap: "0.75rem",
                        padding: "0.5rem 0.75rem", borderRadius: "0.5rem",
                        border: "1px solid transparent",
                        background: "transparent", cursor: "pointer",
                        transition: "background 0.15s ease",
                      }}
                    >
                      {/* Checkbox */}
                      <div style={{
                        width: "16px", height: "16px", borderRadius: "0.25rem",
                        border: `1px solid ${active ? "#d4a84b" : "rgba(255,255,255,0.2)"}`,
                        background: active ? "#d4a84b" : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, transition: "all 0.15s ease",
                      }}>
                        {active && <span style={{ color: "#0d0d0f", fontSize: "0.6rem", fontWeight: 700 }}>✓</span>}
                      </div>
                      <span style={{
                        fontSize: "0.82rem", color: active ? "#c0c0d0" : "#505060",
                        fontWeight: active ? 500 : 400,
                      }}>
                        {label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </PanelSection>
          </div>

          {/* ── Preview ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TemplatePreview config={config} />

            {/* CTA */}
            <div style={{
              background: "#111118", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1rem", padding: "1.5rem 2rem",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              flexWrap: "wrap", gap: "1rem",
            }}>
              <div>
                <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#e8e8f0" }}>
                  Happy with this configuration?
                </p>
                <p style={{ fontSize: "0.8rem", color: "#606070", marginTop: "0.25rem" }}>
                  Submit your brief and we'll build it in 7 days.
                </p>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById("brief-form")
                  el?.scrollIntoView({ behavior: "smooth" })
                }}
                style={{
                  padding: "0.75rem 1.75rem", borderRadius: "0.5rem",
                  fontWeight: 600, fontSize: "0.875rem", border: "none",
                  cursor: "pointer", color: "#0d0d0f",
                  background: "linear-gradient(135deg, #d4a84b, #b8922a)",
                  boxShadow: "0 4px 16px rgba(212,168,75,0.25)",
                  whiteSpace: "nowrap",
                }}
              >
                Request This Build →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function PanelSection({ title, children, last = false }: {
  title: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <div style={{
      padding: "1.25rem 1.25rem",
      borderBottom: last ? "none" : "1px solid rgba(255,255,255,0.06)",
    }}>
      <p style={{
        fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
        textTransform: "uppercase", color: "#404050", marginBottom: "0.875rem",
      }}>
        {title}
      </p>
      {children}
    </div>
  )
}

const sectionLabel: React.CSSProperties = {
  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
  textTransform: "uppercase", color: "#d4a84b", marginBottom: "0.5rem",
}
