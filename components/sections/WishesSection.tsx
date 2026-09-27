"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { WISH_PRESETS } from "@/data/wishes";
import {
  Send,
  CheckCircle2,
  X,
  Loader2,
  Lock,
  ShieldCheck,
  HeartHandshake,
  Flower2,
  PartyPopper,
  Coffee,
  CupSoda,
  Camera,
  UtensilsCrossed,
  Gift,
  Heart,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";

function renderPresetIcon(iconName?: string, isSelected?: boolean) {
  const iconColor = isSelected ? "#FFFFFF" : "#8C4B27";
  const size = 15;
  switch (iconName) {
    case "HeartHandshake":
      return <HeartHandshake size={size} color={iconColor} className="flex-shrink-0" />;
    case "Flower2":
      return <Flower2 size={size} color={iconColor} className="flex-shrink-0" />;
    case "PartyPopper":
      return <PartyPopper size={size} color={iconColor} className="flex-shrink-0" />;
    case "Coffee":
      return <Coffee size={size} color={iconColor} className="flex-shrink-0" />;
    case "CupSoda":
      return <CupSoda size={size} color={iconColor} className="flex-shrink-0" />;
    case "Camera":
      return <Camera size={size} color={iconColor} className="flex-shrink-0" />;
    case "UtensilsCrossed":
      return <UtensilsCrossed size={size} color={iconColor} className="flex-shrink-0" />;
    case "Gift":
      return <Gift size={size} color={iconColor} className="flex-shrink-0" />;
    default:
      return <Heart size={size} color={iconColor} className="flex-shrink-0" />;
  }
}

export function WishesSection() {
  const [customWish, setCustomWish] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReceivedPrompt, setShowReceivedPrompt] = useState(false);
  const [lastSubmittedWish, setLastSubmittedWish] = useState("");
  const { t } = useLanguage();

  const handleSelectPreset = (text: string) => {
    if (selectedPreset === text) {
      setSelectedPreset(null);
      setCustomWish("");
    } else {
      setSelectedPreset(text);
      setCustomWish(text);
    }
  };

  const handleSubmitWish = async () => {
    const wishText = customWish.trim() || selectedPreset;
    if (!wishText || isSubmitting) return;

    setIsSubmitting(true);

    // Mock sending to private database
    await new Promise((resolve) => setTimeout(resolve, 600));

    setLastSubmittedWish(wishText);
    setCustomWish("");
    setSelectedPreset(null);
    setIsSubmitting(false);
    setShowReceivedPrompt(true);
  };

  return (
    <section id="wishes" className="section-bg" style={{ minHeight: "100svh", display: "flex", alignItems: "center" }}>
      <Image src="/assets/shared/all-page.jpeg" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.35)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow={t.wishesEyebrow}
          heading={t.wishesHeading}
          quote={t.wishesQuote}
        />

        <div className="w-full max-w-[460px] mx-auto">
          {/* Privacy Note Badge */}
          <div
            className="flex items-center justify-center gap-2 mb-5 px-3.5 py-1.5 rounded-full mx-auto w-fit"
            style={{
              background: "rgba(140,75,39,0.07)",
              border: "1px solid rgba(140,75,39,0.20)",
            }}
          >
            <ShieldCheck size={14} color="#8C4B27" />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.74rem",
                color: "#5B2A1E",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              100% Private &amp; Anonymous Wish Drop Box
            </span>
          </div>

          {/* Preset Options with clean vector icons */}
          <div className="flex flex-col gap-2 mb-5">
            <label
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#8C4B27",
              }}
            >
              Choose a blessing or celebration idea:
            </label>
            <div className="flex flex-wrap gap-2">
              {WISH_PRESETS.map((preset) => {
                const isSelected = selectedPreset === preset.text;
                return (
                  <button
                    key={preset.text}
                    type="button"
                    onClick={() => handleSelectPreset(preset.text)}
                    className="transition-all duration-200"
                    style={{
                      whiteSpace: "normal",
                      textAlign: "left",
                      lineHeight: 1.35,
                      padding: "0.5rem 0.9rem",
                      borderRadius: "9999px",
                      fontSize: "0.82rem",
                      fontFamily: "var(--font-sans)",
                      fontWeight: isSelected ? 600 : 500,
                      background: isSelected ? "#8C4B27" : "rgba(255,255,255,0.88)",
                      color: isSelected ? "#FFFFFF" : "#3B1B14",
                      border: `1.5px solid ${isSelected ? "#8C4B27" : "rgba(140,75,39,0.25)"}`,
                      boxShadow: isSelected
                        ? "0 4px 12px rgba(140,75,39,0.25)"
                        : "0 2px 6px rgba(140,75,39,0.06)",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                    }}
                  >
                    {renderPresetIcon(preset.icon, isSelected)}
                    <span>{preset.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Wish Input & Send Button */}
          <div className="flex flex-col gap-2 mb-4">
            <div
              className="flex items-center gap-2 p-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.92)",
                border: "1.5px solid rgba(140,75,39,0.28)",
                boxShadow: "0 4px 16px rgba(140,75,39,0.08)",
              }}
            >
              <input
                value={customWish}
                onChange={(e) => {
                  setCustomWish(e.target.value);
                  if (selectedPreset && e.target.value !== selectedPreset) {
                    setSelectedPreset(null);
                  }
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSubmitWish()}
                placeholder="Or write your anonymous wish…"
                disabled={isSubmitting}
                style={{
                  flex: 1,
                  padding: "0.6rem 1rem",
                  background: "transparent",
                  border: "none",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.90rem",
                  color: "#1E0F0C",
                  outline: "none",
                }}
                aria-label="Write an anonymous wish"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmitWish}
                disabled={(!customWish.trim() && !selectedPreset) || isSubmitting}
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "50%",
                  background: (!customWish.trim() && !selectedPreset) || isSubmitting
                    ? "rgba(140,75,39,0.30)"
                    : "#8C4B27",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: (!customWish.trim() && !selectedPreset) || isSubmitting ? "not-allowed" : "pointer",
                  flexShrink: 0,
                  transition: "background 0.2s",
                }}
                aria-label="Send anonymous wish"
              >
                {isSubmitting ? (
                  <Loader2 size={16} color="white" className="animate-spin" />
                ) : (
                  <Send size={15} color="white" />
                )}
              </motion.button>
            </div>
            <div className="flex items-center justify-center gap-1.5 pt-1">
              <Lock size={12} color="#8C4B27" />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.74rem",
                  color: "#6E382A",
                  opacity: 0.9,
                }}
              >
                Your wish is sent privately to the couple. No public comments are displayed.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal Prompt: "Your wish is received" */}
      <AnimatePresence>
        {showReceivedPrompt && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(30, 15, 12, 0.55)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 14 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="relative w-full max-w-sm rounded-2xl p-6 text-center"
              style={{
                background: "#FAF7F2",
                border: "1.5px solid rgba(140,75,39,0.30)",
                boxShadow: "0 24px 48px rgba(30,15,12,0.25)",
              }}
            >
              {/* Close Icon */}
              <button
                type="button"
                onClick={() => setShowReceivedPrompt(false)}
                className="absolute top-3.5 right-3.5 p-1 rounded-full text-[#8C4B27] hover:bg-[#8C4B27]/10 transition-colors"
                aria-label="Close prompt"
              >
                <X size={18} />
              </button>

              {/* Success Badge */}
              <div
                className="w-14 h-14 mx-auto mb-3.5 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(140,75,39,0.10)",
                  border: "1.5px solid rgba(140,75,39,0.25)",
                }}
              >
                <CheckCircle2 size={30} color="#8C4B27" />
              </div>

              <h4
                className="heading-calligraphy text-2xl font-bold mb-2"
                style={{ color: "#1E0F0C", letterSpacing: "0.02em" }}
              >
                Your Wish is Received!
              </h4>

              <p
                className="font-serif-wd text-sm mb-4 leading-relaxed"
                style={{ color: "#4A2E2B" }}
              >
                Thank you for blessing Mradul &amp; Shreya. Your warm anonymous message has been safely saved to the couple&apos;s private guestbook.
              </p>

              {lastSubmittedWish && (
                <div
                  className="p-3 rounded-xl mb-5 text-left"
                  style={{
                    background: "rgba(140,75,39,0.06)",
                    border: "1px dashed rgba(140,75,39,0.25)",
                  }}
                >
                  <p
                    className="font-serif-wd text-xs italic"
                    style={{ color: "#3B1B14", lineHeight: 1.5 }}
                  >
                    &ldquo;{lastSubmittedWish}&rdquo;
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => setShowReceivedPrompt(false)}
                className="btn-primary w-full py-2.5 rounded-full text-xs font-bold tracking-wider uppercase cursor-pointer"
                style={{
                  boxShadow: "0 4px 14px rgba(140,75,39,0.30)",
                }}
              >
                Wonderful
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default WishesSection;
