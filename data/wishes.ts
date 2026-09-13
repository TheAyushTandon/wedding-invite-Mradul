import { WishPreset, WishItem } from "@/types";

export const WISH_PRESETS: WishPreset[] = [
  { emoji: "🍜", text: "2 AM Midnight Maggi & Masala Chai Bar" },
  { emoji: "🎶", text: "Guaranteed Sangeet Dance Floor Banger" },
  { emoji: "🍹", text: "Signature Goan Coconut / Chili Cocktail" },
  { emoji: "📸", text: "Polaroid Photo Booth with Quirky Props" },
  { emoji: "🍨", text: "Late-Night Artisanal Kulfi & Jalebi Counter" },
  { emoji: "🏖️", text: "Post-Wedding Beach Volleyball & Coconut Water" },
];

export const INITIAL_WISHES: WishItem[] = [
  {
    id: "w1",
    name: "Aman & Riya",
    wish: "Midnight 2 AM Maggi & Cutting Chai station by the pool!",
    votes: 14,
    voted: false,
  },
  {
    id: "w2",
    name: "Sneha K.",
    wish: "Retro 90s Bollywood dance segment during Sangeet afterparty!",
    votes: 19,
    voted: false,
  },
  {
    id: "w3",
    name: "Rohan Sharma",
    wish: "Signature spicy mango feni cocktail at sunset pheras.",
    votes: 8,
    voted: false,
  },
];
