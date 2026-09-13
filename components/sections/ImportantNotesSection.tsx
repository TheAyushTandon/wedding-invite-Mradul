"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { NOTES } from "@/data/notes";
import { Clock, UtensilsCrossed, Sun, BriefcaseBusiness } from "lucide-react";

const ICONS: Record<string, React.ReactNode> = {
  Clock: <Clock size={18} color="white" />,
  UtensilsCrossed: <UtensilsCrossed size={18} color="white" />,
  Sun: <Sun size={18} color="white" />,
  BriefcaseBusiness: <BriefcaseBusiness size={18} color="white" />,
};

export function ImportantNotesSection() {
  return (
    <section id="notes" className="section-bg" style={{ minHeight: "100dvh", display: "flex", alignItems: "flex-start" }}>
      <Image src="/assets/accommodations/lantern-arch-bg.png" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.88)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow="✦ GUEST ESSENTIALS ✦"
          heading="Important Notes"
          quote="Helpful guidelines to ensure your stay in Goa is seamless, joyful, and comfortable."
        />

        <div className="flex flex-col gap-4">
          {NOTES.map((note, i) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-5"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "0.5rem",
                    background: "#8C4B27",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {ICONS[note.icon]}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3
                      className="font-serif-wd"
                      style={{ fontSize: "1rem", fontWeight: 700, color: "#3D2522" }}
                    >
                      {note.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.55rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        background: "rgba(140,75,39,0.10)",
                        color: "#8C4B27",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                        border: "1px solid rgba(140,75,39,0.20)",
                      }}
                    >
                      {note.badge}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-1.5 mt-2">
                    {note.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="font-serif-wd"
                        style={{ fontSize: "0.88rem", color: "#4A2E2B", lineHeight: 1.6, paddingLeft: "1rem", position: "relative" }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "#8C4B27" }}>•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
