export interface SolutionFaqItem {
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
}

export interface SolutionItem {
  slug: string;
  category:
    | "career"
    | "court"
    | "protection"
    | "relationship"
    | "business";
  categoryNameHi: string;
  categoryNameEn: string;
  titleHi: string;
  titleEn: string;
  shortDescHi: string;
  shortDescEn: string;
  heroTagHi: string;
  heroTagEn: string;
  overviewHi: string;
  overviewEn: string;
  image: string;
  challengesHi: { title: string; desc: string }[];
  challengesEn: { title: string; desc: string }[];
  spiritualCauseHi: { title: string; desc: string }[];
  spiritualCauseEn: { title: string; desc: string }[];
  stambhanActionHi: string;
  stambhanActionEn: string;
  mantraDevanagari: string;
  mantraEnglish: string;
  mantraMeaningHi: string;
  mantraMeaningEn: string;
  jaapCount: string;
  bestTimeHi: string;
  bestTimeEn: string;
  malaTypeHi: string;
  malaTypeEn: string;
  directionHi: string;
  directionEn: string;
  anushthanNameHi: string;
  anushthanNameEn: string;
  anushthanDetailsHi: string[];
  anushthanDetailsEn: string[];
  benefitsHi: string[];
  benefitsEn: string[];
  faqs: SolutionFaqItem[];
}

export interface SolutionCategory {
  id: SolutionItem["category"];
  nameHi: string;
  nameEn: string;
  iconName: string;
  descriptionHi: string;
  descriptionEn: string;
  items: {
    slug: string;
    titleHi: string;
    titleEn: string;
  }[];
}

// Exactly 10 curated solutions with guaranteed full detail pages
export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    id: "court",
    nameHi: "कोर्ट-कचहरी व कानूनी विवाद",
    nameEn: "Court & Legal Matters",
    iconName: "Scale",
    descriptionHi: "झूठे मुकदमों, संपत्ति विवाद, पेशी एवं कानूनी उलझनों से शीघ्र मुक्ति व विजय।",
    descriptionEn: "Victory and swift resolution in litigation, property disputes, and false cases.",
    items: [
      {
        slug: "court-case-success",
        titleHi: "कोर्ट केस में विजय प्राप्ति",
        titleEn: "Court Case Success & Victory",
      },
      {
        slug: "property-dispute-solution",
        titleHi: "भूमि व संपत्ति विवाद निवारण",
        titleEn: "Property Dispute Resolution",
      },
      {
        slug: "false-allegation-protection",
        titleHi: "झूठे आरोप व पुलिस केस से मुक्ति",
        titleEn: "False Allegation & Police Protection",
      },
    ],
  },
  {
    id: "protection",
    nameHi: "शत्रु बाधा व आत्मरक्षा",
    nameEn: "Enemy & Spiritual Protection",
    iconName: "ShieldCheck",
    descriptionHi: "शत्रु स्तम्भन, ईर्ष्या, तंत्र-दोष, बुरी नज़र व नकारात्मक शक्तियों का शमन।",
    descriptionEn: "Complete protection from hostile rivals, evil eye, black magic, and negativity.",
    items: [
      {
        slug: "enemy-removal",
        titleHi: "शत्रु स्तम्भन एवं बाधा निवारण",
        titleEn: "Enemy Removal & Shatru Stambhan",
      },
      {
        slug: "evil-eye-nazar-dosh-removal",
        titleHi: "बुरी नज़र व नज़र दोष निवारण",
        titleEn: "Evil Eye (Nazar Dosh) Removal",
      },
      {
        slug: "black-magic-removal",
        titleHi: "तंत्र बाधा व नकारात्मक ऊर्जा निवारण",
        titleEn: "Black Magic & Negativity Removal",
      },
    ],
  },
  {
    id: "business",
    nameHi: "व्यापार, कर्ज व धन लाभ",
    nameEn: "Business & Wealth",
    iconName: "TrendingUp",
    descriptionHi: "व्यापार विस्तार, रुका हुआ धन, ऋण मुक्ति एवं महालक्ष्मी की अक्षय कृपा।",
    descriptionEn: "Business acceleration, debt relief, recovery of blocked funds, and prosperity.",
    items: [
      {
        slug: "business-growth",
        titleHi: "व्यापार वृद्धि एवं निरंतर ग्राहकी",
        titleEn: "Business Growth & Sales Expansion",
      },
      {
        slug: "debt-relief",
        titleHi: "कर्ज मुक्ति एवं आर्थिक संकट निवारण",
        titleEn: "Debt Relief & Loan Clearance",
      },
    ],
  },
  {
    id: "career",
    nameHi: "कैरियर, नौकरी व विवाह",
    nameEn: "Career & Marriage Harmony",
    iconName: "Briefcase",
    descriptionHi: "सरकारी नौकरी चयन, उच्च पद, साक्षात्कार विजय एवं शीघ्र विवाह बाधा निवारण।",
    descriptionEn: "Government job selection, career success, and timely marriage obstacle clearance.",
    items: [
      {
        slug: "government-job-success",
        titleHi: "सरकारी नौकरी में चयन व सफलता",
        titleEn: "Government Job Selection & Success",
      },
      {
        slug: "marriage-delay-removal",
        titleHi: "शीघ्र विवाह एवं विवाह बाधा निवारण",
        titleEn: "Marriage Delay Removal & Early Match",
      },
    ],
  },
];

