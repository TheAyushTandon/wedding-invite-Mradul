"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CopyButton } from "@/components/shared/CopyButton";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { CONTACTS } from "@/data/helpdesk";
import { WEDDING } from "@/data/wedding";
import { Phone, Mail } from "lucide-react";

export function HelpdeskSection() {
  return (
    <section id="helpdesk" className="section-bg" style={{ minHeight: "100dvh", display: "flex", alignItems: "flex-start" }}>
      <Image src="/assets/venues/botanical-arch-bg.png" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.88)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow="✦ 24/7 SUPPORT ✦"
          heading="Wedding Helpdesk"
          quote="Our dedicated hospitality team is available round-the-clock to assist you with anything in Goa."
        />

        <div className="flex flex-col gap-5 mb-6">
          {CONTACTS.map((contact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-2 mb-1">
                <h3
                  className="font-serif-wd"
                  style={{ fontSize: "1rem", fontWeight: 700, color: "#3D2522", flex: 1 }}
                >
                  {contact.title}
                </h3>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.55rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    background: "rgba(37,211,102,0.15)",
                    color: "#19875A",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "9999px",
                  }}
                >
                  Available
                </span>
              </div>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#4A2E2B", marginBottom: "0.2rem" }}>
                {contact.name}
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.68rem", color: "#6E4141", marginBottom: "0.75rem" }}>
                {contact.role}
              </p>

              {/* Phone row */}
              <div className="flex items-center gap-2 mb-4 p-2.5 rounded-xl" style={{ background: "rgba(140,75,39,0.06)" }}>
                <Phone size={14} color="#8C4B27" />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#3D2522", flex: 1 }}>
                  {contact.phone}
                </span>
                <CopyButton value={contact.phone} label="Number" />
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <WhatsAppButton
                  phone={contact.phone}
                  message={contact.whatsappMessage}
                  className="flex-1"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Email row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between px-4 py-3 rounded-xl glass-card"
        >
          <div className="flex items-center gap-2">
            <Mail size={14} color="#8C4B27" />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.72rem", color: "#4A2E2B" }}>
              {WEDDING.helpdesk}
            </span>
          </div>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 600, color: "#8C4B27", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Taj Helpdesk
          </span>
        </motion.div>
      </div>
    </section>
  );
}
