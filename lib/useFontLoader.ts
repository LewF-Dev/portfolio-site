"use client"

import { useEffect } from "react"
import { FONT_PAIRINGS } from "@/lib/templateTokens"
import type { FontPairing } from "@/types/template"

// Dynamically injects a Google Fonts <link> for the selected pairing.
// Skips if already loaded — safe to call on every render.
export function useFontLoader(fontPairing: FontPairing) {
  useEffect(() => {
    const id = `gf-${fontPairing}`
    if (document.getElementById(id)) return

    const { googleFonts } = FONT_PAIRINGS[fontPairing]
    const url = `https://fonts.googleapis.com/css2?${googleFonts}&display=swap`

    const link = document.createElement("link")
    link.id = id
    link.rel = "stylesheet"
    link.href = url
    document.head.appendChild(link)
  }, [fontPairing])
}
