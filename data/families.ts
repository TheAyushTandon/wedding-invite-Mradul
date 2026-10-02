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
      parents: "चि. मृदूल,",
      supporting: "सौ. रुबी आणि श्री मोहित भटनागर यांचे ज्येष्ठ सुपुत्र",
      note: "या उभयतांच्या आयुष्यातील विवाह सोहळ्याच्या मंगल प्रसंगी आपली उपस्थिती आणि आशीर्वाद प्रार्थनीय आहे.",
    },
    {
      side: "bride",
      parents: "चि.सौ.कां. श्रेया",
      supporting: "श्रीमती अपूर्वा आणि स्व. घनःशााम कुलकर्णी यांची ज्येष्ठ सुकन्या",
      note: "या उभयतांच्या आयुष्यातील विवाह सोहळ्याच्या मंगल प्रसंगी आपली उपस्थिती आणि आशीर्वाद प्रार्थनीय आहे.",
    },
  ],
};

export const FAMILIES: FamilyMember[] = FAMILIES_BY_LANG.en;
