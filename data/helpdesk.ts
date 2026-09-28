import { Contact } from "@/types";
import { Language } from "@/lib/translations";

export const CONTACTS_BY_LANG: Record<Language, Contact[]> = {
  en: [
    {
      title: "Stay Concierge Team",
      name: "Charmi",
      role: "Room allocations, extended stay coordination, check-ins",
      phone: "+91 96623 66235",
      whatsappMessage:
        "Hi Charmi! I am an invited guest for Mradul & Shreya's wedding at Taj Heritage and need assistance with my stay.",
    },
  ],
  hi: [
    {
      title: "आवास सहायता टीम (Stay Concierge Team)",
      name: "चार्मी (Charmi)",
      role: "कमरा आवंटन, प्रवास समन्वय एवं चेक-इन सहायता",
      phone: "+91 96623 66235",
      whatsappMessage:
        "नमस्ते चार्मी! मैं ताज हेरिटेज में मृदुल एवं श्रेया के विवाह समारोह में आमंत्रित अतिथि हूँ और मुझे आवास संबंधी सहायता चाहिए।",
    },
  ],
  mr: [
    {
      title: "निवास मदत कक्ष (Stay Concierge Team)",
      name: "चार्मी (Charmi)",
      role: "खोल्यांचे वाटप, मुक्काम समन्वय व चेक-इन मदत",
      phone: "+91 96623 66235",
      whatsappMessage:
        "नमस्कार चार्मी! मी ताज हेरिटेज येथील मृदुल आणि श्रेयाच्या विवाह सोहळ्याचा पाहुणा असून मला निवासाबाबत मदत हवी आहे.",
    },
  ],
};

export const CONTACTS: Contact[] = CONTACTS_BY_LANG.en;
