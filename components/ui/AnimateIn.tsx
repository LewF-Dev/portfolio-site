import { type ReactNode, type CSSProperties } from "react";
import type { Variants } from "motion/react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  variants?: Variants;
}

export default function AnimateIn({ children, className = "", style }: AnimateInProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
