export type Language = "en" | "hi" | "mr";

export interface TranslationSchema {
  // Navigation
  countdown: string;
  schedule: string;
  attire: string;
  travel: string;
  stay: string;
  families: string;
  notes: string;
  menu: string;
  gallery: string;
  wishWall: string;
  faqs: string;
  helpdesk: string;
  rsvp: string;
  rsvpNow: string;

  // Hero
  auspiciousBeginning: string;
  weddingCelebration: string;
  mradulAndShreya: string;
  dates: string;
  venueHero: string;
  scrollHint: string;

  // Opening Envelope
  envelopeHeader: string;
  tapToOpen: string;
  weddingInvitation: string;
  cordiallyInvited: string;
  celebrateWeddingOf: string;
  enterCelebration: string;

  // Countdown
  countdownEyebrow: string;
  countdownHeading: string;
  countdownQuote: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  festivitiesCount: string;
  addToCalendar: string;

  // Schedule
  itineraryEyebrow: string;
  scheduleHeading: string;
  scheduleQuote: string;
  day1: string;
  day2: string;
  eventsList: {
    id: string;
    day: 1 | 2;
    time: string;
    title: string;
    description: string;
    location: string;
  }[];

  // Attire
  attireEyebrow: string;
  attireHeading: string;
  attireQuote: string;
  attireList: {
    event: string;
    day: string;
    dressCode: string;
    colors: string[];
    description: string;
  }[];

  // Travel
  travelEyebrow: string;
  travelHeading: string;
  travelQuote: string;
  airportTitle: string;
  distanceLabel: string;
  travelTimeLabel: string;
  preferredTabLabel: string;
  recommendedRoute: string;
  arrivalGuidance: string;
  openDirections: string;

  // Families
  familiesEyebrow: string;
  familiesHeading: string;
  familiesQuote: string;
  groomSide: string;
  brideSide: string;
  groomParents: string;
  brideParents: string;
  groomSupporting: string;
  brideSupporting: string;
  groomNote: string;
  brideNote: string;
  familyUnionBlessing: string;

  // Stay / Accommodations
  stayEyebrow: string;
  stayHeading: string;
  stayQuote: string;
  stayBadge: string;
  stayCoveredTitle: string;
  stayCoveredNote: string;
  resortAddressLabel: string;
  venueFullAddress: string;
  openGoogleMaps: string;
  callPlanner: string;

  // Notes
  notesEyebrow: string;
  notesHeading: string;
  notesQuote: string;

  // Menu
  menuEyebrow: string;
  menuHeading: string;
  menuQuote: string;
  menuAlcoholFootnote: string;

  // Gallery
  galleryEyebrow: string;
  galleryHeading: string;
  galleryQuote: string;

  // Wishes
  wishesEyebrow: string;
  wishesHeading: string;
  wishesQuote: string;

  // FAQs
  faqsEyebrow: string;
  faqsHeading: string;
  faqsQuote: string;

  // Helpdesk
  helpdeskEyebrow: string;
  helpdeskHeading: string;
  helpdeskQuote: string;
  activeConcierge: string;
  tajConcierge: string;

  // RSVP
  rsvpEyebrow: string;
  rsvpHeading: string;
  rsvpQuote: string;
  stepLabel: string;
  stepOf: string;
  stepNames: {
    attendance: string;
    details: string;
    events?: string;
    dietary?: string;
    extras?: string;
    diningExtras: string;
    done: string;
  };
  backBtn: string;
  acceptOption: string;
  acceptSubtext: string;
  declineOption: string;
  declineSubtext: string;
  declineWarningTitle: string;
  declineWarningMessage: string;
  reconsiderBtn: string;
  confirmDeclineBtn: string;
  declineDetailsEyebrow: string;
  declineDetailsHeading: string;
  declineDetailsSubtitle: string;
  confirmDeclineSubmitBtn: string;
  fullNameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  guestsCountLabel: string;
  whichCelebrations: string;
  continueBtn: string;
  continueToEvents: string;
  dietaryAlcoholNoteTitle: string;
  dietaryAlcoholNote: string;
  dietaryHeading: string;
  dietaryPlaceholder: string;
  songRequestLabel: string;
  songRequestPlaceholder: string;
  blessingLabel: string;
  blessingPlaceholder: string;
  submitRsvp: string;
  seeYouInGoa: string;
  rsvpSuccessNote: string;
  willMissYou: string;
  rsvpDeclineNote: string;

  // Footer
  footerQuote: string;
  footerDatesVenue: string;
  backToTop: string;
  shareInvite: string;
  withLoveFamilies: string;
  copyrightText: string;

  // Language Picker
  langSelect: string;
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    // Nav
    countdown: "Countdown",
    schedule: "Schedule",
    attire: "Attire",
    travel: "Travel",
    stay: "Stay",
    families: "Families",
    notes: "Important Notes",
    menu: "Menu",
    gallery: "Gallery",
    wishWall: "Wish Wall",
    faqs: "FAQs",
    helpdesk: "Helpdesk",
    rsvp: "RSVP",
    rsvpNow: "RSVP NOW",

    // Hero
    auspiciousBeginning: "ॐ श्री गणेशाय नमः",
    weddingCelebration: "WEDDING CELEBRATION",
    mradulAndShreya: "Mradul & Shreya",
    dates: "February 2 & 3, 2026",
    venueHero: "Taj Cidade de Goa Heritage • Goa",
    scrollHint: "Scroll to explore ↓",

    // Opening
    envelopeHeader: "With Love, We Invite You",
    tapToOpen: "TAP TO OPEN",
    weddingInvitation: "WEDDING INVITATION • MRADUL & SHREYA",
    cordiallyInvited: "You are cordially invited",
    celebrateWeddingOf: "to celebrate the wedding of",
    enterCelebration: "Enter Celebration →",

    // Countdown
    countdownEyebrow: "✦ COUNTING DOWN ✦",
    countdownHeading: "Until Two States Set Sail",
    countdownQuote: "Two souls, one destiny. Every second brings us closer to our Goa celebration.",
    days: "Days",
    hours: "Hours",
    minutes: "Mins",
    seconds: "Secs",
    festivitiesCount: "February 2 & 3, 2026 • 4 Grand Festivities",
    addToCalendar: "ADD TO CALENDAR",

