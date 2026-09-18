"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

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
      className="section-bg relative overflow-hidden"
      style={{ minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Background Image */}
      <Image
        src="/assets/hero/couple-bg.png"
        alt="Mradul and Shreya"
        fill
        priority
        className="section-bg-img"
        style={{ objectPosition: "center 20%" }}
      />

      {/* Warm Indian Wedding Tint Overlay */}
      <div
        className="section-overlay"
        style={{
          background:
            "linear-gradient(180deg, rgba(35,15,10,0.65) 0%, rgba(20,10,5,0.3) 40%, rgba(30,12,8,0.75) 100%)",
        }}
      />

      {/* Ornate Indian Mandala Motif Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="section-content section-pad w-full flex flex-col items-center text-center py-20 relative z-10">
        {/* Sacred Indian Invocatory Motif (Image) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center mb-3"
        >
          <div className="relative w-[180px] sm:w-[220px] h-[60px] sm:h-[74px]">
            <Image
              src="/assets/hero/ganesha-invocation.png"
              alt="ॐ श्री गणेशाय नमः"
              fill
              priority
              className="object-contain drop-shadow-md"
            />
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.35em",
            fontWeight: 600,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "0.75rem",
          }}
        >
          {t.weddingCelebration}
        </motion.p>

        {/* Couple Names */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-calligraphy"
          style={{
            fontSize: "clamp(3.4rem, 14vw, 4.8rem)",
            color: "white",
            textShadow: "0 4px 25px rgba(0,0,0,0.6)",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          {t.mradulAndShreya}
        </motion.h1>

        {/* Decorative Indian Paisley / Floral Arch Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-3 w-full max-w-xs mb-4"
        >
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,rgba(212,175,55,0.8))" }} />
          <span style={{ color: "#D4AF37", fontSize: "0.85rem" }}>✦ ॐ ✦</span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,rgba(212,175,55,0.8),transparent)" }} />
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-serif-wd"
          style={{ fontSize: "1.25rem", color: "#F7EEDB", fontStyle: "italic", fontWeight: 500, marginBottom: "0.5rem", letterSpacing: "0.05em" }}
        >
          {t.dates}
        </motion.p>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-1.5 mb-8"
        >
          <MapPin size={14} color="#E8D09E" />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.92)",
              fontStyle: "italic",
              letterSpacing: "0.04em",
            }}
          >
            {t.venueHero}
          </span>
        </motion.div>

        {/* RSVP Button */}
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToRSVP}
          className="btn-primary w-full shadow-[0_8px_30px_rgba(140,75,39,0.5),0_0_0_1px_rgba(212,175,55,0.4)]"
          style={{ maxWidth: "320px", marginBottom: "2rem" }}
        >
          <CalendarDays size={15} />
          {t.rsvpNow}
        </motion.button>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.7)",
            animation: "bounce-slow 2s ease-in-out infinite",
          }}
        >
          {t.scrollHint}
        </motion.p>
      </div>
    </section>
  );
}

export default HeroSection;
