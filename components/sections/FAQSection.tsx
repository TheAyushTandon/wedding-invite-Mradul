"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FAQ_BY_LANG } from "@/data/faq";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const { t, lang } = useLanguage();
  const faqs = (lang && FAQ_BY_LANG && FAQ_BY_LANG[lang]) || FAQ_BY_LANG?.en || [];

  return (
    <section
      id="faq"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}
    >
      <Image
        src="/assets/accommodations/lantern-arch-bg.png"
        alt=""
        fill
        className="section-bg-img"
        style={{ objectPosition: "center top" }}
      />
      <div
        className="section-overlay"
        style={{ background: "rgba(250,247,242,0.92)" }}
      />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow={t.faqsEyebrow}
          heading={t.faqsHeading}
          quote={t.faqsQuote}
        />

        <div className="w-full max-w-[440px] mx-auto flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="overflow-hidden rounded-2xl transition-all duration-300"
                style={{
                  background: isOpen ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.70)",
                  border: `1.5px solid ${isOpen ? "rgba(140,75,39,0.30)" : "rgba(140,75,39,0.12)"}`,
                  boxShadow: isOpen
                    ? "0 8px 24px rgba(140,75,39,0.10)"
                    : "0 2px 8px rgba(140,75,39,0.04)",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center gap-3.5 p-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <div
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "50%",
                      background: isOpen ? "#8C4B27" : "rgba(140,75,39,0.10)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.25s ease",
                    }}
                  >
                    <HelpCircle size={15} color={isOpen ? "#FFFFFF" : "#8C4B27"} />
                  </div>

                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: isOpen ? "#8C4B27" : "#3D2522",
                      lineHeight: 1.35,
                      flex: 1,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ flexShrink: 0 }}
                  >
                    <ChevronDown size={17} color="#8C4B27" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "1.02rem",
                          color: "#4A2E2B",
                          lineHeight: 1.75,
                          fontStyle: "italic",
                          padding: "0 1.25rem 1.25rem 4rem",
                        }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
