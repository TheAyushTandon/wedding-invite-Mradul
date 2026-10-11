"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { WISH_PRESETS } from "@/data/wishes";
import {
  Send,
  CheckCircle2,
  X,
  Loader2,
  Heart,
  User,
  Coffee,
  CupSoda,
  Camera,
  UtensilsCrossed,
  Gift,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";

interface Comment {
  id: number;
  name: string;
  wish: string;
  likes: number;
  timestamp: string;
}

function renderPresetIcon(iconName?: string, isSelected?: boolean) {
  const iconColor = isSelected ? "#FFFFFF" : "#8C4B27";
  const size = 15;
  switch (iconName) {
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
      return <Sparkles size={size} color={iconColor} className="flex-shrink-0" />;
  }
}

function getWishSignature(w: { name?: string; wish: string }): string {
  return `${(w.name || "").trim().toLowerCase()}:::${w.wish.trim().toLowerCase()}`;
}

export function WishesSection() {
  const [name, setName] = useState("");
  const [customWish, setCustomWish] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReceivedPrompt, setShowReceivedPrompt] = useState(false);
  const [wishes, setWishes] = useState<Comment[]>([]);
  const [loadingWishes, setLoadingWishes] = useState(true);
  const [showAllModal, setShowAllModal] = useState(false);
  const [likedKeys, setLikedKeys] = useState<Set<string>>(new Set());
  
  const { t } = useLanguage();

  useEffect(() => {
    fetchWishes();
    // Load liked keys (both IDs and signatures) from local storage
    const savedLikes = localStorage.getItem("likedWishes");
    if (savedLikes) {
      try {
        const parsed = JSON.parse(savedLikes);
        if (Array.isArray(parsed)) {
          setLikedKeys(new Set(parsed.map(String)));
        }
      } catch (e) {}
    }
  }, []);

  const fetchWishes = async () => {
    try {
      const res = await fetch("/api/wishes");
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setWishes(json.data);

          // Reconcile and link persistent likes across refresh
          setLikedKeys(prevKeys => {
            const updated = new Set(prevKeys);
            let changed = false;
            json.data.forEach((w: Comment) => {
              const sig = getWishSignature(w);
              // If previously liked by signature or ID, ensure both are locked in
              if (updated.has(sig) || updated.has(String(w.id))) {
                if (!updated.has(sig)) {
                  updated.add(sig);
                  changed = true;
                }
                if (!updated.has(String(w.id))) {
                  updated.add(String(w.id));
                  changed = true;
                }
              }
            });
            if (changed) {
              localStorage.setItem("likedWishes", JSON.stringify(Array.from(updated)));
            }
            return updated;
          });
        }
      }
    } catch (err) {
      console.error("Failed to fetch wishes", err);
    } finally {
      setLoadingWishes(false);
    }
  };

  const handleLike = async (wish: Comment) => {
    const sig = getWishSignature(wish);
    const idKey = String(wish.id);
    if (likedKeys.has(idKey) || likedKeys.has(sig)) return;

    // Optimistic update
    setWishes(prev => prev.map(w => w.id === wish.id ? { ...w, likes: w.likes + 1 } : w));
    
    const newLikedKeys = new Set(likedKeys);
    newLikedKeys.add(idKey);
    newLikedKeys.add(sig);
    setLikedKeys(newLikedKeys);
    localStorage.setItem("likedWishes", JSON.stringify(Array.from(newLikedKeys)));

    try {
      await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "like", id: wish.id }),
      });
    } catch (err) {
      console.error("Failed to like wish", err);
      // Revert optimistic update on hard error
      setWishes(prev => prev.map(w => w.id === wish.id ? { ...w, likes: Math.max(0, w.likes - 1) } : w));
      newLikedKeys.delete(idKey);
      newLikedKeys.delete(sig);
      setLikedKeys(newLikedKeys);
      localStorage.setItem("likedWishes", JSON.stringify(Array.from(newLikedKeys)));
    }
  };

  const handleSubmitWish = async () => {
    const wishText = customWish.trim();
    const wishName = name.trim();
    if (!wishText || isSubmitting) return;

    setIsSubmitting(true);

    try {
      await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: wishName,
          wish: wishText,
          timestamp: new Date().toISOString(),
        }),
      });
      
      // Add locally for immediate feedback
      const newWish: Comment = {
        id: Date.now(), // temporary ID
        name: wishName || "Anonymous Guest",
        wish: wishText,
        likes: 0,
        timestamp: new Date().toISOString(),
      };
      setWishes(prev => [newWish, ...prev].sort((a, b) => b.likes - a.likes));
      
      // Fetch fresh wishes immediately
      setTimeout(() => {
        fetchWishes();
      }, 1500);
      
    } catch (err) {
      console.error("[Submit Wish Error]", err);
    }

    setCustomWish("");
    setName("");
    setIsSubmitting(false);
    setShowReceivedPrompt(true);
  };

  const topWishes = wishes.slice(0, 3);

  const renderWishCard = (wish: Comment, isTop: boolean = false) => {
    const sig = getWishSignature(wish);
    const hasLiked = likedKeys.has(String(wish.id)) || likedKeys.has(sig);

    return (
      <div
        key={wish.id}
        className="relative p-4 rounded-2xl flex flex-col gap-2 transition-all"
        style={{
          background: isTop ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          border: isTop ? "1.5px solid rgba(140,75,39,0.3)" : "1px solid rgba(140,75,39,0.15)",
          boxShadow: isTop ? "0 4px 16px rgba(140,75,39,0.1)" : "0 2px 8px rgba(140,75,39,0.05)",
        }}
      >
        <div className="flex justify-between items-start gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#8C4B27]/10 flex items-center justify-center flex-shrink-0">
              <User size={14} color="#8C4B27" />
            </div>
            <div>
              <p className="font-sans font-bold text-sm text-[#5B2A1E]">
                {wish.name}
              </p>
              <p className="font-sans text-[0.65rem] text-[#8C4B27]/70">
                {new Date(wish.timestamp).toLocaleDateString("en-IN", {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleLike(wish)}
            disabled={hasLiked}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all"
            style={{
              background: hasLiked ? "#8C4B27" : "rgba(140,75,39,0.08)",
              border: `1px solid ${hasLiked ? "#8C4B27" : "rgba(140,75,39,0.2)"}`,
              cursor: hasLiked ? "default" : "pointer",
            }}
          >
            <Heart size={12} color={hasLiked ? "white" : "#8C4B27"} fill={hasLiked ? "white" : "transparent"} />
            <span className="font-sans font-bold text-xs" style={{ color: hasLiked ? "white" : "#8C4B27" }}>
              {wish.likes}
            </span>
          </button>
        </div>
        <p className="font-serif-wd text-sm leading-relaxed text-[#1E0F0C] mt-1">
          {wish.wish}
        </p>
      </div>
    );
  };

  return (
    <section id="wishes" className="section-bg" style={{ minHeight: "100svh", display: "flex", alignItems: "center" }}>
      <Image src="/assets/shared/all-page.jpeg" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.35)" }} />

      <div className="section-content section-pad w-full py-16 relative z-10">
        <SectionHeader
          eyebrow={t.wishesEyebrow}
          heading={t.wishesHeading}
          quote={t.wishesQuote}
        />

        <div className="w-full max-w-lg mx-auto">
          {/* Submit New Wish */}
          <div className="mb-10 p-5 rounded-3xl" style={{
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(140,75,39,0.2)",
            boxShadow: "0 8px 32px rgba(140,75,39,0.08)"
          }}>
            <h3 className="font-serif-wd text-lg font-bold text-[#5B2A1E] mb-1 text-center">
              Leave a Message for the Couple
            </h3>
            <p className="font-sans text-xs text-[#8C4B27]/80 text-center mb-4">
              Drop your blessings, ideas, or quirky suggestions below
            </p>
            
            <div className="flex flex-col gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name (Optional)"
                disabled={isSubmitting}
                className="w-full px-4 py-2.5 rounded-xl outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  border: "1.5px solid rgba(140,75,39,0.18)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "#1E0F0C",
                }}
              />

              {/* Ideas & Suggestions Pills */}
              <div className="flex flex-col gap-1.5 my-1">
                <span className="font-sans text-[0.72rem] font-bold uppercase tracking-wider text-[#8C4B27]">
                  Tap an idea or suggestion to fill:
                </span>
                <div className="flex flex-col gap-2">
                  {WISH_PRESETS.map((preset, idx) => {
                    const isSelected = customWish === preset.text;
                    return (
                      <motion.button
                        key={idx}
                        type="button"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => {
                          if (isSelected) {
                            setCustomWish("");
                          } else {
                            setCustomWish(preset.text);
                          }
                        }}
                        className="w-full text-left p-2.5 sm:px-3.5 sm:py-2.5 rounded-full flex items-center gap-2.5 transition-all duration-200"
                        style={{
                          background: isSelected ? "#8C4B27" : "rgba(255, 255, 255, 0.75)",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                          border: isSelected ? "1.5px solid #8C4B27" : "1px solid rgba(140, 75, 39, 0.2)",
                          boxShadow: isSelected
                            ? "0 4px 14px rgba(140, 75, 39, 0.22)"
                            : "0 2px 6px rgba(140, 75, 39, 0.04)",
                          color: isSelected ? "#FFFFFF" : "#1E0F0C",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full"
                          style={{
                            background: isSelected ? "rgba(255,255,255,0.2)" : "rgba(140,75,39,0.08)",
                          }}
                        >
                          {renderPresetIcon(preset.icon, isSelected)}
                        </div>
                        <span className="font-sans text-xs sm:text-[0.82rem] leading-snug flex-1 font-medium">
                          {preset.text}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <textarea
                value={customWish}
                onChange={(e) => setCustomWish(e.target.value)}
                placeholder="Write your wishes, blessings, or ideas here..."
                disabled={isSubmitting}
                rows={3}
                className="w-full px-4 py-3 rounded-xl outline-none transition-all resize-none"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  border: "1.5px solid rgba(140,75,39,0.18)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "#1E0F0C",
                }}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmitWish}
                disabled={!customWish.trim() || isSubmitting}
                className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all"
                style={{
                  background: !customWish.trim() || isSubmitting ? "rgba(140,75,39,0.4)" : "#8C4B27",
                  color: "white",
                  cursor: !customWish.trim() || isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <>
                    <Send size={16} />
                    Post Message
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Top Comments Showcase */}
          <div className="mb-6">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#8C4B27] text-center mb-4">
              Showcase Comments
            </h3>
            
            {loadingWishes ? (
              <div className="flex justify-center py-8">
                <Loader2 size={24} color="#8C4B27" className="animate-spin" />
              </div>
            ) : wishes.length > 0 ? (
              <div className="flex flex-col gap-3">
                {topWishes.map(wish => renderWishCard(wish, true))}
              </div>
            ) : (
              <p className="text-center font-serif-wd text-sm text-[#8C4B27]/70 italic py-4">
                Be the first to leave a message!
              </p>
            )}
          </div>

          {/* View All Button */}
          {wishes.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowAllModal(true)}
                className="font-sans font-bold text-sm text-[#8C4B27] underline decoration-[#8C4B27]/40 underline-offset-4 hover:decoration-[#8C4B27] transition-all"
              >
                View all {wishes.length} comments
              </button>
            </div>
          )}
        </div>
      </div>

      {/* All Comments Modal */}
      <AnimatePresence>
        {showAllModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{
              background: "rgba(30, 15, 12, 0.6)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl flex flex-col overflow-hidden"
              style={{
                background: "#FAF7F2",
                border: "1px solid rgba(140,75,39,0.2)",
                boxShadow: "0 24px 48px rgba(30,15,12,0.3)",
              }}
            >
              <div className="p-4 border-b border-[#8C4B27]/10 flex items-center justify-between sticky top-0 bg-[#FAF7F2]/95 backdrop-blur-sm z-10">
                <h3 className="font-serif-wd font-bold text-xl text-[#5B2A1E]">
                  All Messages
                </h3>
                <button
                  onClick={() => setShowAllModal(false)}
                  className="p-2 rounded-full text-[#8C4B27] hover:bg-[#8C4B27]/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col gap-3">
                {wishes.map(wish => renderWishCard(wish, false))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showReceivedPrompt && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
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
              className="relative w-full max-w-sm rounded-2xl p-6 text-center"
              style={{
                background: "#FAF7F2",
                border: "1.5px solid rgba(140,75,39,0.30)",
                boxShadow: "0 24px 48px rgba(30,15,12,0.25)",
              }}
            >
              <div
                className="w-14 h-14 mx-auto mb-3.5 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(140,75,39,0.10)",
                  border: "1.5px solid rgba(140,75,39,0.25)",
                }}
              >
                <CheckCircle2 size={30} color="#8C4B27" />
              </div>
              <h4 className="heading-calligraphy text-2xl font-bold mb-2 text-[#1E0F0C]">
                Message Posted!
              </h4>
              <p className="font-serif-wd text-sm mb-6 leading-relaxed text-[#4A2E2B]">
                Thank you for leaving a message for Mradul &amp; Shreya. It has been added to the wall!
              </p>
              <button
                onClick={() => setShowReceivedPrompt(false)}
                className="btn-primary w-full py-2.5 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{ boxShadow: "0 4px 14px rgba(140,75,39,0.30)" }}
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
