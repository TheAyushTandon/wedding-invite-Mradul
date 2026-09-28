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
      day: "Day 1 • Haldi Ceremony (10:00 AM)",
      dressCode: "Sunshine Yellows & Vibrant Marigolds",
      colors: ["Golden Marigold", "Bright Sunflower", "Warm Saffron", "Sunset Amber"],
      colorHex: ["#F59E0B", "#FACC15", "#F97316", "#EA580C"],
      description:
        "Embrace the spirit of the Haldi ceremony in vibrant yellows, warm orange tones, and playful floral prints. Comfortable footwear is recommended for the outdoor lawn.",
      image: "/assets/attire/attire-haldi.png",
    },
    {
      event: "Sangeet",
      day: "Day 1 • Sangeet Night (7:00 PM)",
      dressCode: "Indo-Western & Western Glam",
      colors: ["Emerald Green", "Sapphire Blue", "Ruby Wine", "Midnight Black"],
      colorHex: ["#50C878", "#0F52BA", "#9B111E", "#1C1C1C"],
      description:
        "Glamorous Indo-western fusion and sleek Western evening wear: tailored suits & tuxedos, sequined gowns, chic drape sarees, and embellished sherwanis in rich jewel tones.",
      image: "/assets/attire/attire-sangeet.png",
    },
    {
      event: "Pheras",
      day: "Day 2 • Sunset Pheras (5:00 PM)",
      dressCode: "Heritage Pastels & Traditional Weaves",
      colors: ["Blush Rose", "Mint Silk", "Lavender", "Peach"],
      colorHex: ["#F4C2C2", "#98FF98", "#E6E6FA", "#FFDAB9"],
      description:
        "The sacred Vedic ceremony calls for elegant traditional wear: silk sarees, kanjeevarams, and classic heritage sherwanis in soft reverent pastels.",
      image: "/assets/attire/attire-pheras.png",
    },
    {
      event: "Gala",
      day: "Day 2 • Gala Dinner & Afterparty (9:00 PM)",
      dressCode: "Heritage Pastels & Celebration Weaves",
      colors: ["Blush Rose", "Mint Silk", "Lavender", "Peach"],
      colorHex: ["#F4C2C2", "#98FF98", "#E6E6FA", "#FFDAB9"],
      description:
        "Carry forward the graceful pastel celebration into the starlit gala dinner: elegant silk ensembles, kanjeevarams, pastel sherwanis, and festive traditional wear.",
      image: "/assets/attire/attire-pheras.png",
    },
  ],
  hi: [
    {
      event: "हल्दी",
      day: "दिन 1 • हल्दी समारोह (सुबह 10:00 बजे)",
      dressCode: "पीले एवं नारंगी उत्सव परिधान",
      colors: ["गेंदा पीला", "सूर्यमुखी", "केसरिया", "नारंगी"],
      colorHex: ["#F59E0B", "#FACC15", "#F97316", "#EA580C"],
      description:
        "हल्दी के उल्लासमय उत्सव हेतु चमकीले पीले, केसरिया एवं नारंगी रंगों के हल्के परिधान पहनें। समुद्र तट के लॉन हेतु आरामदायक जूते-चप्पल उपयुक्त रहेंगे।",
      image: "/assets/attire/attire-haldi.png",
    },
    {
      event: "संगीत",
      day: "दिन 1 • संगीत संध्या (शाम 7:00 बजे)",
      dressCode: "इंडो-वेस्टर्न एवं वेस्टर्न ग्लैम",
      colors: ["पन्ना हरा", "नीलम नीला", "रूबी लाल", "क्लासिक ब्लैक"],
      colorHex: ["#50C878", "#0F52BA", "#9B111E", "#1C1C1C"],
      description:
        "संगीत की ऊर्जावान शाम के लिए स्टाइलिश सूट, टक्सीडो, इवनिंग गाउन, डिज़ाइनर साड़ियां एवं चमकीले इंडो-वेस्टर्न परिधान।",
      image: "/assets/attire/attire-sangeet.png",
    },
    {
      event: "फेरे",
      day: "दिन 2 • शुभ विवाह फेरे (शाम 5:00 बजे)",
      dressCode: "पारंपरिक पेस्टल एवं रेशमी वस्त्र",
      colors: ["गुलाबी", "हल्का हरा", "लैवेंडर", "पीच"],
      colorHex: ["#F4C2C2", "#98FF98", "#E6E6FA", "#FFDAB9"],
      description:
        "वैदिक फेरों के पावन अवसर हेतु पारंपरिक सिल्क साड़ियां, कांजीवरम और राजसी शेरवानी जैसे शालीन एवं सौम्य रंगों के वस्त्र।",
      image: "/assets/attire/attire-pheras.png",
    },
    {
      event: "गाला",
      day: "दिन 2 • गाला डिनर (रात 9:00 बजे)",
      dressCode: "पारंपरिक पेस्टल एवं उत्सव परिधान",
      colors: ["गुलाबी", "हल्का हरा", "लैवेंडर", "पीच"],
      colorHex: ["#F4C2C2", "#98FF98", "#E6E6FA", "#FFDAB9"],
      description:
        "फेरों के पश्चात सितारों की छांव में शाही रात्रिभोज हेतु पारंपरिक सिल्क साड़ियां, कांजीवरम और सौम्य पेस्टल शेरवानी जैसे शालीन वस्त्र।",
      image: "/assets/attire/attire-pheras.png",
    },
  ],
  mr: [
    {
      event: "हळद",
      day: "दिवस 1 • हळद समारंभ (सकाळी 10:00)",
      dressCode: "पिवळे आणि केशरी उत्सव पोशाख",
      colors: ["झेंडू पिवळा", "सूर्यमुखी", "केशरी", "नारंगी"],
      colorHex: ["#F59E0B", "#FACC15", "#F97316", "#EA580C"],
      description:
        "हळदीच्या उत्साही सोहळ्यासाठी गडद पिवळ्या, केशरी आणि नारंगी रंगांचे हलके पारंपरिक कपडे निवडावेत. लॉनसाठी सोयीस्कर पादत्राणे वापरावीत.",
      image: "/assets/attire/attire-haldi.png",
    },
    {
      event: "संगीत",
      day: "दिवस 1 • संगीत रजनी (संध्याकाळी 7:00)",
      dressCode: "इंडो-वेस्टर्न आणि वेस्टर्न ग्लॅम",
      colors: ["पाचू हिरवा", "नीलम निळा", "माणिक लाल", "क्लासिक ब्लॅक"],
      colorHex: ["#50C878", "#0F52BA", "#9B111E", "#1C1C1C"],
      description:
        "नृत्याच्या संगीतमय रात्रीसाठी फॉर्मल सूट, टक्सिडो, इव्हनिंग गाऊन आणि देखणे इंडो-वेस्टर्न कपडे घालून सोहळ्याची रंगत वाढवा.",
      image: "/assets/attire/attire-sangeet.png",
    },
    {
      event: "फेरे",
      day: "दिवस 2 • शुभविवाह सोहळा (संध्याकाळी 5:00)",
      dressCode: "पारंपरिक सिल्क आणि पेस्टल रंग",
      colors: ["गुलाबी", "पिस्ता हिरवा", "लॅव्हेंडर", "पीच"],
      colorHex: ["#F4C2C2", "#98FF98", "#E6E6FA", "#FFDAB9"],
      description:
        "पवित्र विवाह विधींसाठी पारंपरिक रेशमी साड्या, पैठणी, कांजीवरम आणि राजेशाही शेरवानी असे देखणे पारंपरिक पोशाख परिधान करावेत.",
      image: "/assets/attire/attire-pheras.png",
    },
    {
      event: "गाला",
      day: "दिवस 2 • गाला डिनर (रात्री 9:00)",
      dressCode: "पारंपरिक पेस्टल आणि देखणे रेशमी पोशाख",
      colors: ["गुलाबी", "पिस्ता हिरवा", "लॅव्हेंडर", "पीच"],
      colorHex: ["#F4C2C2", "#98FF98", "#E6E6FA", "#FFDAB9"],
      description:
        "चांदण्यांच्या प्रकाशात होणाऱ्या गाला डिनरसाठी पारंपरिक रेशमी साड्या, पैठणी आणि राजेशाही पेस्टल शेरवानी.",
      image: "/assets/attire/attire-pheras.png",
    },
  ],
};

export const ATTIRE: AttireOption[] = ATTIRE_BY_LANG.en;
