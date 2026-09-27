"use client";
import { motion } from "motion/react";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  quote?: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  heading,
  quote,
  light = false,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-8 ${centered ? "text-center" : ""}`}
    >
      <p className="eyebrow mb-2.5" style={light ? { color: "rgba(255,255,255,0.85)" } : {}}>
        {eyebrow}
      </p>
      <h2
        className="heading-calligraphy"
        style={{
          fontSize: "clamp(2rem, 7.5vw, 2.75rem)",
          color: light ? "rgba(255,255,255,0.98)" : "#1E0F0C",
          letterSpacing: "0.02em",
          lineHeight: 1.22,
        }}
      >
        {heading}
      </h2>
      {quote && (
        <p
          className="quote-serif mt-3 px-4 max-w-md mx-auto"
          style={{
            fontSize: "clamp(0.95rem, 3.2vw, 1.05rem)",
            color: light ? "rgba(255,255,255,0.85)" : "#4D261E",
            lineHeight: 1.7,
            letterSpacing: "0.015em",
          }}
        >
          {quote}
        </p>
      )}
    </motion.div>
  );
}
