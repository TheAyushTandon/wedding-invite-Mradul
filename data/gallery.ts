export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: string;
  fallback: string;
}

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    title: "Sunset Serenade",
    subtitle: "Golden hour along the Goan shoreline",
    category: "Sunset",
    fallback: "#3D2522",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
    title: "Quiet Reverie",
    subtitle: "Gentle whispers under the swaying palms",
    category: "Portraits",
    fallback: "#4A2E2B",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80",
    title: "Joy & Laughter",
    subtitle: "Seaside breezes and endless smiles",
    category: "Candid",
    fallback: "#5C3D2E",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    title: "Sacred Promises",
    subtitle: "The magical ring ceremony moment",
    category: "Moments",
    fallback: "#6E4141",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    title: "Starlit Dance",
    subtitle: "Celebrating under the canopy of night",
    category: "Celebration",
    fallback: "#8C4B27",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    title: "Royal Elegance",
    subtitle: "Taj heritage architecture & festive florals",
    category: "Heritage",
    fallback: "#3D2522",
  },
];
