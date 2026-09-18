"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import stampImage from "@/public/assets/opening/stamp-custom.png";
import { useLanguage } from "@/components/shared/LanguageContext";

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

  // DOM Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const envelopeSceneRef = useRef<HTMLDivElement>(null);
  const envelopeBackRef = useRef<HTMLDivElement>(null);
  const envelopeFrontRef = useRef<HTMLDivElement>(null);
  const waxSealRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);

  // SVG Text Line refs for stroke animation
  const line1Ref = useRef<SVGTextElement>(null);
  const line2Ref = useRef<SVGTextElement>(null);
  const name1Ref = useRef<SVGTextElement>(null);
  const name2Ref = useRef<SVGTextElement>(null);
  const dividerPathRef = useRef<SVGPathElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const enterBtnRef = useRef<HTMLButtonElement>(null);

  const handleComplete = () => {
    setMounted(false);
    if (onOpenComplete) onOpenComplete();
    if (onComplete) onComplete();
  };

  const handleStartMusic = () => {
    if (onStartMusic) onStartMusic();
    if (onMusicStart) onMusicStart();
  };

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
      };
    }
  }, [hasTapped]);

  const handleTap = () => {
    if (hasTapped) return;
    setHasTapped(true);
    handleStartMusic();

    const tl = gsap.timeline();

    // 1. Prompt fades out and stamp fades quickly without golden light
    tl.to(promptRef.current, {
      opacity: 0,
      y: -8,
      duration: 0.2,
      ease: "power2.out",
    });

    tl.to(
      waxSealRef.current,
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.25,
        ease: "power2.out",
      },
      0
    );

    // 2. QUICK ENVELOPE FLAP OPENING (0.6s)
    tl.add(() => {
      setIsFlapOpened(true);
    }, "+=0.05");

    // 3. CARD COMES OUT OF THE POCKET PROMPTLY (0.6s)
    tl.to(
      cardRef.current,
      {
        y: -170,
        zIndex: 50,
        duration: 0.65,
        ease: "power2.out",
      },
      "+=0.4"
    );

    // 4. ENVELOPE DROPS DOWN QUICKLY (0.45s)
    tl.to(
      [envelopeFrontRef.current, envelopeBackRef.current],
      {
        y: 300,
        opacity: 0,
        duration: 0.45,
        ease: "power2.inOut",
      },
      "+=0.05"
    );

    // Card smoothly expands downwards to full screen
    tl.to(
      cardRef.current,
      {
        y: 0,
        width: "100%",
        maxWidth: "460px",
        height: "100svh",
        borderRadius: "0px",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: 0.65,
        ease: "expo.out",
      },
      "<"
    );

    // 5. REVEAL CARD CONTENT & CALLIGRAPHY TEXT STROKE ANIMATION
    tl.to(
      cardContentRef.current,
      {
        opacity: 1,
        duration: 0.35,
      },
      "-=0.1"
    );

    // Setup SVG stroke lines
    const strokeLines = [
      line1Ref.current,
      line2Ref.current,
      name1Ref.current,
      name2Ref.current,
    ].filter(Boolean) as SVGTextElement[];

    strokeLines.forEach((line) => {
      gsap.set(line, {
        strokeDasharray: 2000,
        strokeDashoffset: 2000,
        opacity: 0,
      });
    });

    if (dividerPathRef.current) {
      gsap.set(dividerPathRef.current, {
        strokeDasharray: 600,
        strokeDashoffset: 600,
        opacity: 0,
      });
    }

    // Sequentially animate cursive writing strokes briskly and cleanly
    strokeLines.forEach((line, index) => {
      tl.to(
        line,
        {
          opacity: 1,
          duration: 0.12,
          ease: "none",
        },
        index === 0 ? "+=0.05" : "-=0.2"
      );
      tl.to(
        line,
        {
          strokeDashoffset: 0,
          duration: index >= 2 ? 0.9 : 0.75,
          ease: "power1.inOut",
        },
        "<"
      );
    });

    // Golden ornamental divider stroke animation
    if (dividerPathRef.current) {
      tl.to(
        dividerPathRef.current,
        {
          opacity: 1,
          strokeDashoffset: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    // Fill in cursive text with warm terracotta-brown
    tl.to(
      ".cursive-stroke-text",
      {
        fill: "#6D3519",
        duration: 0.5,
        ease: "power2.out",
      },
      "+=0.05"
    );

    // Fade in date & venue details
    tl.fromTo(
      detailsRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.15"
    );

    // Enter celebration button
    tl.to(
      enterBtnRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      "+=0.1"
    );
  };

  const handleEnterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 1.03,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: handleComplete,
    });
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

      {/* Language Switcher Bar on Top Right of Intro */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-1 bg-black/40 backdrop-blur-md p-1 rounded-full border border-[#D4AF37]/30">
        {(["en", "hi", "mr"] as const).map((l) => (
          <button
            key={l}
            onClick={(e) => {
              e.stopPropagation();
              setLang(l);
            }}
            className={`px-2.5 py-1 text-[11px] font-semibold tracking-wider rounded-full transition-all cursor-pointer ${
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
          className="relative flex items-center justify-center cursor-pointer"
          onClick={handleTap}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleTap()}
          aria-label="Click to open wedding invitation envelope"
        >
          {/* 1. ENVELOPE BACK (z-10) */}
          <div
            ref={envelopeBackRef}
            className="relative w-[320px] sm:w-[380px] h-[215px] sm:h-[250px] rounded-[4px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_10px_25px_rgba(40,15,5,0.4),0_0_0_1px_rgba(212,175,55,0.35)] overflow-hidden z-10 pointer-events-none"
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
            className="absolute z-20 w-[295px] sm:w-[350px] h-[195px] sm:h-[230px] rounded-xl bg-[#FAF7F2] bg-cover bg-center bg-no-repeat shadow-2xl flex flex-col items-center justify-center overflow-hidden pointer-events-none"
            style={{
              backgroundImage:
                "url('/image copy.png'), url('/image-copy.png'), url('/assets/opening/parchment-bg.png')",
            }}
          >
            {/* Card Gold Borders */}
            <div className="absolute inset-2 sm:inset-3 border border-[#D4AF37]/40 rounded-lg pointer-events-none" />

            {/* Card Content */}
            <div
              ref={cardContentRef}
              className="relative z-30 w-full h-full flex flex-col items-center justify-center px-5 py-6 text-center opacity-0 overflow-y-auto"
            >
              <div className="w-full max-w-[360px] flex flex-col items-center">
                {/* Monogram Seal Top Watermark */}
                <div className="w-12 h-12 mb-1.5 opacity-90 drop-shadow-sm">
                  <Image
                    src={stampImage}
                    alt="M&S Monogram"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* SVG Handwriting Stroke Reveal */}
                <svg
                  viewBox="0 0 380 270"
                  className="w-full h-auto overflow-visible drop-shadow-sm"
                >
                  <g
                    style={{
                      fontFamily: isDevanagari
                        ? "'Rozha One', 'Noto Serif Devanagari', serif"
                        : "'Alex Brush', 'Great Vibes', cursive",
                    }}
                  >
                    <text
                      ref={line1Ref}
                      x="190"
                      y={isDevanagari ? "38" : "42"}
                      textAnchor="middle"
                      fontSize={isDevanagari ? "20" : "29"}
                      className="cursive-stroke-text"
                      style={{ opacity: 0 }}
                    >
                      {t.cordiallyInvited}
                    </text>

                    <text
                      ref={line2Ref}
                      x="190"
                      y={isDevanagari ? "74" : "82"}
                      textAnchor="middle"
                      fontSize={isDevanagari ? "20" : "27"}
                      className="cursive-stroke-text"
                      style={{ opacity: 0 }}
                    >
                      {t.celebrateWeddingOf}
                    </text>

                    <text
                      ref={name1Ref}
                      x="190"
                      y={isDevanagari ? "142" : "152"}
                      textAnchor="middle"
                      fontSize={isDevanagari ? "38" : "55"}
                      className="cursive-stroke-text"
                      style={{ opacity: 0, fontWeight: 600 }}
                    >
                      {lang === "en" ? "Mradul &" : lang === "hi" ? "मृदुल एवं" : "मृदुल आणि"}
                    </text>

                    <text
                      ref={name2Ref}
                      x="190"
                      y={isDevanagari ? "205" : "216"}
                      textAnchor="middle"
                      fontSize={isDevanagari ? "42" : "58"}
                      className="cursive-stroke-text"
                      style={{ opacity: 0, fontWeight: 600 }}
                    >
                      {lang === "en" ? "Shreya" : "श्रेया"}
                    </text>
                  </g>

                  {/* Exquisite Calligraphic Flourish Divider */}
                  <path
                    ref={dividerPathRef}
                    d="M 55 248 C 100 248, 125 242, 150 250 C 165 255, 178 250, 190 248 C 202 250, 215 255, 230 250 C 255 242, 280 248, 325 248 M 165 248 C 172 242, 181 240, 190 240 C 199 240, 208 242, 215 248 M 178 248 C 184 244, 190 242, 190 242 C 190 242, 196 244, 202 248"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    style={{ opacity: 0 }}
                  />
                  <circle cx="190" cy="248" r="3.5" fill="#D4AF37" />
                  <circle cx="150" cy="250" r="1.8" fill="#D4AF37" />
                  <circle cx="230" cy="250" r="1.8" fill="#D4AF37" />
                </svg>

                {/* EVENT DETAILS */}
                <div
                  ref={detailsRef}
                  className="mt-3 flex flex-col items-center text-center text-[#4A2E2B] opacity-0"
                  style={{ fontFamily: isDevanagari ? "var(--font-devanagari-body)" : "var(--font-serif)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="h-[1px] w-7 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                    <p className="text-lg sm:text-xl font-semibold tracking-wide text-[#3D2522]">
                      {t.dates}
                    </p>
                    <span className="h-[1px] w-7 bg-gradient-to-l from-transparent to-[#D4AF37]" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#8C4B27] font-semibold mt-1 tracking-wider">
                    {t.venueHero}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#6E4141] tracking-normal mt-0.5 italic">
                    Vainguinim Beach, Dona Paula, Goa
                  </p>
                </div>

                {/* ENTER BUTTON */}
                <button
                  ref={enterBtnRef}
                  onClick={handleEnterClick}
                  className="mt-6 px-8 py-3 rounded-full bg-[#8C4B27] hover:bg-[#6D3519] text-white text-xs font-semibold tracking-[0.1em] uppercase shadow-[0_6px_20px_rgba(140,75,39,0.35),0_0_0_1px_rgba(212,175,55,0.45)] hover:shadow-[0_8px_25px_rgba(140,75,39,0.5),0_0_0_1.5px_rgba(212,175,55,0.7)] transition-all duration-300 opacity-0 cursor-pointer pointer-events-auto transform hover:-translate-y-0.5 active:translate-y-0"
                  style={{ fontFamily: isDevanagari ? "var(--font-devanagari-sans)" : "var(--font-sans)" }}
                >
                  {t.enterCelebration}
                </button>
              </div>
            </div>
          </div>

          {/* 3. ENVELOPE FRONT POCKET & FLAP (z-30 / z-40) */}
          <div
            ref={envelopeFrontRef}
            className={`custom-envelope z-30 pointer-events-none ${
              isFlapOpened ? "opened" : ""
            }`}
            style={{ position: "absolute", inset: 0, background: "transparent", boxShadow: "none" }}
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
              <div className="custom-envelope-flap-inner">
                {/* Envelope Top-Center Header Text */}
                <div className="absolute top-2.5 sm:top-3.5 left-1/2 -translate-x-1/2 w-full px-4 text-center pointer-events-none">
                  <p
                    className={`tracking-wider text-[#8C4B27] drop-shadow-sm font-semibold ${
                      isDevanagari ? "font-devanagari-body" : "font-serif-wd"
                    }`}
                    style={{
                      fontSize: isDevanagari ? "0.85rem" : "0.82rem",
                      letterSpacing: isDevanagari ? "0.02em" : "0.06em",
                      fontStyle: isDevanagari ? "normal" : "italic",
                      opacity: 0.95,
                    }}
                  >
                    “{t.envelopeHeader}”
                  </p>
                </div>
              </div>
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
