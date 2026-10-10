"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Send,
  CheckCircle2,
  X,
  Loader2,
  Heart,
  User,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageContext";

interface Comment {
  id: number;
  name: string;
  wish: string;
  likes: number;
  timestamp: string;
}

export function WishesSection() {
  const [name, setName] = useState("");
  const [customWish, setCustomWish] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReceivedPrompt, setShowReceivedPrompt] = useState(false);
  const [wishes, setWishes] = useState<Comment[]>([]);
  const [loadingWishes, setLoadingWishes] = useState(true);
  const [showAllModal, setShowAllModal] = useState(false);
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());
  
  const { t } = useLanguage();

  useEffect(() => {
    fetchWishes();
    // Load liked ids from local storage
    const savedLikes = localStorage.getItem("likedWishes");
    if (savedLikes) {
      try {
        setLikedIds(new Set(JSON.parse(savedLikes)));
      } catch (e) {}
    }
  }, []);

  const fetchWishes = async () => {
    try {
      const res = await fetch("/api/wishes");
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setWishes(json.data);
        }
      }
    } catch (err) {
      console.error("Failed to fetch wishes", err);
    } finally {
      setLoadingWishes(false);
    }
  };

  const handleLike = async (id: number) => {
    if (likedIds.has(id)) return;

    // Optimistic update
    setWishes(prev => prev.map(w => w.id === id ? { ...w, likes: w.likes + 1 } : w));
    const newLikedIds = new Set(likedIds);
    newLikedIds.add(id);
    setLikedIds(newLikedIds);
    localStorage.setItem("likedWishes", JSON.stringify(Array.from(newLikedIds)));

    try {
      await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "like", id }),
      });
    } catch (err) {
      console.error("Failed to like wish", err);
      // Revert optimistic update
      setWishes(prev => prev.map(w => w.id === id ? { ...w, likes: w.likes - 1 } : w));
      newLikedIds.delete(id);
      setLikedIds(newLikedIds);
      localStorage.setItem("likedWishes", JSON.stringify(Array.from(newLikedIds)));
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
      
      // Fetch fresh wishes after a short delay to get the real row ID
      setTimeout(() => {
        fetchWishes();
      }, 2500);
      
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
    const hasLiked = likedIds.has(wish.id);
    const isTemporary = wish.id > 1000000000000; // Date.now() timestamp IDs

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
            onClick={() => handleLike(wish.id)}
            disabled={hasLiked || isTemporary}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all"
            style={{
              background: hasLiked ? "#8C4B27" : "rgba(140,75,39,0.08)",
              border: `1px solid ${hasLiked ? "#8C4B27" : "rgba(140,75,39,0.2)"}`,
              cursor: hasLiked || isTemporary ? "default" : "pointer",
              opacity: isTemporary ? 0.5 : 1
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
            <h3 className="font-serif-wd text-lg font-bold text-[#5B2A1E] mb-4 text-center">
              Leave a Message for the Couple
            </h3>
            
            <div className="flex flex-col gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name (Optional)"
                disabled={isSubmitting}
                className="w-full px-4 py-2.5 rounded-xl outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1.5px solid rgba(140,75,39,0.15)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "#1E0F0C",
                }}
              />
              <textarea
                value={customWish}
                onChange={(e) => setCustomWish(e.target.value)}
                placeholder="Write your wishes, blessings, or ideas here..."
                disabled={isSubmitting}
                rows={3}
                className="w-full px-4 py-3 rounded-xl outline-none transition-all resize-none"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1.5px solid rgba(140,75,39,0.15)",
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
