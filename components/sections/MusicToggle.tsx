"use client";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicToggleProps {
  playing: boolean;
  onToggle: () => void;
}

export function MusicToggle({ playing, onToggle }: MusicToggleProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onToggle}
      className="fixed z-40 flex items-center justify-center rounded-full"
      style={{
        bottom: "1.25rem",
        right: "max(1.25rem, calc((100vw - 460px) / 2 + 1.25rem))",
        width: "2.75rem",
        height: "2.75rem",
        background: "rgba(20,20,20,0.80)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.30)",
        cursor: "pointer",
      }}
      aria-label={playing ? "Mute background music" : "Play background music"}
    >
      {playing ? (
        <Volume2 size={18} color="rgba(255,255,255,0.90)" />
      ) : (
        <VolumeX size={18} color="rgba(255,255,255,0.55)" />
      )}
      {playing && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: "1.5px solid rgba(212,175,55,0.50)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </motion.button>
  );
}
