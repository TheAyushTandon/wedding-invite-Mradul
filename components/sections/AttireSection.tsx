"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ATTIRE_BY_LANG, ATTIRE_TABS_BY_LANG } from "@/data/attire";
import { useLanguage } from "@/components/shared/LanguageContext";

// Handcrafted traditional motifs for attire tabs
function TabKalashMotif({ color = "#F59E0B", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C10.5 3.8 10.5 5.8 12 6.8C13.5 5.8 13.5 3.8 12 2Z" fill={color} />
      <path d="M8.5 5.2C6 4.8 4.8 6.5 5.2 8C7.2 7.6 9 6.8 9 6.8" stroke="#15803D" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15.5 5.2C18 4.8 19.2 6.5 18.8 8C16.8 7.6 15 6.8 15 6.8" stroke="#15803D" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="8" r="1.3" fill="#F59E0B" />
      <circle cx="12" cy="8.2" r="1.4" fill="#F97316" />
      <circle cx="16" cy="8" r="1.3" fill="#F59E0B" />
      <path d="M7.5 8.8H16.5C17 8.8 17.5 9.2 17 9.8L16.2 10.5H7.8L7 9.8C6.5 9.2 7 8.8 7.5 8.8Z" fill={color} />
      <path d="M7.8 10.5C5.8 12.5 5.5 16 8 18.8C9.5 20.4 14.5 20.4 16 18.8C18.5 16 18.2 12.5 16.2 10.5H7.8Z" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1.3" />
      <circle cx="12" cy="15.5" r="1.4" fill="#F59E0B" />
    </svg>
  );
}

function TabDholMotif({ color = "#50C878", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="6" cy="12" rx="2.5" ry="5.5" stroke={color} strokeWidth="1.3" />
      <ellipse cx="18" cy="12" rx="2.5" ry="5.5" stroke={color} strokeWidth="1.3" fill="none" />
      <path d="M6 6.5C10 5 14 5 18 6.5" stroke={color} strokeWidth="1.3" />
      <path d="M6 17.5C10 19 14 19 18 17.5" stroke={color} strokeWidth="1.3" />
      <path d="M6.5 7.5L17.5 16.5" stroke={color} strokeWidth="1" strokeOpacity="0.85" />
      <path d="M6.5 16.5L17.5 7.5" stroke={color} strokeWidth="1" strokeOpacity="0.85" />
    </svg>
  );
}

function TabPherasMotif({ color = "#C2410C", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sacred Havan Kund base */}
      <path d="M6 15L7.5 20H16.5L18 15H6Z" stroke={color} strokeWidth="1.3" fill={color} fillOpacity="0.2" />
      <path d="M4 15H20" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      {/* Sacred Agni / Fire Flames */}
      <path d="M12 4C10.5 7 9.5 9 10.5 11.5C11 12.5 11.5 13 12 13C12.5 13 13 12.5 13.5 11.5C14.5 9 13.5 7 12 4Z" fill={color} />
      <path d="M10 8.5C9 10 9 11.5 9.5 12.5C8.8 11.8 8.5 10.8 9 9.8L10 8.5Z" fill={color} fillOpacity="0.8" />
      <path d="M14 8.5C15 10 15 11.5 14.5 12.5C15.2 11.8 15.5 10.8 15 9.8L14 8.5Z" fill={color} fillOpacity="0.8" />
    </svg>
  );
}