    // Schedule
    itineraryEyebrow: "✦ ITINERARY ✦",
    scheduleHeading: "Celebration Schedule",
    scheduleQuote: "Two unforgettable days of love, laughter, and cherished moments.",
    day1: "Day 1 • Haldi & Sangeet",
    day2: "Day 2 • Pheras & Gala",
    eventsList: [
      {
        id: "haldi",
        day: 1,
        time: "2:00 PM",
        title: "The Haldi Ceremony",
        description: "Sunshine yellows, marigold floral showers, organic ubtan, lively dhol rhythms, and joyful blessings.",
        location: "Pool Lawns • Taj Heritage",
      },
      {
        id: "sangeet",
        day: 1,
        time: "8:30 PM",
        title: "The Sangeet Night",
        description: "Glitz & glamour! High-energy dance performances, bespoke artisanal mocktail bar, and a Bollywood DJ dance floor.",
        location: "Grand Sala Ballroom",
      },
      {
        id: "baraat",
        day: 2,
        time: "2:00 PM",
        title: "The Royal Baraat",
        description: "Grand festive procession with dhol beats, dancing, and royal celebration as the groom arrives.",
        location: "Taj Heritage",
      },
      {
        id: "pheras",
        day: 2,
        time: "5:00 PM",
        title: "The Royal Pheras",
        description: "Sacred sunset Vedic vows and pheras around the holy fire by the Arabian Sea.",
        location: "Sunset Lawns • Taj Heritage",
      },
      {
        id: "gala",
        day: 2,
        time: "9:00 PM",
        title: "The Gala Dinner & Afterparty",
        description: "Celebratory sparkling mocktail toasts, lavish gourmet feast, and starlit dancing under the Goan night sky.",
        location: "Grand Sala Banquet",
      },
    ],

    // Attire
    attireEyebrow: "✦ DRESS CODE ✦",
    attireHeading: "Attire & Dress Code",
    attireQuote: "Dress as you feel — elegant, festive, and celebratory.",
    attireList: [
      {
        event: "Haldi",
        day: "Day 1 • Haldi Ceremony (10:00 AM)",
        dressCode: "Sunshine Yellows & Vibrant Marigolds",
        colors: ["Golden Marigold", "Bright Sunflower", "Warm Saffron", "Sunset Amber"],
        description:
          "Embrace the spirit of Haldi in vibrant yellows, warm orange tones, and breathable summer fabrics on the beachfront lawn.",
      },
      {
        event: "Sangeet",
        day: "Day 1 • Sangeet Night (7:00 PM)",
        dressCode: "Indo-Western & Western Glam",
        colors: ["Emerald Green", "Sapphire Blue", "Ruby Wine", "Midnight Black"],
        description:
          "Glamorous Indo-western fusion and sleek Western evening wear: tailored suits & tuxedos, sequined gowns, chic drape sarees, and embellished sherwanis.",
      },
      {
        event: "Pheras",
        day: "Day 2 • Sunset Pheras (5:00 PM)",
        dressCode: "Heritage Pastels & Traditional Weaves",
        colors: ["Blush Rose", "Mint Silk", "Lavender", "Peach"],
        description:
          "Soft reverent pastels and traditional weaves for the sacred Vedic sunset vows, including silk sarees, kanjeevarams, and heritage sherwanis.",
      },
      {
        event: "Gala",
        day: "Day 2 • Gala Dinner & Afterparty (9:00 PM)",
        dressCode: "Heritage Pastels & Celebration Weaves",
        colors: ["Blush Rose", "Mint Silk", "Lavender", "Peach"],
        description:
          "Carry forward the graceful pastel celebration into the starlit gala dinner with elegant silk ensembles, kanjeevarams, pastel sherwanis, and festive traditional wear.",
      },
    ],

    // Travel
    travelEyebrow: "✦ TRAVEL & LOGISTICS ✦",
    travelHeading: "Airports & Reaching Goa",
    travelQuote: "Two airports connect to Goa. Dabolim (GOI) is closest and preferred for Taj Heritage.",
    airportTitle: "Airports",
    distanceLabel: "Distance",
    travelTimeLabel: "Travel Time",
    preferredTabLabel: "Preferred",
    recommendedRoute: "Recommended Route",
    arrivalGuidance: "Arrival & Transit Guidance",
    openDirections: "OPEN DIRECTIONS ON GOOGLE MAPS",

    // Families
    familiesEyebrow: "✦ WITH LOVE & BLESSINGS ✦",
    familiesHeading: "The Families",
    familiesQuote: "Two families united by love, blessed by traditions.",
    groomSide: "GROOM'S FAMILY",
    brideSide: "BRIDE'S FAMILY",
    groomParents: "Mrs. Ruby & Mr. Mohit Bhatnagar",
    brideParents: "Mrs. Apurva & Mr. Ghansham Kulkarni",
    groomSupporting: "Along with grandparents, siblings & extended family",
    brideSupporting: "Along with grandparents, siblings & extended family",
    groomNote: "With heartfelt warmth and joy, we welcome you to join us in blessing Mradul as he embarks on this sacred journey of companionship and love.",
    brideNote: "With immense love and gratitude, we invite you to share our happiness and shower your dearest blessings on Shreya as she begins her new chapter.",
    familyUnionBlessing: "“We eagerly look forward to welcoming you to Goa and celebrating this sacred union with your loving presence and blessings.”",

    // Stay / Accommodations
    stayEyebrow: "✦ GUEST HOSPITALITY ✦",
    stayHeading: "Accommodations",
    stayQuote: "Your comfort and hospitality are our utmost joy.",
    stayBadge: "Primary Resort & Venue",
    stayCoveredTitle: "Complimentary Stay for Guests",
    stayCoveredNote: "Stay has been arranged and covered for all invited guests on 2 & 3 February at Taj Heritage. We have pre-negotiated special discounted rates if you would like to extend your stay before or after — please contact our wedding planner.",
    resortAddressLabel: "Resort Address",
    venueFullAddress: "Taj Cidade de Goa Heritage, Vainguinim Beach, Dona Paula, Panaji, Goa 403004",
    openGoogleMaps: "Open in Google Maps",
    callPlanner: "Contact Wedding Planner",

    // Notes
    notesEyebrow: "✦ ESSENTIAL DETAILS ✦",
    notesHeading: "Important Notes",
    notesQuote: "Helpful guidelines to ensure your experience is smooth and memorable.",

    // Menu
    menuEyebrow: "✦ CULINARY ARTISTRY ✦",
    menuHeading: "Wedding Dining",
    menuQuote: "“A lavish culinary journey celebrating rich Indian heritage, coastal flavours, and artisanal refreshments.”",
    menuAlcoholFootnote: "* All celebrations are alcohol-free events. Dietary preferences and allergies are happily accommodated via RSVP.",

    // Gallery
    galleryEyebrow: "✦ CAPTURED MOMENTS ✦",
    galleryHeading: "Our Photo Gallery",
    galleryQuote: "Snapshots of joy, laughter, and the beautiful journey that led us here.",

