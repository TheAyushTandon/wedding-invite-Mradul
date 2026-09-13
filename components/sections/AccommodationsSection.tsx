"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CopyButton } from "@/components/shared/CopyButton";
import { HOTELS } from "@/data/accommodations";
import { Building2, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export function AccommodationsSection() {
  const [activeHotel, setActiveHotel] = useState(0);
  const hotel = HOTELS[activeHotel];
  const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex: 0 });

  const goTo = useCallback((index: number) => {
    setActiveHotel(index);
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  const tabLabels = ["Taj Heritage", "Taj Horizon", "Goa Marriott"];

  return (
    <section id="accommodations" className="section-bg" style={{ minHeight: "100dvh", display: "flex", alignItems: "flex-start" }}>
      <Image src="/assets/accommodations/lantern-arch-bg.png" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.88)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow="✦ GUEST STAY & RETREATS ✦"
          heading="Accommodations"
          quote="Curated luxury estates & coastal resorts reserved with special courtesy rates."
        />

        {/* Hotel tabs */}
        <div className="flex gap-0 mb-6" style={{ borderBottom: "1px solid rgba(140,75,39,0.20)" }}>
          {tabLabels.map((label, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                flex: 1,
                padding: "0.5rem 0.25rem",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.55rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                borderBottom: activeHotel === i ? "2px solid #8C4B27" : "2px solid transparent",
                color: activeHotel === i ? "#8C4B27" : "#9B9B9B",
                cursor: "pointer",
                transition: "all 0.2s ease",
                marginBottom: "-1px",
              }}
              aria-pressed={activeHotel === i}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={hotel.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card overflow-hidden"
          >
            {/* Photo */}
            <div className="relative" style={{ height: "220px" }}>
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.5) 100%)" }} />
              {/* Nav */}
              <button
                onClick={() => goTo((activeHotel - 1 + HOTELS.length) % HOTELS.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full z-10"
                style={{ width: "2rem", height: "2rem", background: "rgba(0,0,0,0.40)", border: "none" }}
                aria-label="Previous hotel"
              >
                <ChevronLeft size={16} color="white" />
              </button>
              <button
                onClick={() => goTo((activeHotel + 1) % HOTELS.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full z-10"
                style={{ width: "2rem", height: "2rem", background: "rgba(0,0,0,0.40)", border: "none" }}
                aria-label="Next hotel"
              >
                <ChevronRight size={16} color="white" />
              </button>
              {/* Status badge */}
              <span
                style={{
                  position: "absolute",
                  top: "0.75rem",
                  left: "0.75rem",
                  background: "rgba(140,75,39,0.90)",
                  color: "white",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.55rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.65rem",
                  borderRadius: "9999px",
                }}
              >
                {hotel.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8C4B27", fontWeight: 600, marginBottom: "0.25rem" }}>
                {hotel.type}
              </p>
              <h3 className="heading-calligraphy" style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
                {hotel.name}
              </h3>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.88rem", color: "#5C3D2E", fontStyle: "italic", marginBottom: "1rem" }}>
                {hotel.amenities.join(" • ")}
              </p>

              {/* Courtesy code */}
              <div className="flex items-center gap-2 p-3 rounded-xl mb-4" style={{ background: "rgba(140,75,39,0.06)", border: "1px solid rgba(140,75,39,0.15)" }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.62rem", color: "#6E4141", fontWeight: 500 }}>Courtesy Code:</span>
                <span style={{ fontFamily: "monospace", fontSize: "0.85rem", fontWeight: 700, color: "#3D2522", letterSpacing: "0.05em" }}>{hotel.courtesyCode}</span>
                <div className="ml-auto">
                  <CopyButton value={hotel.courtesyCode} label="Code" />
                </div>
              </div>

              {/* Book button */}
              <a
                href={hotel.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <Building2 size={14} />
                BOOK SUITE
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-5">
          {HOTELS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: activeHotel === i ? "1.5rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                background: activeHotel === i ? "#8C4B27" : "rgba(140,75,39,0.30)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-label={`View hotel ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
