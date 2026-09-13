"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FAMILIES } from "@/data/families";
import { Users, Quote } from "lucide-react";

export function FamiliesSection() {
  return (
    <section id="families" className="section-bg" style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}>
      <Image src="/assets/story/romantic-rose-bg.png" alt="" fill className="section-bg-img" style={{ objectPosition: "center" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.90)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow="✦ WITH BLESSINGS & LOVE ✦"
          heading="Our Families"
          quote="Two families united in love, friendship, and shared celebration."
        />

        <div className="flex flex-col gap-5 mb-6">
          {FAMILIES.map((family, i) => (
            <motion.div
              key={family.side}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  style={{
                    width: "2.2rem",
                    height: "2.2rem",
                    borderRadius: "0.5rem",
                    background: "#8C4B27",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Users size={16} color="white" />
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.58rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      background: family.side === "groom" ? "rgba(140,75,39,0.12)" : "rgba(194,65,55,0.12)",
                      color: family.side === "groom" ? "#8C4B27" : "#C24137",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {family.side === "groom" ? "Groom\u2019s Side" : "Bride\u2019s Side"}
                  </span>
                </div>
              </div>

              <h3
                className="font-serif-wd"
                style={{ fontSize: "1.05rem", fontWeight: 700, color: "#3D2522", marginBottom: "0.25rem" }}
              >
                {family.parents}
              </h3>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.68rem",
                  color: "#6E4141",
                  marginBottom: "0.75rem",
                }}
              >
                {family.supporting}
              </p>
              <p
                className="font-serif-wd"
                style={{ fontSize: "0.9rem", color: "#4A2E2B", lineHeight: 1.7, fontStyle: "italic" }}
              >
                {family.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Blessing box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="glass-card p-5 text-center"
          style={{ background: "rgba(140,75,39,0.06)", border: "1px solid rgba(140,75,39,0.20)" }}
        >
          <Quote size={20} color="#D4AF37" style={{ margin: "0 auto 0.75rem" }} />
          <p
            className="font-serif-wd"
            style={{ fontSize: "1rem", color: "#3D2522", lineHeight: 1.7, fontStyle: "italic", fontWeight: 500 }}
          >
            Your presence, smiles, and warm blessings are the greatest gifts we could ever ask for.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
