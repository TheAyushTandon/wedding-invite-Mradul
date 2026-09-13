"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

// Love Birds Icon SVG
function LoveBirdsIcon({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 10 64 48" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Heart */}
      <path 
        d="M42.59,14.6236a6.4419,6.4419,0,0,0-1.5175-2.8164A6.8017,6.8017,0,0,0,32,11.3292a6.8018,6.8018,0,0,0-9.0723.478A6.4419,6.4419,0,0,0,21.41,14.6236a10.8517,10.8517,0,0,0,4.8159,12.0542l5.375,3.3785a.7482.7482,0,0,0,.7978,0l5.3755-3.3785A10.8522,10.8522,0,0,0,42.59,14.6236Z"
        fill="#C24137"
      />
      {/* Left Bird Body */}
      <path 
        d="M29.769,37.7408a3.7642,3.7642,0,0,1-2.0151-1.5849A4.4379,4.4379,0,0,0,24.22,34.0953l-.0356,0c-1.8262.0171-3.6651,1.3462-5.47,3.9531-1.91-.5429-8.7817-2.76-11.4345-7.1816a.7482.7482,0,0,0-.5738-.3608.7378.7378,0,0,0-.63.2485,8.1736,8.1736,0,0,0-1.7476,6.0117c.3242,2.8906,2.1553,5.6607,5.4478,8.2461a9.4357,9.4357,0,0,1-6.5059.6919.75.75,0,0,0-.9473.5957,6.751,6.751,0,0,0,5.0782,7.8545.7523.7523,0,0,0,.3921-.0064c.1567-.0454,3.5507-1.0532,4.7627-3.69a10.4155,10.4155,0,0,0,6.7465.0215,9.5609,9.5609,0,0,0,5.2784-5.3677,14.7238,14.7238,0,0,0,.8339-2.6562c.2476-1.0386,1.1348-2.8409,4.2925-3.2373a.75.75,0,0,0,.0615-1.4781Z"
        fill="#8C4B27"
      />
      {/* Left Bird Wing */}
      <path 
        d="M19.6108,34.678c-2.3253-1.1541-6.0427-3.4067-6.7182-6.2775a.75.75,0,0,0-1.4033-.1587,10.9,10.9,0,0,0-.8684,4.1845,23.6267,23.6267,0,0,0,7.5153,3.878A14.0565,14.0565,0,0,1,19.6108,34.678Z"
        fill="#6E4141"
      />
      {/* Right Bird Body */}
      <path 
        d="M61.6768,46.3a.75.75,0,0,0-.9473-.5957,9.4357,9.4357,0,0,1-6.5059-.6919c3.2925-2.5854,5.1236-5.3555,5.4478-8.2461a8.1736,8.1736,0,0,0-1.7476-6.0117.7378.7378,0,0,0-.63-.2485.7482.7482,0,0,0-.5738.3608c-2.6528,4.4219-9.5249,6.6387-11.4345,7.1816-1.8047-2.6069-3.6436-3.936-5.47-3.9531l-.0356,0a4.4379,4.4379,0,0,0-3.5337,2.0606,3.7642,3.7642,0,0,1-2.0151,1.5849.75.75,0,0,0,.0615,1.4781c3.1577.3964,4.0449,2.1987,4.2925,3.2373a14.7238,14.7238,0,0,0,.8339,2.6562A9.5609,9.5609,0,0,0,44.6973,50.48a10.4155,10.4155,0,0,0,6.7465-.0215c1.212,2.6367,4.606,3.6445,4.7627,3.69a.7523.7523,0,0,0,.3921.0064A6.751,6.751,0,0,0,61.6768,46.3Z"
        fill="#8C4B27"
      />
      {/* Right Bird Wing */}
      <path 
        d="M53.3791,32.4263a10.9,10.9,0,0,0-.8684-4.1845.75.75,0,0,0-1.4033.1587c-.6755,2.8708-4.3929,5.1234-6.7182,6.2775a14.0565,14.0565,0,0,1,1.4746,1.6263A23.6267,23.6267,0,0,0,53.3791,32.4263Z"
        fill="#6E4141"
      />
    </svg>
  );
}

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
  const cardFrameRef = useRef<HTMLDivElement>(null);
  const birdsContainerRef = useRef<HTMLDivElement>(null);
  const revealContentRef = useRef<HTMLDivElement>(null);
  const [hasTapped, setHasTapped] = useState(false);
  const [mounted, setMounted] = useState(true);

  // SVG Text Line refs for stroke animation
  const line1Ref = useRef<SVGTextElement>(null);
  const line2Ref = useRef<SVGTextElement>(null);
  const name1Ref = useRef<SVGTextElement>(null);
  const name2Ref = useRef<SVGTextElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleComplete = () => {
    setMounted(false);
    if (onOpenComplete) onOpenComplete();
    if (onComplete) onComplete();
  };

  const handleStartMusic = () => {
    if (onStartMusic) onStartMusic();
    if (onMusicStart) onMusicStart();
  };

  useEffect(() => {
    // Gentle floating bounce for love birds
    if (birdsContainerRef.current) {
      const tween = gsap.to(birdsContainerRef.current, {
        y: -8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      return () => {
        tween.kill();
      };
    }
  }, []);

  const handleTap = () => {
    if (hasTapped) return;
    setHasTapped(true);
    handleStartMusic();

    const tl = gsap.timeline();

    // 1. Fade out love birds & tap prompt
    tl.to(birdsContainerRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.5,
      ease: "power2.inOut",
    });

    // 2. Reveal cursive invitation text container
    tl.to(revealContentRef.current, {
      opacity: 1,
      visibility: "visible",
      duration: 0.3,
    });

    // 3. Stroke reveal animation on cursive text lines
    const strokeLines = [
      line1Ref.current,
      line2Ref.current,
      name1Ref.current,
      name2Ref.current,
    ].filter(Boolean) as SVGTextElement[];

    strokeLines.forEach((line) => {
      if (line) {
        gsap.set(line, {
          strokeDasharray: 2000,
          strokeDashoffset: 2000,
          opacity: 0,
        });
      }
    });

    // Animate stroke writing sequentially - each line becomes visible ONLY when its drawing starts
    strokeLines.forEach((line, index) => {
      tl.to(
        line,
        {
          opacity: 1,
          duration: 0.15,
          ease: "none",
        },
        index === 0 ? "+=0.1" : "-=0.3"
      );
      tl.to(
        line,
        {
          strokeDashoffset: 0,
          duration: 1.1,
          ease: "power1.inOut",
        },
        "<"
      );
    });

    // Fill in text softly
    tl.to(
      ".cursive-stroke-text",
      {
        fill: "#8C4B27",
        duration: 0.7,
        ease: "power2.out",
      },
      "+=0.1"
    );

    // Fade in date & venue details underneath
    tl.fromTo(
      detailsRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    );

    // 4. Hold for viewing, then dissolve opening card into main site
    tl.to(cardFrameRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 1.4,
      ease: "power3.inOut",
      delay: 2.3,
      onComplete: handleComplete,
    });
  };

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#141414] overflow-hidden">
      {/* Mobile-proportioned Card Frame with background texture */}
      <div 
        ref={cardFrameRef}
        className="w-full max-w-[440px] h-[100svh] relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[#FAF7F2] select-none cursor-pointer shadow-2xl"
        style={{
          backgroundImage: "url('/image copy.png'), url('/image-copy.png'), url('/assets/opening/parchment-bg.png')",
        }}
        onClick={handleTap}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleTap()}
        aria-label="Tap to open wedding invitation"
      >
        {/* Subtle warm wash for contrast */}
        <div className="absolute inset-0 bg-[#FAF7F2]/10 pointer-events-none" />

        {/* TAP INTRO: DEAD CENTER Love Birds + "TAP" */}
        {!hasTapped && (
          <div 
            ref={birdsContainerRef} 
            className="absolute inset-0 flex flex-col items-center justify-center p-6 cursor-pointer select-none z-30"
          >
            {/* Love Birds SVG (w-28 h-28 / w-32 h-32) */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center drop-shadow-md">
              <LoveBirdsIcon className="w-full h-full" />
            </div>

            {/* TAP Text Prompt */}
            <div className="pulse-element flex flex-col items-center text-center">
              <span 
                className="text-2xl sm:text-3xl font-semibold tracking-[0.3em] text-[#6E4141] uppercase"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                TAP
              </span>
              <span className="text-xs sm:text-sm text-[#8C4B27]/90 tracking-[0.25em] uppercase mt-1 font-semibold">
                TO OPEN
              </span>
            </div>
          </div>
        )}

        {/* REVEAL CONTENT: DEAD CENTER cursive handwriting & event details */}
        <div 
          ref={revealContentRef}
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-30 ${
            !hasTapped ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{ visibility: !hasTapped ? "hidden" : "visible" }}
        >
          <div className="w-full max-w-[340px] flex flex-col items-center">
            {/* SVG Handwriting Stroke Reveal matching screenshot */}
            <svg 
              viewBox="0 0 360 280" 
              className="w-full h-auto overflow-visible"
            >
              {/* Cursive Handwriting Group */}
              <g style={{ fontFamily: "'Alex Brush', 'Great Vibes', cursive" }}>
                {/* "You are cordially invited to celebrate the wedding of" */}
                <text
                  ref={line1Ref}
                  x="180"
                  y="45"
                  textAnchor="middle"
                  fontSize="28"
                  className="cursive-stroke-text"
                  style={{ opacity: 0 }}
                >
                  You are cordially invited
                </text>

                {/* "to the wedding celebration of" */}
                <text
                  ref={line2Ref}
                  x="180"
                  y="85"
                  textAnchor="middle"
                  fontSize="28"
                  className="cursive-stroke-text"
                  style={{ opacity: 0 }}
                >
                  to celebrate the wedding of
                </text>

                {/* Center Names: "Mradul &" */}
                <text
                  ref={name1Ref}
                  x="180"
                  y="155"
                  textAnchor="middle"
                  fontSize="52"
                  className="cursive-stroke-text"
                  style={{ opacity: 0 }}
                >
                  Mradul &amp;
                </text>

                {/* Center Names: "Shreya" */}
                <text
                  ref={name2Ref}
                  x="180"
                  y="215"
                  textAnchor="middle"
                  fontSize="54"
                  className="cursive-stroke-text"
                  style={{ opacity: 0 }}
                >
                  Shreya
                </text>
              </g>
            </svg>

            {/* EVENT DETAILS TEXT */}
            <div 
              ref={detailsRef}
              className="mt-2 flex flex-col items-center text-center text-[#4A2E2B]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <p className="text-[16px] sm:text-lg font-semibold tracking-wide text-[#3D2522]">
                February 2<sup>nd</sup> &amp; 3<sup>rd</sup>
              </p>
              <p className="text-xs sm:text-sm text-[#8C4B27] font-medium mt-0.5 tracking-wider uppercase">
                Taj Heritage • Goa
              </p>
              <p className="text-[11px] sm:text-xs text-[#6E4141] tracking-wider mt-0.5 italic">
                Vainguinim Beach, Dona Paula, Goa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpeningTransition;

