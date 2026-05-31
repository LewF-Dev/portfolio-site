import type { TemplateConfig, PresetKey } from "@/types/template"

// Presets are starting points only — every control remains independently editable after selection
export const PRESETS: Record<PresetKey, Omit<TemplateConfig, "preset" | "sections">> = {
  futuristic: {
    layout: "split",
    fontPairing: "sharp",
    palette: "obsidian",
    density: "compact",
  },
  editorial: {
    layout: "editorial",
    fontPairing: "editorial",
    palette: "chalk",
    density: "spacious",
  },
  warm: {
    layout: "centered",
    fontPairing: "humanist",
    palette: "sand",
    density: "balanced",
  },
  bold: {
    layout: "bold",
    fontPairing: "geometric",
    palette: "ember",
    density: "compact",
  },
}

export const PRESET_LABELS: Record<PresetKey, { label: string; description: string }> = {
  futuristic: { label: "Futuristic", description: "Tech, dark, sharp" },
  editorial:  { label: "Editorial",  description: "High-end, magazine-feel" },
  warm:       { label: "Warm",       description: "Approachable, story-led" },
  bold:       { label: "Bold",       description: "High energy, conversion-focused" },
}
