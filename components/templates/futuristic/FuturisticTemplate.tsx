"use client"

import { useMemo } from "react"
import type { TemplateConfig } from "@/types/template"
import { buildCSSVars } from "@/lib/templateTokens"
import { useFontLoader } from "@/lib/useFontLoader"

import FuturisticHero from "./sections/FuturisticHero"
import FuturisticAbout from "./sections/FuturisticAbout"
import FuturisticServices from "./sections/FuturisticServices"
import FuturisticPortfolio from "./sections/FuturisticPortfolio"
import FuturisticTestimonials from "./sections/FuturisticTestimonials"
import FuturisticContact from "./sections/FuturisticContact"

interface Props {
  config: TemplateConfig
  // When true the template renders at full 1440px width (used inside the scaled preview)
  preview?: boolean
}

export default function FuturisticTemplate({ config, preview = false }: Props) {
  useFontLoader(config.fontPairing)

  const cssVars = useMemo(
    () => buildCSSVars(config.palette, config.fontPairing, config.density),
    [config.palette, config.fontPairing, config.density]
  )

  const has = (s: typeof config.sections[number]) => config.sections.includes(s)

  return (
    <div
      style={{
        ...cssVars,
        background: "var(--t-bg)",
        color: "var(--t-text)",
        fontFamily: "var(--t-font-body)",
        width: preview ? "1440px" : "100%",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {has("hero")         && <FuturisticHero layout={config.layout} />}
      {has("about")        && <FuturisticAbout />}
      {has("services")     && <FuturisticServices />}
      {has("portfolio")    && <FuturisticPortfolio />}
      {has("testimonials") && <FuturisticTestimonials />}
      {has("contact")      && <FuturisticContact />}
    </div>
  )
}
