"use client";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { MapPin } from "lucide-react";
import { EVENTS } from "@/data/events";
import { WeddingEvent } from "@/types";
import { useLanguage } from "@/components/shared/LanguageContext";

// ══════════════════════════════════════════════════════════════
// AUTHENTIC INDIAN WEDDING MOTIF SVGs
// Handcrafted traditional motifs: Kalash, Dholak, Agni Kund (Havan), Diya
// ══════════════════════════════════════════════════════════════

function HaldiKalashMotif({ color = "#D97706", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sacred Coconut with Tilak */}
      <path d="M12 2C10.5 3.8 10.5 5.8 12 6.8C13.5 5.8 13.5 3.8 12 2Z" fill={color} />
      {/* Mango leaves (Amra Pallav) sprouting outwards */}
      <path d="M8.5 5.2C6 4.8 4.8 6.5 5.2 8C7.2 7.6 9 6.8 9 6.8" stroke="#15803D" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M15.5 5.2C18 4.8 19.2 6.5 18.8 8C16.8 7.6 15 6.8 15 6.8" stroke="#15803D" strokeWidth="1.3" strokeLinecap="round" />
      {/* Marigold flower garland (Genda Phool mala) around Kalash neck */}
      <circle cx="8" cy="8" r="1.5" fill="#F59E0B" />
      <circle cx="12" cy="8.2" r="1.6" fill="#F97316" />
      <circle cx="16" cy="8" r="1.5" fill="#F59E0B" />
      {/* Pot Rim */}
      <path d="M7.5 8.8H16.5C17 8.8 17.5 9.2 17 9.8L16.2 10.5H7.8L7 9.8C6.5 9.2 7 8.8 7.5 8.8Z" fill={color} />
      {/* Sacred Golden Kalash Pot Belly */}
      <path d="M7.8 10.5C5.8 12.5 5.5 16 8 18.8C9.5 20.4 14.5 20.4 16 18.8C18.5 16 18.2 12.5 16.2 10.5H7.8Z" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1.4" />
      {/* Auspicious Sacred Thread (Kalava / Mauli) in vibrant orange/red */}
      <path d="M7.2 14H16.8" stroke="#EA580C" strokeWidth="1.4" strokeDasharray="1.8 1.5" />
      {/* Auspicious Turmeric / Haldi Center Tilak */}
      <circle cx="12" cy="15.5" r="1.5" fill="#F59E0B" />
    </svg>
  );
}

function SangeetDholMotif({ color = "#8C4B27", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left drum face */}
      <ellipse cx="6" cy="12" rx="2.5" ry="5.5" stroke={color} strokeWidth="1.4" />
      {/* Right drum face */}
      <ellipse cx="18" cy="12" rx="2.5" ry="5.5" stroke={color} strokeWidth="1.4" fill="none" />
      {/* Barrel body */}
      <path d="M6 6.5C10 5 14 5 18 6.5" stroke={color} strokeWidth="1.4" />
      <path d="M6 17.5C10 19 14 19 18 17.5" stroke={color} strokeWidth="1.4" />
      {/* Crossed tuning ropes (Rassi) */}
      <path d="M6.5 7.5L17.5 16.5" stroke={color} strokeWidth="1" strokeOpacity="0.85" />
      <path d="M6.5 16.5L17.5 7.5" stroke={color} strokeWidth="1" strokeOpacity="0.85" />
      <path d="M9 6L15 18" stroke={color} strokeWidth="0.9" strokeOpacity="0.7" />
      <path d="M9 18L15 6" stroke={color} strokeWidth="0.9" strokeOpacity="0.7" />
    </svg>
  );
}

function PherasAgniMotif({ color = "#8C4B27", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Havan Kund base (tiered altar) */}
      <path d="M5 18H19L17 21H7L5 18Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.3" />
      <path d="M3 15H21L19 18H5L3 15Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round" />
      {/* Sacred Holy Fire Flames (Agni Shikha) */}
      <path
        d="M12 2.5C12 2.5 14 5.5 13.5 7.5C15 6.5 16.5 7.5 16 9.5C17.5 10 18 11.8 17 13.5C15.8 15.5 13.8 15 12 15C10.2 15 8.2 15.5 7 13.5C6 11.8 6.5 10 8 9.5C7.5 7.5 9 6.5 10.5 7.5C10 5.5 12 2.5 12 2.5Z"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner flame core */}
      <path
        d="M12 7C12.8 8.5 13.5 9.8 13 11C13.8 11.5 14 12.5 13 13.5C12.5 14 11.5 14 12 14C11 14 10.5 13.5 11 12.5C10.2 11.5 10.8 9.8 12 7Z"
        fill={color}
      />
    </svg>
  );
}

