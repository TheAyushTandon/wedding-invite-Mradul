"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { WISH_PRESETS, INITIAL_WISHES } from "@/data/wishes";
import type { WishItem } from "@/types";
import { Send, ThumbsUp, Sparkles } from "lucide-react";

export function WishesSection() {
  const [customWish, setCustomWish] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [wishes, setWishes] = useState<WishItem[]>(INITIAL_WISHES);
  const [submitted, setSubmitted] = useState(false);

  const handleVote = (id: string) => {
    setWishes((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, votes: w.voted ? w.votes - 1 : w.votes + 1, voted: !w.voted } : w
      )
    );
  };

  const handleSubmitWish = () => {
    const wishText = customWish.trim() || selectedPreset;
    if (!wishText) return;
    const newWish: WishItem = {
      id: `w${Date.now()}`,
      name: "You",
      wish: wishText,
      votes: 1,
      voted: false,
    };
    setWishes((prev) => [newWish, ...prev]);
    setCustomWish("");
    setSelectedPreset(null);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const sorted = [...wishes].sort((a, b) => b.votes - a.votes);

  return (
    <section id="wishes" className="section-bg" style={{ minHeight: "100dvh", display: "flex", alignItems: "flex-start" }}>
      <Image src="/assets/countdown/floral-arch-bg.png" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.88)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow="✦ INTERACTIVE WISHES ✦"
          heading="Wedding Wish Wall"
          quote="Dream big for us! Share your most creative, heartfelt idea for our celebrations."
        />

        {/* Preset chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {WISH_PRESETS.map((preset) => (
            <button
              key={preset.text}
              onClick={() => setSelectedPreset(selectedPreset === preset.text ? null : preset.text)}
              className={`chip ${selectedPreset === preset.text ? "selected" : ""}`}
            >
              {preset.emoji} {preset.text.split(" ").slice(0, 3).join(" ")}…
            </button>
          ))}
        </div>

        {/* Custom input */}
        <div className="flex gap-2 mb-6">
          <input
            value={customWish}
            onChange={(e) => setCustomWish(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmitWish()}
            placeholder="Or write your own magical wish…"
            style={{
              flex: 1,
              padding: "0.75rem 1rem",
              borderRadius: "9999px",
              border: "1.5px solid rgba(140,75,39,0.25)",
              background: "rgba(255,255,255,0.80)",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.95rem",
              color: "#3D2522",
              outline: "none",
            }}
            aria-label="Write a wish for Mradul and Shreya"
          />
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleSubmitWish}
            disabled={!customWish.trim() && !selectedPreset}
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              background: (!customWish.trim() && !selectedPreset) ? "rgba(140,75,39,0.30)" : "#8C4B27",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: (!customWish.trim() && !selectedPreset) ? "not-allowed" : "pointer",
              flexShrink: 0,
              transition: "background 0.2s",
            }}
            aria-label="Submit wish"
          >
            <Send size={15} color="white" />
          </motion.button>
        </div>

        {/* Success toast */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center gap-2 mb-4 px-4 py-3 rounded-xl"
              style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.30)" }}
            >
              <Sparkles size={16} color="#15803D" />
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.72rem", color: "#15803D", fontWeight: 600 }}>
                Your wish has been shared! ✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wish wall */}
        <div className="flex flex-col gap-3">
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8C4B27" }}>
            Community Wish Wall ✦ {wishes.length} wishes
          </p>
          {sorted.map((wish, i) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="glass-card flex items-start gap-3 p-4"
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.62rem", fontWeight: 600, color: "#8C4B27", marginBottom: "0.2rem" }}>
                  {wish.name}
                </p>
                <p className="font-serif-wd" style={{ fontSize: "0.9rem", color: "#4A2E2B", lineHeight: 1.6 }}>
                  "{wish.wish}"
                </p>
              </div>
              <button
                onClick={() => handleVote(wish.id)}
                style={{
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.15rem",
                  background: wish.voted ? "rgba(140,75,39,0.12)" : "transparent",
                  border: `1.5px solid ${wish.voted ? "#8C4B27" : "rgba(140,75,39,0.20)"}`,
                  borderRadius: "0.5rem",
                  padding: "0.4rem 0.5rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  minWidth: "2.5rem",
                }}
                aria-label={wish.voted ? "Remove vote" : "Vote for this wish"}
                aria-pressed={wish.voted}
              >
                <ThumbsUp size={13} color={wish.voted ? "#8C4B27" : "#6E4141"} fill={wish.voted ? "#8C4B27" : "transparent"} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 700, color: wish.voted ? "#8C4B27" : "#6E4141" }}>
                  {wish.votes}
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

