"use client";
import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

export interface AudioPlayerHandle {
  play: () => void;
  pause: () => void;
}

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer = forwardRef<AudioPlayerHandle, AudioPlayerProps>(({ src }, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.35;
        audioRef.current.play().catch(() => {});
      }
    },
    pause: () => {
      audioRef.current?.pause();
    },
  }));

  return (
    <audio ref={audioRef} src={src} loop preload="none" aria-hidden="true" />
  );
});

AudioPlayer.displayName = "AudioPlayer";
export { AudioPlayer };
