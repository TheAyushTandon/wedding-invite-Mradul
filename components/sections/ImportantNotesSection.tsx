"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { NOTES_BY_LANG } from "@/data/notes";
import { Clock, UtensilsCrossed, WineOff, BriefcaseBusiness } from "lucide-react";
import { HairlineDivider } from "@/components/shared/HairlineDivider";
import { useLanguage } from "@/components/shared/LanguageContext";

const ICONS: Record<string, React.ReactNode> = {
  Clock: <Clock size={16} color="#8C4B27" />,
  WineOff: <WineOff size={16} color="#8C4B27" />,
  UtensilsCrossed: <UtensilsCrossed size={16} color="#8C4B27" />,
  BriefcaseBusiness: <BriefcaseBusiness size={16} color="#8C4B27" />,
};

export function ImportantNotesSection() {
  const { t, lang } = useLanguage();
  const currentLang = (lang && NOTES_BY_LANG && NOTES_BY_LANG[lang]) ? lang : "en";
  const notes = NOTES_BY_LANG?.[currentLang] || NOTES_BY_LANG?.en || [];

  return (
    <section
      id="notes"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}
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
        style={{ background: "rgba(250,247,242,0.35)" }}
      />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow={t.notesEyebrow}
          heading={t.notesHeading}
          quote={t.notesQuote}
        />

        <div className="w-full max-w-[420px] mx-auto flex flex-col gap-6">
          {notes.map((note, i) => (
            <motion.div
              key={`${lang}-${note.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="w-full flex flex-col items-start py-2"
            >
              {/* Header with Icon & Badge */}
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <div
                  style={{
                    width: "1.8rem",
                    height: "1.8rem",
                    borderRadius: "50%",
                    background: "rgba(140,75,39,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {ICONS[note.icon] || <Clock size={16} color="#8C4B27" />}
                </div>

                <h3
                  className="font-serif-wd"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1E0F0C",
                  }}
                >
                  {note.title}
                </h3>

                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    background: "rgba(140,75,39,0.08)",
                    color: "#8C4B27",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "9999px",
                    border: "1px solid rgba(140,75,39,0.22)",
                    marginLeft: "auto",
                  }}
                >
                  {note.badge}
                </span>
              </div>

              {/* Bullet points */}
              <ul className="flex flex-col gap-2 mt-1.5 pl-8 w-full">
                {note.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="font-serif-wd"
                    style={{
                      fontSize: "0.98rem",
                      color: "#381B14",
                      lineHeight: 1.7,
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: "-0.9rem", color: "#8C4B27" }}>•</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {i < notes.length - 1 && (
                <div className="w-full mt-4">
                  <HairlineDivider />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImportantNotesSection;
