"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { HairlineDivider } from "@/components/shared/HairlineDivider";
import { CopyButton } from "@/components/shared/CopyButton";
import { GIFT_DETAILS } from "@/data/gifts";
import { useConfetti } from "@/hooks/useConfetti";
import { Gift, Heart, Send, CheckCircle2, X } from "lucide-react";

const blessingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  note: z.string().optional(),
});

type BlessingForm = z.infer<typeof blessingSchema>;

export function GiftsSection() {
  const [revealed, setRevealed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const { fire } = useConfetti();

  const { register, handleSubmit, formState: { errors } } = useForm<BlessingForm>({
    resolver: zodResolver(blessingSchema),
  });

  const handleReveal = async () => {
    setRevealed(true);
    await fire({ x: 0.5, y: 0.4 });
  };

  const onSubmit = async (data: BlessingForm) => {
    setSubmittedName(data.firstName);
    setSubmitted(true);
    await fire();
  };

  return (
    <section id="gifts" className="section-bg" style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}>
      <Image src="/assets/shared/all-page.jpeg" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: revealed ? "rgba(250,240,210,0.50)" : "rgba(250,247,242,0.35)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow="✦ WISHING WELL ✦"
          heading="Gifts & Contributions"
          quote="Your love and presence on our wedding day is the greatest gift of all."
        />

        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="pre-reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <p
                className="font-serif-wd mb-8 px-2"
                style={{ fontSize: "1rem", color: "#4A2E2B", lineHeight: 1.8, fontStyle: "italic" }}
              >
                If you wish to honor us with a gift, a warm contribution toward our honeymoon and new beginning is deeply appreciated.
              </p>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleReveal}
                className="flex flex-col items-center gap-3 mx-auto"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <div
                  style={{
                    width: "4.5rem",
                    height: "4.5rem",
                    borderRadius: "50%",
                    background: "#8C4B27",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 20px rgba(140,75,39,0.35)",
                    transition: "background 0.2s",
                  }}
                >
                  <Gift size={28} color="white" />
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8C4B27" }}>
                  SEND A WEDDING GIFT
                </p>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "#3F2018", fontStyle: "italic" }}>
                  ✦ Tap to open wishing well ✦
                </p>
              </motion.button>

              <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "#5A382D", fontStyle: "italic", marginTop: "2rem" }}>
                With heartfelt gratitude for celebrating our love
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Blessing form */}
              <div className="glass-card p-5 mb-5">
                <div className="flex items-center gap-2 mb-4">
                  <Heart size={16} color="#C24137" fill="#C24137" />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1E0F0C" }}>
                    LEAVE A BLESSING
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "#5A382D", marginLeft: "auto" }}>
                    Optional Note
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col gap-3"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3F2018", display: "block", marginBottom: "0.35rem" }}>
                            First Name *
                          </label>
                          <input
                            {...register("firstName")}
                            placeholder="Your name"
                            style={{ width: "100%", padding: "0.6rem 0.8rem", borderRadius: "0.5rem", border: "1.5px solid rgba(140,75,39,0.25)", background: "rgba(255,255,255,0.90)", fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "#1E0F0C", outline: "none" }}
                          />
                          {errors.firstName && <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "#C24137", marginTop: "0.25rem" }}>{errors.firstName.message}</p>}
                        </div>
                        <div>
                          <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3F2018", display: "block", marginBottom: "0.35rem" }}>
                            Last Name
                          </label>
                          <input
                            {...register("lastName")}
                            placeholder="Optional"
                            style={{ width: "100%", padding: "0.6rem 0.8rem", borderRadius: "0.5rem", border: "1.5px solid rgba(140,75,39,0.25)", background: "rgba(255,255,255,0.90)", fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "#1E0F0C", outline: "none" }}
                          />
                        </div>
                      </div>
                      <div>
                        <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3F2018", display: "block", marginBottom: "0.35rem" }}>
                          Warm Note & Sent Amount
                        </label>
                        <textarea
                          {...register("note")}
                          rows={3}
                          placeholder='Share a sweet blessing or sent amount (e.g., "$150 via Zelle")...'
                          style={{ width: "100%", padding: "0.6rem 0.8rem", borderRadius: "0.5rem", border: "1.5px solid rgba(140,75,39,0.25)", background: "rgba(255,255,255,0.90)", fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "#1E0F0C", outline: "none", resize: "none", lineHeight: 1.6 }}
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full">
                        <Send size={14} />
                        SEND WARM NOTE
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-3"
                    >
                      <CheckCircle2 size={36} color="#25D366" style={{ marginBottom: "0.75rem" }} />
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#15803D", marginBottom: "0.35rem" }}>
                        NOTE RECORDED WITH LOVE!
                      </p>
                      <p className="font-serif-wd" style={{ fontSize: "1rem", color: "#1E0F0C", fontStyle: "italic" }}>
                        Thank you, {submittedName}! Your heartfelt wishes mean the world to us.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bank details */}
              <HairlineDivider className="mb-5" />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8C4B27", textAlign: "center", marginBottom: "1rem" }}>
                Direct Transfer Details
              </p>

              <div className="flex flex-col gap-3 mb-5">
                {GIFT_DETAILS.map((detail, i) => (
                  <BankDetailRow key={i} detail={detail} onCopy={() => fire({ x: 0.5, y: 0.6 })} />
                ))}
              </div>

              <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.9rem", color: "#5A382D", fontStyle: "italic", textAlign: "center", marginBottom: "1rem" }}>
                ✨ Tap copy on any account details for celebration confetti ✨
              </p>

              <button
                onClick={() => setRevealed(false)}
                style={{ display: "block", margin: "0 auto", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 600, color: "#8C4B27", textDecoration: "underline" }}
              >
                ← Close Wishing Well
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function BankDetailRow({ detail, onCopy }: { detail: { label: string; value: string }; onCopy: () => void }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-xl"
      style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(140,75,39,0.22)" }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8C4B27", marginBottom: "0.15rem" }}>
          {detail.label}
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 700, color: "#1E0F0C", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {detail.value}
        </p>
      </div>
      <CopyButton value={detail.value} label={detail.label} onCopied={onCopy} />
    </div>
  );
}
