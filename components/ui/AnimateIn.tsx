"use client";

import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import { fadeUp } from "@/lib/motion";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  variants?: Variants;
}

export default function AnimateIn({
  children,
  className = "",
  style,
  delay = 0,
  variants = fadeUp,
}: AnimateInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  const withDelay: Variants = {
    hidden: variants.hidden,
    visible: {
      ...(typeof variants.visible === "object" && variants.visible !== null ? variants.visible : {}),
      transition: {
        ...(typeof variants.visible === "object" && variants.visible !== null && "transition" in variants.visible
          ? (variants.visible as { transition?: object }).transition
          : {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={withDelay}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