    // Wishes
    wishesEyebrow: "✦ INTERACTIVE WISHES ✦",
    wishesHeading: "Wedding Wish Wall",
    wishesQuote: "Dream big for us! Share your most creative, heartfelt idea for our celebrations.",

    // FAQs
    faqsEyebrow: "✦ FREQUENTLY ASKED ✦",
    faqsHeading: "FAQs",
    faqsQuote: "Answers to the most common questions from our beloved guests.",

    // Helpdesk
    helpdeskEyebrow: "✦ 24/7 GUEST SUPPORT ✦",
    helpdeskHeading: "Wedding Helpdesk",
    helpdeskQuote: "Our dedicated wedding hospitality team is at your service round-the-clock for stay, transfers, and questions.",
    activeConcierge: "Active Concierge",
    tajConcierge: "Taj Concierge",

    // RSVP
    rsvpEyebrow: "✦ KINDLY RESPOND ✦",
    rsvpHeading: "Will You Join Us?",
    rsvpQuote: "Please let us know your presence as soon as possible.",
    stepLabel: "STEP",
    stepOf: "OF",
    stepNames: {
      attendance: "Attendance",
      details: "Your Info",
      events: "Events",
      dietary: "Dining",
      extras: "Extras",
      diningExtras: "Dining & Wishes",
      done: "Done",
    },
    backBtn: "Back",
    acceptOption: "Joyfully Accepts",
    acceptSubtext: "Yes! I will join the celebrations in Goa.",
    declineOption: "Regretfully Declines",
    declineSubtext: "Sadly unable to make it, but sending love.",
    declineWarningTitle: "Are you sure?",
    declineWarningMessage: "As hotel rooms at Taj Heritage are reserved exclusively for our invited guests, declining your attendance will release your complimentary room booking. We would truly love to celebrate with you!",
    reconsiderBtn: "Wait, I'll Attend!",
    confirmDeclineBtn: "Yes, Confirm Decline",
    declineDetailsEyebrow: "✦ GUEST LIST UPDATE ✦",
    declineDetailsHeading: "Who is responding?",
    declineDetailsSubtitle: "Please share your name and phone number so we can update our guest list and room allocations.",
    confirmDeclineSubmitBtn: "SUBMIT RESPONSE",
    fullNameLabel: "Full Name *",
    phoneLabel: "Phone Number (WhatsApp) *",
    emailLabel: "Email Address *",
    guestsCountLabel: "Number of Guests Attending",
    whichCelebrations: "Which celebrations will your party be joining?",
    continueBtn: "CONTINUE",
    continueToEvents: "CONTINUE TO EVENTS",
    dietaryAlcoholNoteTitle: "Alcohol-Free Celebration:",
    dietaryAlcoholNote: "All wedding functions are dry celebrations featuring artisanal mocktails and gourmet beverages.",
    dietaryHeading: "Please choose any dietary preferences or allergen requirements:",
    dietaryPlaceholder: "Please specify your dietary restriction or allergy...",
    songRequestLabel: "Song Request for Sangeet 🎵",
    songRequestPlaceholder: 'Suggest a dance track (e.g. "Gallan Goodiyaan")',
    blessingLabel: "A Warm Blessing or Message for the Couple 💌",
    blessingPlaceholder: "Share your love and good wishes for Mradul & Shreya…",
    submitRsvp: "SUBMIT RSVP",
    seeYouInGoa: "See You in Goa!",
    rsvpSuccessNote: "Your RSVP has been joyfully recorded. We are counting the days to celebrate with you at Taj Heritage! 🌺",
    willMissYou: "We Will Miss You",
    rsvpDeclineNote: "Thank you for letting us know. We will hold your warmest blessings in our hearts as we begin our new journey together. 💕",

    // Footer
    footerQuote: "“With boundless love, joy, and gratitude, our families eagerly look forward to celebrating this sacred new beginning with you by our side in beautiful Goa.”",
    footerDatesVenue: "February 2 & 3, 2026 • Taj Heritage, Goa",
    backToTop: "Back To Top",
    shareInvite: "Share Invitation",
    withLoveFamilies: "With Love • The Bhatnagar & Kulkarni Families",
    copyrightText: "© 2026 Mradul & Shreya Wedding • Crafted with love for Goa",

