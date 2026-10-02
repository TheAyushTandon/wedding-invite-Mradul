import { Airport, CommuteOption, RailwayStation } from "@/types";
import { Language } from "@/lib/translations";

export const AIRPORTS_BY_LANG: Record<Language, Airport[]> = {
  en: [
    {
      id: "dabolim",
      type: "air",
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
      type: "air",
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
      type: "air",
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
      type: "air",
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
      type: "air",
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
      type: "air",
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

export const TRAINS_BY_LANG: Record<Language, RailwayStation[]> = {
  en: [
    {
      id: "karmali",
      type: "train",
      code: "KRMI",
      name: "Karmali Railway Station (Old Goa / Panaji)",
      description:
        "The closest railway station to Taj Heritage & Panaji. Conveniently served by premier Konkan Railway trains including the Mumbai-Goa Vande Bharat Express, Tejas Express, and Jan Shatabdi.",
      distance: "~18 km from Taj Heritage",
      travelTime: "~30 – 35 minutes",
      route: "Via NH 748, Panaji Bypass & Goa University Road to Dona Paula",
      tips: [
        "Closest rail terminal to the wedding venue — approx. 30 minutes drive.",
        "Wedding hospitality desk will coordinate grouped pickups for arriving guests.",
        "Pre-paid taxi kiosks and GoaMiles app cabs readily available outside the station.",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Karmali+Railway+Station/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "⭐ Closest to Taj Heritage",
      preferred: true,
    },
    {
      id: "madgaon",
      type: "train",
      code: "MAO",
      name: "Madgaon Railway Junction, Margao",
      description:
        "Goa’s primary and largest railway hub, connecting express and superfast trains from New Delhi, Mumbai, Bengaluru, Pune, Ahmedabad, Kerala, and across India.",
      distance: "~35 km from Taj Heritage",
      travelTime: "~50 – 55 minutes",
      route: "Via NH 66, New Zuari Bridge & Bambolim / Dona Paula Highway",
      tips: [
        "Major railway junction with 24/7 dedicated pre-paid taxi stands at Platform 1 & 3 exits.",
        "Direct four-lane highway ride over the Zuari Bridge into Dona Paula.",
        "Please share your train details and PNR with our hospitality team for coordinated pickup.",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Madgaon+Junction/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "Central Railway Junction",
      preferred: false,
    },
    {
      id: "thivim",
      type: "train",
      code: "THVM",
      name: "Thivim Railway Station (North Goa)",
      description:
        "Major station for North Goa on the Konkan Railway route, ideal for trains originating from Maharashtra, Gujarat, and Northern India with halts before Madgaon.",
      distance: "~33 km from Taj Heritage",
      travelTime: "~50 – 55 minutes",
      route: "Via NH 66, New Mandovi Bridge (Atal Setu) & Panaji Bypass",
      tips: [
        "Convenient station for guests on Konkan Railway trains halting in North Goa.",
        "Local taxis and GoaMiles counters available right at the station exit.",
        "Scenic highway journey crossing the Atal Setu bridge into Panaji.",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Thivim+Railway+Station/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "North Goa Station",
      preferred: false,
    },
  ],
  hi: [
    {
      id: "karmali",
      type: "train",
      code: "KRMI",
      name: "करमाली रेलवे स्टेशन (ओल्ड गोवा / पणजी)",
      description:
        "ताज हेरिटेज एवं पणजी के लिए सबसे निकटतम स्टेशन। मुंबई-गोवा वंदे भारत, तेजस एवं जन शताब्दी जैसी प्रमुख कोंकण रेलवे ट्रेनों का यहां ठहराव है।",
      distance: "ताज हेरिटेज से लगभग 18 km",
      travelTime: "लगभग 30 – 35 मिनट",
      route: "NH 748, पणजी बाईपास एवं गोवा यूनिवर्सिटी रोड द्वारा",
      tips: [
        "विवाह स्थल के लिए सबसे निकटतम स्टेशन — मात्र 30 मिनट का सीधा मार्ग।",
        "अतिथि समूहों के लिए विवाह हॉस्पिटैलिटी पिकअप समन्वय की व्यवस्था रहेगी।",
        "स्टेशन निकास द्वार पर प्री-पेड टैक्सी एवं GoaMiles कैब आसानी से उपलब्ध हैं।",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Karmali+Railway+Station/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "⭐ निकटतम रेलवे स्टेशन",
      preferred: true,
    },
    {
      id: "madgaon",
      type: "train",
      code: "MAO",
      name: "मडगांव रेलवे जंक्शन, मडगांव",
      description:
        "गोवा का सबसे बड़ा एवं प्रमुख रेलवे जंक्शन। नई दिल्ली, मुंबई, बेंगलुरु, पुणे, अहमदाबाद एवं देश भर से राजधानी, दुरंतो व सुपरफास्ट एक्सप्रेस ट्रेनें यहां आती हैं।",
      distance: "ताज हेरिटेज से लगभग 35 km",
      travelTime: "लगभग 50 – 55 मिनट",
      route: "NH 66, न्यू ज़ुआरी ब्रिज एवं बांबोलिम / दोना पाउला मार्ग द्वारा",
      tips: [
        "देश भर से आने वाली प्रमुख सुपरफास्ट एवं एक्सप्रेस ट्रेनों का केंद्रीय जंक्शन।",
        "प्लेटफॉर्म 1 और 3 के बाहर 24/7 प्री-पेड टैक्सी काउंटर एवं GoaMiles सेवा उपलब्ध है।",
        "कृपया आगमन समन्वय हेतु अपना पीएनआर एवं ट्रेन समय हॉस्पिटैलिटी डेस्क से साझा करें।",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Madgaon+Junction/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "मुख्य रेलवे जंक्शन",
      preferred: false,
    },
    {
      id: "thivim",
      type: "train",
      code: "THVM",
      name: "थिविम रेलवे स्टेशन (उत्तरी गोवा)",
      description:
        "कोंकण रेलवे नेटवर्क पर उत्तरी गोवा का प्रमुख स्टेशन, जो महाराष्ट्र, गुजरात एवं उत्तर भारत से आने वाली ट्रेनों के लिए उपयुक्त ठहराव है।",
      distance: "ताज हेरिटेज से लगभग 33 km",
      travelTime: "लगभग 50 – 55 मिनट",
      route: "NH 66, अटल सेतु (मांडवी नदी) एवं पणजी बाईपास द्वारा",
      tips: [
        "कोंकण रेलवे मार्ग की ट्रेनों से उत्तरी गोवा में उतरने वाले अतिथियों हेतु सुविधाजनक।",
        "स्टेशन निकास द्वार पर स्थानीय टैक्सी एवं GoaMiles सेवा उपलब्ध है।",
        "मांडवी नदी पर बने भव्य अटल सेतु से पणजी होते हुए होटल तक की यात्रा।",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Thivim+Railway+Station/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "उत्तरी गोवा स्टेशन",
      preferred: false,
    },
  ],
  mr: [
    {
      id: "karmali",
      type: "train",
      code: "KRMI",
      name: "करमाळी रेल्वे स्थानक (ओल्ड गोवा / पणजी)",
      description:
        "ताज हेरिटेज व पणजीसाठी सर्वात जवळचे रेल्वे स्थानक. मुंबई-गोवा वंदे भारत, तेजस आणि जनशताब्दी यांसारख्या प्रमुख कोकण रेल्वे गाड्यांचा येथे थांबा आहे.",
      distance: "ताज हेरिटेजपासून सुमारे 18 km",
      travelTime: "सुमारे 30 – 35 मिनिटे",
      route: "NH 748, पणजी बायपास आणि गोवा विद्यापीठ मार्गे दोना पाउला",
      tips: [
        "विवाह स्थळासाठी सर्वात जवळचे रेल्वे स्थानक — अवघ्या 30 मिनिटांचा थेट प्रवास.",
        "पाहुण्यांच्या सोयीसाठी विवाह स्वागत शटलचे नियोजन करण्यात येईल.",
        "स्थानकाबाहेर प्री-पेड टॅक्सी व GoaMiles ॲपद्वारे गाड्या सहज मिळतात.",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Karmali+Railway+Station/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "⭐ सर्वात जवळचे स्थानक",
      preferred: true,
    },
    {
      id: "madgaon",
      type: "train",
      code: "MAO",
      name: "मडगाव रेल्वे जंक्शन, मडगाव",
      description:
        "गोव्यातील सर्वात मोठे व मुख्य रेल्वे जंक्शन. नवी दिल्ली, मुंबई, बंगळुरू, पुणे, अहमदाबाद व देशभरातून येणाऱ्या राजधानी व सुपरफास्ट गाड्यांचा येथे थांबा आहे.",
      distance: "ताज हेरिटेजपासून सुमारे 35 km",
      travelTime: "सुमारे 50 – 55 मिनिटे",
      route: "NH 66, नवीन जुवारी पूल आणि बांबोलीम / दोना पाउला महामार्ग",
      tips: [
        "देशभरातील प्रमुख राजधानी, दुरंतो आणि सुपरफास्ट गाड्यांसाठी मध्यवर्ती जंक्शन.",
        "प्लॅटफॉर्म 1 व 3 बाहेर 24/7 प्री-पेड टॅक्सी काऊंटर व GoaMiles सेवा उपलब्ध.",
        "स्वागत समन्वयासाठी कृपया आपला ट्रेन क्रमांक व वेळ स्वागत कक्षाला कळवावी.",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Madgaon+Junction/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "मध्यवर्ती रेल्वे जंक्शन",
      preferred: false,
    },
    {
      id: "thivim",
      type: "train",
      code: "THVM",
      name: "थिविम रेल्वे स्थानक (उत्तर गोवा)",
      description:
        "कोकण रेल्वे मार्गावरील उत्तर गोव्यातील महत्त्वाचे स्थानक. महाराष्ट्र, गुजरात व उत्तरेकडून येणाऱ्या प्रवाशांसाठी सोयीचे.",
      distance: "ताज हेरिटेजपासून सुमारे 33 km",
      travelTime: "सुमारे 50 – 55 मिनिटे",
      route: "NH 66, अटल सेतू (नवीन मांडवी पूल) आणि पणजी बायपास मार्गे",
      tips: [
        "उत्तर गोव्यात थांबणाऱ्या कोकण रेल्वे गाड्यांच्या प्रवाशांसाठी उत्तम पर्याय.",
        "स्थानकाबाहेर प्री-पेड टॅक्सी आणि GoaMiles सेवा उपलब्ध.",
        "मांडवी नदीवरील भव्य अटल सेतूवरून निसर्गरम्य प्रवास करत हॉटेलकडे जाणारा मार्ग.",
      ],
      mapsUrl:
        "https://www.google.com/maps/dir/Thivim+Railway+Station/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
      badge: "उत्तर गोवा स्थानक",
      preferred: false,
    },
  ],
};

export const AIRPORTS: Airport[] = AIRPORTS_BY_LANG.en;
export const TRAINS: RailwayStation[] = TRAINS_BY_LANG.en;

export const COMMUTE_OPTIONS_BY_LANG: Record<
  Language,
  { air: Airport[]; train: RailwayStation[] }
> = {
  en: {
    air: AIRPORTS_BY_LANG.en,
    train: TRAINS_BY_LANG.en,
  },
  hi: {
    air: AIRPORTS_BY_LANG.hi,
    train: TRAINS_BY_LANG.hi,
  },
  mr: {
    air: AIRPORTS_BY_LANG.mr,
    train: TRAINS_BY_LANG.mr,
  },
};
