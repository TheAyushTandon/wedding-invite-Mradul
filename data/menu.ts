import { MenuCourse } from "@/types";
import { Language } from "@/lib/translations";

export const MENU_BY_LANG: Record<Language, MenuCourse[]> = {
  en: [
    {
      course: "Starters & Small Plates",
      items: [
        {
          name: "Burrata & Charred Peach Carpaccio",
          description: "Aged Modena balsamic pearls, wild arugula, toasted pine nuts, extra virgin olive oil drizzle.",
          dietary: "V",
        },
        {
          name: "Wild Truffle & Porcini Bisque",
          description: "Velvety roasted wild forest mushrooms, fresh tarragon, lemon crème fraîche, herb croutons.",
          dietary: "V",
        },
      ],
    },
    {
      course: "Main Entrées",
      items: [
        {
          name: "Paneer Pasanda in Rich Saffron Korma",
          description: "Stuffed cottage cheese with dry fruit melange, simmered in royal Awadhi saffron gravy.",
          dietary: "V",
        },
        {
          name: "Coastal Coconut Kokum Curry & Appams",
          description: "Seasonal vegetables in traditional Goan coconut-kokum extract with fluffy hopper appams.",
          dietary: "V",
        },
        {
          name: "Artisanal Truffle Ricotta Ravioli",
          description: "Handmade pasta, shaved black winter truffles, brown butter sage, toasted walnuts.",
          dietary: "V",
        },
      ],
    },
    {
      course: "Artisanal Desserts",
      items: [
        {
          name: "Alphonso Mango & Saffron Pistachio Delice",
          description: "Artisan layered sponge, rose petal infusion, pistachio crumble, fresh berry coulis.",
          dietary: "V",
        },
      ],
    },
  ],
  hi: [
    {
      course: "स्टार्टर्स एवं क्षुधावर्धक",
      items: [
        {
          name: "बुराटा एवं भुने आड़ू का कार्पाशियो",
          description: "मोडेना बाल्सामिक पर्ल्स, वाइल्ड अरुगुला, भुने हुए पाइन नट्स एवं एक्स्ट्रा वर्जिन ऑलिव ऑयल।",
          dietary: "V",
        },
        {
          name: "वाइल्ड ट्रफल एवं मशरूम बिस्क",
          description: "जंगली मशरूम का मखमली सूप, ताज़ा टैरागॉन एवं हर्ब क्रूटॉन्स।",
          dietary: "V",
        },
      ],
    },
    {
      course: "मुख्य व्यंजन",
      items: [
        {
          name: "शाही पनीर पसंदा ज़ाफ़रानी कोरमा",
          description: "मेवों से भरा पनीर, अवधी ज़ाफ़रानी ग्रेवी एवं कश्मीरी मसालों का शाही स्वाद।",
          dietary: "V",
        },
        {
          name: "तटीय नारियल कोकम करी एवं अप्पम",
          description: "पारंपरिक गोअन शैली में नारियल-कोकम की ताज़ा करी के साथ गरमा-गरम अप्पम।",
          dietary: "V",
        },
        {
          name: "हस्तनिर्मित ट्रफल रिकोटा रवियोली",
          description: "हस्तनिर्मित पास्ता, ब्लैक ट्रफल, ब्राउन बटर सेज एवं भुने अखरोट।",
          dietary: "V",
        },
      ],
    },
    {
      course: "शाही मिष्ठान",
      items: [
        {
          name: "अल्फांसो आम एवं केसर पिस्ता डिलाइट",
          description: "हापुस आम, गुलाब की पंखुड़ियों का अर्क, पिस्ता क्रम्बल एवं बेरी कौलिस।",
          dietary: "V",
        },
      ],
    },
  ],
  mr: [
    {
      course: "स्टार्टर्स व अल्पोपहार",
      items: [
        {
          name: "बुराटा आणि भाजलेले पीच कार्पाशियो",
          description: "मोडेना बाल्सामिक पर्ल्स, ताज्या भाज्या, भाजलेले पाइन नट्स आणि ऑलिव्ह ऑईल.",
          dietary: "V",
        },
        {
          name: "मशरूम व ट्रफल क्रीम सूप",
          description: "मऊसर भाजलेले जंगली मशरूम, हर्ब क्रूटॉन्स आणि फ्रेश क्रीम.",
          dietary: "V",
        },
      ],
    },
    {
      course: "मुख्य भोजन",
      items: [
        {
          name: "शाही पनीर पसंदा व केशर कोरमा",
          description: "ड्रायफ्रुट्सने भरलेले पनीर आणि अस्सल केशर-मसाल्यांची शाही ग्रेव्ही.",
          dietary: "V",
        },
        {
          name: "कोकणी नारळ कोकम कढी व मऊ अप्पम",
          description: "पारंपरिक कोकणी चवीची नारळाची सोलकढी-ग्रेव्ही आणि गरमागरम अप्पम.",
          dietary: "V",
        },
        {
          name: "इटालियन ट्रफल रिकोटा रव्हिओली",
          description: "हाताने बनवलेले पास्ता, ब्लॅक ट्रफल, बटर सेज आणि अक्रोड क्रंच.",
          dietary: "V",
        },
      ],
    },
    {
      course: "शाही मिष्टान्न",
      items: [
        {
          name: "हापूस आंबा आणि केशर पिस्ता डिलाईट",
          description: "रत्नगिरी हापूस, गुलाबाचा अर्क, पिस्ता आणि ताज्या बेरींचा मिलाफ.",
          dietary: "V",
        },
      ],
    },
  ],
};

export const MENU: MenuCourse[] = MENU_BY_LANG.en;
