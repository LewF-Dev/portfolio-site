"use client"

import { useRef, useState, useEffect } from "react"
import type { TemplateConfig } from "@/types/template"
import FuturisticTemplate from "./futuristic/FuturisticTemplate"

interface Props {
  config: TemplateConfig
}

// The template renders at 1440px wide then is scaled down to fill the container.
// This gives a pixel-accurate preview of the real site.
const TEMPLATE_WIDTH = 1440

export default function TemplatePreview({ config }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.5)
  const [containerHeight, setContainerHeight] = useState(600)

  // Recalculate scale whenever the container resizes
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const update = () => {
      const w = el.offsetWidth
      const s = w / TEMPLATE_WIDTH
      setScale(s)
      // Show roughly one viewport height of the template
      setContainerHeight(Math.round(900 * s))
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div style={{
      background: "#111118",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "1rem",
      overflow: "hidden",
    }}>
      {/* Browser chrome bar */}
      <div style={{
        padding: "0.75rem 1rem",
        background: "#0d0d0f",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "flex", alignItems: "center", gap: "0.5rem",
      }}>
        {["#ff5f57", "#febc2e", "#28c840"].map(c => (
          <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
        ))}
        <div style={{
          flex: 1, height: "22px", borderRadius: "0.375rem",
          background: "#1a1a22", marginLeft: "0.5rem",
          display: "flex", alignItems: "center", paddingLeft: "0.75rem",
        }}>
          <span style={{ fontSize: "0.65rem", color: "#404050" }}>yourbusiness.com</span>
        </div>
      </div>

      {/* Scaled template */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: `${containerHeight}px`,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div style={{
          width: `${TEMPLATE_WIDTH}px`,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          // Pointer events off so controls don't accidentally trigger template buttons
          pointerEvents: "none",
          userSelect: "none",
        }}>
          <FuturisticTemplate config={config} preview />
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        padding: "0.6rem 1rem",
        background: "#0d0d0f",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontSize: "0.65rem", color: "#404050" }}>
          Preview — full site renders below the fold
        </span>
        <span style={{ fontSize: "0.65rem", color: "#404050" }}>
          1440 × 900
        </span>
      </div>
    </div>
  )
}
