"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import type { Variants } from "motion/react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  variants?: Variants;
}

export default function AnimateIn({ children, className = "", style, delay = 0 }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
