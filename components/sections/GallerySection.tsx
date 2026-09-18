"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GALLERY, GalleryItem } from "@/data/gallery";
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
  const size = small ? 24 : 34;
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={label}
      style={{
        position: "absolute",
        [dir === "prev" ? "left" : "right"]: small ? 4 : 8,
        top: "50%",
        transform: "translateY(-50%)",
        background: small ? "rgba(250,247,242,0.92)" : "rgba(30,15,10,0.55)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        border: small ? "1px solid rgba(140,75,39,0.25)" : "1px solid rgba(255,255,255,0.25)",
        borderRadius: "50%",
        width: size,
        height: size,
        cursor: "pointer",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: small ? "#8C4B27" : "#FFFFFF",
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        transition: "all 0.2s ease",
      }}
    >
      {dir === "prev" ? (
        <ChevronLeft size={small ? 14 : 18} />
      ) : (
        <ChevronRight size={small ? 14 : 18} />
      )}
    </button>
  );
}

export function GallerySection() {
  const [cur, setCur] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const { t } = useLanguage();
  const n = GALLERY.length;

  // Responsive slots with animated flex ratios: 1 : 7 : 1
  const slots = [
    ...(cur > 0 ? [{ idx: cur - 1, flex: 1, side: true }] : []),
    { idx: cur, flex: 7, side: false },
    ...(cur < n - 1 ? [{ idx: cur + 1, flex: 1, side: true }] : []),
  ];

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft") setLightboxIdx((prev) => (prev !== null ? (prev - 1 + n) % n : null));
      if (e.key === "ArrowRight") setLightboxIdx((prev) => (prev !== null ? (prev + 1) % n : null));
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxIdx, n]);

  return (
    <section
      id="gallery"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}
    >
      <Image
        src="/assets/story/romantic-rose-bg.png"
        alt=""
        fill
        className="section-bg-img"
        style={{ objectPosition: "center" }}
      />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.90)" }} />

      <div className="section-content w-full py-16">
        <div className="section-pad">
          <SectionHeader
            eyebrow={t.galleryEyebrow}
            heading={t.galleryHeading}
            quote={t.galleryQuote}
          />
        </div>

        <div className="w-full max-w-[440px] mx-auto px-3 sm:px-4 flex flex-col gap-6">
          {/* 1. HERO EXPANDING CAROUSEL */}
          <div className="relative" style={{ height: "300px" }}>
            <div className="flex h-full gap-2">
              {slots.map(({ idx, flex, side }) => {
                const it = GALLERY[idx];
                return (
                  <div
                    key={`hero-${idx}`}
                    onClick={() => {
                      if (side) {
                        setCur(idx);
                      } else {
                        setLightboxIdx(idx);
                      }
                    }}
                    style={{
                      flex,
                      overflow: "hidden",
                      borderRadius: 16,
                      position: "relative",
                      cursor: side ? "pointer" : "zoom-in",
                      transition: "flex 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "1.5px solid rgba(140,75,39,0.22)",
                      boxShadow: !side ? "0 8px 24px rgba(61,37,34,0.18)" : "none",
                    }}
                  >
                    <Image
                      src={it.src}
                      alt={it.title}
                      fill
                      sizes="(max-width: 480px) 100vw, 420px"
                      className="object-cover"
                      style={{
                        transform: !side ? "scale(1.02)" : "scale(1)",
                        transition: "transform 0.4s ease",
                      }}
                    />

                    {/* Gradient scrim overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(15,10,8,0.85) 0%, rgba(15,10,8,0.25) 50%, transparent 100%)",
                      }}
                    />

                    {/* Captions only on main expanded card */}
                    {!side && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 p-4 pb-8 flex flex-col items-start text-left"
                      >
                        <span
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "0.55rem",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "#FAF7F2",
                            background: "rgba(140,75,39,0.92)",
                            padding: "0.2rem 0.6rem",
                            borderRadius: "9999px",
                            marginBottom: "0.4rem",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                          }}
                        >
                          {it.category}
                        </span>
                        <div
                          className="font-serif-wd"
                          style={{
                            color: "#FFFFFF",
                            fontSize: "1.35rem",
                            fontWeight: 700,
                            lineHeight: 1.15,
                            textShadow: "0 2px 6px rgba(0,0,0,0.8)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            width: "100%",
                          }}
                        >
                          {it.title}
                        </div>
                        <div
                          style={{
                            color: "rgba(255,255,255,0.85)",
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: "0.95rem",
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
                      </motion.div>
                    )}

                    {/* Expand icon on main image */}
                    {!side && (
                      <div
                        className="absolute top-3 right-3 p-1.5 rounded-full"
                        style={{
                          background: "rgba(0,0,0,0.4)",
                          backdropFilter: "blur(4px)",
                          color: "#FFFFFF",
                        }}
                      >
                        <Maximize2 size={13} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation buttons */}
            {cur > 0 && (
              <CircleBtn onClick={() => setCur((c) => c - 1)} dir="prev" label="Previous photo" />
            )}
            {cur < n - 1 && (
              <CircleBtn onClick={() => setCur((c) => c + 1)} dir="next" label="Next photo" />
            )}

            {/* Pagination Indicators */}
            <div
              style={{
                position: "absolute",
                bottom: 8,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 5,
                zIndex: 10,
              }}
            >
              {GALLERY.map((_, i) => (
                <div
                  key={`dot-${i}`}
                  onClick={() => setCur(i)}
                  style={{
                    width: i === cur ? 22 : 6,
                    height: 5,
                    borderRadius: 3,
                    background: i === cur ? "#8C4B27" : "rgba(140,75,39,0.35)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
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
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#8C4B27",
                }}
              >
                Cherished Memories ({cur + 1}/{n})
              </span>
              <span
                className="font-serif-wd text-[0.8rem] text-[#6E4141] italic"
              >
                Tap thumb to preview
              </span>
            </div>

            <div
              className="flex items-center gap-2 p-1.5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.70)",
                border: "1px solid rgba(140,75,39,0.18)",
              }}
            >
              {GALLERY.map((item, idx) => {
                const isActive = idx === cur;
                return (
                  <button
                    key={`thumb-${item.id}`}
                    onClick={() => setCur(idx)}
                    className="relative flex-1 overflow-hidden rounded-xl transition-all duration-300"
                    style={{
                      height: "56px",
                      border: isActive ? "2px solid #8C4B27" : "1px solid rgba(140,75,39,0.15)",
                      opacity: isActive ? 1 : 0.65,
                      transform: isActive ? "scale(1.04)" : "scale(1)",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    aria-label={`View ${item.title}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
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
            onClick={() => setLightboxIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 bg-[#1A1412]"
            >
              <div className="relative w-full h-[420px]">
                <Image
                  src={GALLERY[lightboxIdx].src}
                  alt={GALLERY[lightboxIdx].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 text-center bg-[#1A1412] text-white">
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.55rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#D4AF37",
                    display: "inline-block",
                    marginBottom: "0.25rem",
                  }}
                >
                  {GALLERY[lightboxIdx].category}
                </span>
                <h4
                  className="font-serif-wd"
                  style={{ fontSize: "1.3rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.2rem" }}
                >
                  {GALLERY[lightboxIdx].title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.75)",
                    fontStyle: "italic",
                  }}
                >
                  {GALLERY[lightboxIdx].subtitle}
                </p>
              </div>

              {/* Lightbox Nav */}
              <button
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
                onClick={() => setLightboxIdx(null)}
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
