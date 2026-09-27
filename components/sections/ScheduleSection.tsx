"use client";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { MapPin } from "lucide-react";
import { EVENTS } from "@/data/events";
import { WeddingEvent } from "@/types";
import { useLanguage } from "@/components/shared/LanguageContext";

function TimelineEventItem({ event, index, total }: { event: WeddingEvent; index: number; total: number }) {
  const isLast = index === total - 1;

  return (
    <div className="relative flex items-start gap-4 sm:gap-6 w-full pl-2 pr-1">
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
      <div className={`flex-1 ${isLast ? "pb-4" : "pb-10"}`}>
        {/* Time Badge */}
        <div
          className="inline-flex items-center px-3 py-1 rounded-full mb-2.5"
          style={{ background: "rgba(140,75,39,0.08)", border: "1px solid rgba(140,75,39,0.22)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
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
            fontSize: "1.75rem",
            lineHeight: 1.25,
            color: "#1E0F0C",
            fontWeight: 600,
            marginBottom: "0.45rem",
            letterSpacing: "0.015em",
          }}
        >
          {event.title}
        </h3>

        {/* Ceremony Description */}
        <p
          className="font-serif-wd"
          style={{
            fontSize: "1.02rem",
            color: "#3F2018",
            lineHeight: 1.7,
            marginBottom: "0.65rem",
          }}
        >
          {event.description}
        </p>

        {/* Location Marker */}
        <div className="flex items-center gap-2">
          <MapPin size={14} color="#8C4B27" style={{ flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              color: "#4D261E",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            {event.location}
          </span>
        </div>
      </div>
    </div>
  );
}

function DayDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 pt-3 pb-6 w-full">
      <div
        className="h-[1px] flex-1"
        style={{
          background: "linear-gradient(to right, transparent, rgba(140,75,39,0.4))",
        }}
      />
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.78rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#8C4B27",
          background: "rgba(140,75,39,0.08)",
          border: "1px solid rgba(140,75,39,0.22)",
          padding: "0.45rem 1.15rem",
          borderRadius: "9999px",
          boxShadow: "0 2px 8px rgba(140,75,39,0.08)",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.45rem",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
        <span style={{ fontSize: "0.55rem", opacity: 0.75 }}>✦</span>
        <span>{title}</span>
        <span style={{ fontSize: "0.55rem", opacity: 0.75 }}>✦</span>
      </div>
      <div
        className="h-[1px] flex-1"
        style={{
          background: "linear-gradient(to left, transparent, rgba(140,75,39,0.4))",
        }}
      />
    </div>
  );
}

export function ScheduleSection() {
  const { t } = useLanguage();
  const allEvents = t.eventsList || EVENTS;
  const day1Events = allEvents.filter((e) => e.day === 1);
  const day2Events = allEvents.filter((e) => e.day === 2);

  return (
    <section
      id="schedule"
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
          eyebrow={t.itineraryEyebrow}
          heading={t.scheduleHeading}
          quote={t.scheduleQuote}
        />

        <div className="flex flex-col w-full max-w-[440px] mx-auto mt-6">
          {/* Day 1 */}
          <DayDivider title={t.day1} />
          <div className="flex flex-col w-full mb-4">
            {day1Events.map((event, i) => (
              <TimelineEventItem
                key={event.id}
                event={event}
                index={i}
                total={day1Events.length}
              />
            ))}
          </div>

          {/* Day 2 */}
          <DayDivider title={t.day2} />
          <div className="flex flex-col w-full">
            {day2Events.map((event, i) => (
              <TimelineEventItem
                key={event.id}
                event={event}
                index={i}
                total={day2Events.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScheduleSection;
