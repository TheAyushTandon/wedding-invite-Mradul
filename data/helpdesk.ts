import { Contact } from "@/types";
import { Language } from "@/lib/translations";

export const CONTACTS_BY_LANG: Record<Language, Contact[]> = {
  en: [
    {
      title: "Wedding Planner & Stay Concierge",
      name: "Aman Sharma & Hospitality Team",
      role: "Room allocations, extended stay coordination, check-ins",
      phone: "+91 98200 12345",
      whatsappMessage:
        "Hi Aman! I am an invited guest for Mradul & Shreya's wedding at Taj Heritage and need assistance with my stay.",
    },
    {
      title: "Logistics & Airport Transit Desk",
      name: "Vikas Patil & Travel Team",
      role: "Airport pick-up/drop coordination (GOI / GOX)",
      phone: "+91 98200 12346",
      whatsappMessage:
        "Hi Vikas! I am a guest for Mradul & Shreya's wedding and need help coordinating my airport transfer.",
    },
  ],
  hi: [
    {
      title: "वेडिंग प्लानर एवं आवास सहायता",
      name: "अमन शर्मा एवं हॉस्पिटैलिटी टीम",
      role: "कमरा आवंटन, विस्तारित प्रवास एवं चेक-इन समन्वय",
      phone: "+91 98200 12345",
      whatsappMessage:
        "नमस्ते अमन! मैं ताज हेरिटेज में मृदुल एवं श्रेया के विवाह समारोह में आमंत्रित अतिथि हूँ और मुझे आवास संबंधी सहायता चाहिए।",
    },
    {
      title: "यातायात एवं एयरपोर्ट ट्रांजिट डेस्क",
      name: "विकास पाटिल एवं ट्रेवल टीम",
      role: "एयरपोर्ट पिक-अप / ड्रॉप सहायता (GOI / GOX)",
      phone: "+91 98200 12346",
      whatsappMessage:
        "नमस्ते विकास! मैं मृदुल एवं श्रेया के विवाह का अतिथि हूँ और मुझे एयरपोर्ट ट्रांसफर में सहायता चाहिए।",
    },
  ],
  mr: [
    {
      title: "वेडिंग प्लॅनर व निवास मदत कक्ष",
      name: "अमन शर्मा व स्वागत पथक",
      role: "खोल्यांचे वाटप, मुक्काम वाढवणे व चेक-इन मदत",
      phone: "+91 98200 12345",
      whatsappMessage:
        "नमस्कार अमन! मी ताज हेरिटेज येथील मृदुल आणि श्रेयाच्या विवाह सोहळ्याचा पाहुणा असून मला निवासाबाबत मदत हवी आहे.",
    },
    {
      title: "वाहतूक व विमानतळ मदत कक्ष",
      name: "विकास पाटील व प्रवास पथक",
      role: "विमानतळ ने-आण समन्वय (GOI / GOX)",
      phone: "+91 98200 12346",
      whatsappMessage:
        "नमस्कार विकास! मी मृदुल आणि श्रेयाच्या विवाहाचा पाहुणा असून मला विमानतळ प्रवासाबाबत मदत हवी आहे.",
    },
  ],
};

export const CONTACTS: Contact[] = CONTACTS_BY_LANG.en;
