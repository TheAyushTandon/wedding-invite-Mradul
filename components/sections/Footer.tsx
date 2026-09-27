"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { WEDDING } from "@/data/wedding";
import { Heart, ChevronUp, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";

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
  const { t, lang } = useLanguage();

  const NAV_LINKS = [
    { href: "#hero", label: "Home" },
    { href: "#families", label: t.families },
    { href: "#countdown", label: t.countdown },
    { href: "#schedule", label: t.schedule },
    { href: "#attire", label: t.attire },
    { href: "#rsvp", label: t.rsvp },
  ];

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

  const shareText =
    lang === "hi"
      ? `मृदुल एवं श्रेया के शुभ विवाह समारोह में सादर आमंत्रित हैं — 2 एवं 3 फरवरी 2026, ताज हेरिटेज, गोवा! ${shareUrl}`
      : lang === "mr"
      ? `मृदुल आणि श्रेया यांच्या शुभविवाह सोहळ्यास सस्नेह निमंत्रण — 2 आणि 3 फेब्रुवारी 2026, ताज हेरिटेज, गोवा! ${shareUrl}`
      : `Join us for the Royal Wedding Celebration of Mradul & Shreya — February 2 & 3, 2026 at Taj Heritage, Goa! ${shareUrl}`;

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
        className="w-36 sm:w-44 mx-auto mb-4 hover:scale-105 transition-transform duration-300 flex justify-center"
      >
        <Image
          src={WEDDING.monogram}
          alt="Mradul & Shreya Monogram"
          width={180}
          height={90}
          className="w-full h-auto object-contain pointer-events-none select-none"
          priority
        />
      </motion.div>

      {/* Couple Name */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl text-[#8C4B27] mb-3 font-normal"
        style={{ fontFamily: "var(--font-script)" }}
      >
        {lang === "en" ? (
          <span className="inline-block overflow-visible">
            <span>Mradul</span>{" "}
            <span
              className="ampersand-glyph"
              style={{
                fontFamily: "'Alex Brush', 'Great Vibes', cursive",
                fontSize: "0.95em",
                paddingBottom: "0.15em",
                verticalAlign: "baseline",
              }}
            >
              &amp;
            </span>{" "}
            <span>Shreya</span>
          </span>
        ) : (
          t.mradulAndShreya
        )}
      </motion.h3>

      {/* Closing Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm sm:text-base text-[#4D261E] font-serif italic max-w-sm mx-auto mb-5 leading-relaxed px-2"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {t.footerQuote}
      </motion.p>

      {/* Dates & Location Accent */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex items-center justify-center gap-2 text-sm text-[#8C4B27] mb-8 font-medium font-serif italic"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <Heart size={14} className="fill-[#C24137] text-[#C24137] not-italic" />
        <span>{t.footerDatesVenue}</span>
      </motion.div>

      {/* Nav links */}
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8">
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#543C36] hover:text-[#8C4B27] transition-colors cursor-pointer"
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
          className="relative min-h-[48px] inline-flex items-center justify-center text-xs font-bold uppercase tracking-[0.15em] text-[#8C4B27] hover:text-white hover:bg-[#8C4B27] transition-all cursor-pointer py-3 px-8 rounded-xl border border-[#8C4B27]/30 shadow-xs active:scale-95 text-center mx-auto"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <ChevronUp size={15} className="mr-2" />
          <span>{t.backToTop}</span>
        </button>
      </motion.div>

      {/* Social / WhatsApp / Instagram */}
      <div className="flex justify-center gap-5 mt-8 mb-4">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3F2018] hover:text-[#8C4B27] transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <MessageCircle size={16} />
          <span>{t.shareInvite}</span>
        </a>
        <a
          href="https://www.instagram.com/explore/tags/mradulwedsshreya/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3F2018] hover:text-[#8C4B27] transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <InstagramIcon size={16} />
          <span>#MradulWedsShreya</span>
        </a>
      </div>

      {/* Families Sign-off */}
      <p
        className="text-[13px] text-[#3F2018] font-medium mt-8 tracking-wider font-serif"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {t.withLoveFamilies}
      </p>

      {/* Legal */}
      <p
        className="text-[12px] text-[#3F2018]/70 mt-3 tracking-normal"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {t.copyrightText}
      </p>
    </footer>
  );
}

export default Footer;
