import { AttireOption } from "@/types";
import { Language } from "@/lib/translations";

export const ATTIRE_TABS_BY_LANG: Record<Language, string[]> = {
  en: ["Haldi", "Sangeet", "Pheras", "Gala"],
  hi: ["हल्दी", "संगीत", "फेरे", "गाला"],
  mr: ["हळद", "संगीत", "फेरे", "गाला"],
};

export const ATTIRE_BY_LANG: Record<Language, AttireOption[]> = {
  en: [
    {
      event: "Haldi",
      day: "Day 1 • Haldi Ceremony",
      dressCode: "Sunshine Yellows & Floral Prints",
      colors: ["Marigold", "Sunflower", "Ivory", "Sage Green"],
      colorHex: ["#F4C430", "#FFD700", "#FFFFF0", "#B2C6A3"],
      description:
        "Embrace the spirit of the Haldi ceremony in vibrant yellows, cheerful florals, and light summer fabrics. Comfortable footwear is recommended for the outdoor lawn.",
      image: "/assets/attire/attire-haldi.png",
    },
    {
      event: "Sangeet",
      day: "Day 1 • Sangeet Night",
      dressCode: "Indo-Western Glam, Sequins & Jewel Tones",
      colors: ["Emerald", "Sapphire", "Ruby", "Amethyst"],
      colorHex: ["#50C878", "#0F52BA", "#9B111E", "#9966CC"],
      description:
        "Sparkling lehengas, embellished sherwanis, and chic Indo-western ensembles in rich jewel tones for a high-energy dance and music celebration.",
      image: "/assets/attire/attire-sangeet.png",
    },
    {
      event: "Pheras",
      day: "Day 2 • Royal Pheras",
      dressCode: "Heritage Pastels & Traditional Weaves",
      colors: ["Blush Rose", "Mint", "Lavender", "Peach"],
      colorHex: ["#F4C2C2", "#98FF98", "#E6E6FA", "#FFDAB9"],
      description:
        "The sacred Vedic ceremony calls for elegant traditional wear: silk sarees, kanjeevarams, and classic heritage sherwanis in soft reverent pastels.",
      image: "/assets/attire/attire-pheras.png",
    },
    {
      event: "Gala Dinner",
      day: "Day 2 • Gala Dinner",
      dressCode: "Black Tie, Cocktail Gowns & Evening Suits",
      colors: ["Midnight Black", "Deep Navy", "Champagne", "Ivory"],
      colorHex: ["#1C1C1C", "#1B3A5C", "#F7E7CE", "#FFFFF0"],
      description:
        "Celebrate under the stars in sophisticated evening attire: tuxedos, dinner jackets, elegant cocktail gowns, or designer evening sarees.",
      image: "/assets/attire/attire-gala.png",
    },
  ],
  hi: [
    {
      event: "Haldi",
      day: "दिन 1 • हल्दी समारोह",
      dressCode: "पीले रंग एवं फ्लोरल परिधान",
      colors: ["गेंदा पीला", "सुनहरा", "आइवरी", "हल्का हरा"],
      colorHex: ["#F4C430", "#FFD700", "#FFFFF0", "#B2C6A3"],
      description:
        "हल्दी के उल्लासमय उत्सव हेतु पीले, सुनहरे एवं फ्लोरल प्रिंट के हल्के परिधान पहनें। समुद्र तट के लॉन हेतु आरामदायक जूते-चप्पल उपयुक्त रहेंगे।",
      image: "/assets/attire/attire-haldi.png",
    },
    {
      event: "Sangeet",
      day: "दिन 1 • संगीत संध्या",
      dressCode: "इंडो-वेस्टर्न एवं चमकीले परिधान",
      colors: ["पन्ना हरा", "नीलम नीला", "रूबी लाल", "बैंगनी"],
      colorHex: ["#50C878", "#0F52BA", "#9B111E", "#9966CC"],
      description:
        "संगीत की ऊर्जावान शाम के लिए भव्य लहंगे, सेक्विन साड़ियां, शेरवानी एवं चमकीले इंडो-वेस्टर्न परिधान पहनकर नृत्य का आनंद लें।",
      image: "/assets/attire/attire-sangeet.png",
    },
    {
      event: "Pheras",
      day: "दिन 2 • शुभ विवाह फेरे",
      dressCode: "पारंपरिक पेस्टल एवं रेशमी वस्त्र",
      colors: ["गुलाबी", "हल्का हरा", "लैवेंडर", "पीच"],
      colorHex: ["#F4C2C2", "#98FF98", "#E6E6FA", "#FFDAB9"],
      description:
        "वैदिक फेरों के पावन अवसर हेतु पारंपरिक सिल्क साड़ियां, कांजीवरम और राजसी शेरवानी जैसे शालीन एवं सौम्य रंगों के वस्त्र।",
      image: "/assets/attire/attire-pheras.png",
    },
    {
      event: "Gala Dinner",
      day: "दिन 2 • गाला डिनर",
      dressCode: "सूट, शेरवानी एवं फॉर्मल गाउन",
      colors: ["ब्लैक", "गहरा नीला", "शैंपेन", "सफेद"],
      colorHex: ["#1C1C1C", "#1B3A5C", "#F7E7CE", "#FFFFF0"],
      description:
        "सितारों की छांव में शाही रात्रिभोज हेतु औपचारिक शाम के परिधान: टक्सीडो, क्लासिक सूट, गाउन अथवा खूबसूरत साड़ियां।",
      image: "/assets/attire/attire-gala.png",
    },
  ],
  mr: [
    {
      event: "Haldi",
      day: "दिवस 1 • हळद समारंभ",
      dressCode: "पिवळे रंग आणि फ्लोरल पोशाख",
      colors: ["झेंडू पिवळा", "सोनेरी", "आयव्हरी", "हलका हिरवा"],
      colorHex: ["#F4C430", "#FFD700", "#FFFFF0", "#B2C6A3"],
      description:
        "हळदीच्या उत्साही सोहळ्यासाठी पिवळ्या आणि फुलांच्या नक्षीचे हलके पारंपरिक कपडे निवडावेत. लॉनसाठी सोयीस्कर पादत्राणे वापरावीत.",
      image: "/assets/attire/attire-haldi.png",
    },
    {
      event: "Sangeet",
      day: "दिवस 1 • संगीत रजनी",
      dressCode: "इंडो-वेस्टर्न आणि चमकदार पोशाख",
      colors: ["पाचू हिरवा", "नीलम निळा", "माणिक लाल", "जांभळा"],
      colorHex: ["#50C878", "#0F52BA", "#9B111E", "#9966CC"],
      description:
        "नृत्याच्या संगीतमय रात्रीसाठी डिझायनर लेहेंगा, शेरवानी आणि चमचमते इंडो-वेस्टर्न कपडे घालून सोहळ्याची रंगत वाढवा.",
      image: "/assets/attire/attire-sangeet.png",
    },
    {
      event: "Pheras",
      day: "दिवस 2 • शुभविवाह सोहळा",
      dressCode: "पारंपरिक सिल्क आणि पेस्टल रंग",
      colors: ["गुलाबी", "पिस्ता हिरवा", "लॅव्हेंडर", "पीच"],
      colorHex: ["#F4C2C2", "#98FF98", "#E6E6FA", "#FFDAB9"],
      description:
        "पवित्र विवाह विधींसाठी पारंपरिक रेशमी साड्या, पैठणी, कांजीवरम आणि राजेशाही शेरवानी असे देखणे पारंपरिक पोशाख परिधान करावेत.",
      image: "/assets/attire/attire-pheras.png",
    },
    {
      event: "Gala Dinner",
      day: "दिवस 2 • गाला डिनर",
      dressCode: "फॉर्मल सूट, शेरवानी आणि इव्हनिंग वेअर",
      colors: ["ब्लॅक", "गडद निळा", "शॅम्पेन", "पांढरा"],
      colorHex: ["#1C1C1C", "#1B3A5C", "#F7E7CE", "#FFFFF0"],
      description:
        "चांदण्यांच्या प्रकाशात होणाऱ्या गाला डिनरसाठी टक्सिडो, फॉर्मल सूट, शेरवानी, गाऊन आणि मोहक साड्या.",
      image: "/assets/attire/attire-gala.png",
    },
  ],
};

export const ATTIRE: AttireOption[] = ATTIRE_BY_LANG.en;
