"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ACCOMMODATION_NOTE } from "@/data/accommodations";
import { Building2, MapPin, Phone, Navigation as NavIcon, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";

export function AccommodationsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="accommodations"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}
    >
      <Image
        src="/assets/accommodations/lantern-arch-bg.png"
        alt=""
        fill
        className="section-bg-img"
        style={{ objectPosition: "center top" }}
      />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.90)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow={t.stayEyebrow}
          heading={t.stayHeading}
          quote={t.stayQuote}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[420px] mx-auto flex flex-col items-center text-center"
        >
          {/* Resort Image Banner */}
          <div className="relative w-full h-[220px] rounded-2xl overflow-hidden shadow-lg mb-6 border border-[#8C4B27]/20">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
              alt="Taj Cidade de Goa Heritage"
              fill
              className="object-cover"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(61,37,34,0.7) 100%)",
              }}
            />
            <div className="absolute bottom-3 left-4 right-4 text-left">
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#FAF7F2",
                  background: "rgba(140,75,39,0.9)",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "9999px",
                  marginBottom: "0.3rem",
                }}
              >
                {t.stayBadge}
              </span>
              <h3 className="heading-calligraphy text-white" style={{ fontSize: "1.9rem", lineHeight: 1.1 }}>
                Taj Cidade de Goa Heritage
              </h3>
            </div>
          </div>

          {/* Complimentary Stay Highlight (Open uncontainerized layout) */}
          <div className="w-full py-4 text-left mb-6">
            <div className="flex items-center gap-2 mb-2 text-[#8C4B27]">
              <Sparkles size={16} />
              <h4
                className="font-serif-wd"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#3D2522",
                }}
              >
                {t.stayCoveredTitle}
              </h4>
            </div>

            <p
              className="font-serif-wd"
              style={{
                fontSize: "1rem",
                color: "#4A2E2B",
                lineHeight: 1.75,
                fontStyle: "italic",
                marginBottom: "1rem",
              }}
            >
              {t.stayCoveredNote}
            </p>

            {/* Full Address */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl mb-4" style={{ background: "rgba(140,75,39,0.06)", border: "1px solid rgba(140,75,39,0.15)" }}>
              <MapPin size={18} color="#8C4B27" className="flex-shrink-0 mt-0.5" />
              <div>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#8C4B27",
                    marginBottom: "0.15rem",
                  }}
                >
                  {t.resortAddressLabel}
                </p>
                <p
                  className="font-serif-wd"
                  style={{
                    fontSize: "0.95rem",
                    color: "#3D2522",
                    lineHeight: 1.4,
                    fontWeight: 600,
                  }}
                >
                  {t.venueFullAddress}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 w-full mt-2">
              <a
                href={ACCOMMODATION_NOTE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 flex items-center justify-center gap-2 text-center"
                style={{ padding: "0.75rem 1rem", fontSize: "0.68rem" }}
              >
                <NavIcon size={14} />
                {t.openGoogleMaps}
              </a>
              <a
                href={`tel:${ACCOMMODATION_NOTE.plannerContact}`}
                className="btn-secondary flex-1 flex items-center justify-center gap-2 text-center"
                style={{
                  padding: "0.75rem 1rem",
                  fontSize: "0.68rem",
                  background: "rgba(255,255,255,0.85)",
                  border: "1.5px solid #8C4B27",
                  color: "#8C4B27",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                <Phone size={14} />
                {t.callPlanner}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AccommodationsSection;
