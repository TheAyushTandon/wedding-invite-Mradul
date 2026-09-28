"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FAMILIES_BY_LANG } from "@/data/families";
import { HairlineDivider } from "@/components/shared/HairlineDivider";
import { useLanguage } from "@/components/shared/LanguageContext";

export function FamiliesSection() {
  const { t, lang } = useLanguage();
  const families = (lang && FAMILIES_BY_LANG && FAMILIES_BY_LANG[lang]) || FAMILIES_BY_LANG?.en || [];

  return (
    <section
      id="families"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center" }}
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

        <div className="w-full flex flex-col gap-2.5 sm:gap-3.5 mb-2">
          {families.map((family, i) => {
            const isGroom = family.side === "groom";
            return (
              <motion.div
                key={`${lang}-${family.side}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="w-full flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-white/50 backdrop-blur-md border border-[#8C4B27]/18 shadow-sm"
              >
                {/* Side Pill */}
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full mb-1 sm:mb-1.5" style={{ background: "rgba(140,75,39,0.08)", border: "1px solid rgba(140,75,39,0.22)" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#8C4B27",
                    }}
                  >
                    {isGroom ? t.groomSide : t.brideSide}
                  </span>
                </div>

                {/* Parents Names in Regal Display Serif */}
                <h3
                  className="heading-calligraphy"
                  style={{
                    fontSize: "clamp(1.25rem, 5vw, 1.45rem)",
                    lineHeight: 1.25,
                    color: "#1E0F0C",
                    fontWeight: 700,
                    marginBottom: "0.2rem",
                    letterSpacing: "0.01em",
                  }}
                >
                  {isGroom ? t.groomParents : t.brideParents}
                </h3>

                {/* Extended Family Note */}
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.65rem",
                    color: "#8C4B27",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: "0.35rem",
                  }}
                >
                  {family.supporting}
                </p>

                {/* Warm Family Message */}
                <p
                  className="font-serif-wd"
                  style={{
                    fontSize: "0.85rem",
                    color: "#381B14",
                    lineHeight: 1.45,
                    fontStyle: "italic",
                    maxWidth: "360px",
                  }}
                >
                  {family.note}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Traditional Auspicious Blessing Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="text-center max-w-[390px] mx-auto mt-2 px-4 py-2 rounded-xl bg-white/75 backdrop-blur-sm border border-[#8C4B27]/15 shadow-sm"
        >
          <p
            className="font-serif-wd"
            style={{
              fontSize: "0.88rem",
              color: "#1F0D09",
              lineHeight: 1.45,
              fontStyle: "italic",
              fontWeight: 800,
              textShadow: "0 1px 1px rgba(255,255,255,0.8)",
            }}
          >
            {t.familyUnionBlessing}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FamiliesSection;
