import { StaticImageData } from "next/image";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";
import photo4 from "./images/photo4.png";
import photo5 from "./images/photo5.png";
import photo6 from "./images/photo6.png";
import photo7 from "./images/photo7.png";
import photo8 from "./images/photo8.png";

export interface GalleryItem {
  id: string;
  src: string | StaticImageData;
  title?: string;
  subtitle?: string;
  category?: string;
  fallback?: string;
}

export const GALLERY: GalleryItem[] = [
  {
    id: "g8",
    src: photo8, 
  },
  {
    id: "g2",
    src: photo2, 
  },
  {
    id: "g3",
    src: photo3, 
  },
  {
    id: "g4",
    src: photo4, 
  },
  {
    id: "g6",
    src: photo6, 
  },
  {
    id: "g7",
    src: photo7, 
  },
];
