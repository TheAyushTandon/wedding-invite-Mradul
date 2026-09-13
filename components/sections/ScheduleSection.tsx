"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { HairlineDivider } from "@/components/shared/HairlineDivider";
import { MapPin } from "lucide-react";
import { DAY1_EVENTS, DAY2_EVENTS } from "@/data/events";
import { WeddingEvent } from "@/types";

function EventCard({ event, delay }: { event: WeddingEvent; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className="glass-card p-5"
    >
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.62rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#8C4B27",
          fontWeight: 600,
          marginBottom: "0.35rem",
        }}
      >
        {event.time}
      </p>
      <h3
        className="heading-calligraphy"
        style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}
      >
        {event.title}
      </h3>
      <p
        className="font-serif-wd"
        style={{ fontSize: "0.9rem", color: "#5C3D2E", lineHeight: 1.65, marginBottom: "0.75rem", fontStyle: "italic" }}
      >
        {event.description}
      </p>
      <div className="flex items-start gap-1.5">
        <MapPin size={13} color="#8C4B27" style={{ flexShrink: 0, marginTop: "2px" }} />
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.68rem",
            color: "#6E4141",
            fontWeight: 500,
          }}
        >
          {event.location}
        </span>
      </div>
    </motion.div>
  );
}

export function ScheduleSection() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const events = activeDay === 1 ? DAY1_EVENTS : DAY2_EVENTS;

  return (
    <section
      id="schedule"
      className="section-bg"
      style={{ minHeight: "100dvh", display: "flex", alignItems: "flex-start" }}
    >
      <Image src="/assets/schedule/floral-arch-bg.png" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.88)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow="✦ ITINERARY ✦"
          heading="Celebration Schedule"
          quote="Two unforgettable days of love, laughter, and cherished moments."
        />

        {/* Day switcher */}
        <div className="flex items-center justify-center gap-0 mb-8">
          {[1, 2].map((day, i) => (
            <>
              {i === 1 && (
                <span style={{ color: "#8C4B27", margin: "0 0.75rem", fontSize: "0.5rem" }}>✦</span>
              )}
              <button
                key={day}
                onClick={() => setActiveDay(day as 1 | 2)}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: activeDay === day ? "#8C4B27" : "#9B9B9B",
                  background: "none",
                  border: "none",
                  borderBottom: activeDay === day ? "2px solid #8C4B27" : "2px solid transparent",
                  paddingBottom: "0.4rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {day === 1 ? "DAY 1 • HALDI & SANGEET" : "DAY 2 • PHERAS & GALA"}
              </button>
            </>
          ))}
        </div>

        {/* Events */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4"
          >
            {events.map((event, i) => (
              <>
                <EventCard key={event.id} event={event} delay={i * 0.08} />
                {i < events.length - 1 && <HairlineDivider key={`div-${event.id}`} />}
              </>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
