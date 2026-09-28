"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import stampImage from "@/public/assets/opening/stamp-custom.png";
import { useLanguage } from "@/components/shared/LanguageContext";
import type { Language } from "@/lib/translations";

interface OpeningTransitionProps {
  onComplete?: () => void;
  onOpenComplete?: () => void;
  onMusicStart?: () => void;
  onStartMusic?: () => void;
}

export function OpeningTransition({
  onComplete,
  onOpenComplete,
  onMusicStart,
  onStartMusic,
}: OpeningTransitionProps) {
  const [hasTapped, setHasTapped] = useState(false);
  const [isFlapOpened, setIsFlapOpened] = useState(false);
  const [mounted, setMounted] = useState(true);
  const { t, lang, setLang } = useLanguage();
  const [showLangPrompt, setShowLangPrompt] = useState(true);
  const [selectedLang, setSelectedLang] = useState<Language>(lang);

  // DOM Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const envelopeSceneRef = useRef<HTMLDivElement>(null);
  const waxSealRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const langPromptRef = useRef<HTMLDivElement>(null);
  const langCardRef = useRef<HTMLDivElement>(null);

  const handleComplete = () => {
    setMounted(false);
    if (onOpenComplete) onOpenComplete();
    if (onComplete) onComplete();
  };

  const handleStartMusic = () => {
    if (onStartMusic) onStartMusic();
    if (onMusicStart) onMusicStart();
  };

  // Prevent background scrolling while opening modal is mounted
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Subtle floating motion before tap
  useEffect(() => {
    if (envelopeSceneRef.current && !hasTapped) {
      const tween = gsap.to(envelopeSceneRef.current, {
        y: -5,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      return () => {
        tween.kill();
        if (envelopeSceneRef.current) {
          gsap.set(envelopeSceneRef.current, { clearProps: "transform" });
        }
      };
    }
  }, [hasTapped]);

  // Keep selectedLang in sync with context lang
  useEffect(() => {
    setSelectedLang(lang);
  }, [lang]);

  // Entrance animation for language prompt
  useEffect(() => {
    if (showLangPrompt && langPromptRef.current && langCardRef.current) {
      gsap.fromTo(
        langPromptRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" }
      );
      gsap.fromTo(
        langCardRef.current,
        { opacity: 0, scale: 0.92, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "back.out(1.2)", delay: 0.05 }
      );
    }
  }, [showLangPrompt]);

  const handleSelectLanguage = (l: Language) => {
    setSelectedLang(l);
    setLang(l);
  };

  const handleDismissLangPrompt = () => {
    if (langPromptRef.current) {
      gsap.to(langPromptRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          setShowLangPrompt(false);
        },
      });
    } else {
      setShowLangPrompt(false);
    }
  };

  const handleTap = () => {
    if (showLangPrompt) {
      handleDismissLangPrompt();
      return;
    }
    if (hasTapped) return;
    setHasTapped(true);
    handleStartMusic();

    // Kill idle float tween immediately and clear any transform on envelopeSceneRef
    if (envelopeSceneRef.current) {
      gsap.killTweensOf(envelopeSceneRef.current);
      gsap.set(envelopeSceneRef.current, { clearProps: "transform", y: 0, x: 0 });
    }

    const tl = gsap.timeline();

    // 1. Prompt and wax seal fade out smoothly
    tl.to(promptRef.current, {
      opacity: 0,
      y: -8,
      duration: 0.22,
      ease: "power2.out",
    });

    tl.to(
      waxSealRef.current,
      {
        opacity: 0,
        scale: 1.15,
        duration: 0.28,
        ease: "power2.out",
      },
      0
    );

    // 2. Open envelope flap
    tl.add(() => {
      setIsFlapOpened(true);
    }, "+=0.02");

    // 3. Card slides up gracefully inside envelope pocket
    if (cardRef.current) {
      tl.to(
        cardRef.current,
        {
          yPercent: -65,
          duration: 0.55,
          ease: "power2.out",
        },
        "+=0.15"
      );
    }

    // 4. Smooth cinematic fade out directly to the main home screen
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        scale: 1.04,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: handleComplete,
      },
      "+=0.15"
    );
  };

  if (!mounted) return null;

  const isDevanagari = lang === "hi" || lang === "mr";

  return (
    <div
      ref={containerRef}
      data-lang={lang}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0F0D0B] overflow-hidden select-none ${
        isDevanagari ? "lang-devanagari" : ""
      }`}
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,40,20,0.35)_0%,rgba(15,12,10,0.92)_60%,rgba(8,6,5,0.98)_90%)] pointer-events-none" />

      {/* TRANSLUCENT CHOOSE A LANGUAGE PROMPT (SHOWN BEFORE STARTING) */}
      {showLangPrompt && (
        <div
          ref={langPromptRef}
          onClick={handleDismissLangPrompt}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md select-none cursor-pointer"
        >
          <div
            ref={langCardRef}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[370px] sm:max-w-[410px] rounded-3xl p-6 sm:p-8 bg-[#17120E]/80 backdrop-blur-2xl border border-[#D4AF37]/50 text-center overflow-hidden cursor-default shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(212,175,55,0.15)]"
          >
            {/* Ambient Gold Radial Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#D4AF37]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-1.5 border border-[#D4AF37]/20 rounded-2xl pointer-events-none" />

            {/* Crest Stamp */}
            <div className="w-14 h-14 mx-auto mb-3 relative flex-shrink-0 drop-shadow-md">
              <Image
                src={stampImage}
                alt="M&S Monogram Wax Seal"
                width={56}
                height={56}
                priority
                className="w-full h-full object-contain"
              />
            </div>

            {/* Eyebrow */}
            <p
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Mradul & Shreya
            </p>

            {/* Title */}
            <h3
              className="text-2xl sm:text-[26px] font-serif text-[#FAF5ED] tracking-wide mb-1"
              style={{
                fontFamily:
                  selectedLang === "en" ? "var(--font-serif)" : "'Noto Serif Devanagari', serif",
              }}
            >
              {selectedLang === "mr"
                ? "भाषा निवडा"
                : selectedLang === "hi"
                ? "भाषा चुनें"
                : "Choose a Language"}
            </h3>

            {/* Subtitle */}
            <p
              className="text-xs text-[#E8D09E]/85 mb-5 tracking-wide"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              {selectedLang === "mr"
                ? "कृपया आपली पसंतीची भाषा निवडा"
                : selectedLang === "hi"
                ? "कृपया अपनी पसंदीदा भाषा चुनें"
                : "Please select your preferred language"}
            </p>

            {/* Language Options */}
            <div className="flex flex-col gap-2.5 mb-6">
              {[
                {
                  code: "en" as const,
                  native: "English",
                  subtitle: "English",
                  fontFamily: "var(--font-serif)",
                },
                {
                  code: "mr" as const,
                  native: "मराठी",
                  subtitle: "Marathi",
                  fontFamily: "'Noto Serif Devanagari', serif",
                },
                {
                  code: "hi" as const,
                  native: "हिन्दी",
                  subtitle: "Hindi",
                  fontFamily: "'Noto Serif Devanagari', serif",
                },
              ].map((item) => {
                const isSelected = selectedLang === item.code;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => handleSelectLanguage(item.code)}
                    className={`group w-full flex items-center justify-between px-4 py-3 sm:py-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-r from-[#8C4B27]/90 to-[#5C2B14]/90 border-[#D4AF37] text-white shadow-[0_0_20px_rgba(212,175,55,0.35)] ring-1 ring-[#D4AF37]/60 scale-[1.01]"
                        : "bg-white/[0.04] hover:bg-[#D4AF37]/15 border-[#D4AF37]/25 text-[#E7DFD5] hover:border-[#D4AF37]/70 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                          isSelected
                            ? "border-[#D4AF37] bg-[#D4AF37]"
                            : "border-[#D4AF37]/50 bg-black/30 group-hover:border-[#D4AF37]"
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#2A1805]" />}
                      </div>
                      <span
                        className="text-base sm:text-lg font-semibold tracking-wide text-left"
                        style={{ fontFamily: item.fontFamily }}
                      >
                        {item.native}
                      </span>
                    </div>
                    <span
                      className={`text-[11px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-md ${
                        isSelected
                          ? "bg-[#D4AF37]/20 text-[#F5EEDF]"
                          : "text-[#D4AF37]/70 group-hover:text-[#D4AF37]"
                      }`}
                    >
                      {item.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Continue / Proceed Button */}
            <button
              type="button"
              onClick={handleDismissLangPrompt}
              className="w-full py-3.5 px-6 rounded-2xl font-bold tracking-widest text-xs sm:text-sm uppercase transition-all duration-300 cursor-pointer bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#241407] hover:brightness-110 active:scale-[0.98] shadow-[0_4px_22px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2.5"
              style={{
                fontFamily:
                  selectedLang === "en" ? "var(--font-serif)" : "'Noto Serif Devanagari', serif",
              }}
            >
              <span>
                {selectedLang === "mr"
                  ? "निमंत्रण पत्रिकेकडे पुढे जा"
                  : selectedLang === "hi"
                  ? "निमंत्रण पत्र की ओर बढ़ें"
                  : "Continue to Invitation"}
              </span>
              <svg
                className="w-4 h-4 stroke-[2.5]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {/* Micro hint */}
            <p className="text-[10px] text-[#A89886]/70 mt-3 tracking-wide">
              {selectedLang === "mr"
                ? "तुम्ही उजव्या कोपऱ्यातून कधीही भाषा बदलू शकता"
                : selectedLang === "hi"
                ? "आप शीर्ष दाएं कोने से कभी भी भाषा बदल सकते हैं"
                : "You can change language anytime from top-right corner"}
            </p>
          </div>
        </div>
      )}

      {/* Language Switcher Bar on Top Right */}
      <div
        className="absolute top-4 z-50 flex items-center gap-1 bg-black/40 backdrop-blur-md p-1 rounded-full border border-[#D4AF37]/30"
        style={{ right: "max(1rem, calc((100vw - 480px) / 2 + 1rem))" }}
      >
        {(["en", "hi", "mr"] as const).map((l) => (
          <button
            key={l}
            onClick={(e) => {
              e.stopPropagation();
              setLang(l);
            }}
            className={`px-2.5 py-1 text-[11px] font-semibold tracking-wider rounded-full transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${
              lang === l
                ? "bg-[#8C4B27] text-white shadow-sm"
                : "text-[#D4AF37]/80 hover:text-white"
            }`}
          >
            {l === "en" ? "EN" : l === "hi" ? "हिन्दी" : "मराठी"}
          </button>
        ))}
      </div>

      {/* ENVELOPE & CARD SCENE */}
      <div
        ref={envelopeSceneRef}
        className="relative z-20 flex flex-col items-center justify-center"
      >
        {/* INTERACTIVE ENVELOPE CONTAINER */}
        <div
          className="relative w-[320px] sm:w-[380px] h-[215px] sm:h-[250px] cursor-pointer"
          onClick={handleTap}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleTap()}
          aria-label="Click to open wedding invitation envelope"
        >
          {/* 1. ENVELOPE BACK (z-10) */}
          <div
            className="absolute inset-0 rounded-[4px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_10px_25px_rgba(40,15,5,0.4),0_0_0_1px_rgba(212,175,55,0.35)] overflow-hidden z-10 pointer-events-none"
            style={{
              background: "linear-gradient(175deg, #FAF6EE 0%, #F5EEDF 60%, #EDE2CF 100%)",
              boxShadow: "inset 0 0 35px -5px #CBB493",
            }}
          >
            <div className="absolute inset-2 border border-[#D4AF37]/25 rounded-[2px] pointer-events-none" />
          </div>

          {/* 2. WEDDING INVITATION CARD (z-20) */}
          <div
            ref={cardRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-xl bg-[#FAF7F2] bg-cover bg-center bg-no-repeat shadow-2xl flex flex-col items-center justify-center overflow-hidden pointer-events-none"
            style={{
              width: "calc(100% - 24px)",
              height: "calc(100% - 20px)",
              backgroundImage:
                "url('/image copy.png'), url('/image-copy.png'), url('/assets/opening/parchment-bg.png')",
            }}
          >
            {/* Card Gold Borders */}
            <div className="absolute inset-2.5 sm:inset-4 border border-[#D4AF37]/45 rounded-sm sm:rounded-lg pointer-events-none" />
            <div className="absolute inset-3.5 sm:inset-5 border border-[#D4AF37]/25 rounded-[2px] sm:rounded-md pointer-events-none" />

            {/* Elegant Monogram Crest Watermark on Parchment Card */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 opacity-85 drop-shadow-sm flex items-center justify-center">
              <Image
                src={stampImage}
                alt="M&S Monogram"
                width={80}
                height={80}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* 3. ENVELOPE FRONT POCKET & FLAP (z-30 / z-40) */}
          <div
            className={`custom-envelope z-30 pointer-events-none ${
              isFlapOpened ? "opened" : ""
            }`}
            style={{ background: "transparent", boxShadow: "none" }}
          >
            {/* FRONT POCKET */}
            <div
              className="absolute inset-0 z-[30] pointer-events-none rounded-[4px] overflow-hidden"
              style={{
                clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 50% 50%)",
                background:
                  "linear-gradient(175deg, #FAF6EE 0%, #F5EEDF 60%, #EDE2CF 100%)",
                boxShadow:
                  "inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -2px 6px rgba(0,0,0,0.06)",
              }}
            >
              <svg viewBox="0 0 380 250" className="absolute inset-0 w-full h-full opacity-60">
                <path
                  d="M 0 250 L 190 125 L 380 250"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1.2"
                />
                <path
                  d="M 0 0 L 190 125 L 0 250"
                  fill="none"
                  stroke="rgba(140,75,39,0.15)"
                  strokeWidth="1"
                />
                <path
                  d="M 380 0 L 190 125 L 380 250"
                  fill="none"
                  stroke="rgba(140,75,39,0.15)"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* TOP FLAP (z-[40] in 3D) */}
            <div className="custom-envelope-flap">
              <div className="custom-envelope-flap-inner"></div>
            </div>

            {/* RED WAX STAMP (z-[50]) */}
            <div
              ref={waxSealRef}
              className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[50] w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center pointer-events-none"
              style={{
                filter:
                  "drop-shadow(0 8px 16px rgba(45,10,10,0.65)) drop-shadow(0 2px 4px rgba(0,0,0,0.35))",
              }}
            >
              <Image
                src={stampImage}
                alt="M&S Monogram Red Wax Seal"
                width={96}
                height={96}
                priority
                className="w-full h-full object-contain select-none"
              />
            </div>
          </div>
        </div>

        {/* TAP PROMPT */}
        {!hasTapped && (
          <div
            ref={promptRef}
            className="mt-8 flex flex-col items-center text-center pulse-element pointer-events-none"
          >
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <span
                className="text-base sm:text-lg font-semibold tracking-wide text-[#E8D09E] uppercase drop-shadow"
                style={{ fontFamily: isDevanagari ? "var(--font-devanagari-body)" : "var(--font-serif)" }}
              >
                {t.tapToOpen}
              </span>
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>
            <span className="text-[11px] text-[#C5A46D] tracking-wider uppercase mt-0.5 font-medium">
              {t.weddingInvitation}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default OpeningTransition;
