"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ATTIRE } from "@/data/attire";

export function AttireSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = ATTIRE[activeTab];
  const tabs = ["Haldi", "Sangeet", "Pheras", "Gala"];

  return (
    <section id="attire" className="section-bg" style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}>
      <Image src="/assets/attire/coastal-terrace-bg.png" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.90)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow="✦ DRESS CODE ✦"
          heading="Attire & Dress Code"
          quote="Dress as you feel — elegant, festive, and celebratory."
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

        {/* 4-tab selector */}
        <div className="flex rounded-full overflow-hidden mb-8" style={{ border: "1.5px solid rgba(140,75,39,0.25)", background: "rgba(255,255,255,0.60)" }}>
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                flex: 1,
                padding: "0.6rem 0.25rem",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: activeTab === i ? "#8C4B27" : "transparent",
                color: activeTab === i ? "white" : "#6E4141",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                borderRadius: activeTab === i ? "9999px" : 0,
              }}
              aria-pressed={activeTab === i}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-card p-5 mb-4">
              {/* Event label */}
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8C4B27", fontWeight: 600, marginBottom: "0.35rem" }}>
                {current.day}
              </p>
              <h3 className="heading-calligraphy" style={{ fontSize: "1.9rem", marginBottom: "0.75rem" }}>
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
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.5rem", color: "#6E4141", fontWeight: 500 }}>
                      {current.colors[i]}
                    </span>
                  </div>
                ))}
              </div>

              <p className="font-serif-wd" style={{ fontSize: "0.92rem", color: "#4A2E2B", lineHeight: 1.7, fontStyle: "italic" }}>
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
