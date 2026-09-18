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
import { CountdownSection } from "@/components/sections/CountdownSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { AttireSection } from "@/components/sections/AttireSection";
import { TravelSection } from "@/components/sections/TravelSection";
import { FamiliesSection } from "@/components/sections/FamiliesSection";
import { AccommodationsSection } from "@/components/sections/AccommodationsSection";
import { ImportantNotesSection } from "@/components/sections/ImportantNotesSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { WishesSection } from "@/components/sections/WishesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HelpdeskSection } from "@/components/sections/HelpdeskSection";
import { RSVPSection } from "@/components/sections/RSVPSection";
import { Footer } from "@/components/sections/Footer";
import { WEDDING } from "@/data/wedding";

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
          <CountdownSection />
          <ScheduleSection />
          <AttireSection />
          <TravelSection />
          <FamiliesSection />
          <AccommodationsSection />
          <ImportantNotesSection />
          <MenuSection />
          <GallerySection />
          <WishesSection />
          <FAQSection />
          <HelpdeskSection />
          <RSVPSection />
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
