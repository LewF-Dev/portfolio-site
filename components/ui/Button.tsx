"use client";

import { motion } from "motion/react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0f]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#c9a84c] hover:bg-[#dfc278] text-[#0d0d0f] px-6 py-3 text-sm tracking-wide focus-visible:ring-[#c9a84c]",
  secondary:
    "border border-[rgba(255,255,255,0.15)] hover:border-[#4a7fa5] text-[#f0f0f0] hover:text-[#4a7fa5] px-6 py-3 text-sm tracking-wide focus-visible:ring-[#4a7fa5]",
  ghost:
    "text-[#a0a0b0] hover:text-[#f0f0f0] px-3 py-2 text-sm focus-visible:ring-[#4a7fa5]",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  external = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${disabled ? "opacity-40 pointer-events-none" : ""} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
