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

      <div className="section-content section-pad w-full py-6 sm:py-8 flex flex-col justify-center max-w-[440px] mx-auto">
        <SectionHeader
          eyebrow={t.familiesEyebrow}
          heading={t.familiesHeading}
          quote={t.familiesQuote}
          className="mb-3 sm:mb-4"
        />

        {/* Individual Family Cards */}
        <div className="w-full flex flex-col gap-2.5 sm:gap-3 mb-3">
          {families.map((family, i) => {
            const isGroom = family.side === "groom";
            return (
              <React.Fragment key={`${lang}-${family.side}`}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="w-full flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl bg-white/55 backdrop-blur-md border border-[#8C4B27]/18 shadow-sm"
                >
                  {/* Side Pill */}
                  <div
                    className="heading-calligraphy"
                  >
                    <span
                      style={{
                        fontSize: "clamp(1.25rem, 5vw, 1.45rem)",
                        fontWeight: 900,
                        letterSpacing: "0.10em",
                        textTransform: "uppercase",
                        color: "#1F0D09",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {isGroom ? t.groomSide : t.brideSide}
                    </span>
                  </div>

                  {/* Groom/Bride or Parents Names */}
                  <h3
                    className="heading-calligraphy"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: lang === "mr" || lang === "hi" ? "0.85rem" : "0.65rem",
                      color: "#8C4B27",
                      letterSpacing: lang === "mr" || lang === "hi" ? "0.02em" : "0.12em",
                      textTransform: lang === "mr" || lang === "hi" ? "none" : "uppercase",
                      fontWeight: lang === "mr" || lang === "hi" ? 600 : 700,
                      lineHeight: 1.4,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {isGroom ? t.groomParents : t.brideParents}
                  </h3>

                  {/* Supporting / Relation Note */}
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: lang === "mr" || lang === "hi" ? "0.85rem" : "0.65rem",
                      color: "#8C4B27",
                      letterSpacing: lang === "mr" || lang === "hi" ? "0.02em" : "0.12em",
                      textTransform: lang === "mr" || lang === "hi" ? "none" : "uppercase",
                      fontWeight: lang === "mr" || lang === "hi" ? 600 : 700,
                      lineHeight: 1.4,
                    }}
                  >
                    {isGroom ? t.groomSupporting : t.brideSupporting}
                  </p>
                </motion.div>

                {/* "आणि" Connector between Groom and Bride in Marathi */}
                {i === 0 && t.familyAndConnector && (
                  <div className="flex items-center justify-center -my-1 z-10">
                    <span
                      className="font-serif-wd"
                      style={{
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        color: "#8C4B27",
                        background: "#FAF7F2",
                        border: "1px solid rgba(140,75,39,0.25)",
                        padding: "0.15rem 1rem",
                        borderRadius: "9999px",
                        boxShadow: "0 2px 6px rgba(140,75,39,0.10)",
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="text-center max-w-[420px] mx-auto px-4 py-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#8C4B27]/18 shadow-sm flex flex-col gap-2"
        >
          {t.familyInvitationText && (
            <p
              className="font-serif-wd"
              style={{
                fontSize: "0.92rem",
                color: "#1F0D09",
                lineHeight: 1.6,
                fontWeight: 600,
              }}
            >
              {t.familyInvitationText}
            </p>
          )}

          <p
            className="font-serif-wd"
            style={{
              fontSize: "0.88rem",
              color: "#2C140E",
              lineHeight: 1.55,
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            {t.familyUnionBlessing}
          </p>

          {t.familySignOff && (
            <>
              <div
                className="w-24 h-[1px] mx-auto my-0.5"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(140,75,39,0.35), transparent)",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  color: "#8C4B27",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  lineHeight: 1.5,
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
