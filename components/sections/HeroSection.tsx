"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { CalendarDays, MapPin, ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";

export function HeroSection() {
  const { t, lang } = useLanguage();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 70);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDevanagari = lang === "hi" || lang === "mr";

  const scrollToRSVP = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: string, opts?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo("#rsvp", { offset: -20, duration: 1.4 });
    } else {
      document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: string, opts?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo("#families", { offset: -20, duration: 1.2 });
    } else {
      document.getElementById("families")?.scrollIntoView({ behavior: "smooth" });
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
        src="/assets/hero/main-home-page.jpeg"
        alt="Mradul and Shreya"
        fill
        priority
        sizes="100vw"
        quality={85}
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
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-display), var(--font-sans)",
            fontSize: "0.75rem",
            letterSpacing: "0.32em",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.92)",
            marginBottom: "0.85rem",
          }}
        >
          {t.weddingCelebration}
        </motion.p>

        {/* Couple Names */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-script overflow-visible"
          style={{
            fontSize: "clamp(2.6rem, 9vw, 3.8rem)",
            color: "#FFFFFF",
            textShadow: "0 4px 30px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
          }}
        >
          {lang === "en" ? (
            <span className="inline-block overflow-visible leading-[1.2]">
              <span>Mradul</span>{" "}
              <span
                className="ampersand-glyph"
                style={{
                  fontFamily: "'Alex Brush', 'Great Vibes', cursive",
                  fontSize: "0.95em",
                  paddingBottom: "0.2em",
                  paddingRight: "0.08em",
                  verticalAlign: "baseline",
                }}
              >
                &amp;
              </span>
              <br className="block sm:hidden" />
              <span className="sm:ml-2">Shreya</span>
            </span>
          ) : (
            t.mradulAndShreya
          )}
        </motion.h1>



        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-display"
          style={{
            fontSize: "1.3rem",
            color: "#FAF4E8",
            fontWeight: 600,
            marginBottom: "0.5rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            textShadow: "0 2px 10px rgba(0,0,0,0.7)",
          }}
        >
          {t.dates}
        </motion.p>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-[3px] border border-[#D4AF37]/30 shadow-md"
        >
          <MapPin size={15} color="#E8D09E" />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.95)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
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
          className="btn-primary w-full shadow-[0_8px_30px_rgba(140,75,39,0.55),0_0_0_1px_rgba(212,175,55,0.5)] tracking-[0.18em]"
          style={{ maxWidth: "320px", marginBottom: "1.25rem" }}
        >
          <CalendarDays size={16} />
          {t.rsvpNow}
        </motion.button>

        {/* In-flow bottom clearance */}
        <div className="h-10 sm:h-12 w-full pointer-events-none" />
      </div>

      {/* Subtle Bottom Vignette for Visual Depth into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0F0D0B] via-[#0F0D0B]/40 to-transparent pointer-events-none z-10" />

      {/* Smart Docked Floating Scroll Indicator (Prominent at viewport bottom when user is at the top) */}
      <AnimatePresence>
        {isAtTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto"
          >
            <button
              type="button"
              onClick={scrollToNext}
              className="group relative flex flex-col items-center gap-1 cursor-pointer select-none focus:outline-none"
              aria-label={t.scrollHint}
            >
              {/* Outer Glow Ring & Glass Capsule */}
              <div className="flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#18110B]/90 hover:bg-[#251A10] backdrop-blur-xl border border-[#D4AF37]/75 hover:border-[#D4AF37] shadow-[0_8px_30px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 ring-1 ring-[#D4AF37]/30">
                {/* Animated Mouse Wheel / Scroll Icon */}
                <div className="w-3.5 h-5 sm:h-5.5 rounded-full border border-[#D4AF37] flex items-start justify-center p-0.5 relative flex-shrink-0">
                  <motion.div
                    animate={{ y: [0, 6, 0], opacity: [1, 0.25, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-1.5 rounded-full bg-[#F3E5AB]"
                  />
                </div>

                {/* High-Contrast Bold Text */}
                <span
                  className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#FAF5ED] group-hover:text-white transition-colors drop-shadow"
                  style={{
                    fontFamily: isDevanagari ? "var(--font-devanagari-body)" : "var(--font-sans)",
                  }}
                >
                  {isDevanagari
                    ? lang === "mr"
                      ? "खाली स्क्रोल करा"
                      : "नीचे स्क्रॉल करें"
                    : "Scroll Down to Explore"}
                </span>

                {/* Dual Pulsing Down Chevrons */}
                <div className="flex flex-col -space-y-1.5 text-[#D4AF37] flex-shrink-0">
                  <motion.div
                    animate={{ y: [0, 3, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronDown size={14} className="stroke-[2.5]" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 3, 0], opacity: [0.2, 0.9, 0.2] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                  >
                    <ChevronDown size={14} className="stroke-[2.5]" />
                  </motion.div>
                </div>
              </div>

              {/* Sub-cue badge */}
              <span className="text-[10px] tracking-widest text-[#D4AF37]/90 uppercase font-semibold drop-shadow-md">
                {isDevanagari
                  ? lang === "mr"
                    ? "✦ पाहण्यासाठी टॅप करा ✦"
                    : "✦ देखने के लिए स्पर्श करें ✦"
                  : "✦ Tap or scroll ✦"}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default HeroSection;