function TabGalaMotif({ color = "#B45309", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Celebration Diya / Starlight */}
      <path d="M4 14C4 18 7.5 20 12 20C16.5 20 20 18 20 14C20 14 17 15 12 15C7 15 4 14 4 14Z" fill={color} fillOpacity="0.22" stroke={color} strokeWidth="1.2" />
      <path d="M12 4C10.8 7 10 9 10.8 11C11.2 11.8 11.6 12 12 12C12.4 12 12.8 11.8 13.2 11C14 9 13.2 7 12 4Z" fill={color} />
      <circle cx="6" cy="7" r="1" fill={color} />
      <circle cx="18" cy="7" r="1" fill={color} />
      <path d="M12 1V3" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function AttireSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t, lang } = useLanguage();
  const attireList = (lang && ATTIRE_BY_LANG && ATTIRE_BY_LANG[lang]) || ATTIRE_BY_LANG?.en || [];
  const tabs = (lang && ATTIRE_TABS_BY_LANG && ATTIRE_TABS_BY_LANG[lang]) || ATTIRE_TABS_BY_LANG?.en || [];

  // Auto-advance tabs every 6 seconds so guests see it's interactive & clickable
  useEffect(() => {
    if (isPaused || tabs.length === 0) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [tabs.length, activeTab, isPaused]);

  const current = attireList[activeTab] || attireList[0];

  const tabMotifs = [
    <TabKalashMotif key="kalash" color={activeTab === 0 ? "#FFFFFF" : "#D97706"} size={14} />,
    <TabDholMotif key="dhol" color={activeTab === 1 ? "#FFFFFF" : "#8C4B27"} size={14} />,
    <TabPherasMotif key="pheras" color={activeTab === 2 ? "#FFFFFF" : "#C2410C"} size={14} />,
    <TabGalaMotif key="gala" color={activeTab === 3 ? "#FFFFFF" : "#B45309"} size={14} />,
  ];

  return (
    <section
      id="attire"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}
    >
      <Image
        src="/assets/shared/all-page.jpeg"
        alt=""
        fill
        className="section-bg-img"
        style={{ objectPosition: "center top" }}
      />
      <div
        className="section-overlay"
        style={{ background: "rgba(250,247,242,0.35)" }}
      />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow={t.attireEyebrow}
          heading={t.attireHeading}
          quote={t.attireQuote}
        />

        {/* Floral crest */}
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/attire/floral-crest-header.png"
            alt=""
            width={120}
            height={70}
            style={{ objectFit: "contain", opacity: 0.85 }}
          />
        </div>

        {/* Thin, clean 4-tab selector: Haldi, Sangeet, Pheras, Gala */}
        <div
          className="flex rounded-full overflow-hidden mb-6 p-1 relative shadow-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          style={{
            border: "1.5px solid rgba(140,75,39,0.22)",
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="relative flex-1 py-2 px-1 sm:px-2.5 text-center border-none cursor-pointer z-10 transition-colors duration-200 bg-transparent flex items-center justify-center gap-1 sm:gap-1.5"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: activeTab === i ? "#FFFFFF" : "#543C36",
              }}
              aria-pressed={activeTab === i}
            >
              {activeTab === i && (
                <motion.div
                  layoutId="activeAttirePill"
                  className="absolute inset-0 rounded-full bg-[#8C4B27] shadow-[0_2px_8px_rgba(140,75,39,0.3)] -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span className="hidden sm:inline-flex">{tabMotifs[i]}</span>
              <span>{tab}</span>
            </button>
          ))}
        </div>

        <div className="min-h-[680px] sm:min-h-[620px] md:min-h-[580px] w-full flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${lang}-${activeTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="glass-card p-5 mb-4 flex-none">
              {/* Event label */}
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#8C4B27",
                    fontWeight: 700,
                  }}
                >
                  {current.day}
                </p>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8C4B27]/10 text-[#8C4B27]">
                  {activeTab === 0 && <TabKalashMotif color="#D97706" size={14} />}
                  {activeTab === 1 && <TabDholMotif color="#8C4B27" size={14} />}
                  {activeTab === 2 && <TabPherasMotif color="#C2410C" size={14} />}
                  {activeTab === 3 && <TabGalaMotif color="#B45309" size={14} />}
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider">{current.event}</span>
                </div>
              </div>

              <h3
                className="heading-calligraphy"
                style={{ fontSize: "1.75rem", marginBottom: "0.75rem", color: "#1E0F0C" }}
              >
                {current.dressCode}
              </h3>

              {/* Color swatches */}
              <div className="flex gap-2.5 mb-4 flex-wrap">
                {current.colorHex.map((hex, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      style={{
                        width: "2.3rem",
                        height: "2.3rem",
                        borderRadius: "50%",
                        background: hex,
                        border: "2px solid rgba(140,75,39,0.25)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.68rem",
                        color: "#4D261E",
                        fontWeight: 600,
                      }}
                    >
                      {current.colors[i] || ""}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="font-serif-wd"
                style={{
                  fontSize: "1.02rem",
                  color: "#1E0F0C",
                  fontWeight: 500,
                  lineHeight: 1.7,
                }}
              >
                {current.description}
              </p>
            </div>

            {/* Clothing illustration */}
            <div className="flex justify-center mt-2">
              <Image
                src={current.image}
                alt={`${current.event} attire illustration`}
                width={460}
                height={260}
                className={`w-full ${activeTab === 1 ? "max-w-[480px]" : "max-w-[390px]"} h-auto object-contain drop-shadow-md`}
                style={{ opacity: 0.95 }}
                priority={activeTab === 0 || activeTab === 1}
              />
            </div>
          </motion.div>
        </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AttireSection;
