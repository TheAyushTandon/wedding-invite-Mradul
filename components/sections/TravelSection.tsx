"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AIRPORTS_BY_LANG, TRAINS_BY_LANG } from "@/data/travel";
import {
  Plane,
  TrainFront,
  MapPin,
  Clock,
  Car,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";

export function TravelSection() {
  const [mode, setMode] = useState<"air" | "train">("air");
  const [activeAirIndex, setActiveAirIndex] = useState(0);
  const [activeTrainIndex, setActiveTrainIndex] = useState(0);

  const { t, lang } = useLanguage();

  const airports =
    (lang && AIRPORTS_BY_LANG && AIRPORTS_BY_LANG[lang]) ||
    AIRPORTS_BY_LANG?.en ||
    [];
  const trains =
    (lang && TRAINS_BY_LANG && TRAINS_BY_LANG[lang]) ||
    TRAINS_BY_LANG?.en ||
    [];

  const currentList = mode === "air" ? airports : trains;
  const activeIndex = mode === "air" ? activeAirIndex : activeTrainIndex;
  const setActiveIndex = (idx: number) => {
    if (mode === "air") {
      setActiveAirIndex(idx);
    } else {
      setActiveTrainIndex(idx);
    }
  };

  const item = currentList[activeIndex] || currentList[0] || {};

  return (
    <section
      id="travel"
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
          eyebrow={t.travelEyebrow}
          heading={t.travelHeading}
          quote={t.travelQuote}
        />

        {/* Mode Selector: Flights vs Trains */}
        <div className="flex justify-center mb-4">
          <div
            className="inline-flex p-1 rounded-full gap-1"
            style={{
              background: "rgba(140,75,39,0.10)",
              backdropFilter: "blur(10px)",
              border: "1.5px solid rgba(140,75,39,0.22)",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setMode("air")}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all text-xs font-semibold"
              style={{
                fontFamily: "var(--font-sans)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                background: mode === "air" ? "#8C4B27" : "transparent",
                color: mode === "air" ? "#ffffff" : "#4A2818",
                boxShadow:
                  mode === "air" ? "0 3px 12px rgba(140,75,39,0.30)" : "none",
                cursor: "pointer",
                border: "none",
              }}
              aria-pressed={mode === "air"}
            >
              <Plane size={14} />
              <span>{t.byAirTab}</span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setMode("train")}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all text-xs font-semibold"
              style={{
                fontFamily: "var(--font-sans)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                background: mode === "train" ? "#8C4B27" : "transparent",
                color: mode === "train" ? "#ffffff" : "#4A2818",
                boxShadow:
                  mode === "train" ? "0 3px 12px rgba(140,75,39,0.30)" : "none",
                cursor: "pointer",
                border: "none",
              }}
              aria-pressed={mode === "train"}
            >
              <TrainFront size={14} />
              <span>{t.byTrainTab}</span>
            </motion.button>
          </div>
        </div>

        {/* Airport / Station Hub Selector */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {currentList.map((hub, i) => {
            const isSelected = activeIndex === i;
            return (
              <motion.button
                key={hub.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveIndex(i)}
                className="flex-1 min-w-[100px] flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full transition-all text-center"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: isSelected
                    ? "none"
                    : "1.5px solid rgba(140,75,39,0.30)",
                  background: isSelected
                    ? "#8C4B27"
                    : "rgba(255,255,255,0.70)",
                  color: isSelected ? "white" : "#261512",
                  cursor: "pointer",
                  boxShadow: isSelected
                    ? "0 4px 12px rgba(140,75,39,0.25)"
                    : "none",
                }}
                aria-pressed={isSelected}
              >
                {mode === "air" ? (
                  <Plane size={12} />
                ) : (
                  <TrainFront size={12} />
                )}
                <span>{hub.code}</span>
                {hub.preferred ? (
                  <span className="hidden sm:inline">
                    {" "}
                    • {t.preferredTabLabel}
                  </span>
                ) : null}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${lang}-${mode}-${item.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-5"
          >
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                style={{
                  display: "inline-block",
                  background: item.preferred
                    ? "rgba(212,175,55,0.20)"
                    : "rgba(140,75,39,0.10)",
                  color: item.preferred ? "#B8860B" : "#8C4B27",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "9999px",
                  border: item.preferred
                    ? "1px solid rgba(212,175,55,0.40)"
                    : "1px solid rgba(140,75,39,0.20)",
                }}
              >
                {item.badge}
              </span>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  background: "rgba(255,255,255,0.60)",
                  color: "#5C3317",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(140,75,39,0.15)",
                }}
              >
                {mode === "air" ? (
                  <>
                    <Plane size={11} color="#8C4B27" />
                    {t.airportTitle}
                  </>
                ) : (
                  <>
                    <TrainFront size={11} color="#8C4B27" />
                    {t.stationTitle}
                  </>
                )}
              </span>
            </div>

            {/* Hub Code + Name */}
            <div className="flex items-center gap-3 mb-2">
              <span
                style={{
                  fontSize: "2.1rem",
                  fontWeight: 700,
                  color: "#1E0F0C",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.08em",
                }}
              >
                {item.code}
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#1E0F0C",
                marginBottom: "0.5rem",
              }}
            >
              {item.name}
            </p>
            <p
              className="font-serif-wd"
              style={{
                fontSize: "0.98rem",
                color: "#381B14",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}
            >
              {item.description}
            </p>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div
                style={{
                  background: "rgba(140,75,39,0.06)",
                  borderRadius: "0.75rem",
                  padding: "0.875rem",
                }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin size={13} color="#8C4B27" />
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.68rem",
                      color: "#8C4B27",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {t.distanceLabel}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.05rem",
                    color: "#1E0F0C",
                    fontWeight: 700,
                  }}
                >
                  {item.distance}
                </p>
              </div>
              <div
                style={{
                  background: "rgba(140,75,39,0.06)",
                  borderRadius: "0.75rem",
                  padding: "0.875rem",
                }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Clock size={13} color="#8C4B27" />
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.68rem",
                      color: "#8C4B27",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {t.travelTimeLabel}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.05rem",
                    color: "#1E0F0C",
                    fontWeight: 700,
                  }}
                >
                  {item.travelTime}
                </p>
              </div>
            </div>

            {/* Route */}
            <div
              className="flex items-start gap-2 mb-4 p-3 rounded-xl"
              style={{ background: "rgba(140,75,39,0.06)" }}
            >
              <Car
                size={15}
                color="#8C4B27"
                style={{ flexShrink: 0, marginTop: "2px" }}
              />
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "#261512",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "#8C4B27" }}>
                  {t.recommendedRoute}:{" "}
                </strong>
                {item.route}
              </p>
            </div>

            {/* Tips */}
            <div className="mb-5">
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#8C4B27",
                  marginBottom: "0.6rem",
                }}
              >
                {t.arrivalGuidance}
              </p>
              <div className="flex flex-col gap-2">
                {item.tips?.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2
                      size={13}
                      color="#8C4B27"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <p
                      className="font-serif-wd"
                      style={{
                        fontSize: "0.94rem",
                        color: "#23110C",
                        fontWeight: 500,
                        lineHeight: 1.55,
                      }}
                    >
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Maps CTA */}
            <a
              href={item.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <ExternalLink size={14} />
              {t.openDirections}
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default TravelSection;
