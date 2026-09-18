"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { STORY } from "@/data/story";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export function LoveStorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    skipSnaps: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const current = STORY[activeIndex];

  return (
    <section id="story" className="section-bg" style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}>
      <Image src="/assets/story/romantic-rose-bg.png" alt="" fill className="section-bg-img" style={{ objectPosition: "center" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.88)" }} />

      <div className="section-content w-full py-16">
        <div className="section-pad">
          <SectionHeader
            eyebrow="✦ OUR JOURNEY ✦"
            heading="Our Love Story"
            quote='In all the world, there is no heart for me like yours.'
          />
        </div>

        {/* Carousel */}
        <div className="relative mb-6">
          <div
            className="embla"
            ref={emblaRef}
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
          >
            <div className="embla__container gap-3">
              {STORY.map((milestone, i) => (
                <div
                  key={milestone.chapter}
                  className="embla__slide"
                  style={{ flex: "0 0 80%" }}
                >
                  <motion.div
                    animate={{
                      opacity: i === activeIndex ? 1 : 0.5,
                      scale: i === activeIndex ? 1 : 0.93,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-2xl cursor-pointer"
                    style={{ height: "280px", position: "relative" }}
                    onClick={() => emblaApi?.scrollTo(i)}
                  >
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.55) 100%)" }} />
                    {/* Badge */}
                    {i === activeIndex && (
                      <div
                        style={{
                          position: "absolute",
                          top: "0.75rem",
                          left: "0.75rem",
                          background: "rgba(140,75,39,0.90)",
                          color: "white",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.58rem",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          padding: "0.3rem 0.7rem",
                          borderRadius: "9999px",
                        }}
                      >
                        <Heart size={10} fill="white" color="white" />
                        {milestone.badge}
                      </div>
                    )}
                    <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem" }}>
                      <p style={{ fontFamily: "'Alex Brush', cursive", fontSize: "1.5rem", color: "white", lineHeight: 1 }}>
                        {milestone.chapter}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full"
            style={{ width: "2.2rem", height: "2.2rem", background: "rgba(250,247,242,0.90)", border: "1px solid rgba(140,75,39,0.25)", boxShadow: "0 2px 10px rgba(0,0,0,0.12)" }}
            aria-label="Previous milestone"
          >
            <ChevronLeft size={16} color="#8C4B27" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full"
            style={{ width: "2.2rem", height: "2.2rem", background: "rgba(250,247,242,0.90)", border: "1px solid rgba(140,75,39,0.25)", boxShadow: "0 2px 10px rgba(0,0,0,0.12)" }}
            aria-label="Next milestone"
          >
            <ChevronRight size={16} color="#8C4B27" />
          </motion.button>
        </div>

        {/* Current milestone info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="section-pad text-center"
          >
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8C4B27", fontWeight: 600, marginBottom: "0.35rem" }}>
              {current.chapter} • {current.period}
            </p>
            <h3 className="heading-calligraphy" style={{ fontSize: "1.8rem", marginBottom: "0.6rem" }}>
              {current.title}
            </h3>
            <p className="font-serif-wd" style={{ fontSize: "0.92rem", color: "#5C3D2E", lineHeight: 1.7, fontStyle: "italic" }}>
              {current.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-5">
          {STORY.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              style={{
                width: i === activeIndex ? "1.5rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                background: i === activeIndex ? "#8C4B27" : "rgba(140,75,39,0.30)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-label={`Go to milestone ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
