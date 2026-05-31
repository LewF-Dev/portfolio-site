import type { Palette, FontPairing, Density } from "@/types/template"

// CSS variable values per palette
// Variables: --t-bg, --t-surface, --t-accent, --t-text, --t-muted, --t-border
export const PALETTES: Record<Palette, {
  bg: string
  surface: string
  accent: string
  text: string
  muted: string
  border: string
  label: string
  dark: boolean // true = dark bg, false = light bg
}> = {
  obsidian: {
    bg: "#0d0d0f", surface: "#111118", accent: "#d4a84b",
    text: "#e8e8f0", muted: "#606070", border: "rgba(255,255,255,0.08)",
    label: "Obsidian", dark: true,
  },
  arctic: {
    bg: "#f0f4f8", surface: "#ffffff", accent: "#3b82f6",
    text: "#0f172a", muted: "#64748b", border: "rgba(0,0,0,0.08)",
    label: "Arctic", dark: false,
  },
  ember: {
    bg: "#1a0a00", surface: "#2d1200", accent: "#f97316",
    text: "#fef3e8", muted: "#a16207", border: "rgba(255,255,255,0.08)",
    label: "Ember", dark: true,
  },
  forest: {
    bg: "#0f1a0f", surface: "#1a2e1a", accent: "#4ade80",
    text: "#e8f5e8", muted: "#4a7c59", border: "rgba(255,255,255,0.08)",
    label: "Forest", dark: true,
  },
  slate: {
    bg: "#0f172a", surface: "#1e293b", accent: "#818cf8",
    text: "#e2e8f0", muted: "#64748b", border: "rgba(255,255,255,0.08)",
    label: "Slate", dark: true,
  },
  rose: {
    bg: "#1a0a0f", surface: "#2d1520", accent: "#f43f5e",
    text: "#fce8ec", muted: "#9f1239", border: "rgba(255,255,255,0.08)",
    label: "Rose", dark: true,
  },
  sand: {
    bg: "#faf7f2", surface: "#f0ebe0", accent: "#92400e",
    text: "#1c1917", muted: "#78716c", border: "rgba(0,0,0,0.08)",
    label: "Sand", dark: false,
  },
  void: {
    bg: "#000000", surface: "#0a0a0a", accent: "#ffffff",
    text: "#ffffff", muted: "#525252", border: "rgba(255,255,255,0.1)",
    label: "Void", dark: true,
  },
  ocean: {
    bg: "#0a1628", surface: "#0f2040", accent: "#38bdf8",
    text: "#e0f2fe", muted: "#475569", border: "rgba(255,255,255,0.08)",
    label: "Ocean", dark: true,
  },
  chalk: {
    bg: "#fafafa", surface: "#f5f5f5", accent: "#171717",
    text: "#171717", muted: "#737373", border: "rgba(0,0,0,0.08)",
    label: "Chalk", dark: false,
  },
}

// Font pairings — heading font + body font + Google Fonts import names
export const FONT_PAIRINGS: Record<FontPairing, {
  heading: string
  body: string
  headingVar: string // CSS font-family value
  bodyVar: string
  googleFonts: string // URL fragment for Google Fonts API
  label: string
  description: string
}> = {
  sharp: {
    heading: "Space Grotesk", body: "Inter",
    headingVar: "'Space Grotesk', sans-serif",
    bodyVar: "'Inter', sans-serif",
    googleFonts: "family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600",
    label: "Sharp", description: "Modern tech",
  },
  editorial: {
    heading: "Fraunces", body: "Libre Baskerville",
    headingVar: "'Fraunces', serif",
    bodyVar: "'Libre Baskerville', serif",
    googleFonts: "family=Fraunces:wght@400;600;700&family=Libre+Baskerville:wght@400;700",
    label: "Editorial", description: "Premium editorial",
  },
  humanist: {
    heading: "Lora", body: "Source Sans 3",
    headingVar: "'Lora', serif",
    bodyVar: "'Source Sans 3', sans-serif",
    googleFonts: "family=Lora:wght@400;600;700&family=Source+Sans+3:wght@400;600",
    label: "Humanist", description: "Warm, readable",
  },
  geometric: {
    heading: "DM Sans", body: "DM Sans",
    headingVar: "'DM Sans', sans-serif",
    bodyVar: "'DM Sans', sans-serif",
    googleFonts: "family=DM+Sans:wght@400;500;600;700",
    label: "Geometric", description: "Clean, Swiss",
  },
  expressive: {
    heading: "Playfair Display", body: "Raleway",
    headingVar: "'Playfair Display', serif",
    bodyVar: "'Raleway', sans-serif",
    googleFonts: "family=Playfair+Display:wght@400;600;700&family=Raleway:wght@400;500;600",
    label: "Expressive", description: "Elegant, fashion",
  },
  mono: {
    heading: "JetBrains Mono", body: "Inter",
    headingVar: "'JetBrains Mono', monospace",
    bodyVar: "'Inter', sans-serif",
    googleFonts: "family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500",
    label: "Mono", description: "Developer, raw",
  },
  slab: {
    heading: "Roboto Slab", body: "Roboto",
    headingVar: "'Roboto Slab', serif",
    bodyVar: "'Roboto', sans-serif",
    googleFonts: "family=Roboto+Slab:wght@400;600;700&family=Roboto:wght@400;500",
    label: "Slab", description: "Solid, corporate",
  },
  minimal: {
    heading: "Outfit", body: "Outfit",
    headingVar: "'Outfit', sans-serif",
    bodyVar: "'Outfit', sans-serif",
    googleFonts: "family=Outfit:wght@300;400;500;600;700",
    label: "Minimal", description: "Neutral, versatile",
  },
}

// Density — maps to CSS spacing multipliers
export const DENSITY_TOKENS: Record<Density, {
  sectionPad: string   // top/bottom padding on sections
  gap: string          // gap between elements
  cardPad: string      // padding inside cards
  lineHeight: string   // body line height
  label: string
}> = {
  compact: {
    sectionPad: "3rem", gap: "1.5rem", cardPad: "1.25rem",
    lineHeight: "1.5", label: "Compact",
  },
  balanced: {
    sectionPad: "5rem", gap: "2.5rem", cardPad: "2rem",
    lineHeight: "1.7", label: "Balanced",
  },
  spacious: {
    sectionPad: "8rem", gap: "4rem", cardPad: "3rem",
    lineHeight: "1.9", label: "Spacious",
  },
}

// Builds a CSS variables string from a config — injected as inline style on the template wrapper
export function buildCSSVars(palette: Palette, fontPairing: FontPairing, density: Density): React.CSSProperties {
  const p = PALETTES[palette]
  const f = FONT_PAIRINGS[fontPairing]
  const d = DENSITY_TOKENS[density]

  return {
    "--t-bg": p.bg,
    "--t-surface": p.surface,
    "--t-accent": p.accent,
    "--t-text": p.text,
    "--t-muted": p.muted,
    "--t-border": p.border,
    "--t-font-heading": f.headingVar,
    "--t-font-body": f.bodyVar,
    "--t-section-pad": d.sectionPad,
    "--t-gap": d.gap,
    "--t-card-pad": d.cardPad,
    "--t-line-height": d.lineHeight,
  } as React.CSSProperties
}
