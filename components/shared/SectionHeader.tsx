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
      <p className="eyebrow mb-2" style={light ? { color: "rgba(255,255,255,0.75)" } : {}}>
        {eyebrow}
      </p>
      <h2
        className="heading-calligraphy"
        style={{
          fontSize: "clamp(2.2rem, 8vw, 3rem)",
          color: light ? "rgba(255,255,255,0.95)" : undefined,
        }}
      >
        {heading}
      </h2>
      {quote && (
        <p
          className="quote-serif mt-3 px-4"
          style={{
            fontSize: "clamp(0.85rem, 3vw, 1rem)",
            color: light ? "rgba(255,255,255,0.70)" : undefined,
          }}
        >
          {quote}
        </p>
      )}
    </motion.div>
  );
}