function BaraatPagriMotif({ color = "#8C4B27", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Royal Kalgi Plume / Feather Jewel on Top */}
      <path
        d="M12 1.5C10.8 3 10.5 4.5 11.2 5.5C12 4.5 12.8 3 12 1.5Z"
        fill={color}
      />
      <circle cx="11.5" cy="5.8" r="1" fill={color} />
      {/* Saffron / Silk Turra (flared crest on top-left of safa) */}
      <path
        d="M7 4.5C8 5.5 10 6 11 6L9 9C7.5 8 6.5 6.5 7 4.5Z"
        fill={color}
        fillOpacity="0.3"
        stroke={color}
        strokeWidth="1.1"
      />
      {/* Royal Pagri / Safa Main Dome (upper folds) */}
      <path
        d="M6 10.5C6 7.5 8.5 6 12 6C15.5 6 18 7.5 18 10.5C18 12 16.5 13 14 13.5H10C7.5 13 6 12 6 10.5Z"
        fill={color}
        fillOpacity="0.22"
        stroke={color}
        strokeWidth="1.3"
      />
      {/* Elegant Swirling Fabric Folds / Pheta Wraps */}
      <path
        d="M6.5 10C8.5 11.8 15.5 11.8 17.5 10"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M5 13C8 14.8 16 14.8 19 13"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Pagri Base Band / Forehead Wrap */}
      <path
        d="M5 13.2C4.5 14.5 5.5 16 7 16.2H17C18.5 16 19.5 14.5 19 13.2L18.2 15.2C17.5 16.5 15.5 17 12 17C8.5 17 6.5 16.5 5.8 15.2L5 13.2Z"
        fill={color}
      />
      {/* Flowing Festive Silk Tail / Chunri (Lappu / Palla on the side) */}
      <path
        d="M17.5 15.5C18.2 17 19.5 18.5 19 21.5C18 20 17 19 16.5 17"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GalaDiyaMotif({ color = "#8C4B27", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Diya Clay Base */}
      <path
        d="M4 13C4 17.5 7.5 20 12 20C16.5 20 20 17.5 20 13C20 13 17 14 12 14C7 14 4 13 4 13Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="1.4"
      />
      {/* Decorative Diya Rim */}
      <path d="M3.5 13C8 14.5 16 14.5 20.5 13" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      {/* Radiant Jyoti / Flame */}
      <path
        d="M12 3C10.5 6 9.5 8 10 10C10.5 11.5 11.2 12.5 12 12.5C12.8 12.5 13.5 11.5 14 10C14.5 8 13.5 6 12 3Z"
        fill={color}
        stroke={color}
        strokeWidth="0.8"
      />
      {/* Inner radiant teardrop */}
      <circle cx="12" cy="9.5" r="1.2" fill="#FFF6DD" />
      {/* Ambient Sparkle Flares */}
      <path d="M6 7L7 8M18 7L17 8" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function getEventMotif(id: string) {
  switch (id) {
    case "haldi":
      return {
        Component: HaldiKalashMotif,
        color: "#D97706",
        bgColor: "rgba(245, 158, 11, 0.16)",
        borderColor: "rgba(217, 119, 6, 0.40)",
        name: "मङ्गल कलश",
      };
    case "sangeet":
      return {
        Component: SangeetDholMotif,
        color: "#8C4B27",
        bgColor: "rgba(140, 75, 39, 0.10)",
        borderColor: "rgba(140, 75, 39, 0.30)",
        name: "ढोल उत्सव",
      };
    case "baraat":
      return {
        Component: BaraatPagriMotif,
        color: "#C2410C",
        bgColor: "rgba(194, 65, 12, 0.12)",
        borderColor: "rgba(194, 65, 12, 0.35)",
        name: "शाही साफ़ा",
      };
    case "pheras":
      return {
        Component: PherasAgniMotif,
        color: "#991B1B",
        bgColor: "rgba(220, 38, 38, 0.10)",
        borderColor: "rgba(153, 27, 27, 0.35)",
        name: "अग्नि साक्ष्य",
      };
    case "gala":
      return {
        Component: GalaDiyaMotif,
        color: "#A16207",
        bgColor: "rgba(202, 138, 4, 0.12)",
        borderColor: "rgba(161, 98, 7, 0.35)",
        name: "दीपावली प्रभा",
      };
    default:
      return {
        Component: HaldiKalashMotif,
        color: "#8C4B27",
        bgColor: "rgba(140, 75, 39, 0.10)",
        borderColor: "rgba(140, 75, 39, 0.25)",
        name: "शुभ मङ्गल",
      };
  }
}

function TimelineEventItem({ event, index, total }: { event: WeddingEvent; index: number; total: number }) {
  const isLast = index === total - 1;
  const motif = getEventMotif(event.id);
  const MotifComponent = motif.Component;

  return (
    <div className="relative flex items-start gap-3.5 sm:gap-5 w-full pl-1 sm:pl-2 pr-1">
      {/* Left Timeline Stem & Node */}
      <div className="relative self-stretch flex flex-col items-center flex-shrink-0" style={{ width: "34px" }}>
        {/* Continuous Connecting Line to Next Event */}
        {!isLast && (
          <div
            style={{
              position: "absolute",
              top: "16px",
              bottom: "-14px",
              width: "2px",
              background: "linear-gradient(to bottom, #8C4B27, rgba(140,75,39,0.35))",
              opacity: 0.65,
              zIndex: 1,
            }}
          />
        )}

        {/* Milestone Marker with Handcrafted Indian Motif */}
        <div
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            background: "#FAF7F2",
            border: `2px solid ${motif.color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 3px 12px ${motif.color}35`,
            zIndex: 2,
            marginTop: "1px",
          }}
          title={motif.name}
        >
          <MotifComponent color={motif.color} size={18} />
        </div>
      </div>

      {/* Right Content */}
      <div className={`flex-1 ${isLast ? "pb-4" : "pb-10"}`}>
        {/* Time Badge with Mini Motif */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2.5"
          style={{
            background: motif.bgColor,
            border: `1px solid ${motif.borderColor}`,
          }}
        >
          <MotifComponent color={motif.color} size={14} />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: motif.color,
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