export const SOLUTIONS_DATA: Record<string, SolutionItem> = {
  // 1. Court Case Victory
  "court-case-success": {
    slug: "court-case-success",
    category: "court",
    categoryNameHi: "कोर्ट-कचहरी व कानूनी विवाद",
    categoryNameEn: "Court & Legal Matters",
    titleHi: "कोर्ट-कचहरी विजय एवं कानूनी विवाद समाधान",
    titleEn: "Court Case Victory & Legal Dispute Resolution",
    shortDescHi:
      "माँ बगलामुखी की स्तम्भन शक्ति द्वारा विरोधी की बुद्धि व साक्षी को स्तम्भित कर न्याय व विजय प्राप्ति।",
    shortDescEn:
      "Harness the supreme Stambhan Shakti of Maa Bagalamukhi to still adversary claims and attain legal victory.",
    heroTagHi: "100% शास्त्रोक्त तांत्रिक अनुष्ठान • नलखेड़ा सिद्धपीठ",
    heroTagEn: "100% Scriptural Vedic Tantric Ritual • Nalkheda Siddhapeeth",
    overviewHi:
      "अदालती मुकदमे, तारीखों का लंबा दौर और झूठे अभियोग मनुष्य के धन, सम्मान और मानसिक शांति को नष्ट कर देते हैं। वैदिक तंत्र में माँ बगलामुखी को 'सर्वदुष्टानां वाचं मुखं पदं स्तम्भय' की अधिष्ठात्री माना गया है। नलखेड़ा शक्तिपीठ में पूज्य पंडित शुभम शर्मा जी के सान्निध्य में विधिवत संकल्प और पीली सरसों, हल्दी, शुद्ध घृत से महाहवन द्वारा विरोधी पक्ष की दुर्भावना स्तम्भित होती है और अनुकूल फैसला प्राप्त होता है।",
    overviewEn:
      "Protracted court battles and false litigations drain financial resources, dignity, and peace of mind. In Vedic Tantra, Maa Bagalamukhi is the supreme deity who immobilizes the tongue, movement, and harmful intentions of adversaries. Under the divine guidance of Pujya Pandit Shubham Sharma Ji at Nalkheda Dham, authentic Vedic sankalp and sacred hawan neutralize conspiracies and pave the path to favorable judgment.",
    image: "/mandir/puja-shatru-raksha.jpg",
    challengesHi: [
      {
        title: "झूठे व गढ़े हुए मुकदमे",
        desc: "शत्रु या व्यापारिक प्रतिद्वंद्वी द्वारा बदनाम करने या फंसाने हेतु दर्ज किए गए मुकदमे।",
      },
      {
        title: "तारीख पर तारीख व मानसिक संताप",
        desc: "सालों-साल कोर्ट के चक्कर, भारी वकीलों का खर्च और निर्णय में लगातार विलंब।",
      },
      {
        title: "विरोधी पक्ष का अनुचित दबाव",
        desc: "विरोधी द्वारा झूठे गवाह खड़े करना, साक्ष्य मिटाना अथवा प्रशासन का दुरुपयोग करना।",
      },
      {
        title: "आजीविका व मान-सम्मान पर संकट",
        desc: "मुकदमे के कारण करियर, व्यापारिक साख व पारिवारिक प्रतिष्ठा पर आंच आना।",
      },
    ],
    challengesEn: [
      {
        title: "Fabricated & Malicious Litigations",
        desc: "Unjust lawsuits filed by adversaries or business rivals to inflict financial and reputational harm.",
      },
      {
        title: "Agonizing Delays & Court Hearings",
        desc: "Endless court dates, mounting advocate expenses, and persistent psychological distress.",
      },
      {
        title: "Undue Hostility & False Testimonies",
        desc: "Adversaries coercing witnesses, forging claims, or utilizing bureaucratic pressure.",
      },
      {
        title: "Threat to Livelihood & Public Honor",
        desc: "Litigation risks jeopardizing professional stature, commercial credibility, and family peace.",
      },
    ],
    spiritualCauseHi: [
      {
        title: "कुंडली में षष्ठम (6th) व अष्टम (8th) भाव की पीड़ा",
        desc: "छठे भाव में राहु, शनि अथवा मंगल की क्रूर दृष्टि शत्रुओं और मुकदमेबाजी को जन्म देती है।",
      },
      {
        title: "गोचर में शनि की साढ़ेसाती अथवा ढैय्या",
        desc: "शनि व राहु की दशा में अकस्मात कानूनी विवाद, सरकारी नोटिस व मानहानि के योग बनते हैं।",
      },
      {
        title: "शत्रु कृत तांत्रिक द्वेष व ईर्ष्या",
        desc: "प्रतिद्वंदियों द्वारा उन्नति से जलकर की गई गुप्त तंत्र क्रियाएं अथवा षड्यंत्र।",
      },
      {
        title: "सुरक्षा कवच का अभाव",
        desc: "दैनिक जीवन में दैवीय ऊर्जा व सुरक्षा घेरा न होने के कारण नकारात्मक शक्तियां हावी हो जाती हैं।",
      },
    ],
    spiritualCauseEn: [
      {
        title: "Afflictions in 6th and 8th Astrological Houses",
        desc: "Malefic aspects of Rahu, Saturn, or Mars in the 6th house trigger litigation and adversary hostilities.",
      },
      {
        title: "Saturn's Sade Sati or Dhaiya Transit",
        desc: "Challenging transits cause sudden legal complications, government disputes, and prestige erosion.",
      },
      {
        title: "Adversary Envy & Occult Conspiracies",
        desc: "Hidden animosity and negative energetic sabotage sponsored by jealous competitors.",
      },
      {
        title: "Absence of Protective Divine Armor",
        desc: "Lack of energized spiritual Kavach leaves aura susceptible to hostile maneuvers.",
      },
    ],
    stambhanActionHi:
      "माँ बगलामुखी की अमोघ शक्ति विरोधी की जिह्वा, बुद्धि और षड्यंत्रकारी युक्तियों को स्तम्भित कर देती है, जिससे सत्य प्रकट होता है और न्याय आपके पक्ष में आता है।",
    stambhanActionEn:
      "Maa Bagalamukhi's supreme Stambhan Shakti paralyzes the speech, deceitful plots, and malicious evidence of opposing parties, ensuring truth prevails in court.",
    mantraDevanagari:
      "॥ ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥",
    mantraEnglish:
      "Om Hlim Bagalamukhi Sarvadushtanam Vacham Mukham Padam Stambhaya Jihvam Kilaya Buddhim Vinashaya Hlim Om Swaha",
    mantraMeaningHi:
      "हे सर्वशक्तिमयी माँ बगलामुखी! मेरे समस्त शत्रुओं व विरोधियों की वाणी, मुख और गति को स्तम्भित कर दें, उनकी दुष्ट बुद्धि का शमन कर मुझे धर्मपूर्वक विजय प्रदान करें।",
    mantraMeaningEn:
      "O Divine Mother Bagalamukhi! Immobilize the speech, countenance, and movement of all my adversaries; still their intellect and grant me righteous victory.",
    jaapCount: "36,000 अथवा 1,25,000 मंत्र जाप (संकल्प मुहूर्त अनुसार)",
    bestTimeHi: "ब्राह्म मुहूर्त अथवा संध्या काल (मंगलवार या शनिवार से आरंभ)",
    bestTimeEn: "Brahma Muhurta or Evening Twilight (Initiated on Tuesday/Saturday)",
    malaTypeHi: "शुद्ध प्राण प्रतिष्ठित हल्दी माला (108 दाने)",
    malaTypeEn: "Consecrated Turmeric (Haldi) Rosary (108 beads)",
    directionHi: "पूर्व अथवा उत्तर दिशा की ओर मुख, पीत वस्त्र व पीत आसन",
    directionEn: "Facing East or North, wearing yellow robes on yellow asana",
    anushthanNameHi: "बगलामुखी सर्व शत्रु स्तम्भन एवं कोर्ट केस विजय महाअनुष्ठान",
    anushthanNameEn: "Maa Bagalamukhi Shatru Stambhan & Legal Victory Maha Anushthan",
    anushthanDetailsHi: [
      "नलखेड़ा शक्तिपीठ में पूज्य पंडित जी द्वारा यजमान के नाम व गोत्र से व्यक्तिगत संकल्प।",
      "शास्त्रोक्त षोडशोपचार पूजन, पीताम्बरा चक्र व बगलामुखी यंत्र प्रतिष्ठा।",
      "वैदिक विप्रों द्वारा 1.25 लाख संपुटित मंत्र जाप का अखंड अनुष्ठान।",
      "पीली सरसों, गिलोय, काले तिल, शहद व शुद्ध गौघृत की विशेष समिधा से महाहवन।",
      "अभिमंत्रित रक्षा सूत्र, भस्म व सिद्ध बगलामुखी ताबीज प्रेषण।",
    ],
    anushthanDetailsEn: [
      "Personalized Vedic Sankalp using devotee's Gotra and legal case details at Nalkheda Dham.",
      "Consecration of energized Bagalamukhi Yantra and sacred Pitambara Chakra.",
      "125,000 specialized mantra recitations by disciplined Vedic scholars.",
      "Sacred Maha Hawan using yellow mustard, Giloy, black sesame, pure cow ghee, and honey.",
      "Courier delivery of energized Raksha Kavach, holy Bhasma, and blessed Prasadam.",
    ],
    benefitsHi: [
      "विरोधी पक्ष की झूठी गवाही व षड्यंत्रकारी योजनाएं निष्प्रभावी हो जाती हैं।",
      "अदालत में तारीखों का अंत होकर शीघ्र व सम्मानजनक समझौते या निर्णय का मार्ग प्रशस्त होता है।",
      "जमानत (Bail) प्राप्ति तथा प्रशासनिक अवरोधों में तत्काल राहत।",
      "मान-सम्मान, पैतृक संपत्ति व सामाजिक प्रतिष्ठा की पूर्ण रक्षा।",
    ],
    benefitsEn: [
      "Neutralizes false allegations, bribed witnesses, and opposing conspiracies.",
      "Brings an end to agonizing hearing cycles, paving the way for swift victory or favorable settlement.",
      "Aids in securing bail and breaking bureaucratic bottlenecks.",
      "Restores family honor, ancestral wealth, and public reputation.",
    ],
    faqs: [
      {
        questionHi: "क्या दूर रहकर भी ऑनलाइन संकल्प के माध्यम से यह अनुष्ठान कराया जा सकता है?",
        questionEn: "Can this ritual be performed remotely via online live video Sankalp?",
        answerHi:
          "हाँ, यदि आप स्वयं नलखेड़ा धाम आने में असमर्थ हैं, तो पंडित शुभम शर्मा जी लाइव वीडियो कॉल पर आपका नाम व गोत्र से वैदिक संकल्प कराकर अनुष्ठान पूर्ण कराते हैं।",
        answerEn:
          "Yes, if you cannot travel to Nalkheda Dham in person, Pujya Guruji conducts your direct Vedic Sankalp via live video call and executes the complete ceremony at the sanctum.",
      },
      {
        questionHi: "कोर्ट केस में कितने समय में सकारात्मक प्रभाव दिखाई देने लगता है?",
        questionEn: "How soon do devotees experience relief in their ongoing court case?",
        answerHi:
          "अनुष्ठान के पूर्ण होने और दशांश हवन के पश्चात 21 से 45 दिनों के भीतर विरोधी पक्ष का दबाव कम होने और परिस्थितियां अनुकूल बनने के स्पष्ट संकेत मिलते हैं।",
        answerEn:
          "Devotees traditionally observe shifts within 21 to 45 days of Maha Hawan completion, manifesting as weakened opposition pressure and judicial relief.",
      },
      {
        questionHi: "क्या यह अनुष्ठान किसी को हानि पहुँचाने के लिए किया जाता है?",
        questionEn: "Is this ritual intended to harm anyone?",
        answerHi:
          "कदापि नहीं! माँ बगलामुखी की साधना आत्मरक्षा, सत्य की स्थापना और शत्रु द्वारा किए जा रहे अहित को रोकने (स्तम्भित करने) हेतु होती है। यह विशुद्ध धर्म रक्षा का मार्ग है।",
        answerEn:
          "Absolutely not. Maa Bagalamukhi's Stambhan Shakti is an impenetrable shield for self-defense and righteousness. It paralyzes harm and protects you from injustice.",
      },
    ],
  },

  // 2. Property Dispute Resolution
  "property-dispute-solution": {
    slug: "property-dispute-solution",
    category: "court",
    categoryNameHi: "कोर्ट-कचहरी व कानूनी विवाद",
    categoryNameEn: "Court & Legal Matters",
    titleHi: "भूमि व संपत्ति विवाद निवारण अनुष्ठान",
    titleEn: "Property Dispute Resolution & Land Protection",
    shortDescHi:
      "पैतृक संपत्ति, अवैध कब्जा, प्लॉट-मकान रजिस्ट्री विवाद व भू-माफियाओं से मुक्ति हेतु अचूक अनुष्ठान।",
    shortDescEn:
      "Clear ancestral land disputes, unauthorized encroachments, and property deed litigations with Maa Bagalamukhi Stambhan.",
    heroTagHi: "भूमि व अचल संपत्ति सुरक्षा • नलखेड़ा शक्तिपीठ",
    heroTagEn: "Sacred Land & Asset Armor • Nalkheda Peeth",
    overviewHi:
      "भूमि एवं अचल संपत्ति मनुष्य के जीवन भर की गाढ़ी कमाई व पैतृक स्वाभिमान होती है। जब भू-माफिया, कपटी रिश्तेदार या असामाजिक तत्व जमीन पर अवैध कब्जा कर लेते हैं अथवा रजिस्ट्री में विवाद खड़ा करते हैं, तब माँ पीताम्बरा बगलामुखी का स्तम्भन अनुष्ठान विरोधी के सभी कपटपूर्ण दावों को नष्ट कर आपका न्यायसंगत अधिकार वापस दिलाता है।",
    overviewEn:
      "Real estate and ancestral lands represent generational hard work and dignity. When fraudulent relatives, land mafias, or rival parties assert illegal claims or obstruct property possession, Maa Pitambara Bagalamukhi's Stambhan Hawan immobilizes malicious attempts and restores righteous ownership to the devotee.",
    image: "/mandir/temple-view-sanctum.jpg",
    challengesHi: [
      {
        title: "अवैध कब्जा व भू-माफिया का दखल",
        desc: "दबंगों अथवा असामाजिक तत्वों द्वारा जमीन, दुकान या मकान पर जबरन कब्जा जमा लेना।",
      },
      {
        title: "पैतृक हिस्सेदारी में पारिवारिक कलह",
        desc: "भाइयों अथवा रिश्तेदारों द्वारा जायदाद के बंटवारे में छल, बेईमानी व कानूनी अड़चनें पैदा करना।",
      },
      {
        title: "बिक्री व रजिस्ट्री में लगातार अवरोध",
        desc: "संपत्ति बेचने का प्रयास करने पर ग्राहक का मुकर जाना अथवा रजिस्ट्री पर कोर्ट का स्टे लग जाना।",
      },
      {
        title: "सरकारी नोटिस व पट्टा संबंधी विवाद",
        desc: "प्रशासनिक पेचदगियों, नामांतरण व राजस्व विभाग में वर्षों से अटके हुए मामले।",
      },
    ],
    challengesEn: [
      {
        title: "Illegal Encroachments & Grabbing",
        desc: "Coercive possession or unauthorized boundary disputes imposed by land grabbers.",
      },
      {
        title: "Ancestral Partition Disputes",
        desc: "Deceitful maneuvers by relatives over inheritance and ancestral real estate divisions.",
      },
      {
        title: "Blocked Sales & Judicial Stays",
        desc: "Repeated cancellation of property buyers, court injunctions, and stalled registries.",
      },
      {
        title: "Revenue & Title Mutation Bottlenecks",
        desc: "Years of administrative delays in registry mutation, Patta allotment, and land records.",
      },
    ],
    spiritualCauseHi: [
      {
        title: "मंगल व शनि की चतुर्थ भाव पर अशुभ युति",
        desc: "कुंडली के चौथे भाव (भूमि-भवन भाव) पर क्रूर ग्रहों का प्रभाव संपत्ति संकट उत्पन्न करता है।",
      },
      {
        title: "भूमि दोष व वास्तुजन्य नकारात्मकता",
        desc: "भूमि पर पूर्वजों का असंतोष अथवा पूर्व स्वामित्व का अदृश्य कर्म भार।",
      },
      {
        title: "ईर्ष्या से प्रेरित तांत्रिक अवरोध",
        desc: "संपत्ति की बढ़ती कीमत देखकर पड़ोसियों अथवा विरोधियों द्वारा पैदा की गई बाधाएं।",
      },
      {
        title: "अंगारक योग का दुष्प्रभाव",
        desc: "मंगल-राहु का योग विवादों को उग्र बनाकर पुलिस व कोर्ट तक खींच ले जाता है।",
      },
    ],
    spiritualCauseEn: [
      {
        title: "Mars-Saturn Affliction on 4th House",
        desc: "Malefic planetary focus on the astrological house of land and home causes continuous asset friction.",
      },
      {
        title: "Bhumi Dosha & Negative Geopathic Stress",
        desc: "Unresolved energetic ties or spiritual unrest connected to ancestral grounds.",
      },
      {
        title: "Jealousy & Competitor Blockades",
        desc: "Hostile intentions aiming to devalue your asset or force distress sales.",
      },
      {
        title: "Angarak Planetary Influence",
        desc: "Mars-Rahu conjunction creates volatile disputes, litigation, and police notices.",
      },
    ],
    stambhanActionHi:
      "माँ बगलामुखी की स्तम्भन शक्ति से भू-माफिया और विरोधी की दुर्बुद्धि स्तम्भित होती है, कोर्ट का निर्णय आपके पक्ष में आता है और संपत्ति पर निर्विवाद आधिपत्य स्थापित होता है।",
    stambhanActionEn:
      "Maa Bagalamukhi freezes corrupt claims and opposing deceit, enabling prompt court resolution and peaceful, undisputed land possession.",
    mantraDevanagari:
      "॥ ॐ ह्लीं क्लीं श्रीं बगलामुखि मम् अचल संपत्ति संरक्षय संरक्षय ह्लीं स्वाहा ॥",
    mantraEnglish:
      "Om Hlim Klim Shrim Bagalamukhi Mam Achal Sampatti Samrakshaya Samrakshaya Hlim Swaha",
    mantraMeaningHi:
      "हे भगवती पीताम्बरा! मेरी समस्त अचल संपत्ति, भूमि, गृह व अधिकार की सभी दिशाओं से रक्षा करें और विरोधियों के दुष्ट मंसूबों को तुरंत निष्फल करें।",
    mantraMeaningEn:
      "O Goddess Pitambara! Fortify and protect my land, home, and ancestral assets against all hostile encroachments and deceitful claimants.",
    jaapCount: "31,000 अथवा 51,000 मंत्र जाप",
    bestTimeHi: "मंगलवार या शुक्रवार, सूर्योदय अथवा प्रदोष वेला",
    bestTimeEn: "Tuesday or Friday, Sunrise or Pradosh twilight",
    malaTypeHi: "हल्दी माला अथवा रक्त चंदन माला",
    malaTypeEn: "Consecrated Turmeric Mala or Red Sandalwood Rosary",
    directionHi: "दक्षिण अथवा पूर्व दिशा, पीत वस्त्र धारण",
    directionEn: "Facing South or East, wearing yellow attire",
    anushthanNameHi: "बगलामुखी भूमि विजय एवं संपत्ति रक्षा महाहवन",
    anushthanNameEn: "Bagalamukhi Bhumi Raksha & Property Victory Maha Hawan",
    anushthanDetailsHi: [
      "नलखेड़ा धाम में विवादित भूमि की मिट्टी अथवा खसरा नंबर को रखकर विशेष भूमि शुद्धि संकल्प।",
      "माँ बगलामुखी व क्षेत्रपाल भैरव का संयुक्त षोडशोपचार पूजन।",
      "51,000 संपुटित मंत्रों से अखंड आहुतियां (पीली सरसों, गुग्गल, शहद ও अक्षत)।",
      "भूमि रक्षा कीलन विधि एवं सिद्ध रक्षा यंत्र की प्राण प्रतिष्ठा।",
      "यजमान को अभिमंत्रित पीली सरसों व अभिमंत्रित भूमि कीलें प्रदान करना।",
    ],
    anushthanDetailsEn: [
      "Sacred Vedic Sankalp incorporating property details, survey numbers, or land soil at Nalkheda.",
      "Joint Vedic worship of Maa Bagalamukhi and Kshetrapal Bhairav for boundary defense.",
      "51,000 consecrated mantra oblations using yellow mustard, guggul, honey, and pure ghee.",
      "Consecration of energized Bhumi Raksha Yantra and consecrated boundary nails.",
      "Delivery of energized sanctum mustard seeds and blessed Kavach to the devotee.",
    ],
    benefitsHi: [
      "अवैध कब्जाधारियों की हिम्मत टूटती है और वे स्वयं विवाद से पीछे हटते हैं।",
      "कोर्ट व तहसील में अटकी हुई रजिस्ट्री और नामांतरण की प्रक्रिया सुगम होती है।",
      "जमीन के उचित दाम मिलते हैं और संपत्ति की सुगमता से खरीद-फरोख्त होती है।",
      "परिवार में पैतृक संपत्ति को लेकर चल रहा मनमुटाव शांतिपूर्ण सुलह में बदलता है।",
    ],
    benefitsEn: [
      "Illegal encroachers lose will and retreat voluntarily from occupied land.",
      "Accelerates pending registry mutations, Patta clearances, and revenue approvals.",
      "Attracts genuine buyers with fair valuation without distress compromises.",
      "Transforms bitter family inheritance quarrels into harmonious settlements.",
    ],
    faqs: [
      {
        questionHi: "यदि संपत्ति का मामला कई वर्षों से कोर्ट में अटका हो तो क्या लाभ होगा?",
        questionEn: "Will this remedy help if the property litigation has lingered for decades?",
        answerHi:
          "हाँ, माँ बगलामुखी की शक्ति से विरोधी पक्ष की कपटपूर्ण दलीलें कमजोर पड़ती हैं और वर्षों से लंबित मामलों में त्वरित व अनुकूल फैसला प्राप्त होता है।",
        answerEn:
          "Yes, Maa Bagalamukhi's Stambhan Shakti disintegrates fraudulent counter-claims, breaking protracted deadlocks and accelerating a favorable verdict.",
      },
      {
        questionHi: "क्या अनुष्ठान के बाद भूमि पर कोई विशेष प्रयोग करना होता है?",
        questionEn: "Do devotees need to perform any ritual on the physical land after Hawan?",
        answerHi:
          "पंडित शुभम शर्मा जी द्वारा सिद्ध पीली सरसों व अभिमंत्रित रक्षा कीलें भेजी जाती हैं, जिन्हें विवादित भूमि के चारों कोनों में स्थापित करने से पूर्ण सुरक्षा घेरा बन जाता है।",
        answerEn:
          "Pujya Guruji provides energized sanctum mustard seeds and blessed boundary nails to be positioned at the site corners, creating a continuous protective shield.",
      },
      {
        questionHi: "क्या परिवार के सदस्य को नलखेड़ा उपस्थित होना अनिवार्य है?",
        questionEn: "Is physical presence at Nalkheda required for the property Sankalp?",
        answerHi:
          "यदि आप उपस्थित हो सकें तो अति उत्तम, अन्यथा लाइव वीडियो कॉल द्वारा आपका विधिवत संकल्प कराकर अनुष्ठान पूर्ण कराया जाता है।",
        answerEn:
          "Physical presence is welcome, but live video Sankalp is equally effective and performed with identical scriptural rigour by Guruji.",
      },
    ],
  },

  // 3. False Allegation & Police Matter Protection
  "false-allegation-protection": {
    slug: "false-allegation-protection",
    category: "court",
    categoryNameHi: "कोर्ट-कचहरी व कानूनी विवाद",
    categoryNameEn: "Court & Legal Matters",
    titleHi: "झूठे आरोप व पुलिस केस से मुक्ति अनुष्ठान",
    titleEn: "False Allegation, FIR & Police Matter Protection",
    shortDescHi:
      "षड्यंत्रपूर्वक दर्ज झूठी एफआईआर, पुलिस जांच, सामाजिक कलंक व मानहानि से तत्काल सुरक्षा।",
    shortDescEn:
      "Neutralize fabricated FIRs, malicious police inquiries, social character assassination, and false investigations.",
    heroTagHi: "अन्याय व मिथ्या आरोप शमन • नलखेड़ा सिद्धपीठ",
    heroTagEn: "Shield Against Injustice & Slander • Nalkheda Dham",
    overviewHi:
      "आज के युग में व्यक्तिगत द्वेष, लेन-देन के विवाद अथवा राजनीतिक ईर्ष्या के चलते निर्दोष लोगों पर गंभीर व झूठे पुलिस केस दर्ज करा दिए जाते हैं। इससे जीवन भर की साख, सरकारी नौकरी और मान-प्रतिष्ठा दांव पर लग जाती है। माँ बगलामुखी धर्म की रक्षक हैं; उनका स्तम्भन अनुष्ठान झूठे साक्ष्यों का खंडन कर जांच में निष्पक्षता और न्याय सुनिश्चित करता है।",
    overviewEn:
      "In contemporary society, personal animosity or business conflicts often result in innocent individuals being targeted with fabricated police complaints and malicious FIRs. Maa Bagalamukhi is the ultimate defender of the righteous; Her Stambhan Hawan immobilizes perjured statements, nullifies conspiracies, and brings transparent exoneration.",
    image: "/mandir/baglamukhi-siddha-anusthan.jpg",
    challengesHi: [
      {
        title: "झूठी एफआईआर व गिरफ्तारी का भय",
        desc: "बिना किसी अपराध के झूठी धाराओं में मुकदमा दर्ज होना और गिरफ्तारी की तलवार लटकना।",
      },
      {
        title: "सामाजिक मानहानि व प्रतिष्ठा हनन",
        desc: "समाज, व्यापार व कार्यक्षेत्र में झूठे लांछन लगाकर बदनाम करने का कुत्सित प्रयास।",
      },
      {
        title: "करियर व नौकरी पर संकट",
        desc: "पुलिस वेरिफिकेशन रुकना, निलंबन अथवा सरकारी सेवा चयन में रुकावट आना।",
      },
      {
        title: "असहनीय मानसिक तनाव व भय",
        desc: "परिवार के सदस्यों का भयभीत रहना और आए दिन पुलिसिया पूछताछ का संताप।",
      },
    ],
    challengesEn: [
      {
        title: "Fabricated FIRs & Arrest Threats",
        desc: "Baseless legal clauses invoked by adversaries, creating fear of arrest and interrogation.",
      },
      {
        title: "Character Slander & Reputational Ruin",
        desc: "Concerted smear campaigns aimed at staining integrity in public and professional spheres.",
      },
      {
        title: "Threat to Government Service & Career",
        desc: "Blocked police verification, suspension risks, or jeopardy to job recruitment.",
      },
      {
        title: "Traumatic Psychological Distress",
        desc: "Continuous fear, anxiety, and sleeplessness affecting the entire household.",
      },
    ],
    spiritualCauseHi: [
      {
        title: "राहु-मंगल कृत बंधन योग",
        desc: "कुंडली में जब राहु और मंगल का दुष्प्रभाव लग्न या दशम भाव पर पड़ता है तो झूठे आरोप लगते हैं।",
      },
      {
        title: "षड्यंत्रकारी ग्रहों की अशुभ दशा",
        desc: "केतु अथवा नीच के शनि की अंतर्दशा में व्यक्ति अकारण लांछन व कानूनी उलझन में फंसता है।",
      },
      {
        title: "पूर्व जन्म का ऋण व कर्म दोष",
        desc: "अनपेक्षित कलंक कई बार प्रारब्ध के कर्म दोषों के कारण सामने आता है।",
      },
      {
        title: "शत्रु पक्ष द्वारा रची गई कूटनीति",
        desc: "प्रतिद्वंद्वी द्वारा धन-बल का उपयोग कर प्रशासन को गुमराह करना।",
      },
    ],
    spiritualCauseEn: [
      {
        title: "Rahu-Mars Bandhan Yoga",
        desc: "Planetary affliction in ascendant or 10th house creates false accusations and detention threats.",
      },
      {
        title: "Malefic Ketu / Debilitated Saturn Transits",
        desc: "Triggers sudden unprovoked slander, disciplinary inquiries, and bureaucratic traps.",
      },
      {
        title: "Past-Life Karmic Debts",
        desc: "Unjust public allegations often surface due to unpacified ancestral or past karmic knots.",
      },
      {
        title: "Hostile Weaponization of Influence",
        desc: "Rival adversaries misusing monetary or administrative levers to mislead law enforcement.",
      },
    ],
    stambhanActionHi:
      "माँ बगलामुखी झूठे आरोप लगाने वालों के मुंह पर ताला लगा देती हैं, उनकी झूठी गवाही खंडित हो जाती है और जांच अधिकारी के समक्ष सत्य स्वतः प्रकट हो जाता है।",
    stambhanActionEn:
      "Maa Bagalamukhi silences slanderous tongues, discredits fabricated evidence, and illuminates undeniable truth before investigating authorities.",
    mantraDevanagari:
      "॥ ॐ ह्लीं बगलामुखि सर्वअपवादं नाशय नाशय मम् यशः रक्षय ह्लीं फट् स्वाहा ॥",
    mantraEnglish:
      "Om Hlim Bagalamukhi Sarva-Apavaadam Nashaya Nashaya Mam Yashah Rakshaya Hlim Phat Swaha",
    mantraMeaningHi:
      "हे माँ बगलामुखी! मेरे विरुद्ध लगाए गए समस्त झूठे लांछनों, अपवादों व आरोपों का समूल नाश करें और मेरी कीर्ति, मान व सत्य की रक्षा करें।",
    mantraMeaningEn:
      "O Goddess Bagalamukhi! Annihilate all false scandals, malicious charges, and slander levied against me, preserving my honor and truth.",
    jaapCount: "36,000 अथवा 1,25,000 मंत्र जाप",
    bestTimeHi: "रात्रि कालीन साधना (9 बजे के उपरांत) अथवा ब्राह्म मुहूर्त",
    bestTimeEn: "Nighttime Sadhana (post 9 PM) or Brahma Muhurta",
    malaTypeHi: "हल्दी माला",
    malaTypeEn: "Consecrated Haldi Rosary",
    directionHi: "उत्तर दिशा, पीला आसन",
    directionEn: "Facing North, seated on yellow woolen asana",
    anushthanNameHi: "बगलामुखी मिथ्या दोष निवारण एवं मान रक्षा अनुष्ठान",
    anushthanNameEn: "Bagalamukhi Slander Clearance & Honor Defense Maha Anushthan",
    anushthanDetailsHi: [
      "नलखेड़ा धाम में झूठी शिकायत/एफआईआर की प्रति अथवा विवरण रखकर व्यक्तिगत रक्षा संकल्प।",
      "पीताम्बरा महायंत्र पर 16 प्रकार की विशेष तांत्रिक पूजन सामग्री से अर्चन।",
      "सत्य की विजय हेतु 1.25 लाख संपुटित मंत्रों का अखंड वैदिक जाप।",
      "पीली सरसों, काली मिर्च, नीम की समिधा व गोघृत से शत्रु शमन महाहवन।",
      "अभिमंत्रित पीताम्बरा कवच व रक्षा सूत्र यजमान को प्रेषित।",
    ],
    anushthanDetailsEn: [
      "Personalized protective Sankalp placing FIR/complaint details at the consecrated sanctum altar.",
      "Consecration and worship of Pitambara Maha Yantra with 16 sacred tantric dravyas.",
      "125,000 disciplined mantra chants by Vedic brahmins invoking divine justice.",
      "Shatru Shaman Maha Hawan utilizing yellow mustard, black pepper, neem twigs, and cow ghee.",
      "Blessed Pitambara Kavach and sanctified Raksha thread dispatched to devotee.",
    ],
    benefitsHi: [
      "पुलिस जांच में निर्दोषता सिद्ध होती है और मामला खारिज (Quash/Closure) होता है।",
      "जमानत याचिका पर शीघ्र व अनुकूल निर्णय प्राप्त होता है।",
      "झूठे गवाह मुकर जाते हैं अथवा उनका षड्यंत्र बेनकाब हो जाता है।",
      "खोई हुई प्रतिष्ठा, नौकरी व सामाजिक सम्मान की पूर्ण बहाली।",
    ],
    benefitsEn: [
      "Innocence is verified during official probe, leading to case closure or quashing.",
      "Facilitates smooth bail approval and relief from arrest anxieties.",
      "Hostile witnesses retract falsified testimonies or get exposed.",
      "Fully restores professional standing, clean record, and family dignity.",
    ],
    faqs: [
      {
        questionHi: "क्या एफआईआर दर्ज होने के तुरंत बाद यह अनुष्ठान कराया जा सकता है?",
        questionEn: "Can this ritual be started immediately after an FIR is lodged?",
        answerHi:
          "हाँ, जितना शीघ्र अनुष्ठान प्रारंभ होगा, विरोधी का षड्यंत्र उतना ही जल्दी निष्प्रभावी होगा और जांच में आपके पक्ष में साक्ष्य सामने आएंगे।",
        answerEn:
          "Yes, initiating this ritual promptly halts the momentum of the conspiracy, ensuring that factual truth surfaces before authorities early in the probe.",
      },
      {
        questionHi: "क्या सरकारी नौकरी या पुलिस वेरिफिकेशन में आ रही रुकावट दूर होगी?",
        questionEn: "Will this resolve delays in government job joining or character verification?",
        answerHi:
          "बिल्कुल! मिथ्या आरोप हटने से पुलिस क्लीयरेंस रिपोर्ट (NOC) निर्बाध रूप से जारी होती है और करियर सुरक्षित रहता है।",
        answerEn:
          "Absolutely. Once false imputations are cleared, official police verification and character clearances proceed smoothly without obstacles.",
      },
      {
        questionHi: "क्या यह अनुष्ठान पूर्णतः गोपनीय रहता है?",
        questionEn: "Is this consultation and ritual completely confidential?",
        answerHi:
          "हाँ, पूज्य पंडित शुभम शर्मा जी के सान्निध्य में प्रत्येक यजमान की पहचान व कानूनी विवरण शत-प्रतिशत गोपनीय रखे जाते हैं।",
        answerEn:
          "Yes, your identity, sensitive legal records, and circumstances remain 100% confidential under Guruji's strict sanctum protocol.",
      },
    ],
  },

  // 4. Enemy Removal & Shatru Stambhan
  "enemy-removal": {
    slug: "enemy-removal",
    category: "protection",
    categoryNameHi: "शत्रु बाधा व आत्मरक्षा",
    categoryNameEn: "Enemy & Protection",
    titleHi: "शत्रु स्तम्भन एवं शत्रु बाधा निवारण",
    titleEn: "Enemy Removal & Shatru Stambhan Ritual",
    shortDescHi:
      "गुप्त व प्रत्यक्ष शत्रुओं की दुर्भावना, ईर्ष्या, षड्यंत्र व तांत्रिक द्वेष का माँ बगलामुखी द्वारा पूर्ण स्तम्भन।",
    shortDescEn:
      "Immobilize hidden and overt enemies, hostile conspiracies, and competitive ill-will with consecrated Stambhan Hawan.",
    heroTagHi: "शत्रु शमन व संपूर्ण रक्षा • नलखेड़ा त्रिशक्ति पीठ",
    heroTagEn: "Adversary Neutralization & Total Shield • Nalkheda Peeth",
    overviewHi:
      "जब व्यक्ति जीवन में सफलता और प्रगति की ओर बढ़ता है, तो स्वभाविक रूप से प्रत्यक्ष और अप्रत्यक्ष शत्रु पैदा होते हैं। ये शत्रु पीठ पीछे षड्यंत्र रचकर, सामाजिक छवि को ठेस पहुंचाकर अथवा व्यापार और परिवार को नुकसान पहुंचाने का प्रयास करते हैं। माँ बगलामुखी साक्षात् स्तम्भन की अधिष्ठात्री हैं। उनकी शक्ति शत्रु के अहितकारी संकल्पों को जड़ से स्तम्भित कर साधक को अभेद्य सुरक्षा घेरा प्रदान करती है।",
    overviewEn:
      "Material and spiritual advancement inevitably stirs jealousy from known adversaries and covert rivals. Hostile forces seek to derail progress through workplace backstabbing, reputational damage, or malicious schemes. Maa Bagalamukhi is the ultimate sovereign of Stambhan. Her consecrated energies immobilize enemy ill-intent at the root, encasing the devotee in an impenetrable divine shield.",
    image: "/mandir/puja-shatru-raksha.jpg",
    challengesHi: [
      {
        title: "अदृश्य व गुप्त शत्रुओं का भय",
        desc: "ऐसे लोग जो सामने मित्र बनकर रहते हैं किन्तु पीठ पीछे लगातार नुकसान पहुंचाने की योजना बनाते हैं।",
      },
      {
        title: "व्यापारिक व कार्यक्षेत्र में ईर्ष्या",
        desc: "सहकर्मियों अथवा प्रतिस्पर्धियों द्वारा उच्चाधिकारियों के कान भरना अथवा ग्राहकों को भड़काना।",
      },
      {
        title: "निरंतर हानि व अकारण संकट",
        desc: "अचानक बनते काम बिगड़ने लगना, घर में क्लेश और बार-बार आर्थिक नुकसान होना।",
      },
      {
        title: "शारीरिक व मानसिक भय",
        desc: "शत्रु द्वारा धमकियां मिलना अथवा अनहोनी की आशंका के कारण लगातार भयभीत रहना।",
      },
    ],
    challengesEn: [
      {
        title: "Concealed Foes & Sabotage",
        desc: "Hostile elements feigning friendship while scheming malicious actions behind your back.",
      },
      {
        title: "Professional & Corporate Jealousy",
        desc: "Rivals sabotaging client relationships, instigating superiors, or derailing key career projects.",
      },
      {
        title: "Unexplained Financial Leaks & Domestic Strife",
        desc: "Unnatural derailment of successful opportunities and unexplained friction at home.",
      },
      {
        title: "Psychological Intimidation & Anxiety",
        desc: "Lingering fear of harm, direct threats, or perpetual dread of unexpected crises.",
      },
    ],
    spiritualCauseHi: [
      {
        title: "कुंडली में शत्रु भाव (6th House) का दूषित होना",
        desc: "छठे भाव का स्वामी जब क्रूर ग्रहों के साथ बैठता है तो शत्रुओं की संख्या बढ़ती है।",
      },
      {
        title: "शत्रु कृत नजर दोष व तांत्रिक द्वेष",
        desc: "विरोधी द्वारा कराई गई नकारात्मक क्रियाएं जो साधक की ओरा को क्षीण कर देती हैं।",
      },
      {
        title: "ग्रहों की विपरीत चाल",
        desc: "राहु अथवा मंगल के अशुभ गोचर के समय विरोधियों का प्रभाव अचानक बढ़ जाता है।",
      },
      {
        title: "आध्यात्मिक कवच की कमी",
        desc: "नियमित जप व सुरक्षा मंत्र के अभाव में ईर्ष्या की किरणें सीधे प्रभावित करती हैं।",
      },
    ],
    spiritualCauseEn: [
      {
        title: "Afflicted 6th House (Shatru Bhava)",
        desc: "Malefic connections to the sixth house trigger unprovoked enmities and hostile rivalry.",
      },
      {
        title: "Evil Gaze & Subtle Tantric Envy",
        desc: "Negative projections by competitors weakening your energetic aura and mental fortitude.",
      },
      {
        title: "Adverse Transit of Mars and Rahu",
        desc: "Aggressive planetary transits embolden opponents to launch coordinated attacks.",
      },
      {
        title: "Absence of Energized Spiritual Shield",
        desc: "Vulnerability arising from unprotected personal auric boundaries against toxic projections.",
      },
    ],
    stambhanActionHi:
      "माँ बगलामुखी शत्रु की वाणी, बुद्धि, हाथ और पैर की गति को स्तम्भित कर देती हैं। शत्रु चाहकर भी आपका बाल भी बांका नहीं कर पाता और स्वतः शांत हो जाता है।",
    stambhanActionEn:
      "Maa Bagalamukhi paralyzes the intellect, speech, and harmful intent of the adversary, neutralizing aggressive plots while shielding you completely.",
    mantraDevanagari:
      "॥ ॐ ह्लीं बगलामुखि सर्वशत्रूणां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥",
    mantraEnglish:
      "Om Hlim Bagalamukhi Sarva-Shatrunam Vacham Mukham Padam Stambhaya Jihvam Kilaya Buddhim Vinashaya Hlim Om Swaha",
    mantraMeaningHi:
      "हे देवी बगलामुखी! मेरे समस्त गुप्त व प्रकट शत्रुओं की शक्ति, वाणी और बुद्धि को स्तम्भित कर दें। उनका शमन कर मुझे अभय प्रदान करें।",
    mantraMeaningEn:
      "O Goddess Bagalamukhi! Freeze the voice, intellect, and harmful actions of all adversaries. Disarm their hostility and bless me with fearlessness.",
    jaapCount: "36,000 अथवा 1,25,000 संपुटित मंत्र जाप",
    bestTimeHi: "निशीथ काल अथवा संध्या वेला (मंगलवार/शनिवार/अमावस्या)",
    bestTimeEn: "Nishitha Kaal (Midnight) or Twilight (Tuesday/Saturday/Amavasya)",
    malaTypeHi: "हल्दी माला अथवा काली हकीक माला",
    malaTypeEn: "Consecrated Turmeric Mala or Energized Black Agate (Haqeeq) Mala",
    directionHi: "दक्षिण अथवा उत्तर दिशा",
    directionEn: "Facing South or North, seated on consecrated yellow asana",
    anushthanNameHi: "बगलामुखी सर्व शत्रु संहारक एवं स्तम्भन महाअनुष्ठान",
    anushthanNameEn: "Bagalamukhi Shatru Stambhan & Complete Protection Anushthan",
    anushthanDetailsHi: [
      "नलखेड़ा सिद्ध पीठ में यजमान के नाम, गोत्र व शत्रुओं के नाम (यदि ज्ञात हों) से संकल्प।",
      "पीताम्बरा महायंत्र पर रक्षा विधान व भैरव पूजन।",
      "1,25,000 वैदिक मंत्रों का अखंड जाप योग्य ब्राह्मणों द्वारा।",
      "पीली सरसों, नीम के पत्ते, गिलोय, काले तिल व घृत से महाहवन।",
      "सिद्ध बगलामुखी रक्षा कवच व भस्म यजमान को प्रेषित।",
    ],
    anushthanDetailsEn: [
      "Personalized Vedic Sankalp at Nalkheda Dham citing devotee details and known/unknown threats.",
      "Energizing the Bagalamukhi Yantra with Kshetrapal Bhairav worship for defensive containment.",
      "125,000 disciplined chants performed by ascetic Vedic scholars.",
      "Specialized Hawan with yellow mustard, neem samidha, Giloy, black sesame, and cow ghee.",
      "Energized Bagalamukhi Raksha Kavach and sacred ash dispatched to devotee.",
    ],
    benefitsHi: [
      "शत्रु अपनी योजनाओं में विफल होकर स्वयं शांत या मित्रवत हो जाता है।",
      "कार्यक्षेत्र व समाज में चल रहे षड्यंत्रों का पर्दाफाश होता है।",
      "अकारण होने वाले नुकसान व मानसिक भय से सदा के लिए मुक्ति।",
      "जीवन में आत्मविश्वास, मान-सम्मान और प्रभुत्व की पुनर्स्थापना।",
    ],
    benefitsEn: [
      "Adversaries lose capacity for hostility and voluntarily withdraw.",
      "Workplace and social conspiracies dissolve without harming your trajectory.",
      "Permanent relief from psychological paranoia, intimidation, and unwarranted losses.",
      "Restoration of authority, charisma, dignity, and calm self-assurance.",
    ],
    faqs: [
      {
        questionHi: "यदि मुझे अपने शत्रु का नाम पता न हो तो क्या यह अनुष्ठान संभव है?",
        questionEn: "Can this ritual be performed if I do not know the exact identity of my enemy?",
        answerHi:
          "हाँ, अनुष्ठान में 'अज्ञात शत्रु' (सभी गुप्त शत्रुओं) के शमन का संकल्प लिया जाता है। माँ की शक्ति उस प्रत्येक व्यक्ति की दुर्भावना को निष्प्रभावी कर देती है जो आपका अहित चाहता है।",
        answerEn:
          "Yes. The Sankalp specifically incorporates 'Agyaat Shatru' (unknown enemies), immobilizing any concealed individual or network actively plotting your misfortune.",
      },
      {
        questionHi: "क्या यह अनुष्ठान करने से मुझे कोई दोष या पाप तो नहीं लगेगा?",
        questionEn: "Will performing this ritual incur any negative karmic consequence or sin?",
        answerHi:
          "कदापि नहीं! यह आत्मरक्षा और अधर्म के शमन का शास्त्रोक्त अनुष्ठान है। नलखेड़ा में केवल सात्विक वैदिक पद्धति से ही अनुष्ठान किए जाते हैं।",
        answerEn:
          "Never. This is a righteous scriptural remedy for self-preservation and justice, conducted strictly through pristine Vedic-Tantric methodologies at Nalkheda Dham.",
      },
      {
        questionHi: "अनुष्ठान के बाद मुझे क्या सावधानियां रखनी चाहिए?",
        questionEn: "What precautions should be observed following the Maha Hawan?",
        answerHi:
          "पंडित जी द्वारा दिए गए रक्षा कवच को धारण करें तथा प्रतिदिन 11 बार मूल मंत्र का मानसिक जप करें। सात्विक आचरण बनाए रखें।",
        answerEn:
          "Wear the energized protective Kavach received from the temple and recite 11 counts of the mool mantra daily while sustaining an honorable, balanced lifestyle.",
      },
    ],
  },

  // 5. Evil Eye (Nazar Dosh) Removal
  "evil-eye-nazar-dosh-removal": {
    slug: "evil-eye-nazar-dosh-removal",
    category: "protection",
    categoryNameHi: "शत्रु बाधा व आत्मरक्षा",
    categoryNameEn: "Enemy & Spiritual Protection",
    titleHi: "बुरी नज़र व नज़र दोष निवारण अनुष्ठान",
    titleEn: "Evil Eye (Nazar Dosh) Clearance & Auric Purification",
    shortDescHi:
      "परिवार, बच्चों, व्यवसाय व स्वास्थ्य पर लगी तीव्र बुरी नज़र, ईर्ष्या व नकारात्मक दृष्टि का समूल नाश।",
    shortDescEn:
      "Dispel intense toxic gazes, envy-driven vibrations, and recurring evil eye afflictions affecting health and prosperity.",
    heroTagHi: "नज़र दोष व ओरा शुद्धि • नलखेड़ा धाम",
    heroTagEn: "Evil Eye Clearance & Auric Shield • Nalkheda Sanctum",
    overviewHi:
      "शास्त्रों में कहा गया है—'पत्थर को भी फाड़ देती है बुरी नज़र'। जब किसी व्यक्ति, नवजात शिशु, सुंदर गृह अथवा फलते-फूलते व्यापार पर ईर्ष्यालु व्यक्तियों की दृष्टि पड़ती है, तो बिना किसी कारण के अचानक सब कुछ बिखरने लगता है। हंसता-खेलता परिवार बीमार रहने लगता है और व्यापार ठप्प हो जाता है। माँ बगलामुखी की दिव्य पीत आभा समस्त दूषित दृष्टियों को भस्म कर सकारात्मक सुरक्षा घेरा स्थापित करती है।",
    overviewEn:
      "Vedic lore states that intense envious gaze possesses the destructive capacity to split solid stone. When blossoming commercial ventures, cheerful homes, or healthy children attract toxic jealousy, vitality mysteriously collapses. Maa Bagalamukhi's radiant golden light shatters harmful energetic projections, purifying the auric field and restoring auspicious harmony.",
    image: "/mandir/baglamukhi-divine-darshan.jpg",
    challengesHi: [
      {
        title: "बच्चों व परिजनों का बार-बार बीमार पड़ना",
        desc: "चिकित्सीय जांच सामान्य आने के बाद भी लगातार कमजोरी, चिड़चिड़ापन व अज्ञात बुखार रहना।",
      },
      {
        title: "अच्छे-भले व्यापार का अचानक ठप्प होना",
        desc: "दुकान अथवा ऑफिस में ग्राहकों का अचानक आना बंद हो जाना और नुकसान होना।",
      },
      {
        title: "घर में भारीपन व कलह का वातावरण",
        desc: "घर में प्रवेश करते ही सिर भारी होना, अकारण क्रोध आना और परिजनों में झगड़ा होना।",
      },
      {
        title: "अकारण वाहन दुर्घटनाएं व नुकसान",
        desc: "नई गाड़ी अथवा नए मकान के बाद लगातार आर्थिक नुकसान व अनहोनी घटनाएं होना।",
      },
    ],
    challengesEn: [
      {
        title: "Recurrent Illness Despite Medical Care",
        desc: "Unexplained exhaustion, chronic irritability, or pediatric fevers with completely normal medical reports.",
      },
      {
        title: "Sudden Collapse of Flourishing Business",
        desc: "A thriving storefront or consultation practice experiencing sudden dry spells in footfall and orders.",
      },
      {
        title: "Oppressive Domestic Heaviness & Bickering",
        desc: "Feeling persistent heaviness upon entering the house, sudden anger surges, and incessant family friction.",
      },
      {
        title: "Minor Accidents & Asset Losses",
        desc: "Uncanny recurring damages to newly bought vehicles or unexpected household repair crises.",
      },
    ],
    spiritualCauseHi: [
      {
        title: "लग्न व चंद्रमा का राहु से पीड़ित होना",
        desc: "कुंडली में जब चंद्रमा कमजोर होता है तो व्यक्ति बुरी नजर व नकारात्मक ऊर्जा को शीघ्र आकर्षित करता है।",
      },
      {
        title: "दृष्टि दोष एवं ईर्ष्या का तीव्र प्रभाव",
        desc: "किसी के द्वारा मन में उपजे अति तीव्र द्वेष या लोभ का सूक्ष्म तरंगों द्वारा आघात।",
      },
      {
        title: "वास्तु ऊर्जा में छेद (Energetic Breach)",
        desc: "घर के मुख्य द्वार पर सुरक्षा कवच न होने से बाह्य नकारात्मक तरंगें भीतर प्रवेश कर जाती हैं।",
      },
      {
        title: "सकारात्मक ओरा का कमजोर पड़ना",
        desc: "मानसिक तनाव व अनियमित दिनचर्या से व्यक्तिगत सुरक्षा ओरा का क्षीण होना।",
      },
    ],
    spiritualCauseEn: [
      {
        title: "Moon & Ascendant Affliction by Rahu",
        desc: "A sensitive or afflicted natal Moon leaves the subconscious aura vulnerable to psychic projections.",
      },
      {
        title: "Intense Toxic Drishti Dosh",
        desc: "Vicious envious intentions emitted by rivals impacting vulnerable energetic junctures.",
      },
      {
        title: "Energetic Leak at Threshold (Vastu Breach)",
        desc: "Absence of protective energetic seals at entryways permitting hostile environmental residue to enter.",
      },
      {
        title: "Weakened Auric Biomagnetic Field",
        desc: "High stress and exhaustion weakening the natural biomagnetic protective matrix.",
      },
    ],
    stambhanActionHi:
      "माँ बगलामुखी की प्रचण्ड ज्योति ईर्ष्या व नजर दोष की नकारात्मक तरंगों को तुरंत सोखकर भस्म कर देती है और यजमान के चारों ओर अभेद्य पीताम्बरी सुरक्षा चक्र बना देती है।",
    stambhanActionEn:
      "Maa Bagalamukhi's radiant golden light incinerates envious psychic frequencies, sealing the devotee's physical and auric boundaries in an impregnable mantle.",
    mantraDevanagari:
      "॥ ॐ ह्लीं बगलामुखि सर्व-कुदृष्टिं स्तम्भय स्तम्भय मम् गृहं रक्षय ह्लीं स्वाहा ॥",
    mantraEnglish:
      "Om Hlim Bagalamukhi Sarva-Kudrishtim Stambhaya Stambhaya Mam Griham Rakshaya Hlim Swaha",
    mantraMeaningHi:
      "हे देवी बगलामुखी! मुझ पर, मेरे परिवार व व्यवसाय पर लगी समस्त बुरी नजर व ईर्ष्या को स्तम्भित कर नष्ट करें और हमारे घर की रक्षा करें।",
    mantraMeaningEn:
      "O Goddess Bagalamukhi! Freeze and dissolve all toxic gazes, evil eye afflictions, and envious projections targeting my home, family, and enterprise.",
    jaapCount: "21,000 अथवा 36,000 मंत्र जाप",
    bestTimeHi: "सूर्यास्त काल अथवा मंगलवार/शनिवार दोपहर 12 बजे",
    bestTimeEn: "Sunset Twilight or Tuesday/Saturday at solar noon",
    malaTypeHi: "हल्दी माला अथवा स्फटिक माला",
    malaTypeEn: "Consecrated Turmeric Mala or Pure Quartz (Sphatik) Mala",
    directionHi: "पूर्व दिशा, पीला वस्त्र व पीला तिलक",
    directionEn: "Facing East, adorned with yellow clothing and turmeric tilak",
    anushthanNameHi: "बगलामुखी दिव्य दृष्टि दोष एवं नज़र निवारण महाहवन",
    anushthanNameEn: "Bagalamukhi Drishti Dosh & Evil Eye Purification Hawan",
    anushthanDetailsHi: [
      "नलखेड़ा धाम में यजमान, परिवार के सदस्यों अथवा व्यापारिक प्रतिष्ठान के नाम से विशेष शुद्धि संकल्प।",
      "पीली सरसों, फिटकरी, काले तिल व कपूर द्वारा ओरा शोधन तांत्रिक क्रिया।",
      "36,000 संपुटित बगलामुखी मंत्रों से नजर दोष निवारक अखंड आहुतियां।",
      "सिद्ध पीताम्बरा नजर रक्षा ताबीज एवं द्वार रक्षा यंत्र की प्राण प्रतिष्ठा।",
      "अभिमंत्रित पीली सरसों व रक्षा भस्म यजमान के पते पर प्रेषित।",
    ],
    anushthanDetailsEn: [
      "Personalized auric purification Sankalp invoking devotee and family members at Nalkheda Sanctum.",
      "Tantric auric cleansing utilizing consecrated yellow mustard, alum crystals, black sesame, and camphor.",
      "36,000 sanctified mantra oblations targeted specifically at dispersing negative projections.",
      "Consecration of blessed Pitambara Nazar Kavach and energized threshold doorway yantra.",
      "Blessed sanctum yellow mustard and sacred Hawan Bhasma dispatched to devotee.",
    ],
    benefitsHi: [
      "घर का भारीपन समाप्त होता है और तुरंत सकारात्मक शांति व प्रफुल्लता लौटती है।",
      "बच्चों का चिड़चिड़ापन व बार-बार बीमार पड़ना पूरी तरह बंद होता है।",
      "दुकान, फैक्ट्री अथवा व्यापार में ग्राहकों का आवागमन और बिक्री पुनः तेज होती है।",
      "परिवार के सदस्यों में प्रेम, परस्पर सौहार्द और खुशहाली का संचार होता है।",
    ],
    benefitsEn: [
      "Household heaviness lifts immediately, replaced by peaceful spiritual serenity.",
      "Children regain appetite, tranquil sleep, and emotional joy.",
      "Restores commercial vibrancy, client footfall, and steady financial flow.",
      "Harmonizes domestic interactions, washing away friction and irrational irritability.",
    ],
    faqs: [
      {
        questionHi: "क्या यह अनुष्ठान दुकान या व्यवसाय पर लगी नजर के लिए भी कराया जा सकता है?",
        questionEn: "Can this ritual be performed specifically for a retail shop or factory?",
        answerHi:
          "हाँ, व्यापार स्थल के नाम से संकल्प लेकर अनुष्ठान किया जाता है और वहां स्थापित करने हेतु सिद्ध बगलामुखी व्यापार रक्षा यंत्र प्रदान किया जाता है।",
        answerEn:
          "Yes. The Sankalp is dedicated directly to your business enterprise, and a consecrated Vyapar Raksha Yantra is provided for installation at your premises.",
      },
      {
        questionHi: "नजर उतरने का प्रभाव कितने दिन में महसूस होता है?",
        questionEn: "How quickly do devotees feel relief once the ritual is complete?",
        answerHi:
          "अनुष्ठान के तुरंत बाद (24 से 48 घंटे के भीतर) घर और मन में हल्कापन महसूस होता है तथा वातावरण सकारात्मक बन जाता है।",
        answerEn:
          "Relief is usually experienced within 24 to 48 hours; household tension noticeably eases and mental lightness returns.",
      },
      {
        questionHi: "क्या यह अनुष्ठान बार-बार कराने की आवश्यकता होती है?",
        questionEn: "Does this evil eye clearance need to be repeated frequently?",
        answerHi:
          "नहीं, अनुष्ठान के साथ प्रदान किया जाने वाला बगलामुखी रक्षा कवच दीर्घकाल तक स्थायी सुरक्षा प्रदान करता है।",
        answerEn:
          "No. The energized Pitambara Kavach sent from Nalkheda provides long-term auric immunity against envious projections.",
      },
    ],
  },

  // 6. Black Magic & Negative Energy Removal
  "black-magic-removal": {
    slug: "black-magic-removal",
    category: "protection",
    categoryNameHi: "शत्रु बाधा व आत्मरक्षा",
    categoryNameEn: "Enemy & Spiritual Protection",
    titleHi: "तंत्र बाधा व नकारात्मक ऊर्जा निवारण अनुष्ठान",
    titleEn: "Black Magic, Tantra Badha & Negative Energy Neutralization",
    shortDescHi:
      "शत्रु द्वारा किए गए मारण-मोहन-उच्चाटन, मूठ, प्रेत बाधा व तांत्रिक अभिचार का पूर्ण विनाश।",
    shortDescEn:
      "Neutralize black magic afflictions, evil entity interferences, occult curses, and psychic sabotage with Nalkheda Tantra Shaman.",
    heroTagHi: "तांत्रिक अभिचार शमन • नलखेड़ा त्रिशक्ति धाम",
    heroTagEn: "Tantric Affliction Destruction • Nalkheda Sanctum",
    overviewHi:
      "तंत्र शास्त्र में माँ बगलामुखी को समस्त तांत्रिक अभिचारों (अभिचार कर्म, मूठ, उच्चाटन, स्तंभन व तंत्र दोष) की परम संहारिणी माना गया है। जब कोई दुष्ट शत्रु ईर्ष्या अथवा बदला लेने के उद्देश्य से किसी निर्दोष परिवार पर तांत्रिक क्रियाएं करवा देता है, तो घर में अकाल मृत्यु, पागलपन, भयानक सपने और सर्वनाश की स्थिति बन जाती है। माँ पीताम्बरा का महाहवन उस क्रिया को तुरंत पलट (उल्टा प्रभाव) देता है और पीड़ित को नवजीवन प्रदान करता है।",
    overviewEn:
      "In esoteric Tantra, Maa Bagalamukhi is hailed as the supreme antidote to all hostile occult practices, black magic, curses, and negative entity disturbances. When adversaries resort to covert sorcery to ruin health, career, or family lineage, ordinary remedies fail. Maa Bagalamukhi's Stambhan Hawan dissolves demonic bonds, reversing malefic energy back to its source and shielding the devotee.",
    image: "/mandir/baglamukhi-siddha-anusthan.jpg",
    challengesHi: [
      {
        title: "घर में अजीब घटनाएं व भयानक स्वप्न",
        desc: "रात में अचानक नींद खुलना, किसी के चलने की आवाजें, भयानक चेहरे दिखना और दम घुटना।",
      },
      {
        title: "अकारण गंभीर व असाध्य रोग",
        desc: "शरीर सूखते जाना, सभी मेडिकल रिपोर्ट्स सामान्य आना फिर भी इलाज का कोई असर न होना।",
      },
      {
        title: "व्यवसाय व बुद्धि का स्तम्भन",
        desc: "सोचने-समझने की शक्ति खत्म होना, सही निर्णय न ले पाना और सब कुछ बर्बाद होते देखना।",
      },
      {
        title: "अकाल मृत्यु व दुर्घटना का लगातार साया",
        desc: "परिवार में बार-बार अकाल मृत्यु होना अथवा गंभीर दुर्घटनाओं का सिलसिला चलना।",
      },
    ],
    challengesEn: [
      {
        title: "Paranormal Disturbances & Sleep Terrors",
        desc: "Awakening with choking sensations, hearing unexplained pacing sounds, and vivid horrifying nightmares.",
      },
      {
        title: "Phantom Illnesses Defying Modern Medicine",
        desc: "Progressive physical wasting and chronic debilitating pain while all hospital diagnostics return completely normal.",
      },
      {
        title: "Intellectual Paralysis & Total Ruin",
        desc: "Complete loss of clarity, inability to execute basic decisions, and feeling trapped in a downward spiral.",
      },
      {
        title: "Perpetual Danger of Untimely Catastrophe",
        desc: "Uncanny recurring accidents and sudden catastrophic events menacing the family household.",
      },
    ],
    spiritualCauseHi: [
      {
        title: "अभिचार कर्म व मूठ प्रयोग",
        desc: "शत्रु द्वारा किसी अघोरी अथवा तांत्रिक के माध्यम से कराया गया दुर्भावनापूर्ण तंत्र प्रहार।",
      },
      {
        title: "अष्टम भाव में राहु-केतु व प्रेत बाधा योग",
        desc: "जन्म पत्रिका के आठवें भाव पर अशुभ छाया ग्रहों का प्रभाव व्यक्ति को तंत्र बाधा के प्रति संवेदनशील बनाता है।",
      },
      {
        title: "स्थान दोष व श्मशानी ऊर्जा का प्रभाव",
        desc: "किसी अशुद्ध अथवा अभिशप्त भूमि पर निवास या कार्य करने से नकारात्मक ऊर्जा का चिपक जाना।",
      },
      {
        title: "कुल देवता अथवा पितृ बंधन",
        desc: "शत्रु द्वारा कुल देवी-देवता का बंधन करा देने से परिवार की सुरक्षा दीवार ढह जाना।",
      },
    ],
    spiritualCauseEn: [
      {
        title: "Hostile Abhivichara & Occult Sabotage",
        desc: "Malicious dark rituals commissioned by jealous adversaries to derail your lineage.",
      },
      {
        title: "Afflictions in the 8th House by Shadow Planets",
        desc: "Rahu-Ketu transit through vulnerable sectors, exposing spiritual defenses to energetic attacks.",
      },
      {
        title: "Haunted Geopathic / Necrotic Residue",
        desc: "Residing on land with historical trauma or unhallowed ground attracting dense low-vibrational entities.",
      },
      {
        title: "Binding of Ancestral & Deity Protections",
        desc: "Occult tactics attempting to bind family Kuldevta protections, stripping the home of divine shields.",
      },
    ],
    stambhanActionHi:
      "माँ बगलामुखी की दिव्य शक्ति समस्त प्रेत, पिशाच, मूठ और तांत्रिक क्रियाओं को उसी क्षण स्तम्भित कर भस्म कर देती है और प्रहार को वापस शत्रु की ओर मोड़ देती है।",
    stambhanActionEn:
      "Maa Bagalamukhi's supreme flame vaporizes dark entities, spells, and occult curses on contact, reflecting hostile energies harmlessly away from the devotee.",
    mantraDevanagari:
      "॥ ॐ ह्लीं बगलामुखि सर्व-अभिचार-दोषान् नाशय नाशय मम् प्राणान् रक्षय ह्लीं फट् स्वाहा ॥",
    mantraEnglish:
      "Om Hlim Bagalamukhi Sarva-Abhichara-Doshan Nashaya Nashaya Mam Pranan Rakshaya Hlim Phat Swaha",
    mantraMeaningHi:
      "हे सर्वविनाशिनी माँ बगलामुखी! मुझ पर किए गए समस्त तांत्रिक अभिचार, मूठ व नकारात्मक शक्तियों का नाश करें और मेरे प्राणों व परिवार की रक्षा करें।",
    mantraMeaningEn:
      "O Supreme Bagalamukhi! Annihilate all occult black magic curses, psychic hooks, and evil entities; preserve my vital breath and protect my household.",
    jaapCount: "51,000 अथवा 1,25,000 संपुटित मंत्र जाप",
    bestTimeHi: "निशीथ काल (मध्यरात्रि) अथवा चतुर्दशी/अमावस्या",
    bestTimeEn: "Midnight (Nishitha Kaal) or Chaturdashi/Amavasya",
    malaTypeHi: "काली हकीक माला अथवा रुद्राक्ष माला",
    malaTypeEn: "Consecrated Black Agate (Haqeeq) or Panchmukhi Rudraksha Mala",
    directionHi: "दक्षिण दिशा, लाल अथवा पीला आसन",
    directionEn: "Facing South, seated on yellow or crimson woolen asana",
    anushthanNameHi: "बगलामुखी सर्व तंत्र बाधा विदारक महाअनुष्ठान एवं महाहवन",
    anushthanNameEn: "Bagalamukhi Tantra Badha Clearance & Occult Reversal Hawan",
    anushthanDetailsHi: [
      "नलखेड़ा धाम के अखंड धूने के समीप यजमान के नाम व गोत्र से विशेष प्राण रक्षा संकल्प।",
      "भैरव, बटुक भैरव व माँ बगलामुखी का संयुक्त तांत्रिक कीलन व बंधन मुक्ति अनुष्ठान।",
      "1,25,000 वैदिक संपुटित मंत्रों से अखंड जाप एवं महामृत्युंजय संपुट।",
      "पीली सरसों, गुग्गल, लोबान, नीम, जायफल व गौघृत की 1008 विशेष आहुतियां।",
      "सिद्ध अभिमंत्रित बगलामुखी महाकवच, रक्षा ताबीज व भस्म प्रेषण।",
    ],
    anushthanDetailsEn: [
      "Solemn Vedic Sankalp performed beside the timeless Akhand Dhuna fire at Nalkheda Dham.",
      "Tantric unbinding ritual invoking Kshetrapal Bhairav and Maa Bagalamukhi to sever dark cords.",
      "125,000 continuous mantra chants interlaced with Mahamrityunjaya protective verses.",
      "1008 specialized oblations using consecrated yellow mustard, guggul, loban, nutmeg, and ghee.",
      "Dispatch of energized Pitambara Maha Kavach, protective amulet, and sanctum Bhasma.",
    ],
    benefitsHi: [
      "घर से नकारात्मक शक्तियों, भयानक सपनों व असामान्य आवाजों का तुरंत अंत होता है।",
      "बीमार व्यक्ति के स्वास्थ्य में चमत्कारी सुधार प्रारंभ हो जाता है और दवाएं असर करने लगती हैं।",
      "व्यवसाय और सोचने-समझने की शक्ति पूरी तरह खुल जाती है।",
      "घर में माँ भगवती की कृपा, सुख-शांति और दीर्घायु का वास होता है।",
    ],
    benefitsEn: [
      "Immediate termination of paranormal terrors, suffocating nightmares, and domestic oppression.",
      "Miraculous turnaround in afflicted individual's health; medicines begin working normally.",
      "Mental fog dissolves; intellect, creativity, and financial channels reopen.",
      "Permanent sanctification of the premises under the divine grace of the Golden Mother.",
    ],
    faqs: [
      {
        questionHi: "क्या तंत्र बाधा कटने के बाद दोबारा लगने का खतरा रहता है?",
        questionEn: "Can the negative affliction return after this ritual is completed?",
        answerHi:
          "नहीं, नलखेड़ा धाम में अनुष्ठान के साथ सिद्ध बगलामुखी सुरक्षा कीलन किया जाता है और यजमान को सिद्ध कवच दिया जाता है जिससे आजीवन अभेद्य सुरक्षा बनी रहती है।",
        answerEn:
          "No. The ceremony includes a permanent energetic seal (Keelan) and delivery of a consecrated Kavach that creates lifelong auric immunity.",
      },
      {
        questionHi: "क्या पीड़ित व्यक्ति का नलखेड़ा धाम आना आवश्यक है?",
        questionEn: "Is it mandatory for the affected person to physically travel to Nalkheda?",
        answerHi:
          "यदि पीड़ित चलने-फिरने में असमर्थ है, तो परिजन उनकी फोटो व नाम-गोत्र से लाइव वीडियो संकल्प करा सकते हैं। परिणाम शत-प्रतिशत समान मिलता है।",
        answerEn:
          "If the afflicted individual is too weak to travel, family members can sponsor the Sankalp using their photograph and Gotra via live video call with equal potency.",
      },
      {
        questionHi: "क्या यह क्रिया सात्विक पद्धति से की जाती है?",
        questionEn: "Is this ritual conducted through pure, safe Vedic-Tantric methods?",
        answerHi:
          "हाँ, पूज्य पंडित शुभम शर्मा जी पूर्णतः शास्त्रोक्त, सात्विक एवं वैदिक तंत्र के अनुसार यह अनुष्ठान करते हैं। इसमें किसी भी प्रकार की तामसिक वस्तु का प्रयोग नहीं होता।",
        answerEn:
          "Yes. Pujya Pandit Shubham Sharma Ji conducts all rituals exclusively through scriptural Vedic Tantra; no tamasic substances are ever employed.",
      },
    ],
  },

  // 7. Government Job Selection & Success
  "government-job-success": {
    slug: "government-job-success",
    category: "career",
    categoryNameHi: "कैरियर, नौकरी व विवाह",
    categoryNameEn: "Career & Success",
    titleHi: "सरकारी नौकरी में चयन व पद प्राप्ति अनुष्ठान",
    titleEn: "Government Job Selection & High Office Success",
    shortDescHi:
      "UPSC, राज्य लोक सेवा, बैंकिंग, पुलिस अथवा रक्षा सेवा में अंतिम चयन व प्रतियोगी परीक्षाओं में विजय।",
    shortDescEn:
      "Secure selection in civil services, competitive exams, interviews, and prestigious public office roles.",
    heroTagHi: "राजयोग व पद प्राप्ति • नलखेड़ा शक्तिपीठ",
    heroTagEn: "Rajyoga & Administrative Success • Nalkheda Peeth",
    overviewHi:
      "वर्षों की कठोर मेहनत, रात-दिन की पढ़ाई के उपरांत भी यदि साक्षात्कार (Interview) अथवा मेरिट लिस्ट में मात्र 1-2 अंकों से असफलता मिल रही हो, तो यह केवल परिश्रम की कमी नहीं, अपितु भाग्य और ग्रह बाधा का संकेत है। महाभारत काल में पांडवों ने राजपद पुनः प्राप्त करने हेतु नलखेड़ा में ही माँ बगलामुखी की आराधना की थी। पूज्य पंडित शुभम शर्मा जी के निर्देशन में बगलामुखी अनुष्ठान परीक्षा में तीक्ष्ण बुद्धि और साक्षात्कार में वाक-सिद्धि प्रदान करता है।",
    overviewEn:
      "Years of rigorous preparation often culminate in heartbreaking heartbreak when candidates miss the final merit list by fractions of a mark. In the epic Mahabharata, King Yudhishthira invoked Maa Bagalamukhi at Nalkheda to reclaim his rightful sovereign kingdom. Under Pujya Guruji's auspices, this Vedic ritual sharpens memory and grants authoritative eloquence during high-stakes selection boards.",
    image: "/mandir/mandirInsideOverview.png",
    challengesHi: [
      {
        title: "साक्षात्कार (Interview) में बार-बार छंटना",
        desc: "लिखित परीक्षा उत्तीर्ण करने के बाद भी इंटरव्यू बोर्ड के समक्ष आत्मविश्वास डगमगाना और असफलता मिलना।",
      },
      {
        title: "1-2 अंकों से मेरिट लिस्ट से बाहर होना",
        desc: "अंतिम चयन सूची में नाम न आना और वर्षों की मेहनत व्यर्थ होने का असहनीय संताप।",
      },
      {
        title: "प्रतियोगी परीक्षा में लगातार विलंब व अवरोध",
        desc: "पेपर लीक, कोर्ट केस अथवा भर्ती प्रक्रिया का सालों-साल अटक जाना।",
      },
      {
        title: "पदोन्नति (Promotion) में बाधा व षड्यंत्र",
        desc: "वरिष्ठता होने के बावजूद कनिष्ठों को पदोन्नत कर देना और आपकी अनदेखी होना।",
      },
    ],
    challengesEn: [
      {
        title: "Repeated Failure at the Final Interview Stage",
        desc: "Clearing demanding written examinations only to face unexpected rejection before interview boards.",
      },
      {
        title: "Missing the Merit Cutoff by Fractions",
        desc: "Missing selection by minuscule margins repeatedly despite supreme intellectual preparation.",
      },
      {
        title: "Recruitment Scams & Administrative Stalls",
        desc: "Examinations held up in litigation, paper leak cancellations, or procedural bureaucratic delays.",
      },
      {
        title: "Blocked Promotions & Workplace Politics",
        desc: "Superiors overlooking legitimate seniority to promote juniors due to hidden office lobbying.",
      },
    ],
    spiritualCauseHi: [
      {
        title: "सूर्य व गुरु की निर्बल स्थिति",
        desc: "सरकारी सेवा व राजपद का कारक सूर्य होता है। सूर्य जब राहु या शनि से पीड़ित हो तो सरकारी नौकरी में बाधा आती है।",
      },
      {
        title: "दशम भाव (कर्म भाव) में ग्रहण अथवा दोष",
        desc: "करियर भाव में पाप ग्रहों का प्रभाव पद प्राप्ति में अंतिम क्षण में रुकावट पैदा करता है।",
      },
      {
        title: "भाग्य भाव (9th House) का सुप्त होना",
        desc: "भाग्य का साथ न मिलने से शत-प्रतिशत प्रयास भी शून्य परिणाम में बदल जाता है।",
      },
      {
        title: "विरोधी परीक्षार्थियों की ईर्ष्या व नजर दोष",
        desc: "मेधावी छात्रों की एकाग्रता व स्मरण शक्ति पर लगने वाली सूक्ष्म नजर।",
      },
    ],
    spiritualCauseEn: [
      {
        title: "Weak Solar & Jupiter Influence",
        desc: "The Sun governs state authority and civil service; affliction by Rahu or Saturn halts appointments.",
      },
      {
        title: "10th House (Karma Bhava) Obstructions",
        desc: "Malefic planetary alignments in the house of profession creating sudden last-minute roadblocks.",
      },
      {
        title: "Dormant 9th House (Bhagya Bhava)",
        desc: "When luck does not synchronize with effort, peak preparation fails to yield the final appointment letter.",
      },
      {
        title: "Intellectual Drain from Toxic Envy",
        desc: "Subtle jealousy from competitors causing brain fog and sudden memory lapses during exams.",
      },
    ],
    stambhanActionHi:
      "माँ बगलामुखी परीक्षार्थी की चंचलता व भय को स्तम्भित कर तीक्ष्ण एकाग्रता देती हैं तथा साक्षात्कार बोर्ड के सदस्यों के मन को अनुकूल बनाती हैं।",
    stambhanActionEn:
      "Maa Bagalamukhi stills exam anxiety and mental wavering while attuning the interview board members favourably towards the candidate.",
    mantraDevanagari:
      "॥ ॐ ह्लीं बगलामुखि मम् राजपदं प्रापय प्रापय सर्वविघ्नं नाशय ह्लीं ॐ नमः ॥",
    mantraEnglish:
      "Om Hlim Bagalamukhi Mam Rajapadam Prapaya Prapaya Sarva-Vighnam Nashaya Hlim Om Namah",
    mantraMeaningHi:
      "हे देवी पीताम्बरा! मुझे योग्य राजपद, सरकारी प्रतिष्ठा व विजय प्रदान करें और मेरे मार्ग के समस्त विघ्नों को भस्म कर दें।",
    mantraMeaningEn:
      "O Goddess Pitambara! Bestow upon me prestigious public office, authoritative success, and destroy every obstacle blocking my appointment.",
    jaapCount: "36,000 अथवा 51,000 मंत्र जाप",
    bestTimeHi: "सूर्योदय काल (रविवार या गुरुवार से प्रारंभ)",
    bestTimeEn: "Sunrise Hours (Commenced on Sunday or Thursday)",
    malaTypeHi: "हल्दी माला अथवा श्वेत चंदन माला",
    malaTypeEn: "Consecrated Turmeric (Haldi) Mala or White Sandalwood Mala",
    directionHi: "पूर्व दिशा की ओर मुख, पीला वस्त्र व आसन",
    directionEn: "Facing East, dressed in yellow garments on consecrated yellow asana",
    anushthanNameHi: "बगलामुखी राजयोग संवर्धन एवं सरकारी नौकरी विजय अनुष्ठान",
    anushthanNameEn: "Bagalamukhi Rajyoga Manifestation & Govt Job Success Anushthan",
    anushthanDetailsHi: [
      "नलखेड़ा धाम में परीक्षार्थी के रोल नंबर, परीक्षा विवरण व नाम-गोत्र से संकल्प।",
      "माँ बगलामुखी व भगवान सूर्य नारायण का संयुक्त राजयोग पूजन।",
      "51,000 संपुटित मंत्रों से अखंड वैदिक आहुतियां (हल्दी, पीली सरसों व गौघृत)।",
      "सरस्वती व बगलामुखी सिद्ध मेधा ताबीज की प्राण प्रतिष्ठा।",
      "अभिमंत्रित रक्षा सूत्र व विशेष विजय तिलक भस्म परीक्षार्थी को प्रेषित।",
    ],
    anushthanDetailsEn: [
      "Vedic Sankalp incorporating examination roll number, target service, and candidate Gotra at Nalkheda.",
      "Joint Vedic invocation of Maa Bagalamukhi and Lord Surya for sovereign Rajyoga awakening.",
      "51,000 sanctified mantra chants with specialized turmeric and cow ghee oblations.",
      "Consecration of blessed Saraswati-Bagalamukhi Medha Kavach for memory retention.",
      "Blessed sanctum victory tilak and energized thread dispatched to candidate.",
    ],
    benefitsHi: [
      "परीक्षा कक्ष व साक्षात्कार में पूर्ण आत्मविश्वास, तीक्ष्ण स्मृति और वाक-पटुता।",
      "साक्षात्कारकर्ताओं के मन में उम्मीदवार के प्रति सकारात्मक व अनुकूल दृष्टिकोण।",
      "मेरिट सूची में उच्च स्थान प्राप्त कर अंतिम नियुक्ति पत्र की प्राप्ति।",
      "कार्यक्षेत्र में उच्चाधिकारियों का स्नेह, सम्मान और निर्बाध पदोन्नति।",
    ],
    benefitsEn: [
      "Total composure, razor-sharp memory recall, and charismatic eloquence during interview panels.",
      "Inspires favorable disposition among board examiners toward candidate's answers.",
      "Secures prominent rank in the final merit list, delivering the desired appointment letter.",
      "Ensures continuous goodwill from superiors and unhindered future career promotions.",
    ],
    faqs: [
      {
        questionHi: "क्या परीक्षा से कितने दिन पूर्व यह अनुष्ठान कराना श्रेष्ठ रहता है?",
        questionEn: "How many days before the examination or interview should this be conducted?",
        answerHi:
          "परीक्षा अथवा इंटरव्यू से कम से कम 21 से 45 दिन पूर्व अनुष्ठान संपन्न कराना सर्वोत्तम माना जाता है ताकि ऊर्जा का पूर्ण संचय हो सके।",
        answerEn:
          "Conducting the Maha Hawan 21 to 45 days prior to the target exam or interview allows optimal integration of the consecrated energies.",
      },
      {
        questionHi: "क्या पढ़ाई के साथ-साथ यह अनुष्ठान करना आवश्यक है?",
        questionEn: "Is hard study still required alongside this spiritual ritual?",
        answerHi:
          "अवश्य! परिश्रम और कर्म आपका दायित्व है; अनुष्ठान आपके परिश्रम को 100% सफलता में परिवर्तित करने और भाग्य के अवरोध मिटाने का दिव्य माध्यम है।",
        answerEn:
          "Undoubtedly. Diligent study remains your primary duty; the sacred ritual removes spiritual roadblocks, ensuring your hard work manifests into triumphant success.",
      },
      {
        questionHi: "क्या यह अनुष्ठान पदोन्नति (Promotion) के लिए भी उपयोगी है?",
        questionEn: "Is this ritual equally effective for corporate and departmental promotions?",
        answerHi:
          "हाँ, पदोन्नति में आ रहे विभागीय षड्यंत्रों को स्तम्भित करने और उच्च पद प्राप्ति हेतु यह अत्यंत प्रभावशाली है।",
        answerEn:
          "Yes, it effectively immobilizes departmental conspiracies and workplace rivalry, clearing the path to seniority promotions.",
      },
    ],
  },

  // 8. Business Growth & Sales Expansion
  "business-growth": {
    slug: "business-growth",
    category: "business",
    categoryNameHi: "व्यापार, कर्ज व धन लाभ",
    categoryNameEn: "Business & Wealth",
    titleHi: "व्यापार वृद्धि एवं निरंतर ग्राहकी महाअनुष्ठान",
    titleEn: "Business Growth & Continuous Prosperity Anushthan",
    shortDescHi:
      "व्यापारिक मंदी, बिक्री में ठहराव, प्रतिद्वंद्वियों की ईर्ष्या व अटके पेमेंट्स की शीघ्र वसूली।",
    shortDescEn:
      "Revitalize sluggish commerce, clear blocked customer receivables, and outpace market competitors with divine grace.",
    heroTagHi: "व्यापार विस्तार व लक्ष्मी कृपा • नलखेड़ा धाम",
    heroTagEn: "Commercial Acceleration & Lakshmi Grace • Nalkheda Sanctum",
    overviewHi:
      "व्यापार केवल पूंजी से नहीं, अपितु अनुकूल परिस्थितियों, ग्राहकी और सकारात्मक ऊर्जा से चलता है। कई बार सब कुछ ठीक होने पर भी बिक्री अचानक गिर जाती है, नए ग्राहक नहीं आते और बाजार में पैसा फंस जाता है। प्रतिद्वंद्वियों द्वारा रचे गए अवरोध व्यापार की रीढ़ तोड़ देते हैं। माँ बगलामुखी का पीताम्बरी व्यापार वृद्धि अनुष्ठान मंदी और नजर दोष को स्तम्भित कर महालक्ष्मी के अक्षय प्रवाह का मार्ग प्रशस्त करता है।",
    overviewEn:
      "A commercial enterprise runs not merely on capital, but on favorable market currents, customer trust, and auspicious energy. Frequently, thriving businesses experience sudden inexplicable drops in revenue, customer footfall dries up, and payments get trapped. Maa Bagalamukhi's Pitambari Vyapar Anushthan neutralizes market malice and opens unbroken channels of Mahalakshmi prosperity.",
    image: "/mandir/puja-vyapar-vriddhi.jpg",
    challengesHi: [
      {
        title: "ग्राहकों का अचानक गायब होना",
        desc: "दुकान अथवा शोरूम पर ग्राहकों का आना एकदम कम हो जाना या केवल मोलभाव करके लौट जाना।",
      },
      {
        title: "बाजार में भारी धन का अटक जाना",
        desc: "उधार दिया गया माल का पैसा न मिलना और देनदारों द्वारा टालमटोल करना।",
      },
      {
        title: "प्रतिद्वंद्वियों द्वारा अनुचित प्रतिस्पर्धा",
        desc: "सामने वाले दुकानदार अथवा कंपनी द्वारा झूठी अफवाहें उड़ाकर व्यापार को क्षति पहुंचाना।",
      },
      {
        title: "दुकान में बैठते ही आलस्य व भारीपन",
        desc: "व्यापार स्थल पर नकारात्मक ऊर्जा का वास होना जिससे मन उचाट रहना।",
      },
    ],
    challengesEn: [
      {
        title: "Vanishing Footfall & Aborted Sales",
        desc: "Potential buyers walking out without purchasing or bargaining endlessly without closing deals.",
      },
      {
        title: "Massive Receivables Trapped in Market",
        desc: "Creditors making endless excuses, causing cash-flow asphyxiation and working capital crises.",
      },
      {
        title: "Malicious Competitor Sabotage",
        desc: "Rival storefronts spreading baseless rumors or poaching key clients through unethical undercutting.",
      },
      {
        title: "Oppressive Atmosphere at Office / Store",
        desc: "Overwhelming lethargy and negative energy experienced as soon as one sits at the cash register.",
      },
    ],
    spiritualCauseHi: [
      {
        title: "बुध व शुक्र की अशुभ स्थिति",
        desc: "व्यापार का कारक बुध और धन-ऐश्वर्य का कारक शुक्र होता है। इनके कमजोर होने से ग्राहकी घटती है।",
      },
      {
        title: "व्यापार स्थल पर नजर दोष व तांत्रिक कीलन",
        desc: "ईर्ष्यालु प्रतिद्वंद्वी द्वारा व्यापार स्थल की प्रगति को बांधने हेतु किया गया दोष।",
      },
      {
        title: "एकादश भाव (लाभ भाव) का अवरुद्ध होना",
        desc: "कुंडली के लाभ भाव में क्रूर ग्रहों की दृष्टि आय के नए स्रोतों को बंद कर देती है।",
      },
      {
        title: "वास्तु दोष व आग्नेय/ईशान कोण में असंतुलन",
        desc: "कैश काउंटर अथवा मुख्य द्वार पर नकारात्मक ऊर्जा का संचय।",
      },
    ],
    spiritualCauseEn: [
      {
        title: "Weak Mercury & Venus Influences",
        desc: "Mercury rules commerce and Venus rules cash-flow; afflictions stifle customer attraction.",
      },
      {
        title: "Psychic Binding of Commercial Premises",
        desc: "Occult jealousy aimed at binding the financial threshold and driving patrons away.",
      },
      {
        title: "Blocked 11th House of Gains (Labha Bhava)",
        desc: "Malefic planetary locks choking inbound revenue and lucrative partnership opportunities.",
      },
      {
        title: "Vastu Imbalance at Cash Register",
        desc: "Energy leakages around the treasury desk causing cash to drain faster than it arrives.",
      },
    ],
    stambhanActionHi:
      "माँ बगलामुखी व्यापारिक मंदी, आर्थिक लीकेज और विरोधियों की ईर्ष्या को स्तम्भित कर ग्राहकों के आकर्षण व धन प्रवाह को तीव्र करती हैं।",
    stambhanActionEn:
      "Maa Bagalamukhi freezes financial leakage, competitor malice, and market stagnation, magnetizing customers and smooth cash flow.",
    mantraDevanagari:
      "॥ ॐ ह्लीं श्रीं क्लीं बगलामुखि मम् व्यापारे वृद्धिं कुरु कुरु स्वाहा ॥",
    mantraEnglish:
      "Om Hlim Shrim Klim Bagalamukhi Mam Vyapare Vriddhim Kuru Kuru Swaha",
    mantraMeaningHi:
      "हे महामाया पीताम्बरा! मेरे व्यापार, कारोबार व दुकान में चौतरफा वृद्धि करें, ग्राहकों की निरंतर ग्राहकी दें और लक्ष्मी का स्थायी वास प्रदान करें।",
    mantraMeaningEn:
      "O Divine Pitambara! Accelerate multifaceted expansion in my enterprise, bless my counters with loyal patrons, and bestow perennial wealth.",
    jaapCount: "31,000 अथवा 51,000 मंत्र जाप",
    bestTimeHi: "बुधवार अथवा शुक्रवार, प्रातः काल अथवा गोधूलि वेला",
    bestTimeEn: "Wednesday or Friday, Morning or Twilight (Godhuli Bela)",
    malaTypeHi: "कमलगट्टा माला अथवा हल्दी माला",
    malaTypeEn: "Consecrated Lotus Seed (Kamal Gatta) Mala or Haldi Mala",
    directionHi: "उत्तर दिशा (कुबेर दिशा)",
    directionEn: "Facing North (Direction of Lord Kuber), wearing yellow garments",
    anushthanNameHi: "बगलामुखी महालक्ष्मी व्यापार संवर्धन एवं समृद्धि महाहवन",
    anushthanNameEn: "Bagalamukhi Mahalakshmi Vyapar Prosperity Maha Hawan",
    anushthanDetailsHi: [
      "नलखेड़ा धाम में व्यापारिक फर्म के नाम, जीएसटी/पते व यजमान के नाम से संकल्प।",
      "पीताम्बरा बगलामुखी व महालक्ष्मी का संयुक्त श्री सूक्त संपुटित पूजन।",
      "51,000 संपुटित मंत्रों से कमलगट्टा, हल्दी, पीली सरसों व गौघृत की आहुतियां।",
      "सिद्ध प्राण-प्रतिष्ठित बगलामुखी व्यापार वृद्धि यंत्र की स्थापना पूजा।",
      "यंत्र, अभिमंत्रित पीली सरसों व विशेष तिजोरी पोटली यजमान को प्रेषित।",
    ],
    anushthanDetailsEn: [
      "Vedic Sankalp incorporating business firm name, location, and owner Gotra at Nalkheda Sanctum.",
      "Joint Vedic invocation of Maa Bagalamukhi and Mahalakshmi energized with Shri Sukta hymns.",
      "51,000 sanctified oblations using lotus seeds, raw turmeric, yellow mustard, and cow ghee.",
      "Consecration of energized Bagalamukhi Vyapar Vriddhi Yantra for the cash locker.",
      "Delivery of consecrated Yantra, sanctified mustard seeds, and sacred treasury pouch.",
    ],
    benefitsHi: [
      "दुकान अथवा ऑफिस में ग्राहकों का निरंतर आगमन और बिक्री में अप्रत्याशित वृद्धि।",
      "मार्केट में फंसे हुए पुराने कर्जों व पेमेंट्स की तेजी से वसूली।",
      "व्यापारिक साझेदारों व कर्मचारियों के साथ बेहतर तालमेल और उत्पादकता।",
      "ऋण मुक्ति तथा व्यापार विस्तार के नए लाभदायक अवसर प्राप्त होना।",
    ],
    benefitsEn: [
      "Dramatic increase in customer footfall, contracts, and daily sales volumes.",
      "Swift recovery of stubborn market dues and blocked receivables.",
      "Enhanced harmony and productivity among partners, staff, and vendors.",
      "Prompt freedom from debt overhang and opening of lucrative expansion avenues.",
    ],
    faqs: [
      {
        questionHi: "क्या यह अनुष्ठान नई दुकान या स्टार्टअप शुरू करने के लिए भी उपयोगी है?",
        questionEn: "Is this ritual beneficial before opening a new retail store or launching a startup?",
        answerHi:
          "हाँ, नए व्यवसाय के आरंभ में यह अनुष्ठान कराने से प्रारंभिक संकट, नजर दोष और मंदी से पूर्ण सुरक्षा मिलती है।",
        answerEn:
          "Yes, performing this ceremony prior to launch shields the venture from initial stagnation, competitor jealousy, and early cash crunches.",
      },
      {
        questionHi: "अनुष्ठान के बाद मुझे व्यापार स्थल पर क्या स्थापित करना होगा?",
        questionEn: "What items received from the temple should be installed at the business?",
        answerHi:
          "पंडित जी द्वारा सिद्ध बगलामुखी व्यापार वृद्धि यंत्र व तिजोरी पोटली भेजी जाती है, जिसे गल्ले अथवा तिजोरी में स्थापित करना होता है।",
        answerEn:
          "A consecrated Bagalamukhi Vyapar Vriddhi Yantra and sanctified treasury pouch are dispatched to be placed in your cash safe or accounts desk.",
      },
      {
        questionHi: "क्या ऑनलाइन बिजनेस या फ्रीलांसिंग के लिए भी यह फलदायी है?",
        questionEn: "Does this remedy benefit digital businesses, agencies, and e-commerce?",
        answerHi:
          "अवश्य! व्यापार का माध्यम कोई भी हो, माँ बगलामुखी की कृपा से क्लाइंट्स का आकर्षण और वित्तीय रुकावटों का निवारण होता है।",
        answerEn:
          "Absolutely. Regardless of whether your commerce is digital or physical, the consecrated energies remove financial blockages and magnetize lucrative clients.",
      },
    ],
  },

  // 9. Debt Relief & Loan Clearance
  "debt-relief": {
    slug: "debt-relief",
    category: "business",
    categoryNameHi: "व्यापार, कर्ज व धन लाभ",
    categoryNameEn: "Business & Wealth",
    titleHi: "कर्ज मुक्ति एवं ऋण संकट निवारण अनुष्ठान",
    titleEn: "Debt Relief, Loan Clearance & Financial Freedom",
    shortDescHi:
      "असहनीय ब्याज, बैंक रिकवरी दबाव, कर्ज के चक्रव्यूह से स्थायी मुक्ति व धन आगमन के मार्ग।",
    shortDescEn:
      "Break free from compound debt traps, recovery agent harassment, and open sustainable channels of financial abundance.",
    heroTagHi: "ऋण मुक्ति व आर्थिक स्वतंत्रता • नलखेड़ा धाम",
    heroTagEn: "Debt Liberation & Financial Peace • Nalkheda Sanctum",
    overviewHi:
      "कर्ज मनुष्य का आत्मसम्मान, सुख और चैन छीन लेता है। जब एक कर्ज चुकाने के लिए दूसरा कर्ज लेना पड़े और ब्याज का बोझ पहाड़ बन जाए, तो व्यक्ति घोर निराशा में घिर जाता है। सनातन परंपरा में माँ बगलामुखी को 'ऋणहर्ता' के रूप में भी पूजा जाता है। नलखेड़ा धाम में पूज्य पंडित शुभम शर्मा जी के सान्निध्य में शास्त्रोक्त महाहवन द्वारा दरिद्रता के योग स्तम्भित होते हैं और कर्ज चुकाने हेतु अकस्मात धन के साधन बनते हैं।",
    overviewEn:
      "Spiraling debt drains human dignity, joy, and peace of mind. When settling one liability necessitates borrowing another, devotees find themselves trapped in an agonizing financial vortex. In Vedic Tantra, Maa Bagalamukhi is revered as the ultimate dispeller of chronic indebtedness (Rin-Harta). Consecrated Hawan at Nalkheda immobilizes financial distress and opens unforeseen avenues for complete debt clearance.",
    image: "/mandir/puja-vittiya-samriddhi.jpg",
    challengesHi: [
      {
        title: "ब्याज का बढ़ता चक्रव्यूह",
        desc: "मूलधन वहीं का वहीं रहना और केवल भारी ब्याज चुकाने में पूरी कमाई खत्म हो जाना।",
      },
      {
        title: "बैंक व देनदारों का मानसिक दबाव",
        desc: "प्रतिदिन फोन कॉल्स, घर पर तकादा और सामाजिक मान-प्रतिष्ठा पर आंच आने का भय।",
      },
      {
        title: "संपत्ति बिकने की नौबत आना",
        desc: "कर्ज उतारने हेतु पैतृक जमीन, सोना अथवा मकान को औने-पौने दामों में बेचने की विवशता।",
      },
      {
        title: "घर में घोर अशांति व निराशा",
        desc: "आर्थिक तंगी के कारण परिवार में झगड़े, अवसाद और भविष्य के प्रति अंधकार दिखना।",
      },
    ],
    challengesEn: [
      {
        title: "Compounding Interest Trap",
        desc: "Entire earnings swallowed up merely servicing interest while the principal balance remains untouched.",
      },
      {
        title: "Persistent Creditor Coercion",
        desc: "Unrelenting recovery calls, visits at home, and the acute anxiety of public humiliation.",
      },
      {
        title: "Imminent Risk of Distress Asset Sale",
        desc: "Being pushed to liquidate ancestral jewelry, vehicles, or properties at distressed valuations.",
      },
      {
        title: "Severe Domestic Depression & Hopelessness",
        desc: "Chronic financial asphyxiation triggering continuous family arguments, anxiety, and despair.",
      },
    ],
    spiritualCauseHi: [
      {
        title: "षष्ठम (6th) व द्वादश (12th) भाव का ऋण दोष",
        desc: "छठे भाव का स्वामी जब बारहवें भाव (व्यय भाव) से संबंध बनाता है तो व्यक्ति पर कर्ज का बोझ चढ़ता जाता है।",
      },
      {
        title: "मंगल कृत ऋण योग (कुज दोष)",
        desc: "कुंडली में मंगल की नीच स्थिति अथवा पाप प्रभाव व्यक्ति को कर्ज के जाल में फंसाता है।",
      },
      {
        title: "पितृ ऋण व कर्म चक्र",
        desc: "पूर्वजों के ऋण अथवा अनुष्ठान न होने से धन का अपव्यय और लगातार नुकसान होना।",
      },
      {
        title: "लक्ष्मी का रुष्ट होना",
        desc: "दरिद्रता योग के कारण घर में धन का ठहराव न होना।",
      },
    ],
    spiritualCauseEn: [
      {
        title: "6th & 12th House Malefic Conjunction",
        desc: "Harmful link between the house of debt (6th) and expenditure (12th) creates an uncontrollable drain.",
      },
      {
        title: "Afflicted Mars (Kuja Rin Yoga)",
        desc: "Debilitated Mars triggers compulsive liabilities, sudden liabilities, and prolonged debt stress.",
      },
      {
        title: "Unresolved Ancestral Karmic Debts",
        desc: "Unpacified Pitru dues generating sudden emergency expenses and continuous cash shortages.",
      },
      {
        title: "Daridra Planetary Combinations",
        desc: "Energetic blockages preventing the household from retaining wealth despite honest labor.",
      },
    ],
    stambhanActionHi:
      "माँ बगलामुखी यजमान के आर्थिक नुकसान और देनदारों के अनुचित दबाव को स्तम्भित करती हैं तथा रुके हुए धन व नए आय स्रोतों को जाग्रत करती हैं।",
    stambhanActionEn:
      "Maa Bagalamukhi immobilizes aggressive creditor hostility, halts unmanageable financial leaks, and activates fresh income reservoirs for swift debt settlement.",
    mantraDevanagari:
      "॥ ॐ ह्लीं बगलामुखि सर्व-ऋण-बाधां स्तम्भय नाशय मम् धनं वर्धय ह्लीं स्वाहा ॥",
    mantraEnglish:
      "Om Hlim Bagalamukhi Sarva-Rina-Badham Stambhaya Nashaya Mam Dhanam Vardhaya Hlim Swaha",
    mantraMeaningHi:
      "हे भगवती बगलामुखी! मेरे समस्त कर्जों, ऋणों और आर्थिक संकटों को स्तम्भित कर नष्ट करें और मुझे धनवान व ऋणमुक्त बनाएं।",
    mantraMeaningEn:
      "O Goddess Bagalamukhi! Paralyze and dissolve all my debts and financial burdens; multiply my income and lead me to absolute financial freedom.",
    jaapCount: "31,000 अथवा 51,000 मंत्र जाप",
    bestTimeHi: "मंगलवार प्रातः काल अथवा संध्या काल",
    bestTimeEn: "Tuesday Morning or Sandhya Twilight",
    malaTypeHi: "हल्दी माला अथवा रक्त चंदन माला",
    malaTypeEn: "Consecrated Turmeric Mala or Red Sandalwood Rosary",
    directionHi: "उत्तर अथवा पूर्व दिशा",
    directionEn: "Facing North or East, seated on consecrated yellow woolen cloth",
    anushthanNameHi: "बगलामुखी सर्व ऋण मुक्ति एवं कनक धारा महाअनुष्ठान",
    anushthanNameEn: "Bagalamukhi Rin Mukti & Kanakadhara Wealth Anushthan",
    anushthanDetailsHi: [
      "नलखेड़ा धाम में यजमान के कुल ऋण विवरण, नाम व गोत्र से विशेष ऋण मोचन संकल्प।",
      "माँ बगलामुखी व ऋणमुक्तेश्वर महादेव का संयुक्त वैदिक पूजन।",
      "51,000 मंत्रों से पीली सरसों, कमल गट्टा, शुद्ध घृत व काले तिल से महाहवन।",
      "सिद्ध ऋण मोचन पीताम्बरा ताबीज व धन आकर्षण यंत्र की प्रतिष्ठा।",
      "अभिमंत्रित रक्षा सूत्र व सिद्ध भस्म यजमान को प्रेषित।",
    ],
    anushthanDetailsEn: [
      "Solemn Rin Mochan Vedic Sankalp incorporating overall liability details and devotee Gotra at Nalkheda.",
      "Joint scriptural worship of Maa Bagalamukhi and Rinmukteshwar Mahadev.",
      "51,000 sanctified oblations using turmeric, lotus seeds, pure cow ghee, and black sesame.",
      "Consecration of energized Rin Mochan Pitambara Kavach and wealth-attracting yantra.",
      "Sanctum Bhasma and blessed protective threads dispatched to the devotee.",
    ],
    benefitsHi: [
      "बैंकों अथवा देनदारों का अमानवीय दबाव व तकादा शांत होता है।",
      "रुका हुआ पुराना धन, पैतृक हिस्सा अथवा अप्रत्याशित स्रोतों से धन प्राप्ति का योग बनता है।",
      "कर्ज का एकमुश्त अथवा आसान किश्तों में निपटारा (Settlement) संभव होता है।",
      "मानसिक शांति, पारिवारिक सम्मान और आर्थिक स्वतंत्रता की पुनर्प्राप्ति।",
    ],
    benefitsEn: [
      "De-escalates aggressive recovery agent intimidation and legal notices.",
      "Manifests unexpected cash inflows from stalled investments, inheritance, or new business.",
      "Facilitates manageable, dignified loan settlements and debt restructuring.",
      "Restores sound sleep, peace of mind, family stability, and genuine financial independence.",
    ],
    faqs: [
      {
        questionHi: "क्या बहुत बड़े कर्ज (करोड़ों रुपये) में भी यह अनुष्ठान प्रभावी है?",
        questionEn: "Is this ritual effective for massive commercial debts or insolvency situations?",
        answerHi:
          "हाँ, माँ बगलामुखी की शक्ति असीम है। अनुष्ठान से परिस्थितियां अनुकूल होती हैं, संपत्ति के अच्छे खरीदार मिलते हैं और सम्मानजनक समाधान निकलता है।",
        answerEn:
          "Yes, Maa Bagalamukhi's grace transcends financial scales. It orchestrates optimal asset liquidations, favorable negotiations, and unblocked cash channels.",
      },
      {
        questionHi: "अनुष्ठान के कितने समय बाद कर्ज मुक्ति के रास्ते बनते हैं?",
        questionEn: "How soon do avenues for debt clearance begin to manifest?",
        answerHi:
          "सामान्यतः 45 से 90 दिनों के भीतर यजमान को आय के नए स्रोत, अटके पैसे की वापसी और बैंक समझौते के स्पष्ट अवसर दिखाई देने लगते हैं।",
        answerEn:
          "Within 45 to 90 days of ceremony completion, devotees report noticeable shifts: new income streams, recovered dues, and cooperative debt settlement terms.",
      },
      {
        questionHi: "क्या अनुष्ठान के दौरान मुझे कोई विशेष नियम का पालन करना होगा?",
        questionEn: "Are there specific dietary or lifestyle vows to observe during the ritual?",
        answerHi:
          "अनुष्ठान अवधि में सात्विक भोजन ग्रहण करें, किसी से विवाद न करें तथा मंदिर से दिए गए मंत्र का मानसिक स्मरण रखें।",
        answerEn:
          "Maintain a pure vegetarian diet, avoid confrontation, and recite the consecrated seed mantra mentally throughout the ritual window.",
      },
    ],
  },

  // 10. Marriage Delay Removal & Early Match
  "marriage-delay-removal": {
    slug: "marriage-delay-removal",
    category: "career",
    categoryNameHi: "कैरियर, नौकरी व विवाह",
    categoryNameEn: "Marriage & Family",
    titleHi: "शीघ्र विवाह एवं विवाह बाधा निवारण अनुष्ठान",
    titleEn: "Marriage Delay Removal & Early Harmonious Match",
    shortDescHi:
      "मांगलिक दोष, गुरु चांडाल, संबंध तय होकर टूटना अथवा योग्य जीवनसाथी न मिलने की समस्या का अचूक समाधान।",
    shortDescEn:
      "Overcome Manglik afflictions, repetitive engagement breakdowns, and delays in securing an auspicious life partner.",
    heroTagHi: "शीघ्र विवाह व दांपत्य सुख • नलखेड़ा धाम",
    heroTagEn: "Timely Marriage & Marital Bliss • Nalkheda Peeth",
    overviewHi:
      "योग्य आयु, उच्च शिक्षा और अच्छा परिवार होने के बावजूद यदि विवाह में लगातार अड़चनें आ रही हों, रिश्ते पक्के होकर टूट जाते हों अथवा योग्य प्रस्ताव ही न मिलते हों, तो यह गंभीर ग्रह दोष का संकेत है। माँ बगलामुखी का पीताम्बरी विवाह अनुष्ठान सप्तम भाव के समस्त क्रूर दोषों को स्तम्भित कर शीघ्र विवाह के मांगलिक योगों को जाग्रत करता है। नलखेड़ा धाम में पूज्य पंडित शुभम शर्मा जी के सान्निध्य में यह अनुष्ठान संपन्न कराया जाता है।",
    overviewEn:
      "Despite good education, respectable family lineage, and eligible age, many individuals face heartbreaking delays in finding a suitable match or suffer repeated engagement cancellations. In Vedic astrology, severe 7th house afflictions freeze marital prospects. Maa Bagalamukhi's consecrated Pitambari Vivah Hawan stills malefic doshas and paves the way for a joyous, blessed union.",
    image: "/mandir/baglamukhi-divine-darshan.jpg",
    challengesHi: [
      {
        title: "बात पक्की होकर अचानक टूट जाना",
        desc: "रिश्ता लगभग तय हो जाने के बाद अंतिम समय में बिना किसी ठोस कारण के रिश्ता टूट जाना।",
      },
      {
        title: "उम्र का लगातार बढ़ते जाना",
        desc: "सालों-साल प्रयास करने के बाद भी मनपसंद व योग्य जीवनसाथी न मिलना।",
      },
      {
        title: "मांगलिक व नाड़ी दोष की बाधाएं",
        desc: "कुंडली मिलान में गंभीर दोषों के कारण अच्छे-अच्छे रिश्तों का हाथ से निकल जाना।",
      },
      {
        title: "पारिवारिक व सामाजिक चिंता",
        desc: "माता-पिता का विवाह की चिंता में व्यथित रहना और समाज के प्रश्नों से संकोच होना।",
      },
    ],
    challengesEn: [
      {
        title: "Sudden Breakdowns of Finalized Matches",
        desc: "Prospective alliances reaching the threshold of engagement only to collapse abruptly without substantial reason.",
      },
      {
        title: "Advancing Age & Exhausted Search",
        desc: "Years of unsuccessful matrimonial efforts yielding no compatible or worthy prospective suitors.",
      },
      {
        title: "Severe Astrological Matchmaking Doshas",
        desc: "Heavy Manglik, Nadi, or Bhakoot afflictions intimidating potential bride or groom families.",
      },
      {
        title: "Parental Anguish & Social Inquiries",
        desc: "Deep parental grief and social awkwardness stemming from persistent matrimonial delays.",
      },
    ],
    spiritualCauseHi: [
      {
        title: "सप्तम भाव (विवाह भाव) पर शनि अथवा राहु की दृष्टि",
        desc: "सप्तमेश का नीच होना अथवा पाप ग्रहों से घिरे होने से विवाह में अत्यधिक विलंब होता है।",
      },
      {
        title: "गुरु (बृहस्पति) अथवा शुक्र का निर्बल होना",
        desc: "कन्या की कुंडली में गुरु तथा वर की कुंडली में शुक्र का कमजोर होना विवाह में बाधक बनता है।",
      },
      {
        title: "मांगलिक दोष व कालसर्प दोष",
        desc: "लग्न, चतुर्थ, सप्तम, अष्टम अथवा द्वादश भाव में मंगल की उपस्थिति विवाह में विघ्न डालती है।",
      },
      {
        title: "ईर्ष्या कृत विवाह बंधन",
        desc: "रिश्तेदारों अथवा विरोधियों द्वारा की गई नकारात्मक ऊर्जा से विवाह के अवसर बंध जाना।",
      },
    ],
    spiritualCauseEn: [
      {
        title: "Saturn or Rahu Aspecting the 7th House",
        desc: "Debilitated 7th lord or malefic presence in the house of marriage causes prolonged delays.",
      },
      {
        title: "Weak Jupiter or Afflicted Venus",
        desc: "Jupiter (significator for women) or Venus (significator for men) afflicted by malefic transits.",
      },
      {
        title: "Intense Manglik & Kaal Sarp Dosha",
        desc: "Combust Mars in sensitive houses creating psychic turbulence that deflects suitable suitors.",
      },
      {
        title: "Matrimonial Auric Bandhan",
        desc: "Hostile family jealousy creating subtle energetic blockages around marriage talks.",
      },
    ],
    stambhanActionHi:
      "माँ बगलामुखी विवाह मार्ग में आ रहे समस्त ग्रह दोषों, पारिवारिक विरोध व नजर दोष को स्तम्भित कर सुयोग्य वर/वधू की शीघ्र प्राप्ति का मार्ग खोलती हैं।",
    stambhanActionEn:
      "Maa Bagalamukhi immobilizes planetary doshas, family dissent, and subtle blockages, drawing an auspicious, compatible life partner quickly.",
    mantraDevanagari:
      "॥ ॐ ह्लीं बगलामुखि मम् शीघ्र विवाह बाधां स्तम्भय नाशय ह्लीं ॐ स्वाहा ॥",
    mantraEnglish:
      "Om Hlim Bagalamukhi Mam Shighra Vivaha Badham Stambhaya Nashaya Hlim Om Swaha",
    mantraMeaningHi:
      "हे सर्वकल्याणकारी माँ पीताम्बरा! मेरे शीघ्र विवाह में आ रही समस्त बाधाओं व दोषों को स्तम्भित कर नष्ट करें और मुझे उत्तम दांपत्य सुख प्रदान करें।",
    mantraMeaningEn:
      "O Benevolent Mother Pitambara! Still and eradicate every impediment delaying my timely marriage; bless me with an auspicious, loving life union.",
    jaapCount: "36,000 अथवा 51,000 मंत्र जाप",
    bestTimeHi: "गुरुवार अथवा शुक्रवार, प्रातः काल (पीत वस्त्र धारण कर)",
    bestTimeEn: "Thursday or Friday Morning, dressed in consecrated yellow garments",
    malaTypeHi: "हल्दी माला",
    malaTypeEn: "Consecrated Turmeric (Haldi) Rosary (108 beads)",
    directionHi: "उत्तर अथवा पूर्व दिशा",
    directionEn: "Facing North or East",
    anushthanNameHi: "बगलामुखी शीघ्र विवाह एवं मंगलकारी दांपत्य महाअनुष्ठान",
    anushthanNameEn: "Bagalamukhi Shighra Vivaha & Marital Harmony Maha Anushthan",
    anushthanDetailsHi: [
      "नलखेड़ा धाम में वर/कन्या के नाम, जन्म पत्रिका विवरण व गोत्र से विशेष विवाह संकल्प।",
      "माँ बगलामुखी व भगवान शिव-पार्वती का संयुक्त मंगलकारी गौरी पूजन।",
      "51,000 संपुटित मंत्रों से पीली सरसों, हल्दी की गांठें, शहद व शुद्ध गौघृत का महाहवन।",
      "सिद्ध पीताम्बरा विवाह रक्षा ताबीज एवं मंगल यंत्र की प्राण प्रतिष्ठा।",
      "अभिमंत्रित विवाह रक्षा सूत्र व विशेष हल्दी तिलक भस्म यजमान को प्रेषित।",
    ],
    anushthanDetailsEn: [
      "Vedic Matrimonial Sankalp incorporating candidate's birth chart details and Gotra at Nalkheda.",
      "Joint Gauri-Shankar and Pitambara invocation for blissful, enduring marital harmony.",
      "51,000 sanctified mantra oblations utilizing whole turmeric roots, yellow mustard, and cow ghee.",
      "Consecration of blessed Vivah Raksha Yantra and energized matrimonial amulet.",
      "Sanctified yellow Raksha thread and blessed sanctum turmeric tilak dispatched to candidate.",
    ],
    benefitsHi: [
      "विवाह में आ रही समस्त ग्रह बाधाएं, मांगलिक दोष व रुकावटें दूर होती हैं।",
      "योग्य, संस्कारी व अनुकूल परिवार से शीघ्र उत्तम विवाह प्रस्ताव की प्राप्ति।",
      "रिश्ता तय होकर विवाह संपन्न होने तक सभी कार्य निर्विघ्न पूरे होते हैं।",
      "विवाह उपरांत दांपत्य जीवन में आजीवन प्रेम, सामंजस्य और सुख-समृद्धि।",
    ],
    benefitsEn: [
      "Total mitigation of 7th house doshas, Manglik afflictions, and auric blockages.",
      "Attracts compatible, noble, and supportive matrimonial proposals swiftly.",
      "Ensures the entire wedding trajectory proceeds smoothly without unexpected hitches.",
      "Cultivates lifelong mutual affection, respect, and enduring peace in marital life.",
    ],
    faqs: [
      {
        questionHi: "क्या यह अनुष्ठान मांगलिक दोष के निवारण हेतु भी प्रभावी है?",
        questionEn: "Is this ritual specifically effective for neutralizing Manglik Dosha?",
        answerHi:
          "हाँ, माँ बगलामुखी की शक्ति मंगल के क्रूर प्रभाव को शांत कर अनुकूलता प्रदान करती है जिससे मांगलिक दोष का भय समाप्त हो जाता है।",
        answerEn:
          "Yes. Maa Bagalamukhi's pacifying energies temper the fiery severity of Mars, harmonizing compatibility between partners.",
      },
      {
        questionHi: "अनुष्ठान के कितने समय भीतर विवाह पक्का होने के योग बनते हैं?",
        questionEn: "How soon do matrimonial proposals typically finalize following this ritual?",
        answerHi:
          "अनुष्ठान पूर्ण होने के उपरांत सामान्यतः 3 से 6 महीने के भीतर योग्य जीवनसाथी से संबंध तय होने के प्रबल योग बन जाते हैं।",
        answerEn:
          "Devotees traditionally experience strong matrimonial proposals and firm engagement agreements within 3 to 6 months.",
      },
      {
        questionHi: "क्या वर अथवा कन्या के माता-पिता उनके स्थान पर संकल्प करा सकते हैं?",
        questionEn: "Can parents perform or sponsor the Sankalp on behalf of their son or daughter?",
        answerHi:
          "हाँ, यदि वर अथवा कन्या उपस्थित होने में संकोच करें तो माता-पिता अपने बच्चों के नाम व जन्म विवरण से यह अनुष्ठान करा सकते हैं।",
        answerEn:
          "Yes. Parents can sponsor the sacred Sankalp by providing their child's birth particulars and Gotra with complete scriptural efficacy.",
      },
    ],
  },
};

export function getAllSolutions(): SolutionItem[] {
  return Object.values(SOLUTIONS_DATA);
}

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return SOLUTIONS_DATA[slug];
}

export function getSolutionsByCategory(category: SolutionItem["category"]): SolutionItem[] {
  return Object.values(SOLUTIONS_DATA).filter((s) => s.category === category);
}

export function getAllCategories(): SolutionCategory[] {
  return SOLUTION_CATEGORIES;
}
