import { WeddingEvent } from "@/types";

export const EVENTS: WeddingEvent[] = [
  {
    id: "haldi",
    day: 1,
    time: "2:00 PM",
    title: "The Haldi Ceremony",
    description: "Sunshine yellows, marigold floral showers, organic ubtan, lively dhol rhythms, and joyful blessings.",
    location: "Pool Lawns • Taj Heritage",
  },
  {
    id: "sangeet",
    day: 1,
    time: "8:30 PM",
    title: "The Sangeet Night",
    description: "Glitz & glamour! High-energy dance performances, bespoke artisanal mocktail bar, and a Bollywood DJ dance floor.",
    location: "Grand Sala Ballroom",
  },
  {
    id: "baraat",
    day: 2,
    time: "2:00 PM",
    title: "The Royal Baraat",
    description: "Grand festive procession with dhol beats, dancing, and royal celebration as the groom arrives.",
    location: "Taj Heritage",
  },
  {
    id: "pheras",
    day: 2,
    time: "5:00 PM",
    title: "The Royal Pheras",
    description: "Sacred sunset Vedic vows and pheras around the holy fire by the Arabian Sea.",
    location: "Sunset Lawns • Taj Heritage",
  },
  {
    id: "gala",
    day: 2,
    time: "9:00 PM",
    title: "The Gala Dinner & Afterparty",
    description: "Celebratory sparkling mocktail toasts, lavish gourmet feast, and starlit dancing under the Goan night sky.",
    location: "Grand Sala Banquet",
  },
];

export const DAY1_EVENTS = EVENTS.filter((e) => e.day === 1);
export const DAY2_EVENTS = EVENTS.filter((e) => e.day === 2);
