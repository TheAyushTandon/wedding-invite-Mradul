"use client";
import { useState, useRef, useCallback } from "react";
import { OpeningTransition } from "@/components/sections/OpeningTransition";
import { Navigation } from "@/components/sections/Navigation";
import { MusicToggle } from "@/components/sections/MusicToggle";
import { AudioPlayer, type AudioPlayerHandle } from "@/components/shared/AudioPlayer";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { HeroSection } from "@/components/sections/HeroSection";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { AttireSection } from "@/components/sections/AttireSection";
import { VenuesSection } from "@/components/sections/VenuesSection";
import { TravelSection } from "@/components/sections/TravelSection";
import { LoveStorySection } from "@/components/sections/LoveStorySection";
import { FamiliesSection } from "@/components/sections/FamiliesSection";
import { AccommodationsSection } from "@/components/sections/AccommodationsSection";
import { ImportantNotesSection } from "@/components/sections/ImportantNotesSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { GiftsSection } from "@/components/sections/GiftsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { WishesSection } from "@/components/sections/WishesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HelpdeskSection } from "@/components/sections/HelpdeskSection";
import { RSVPSection } from "@/components/sections/RSVPSection";
import { Footer } from "@/components/sections/Footer";
import { WEDDING } from "@/data/wedding";

export default function WeddingPage() {
  const [showOpening, setShowOpening] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<AudioPlayerHandle>(null);

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

      {/* Hidden audio player */}
      <AudioPlayer ref={audioRef} src={WEDDING.music} />

      {/* Opening transition */}
      {showOpening && (
        <OpeningTransition
          onComplete={handleOpeningComplete}
          onMusicStart={handleMusicStart}
        />
      )}

      {/* Main site */}
      {!showOpening && (
        <div id="wedding-site">
          <Navigation />
          <MusicToggle playing={musicPlaying} onToggle={toggleMusic} />

          <main>
            <HeroSection />
            <CountdownSection />
            <ScheduleSection />
            <AttireSection />
            <VenuesSection />
            <TravelSection />
            <LoveStorySection />
            <FamiliesSection />
            <AccommodationsSection />
            <ImportantNotesSection />
            <MenuSection />
            <GiftsSection />
            <GallerySection />
            <WishesSection />
            <FAQSection />
            <HelpdeskSection />
            <RSVPSection />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
