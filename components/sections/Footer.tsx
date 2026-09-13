"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { WEDDING } from "@/data/wedding";
import { Heart, ChevronUp, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#countdown", label: "Countdown" },
  { href: "#schedule", label: "Schedule" },
  { href: "#story", label: "Our Story" },
  { href: "#rsvp", label: "RSVP" },
];

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  const scrollToTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | string, opts?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollTo = (id: string) => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | string, opts?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(id, { offset: -50, duration: 1.3 });
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative w-full py-16 sm:py-24 px-6 bg-[#FAF7F2] text-[#4A2E2B] flex flex-col justify-center items-center text-center border-t border-[#8C4B27]/15"
    >
      {/* Monogram Image Crest */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-20 h-20 rounded-full overflow-hidden mb-6 shadow-sm hover:scale-105 transition-transform duration-300 mx-auto"
      >
        <Image
          src={WEDDING.monogram}
          alt="Mradul & Shreya Monogram"
          width={80}
          height={80}
          className="w-full h-full object-cover pointer-events-none select-none"
        />
      </motion.div>

      {/* Couple Name */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl text-[#8C4B27] mb-3 font-normal"
        style={{ fontFamily: "var(--font-cursive)" }}
      >
        Mradul &amp; Shreya
      </motion.h3>

      {/* Closing Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xs sm:text-sm text-[#6E4141] font-serif italic max-w-sm mx-auto mb-5 leading-relaxed px-2"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        &ldquo;With boundless love, joy, and gratitude, our families eagerly look forward to celebrating this sacred new beginning with you by our side in beautiful Goa.&rdquo;
      </motion.p>

      {/* Dates & Location Accent */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex items-center justify-center gap-2 text-xs text-[#8C4B27] mb-8 font-medium font-serif italic"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <Heart size={13} className="fill-[#C24137] text-[#C24137] not-italic" />
        <span>February 2 &amp; 3 • Taj Heritage, Goa</span>
      </motion.div>

      {/* Nav links */}
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8">
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6E4141]/70 hover:text-[#8C4B27] transition-colors cursor-pointer"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Back to Top */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button
          onClick={scrollToTop}
          className="relative min-h-[48px] inline-flex items-center justify-center text-xs font-bold uppercase tracking-[0.22em] text-[#8C4B27] hover:text-white hover:bg-[#8C4B27] transition-all cursor-pointer py-3 px-10 rounded-xl border border-[#8C4B27]/30 shadow-xs active:scale-95 text-center mx-auto"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <ChevronUp size={15} className="mr-2" />
          <span>Back To Top</span>
        </button>
      </motion.div>

      {/* Social / WhatsApp / Instagram */}
      <div className="flex justify-center gap-4 mt-8 mb-4">
        <a
          href={`https://wa.me/?text=${encodeURIComponent("Join me for the Royal Wedding of Mradul & Shreya — February 2 & 3, Taj Heritage Goa! " + (shareUrl || ""))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#6E4141] hover:text-[#8C4B27] transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <MessageCircle size={15} />
          <span>Share</span>
        </a>
        <a
          href="https://www.instagram.com/explore/tags/mradulwedsshreya/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#6E4141] hover:text-[#8C4B27] transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <InstagramIcon size={15} />
          <span>#MradulWedsShreya</span>
        </a>
      </div>

      {/* Families Sign-off */}
      <p
        className="text-[10px] text-[#6E4141]/75 mt-8 tracking-[0.24em] uppercase font-serif"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        With love • The Agrawal &amp; Sharma Families
      </p>

      {/* Legal */}
      <p
        className="text-[9px] text-[#4A2E2B]/40 mt-3 tracking-[0.08em]"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        © 2027 Mradul &amp; Shreya Wedding • Crafted with love in Goa
      </p>
    </footer>
  );
}

