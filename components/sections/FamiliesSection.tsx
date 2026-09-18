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
      style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}
    >
      <Image
        src="/assets/story/romantic-rose-bg.png"
        alt=""
        fill
        className="section-bg-img"
        style={{ objectPosition: "center" }}
      />
      <div
        className="section-overlay"
        style={{ background: "rgba(250,247,242,0.92)" }}
      />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow={t.familiesEyebrow}
          heading={t.familiesHeading}
          quote={t.familiesQuote}
        />

        <div className="w-full max-w-[420px] mx-auto flex flex-col gap-8 mb-6">
          {families.map((family, i) => {
            const isGroom = family.side === "groom";
            return (
              <motion.div
                key={`${lang}-${family.side}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="w-full flex flex-col items-center text-center py-2"
              >
                {/* Side Pill */}
                <div className="inline-flex items-center px-3 py-0.5 rounded-full mb-3" style={{ background: "rgba(140,75,39,0.08)", border: "1px solid rgba(140,75,39,0.18)" }}>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
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

                {/* Parents Names in Regal Calligraphy */}
                <h3
                  className="heading-calligraphy"
                  style={{
                    fontSize: "2.3rem",
                    lineHeight: 1.15,
                    color: "#3D2522",
                    marginBottom: "0.4rem",
                  }}
                >
                  {isGroom ? t.groomParents : t.brideParents}
                </h3>

                {/* Extended Family Note */}
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.65rem",
                    color: "#8C4B27",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                  }}
                >
                  {family.supporting}
                </p>

                {/* Warm Family Message */}
                <p
                  className="font-serif-wd"
                  style={{
                    fontSize: "1.05rem",
                    color: "#4A2E2B",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    maxWidth: "380px",
                  }}
                >
                  {family.note}
                </p>

                {i === 0 && (
                  <div className="w-full my-6">
                    <HairlineDivider />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Traditional Auspicious Blessing Note (No gift policy mentions) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center max-w-[380px] mx-auto pt-4"
        >
          <p
            className="font-serif-wd"
            style={{
              fontSize: "1.05rem",
              color: "#3D2522",
              lineHeight: 1.7,
              fontStyle: "italic",
              fontWeight: 500,
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
