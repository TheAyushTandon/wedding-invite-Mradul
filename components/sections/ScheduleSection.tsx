"use client";
import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { MapPin } from "lucide-react";
import { EVENTS, DAY1_EVENTS, DAY2_EVENTS } from "@/data/events";
import { WeddingEvent } from "@/types";
import { useLanguage } from "@/components/shared/LanguageContext";

function TimelineEventItem({ event, index, total }: { event: WeddingEvent; index: number; total: number }) {
  const isLast = index === total - 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="relative flex items-start gap-4 sm:gap-6 w-full pl-2 pr-1"
    >
      {/* Left Timeline Stem & Node */}
      <div className="relative self-stretch flex flex-col items-center flex-shrink-0" style={{ width: "28px" }}>
        {/* Continuous Connecting Line to Next Event */}
        {!isLast && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              bottom: "-12px",
              width: "2px",
              background: "#8C4B27",
              opacity: 0.65,
              zIndex: 1,
            }}
          />
        )}

        {/* Milestone Marker */}
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#FAF7F2",
            border: "2px solid #8C4B27",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 10px rgba(140,75,39,0.25)",
            zIndex: 2,
            marginTop: "2px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#8C4B27",
            }}
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 pb-10">
        {/* Time Badge without sparkle */}
        <div
          className="inline-flex items-center px-2.5 py-0.5 rounded-full mb-2"
          style={{ background: "rgba(140,75,39,0.08)", border: "1px solid rgba(140,75,39,0.18)" }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#8C4B27",
              fontWeight: 700,
            }}
          >
            {event.time}
          </span>
        </div>

        {/* Ceremony Title */}
        <h3
          className="heading-calligraphy"
          style={{
            fontSize: "2.1rem",
            lineHeight: 1.15,
            color: "#3D2522",
            marginBottom: "0.45rem",
          }}
        >
          {event.title}
        </h3>

        {/* Ceremony Description */}
        <p
          className="font-serif-wd"
          style={{
            fontSize: "1rem",
            color: "#5C3D2E",
            lineHeight: 1.65,
            marginBottom: "0.65rem",
            fontStyle: "italic",
          }}
        >
          {event.description}
        </p>

        {/* Location Marker */}
        <div className="flex items-center gap-1.5">
          <MapPin size={13} color="#8C4B27" style={{ flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.7rem",
              color: "#6E4141",
              fontWeight: 600,
              letterSpacing: "0.03em",
            }}
          >
            {event.location}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function ScheduleSection() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const { t } = useLanguage();
  const allEvents = t.eventsList || EVENTS;
  const events = allEvents.filter((e) => e.day === activeDay);

  return (
    <section
      id="schedule"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}
    >
      <Image
        src="/assets/schedule/floral-arch-bg.png"
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
          eyebrow={t.itineraryEyebrow}
          heading={t.scheduleHeading}
          quote={t.scheduleQuote}
        />

        {/* Day Switcher */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2].map((day, i) => (
            <Fragment key={day}>
              {i === 1 && (
                <span
                  style={{
                    color: "#8C4B27",
                    margin: "0 0.5rem",
                    fontSize: "0.6rem",
                  }}
                >
                  ✦
                </span>
              )}
              <button
                onClick={() => setActiveDay(day as 1 | 2)}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: activeDay === day ? "#8C4B27" : "#8A7D78",
                  background: activeDay === day ? "rgba(140,75,39,0.08)" : "transparent",
                  border: "none",
                  borderBottom:
                    activeDay === day
                      ? "2px solid #8C4B27"
                      : "2px solid transparent",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "0.4rem 0.4rem 0 0",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {day === 1 ? t.day1 : t.day2}
              </button>
            </Fragment>
          ))}
        </div>

        {/* Vertical Connected Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-full max-w-[420px] mx-auto mt-2"
          >
            {events.map((event, i) => (
              <TimelineEventItem
                key={event.id}
                event={event}
                index={i}
                total={events.length}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ScheduleSection;
