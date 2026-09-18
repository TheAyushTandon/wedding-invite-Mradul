"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { WEDDING } from "@/data/wedding";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";
import { Language } from "@/lib/translations";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const NAV_ITEMS = [
    { href: "#countdown", label: t.countdown },
    { href: "#schedule", label: t.schedule },
    { href: "#attire", label: t.attire },
    { href: "#travel", label: t.travel },
    { href: "#families", label: t.families },
    { href: "#accommodations", label: t.stay },
    { href: "#notes", label: t.notes },
    { href: "#menu", label: t.menu },
    { href: "#gallery", label: t.gallery },
    { href: "#wishes", label: t.wishWall },
    { href: "#faq", label: t.faqs },
    { href: "#helpdesk", label: t.helpdesk },
    { href: "#rsvp", label: t.rsvp },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: string, opts?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(href, { offset: -50, duration: 1.3 });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "hi", label: "हिन्दी" },
    { code: "mr", label: "मराठी" },
  ];

  return (
    <>
      {/* Top bar */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed top-0 left-0 right-0 mx-auto z-30 flex items-center justify-between"
        style={{
          width: "100%",
          maxWidth: "460px",
          padding: "0.65rem 0.85rem",
          background: scrolled ? "rgba(250,247,242,0.95)" : "rgba(250,247,242,0.75)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(140,75,39,0.15)" : "rgba(140,75,39,0.08)",
          transition:
            "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease, -webkit-backdrop-filter 0.3s ease",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, flexShrink: 0 }}
          aria-label="Back to top"
        >
          <Image
            src={WEDDING.monogram}
            alt="M&S"
            width={38}
            height={22}
            className="object-contain"
            style={{ opacity: 0.95 }}
          />
        </button>

        {/* Center title */}
        <p
          className="font-calligraphy truncate px-1"
          style={{
            fontSize: "1.1rem",
            color: "#3D2522",
            letterSpacing: "0.02em",
          }}
        >
          {t.mradulAndShreya}
        </p>

        {/* Right side controls: Language Pill + Menu button */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* Quick Lang Switcher Pill */}
          <div
            className="flex items-center rounded-full p-0.5"
            style={{
              background: "rgba(140,75,39,0.08)",
              border: "1px solid rgba(140,75,39,0.18)",
            }}
          >
            {languages.map((l) => (
              <motion.button
                key={l.code}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLang(l.code)}
                style={{
                  background: lang === l.code ? "#8C4B27" : "transparent",
                  color: lang === l.code ? "#FFFFFF" : "#5C3D2E",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "0.2rem 0.45rem",
                  fontSize: "0.62rem",
                  fontWeight: lang === l.code ? 700 : 500,
                  cursor: "pointer",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                }}
                aria-label={`Change language to ${l.label}`}
              >
                {l.label}
              </motion.button>
            ))}
          </div>

          {/* Menu button */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "rgba(140,75,39,0.12)",
              border: "1px solid rgba(140,75,39,0.20)",
              borderRadius: "50%",
              width: "2.2rem",
              height: "2.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            aria-label={isOpen ? "Close menu" : "Open navigation"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={16} color="#8C4B27" />
            ) : (
              <Menu size={16} color="#8C4B27" />
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.50)" }}
            />

            {/* Drawer panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-50 h-full flex flex-col"
              style={{
                width: "min(85vw, 300px)",
                background: "#FAF7F2",
                boxShadow: "-8px 0 32px rgba(0,0,0,0.18)",
                paddingTop: "4.5rem",
                paddingBottom: "2rem",
                overflowY: "auto",
              }}
              aria-label="Navigation menu"
            >
              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "rgba(140,75,39,0.10)",
                  border: "none",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                aria-label="Close menu"
              >
                <X size={16} color="#8C4B27" />
              </button>

              <div className="px-5">
                <p
                  className="font-calligraphy"
                  style={{ fontSize: "1.6rem", color: "#3D2522", marginBottom: "0.25rem" }}
                >
                  {t.mradulAndShreya}
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#8C4B27",
                    marginBottom: "1.25rem",
                    fontWeight: 600,
                  }}
                >
                  {t.weddingCelebration}
                </p>

                {/* Language Picker in Drawer */}
                <div
                  className="p-2.5 rounded-xl mb-4"
                  style={{
                    background: "rgba(140,75,39,0.06)",
                    border: "1px solid rgba(140,75,39,0.15)",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <Globe size={13} color="#8C4B27" />
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#8C4B27",
                      }}
                    >
                      {t.langSelect}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {languages.map((l) => (
                      <motion.button
                        key={l.code}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setLang(l.code)}
                        style={{
                          background: lang === l.code ? "#8C4B27" : "rgba(255,255,255,0.8)",
                          color: lang === l.code ? "#FFFFFF" : "#3D2522",
                          border: `1px solid ${lang === l.code ? "#8C4B27" : "rgba(140,75,39,0.2)"}`,
                          borderRadius: "0.5rem",
                          padding: "0.35rem 0.2rem",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                      >
                        {l.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {NAV_ITEMS.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <button
                        onClick={() => scrollTo(item.href)}
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "left",
                          padding: "0.65rem 0",
                          background: "none",
                          border: "none",
                          borderBottom: "1px solid rgba(140,75,39,0.10)",
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          color: "#4A2E2B",
                          cursor: "pointer",
                          transition: "color 0.2s, padding-left 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#8C4B27";
                          e.currentTarget.style.paddingLeft = "0.5rem";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#4A2E2B";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* RSVP CTA */}
                <button
                  onClick={() => scrollTo("#rsvp")}
                  className="btn-primary w-full mt-5"
                >
                  {t.rsvpNow}
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
