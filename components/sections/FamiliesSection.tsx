"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FAMILIES_BY_LANG } from "@/data/families";
import { useLanguage } from "@/components/shared/LanguageContext";

export function FamiliesSection() {
  const { t, lang } = useLanguage();
  const families =
    (lang && FAMILIES_BY_LANG && FAMILIES_BY_LANG[lang]) ||
    FAMILIES_BY_LANG?.en ||
    [];

  const isDevanagari = lang === "hi" || lang === "mr";

  return (
    <section
      id="families"
      className="section-bg"
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src="/assets/shared/all-page.jpeg"
        alt=""
        fill
        className="section-bg-img"
        style={{ objectPosition: "center top" }}
      />
      <div
        className="section-overlay"
        style={{ background: "rgba(250,247,242,0.40)" }}
      />

      <div className="section-content section-pad w-full py-12 sm:py-16 md:py-20 flex flex-col justify-center max-w-[560px] sm:max-w-[620px] mx-auto">
        <SectionHeader
          eyebrow={t.familiesEyebrow}
          heading={t.familiesHeading}
          quote={t.familiesQuote}
          className="mb-6 sm:mb-8"
        />

        {/* Individual Family Cards */}
        <div className="w-full flex flex-col gap-4 sm:gap-5 mb-4 sm:mb-6">
          {families.map((family, i) => {
            const isGroom = family.side === "groom";
            return (
              <React.Fragment key={`${lang}-${family.side}`}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="w-full flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/75 backdrop-blur-md border border-[#8C4B27]/20 shadow-[0_8px_30px_rgba(60,30,20,0.06)] hover:shadow-[0_12px_40px_rgba(60,30,20,0.09)] transition-shadow duration-300"
                >
                  {/* Couple Name */}
                  <div className="heading-calligraphy mb-2 sm:mb-2.5">
                    <span
                      style={{
                        fontFamily: isDevanagari ? "var(--font-devanagari-heading), serif" : "var(--font-serif), serif",
                        fontSize: "clamp(1.55rem, 5.5vw, 2.05rem)",
                        fontWeight: 900,
                        letterSpacing: isDevanagari ? "0.04em" : "0.14em",
                        textTransform: "uppercase",
                        color: "#1F0D09",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {isGroom ? t.groomSide : t.brideSide}
                    </span>
                  </div>

                  {/* Elegant Divider Flourish */}
                  <div className="flex items-center justify-center gap-2 mb-3.5 sm:mb-4 opacity-50">
                    <div className="w-7 h-[1px] bg-[#8C4B27]" />
                    <span className="text-[10px] text-[#8C4B27]">✦</span>
                    <div className="w-7 h-[1px] bg-[#8C4B27]" />
                  </div>

                  {/* Parents & Grandparents Lineage */}
                  <h3
                    className="heading-calligraphy mb-3.5 sm:mb-4"
                    style={{
                      fontFamily: isDevanagari ? "var(--font-devanagari-sans)" : "var(--font-sans)",
                      fontSize: isDevanagari ? "0.95rem" : "0.82rem",
                      color: "#4A2016",
                      letterSpacing: isDevanagari ? "0.02em" : "0.08em",
                      textTransform: isDevanagari ? "none" : "uppercase",
                      fontWeight: isDevanagari ? 600 : 700,
                      lineHeight: 1.75,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {isGroom ? t.groomParents : t.brideParents}
                  </h3>

                  {/* Supporting / Extended Family */}
                  <div className="w-full pt-3 sm:pt-3.5 border-t border-[#8C4B27]/12">
                    <p
                      style={{
                        fontFamily: isDevanagari ? "var(--font-devanagari-body)" : "var(--font-sans)",
                        fontSize: isDevanagari ? "0.88rem" : "0.75rem",
                        color: "#7A3D22",
                        letterSpacing: isDevanagari ? "0.02em" : "0.08em",
                        textTransform: isDevanagari ? "none" : "uppercase",
                        fontWeight: 600,
                        lineHeight: 1.6,
                      }}
                    >
                      {isGroom ? t.groomSupporting : t.brideSupporting}
                    </p>
                  </div>
                </motion.div>

                {/* "and" / "एवं" / "आणि" Connector between Groom and Bride */}
                {i === 0 && t.familyAndConnector && (
                  <div className="flex items-center justify-center my-1 sm:my-2 z-10">
                    <span
                      className="font-serif-wd"
                      style={{
                        fontSize: isDevanagari ? "0.95rem" : "0.86rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: "#8C4B27",
                        background: "#FAF7F2",
                        border: "1px solid rgba(140,75,39,0.28)",
                        padding: "0.35rem 1.4rem",
                        borderRadius: "9999px",
                        boxShadow: "0 3px 10px rgba(140,75,39,0.10)",
                      }}
                    >
                      ✦ {t.familyAndConnector} ✦
                    </span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Combined Unified Family Message, Invitation & Blessing */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center w-full max-w-[560px] sm:max-w-[620px] mx-auto p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-md border border-[#8C4B27]/22 shadow-[0_8px_30px_rgba(60,30,20,0.06)] flex flex-col gap-3.5 sm:gap-4 mt-2 sm:mt-3"
        >
          {t.familyInvitationText && (
            <p
              className="font-serif-wd"
              style={{
                fontSize: isDevanagari ? "1.02rem" : "0.98rem",
                color: "#1F0D09",
                lineHeight: 1.7,
                fontWeight: 600,
              }}
            >
              {t.familyInvitationText}
            </p>
          )}

          <p
            className="font-serif-wd"
            style={{
              fontSize: isDevanagari ? "0.98rem" : "1.02rem",
              color: "#2C140E",
              lineHeight: 1.75,
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            {t.familyUnionBlessing}
          </p>

          {t.familySignOff && (
            <>
              <div
                className="w-28 sm:w-36 h-[1px] mx-auto my-1"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(140,75,39,0.35), transparent)",
                }}
              />
              <p
                style={{
                  fontFamily: isDevanagari ? "var(--font-devanagari-body)" : "var(--font-sans)",
                  fontSize: isDevanagari ? "0.92rem" : "0.86rem",
                  color: "#8C4B27",
                  fontWeight: 700,
                  letterSpacing: isDevanagari ? "0.02em" : "0.06em",
                  lineHeight: 1.6,
                }}
              >
                {t.familySignOff}
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default FamiliesSection;
