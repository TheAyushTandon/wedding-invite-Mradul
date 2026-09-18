import { Language } from "@/lib/translations";

export interface NoteItem {
  id: string;
  icon: string;
  title: string;
  badge: string;
  bullets: string[];
}

export const NOTES_BY_LANG: Record<Language, NoteItem[]> = {
  en: [
    {
      id: "checkin",
      icon: "Clock",
      title: "Check-in & Check-out Timings",
      badge: "Resort Policy",
      bullets: [
        "Check-in: 2:00 PM on February 2nd at Taj Heritage.",
        "Check-out: 11:00 AM on February 4th.",
        "Early arrivals can relax at our Wedding Hospitality Lounge while rooms are prepared.",
      ],
    },
    {
      id: "alcohol-free",
      icon: "WineOff",
      title: "Alcohol-Free Celebration",
      badge: "Dry Wedding",
      bullets: [
        "Kindly note that all wedding celebrations and functions are alcohol-free.",
        "A lavish curated menu of handcrafted tropical mocktails, fresh coconut water, and artisanal teas/coffees will be served throughout.",
      ],
    },
    {
      id: "dining",
      icon: "UtensilsCrossed",
      title: "Dining & Dietary Preferences",
      badge: "Culinary Care",
      bullets: [
        "Lavish pure vegetarian, multi-regional Indian and coastal culinary spreads at all functions.",
        "Please mention any severe allergies or dietary preferences in your RSVP response.",
      ],
    },
    {
      id: "concierge",
      icon: "BriefcaseBusiness",
      title: "Hospitality & Stay Coordination",
      badge: "24/7 Guest Desk",
      bullets: [
        "Stay is covered for guests on 2nd & 3rd Feb. Pre-negotiated rates are available for extended stays before or after through the wedding planner.",
        "A dedicated Mradul & Shreya Hospitality Desk is available at the resort lobby for luggage and room assistance.",
      ],
    },
  ],
  hi: [
    {
      id: "checkin",
      icon: "Clock",
      title: "चेक-इन एवं चेक-आउट समय",
      badge: "रिसॉर्ट नियम",
      bullets: [
        "चेक-इन: 2 फरवरी को दोपहर 2:00 PM से ताज हेरिटेज में।",
        "चेक-आउट: 4 फरवरी को सुबह 11:00 AM तक।",
        "समय से पूर्व आगमन पर अतिथि हमारे वेलकम लाउंज में विश्राम कर सकते हैं।",
      ],
    },
    {
      id: "alcohol-free",
      icon: "WineOff",
      title: "मद्यपान मुक्त (ड्राई) विवाह समारोह",
      badge: "अल्कोहल-फ्री",
      bullets: [
        "कृपया ध्यान दें कि विवाह के सभी कार्यक्रम मद्यपान मुक्त (अल्कोहल-फ्री) हैं।",
        "सभी आयोजनों में विशेष मॉकटेल्स, ताजे फलों के रस, नारियल पानी एवं पारंपरिक पेय परोसे जाएंगे।",
      ],
    },
    {
      id: "dining",
      icon: "UtensilsCrossed",
      title: "खान-पान एवं आहार व्यवस्था",
      badge: "शुद्ध शाकाहारी",
      bullets: [
        "सभी आयोजनों में शुद्ध शाकाहारी, भारतीय एवं तटीय व्यंजनों का भव्य प्रबंध है।",
        "किसी भी विशेष एलर्जी अथवा आहार संबंधी प्राथमिकता हेतु कृपया RSVP में उल्लेख करें।",
      ],
    },
    {
      id: "concierge",
      icon: "BriefcaseBusiness",
      title: "आवास एवं अतिथि सत्कार",
      badge: "24/7 सहायता केंद्र",
      bullets: [
        "2 एवं 3 फरवरी को आमंत्रित अतिथियों के ठहरने की सम्पूर्ण व्यवस्था की गई है। विस्तारित प्रवास हेतु वेडिंग प्लानर से संपर्क करें।",
        "रिसॉर्ट लॉबी में 'मृदुल एवं श्रेया हॉस्पिटैलिटी डेस्क' सामान एवं कमरा सहायता हेतु 24/7 उपलब्ध रहेगी।",
      ],
    },
  ],
  mr: [
    {
      id: "checkin",
      icon: "Clock",
      title: "चेक-इन व चेक-आउट वेळ",
      badge: "रिसॉर्टचे नियम",
      bullets: [
        "चेक-इन: 2 फेब्रुवारी रोजी दुपारी 2:00 PM ताज हेरिटेज येथे.",
        "चेक-आउट: 4 फेब्रुवारी रोजी सकाळी 11:00 AM.",
        "लवकर पोहोचणाऱ्या पाहुण्यांसाठी स्वागत लाउंजमध्ये विश्रांतीची व्यवस्था आहे.",
      ],
    },
    {
      id: "alcohol-free",
      icon: "WineOff",
      title: "मद्यपान विरहित सोहळा",
      badge: "मद्यपान विरहित",
      bullets: [
        "कृपया नोंद घ्यावी की सर्व विवाह सोहळे मद्यपान विरहित आहेत.",
        "कार्यक्रमांमध्ये उत्कृष्ट मॉकटेल्स, ताज्या फळांचे रस, शहाळ्याचे पाणी आणि चहा/कॉफी उपलब्ध असेल.",
      ],
    },
    {
      id: "dining",
      icon: "UtensilsCrossed",
      title: "भोजन व्यवस्था व आवड-निवड",
      badge: "शुद्ध शाकाहारी",
      bullets: [
        "सर्व कार्यक्रमांत शुद्ध शाकाहारी, भारतीय व कोकणी खाद्यसंस्कृतीचा समृद्ध आस्वाद असेल.",
        "काही विशिष्ट पथ्य किंवा ॲलर्जी असल्यास कृपया RSVP मध्ये नमूद करावे.",
      ],
    },
    {
      id: "concierge",
      icon: "BriefcaseBusiness",
      title: "मुक्काम व अतिथी सत्कार",
      badge: "24/7 मदत कक्ष",
      bullets: [
        "2 आणि 3 फेब्रुवारी रोजी पाहुण्यांच्या निवासाची व्यवस्था करण्यात आली आहे. मुक्काम वाढवण्यासाठी वेडिंग प्लॅनरशी संपर्क साधावा.",
        "रिसॉर्ट लॉबीमध्ये पाहुण्यांच्या मदतीसाठी 'मृदुल आणि श्रेया स्वागत कक्ष' 24/7 कार्यरत असेल.",
      ],
    },
  ],
};

export const NOTES = NOTES_BY_LANG.en;
export default NOTES_BY_LANG;
