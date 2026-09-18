import { WeddingEvent } from "@/types";

export const EVENTS: WeddingEvent[] = [
  {
    id: "haldi",
    day: 1,
    time: "11:00 AM",
    title: "The Haldi Ceremony",
    description: "Sunshine yellows, marigold floral showers, organic ubtan, lively dhol rhythms, and joyful blessings.",
    location: "Oceanfront Palm Lawn • Taj Heritage",
  },
  {
    id: "sangeet",
    day: 1,
    time: "07:30 PM",
    title: "The Sangeet Night",
    description: "Glitz & glamour! High-energy dance performances, live musical acts, bespoke artisanal mocktail bar, and a Bollywood DJ dance floor.",
    location: "The Grand Heritage Ballroom",
  },
  {
    id: "pheras",
    day: 2,
    time: "04:30 PM",
    title: "The Baraat & Royal Pheras",
    description: "Grand Baraat procession at 4:30 PM followed by sacred sunset Vedic vows and pheras around the holy fire by the Arabian Sea.",
    location: "Beachfront Sunset Mandap",
  },
  {
    id: "gala",
    day: 2,
    time: "08:30 PM",
    title: "The Gala Dinner & Afterparty",
    description: "Celebratory sparkling mocktail toasts, lavish gourmet feast, live band serenades, and starlit dancing under the Goan night sky.",
    location: "Mandovi Royal Terrace",
  },
];

export const DAY1_EVENTS = EVENTS.filter((e) => e.day === 1);
export const DAY2_EVENTS = EVENTS.filter((e) => e.day === 2);
