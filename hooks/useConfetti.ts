"use client";
import { useCallback } from "react";

export function useConfetti() {
  const fire = useCallback(async (origin?: { x: number; y: number }) => {
    const confetti = (await import("canvas-confetti")).default;
    confetti({
      particleCount: 120,
      spread: 80,
      origin: origin ?? { x: 0.5, y: 0.5 },
      colors: ["#D4AF37", "#8C4B27", "#C24137", "#FAF7F2", "#FFD700", "#B8860B"],
      ticks: 200,
    });
  }, []);

  const fireSmall = useCallback(async () => {
    const confetti = (await import("canvas-confetti")).default;
    confetti({
      particleCount: 40,
      spread: 55,
      origin: { x: 0.5, y: 0.6 },
      colors: ["#D4AF37", "#8C4B27", "#C24137"],
      ticks: 120,
    });
  }, []);

  return { fire, fireSmall };
}
