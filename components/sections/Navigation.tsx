"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { WEDDING } from "@/data/wedding";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "#countdown", label: "Countdown" },
  { href: "#schedule", label: "Schedule" },
  { href: "#attire", label: "Attire" },
  { href: "#venues", label: "Venues" },
  { href: "#travel", label: "Travel" },
  { href: "#story", label: "Love Story" },
  { href: "#families", label: "Families" },
  { href: "#accommodations", label: "Stay" },
  { href: "#notes", label: "Notes" },
  { href: "#menu", label: "Menu" },
  { href: "#gifts", label: "Gifts" },
  { href: "#gallery", label: "Gallery" },
  { href: "#wishes", label: "Wish Wall" },
  { href: "#faq", label: "FAQs" },
  { href: "#helpdesk", label: "Helpdesk" },
  { href: "#rsvp", label: "RSVP" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          padding: "0.75rem 1.25rem",
          background: scrolled ? "rgba(250,247,242,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(140,75,39,0.12)" : "transparent",
          transition:
            "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease, -webkit-backdrop-filter 0.3s ease",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          aria-label="Back to top"
        >
          <Image
            src={WEDDING.monogram}
            alt="M&S"
            width={48}
            height={28}
            className="object-contain"
            style={{ opacity: scrolled ? 1 : 0.85 }}
          />
        </button>

        {/* Center title */}
        <p
          className="font-calligraphy"
          style={{
            fontSize: "1.15rem",
            color: scrolled ? "#3D2522" : "white",
            textShadow: scrolled ? "none" : "0 1px 10px rgba(0,0,0,0.3)",
            transition: "color 0.3s",
          }}
        >
          Mradul & Shreya
        </p>

        {/* Menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: scrolled ? "rgba(140,75,39,0.10)" : "rgba(255,255,255,0.20)",
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
            <X size={16} color={scrolled ? "#8C4B27" : "white"} />
          ) : (
            <Menu size={16} color={scrolled ? "#8C4B27" : "white"} />
          )}
        </button>
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
                width: "min(80vw, 280px)",
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
                style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(140,75,39,0.10)", border: "none", borderRadius: "50%", width: "2rem", height: "2rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                aria-label="Close menu"
              >
                <X size={16} color="#8C4B27" />
              </button>

              <div className="px-5">
                <p className="font-calligraphy" style={{ fontSize: "1.5rem", color: "#3D2522", marginBottom: "1.5rem" }}>
                  Explore
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {NAV_ITEMS.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <button
                        onClick={() => scrollTo(item.href)}
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "left",
                          padding: "0.7rem 0",
                          background: "none",
                          border: "none",
                          borderBottom: "1px solid rgba(140,75,39,0.12)",
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "1rem",
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
                  RSVP NOW
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


