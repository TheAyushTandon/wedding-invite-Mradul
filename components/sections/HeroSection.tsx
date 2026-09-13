"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { CalendarDays, MapPin, Heart } from "lucide-react";

export function HeroSection() {
  const scrollToRSVP = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: string, opts?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo("#rsvp", { offset: -20, duration: 1.4 });
    } else {
      document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="section-bg relative"
      style={{ minHeight: "100dvh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Image
        src="/assets/hero/couple-bg.png"
        alt="Mradul and Shreya"
        fill
        priority
        className="section-bg-img"
        style={{ objectPosition: "center 20%" }}
      />
      {/* Gradient overlay */}
      <div
        className="section-overlay"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0.50) 100%)",
        }}
      />

      <div className="section-content section-pad w-full flex flex-col items-center text-center py-20">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.35em",
            fontWeight: 600,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          WE ARE GETTING MARRIED
        </motion.p>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-calligraphy"
          style={{
            fontSize: "clamp(3.2rem, 14vw, 4.5rem)",
            color: "white",
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          Mradul & Shreya
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-3 w-full max-w-xs mb-4"
        >
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.60))" }} />
          <Heart size={14} fill="#FFD1D1" color="#FFD1D1" />
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,rgba(255,255,255,0.60),transparent)" }} />
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="font-serif-wd"
          style={{ fontSize: "1.15rem", color: "white", fontStyle: "italic", fontWeight: 400, marginBottom: "0.5rem" }}
        >
          February 2 & 3
        </motion.p>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex items-center gap-1.5 mb-8"
        >
          <MapPin size={13} color="#FFD1D1" />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.90)",
              fontStyle: "italic",
            }}
          >
            Taj Heritage • Goa, India
          </span>
        </motion.div>

        {/* RSVP Button */}
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToRSVP}
          className="btn-primary w-full"
          style={{ maxWidth: "320px", marginBottom: "2rem" }}
        >
          <CalendarDays size={15} />
          RSVP FOR THE CELEBRATION
        </motion.button>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.65)",
            animation: "bounce-slow 2s ease-in-out infinite",
          }}
        >
          Scroll to explore ↓
        </motion.p>
      </div>
    </section>
  );
}

