// Core config object — serialised on form submission and used to build the real site

export type LayoutVariant = "centered" | "split" | "editorial" | "bold"

export type FontPairing =
  | "sharp"       // Space Grotesk + Inter
  | "editorial"   // Fraunces + Libre Baskerville
  | "humanist"    // Lora + Source Sans 3
  | "geometric"   // DM Sans + DM Sans
  | "expressive"  // Playfair Display + Raleway
  | "mono"        // JetBrains Mono + Inter
  | "slab"        // Roboto Slab + Roboto
  | "minimal"     // Outfit + Outfit

export type Palette =
  | "obsidian"  // Dark luxury
  | "arctic"    // Clean corporate
  | "ember"     // Warm bold
  | "forest"    // Natural sustainable
  | "slate"     // Professional tech
  | "rose"      // Bold fashion
  | "sand"      // Earthy artisan
  | "void"      // Stark minimal
  | "ocean"     // Deep trustworthy
  | "chalk"     // Pure minimal light

export type Density = "compact" | "balanced" | "spacious"

export type SectionKey =
  | "hero"
  | "about"
  | "services"
  | "portfolio"
  | "testimonials"
  | "contact"

export type PresetKey = "futuristic" | "editorial" | "warm" | "bold"

export interface TemplateConfig {
  preset: PresetKey | null
  layout: LayoutVariant
  fontPairing: FontPairing
  palette: Palette
  density: Density
  sections: SectionKey[]
}

// Default config — shown on first load before any selection
export const DEFAULT_CONFIG: TemplateConfig = {
  preset: "futuristic",
  layout: "split",
  fontPairing: "sharp",
  palette: "obsidian",
  density: "balanced",
  sections: ["hero", "about", "services", "portfolio", "testimonials", "contact"],
}
