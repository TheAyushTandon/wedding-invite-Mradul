"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CalendarDays, MapPin, Heart } from "lucide-react";
import { WEDDING } from "@/data/wedding";
import { useLanguage } from "@/components/shared/LanguageContext";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountBlock({ value, label }: { value: number; label: string }) {
  const prev = useRef(value);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    if (prev.current !== value) {
      setTick(true);
      const t = setTimeout(() => setTick(false), 300);
      prev.current = value;
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center" style={{ minWidth: "4.5rem" }}>
      <div
        className="glass-card flex items-center justify-center"
        style={{
          width: "4.5rem",
          height: "4.5rem",
          marginBottom: "0.4rem",
          transform: tick ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.2s ease",
        }}
      >
        <span
          className="font-serif-wd"
          style={{ fontSize: "2.1rem", fontWeight: 700, color: "#1E0F0C" }}
          suppressHydrationWarning
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.72rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#4D261E",
          fontWeight: 700,
        }}
      >
        {label}
      </span>
    </div>
  );
}

const DEFAULT_TIME: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export function CountdownSection() {
  const [time, setTime] = useState<TimeLeft>(DEFAULT_TIME);
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
    setTime(getTimeLeft(WEDDING.countdownTarget));
    const interval = setInterval(() => {
      setTime(getTimeLeft(WEDDING.countdownTarget));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Mradul & Shreya Wedding");
    const details = encodeURIComponent("Join us for the wedding celebration of Mradul & Shreya at Taj Heritage, Goa");
    const location = encodeURIComponent("Taj Cidade de Goa Heritage, Vainguinim Beach, Dona Paula, Goa");
    const start = "20260202T083000Z"; // 2:00 PM IST
    const end = "20260203T180000Z";
    const url = `https://calendar.google.com/calendar/r/eventedit?text=${title}&details=${details}&location=${location}&dates=${start}/${end}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="countdown"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "center" }}
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
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-5"
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="w-36 sm:w-44 flex justify-center">
            <Image
              src={WEDDING.monogram}
              alt="M&S Monogram"
              width={180}
              height={90}
              className="w-full h-auto object-contain pointer-events-none select-none"
            />
          </motion.div>
        </motion.div>

        <SectionHeader
          eyebrow={t.countdownEyebrow}
          heading={t.countdownHeading}
          quote={t.countdownQuote}
        />

        <div className="flex justify-center mb-6">
          <Heart size={16} fill="#C24137" color="#C24137" />
        </div>

        {/* Countdown blocks - English digits with translated unit labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-3 mb-8"
        >
          <CountBlock value={time.days} label={t.days} />
          <CountBlock value={time.hours} label={t.hours} />
          <CountBlock value={time.minutes} label={t.minutes} />
          <CountBlock value={time.seconds} label={t.seconds} />
        </motion.div>

        {/* Date summary & Venue card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center gap-3 mb-8 mx-auto w-full max-w-[420px] px-5 py-4 rounded-2xl text-center"
          style={{
            background: "rgba(255, 252, 248, 0.88)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(140, 75, 39, 0.25)",
            boxShadow: "0 8px 24px rgba(77, 38, 30, 0.1)",
          }}
        >
          {/* Festivities Date */}
          <div className="flex items-center justify-center gap-2.5">
            <CalendarDays size={16} color="#8C4B27" className="flex-shrink-0" />
            <span
              className="font-serif-wd"
              style={{
                fontSize: "1.05rem",
                color: "#240E08",
                fontWeight: 600,
                letterSpacing: "0.01em",
              }}
            >
              {t.festivitiesCount}
            </span>
          </div>

          {/* Thin ornamental divider */}
          <div
            className="w-24 h-[1px]"
            style={{
              background: "linear-gradient(to right, transparent, rgba(140,75,39,0.35), transparent)",
            }}
          />

          {/* Venue Address */}
          <div className="flex items-start justify-center gap-2">
            <MapPin size={15} color="#8C4B27" className="flex-shrink-0 mt-0.5" />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#34140D",
                lineHeight: 1.5,
                letterSpacing: "0.015em",
              }}
            >
              {t.venueFullAddress}
            </span>
          </div>
        </motion.div>

        {/* Add to Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <button onClick={handleAddToCalendar} className="btn-primary">
            <CalendarDays size={15} />
            {t.addToCalendar}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default CountdownSection;
