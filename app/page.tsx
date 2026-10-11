"use client";
import { useState, useRef, useCallback } from "react";
import { OpeningTransition } from "@/components/sections/OpeningTransition";
import { Navigation } from "@/components/sections/Navigation";
import { MusicToggle } from "@/components/sections/MusicToggle";
import { AudioPlayer, type AudioPlayerHandle } from "@/components/shared/AudioPlayer";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { ServiceWorkerRegister } from "@/components/shared/ServiceWorkerRegister";
import { LanguageProvider, useLanguage } from "@/components/shared/LanguageContext";
import { HeroSection } from "@/components/sections/HeroSection";
import { WEDDING } from "@/data/wedding";
import dynamic from "next/dynamic";

const CountdownSection = dynamic(() => import("@/components/sections/CountdownSection").then(mod => mod.CountdownSection));
const ScheduleSection = dynamic(() => import("@/components/sections/ScheduleSection").then(mod => mod.ScheduleSection));
const AttireSection = dynamic(() => import("@/components/sections/AttireSection").then(mod => mod.AttireSection));
const TravelSection = dynamic(() => import("@/components/sections/TravelSection").then(mod => mod.TravelSection));
const FamiliesSection = dynamic(() => import("@/components/sections/FamiliesSection").then(mod => mod.FamiliesSection));
const ImportantNotesSection = dynamic(() => import("@/components/sections/ImportantNotesSection").then(mod => mod.ImportantNotesSection));
const GallerySection = dynamic(() => import("@/components/sections/GallerySection").then(mod => mod.GallerySection));
const WishesSection = dynamic(() => import("@/components/sections/WishesSection").then(mod => mod.WishesSection));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection").then(mod => mod.FAQSection));
const HelpdeskSection = dynamic(() => import("@/components/sections/HelpdeskSection").then(mod => mod.HelpdeskSection));
const RSVPSection = dynamic(() => import("@/components/sections/RSVPSection").then(mod => mod.RSVPSection));
const Footer = dynamic(() => import("@/components/sections/Footer").then(mod => mod.Footer));

function WeddingContent() {
  const [showOpening, setShowOpening] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<AudioPlayerHandle>(null);
  const { lang } = useLanguage();

  const handleOpeningComplete = useCallback(() => {
    setShowOpening(false);
  }, []);

  const handleMusicStart = useCallback(() => {
    audioRef.current?.play();
    setMusicPlaying(true);
  }, []);

  const toggleMusic = useCallback(() => {
    if (musicPlaying) {
      audioRef.current?.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current?.play();
      setMusicPlaying(true);
    }
  }, [musicPlaying]);

  return (
    <>
      {/* Global smooth momentum scrolling */}
      <SmoothScroll />

      {/* Offline Service Worker Cache */}
      <ServiceWorkerRegister />

      {/* Hidden audio player */}
      <AudioPlayer ref={audioRef} src={WEDDING.music} />

      {/* Main site */}
      <div
        id="wedding-site"
        data-lang={lang}
        className={`transition-opacity duration-700 ease-out ${
          showOpening ? "opacity-0 pointer-events-none select-none h-screen overflow-hidden" : "opacity-100"
        }`}
      >
        <Navigation />
        <MusicToggle playing={musicPlaying} onToggle={toggleMusic} />

        <main>
          <HeroSection />
          <FamiliesSection />
          <CountdownSection />
          <ScheduleSection />
          <AttireSection />
          <WishesSection />
          <ImportantNotesSection />
          <TravelSection />
          <RSVPSection />
          <GallerySection />
          <FAQSection />
          <HelpdeskSection />
        </main>

        <Footer />
      </div>

      {/* Opening transition modal overlay */}
      {showOpening && (
        <OpeningTransition
          onComplete={handleOpeningComplete}
          onMusicStart={handleMusicStart}
        />
      )}
    </>
  );
}

export default function WeddingPage() {
  return (
    <LanguageProvider>
      <WeddingContent />
    </LanguageProvider>
  );
}
