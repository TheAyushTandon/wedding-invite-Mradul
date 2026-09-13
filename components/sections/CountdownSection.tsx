"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CalendarDays, MapPin, Heart } from "lucide-react";
import { WEDDING } from "@/data/wedding";

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
          style={{ fontSize: "2rem", fontWeight: 600, color: "#3D2522" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.55rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#6E4141",
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function CountdownSection() {
  const [time, setTime] = useState<TimeLeft>(() => getTimeLeft(WEDDING.countdownTarget));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft(WEDDING.countdownTarget));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Mradul & Shreya Wedding");
    const details = encodeURIComponent("Join us for the wedding of Mradul & Shreya at Taj Heritage, Goa");
    const location = encodeURIComponent("Taj Cidade de Goa Heritage, Vainguinim Beach, Dona Paula, Goa");
    const start = "20270202T103000Z";
    const end = "20270203T180000Z";
    const url = `https://calendar.google.com/calendar/r/eventedit?text=${title}&details=${details}&location=${location}&dates=${start}/${end}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="countdown"
      className="section-bg"
      style={{ minHeight: "100dvh", display: "flex", alignItems: "center" }}
    >
      <Image
        src="/assets/countdown/floral-arch-bg.png"
        alt=""
        fill
        className="section-bg-img"
        style={{ objectPosition: "center top" }}
      />
      <div
        className="section-overlay"
        style={{ background: "rgba(250,247,242,0.88)" }}
      />

      <div className="section-content section-pad w-full py-16">
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-6"
        >
          <motion.div whileHover={{ scale: 1.07 }} transition={{ duration: 0.2 }}>
            <Image
              src={WEDDING.monogram}
              alt="M&S Monogram"
              width={90}
              height={90}
              className="rounded-full"
              style={{ boxShadow: "0 4px 20px rgba(60,30,20,0.18)" }}
            />
          </motion.div>
        </motion.div>

        <SectionHeader
          eyebrow="✦ COUNTING DOWN ✦"
          heading={'Until We Say "I Do"'}
          quote="Two souls, one destiny. Every second brings us closer to our Goa celebration."
        />

        <div className="flex justify-center mb-6">
          <Heart size={16} fill="#C24137" color="#C24137" />
        </div>

        {/* Countdown blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-3 mb-8"
        >
          <CountBlock value={time.days} label="Days" />
          <CountBlock value={time.hours} label="Hours" />
          <CountBlock value={time.minutes} label="Mins" />
          <CountBlock value={time.seconds} label="Secs" />
        </motion.div>

        {/* Date summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2">
            <CalendarDays size={14} color="#8C4B27" />
            <span
              className="font-serif-wd"
              style={{ fontSize: "0.9rem", color: "#4A2E2B", fontStyle: "italic" }}
            >
              February 2 & 3 • 4 Grand Festivities
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} color="#8C4B27" />
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.72rem",
                color: "#6E4141",
                letterSpacing: "0.05em",
              }}
            >
              Taj Heritage, Vainguinim Beach, Goa
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
            ADD TO CALENDAR
          </button>
        </motion.div>
      </div>
    </section>
  );
}
