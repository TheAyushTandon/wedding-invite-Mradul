"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AIRPORTS } from "@/data/travel";
import { Plane, MapPin, Clock, Car, CheckCircle2, ExternalLink } from "lucide-react";

export function TravelSection() {
  const [activeAirport, setActiveAirport] = useState(0);
  const airport = AIRPORTS[activeAirport];

  return (
    <section id="travel" className="section-bg" style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}>
      <Image src="/assets/venues/botanical-arch-bg.png" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.90)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow="✦ TRAVEL & LOGISTICS ✦"
          heading="Airports & Reaching Goa"
          quote="Two airports connect to Goa. Dabolim (GOI) is closest and preferred for Taj Heritage."
        />

        {/* Airport selector */}
        <div className="flex gap-2 mb-6">
          {AIRPORTS.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setActiveAirport(i)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full transition-all`}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                border: activeAirport === i ? "none" : "1.5px solid rgba(140,75,39,0.30)",
                background: activeAirport === i ? "#8C4B27" : "rgba(255,255,255,0.70)",
                color: activeAirport === i ? "white" : "#6E4141",
                cursor: "pointer",
              }}
              aria-pressed={activeAirport === i}
            >
              <Plane size={12} />
              {a.code}{a.preferred ? " • Preferred" : ""}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={airport.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-5"
          >
            {/* Badge */}
            <div className="mb-3">
              <span
                style={{
                  display: "inline-block",
                  background: airport.preferred ? "rgba(212,175,55,0.20)" : "rgba(140,75,39,0.10)",
                  color: airport.preferred ? "#B8860B" : "#8C4B27",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "9999px",
                  border: airport.preferred ? "1px solid rgba(212,175,55,0.40)" : "1px solid rgba(140,75,39,0.20)",
                }}
              >
                {airport.badge}
              </span>
            </div>

            {/* Code + Name */}
            <div className="flex items-center gap-3 mb-2">
              <span
                className="font-serif-wd"
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#3D2522",
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                }}
              >
                {airport.code}
              </span>
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "#4A2E2B", marginBottom: "0.5rem" }}>
              {airport.name}
            </p>
            <p className="font-serif-wd" style={{ fontSize: "0.88rem", color: "#5C3D2E", lineHeight: 1.65, fontStyle: "italic", marginBottom: "1rem" }}>
              {airport.description}
            </p>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div style={{ background: "rgba(140,75,39,0.06)", borderRadius: "0.75rem", padding: "0.875rem" }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin size={12} color="#8C4B27" />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.58rem", color: "#8C4B27", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Distance</span>
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#3D2522", fontWeight: 600 }}>{airport.distance}</p>
              </div>
              <div style={{ background: "rgba(140,75,39,0.06)", borderRadius: "0.75rem", padding: "0.875rem" }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <Clock size={12} color="#8C4B27" />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.58rem", color: "#8C4B27", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Travel Time</span>
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#3D2522", fontWeight: 600 }}>{airport.travelTime}</p>
              </div>
            </div>

            {/* Route */}
            <div className="flex items-start gap-2 mb-4 p-3 rounded-xl" style={{ background: "rgba(140,75,39,0.06)" }}>
              <Car size={14} color="#8C4B27" style={{ flexShrink: 0, marginTop: "2px" }} />
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.68rem", color: "#4A2E2B", lineHeight: 1.55 }}>
                <strong style={{ color: "#8C4B27" }}>Recommended Route: </strong>{airport.route}
              </p>
            </div>

            {/* Tips */}
            <div className="mb-5">
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8C4B27", marginBottom: "0.6rem" }}>
                Arrival & Transit Guidance
              </p>
              <div className="flex flex-col gap-2">
                {airport.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={13} color="#8C4B27" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.88rem", color: "#4A2E2B", lineHeight: 1.55 }}>{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Maps CTA */}
            <a
              href={airport.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <ExternalLink size={14} />
              OPEN DIRECTIONS ON GOOGLE MAPS
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

