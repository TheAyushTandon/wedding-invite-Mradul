export interface WeddingEvent {
  id: string;
  day: 1 | 2;
  time: string;
  title: string;
  description: string;
  location: string;
}

export interface AttireOption {
  event: string;
  day: string;
  dressCode: string;
  colors: string[];
  colorHex: string[];
  description: string;
  image: string;
}

export interface Venue {
  id: string;
  name: string;
  event: string;
  description: string;
  image: string;
}

export interface Airport {
  id: string;
  code: string;
  name: string;
  description: string;
  distance: string;
  travelTime: string;
  route: string;
  tips: string[];
  mapsUrl: string;
  badge: string;
  preferred?: boolean;
}

export interface Hotel {
  id: string;
  name: string;
  type: string;
  status: string;
  courtesyCode: string;
  amenities: string[];
  website: string;
  image: string;
}

export interface StoryMilestone {
  chapter: string;
  period: string;
  title: string;
  description: string;
  image: string;
  badge: string;
}

export interface FamilyMember {
  side: "groom" | "bride";
  parents: string;
  supporting: string;
  note: string;
}

export interface Contact {
  title: string;
  name: string;
  role: string;
  phone: string;
  whatsappMessage: string;
}

export interface MenuItem {
  name: string;
  description: string;
  dietary?: string;
}

export interface MenuCourse {
  course: string;
  items: MenuItem[];
}

export interface GiftDetail {
  label: string;
  value: string;
}

export interface GalleryPhoto {
  src: string;
  caption: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: string;
  fallback: string;
}

export interface WishPreset {
  icon?: string;
  emoji?: string;
  text: string;
}

export interface WishItem {
  id: string;
  name: string;
  wish: string;
  votes: number;
  voted?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NoteCard {
  id: string;
  icon: string;
  title: string;
  badge: string;
  bullets: string[];
}

export interface RSVPFormData {
  fullName: string;
  countryCode: string;
  phone: string;
  email: string;
  attendance: "accept" | "decline";
  guestCount?: number;
  events?: string[];
  dietary?: string[];
  otherDietary?: string;
  songRequest?: string;
  blessings?: string;
}
