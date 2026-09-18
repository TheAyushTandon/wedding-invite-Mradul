"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CopyButton } from "@/components/shared/CopyButton";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { CONTACTS_BY_LANG } from "@/data/helpdesk";
import { WEDDING } from "@/data/wedding";
import { Phone, Mail } from "lucide-react";
import { HairlineDivider } from "@/components/shared/HairlineDivider";
import { useLanguage } from "@/components/shared/LanguageContext";

export function HelpdeskSection() {
  const { t, lang } = useLanguage();
  const contacts = (lang && CONTACTS_BY_LANG && CONTACTS_BY_LANG[lang]) || CONTACTS_BY_LANG?.en || [];

  return (
    <section
      id="helpdesk"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}
    >
      <Image
        src="/assets/venues/botanical-arch-bg.png"
        alt=""
        fill
        className="section-bg-img"
        style={{ objectPosition: "center top" }}
      />
      <div
        className="section-overlay"
        style={{ background: "rgba(250,247,242,0.92)" }}
      />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow={t.helpdeskEyebrow}
          heading={t.helpdeskHeading}
          quote={t.helpdeskQuote}
        />

        <div className="w-full max-w-[420px] mx-auto flex flex-col gap-6 mb-6">
          {contacts.map((contact, i) => (
            <motion.div
              key={`${lang}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full flex flex-col items-start py-2"
            >
              <div className="flex items-center gap-2 mb-1 w-full justify-between">
                <h3
                  className="font-serif-wd"
                  style={{ fontSize: "1.15rem", fontWeight: 700, color: "#3D2522" }}
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
                  {t.activeConcierge}
                </span>
              </div>

              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#4A2E2B",
                  marginBottom: "0.15rem",
                }}
              >
                {contact.name}
              </p>
              <p
                className="font-serif-wd"
                style={{
                  fontSize: "0.95rem",
                  color: "#6E4141",
                  fontStyle: "italic",
                  marginBottom: "0.85rem",
                }}
              >
                {contact.role}
              </p>

              {/* Phone row */}
              <div
                className="flex items-center gap-2 mb-3 p-3 rounded-xl w-full"
                style={{
                  background: "rgba(140,75,39,0.06)",
                  border: "1px solid rgba(140,75,39,0.15)",
                }}
              >
                <Phone size={15} color="#8C4B27" />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#3D2522",
                    flex: 1,
                  }}
                >
                  {contact.phone}
                </span>
                <CopyButton value={contact.phone} label="Number" />
              </div>

              {/* WhatsApp CTA */}
              <div className="w-full">
                <WhatsAppButton
                  phone={contact.phone}
                  message={contact.whatsappMessage}
                  className="w-full"
                />
              </div>

              {i < contacts.length - 1 && (
                <div className="w-full mt-6">
                  <HairlineDivider />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Email concierge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-[420px] mx-auto flex items-center justify-between p-3.5 rounded-xl mt-4"
          style={{
            background: "rgba(255,255,255,0.75)",
            border: "1px solid rgba(140,75,39,0.15)",
          }}
        >
          <div className="flex items-center gap-2">
            <Mail size={14} color="#8C4B27" />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", color: "#4A2E2B", fontWeight: 500 }}>
              {WEDDING.helpdesk}
            </span>
          </div>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 700, color: "#8C4B27", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {t.tajConcierge}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default HelpdeskSection;