    // Language
    langSelect: "Language",
  },

  hi: {
    // Nav
    countdown: "उलटी गिनती",
    schedule: "शुभ कार्यक्रम",
    attire: "पहनावा",
    travel: "यात्रा व मार्ग",
    stay: "आवास (होटल)",
    families: "परिवार परिचय",
    notes: "ज़रूरी सूचना",
    menu: "खान-पान",
    gallery: "तस्वीरें",
    wishWall: "शुभकामनाएं",
    faqs: "अक्सर पूछे जाने वाले सवाल",
    helpdesk: "हेल्पडेस्क",
    rsvp: "उपस्थिति (RSVP)",
    rsvpNow: "उपस्थिति दर्ज करें (RSVP)",

    // Hero
    auspiciousBeginning: "ॐ श्री गणेशाय नमः",
    weddingCelebration: "शुभ विवाह समारोह",
    mradulAndShreya: "मृदुल एवं श्रेया",
    dates: "2 एवं 3 फरवरी 2026",
    venueHero: "ताज सिदादे दे गोवा हेरिटेज • गोवा",
    scrollHint: "विवरण देखने हेतु नीचे स्क्रॉल करें ↓",

    // Opening
    envelopeHeader: "सस्नेह, आप सादर आमंत्रित हैं",
    tapToOpen: "खोलने के लिए स्पर्श करें",
    weddingInvitation: "विवाह निमंत्रण • मृदुल एवं श्रेया",
    cordiallyInvited: "आप सपरिवार सादर आमंत्रित हैं",
    celebrateWeddingOf: "के शुभ विवाह समारोह में",
    enterCelebration: "निमंत्रण पत्र देखें →",

    // Countdown
    countdownEyebrow: "✦ शुभ घड़ी की प्रतीक्षा ✦",
    countdownHeading: "शुभ विवाह के पावन पल",
    countdownQuote: "परंपरा, स्नेह और उत्सव के इस पावन मिलन का हर एक पल हमारे लिए विशेष है।",
    days: "दिन",
    hours: "घंटे",
    minutes: "मिनट",
    seconds: "सेकंड",
    festivitiesCount: "2 एवं 3 फरवरी 2026 • 4 भव्य कार्यक्रम",
    addToCalendar: "कैलेंडर में जोड़ें",

    // Schedule
    itineraryEyebrow: "✦ शुभ कार्यक्रम ✦",
    scheduleHeading: "उत्सव की समय-सारणी",
    scheduleQuote: "प्रेम, उल्लास और पारंपरिक वैदिक रिवाजों के दो अविस्मरणीय दिन।",
    day1: "दिन 1 • हल्दी एवं संगीत",
    day2: "दिन 2 • फेरे एवं गाला डिनर",
    eventsList: [
      {
        id: "haldi",
        day: 1,
        time: "2:00 PM",
        title: "हल्दी रस्म",
        description: "पीले परिधान, गेंदे के फूलों की वर्षा, प्राकृतिक उबटन, ढोल-नगाड़ों की थाप और मंगलकामनाएं।",
        location: "पूल लॉन्स • ताज हेरिटेज",
      },
      {
        id: "sangeet",
        day: 1,
        time: "8:30 PM",
        title: "संगीत संध्या",
        description: "रोशनी, संगीत और उल्लास! विशेष नृत्य प्रस्तुतियां, मॉकटेल्स बार एवं बॉलीवुड डीजे।",
        location: "ग्रैंड साला बॉलरूम",
      },
      {
        id: "baraat",
        day: 2,
        time: "2:00 PM",
        title: "शाही बारात प्रस्थान",
        description: "ढोल-ताशों की गूंज, थिरकते कदम और राजसी ठाठ-बाट के साथ दूल्हे राजा का भव्य आगमन।",
        location: "ताज हेरिटेज",
      },
      {
        id: "pheras",
        day: 2,
        time: "5:00 PM",
        title: "पावन फेरे एवं सप्तपदी",
        description: "सूर्यास्त के समय समुद्र तट पर पवित्र अग्नि के समक्ष सात फेरे एवं जीवनभर का साथ।",
        location: "सनसेट लॉन्स • ताज हेरिटेज",
      },
      {
        id: "gala",
        day: 2,
        time: "9:00 PM",
        title: "गाला डिनर एवं आफ्टरपार्टी",
        description: "शाही भोज, स्वागत टोस्ट एवं सितारों की छांव में आनंदमय उत्सव।",
        location: "ग्रैंड साला बैंक्वेट",
      },
    ],

    // Attire
    attireEyebrow: "✦ परिधान सुझाव ✦",
    attireHeading: "उत्सव का पहनावा",
    attireQuote: "सुंदर, पारंपरिक और उत्सव के रंगों में सजें।",
    attireList: [
      {
        event: "हल्दी",
        day: "दिन 1 • हल्दी समारोह (सुबह 10:00 बजे)",
        dressCode: "पीले एवं नारंगी उत्सव परिधान",
        colors: ["गेंदा पीला", "सूर्यमुखी", "केसरिया", "नारंगी"],
        description: "हल्दी के पावन अवसर पर पीले, केसरिया एवं नारंगी रंगों के आरामदायक परिधान पहनें।",
      },
      {
        event: "संगीत",
        day: "दिन 1 • संगीत संध्या (शाम 7:00 बजे)",
        dressCode: "इंडो-वेस्टर्न एवं वेस्टर्न ग्लैम",
        colors: ["पन्ना हरा", "नीलम नीला", "रूबी लाल", "क्लासिक ब्लैक"],
        description: "स्टाइलिश सूट, टक्सीडो, इवनिंग गाउन, डिज़ाइनर साड़ियां एवं चमकीले इंडो-वेस्टर्न परिधान।",
      },
      {
        event: "फेरे",
        day: "दिन 2 • शुभ विवाह फेरे (शाम 5:00 बजे)",
        dressCode: "पारंपरिक पेस्टल एवं रेशमी वस्त्र",
        colors: ["गुलाबी", "हल्का हरा", "लैवेंडर", "पीच"],
        description: "वैदिक फेरों के पावन अवसर हेतु पारंपरिक सिल्क साड़ियां, कांजीवरम और राजसी शेरवानी जैसे शालीन एवं सौम्य रंगों के वस्त्र।",
      },
      {
        event: "गाला",
        day: "दिन 2 • गाला डिनर (रात 9:00 बजे)",
        dressCode: "पारंपरिक पेस्टल एवं उत्सव परिधान",
        colors: ["गुलाबी", "हल्का हरा", "लैवेंडर", "पीच"],
        description: "फेरों के पश्चात सितारों की छांव में शाही रात्रिभोज हेतु पारंपरिक सिल्क साड़ियां, कांजीवरम और सौम्य पेस्टल शेरवानी जैसे शालीन वस्त्र।",
      },
    ],

    // Travel
    travelEyebrow: "✦ यात्रा एवं मार्ग ✦",
    travelHeading: "गोवा आगमन एवं हवाई अड्डे",
    travelQuote: "गोवा में दो हवाई अड्डे हैं। ताज हेरिटेज के लिए डाबोलिम (GOI) सबसे निकट एवं सुविधाजनक है।",
    airportTitle: "हवाई अड्डे",
    distanceLabel: "दूरी",
    travelTimeLabel: "यात्रा समय",
    preferredTabLabel: "निकटतम",
    recommendedRoute: "अनुशंसित मार्ग",
    arrivalGuidance: "आगमन एवं वाहन सुविधा",
    openDirections: "गूगल मैप्स पर दिशा-निर्देश देखें",

    // Families
    familiesEyebrow: "✦ सस्नेह निमंत्रण ✦",
    familiesHeading: "परिवार परिचय",
    familiesQuote: "परंपरा और प्रेम के पावन सूत्र में बंधते दो परिवार।",
    groomSide: "वर पक्ष (वर परिवार)",
    brideSide: "वधू पक्ष (वधू परिवार)",
    groomParents: "श्रीमती रूबी एवं श्री मोहित भटनागर",
    brideParents: "श्रीमती अपूर्वा एवं श्री घनश्याम कुलकर्णी",
    groomSupporting: "दादा-दादी, नाना-नानी, भाई-बहन एवं समस्त परिवारजन",
    brideSupporting: "दादा-दादी, नाना-नानी, भाई-बहन एवं समस्त परिवारजन",
    groomNote: "हार्दिक स्नेह एवं उल्लास के साथ, हम आपको मृदुल के जीवन के इस नए और पावन अध्याय में अपना शुभाशीर्वाद देने हेतु सादर आमंत्रित करते हैं।",
    brideNote: "असीम प्रेम और कृतज्ञता के साथ, हम आपको श्रेया के वैवाहिक जीवन के शुभारंभ पर अपने मंगल आशीर्वाद प्रदान करने हेतु आमंत्रित करते हैं।",
    familyUnionBlessing: "“हम गोवा में आपका सस्नेह स्वागत करने और आपकी मंगलमयी उपस्थिति व आशीर्वाद के साथ इस पवित्र परिणय उत्सव को मनाने के लिए अत्यंत उत्सुक हैं।”",

    // Stay / Accommodations
    stayEyebrow: "✦ अतिथि सत्कार ✦",
    stayHeading: "आवास एवं ठहरने की व्यवस्था",
    stayQuote: "आपकी सुख-सुविधा और आतिथ्य हमारा परम सौभाग्य है।",
    stayBadge: "मुख्य विवाह स्थल एवं आवास",
    stayCoveredTitle: "अतिथियों के लिए आवास व्यवस्था",
    stayCoveredNote: "सभी आमंत्रित अतिथियों के लिए 2 एवं 3 फरवरी को ताज हेरिटेज में ठहरने की सम्पूर्ण व्यवस्था की गई है। यदि आप विवाह से पहले या बाद में ठहरना चाहते हैं, तो विशेष रियायती दरों के लिए कृपया हमारे वेडिंग प्लानर से संपर्क करें।",
    resortAddressLabel: "रिसॉर्ट का पता",
    venueFullAddress: "ताज सिदादे दे गोवा हेरिटेज, वैंगुइनिम बीच, दोना पाउला, पणजी, गोवा 403004",
    openGoogleMaps: "गूगल मैप्स पर देखें",
    callPlanner: "वेडिंग प्लानर से संपर्क करें",

    // Notes
    notesEyebrow: "✦ आवश्यक सूचना ✦",
    notesHeading: "महत्वपूर्ण बिंदु",
    notesQuote: "आपकी यात्रा और सुविधा को सुखद बनाने हेतु कुछ जानकारियां।",

    // Menu
    menuEyebrow: "✦ स्वादिष्ट खान-पान ✦",
    menuHeading: "विवाह का सुरुचिपूर्ण भोजन",
    menuQuote: "“भारतीय परंपरा, तटीय स्वाद एवं आधुनिक व्यंजनों का भव्य और लजीज संगम।”",
    menuAlcoholFootnote: "* कृपया ध्यान दें: विवाह के सभी कार्यक्रम मद्यपान मुक्त (अल्कोहल-फ्री) हैं। खान-पान संबंधी विशेष आवश्यकताओं की पूर्ति RSVP द्वारा की जाएगी।",

    // Gallery
    galleryEyebrow: "✦ सुंदर स्मृतियां ✦",
    galleryHeading: "तस्वीरों का झरोखा",
    galleryQuote: "हंसी, खुशियां और हमारे इस पावन सफर के खूबसूरत यादगार पल।",

    // Wishes
    wishesEyebrow: "✦ मंगलकामनाएं ✦",
    wishesHeading: "शुभकामना संदेश दीवार",
    wishesQuote: "वर-वधू के लिए अपने मनपसंद विचार और मंगलकामनाएं साझा करें।",

    // FAQs
    faqsEyebrow: "✦ सामान्य प्रश्न ✦",
    faqsHeading: "अक्सर पूछे जाने वाले सवाल",
    faqsQuote: "अतिथियों की सुविधा हेतु आवश्यक सवालों के जवाब।",

    // Helpdesk
    helpdeskEyebrow: "✦ 24/7 सहायता ✦",
    helpdeskHeading: "अतिथि हेल्पडेस्क",
    helpdeskQuote: "होटल, आवागमन अथवा किसी भी सहायता हेतु हमारी टीम चौबीसों घंटे आपकी सेवा में उपलब्ध है।",
    activeConcierge: "सक्रिय सहायता केंद्र",
    tajConcierge: "ताज हेल्पडेस्क",

    // RSVP
    rsvpEyebrow: "✦ अपनी उपस्थिति बताएं ✦",
    rsvpHeading: "क्या आप पधारेंगे?",
    rsvpQuote: "कृपया यथाशीघ्र अपनी उपस्थिति सुनिश्चित करें।",
    stepLabel: "चरण",
    stepOf: "का",
    stepNames: {
      attendance: "उपस्थिति",
      details: "व्यक्तिगत जानकारी",
      events: "कार्यक्रम",
      dietary: "खान-पान",
      extras: "संदेश",
      diningExtras: "खान-पान एवं सदिच्छा",
      done: "पूर्ण",
    },
    backBtn: "वापस जाएं",
    acceptOption: "सहर्ष स्वीकार",
    acceptSubtext: "हां! मैं गोवा में उत्सव में अवश्य सम्मिलित होऊंगा/होऊंगी।",
    declineOption: "असमर्थता (उपस्थित नहीं हो पाएंगे)",
    declineSubtext: "उपस्थित होने में असमर्थ, किंतु हार्दिक शुभकामनाएं।",
    declineWarningTitle: "क्या आप निश्चित हैं?",
    declineWarningMessage: "ताज हेरिटेज में आपके लिए कमरा विशेष रूप से आरक्षित किया गया है। आपके मना करने पर यह कमरा रिलीज हो जाएगा। हम आपको अपने साथ देखना अत्यंत पसंद करेंगे!",
    reconsiderBtn: "रुकिए, मैं आऊंगा/आऊंगी!",
    confirmDeclineBtn: "हां, असमर्थता दर्ज करें",
    declineDetailsEyebrow: "✦ अतिथि विवरण ✦",
    declineDetailsHeading: "कृपया अपना नाम व फ़ोन बताएं",
    declineDetailsSubtitle: "कृपया अपना नाम और फ़ोन नंबर दर्ज करें ताकि हम अतिथि सूची और कमरा आरक्षण को अपडेट कर सकें।",
    confirmDeclineSubmitBtn: "प्रतिक्रिया दर्ज करें",
    fullNameLabel: "पूरा नाम *",
    phoneLabel: "फ़ोन नंबर (व्हाट्सएप) *",
    emailLabel: "ईमेल आईडी *",
    guestsCountLabel: "सम्मिलित होने वाले सदस्यों की संख्या",
    whichCelebrations: "आप किन कार्यक्रमों में शामिल होंगे?",
    continueBtn: "आगे बढ़ें",
    continueToEvents: "कार्यक्रम चयन हेतु आगे बढ़ें",
    dietaryAlcoholNoteTitle: "मद्यपान मुक्त (ड्राई) विवाह समारोह:",
    dietaryAlcoholNote: "विवाह के सभी कार्यक्रम मद्यपान मुक्त हैं, जहां विशेष मॉकटेल्स एवं स्वादिष्ट पारंपरिक पेय उपलब्ध रहेंगे।",
    dietaryHeading: "खान-पान संबंधी कोई विशेष प्राथमिकता या एलर्जी?",
    dietaryPlaceholder: "कृपया अपनी खान-पान संबंधी आवश्यकता या एलर्जी का विवरण लिखें...",
    songRequestLabel: "संगीत संध्या हेतु पसंदीदा गाना 🎵",
    songRequestPlaceholder: 'नृत्य हेतु मनपसंद गाना बताएं (जैसे: "गल्लां गूड़ियां")',
    blessingLabel: "वर-वधू के लिए मंगल संदेश या आशीर्वाद 💌",
    blessingPlaceholder: "मृदुल एवं श्रेया के लिए अपना स्नेह और आशीर्वाद लिखें…",
    submitRsvp: "उपस्थिति दर्ज करें",
    seeYouInGoa: "गोवा में आपका स्वागत है!",
    rsvpSuccessNote: "आपकी उपस्थिति सफलतापूर्वक दर्ज कर ली गई है। ताज हेरिटेज में आपके साथ उत्सव मनाने के लिए हम अत्यंत उत्सुक हैं! 🌺",
    willMissYou: "आपकी कमी खलेगी",
    rsvpDeclineNote: "हमें सूचित करने के लिए धन्यवाद। हम आपके मंगल आशीर्वाद को सदैव अपने हृदय में संजो कर रखेंगे। 💕",

    // Footer
    footerQuote: "“असीम स्नेह, उल्लास और कृतज्ञता के साथ, हमारे परिवार गोवा में इस पावन नए आरंभ पर आपका सप्रेम स्वागत करते हैं।”",
    footerDatesVenue: "2 एवं 3 फरवरी 2026 • ताज हेरिटेज, गोवा",
    backToTop: "शीर्ष पर जाएं",
    shareInvite: "निमंत्रण साझा करें",
    withLoveFamilies: "सस्नेह • भटनागर एवं कुलकर्णी परिवार",
    copyrightText: "© 2026 मृदुल एवं श्रेया विवाह • गोवा",

    // Language
    langSelect: "भाषा",
  },

  mr: {
    // Nav
    countdown: "उलटी गिनती",
    schedule: "कार्यक्रम पत्रिका",
    attire: "पोशाख",
    travel: "प्रवास व मार्ग",
    stay: "मुक्काम व निवास",
    families: "कुटुंब परिचय",
    notes: "महत्त्वाच्या सूचना",
    menu: "भोजन मेनू",
    gallery: "छायाचित्रे",
    wishWall: "शुभेच्छा",
    faqs: "नेहमी विचारले जाणारे प्रश्न",
    helpdesk: "मदत कक्ष",
    rsvp: "उपस्थिती नोंदणी (RSVP)",
    rsvpNow: "उपस्थिती कळवा (RSVP)",

    // Hero
    auspiciousBeginning: "॥ श्री गणेशाय नमः ॥",
    weddingCelebration: "शुभविवाह सोहळा",
    mradulAndShreya: "मृदुल आणि श्रेया",
    dates: "2 आणि 3 फेब्रुवारी 2026",
    venueHero: "ताज सिदादे दे गोवा हेरिटेज • गोवा",
    scrollHint: "तपशील पाहण्यासाठी खाली स्क्रोल करा ↓",

    // Opening
    envelopeHeader: "सस्नेह, आपले हार्दिक निमंत्रण",
    tapToOpen: "उघडण्यासाठी स्पर्श करा",
    weddingInvitation: "निमंत्रण पत्रिका • मृदुल आणि श्रेया",
    cordiallyInvited: "आपणास सस्नेह आग्रहाचे निमंत्रण",
    celebrateWeddingOf: "यांच्या शुभविवाह सोहळ्यास",
    enterCelebration: "निमंत्रण पत्रिका पहा →",

    // Countdown
    countdownEyebrow: "✦ सोहळ्याची उत्सुकता ✦",
    countdownHeading: "शुभविवाहाचे मंगल क्षण",
    countdownQuote: "परंपरा, स्नेह आणि आनंदाच्या या पावन सोहळ्याचा प्रत्येक क्षण आमच्यासाठी अनमोल आहे.",
    days: "दिवस",
    hours: "तास",
    minutes: "मिनिटे",
    seconds: "सेकंद",
    festivitiesCount: "2 आणि 3 फेब्रुवारी 2026 • 4 भव्य सोहळे",
    addToCalendar: "कॅलेंडरमध्ये जोडा",

    // Schedule
    itineraryEyebrow: "✦ कार्यक्रम पत्रिका ✦",
    scheduleHeading: "सोहळ्याची रूपरेषा",
    scheduleQuote: "आनंद, प्रेम आणि पारंपरिक सोहळ्याचे दोन अविस्मरणीय दिवस.",
    day1: "दिवस 1 • हळद व संगीत",
    day2: "दिवस 2 • लग्न व रिसेप्शन",
    eventsList: [
      {
        id: "haldi",
        day: 1,
        time: "2:00 PM",
        title: "हळदीचा समारंभ",
        description: "पिवळे परिधान, झेंडूच्या फुलांचा वर्षाव, पारंपरिक उटणे, ढोल-ताशांचा गजर आणि मंगल आशीर्वाद.",
        location: "पूल लॉन्स • ताज हेरिटेज",
      },
      {
        id: "sangeet",
        day: 1,
        time: "8:30 PM",
        title: "संगीत रजनी",
        description: "रोषणाई, गाणी आणि नृत्याची रंगतदार रात्र! नृत्याविष्कार, मॉकटेल्स बार आणि बॉलीवूड डीजे.",
        location: "ग्रँड साला बॉलरूम",
      },
      {
        id: "baraat",
        day: 2,
        time: "2:00 PM",
        title: "शाही वरात प्रस्थान",
        description: "ढोल-ताशांचा गजर, जल्लोष आणि राजेशाही थाटात नवरदेवाचे भव्य आगमन.",
        location: "ताज हेरिटेज",
      },
      {
        id: "pheras",
        day: 2,
        time: "5:00 PM",
        title: "शुभविवाह (सप्तपदी फेरे)",
        description: "सूर्यास्ताच्या रम्य वेळी समुद्रकिनाऱ्यावर पवित्र अग्नीच्या साक्षीत वैदिक विवाह सोहळा.",
        location: "सनसेट लॉन्स • ताज हेरिटेज",
      },
      {
        id: "gala",
        day: 2,
        time: "9:00 PM",
        title: "गाला डिनर आणि आफ्टरपार्टी",
        description: "शाही भोजनाचा आस्वाद, स्वागत परंपरेसह चांदण्यांच्या प्रकाशात आनंदोत्सव.",
        location: "ग्रँड साला बँक्वेट",
      },
    ],

    // Attire
    attireEyebrow: "✦ पोशाख सूचना ✦",
    attireHeading: "सोहळ्याचा पोशाख",
    attireQuote: "उत्सवाच्या आणि आनंदाच्या पारंपरिक रंगांमध्ये सज्ज व्हा.",
    attireList: [
      {
        event: "हळद",
        day: "दिवस 1 • हळद समारंभ (सकाळी 10:00)",
        dressCode: "पिवळे आणि केशरी उत्सव पोशाख",
        colors: ["झेंडू पिवळा", "सूर्यमुखी", "केशरी", "नारंगी"],
        description: "हळदीच्या प्रसंगी गडद पिवळ्या, केशरी आणि नारंगी रंगांचे आरामदायक पारंपरिक कपडे.",
      },
      {
        event: "संगीत",
        day: "दिवस 1 • संगीत रजनी (संध्याकाळी 7:00)",
        dressCode: "इंडो-वेस्टर्न आणि वेस्टर्न ग्लॅम",
        colors: ["पाचू हिरवा", "नीलम निळा", "माणिक लाल", "क्लासिक ब्लॅक"],
        description: "फॉर्मल सूट, टक्सिडो, इव्हनिंग गाऊन आणि देखणे इंडो-वेस्टर्न कपडे घालून सोहळ्याची रंगत वाढवा.",
      },
      {
        event: "फेरे",
        day: "दिवस 2 • शुभविवाह सोहळा (संध्याकाळी 5:00)",
        dressCode: "पारंपरिक सिल्क आणि पेस्टल रंग",
        colors: ["गुलाबी", "पिस्ता हिरवा", "लॅव्हेंडर", "पीच"],
        description: "पवित्र विवाह विधींसाठी पारंपरिक रेशमी साड्या, पैठणी, कांजीवरम आणि राजेशाही शेरवानी असे देखणे पारंपरिक पोशाख परिधान करावेत.",
      },
      {
        event: "गाला",
        day: "दिवस 2 • गाला डिनर (रात्री 9:00)",
        dressCode: "पारंपरिक पेस्टल आणि देखणे रेशमी पोशाख",
        colors: ["गुलाबी", "पिस्ता हिरवा", "लॅव्हेंडर", "पीच"],
        description: "चांदण्यांच्या प्रकाशात होणाऱ्या गाला डिनरसाठी पारंपरिक रेशमी साड्या, पैठणी आणि राजेशाही पेस्टल शेरवानी.",
      },
    ],

    // Travel
    travelEyebrow: "✦ प्रवास व मार्ग ✦",
    travelHeading: "गोवा आगमन व विमानतळ",
    travelQuote: "गोव्यात दोन विमानतळे आहेत. ताज हेरिटेजसाठी दाबोलीम (GOI) हे सर्वात जवळचे व सोयीचे आहे.",
    airportTitle: "विमानतळ",
    distanceLabel: "अंतर",
    travelTimeLabel: "प्रवासाचा वेळ",
    preferredTabLabel: "मुख्य",
    recommendedRoute: "शिफारस केलेला मार्ग",
    arrivalGuidance: "आगमन आणि वाहतूक व्यवस्था",
    openDirections: "गुगल मॅप्सवर दिशा पहा",

    // Families
    familiesEyebrow: "✦ सस्नेह निमंत्रण ✦",
    familiesHeading: "कुटुंब परिचय",
    familiesQuote: "परंपरा आणि प्रेमाच्या धाग्याने एकत्र येणारी दोन कुटुंबे.",
    groomSide: "वर पक्ष (वर कुटुंब)",
    brideSide: "वधू पक्ष (वधू कुटुंब)",
    groomParents: "सौ. रुबी आणि श्री. मोहित भटनागर",
    brideParents: "सौ. अपूर्वा आणि श्री. घनश्याम कुलकर्णी",
    groomSupporting: "आजी-आजोबा, भावंडे व समस्त परिवारजन",
    brideSupporting: "आजी-आजोबा, भावंडे व समस्त परिवारजन",
    groomNote: "मृदुलच्या आयुष्यातील या नवीन आणि पवित्र प्रवासाच्या प्रारंभास आपले शुभाशीर्वाद लाभावेत, यासाठी आपले सस्नेह निमंत्रण.",
    brideNote: "श्रेयाच्या विवाह सोहळ्यास आपली उपस्थिती आणि प्रेमळ आशीर्वाद लाभावेत, हीच आमची नम्र विनंती.",
    familyUnionBlessing: "“आम्ही गोव्यात आपले मनःपूर्वक स्वागत करण्यासाठी आणि आपल्या प्रेमळ उपस्थिती व आशीर्वादाने हा मंगल सोहळा साजरा करण्यासाठी उत्सुक आहोत.”",

    // Stay / Accommodations
    stayEyebrow: "✦ अतिथी सत्कार ✦",
    stayHeading: "निवास व्यवस्था",
    stayQuote: "आपला मुक्काम आणि आदरातिथ्य हीच आमची प्राथमिकता आहे.",
    stayBadge: "मुख्य विवाह स्थळ व निवास",
    stayCoveredTitle: "पाहुण्यांसाठी निवास व्यवस्था",
    stayCoveredNote: "सर्व आमंत्रित पाहुण्यांसाठी 2 आणि 3 फेब्रुवारी रोजी ताज हेरिटेजमध्ये निवासाची व्यवस्था करण्यात आली आहे. जर आपण आधी किंवा नंतर मुक्काम वाढवू इच्छित असाल, तर विशेष सवलतींच्या दरांसाठी कृपया वेडिंग प्लॅनरशी संपर्क साधावा.",
    resortAddressLabel: "रिसॉर्टचा पत्ता",
    venueFullAddress: "ताज सिदादे दे गोवा हेरिटेज, वैंगुइनिम बीच, दोना पाउला, पणजी, गोवा 403004",
    openGoogleMaps: "गुगल मॅप्सवर पहा",
    callPlanner: "वेडिंग प्लॅनरशी संपर्क साधा",

    // Notes
    notesEyebrow: "✦ महत्त्वाचे ✦",
    notesHeading: "महत्त्वाच्या सूचना",
    notesQuote: "आपला मुक्काम सुखकर व्हावा यासाठी काही माहिती.",

    // Menu
    menuEyebrow: "✦ स्वादिष्ट भोजन ✦",
    menuHeading: "विवाह सोहळ्याचे भोजन",
    menuQuote: "“भारतीय संस्कृती, कोकणी आणि आधुनिक चवींचा सुंदर व चविष्ट संगम.”",
    menuAlcoholFootnote: "* कृपया नोंद घ्यावी: सर्व कार्यक्रम मद्यपान विरहित आहेत. जेवणातील विशेष गरजा RSVP द्वारे कळवाव्यात.",

    // Gallery
    galleryEyebrow: "✦ सुंदर आठवणी ✦",
    galleryHeading: "छायाचित्रांचा नजराणा",
    galleryQuote: "आनंदाचे, हास्याचे आणि आमच्या या सुंदर प्रवासाचे काही खास क्षण.",

    // Wishes
    wishesEyebrow: "✦ सदिच्छा व आशीर्वाद ✦",
    wishesHeading: "शुभेच्छा संदेश भिंत",
    wishesQuote: "आमच्या या नव्या सुरुवातीसाठी आपल्या प्रेमळ शुभेच्छा आणि कल्पना व्यक्त करा.",

    // FAQs
    faqsEyebrow: "✦ नेहमी विचारले जाणारे प्रश्न ✦",
    faqsHeading: "वारंवार विचारले जाणारे प्रश्न",
    faqsQuote: "पाहुण्यांच्या सोयीसाठी उपयुक्त माहिती.",

    // Helpdesk
    helpdeskEyebrow: "✦ 24/7 मदत कक्ष ✦",
    helpdeskHeading: "अतिथी मदत कक्ष",
    helpdeskQuote: "निवास, प्रवास अथवा इतर मदतीसाठी आमची टीम सदैव आपल्या सेवेत तत्पर आहे.",
    activeConcierge: "सक्रिय मदत केंद्र",
    tajConcierge: "ताज मदत कक्ष",

    // RSVP
    rsvpEyebrow: "✦ आपली उपस्थिती कळवा ✦",
    rsvpHeading: "आपण उपस्थित राहणार का?",
    rsvpQuote: "कृपया लवकरात लवकर आपली उपस्थिती निश्चित करावी.",
    stepLabel: "टप्पा",
    stepOf: "पैकी",
    stepNames: {
      attendance: "उपस्थिती",
      details: "वैयक्तिक माहिती",
      events: "कार्यक्रम",
      dietary: "भोजन",
      extras: "सदिच्छा",
      diningExtras: "भोजन आणि सदिच्छा",
      done: "पूर्ण",
    },
    backBtn: "मागे जा",
    acceptOption: "सहर्ष उपस्थित राहणार",
    acceptSubtext: "होय! मी गोव्यातील सोहळ्यास नक्की उपस्थित राहीन.",
    declineOption: "उपस्थित राहणे शक्य नाही",
    declineSubtext: "उपस्थित राहणे शक्य नाही, तरीही हार्दिक शुभेच्छा.",
    declineWarningTitle: "आपण नक्की नकार देत आहात का?",
    declineWarningMessage: "ताज हेरिटेजमध्ये आपल्यासाठी खोली आरक्षित केलेली आहे. आपण नकार दिल्यास ही खोली रद्द केली जाईल. आपण या सोहळ्यास उपस्थित राहावे ही आमची मनापासून इच्छा आहे!",
    reconsiderBtn: "थांबा, मी उपस्थित राहीन!",
    confirmDeclineBtn: "होय, नकार निश्चित करा",
    declineDetailsEyebrow: "✦ पाहुण्यांचे तपशील ✦",
    declineDetailsHeading: "कृपया आपले नाव व फोन सांगा",
    declineDetailsSubtitle: "कृपया आपले नाव व फोन नंबर नोंदवा जेणेकरून आम्ही खोल्यांचे नियोजन व यादी अद्ययावत करू शकू.",
    confirmDeclineSubmitBtn: "नोंदणी पूर्ण करा",
    fullNameLabel: "पूर्ण नाव *",
    phoneLabel: "फोन नंबर (व्हॉट्सॲप) *",
    emailLabel: "ईमेल आयडी *",
    guestsCountLabel: "उपस्थित राहणाऱ्या पाहुण्यांची संख्या",
    whichCelebrations: "आपण कोणत्या कार्यक्रमांना उपस्थित राहणार?",
    continueBtn: "पुढे चला",
    continueToEvents: "कार्यक्रम निवडीसाठी पुढे चला",
    dietaryAlcoholNoteTitle: "मद्यपान विरहित सोहळा:",
    dietaryAlcoholNote: "सर्व विवाह सोहळे मद्यपान विरहित आहेत, ज्यामध्ये खास मॉकटेल्स व रुचकर पेये उपलब्ध असतील.",
    dietaryHeading: "भोजनाबाबत काही विशेष पथ्य किंवा आवड-निवड?",
    dietaryPlaceholder: "कृपया आपल्या भोजनाबाबतचे पथ्य किंवा ॲलर्जीबद्दल लिहा...",
    songRequestLabel: "संगीत रजनीसाठी आवडते गाणे 🎵",
    songRequestPlaceholder: 'नृत्यासाठी गाणे सुचवा (उदा. "गल्लां गूड़ियां")',
    blessingLabel: "वर-वधूंसाठी शुभेच्छा संदेश व आशीर्वाद 💌",
    blessingPlaceholder: "मृदुल आणि श्रेयासाठी आपल्या प्रेमळ सदिच्छा लिहा…",
    submitRsvp: "उपस्थिती नोंदवा",
    seeYouInGoa: "गोव्यात आपले सहर्ष स्वागत!",
    rsvpSuccessNote: "आपली उपस्थिती यशस्वीरीत्या नोंदवली गेली आहे. ताज हेरिटेजमध्ये आपल्या समवेत आनंद साजरा करण्यास आम्ही उत्सुक आहोत! 🌺",
    willMissYou: "आपली आठवण येईल",
    rsvpDeclineNote: "आम्हाला कळवल्याबद्दल धन्यवाद. आपले प्रेमळ आशीर्वाद सदैव आमच्या पाठीशी राहतील. 💕",

    // Footer
    footerQuote: "“अथांग प्रेम, आनंद आणि कृतज्ञतेसह, आमचे कुटुंब गोव्यातील या मंगल सोहळ्यात आपले मनःपूर्वक स्वागत करते.”",
    footerDatesVenue: "2 आणि 3 फेब्रुवारी 2026 • ताज हेरिटेज, गोवा",
    backToTop: "वर जा",
    shareInvite: "निमंत्रण शेअर करा",
    withLoveFamilies: "सस्नेह • भटनागर आणि कुलकर्णी कुटुंब",
    copyrightText: "© 2026 मृदुल आणि श्रेया विवाह • गोवा",

    // Language
    langSelect: "भाषा",
  },
};
