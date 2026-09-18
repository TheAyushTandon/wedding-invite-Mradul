import { FamilyMember } from "@/types";
import { Language } from "@/lib/translations";

export const FAMILIES_BY_LANG: Record<Language, FamilyMember[]> = {
  en: [
    {
      side: "groom",
      parents: "Mrs. Ruby & Mr. Mohit Bhatnagar",
      supporting: "Along with grandparents, siblings & extended family",
      note: "With heartfelt warmth and joy, we welcome you to join us in blessing Mradul as he embarks on this sacred journey of companionship and love.",
    },
    {
      side: "bride",
      parents: "Mrs. Apurva & Mr. Ghansham Kulkarni",
      supporting: "Along with grandparents, siblings & extended family",
      note: "With immense love and gratitude, we invite you to share our happiness and shower your dearest blessings on Shreya as she begins her new chapter.",
    },
  ],
  hi: [
    {
      side: "groom",
      parents: "श्रीमती रूबी एवं श्री मोहित भटनागर",
      supporting: "दादा-दादी, नाना-नानी, भाई-बहन एवं समस्त परिवारजन",
      note: "हार्दिक स्नेह एवं उल्लास के साथ, हम आपको मृदुल के जीवन के इस नए और पावन अध्याय में अपना शुभाशीर्वाद देने हेतु सादर आमंत्रित करते हैं।",
    },
    {
      side: "bride",
      parents: "श्रीमती अपूर्वा एवं श्री घनश्याम कुलकर्णी",
      supporting: "दादा-दादी, नाना-नानी, भाई-बहन एवं समस्त परिवारजन",
      note: "असीम प्रेम और कृतज्ञता के साथ, हम आपको श्रेया के वैवाहिक जीवन के शुभारंभ पर अपने मंगल आशीर्वाद प्रदान करने हेतु आमंत्रित करते हैं।",
    },
  ],
  mr: [
    {
      side: "groom",
      parents: "सौ. रुबी आणि श्री. मोहित भटनागर",
      supporting: "आजी-आजोबा, भावंडे व समस्त परिवारजन",
      note: "मृदुलच्या आयुष्यातील या नवीन आणि पवित्र प्रवासाच्या प्रारंभास आपले शुभाशीर्वाद लाभावेत, यासाठी आपले सस्नेह निमंत्रण.",
    },
    {
      side: "bride",
      parents: "सौ. अपूर्वा आणि श्री. घनश्याम कुलकर्णी",
      supporting: "आजी-आजोबा, भावंडे व समस्त परिवारजन",
      note: "श्रेयाच्या विवाह सोहळ्यास आपली उपस्थिती आणि प्रेमळ आशीर्वाद लाभावेत, हीच आमची नम्र विनंती.",
    },
  ],
};

export const FAMILIES: FamilyMember[] = FAMILIES_BY_LANG.en;
