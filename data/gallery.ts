import { StaticImageData } from "next/image";
import photo5 from "./images/photo5.png";
import photo7 from "./images/photo7.png";
import g1 from "./images/Image_f1.jpeg";
import g2 from "./images/Image_f2.jpeg";
import g3 from "./images/Image_f3.jpeg";

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
    src: g1, 
  },
  {
    id: "g2",
    src: g2, 
  },
  {
    id: "g3",
    src: g3, 
  },
  {
    id: "g4",
    src: photo5, 
  },
  {
    id: "g5",
    src: photo7, 
  },
];
