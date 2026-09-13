"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GALLERY } from "@/data/gallery";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function GallerySection() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft") setLightboxIdx((prev) => (prev !== null ? (prev - 1 + GALLERY.length) % GALLERY.length : null));
      if (e.key === "ArrowRight") setLightboxIdx((prev) => (prev !== null ? (prev + 1) % GALLERY.length : null));
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxIdx]);

  return (
    <section id="gallery" className="section-bg" style={{ minHeight: "100dvh", display: "flex", alignItems: "flex-start" }}>
      <Image src="/assets/story/romantic-rose-bg.png" alt="" fill className="section-bg-img" style={{ objectPosition: "center" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.85)" }} />

      <div className="section-content w-full py-16">
        <div className="section-pad">
          <SectionHeader
            eyebrow="✦ CAPTURED MOMENTS ✦"
            heading="Our Photo Gallery"
            quote="Snapshots of joy, laughter, and the beautiful journey that led us here."
          />
        </div>

        <div className="relative">
          <div className="embla" ref={emblaRef} style={{ paddingLeft: "5%", paddingRight: "5%" }}>
            <div className="embla__container gap-3">
              {GALLERY.map((photo, i) => (
                <div
                  key={i}
                  className="embla__slide"
                  style={{ flex: "0 0 85%" }}
                >
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    onClick={() => setLightboxIdx(i)}
                    style={{ width: "100%", border: "none", padding: 0, cursor: "pointer", background: "none" }}
                    aria-label={`Open photo: ${photo.caption}`}
                  >
                    <div
                      className="overflow-hidden rounded-2xl"
                      style={{ height: "280px", position: "relative" }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        className="object-cover"
                        style={{ transition: "transform 0.4s ease" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg,transparent 60%,rgba(0,0,0,0.50) 100%)",
                        }}
                      />
                      <p
                        style={{
                          position: "absolute",
                          bottom: "0.75rem",
                          left: "0.75rem",
                          right: "0.75rem",
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "0.88rem",
                          color: "rgba(255,255,255,0.90)",
                          fontStyle: "italic",
                          lineHeight: 1.4,
                          textAlign: "left",
                        }}
                      >
                        {photo.caption}
                      </p>
                    </div>
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-3 top-[140px] -translate-y-1/2 z-10 flex items-center justify-center rounded-full"
            style={{ width: "2.2rem", height: "2.2rem", background: "rgba(250,247,242,0.90)", border: "1px solid rgba(140,75,39,0.25)", boxShadow: "0 2px 10px rgba(0,0,0,0.12)" }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={16} color="#8C4B27" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-3 top-[140px] -translate-y-1/2 z-10 flex items-center justify-center rounded-full"
            style={{ width: "2.2rem", height: "2.2rem", background: "rgba(250,247,242,0.90)", border: "1px solid rgba(140,75,39,0.25)", boxShadow: "0 2px 10px rgba(0,0,0,0.12)" }}
            aria-label="Next photo"
          >
            <ChevronRight size={16} color="#8C4B27" />
          </button>
        </div>

        <div className="section-pad mt-4">
          <p className="text-center font-serif-wd" style={{ fontSize: "0.88rem", color: "#6E4141", fontStyle: "italic" }}>
            {GALLERY.length} cherished photos • Tap any to enlarge
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.90)", touchAction: "none" }}
            onClick={() => setLightboxIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: "relative", width: "min(90vw, 420px)", borderRadius: "1rem", overflow: "hidden" }}
            >
              <Image
                src={GALLERY[lightboxIdx].src}
                alt={GALLERY[lightboxIdx].caption}
                width={420}
                height={560}
                className="object-cover"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "1rem" }}
              />
              <p style={{ textAlign: "center", color: "rgba(255,255,255,0.75)", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", fontStyle: "italic", padding: "0.6rem" }}>
                {GALLERY[lightboxIdx].caption}
              </p>
              {/* Nav */}
              <button
                onClick={() => setLightboxIdx((prev) => (prev !== null ? (prev - 1 + GALLERY.length) % GALLERY.length : null))}
                style={{ position: "absolute", left: "0.5rem", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.20)", border: "none", borderRadius: "50%", width: "2.5rem", height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                aria-label="Previous"
              >
                <ChevronLeft size={20} color="white" />
              </button>
              <button
                onClick={() => setLightboxIdx((prev) => (prev !== null ? (prev + 1) % GALLERY.length : null))}
                style={{ position: "absolute", right: "0.5rem", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.20)", border: "none", borderRadius: "50%", width: "2.5rem", height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                aria-label="Next"
              >
                <ChevronRight size={20} color="white" />
              </button>
            </motion.div>

            {/* Close */}
            <button
              onClick={() => setLightboxIdx(null)}
              style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(255,255,255,0.20)", border: "none", borderRadius: "50%", width: "2.5rem", height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              aria-label="Close lightbox"
            >
              <X size={18} color="white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
