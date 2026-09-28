"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { NOTES_BY_LANG } from "@/data/notes";
import { Clock, UtensilsCrossed, WineOff, BriefcaseBusiness } from "lucide-react";
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

        <div className="w-full max-w-[430px] mx-auto flex flex-col gap-4">
          {notes.map((note, i) => (
            <motion.div
              key={`${lang}-${note.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass-card w-full p-4 sm:p-5 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.52)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1.5px solid rgba(140, 75, 39, 0.18)",
                boxShadow: "0 4px 18px rgba(77, 38, 30, 0.06)",
              }}
            >
              {/* Header with Icon, Heading & Badge aligned together */}
              <div className="flex items-start gap-3 mb-2.5">
                <div
                  className="mt-0.5"
                  style={{
                    width: "2.1rem",
                    height: "2.1rem",
                    borderRadius: "50%",
                    background: "rgba(140,75,39,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1px solid rgba(140,75,39,0.20)",
                  }}
                >
                  {ICONS[note.icon] || <Clock size={16} color="#8C4B27" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3
                      className="font-serif-wd"
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "#180A07",
                        lineHeight: 1.3,
                      }}
                    >
                      {note.title}
                    </h3>

                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.64rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: "rgba(140,75,39,0.10)",
                        color: "#8C4B27",
                        padding: "0.18rem 0.55rem",
                        borderRadius: "9999px",
                        border: "1px solid rgba(140,75,39,0.25)",
                        whiteSpace: "nowrap",
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      {note.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bullet points with clear contrast and weighted font */}
              <ul className="flex flex-col gap-2.5 mt-2 pl-9 pr-1 w-full">
                {note.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="font-serif-wd"
                    style={{
                      fontSize: "0.98rem",
                      fontWeight: 600,
                      color: "#180A07",
                      lineHeight: 1.65,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: "-1rem",
                        color: "#8C4B27",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        lineHeight: 1.4,
                      }}
                    >
                      •
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImportantNotesSection;
