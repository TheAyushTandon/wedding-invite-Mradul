"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GALLERY } from "@/data/gallery";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";

function CircleBtn({
  onClick,
  dir,
  label,
  small,
}: {
  onClick: () => void;
  dir: "prev" | "next";
  label: string;
  small?: boolean;
}) {
  const size = small ? 24 : 36;
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={label}
      style={{
        position: "absolute",
        [dir === "prev" ? "left" : "right"]: small ? 6 : 10,
        top: "50%",
        transform: "translateY(-50%)",
        background: "rgba(30,15,10,0.6)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: "50%",
        width: size,
        height: size,
        cursor: "pointer",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        transition: "all 0.2s ease",
      }}
    >
      {dir === "prev" ? (
        <ChevronLeft size={small ? 14 : 18} />
      ) : (
        <ChevronRight size={small ? 14 : 18} />
      )}
    </motion.button>
  );
}

export function GallerySection() {
  const [cur, setCur] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const { t } = useLanguage();
  const n = GALLERY.length;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCur(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const closeLightbox = useCallback(() => {
    if (lightboxIdx !== null) {
      emblaApi?.scrollTo(lightboxIdx);
    }
    setLightboxIdx(null);
  }, [lightboxIdx, emblaApi]);

  // Pointer drag vs click detection for opening lightbox
  const pointerDownPos = useRef<{ x: number; y: number } | null>(null);
  const handlePointerDown = (e: React.PointerEvent) => {
    pointerDownPos.current = { x: e.clientX, y: e.clientY };
  };
  const handleSlideClick = (idx: number, e: React.MouseEvent) => {
    if (!pointerDownPos.current) {
      setLightboxIdx(idx);
      return;
    }
    const dist = Math.hypot(
      e.clientX - pointerDownPos.current.x,
      e.clientY - pointerDownPos.current.y
    );
    if (dist < 8) {
      setLightboxIdx(idx);
    }
    pointerDownPos.current = null;
  };

  // Touch swipe support for Lightbox
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        setLightboxIdx((prev) => (prev !== null ? (prev + 1) % n : null));
      } else {
        setLightboxIdx((prev) => (prev !== null ? (prev - 1 + n) : null));
      }
    }
    touchStartX.current = null;
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightboxIdx((prev) => (prev !== null ? (prev - 1 + n) % n : null));
      if (e.key === "ArrowRight") setLightboxIdx((prev) => (prev !== null ? (prev + 1) % n : null));
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxIdx, n, closeLightbox]);

  return (
    <section
      id="gallery"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <Image
        src="/assets/shared/all-page.jpeg"
        alt=""
        fill
        className="section-bg-img"
        style={{ objectPosition: "center top" }}
      />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.35)" }} />

      <div className="section-content w-full py-8 sm:py-10 my-auto flex flex-col justify-center">
        <div className="section-pad mb-1 sm:mb-2">
          <SectionHeader
            eyebrow={t.galleryEyebrow}
            heading={t.galleryHeading}
            quote={t.galleryQuote}
          />
        </div>

        <div className="w-full max-w-[440px] mx-auto px-3 sm:px-4 flex flex-col gap-4 sm:gap-5">
          {/* 1. PHOTO SHOWCASE CAROUSEL */}
          <div className="relative w-full" style={{ height: "clamp(350px, 47svh, 450px)" }}>
            <div className="embla h-full w-full rounded-2xl overflow-hidden" ref={emblaRef}>
              <div className="embla__container h-full">
                {GALLERY.map((it, idx) => (
                  <div
                    key={it.id || idx}
                    className="embla__slide relative h-full w-full select-none cursor-pointer"
                    style={{ flex: "0 0 100%" }}
                    onPointerDown={handlePointerDown}
                    onClick={(e) => handleSlideClick(idx, e)}
                  >
                    <div
                      className="relative w-full h-full overflow-hidden rounded-2xl"
                      style={{
                        border: "1.5px solid rgba(140,75,39,0.22)",
                        boxShadow: "0 8px 24px rgba(61,37,34,0.18)",
                      }}
                    >
                      <Image
                        src={it.src}
                        alt={it?.title || `Cherished Memory ${idx + 1}`}
                        fill={false}
                        className="object-cover"
                        priority={idx === 0}
                        draggable={false}
                        objectFit="cover"
                        objectPosition="relative"
                        
                      />

                      {/* Gradient scrim overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(15,10,8,0.85) 0%, rgba(15,10,8,0.2) 50%, transparent 100%)",
                          pointerEvents: "none",
                        }}
                      />

                      {/* Captions if available */}
                      {(it.category || it.title || it.subtitle) && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 pb-8 flex flex-col items-start text-left pointer-events-none">
                          {it.category && (
                            <span
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: "#FAF7F2",
                                background: "rgba(140,75,39,0.92)",
                                padding: "0.25rem 0.75rem",
                                borderRadius: "9999px",
                                marginBottom: "0.4rem",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                              }}
                            >
                              {it.category}
                            </span>
                          )}
                          {it.title && (
                            <div
                              className="font-serif-wd"
                              style={{
                                color: "#FFFFFF",
                                fontSize: "1.45rem",
                                fontWeight: 700,
                                lineHeight: 1.2,
                                textShadow: "0 2px 6px rgba(0,0,0,0.8)",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                width: "100%",
                              }}
                            >
                              {it.title}
                            </div>
                          )}
                          {it.subtitle && (
                            <div
                              style={{
                                color: "rgba(255,255,255,0.92)",
                                fontFamily: "var(--font-serif)",
                                fontSize: "1.05rem",
                                fontStyle: "italic",
                                marginTop: 2,
                                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                width: "100%",
                              }}
                            >
                              {it.subtitle}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Expand icon on image */}
                      <div
                        className="absolute top-3 right-3 p-1.5 rounded-full pointer-events-none"
                        style={{
                          background: "rgba(0,0,0,0.4)",
                          backdropFilter: "blur(4px)",
                          color: "#FFFFFF",
                        }}
                      >
                        <Maximize2 size={13} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <CircleBtn onClick={scrollPrev} dir="prev" label="Previous photo" />
            <CircleBtn onClick={scrollNext} dir="next" label="Next photo" />

            {/* Pagination Indicators */}
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 5,
                zIndex: 10,
              }}
            >
              {GALLERY.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    emblaApi?.scrollTo(i);
                  }}
                  aria-label={`Go to photo ${i + 1}`}
                  style={{
                    width: i === cur ? 22 : 6,
                    height: 5,
                    borderRadius: 3,
                    background: i === cur ? "#FFFFFF" : "rgba(255,255,255,0.45)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    border: "none",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {/* 2. MULTI-BROWSE FILMSTRIP */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between px-1">
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#8C4B27",
                }}
              >
                Cherished Memories ({cur + 1}/{n})
              </span>
              <span
                className="font-serif-wd text-[0.88rem] text-[#3F2018] italic"
              >
                Tap thumb to preview
              </span>
            </div>

            <div
              className="flex items-center gap-2 p-1.5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.52)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1.5px solid rgba(140,75,39,0.18)",
              }}
            >
              {GALLERY.map((item, idx) => {
                const isActive = idx === cur;
                return (
                  <button
                    key={`thumb-${item.id}`}
                    type="button"
                    onClick={() => emblaApi?.scrollTo(idx)}
                    className="relative flex-1 overflow-hidden rounded-xl transition-all duration-300"
                    style={{
                      height: "64px",
                      border: isActive ? "2.5px solid #8C4B27" : "1px solid rgba(140,75,39,0.18)",
                      opacity: isActive ? 1 : 0.7,
                      transform: isActive ? "scale(1.04)" : "scale(1)",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <Image
                      src={item.src}
                      alt={item?.title || `Thumbnail ${idx + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(10px)" }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 bg-[#1A1412] touch-pan-y"
            >
              <div className="relative w-full h-[420px]">
                <Image
                  src={GALLERY[lightboxIdx].src}
                  alt={GALLERY[lightboxIdx]?.title || `Photo ${lightboxIdx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {(GALLERY[lightboxIdx]?.category || GALLERY[lightboxIdx]?.title || GALLERY[lightboxIdx]?.subtitle) ? (
                <div className="p-4 text-center bg-[#1A1412] text-white">
                  {GALLERY[lightboxIdx]?.category && (
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#D4AF37",
                        display: "inline-block",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {GALLERY[lightboxIdx].category}
                    </span>
                  )}
                  {GALLERY[lightboxIdx]?.title && (
                    <h4
                      className="font-serif-wd"
                      style={{ fontSize: "1.45rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.25rem" }}
                    >
                      {GALLERY[lightboxIdx].title}
                    </h4>
                  )}
                  {GALLERY[lightboxIdx]?.subtitle && (
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.05rem",
                        color: "rgba(255,255,255,0.9)",
                        fontStyle: "italic",
                      }}
                    >
                      {GALLERY[lightboxIdx].subtitle}
                    </p>
                  )}
                </div>
              ) : (
                <div className="py-3 px-4 text-center bg-[#1A1412] text-white/80 text-sm font-serif-wd italic">
                  {lightboxIdx + 1} / {n}
                </div>
              )}

              {/* Lightbox Nav */}
              <button
                type="button"
                onClick={() => setLightboxIdx((prev) => (prev !== null ? (prev - 1 + n) % n : null))}
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "210px",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  width: "2.5rem",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "white",
                }}
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIdx((prev) => (prev !== null ? (prev + 1) % n : null))}
                style={{
                  position: "absolute",
                  right: "0.75rem",
                  top: "210px",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  width: "2.5rem",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "white",
                }}
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>

              {/* Close */}
              <button
                type="button"
                onClick={closeLightbox}
                style={{
                  position: "absolute",
                  top: "0.75rem",
                  right: "0.75rem",
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  width: "2.2rem",
                  height: "2.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "white",
                }}
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default GallerySection;
