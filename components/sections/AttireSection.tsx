"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ATTIRE_BY_LANG, ATTIRE_TABS_BY_LANG } from "@/data/attire";
import { useLanguage } from "@/components/shared/LanguageContext";

export function AttireSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { t, lang } = useLanguage();
  const attireList = (lang && ATTIRE_BY_LANG && ATTIRE_BY_LANG[lang]) || ATTIRE_BY_LANG?.en || [];
  const current = attireList[activeTab] || attireList[0] || {};
  const tabs = (lang && ATTIRE_TABS_BY_LANG && ATTIRE_TABS_BY_LANG[lang]) || ATTIRE_TABS_BY_LANG?.en || [];

  return (
    <section
      id="attire"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}
    >
      <Image
        src="/assets/attire/coastal-terrace-bg.png"
        alt=""
        fill
        className="section-bg-img"
        style={{ objectPosition: "center top" }}
      />
      <div
        className="section-overlay"
        style={{ background: "rgba(250,247,242,0.90)" }}
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

        {/* 4-tab selector with translated event names */}
        <div
          className="flex rounded-full overflow-hidden mb-8 p-1 relative"
          style={{
            border: "1.5px solid rgba(140,75,39,0.25)",
            background: "rgba(255,255,255,0.70)",
          }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="relative flex-1 py-2 px-1 text-center border-none cursor-pointer z-10 transition-colors duration-200 bg-transparent"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: activeTab === i ? "#FFFFFF" : "#6E4141",
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
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${lang}-${activeTab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-card p-5 mb-4">
              {/* Event label */}
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#8C4B27",
                  fontWeight: 700,
                  marginBottom: "0.35rem",
                }}
              >
                {current.day}
              </p>
              <h3
                className="heading-calligraphy"
                style={{ fontSize: "1.9rem", marginBottom: "0.75rem", color: "#3D2522" }}
              >
                {current.dressCode}
              </h3>

              {/* Color swatches */}
              <div className="flex gap-2 mb-4">
                {current.colorHex.map((hex, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      style={{
                        width: "2.2rem",
                        height: "2.2rem",
                        borderRadius: "50%",
                        background: hex,
                        border: "2px solid rgba(140,75,39,0.20)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.58rem",
                        color: "#6E4141",
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
                  fontSize: "0.95rem",
                  color: "#4A2E2B",
                  lineHeight: 1.75,
                  fontStyle: "italic",
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
                width={380}
                height={240}
                className="w-full max-w-[380px] h-auto object-contain drop-shadow-md"
                style={{ opacity: 0.95 }}
                priority={activeTab === 0}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AttireSection;
