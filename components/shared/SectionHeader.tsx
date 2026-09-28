"use client";
import { motion } from "motion/react";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  quote?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  quote,
  light = false,
  centered = true,
  className = "mb-8",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${className} ${centered ? "text-center" : ""}`}
    >
      <div className="flex justify-center mb-2.5">
        <span
          className="eyebrow"
          style={
            light
              ? {
                  color: "#FAF5ED",
                  background: "rgba(0,0,0,0.45)",
                  borderColor: "rgba(212,175,55,0.45)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
                }
              : {}
          }
        >
          {eyebrow}
        </span>
      </div>
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
          className="quote-serif mt-2 px-3 max-w-md mx-auto"
          style={{
            fontSize: "clamp(0.95rem, 3.2vw, 1.05rem)",
            color: light ? "rgba(255,255,255,0.98)" : "#2B140E",
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: "0.015em",
            textShadow: light ? "0 1px 4px rgba(0,0,0,0.5)" : "none",
          }}
        >
          {quote}
        </p>
      )}
    </motion.div>
  );
}
