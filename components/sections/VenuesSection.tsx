"use client";
import { useCallback } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { VENUES } from "@/data/venues";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function VenuesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="venues" className="section-bg" style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}>
      <Image src="/assets/shared/all-page.jpeg" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.35)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow="✦ THE VENUES ✦"
          heading="Our Sacred Spaces"
          quote="Two breathtaking settings for four unforgettable celebrations."
        />

        <div className="relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container gap-4">
              {VENUES.map((venue) => (
                <div key={venue.id} className="embla__slide" style={{ flex: "0 0 100%" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card overflow-hidden"
                  >
                    {/* Photo */}
                    <div className="relative" style={{ height: "220px" }}>
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg,transparent 50%,rgba(0,0,0,0.55) 100%)",
                        }}
                      />
                      {/* Event badge */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0.75rem",
                          left: "0.75rem",
                          background: "rgba(140,75,39,0.92)",
                          color: "white",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          padding: "0.3rem 0.75rem",
                          borderRadius: "9999px",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                        }}
                      >
                        {venue.event}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-5">
                      <h3
                        className="heading-calligraphy"
                        style={{ fontSize: "1.9rem", marginBottom: "0.5rem" }}
                      >
                        {venue.name}
                      </h3>
                      <p
                        className="font-serif-wd"
                        style={{ fontSize: "1rem", color: "#3F2018", lineHeight: 1.7, fontStyle: "italic" }}
                      >
                        {venue.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-[110px] -translate-x-2 z-10 flex items-center justify-center rounded-full"
            style={{ width: "2.2rem", height: "2.2rem", background: "rgba(250,247,242,0.90)", border: "1px solid rgba(140,75,39,0.25)", boxShadow: "0 2px 10px rgba(0,0,0,0.12)" }}
            aria-label="Previous venue"
          >
            <ChevronLeft size={16} color="#8C4B27" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-[110px] translate-x-2 z-10 flex items-center justify-center rounded-full"
            style={{ width: "2.2rem", height: "2.2rem", background: "rgba(250,247,242,0.90)", border: "1px solid rgba(140,75,39,0.25)", boxShadow: "0 2px 10px rgba(0,0,0,0.12)" }}
            aria-label="Next venue"
          >
            <ChevronRight size={16} color="#8C4B27" />
          </button>
        </div>
      </div>
    </section>
  );
}
