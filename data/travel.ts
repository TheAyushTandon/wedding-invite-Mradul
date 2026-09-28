import { Airport } from "@/types";
import { Language } from "@/lib/translations";

export const AIRPORTS_BY_LANG: Record<Language, Airport[]> = {
  en: [
    {
      id: "dabolim",
      code: "GOI",
      name: "Goa International Airport, Dabolim",
      description:
        "The most convenient airport for attending our wedding at Taj Heritage. Offers the fastest highway transit directly to Dona Paula without heavy city bottlenecks.",
      distance: "~28 km from Taj Heritage",
      travelTime: "~40 – 45 minutes",
      route: "Via NH 66, Zuari Bridge & Dona Paula Coastal Road",
      tips: [
        "Wedding hospitality shuttles will coordinate grouped guest arrivals.",
        "GoaMiles App and local cabs readily available 24/7.",
        "Pre-paid taxi kiosks located immediately outside the baggage claim.",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Goa+International+Airport+Dabolim/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "⭐ Preferred & Closest",
      preferred: true,
    },
    {
      id: "mopa",
      code: "GOX",
      name: "Manohar International Airport, Mopa",
      description:
        "Goa’s brand-new world-class international terminal in North Goa. Offers wide flight connectivity with a scenic drive overlooking the Mandovi River into Panaji.",
      distance: "~48 km from Taj Heritage",
      travelTime: "~70 – 80 minutes",
      route: "Via NH 66, New Mandovi Bridge (Atal Setu) & Panaji Bypass",
      tips: [
        "Wedding hospitality shuttles will coordinate grouped guest arrivals.",
        "Expect a scenic 1 hour 15 min journey across Atal Setu bridge.",
        "Advance cab booking recommended during peak evening arrival hours.",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Manohar+International+Airport+Mopa/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "North Goa Gateway",
      preferred: false,
    },
  ],
  hi: [
    {
      id: "dabolim",
      code: "GOI",
      name: "गोवा अंतरराष्ट्रीय हवाई अड्डा, डाबोलिम",
      description:
        "ताज हेरिटेज में हमारे विवाह समारोह में सम्मिलित होने हेतु यह सबसे निकट एवं सुविधाजनक हवाई अड्डा है। यहां से दोना पाउला के लिए निर्बाध हाईवे कनेक्टिविटी उपलब्ध है।",
      distance: "ताज हेरिटेज से लगभग 28 km",
      travelTime: "लगभग 40 – 45 मिनट",
      route: "NH 66, ज़ुआरी ब्रिज एवं दोना पाउला कोस्टल मार्ग द्वारा",
      tips: [
        "अतिथि समूहों के लिए विवाह हॉस्पिटैलिटी शटल की भी व्यवस्था रहेगी।",
        "GoaMiles ऐप एवं स्थानीय टैक्सियां 24/7 उपलब्ध हैं।",
        "बैगेज क्लेम के तुरंत बाहर प्री-पेड टैक्सी काउंटर उपलब्ध हैं।",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Goa+International+Airport+Dabolim/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "⭐ निकटतम एवं सुविधाजनक",
      preferred: true,
    },
    {
      id: "mopa",
      code: "GOX",
      name: "मनोहर अंतरराष्ट्रीय हवाई अड्डा, मोपा",
      description:
        "उत्तरी गोवा में स्थित आधुनिक अंतरराष्ट्रीय टर्मिनल। यहां से मांडवी नदी और अटल सेतु से होते हुए पणजी तक का मनमोहक मार्ग है।",
      distance: "ताज हेरिटेज से लगभग 48 km",
      travelTime: "लगभग 70 – 80 मिनट",
      route: "NH 66, अटल सेतु (न्यू मांडवी ब्रिज) एवं पणजी बाईपास द्वारा",
      tips: [
        "अतिथि समूहों के लिए विवाह हॉस्पिटैलिटी शटल की भी व्यवस्था रहेगी।",
        "अटल सेतु मार्ग से लगभग 1 घंटा 15 मिनट का सुखद सफर।",
        "शाम के समय पूर्व कैब बुकिंग की सलाह दी जाती है।",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Manohar+International+Airport+Mopa/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "उत्तरी गोवा मुख्य टर्मिनल",
      preferred: false,
    },
  ],
  mr: [
    {
      id: "dabolim",
      code: "GOI",
      name: "गोवा आंतरराष्ट्रीय विमानतळ, दाबोलीम",
      description:
        "ताज हेरिटेजमधील विवाह सोहळ्यासाठी हे सर्वात जवळचे व सोयीचे विमानतळ आहे. येथून दोना पाउलासाठी जलद महामार्ग उपलब्ध आहे.",
      distance: "ताज हेरिटेजपासून सुमारे 28 km",
      travelTime: "सुमारे 40 – 45 मिनिटे",
      route: "NH 66, जुवारी पूल आणि दोना पाउला किनारपट्टी मार्गाने",
      tips: [
        "पाहुण्यांच्या सोयीसाठी विवाह स्वागत शटलची व्यवस्था करण्यात आली आहे.",
        "GoaMiles ॲप व स्थानिक टॅक्सी 24/7 उपलब्ध असतात.",
        "सामान संकलन कक्षाबाहेर थेट प्री-पेड टॅक्सी काऊंटर उपलब्ध आहेत.",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Goa+International+Airport+Dabolim/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "⭐ सर्वात जवळचे व सोयीचे",
      preferred: true,
    },
    {
      id: "mopa",
      code: "GOX",
      name: "मनोहर आंतरराष्ट्रीय विमानतळ, मोपा",
      description:
        "उत्तर गोव्यातील नवीन जागतिक दर्जाचे आंतरराष्ट्रीय टर्मिनल. येथून मांडवी नदी आणि अटल सेतूवरून निसर्गरम्य प्रवास होतो.",
      distance: "ताज हेरिटेजपासून सुमारे 48 km",
      travelTime: "सुमारे 70 – 80 मिनिटे",
      route: "NH 66, अटल सेतू (नवीन मांडवी पूल) आणि पणजी बायपास मार्गे",
      tips: [
        "पाहुण्यांच्या सोयीसाठी विवाह स्वागत शटलची व्यवस्था करण्यात आली आहे.",
        "अटल सेतूवरून सुमारे 1 तास 15 मिनिटांचा निसर्गरम्य प्रवास.",
        "संध्याकाळच्या वेळी आगाऊ टॅक्सी बुक करण्याची शिफारस केली जाते.",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Manohar+International+Airport+Mopa/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "उत्तर गोवा मुख्य विमानतळ",
      preferred: false,
    },
  ],
};

export const AIRPORTS: Airport[] = AIRPORTS_BY_LANG.en;
