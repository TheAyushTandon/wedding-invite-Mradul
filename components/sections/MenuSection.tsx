"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { HairlineDivider } from "@/components/shared/HairlineDivider";
import { MENU } from "@/data/menu";
import { Leaf } from "lucide-react";

export function MenuSection() {
  return (
    <section id="menu" className="section-bg" style={{ minHeight: "100dvh", display: "flex", alignItems: "flex-start" }}>
      <Image src="/assets/menu/ribbon-lily-frame-bg.png" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.88)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow="✦ DINING ✦"
          heading="The Banquet Menu"
          quote="A four-course feast celebrating coastal delicacies and fine wine pairings."
        />

        <div className="glass-card p-6">
          {MENU.map((course, ci) => (
            <motion.div
              key={course.course}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              {ci > 0 && <HairlineDivider className="my-7" />}

              {/* Course heading */}
              <div className="flex items-center gap-3 mb-5">
                <div style={{ flex: 1, height: 1, background: "rgba(140,75,39,0.25)" }} />
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#8C4B27",
                    whiteSpace: "nowrap",
                  }}
                >
                  {course.course}
                </p>
                <div style={{ flex: 1, height: 1, background: "rgba(140,75,39,0.25)" }} />
              </div>

              {/* Dishes */}
              <div className="flex flex-col gap-5">
                {course.items.map((item, ii) => (
                  <div key={ii}>
                    <div className="flex items-start gap-2 mb-1">
                      <h4
                        className="font-serif-wd"
                        style={{ fontSize: "1.05rem", fontWeight: 700, color: "#3D2522", flex: 1, lineHeight: 1.3 }}
                      >
                        {item.name}
                      </h4>
                      {item.dietary && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.2rem",
                            background: "rgba(34,197,94,0.12)",
                            color: "#15803D",
                            fontSize: "0.6rem",
                            fontWeight: 700,
                            padding: "0.2rem 0.5rem",
                            borderRadius: "9999px",
                            flexShrink: 0,
                          }}
                        >
                          <Leaf size={10} />
                          V
                        </span>
                      )}
                    </div>
                    <p
                      className="font-serif-wd"
                      style={{ fontSize: "0.88rem", color: "#6E4141", lineHeight: 1.65, fontStyle: "italic" }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Footnote */}
          <HairlineDivider className="mt-7 mb-4" />
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.78rem", color: "#9B9B9B", fontStyle: "italic", textAlign: "center" }}>
            * Dietary preferences and allergies accommodated via RSVP
          </p>
        </div>
      </div>
    </section>
  );
}
