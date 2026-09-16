"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";
import { DEFAULT_CONTACT } from "@/components/common/navbarcompo/constants";

interface ServiceItem {
  number: string;
  title: string;
  hindiTitle: string;
  description: string;
  icon: React.ReactNode;
  seoKeywords: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    number: "01",
    title: "Baglamukhi Hawan",
    hindiTitle: "बगलामुखी महाहवन",
    description:
      "माँ पीताम्बरा को समर्पित प्रचंड वैदिक हवन—अखंड सुरक्षा कवच निर्माण, घोर शत्रु शमन एवं सर्वग्रह शांति हेतु।",
    seoKeywords: "माँ बगलामुखी हवन, बगलामुखी महाहवन नलखेड़ा धाम",
    icon: (
      /* Temple Sanctum / Hawan Kund */
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5c0d15]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2L9 7h6l-3-5zm0 6l-2 3h4l-2-3zm-7 6l2-2h10l2 2v6H5v-6zm3 4h8v-2H8v2zm4-16c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z" />
        <path d="M4 20h16v2H4v-2zm8-18c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Baglamukhi Jaap Anushthan",
    hindiTitle: "बगलामुखी जाप अनुष्ठान",
    description:
      "सवा लाख सिद्ध बीजाक्षरी मंत्रों का अखंड जप—पूज्य गुरुजी के सानिध्य में शास्त्रीय संकल्प व तंत्र पद्धति से पूर्ण।",
    seoKeywords: "बगलामुखी मंत्र जाप, सवा लाख बगलामुखी जाप अनुष्ठान",
    icon: (
      /* Sacred Lotus in Devotion Hands */
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5c0d15]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3c-1.5 2.5-3 5-3 7 0 1.66 1.34 3 3 3s3-1.34 3-3c0-2-1.5-4.5-3-7zm-4.5 5c-.83 1.5-1.5 3-1.5 4.5 0 2.21 1.79 4 4 4 .7 0 1.36-.18 1.94-.5-1.16-.68-1.94-1.95-1.94-3.4 0-1.6 1.05-3.3 2.5-4.6-.9-.3-1.9-.3-2.8.2-.8.5-1.7 2-2.2 3.8zm11 4.5c0-1.5-.67-3-1.5-4.5-.5-1.8-1.4-3.3-2.2-3.8-.9-.5-1.9-.5-2.8-.2 1.45 1.3 2.5 3 2.5 4.6 0 1.45-.78 2.72-1.94 3.4.58.32 1.24.5 1.94.5 2.21 0 4-1.79 4-4zm-14 6.5h15v2H4.5v-2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Shatru Vijay Anushthan",
    hindiTitle: "शत्रु विजय अनुष्ठान",
    description:
      "प्रत्यक्ष व गुप्त विरोधियों का पूर्ण स्तम्भन, ईर्ष्या-द्वेष नाश एवं कठिन परिस्थितियों में अचूक विजय प्राप्ति।",
    seoKeywords: "शत्रु विजय अनुष्ठान, शत्रु स्तम्भन बगलामुखी",
    icon: (
      /* Sacred Vedic Granth / Shastra Book */
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5c0d15]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 2H6c-1.2 0-2 .8-2 2v16c0 1.2.8 2 2 2h13c1.1 0 2-.9 2-2V4c0-1.2-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h12v14zm-1-8H8V8h9v2zm0 3H8v-2h9v2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Mukadama Vijay Anushthan",
    hindiTitle: "मुकदमा विजय अनुष्ठान",
    description:
      "वर्षों से उलझे कोर्ट-कचहरी, जमीन जायदाद विवाद एवं कानूनी अड़चनों में सत्य की रक्षा व त्वरित अनुकूल न्याय।",
    seoKeywords: "कोर्ट केस विजय पूजा, मुकदमा विजय अनुष्ठान नलखेड़ा",
    icon: (
      /* Justice Gavel / Mallet */
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5c0d15]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M1 21h12v2H1v-2zm14.54-10.42l-5.66-5.66 2.12-2.12 5.66 5.66-2.12 2.12zm-3.54 3.54l-5.66-5.66 2.12-2.12 5.66 5.66-2.12 2.12zM5.34 16.95l-2.12-2.12 5.66-5.66 2.12 2.12-5.66 5.66zm13.43-1.41l-1.41 1.41 4.24 4.24 1.41-1.41-4.24-4.24z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Vaad-Vivaad Vijay Puja",
    hindiTitle: "वाद-विवाद शमन पूजा",
    description:
      "पारिवारिक मतभेद, व्यापारिक पार्टनर्स के तनाव एवं सामाजिक कलह का अंत कर स्थायी सौहार्द व शांति स्थापना।",
    seoKeywords: "वाद विवाद निवारण पूजा, गृह क्लेश शांति अनुष्ठान",
    icon: (
      /* Harmonious Union / Community Silhouettes */
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5c0d15]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Rajya Prapti Anushthan",
    hindiTitle: "राज्य पद प्राप्ति अनुष्ठान",
    description:
      "उच्च राजनैतिक प्रतिष्ठा, चुनाव में अप्रत्याशित विजय, प्रशासनिक पदोन्नति एवं समाज में शीर्ष नेतृत्व सिद्धि।",
    seoKeywords: "राजनैतिक पद प्राप्ति पूजा, चुनाव विजय बगलामुखी अनुष्ठान",
    icon: (
      /* Portfolio / Royal Authority Briefcase */
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5c0d15]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Vashikaran & Sammohan",
    hindiTitle: "वशीकरण एवं सम्मोहन",
    description:
      "पूर्ण वैदिक मर्यादा अनुकूल सर्वजन आकर्षण, व्यक्तित्व में चुंबकीय प्रभाव एवं समाज व कार्यक्षेत्र में सर्वप्रियता।",
    seoKeywords: "वैदिक वशीकरण अनुष्ठान, सम्मोहन सिद्धि नलखेड़ा",
    icon: (
      /* Sacred Shield of Aura Protection */
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5c0d15]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v6h-2V7zm0 8h2v2h-2v-2z" />
      </svg>
    ),
  },
  {
    number: "08",
    title: "Kaal Sarp Dosh Nivaran",
    hindiTitle: "कालसर्प दोष निवारण",
    description:
      "जन्मपत्रिका के समस्त 12 प्रकार के कालसर्प योग का शास्त्रोक्त तंत्र निवारण—जीवन के अचानक आने वाले कष्टों से मुक्ति।",
    seoKeywords: "कालसर्प दोष निवारण पूजा, कालसर्प शांति नलखेड़ा",
    icon: (
      /* Sacred Serpent / Nag Devta */
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5c0d15]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.5 4C13.12 4 12 5.12 12 6.5c0 .76.35 1.44.89 1.89C11.66 9.68 11 11.26 11 13c0 2.21 1.79 4 4 4h1v2h-5c-2.21 0-4-1.79-4-4 0-1.63.98-3.03 2.4-3.66L7 10.2c-2.36 1.05-4 3.44-4 6.2 0 3.64 2.84 6.6 6.42 6.6H16c3.31 0 6-2.69 6-6s-2.69-6-6-6h-.5c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5h2C19 7.57 17.43 6 15.5 6h-.35c.22-.45.35-.96.35-1.5C15.5 3.67 14.83 3 14 3h-.5c.55.55 1 1 1 1z" />
      </svg>
    ),
  },
  {
    number: "09",
    title: "Pitra Dosh Shanti",
    hindiTitle: "पितृ दोष शांति अनुष्ठान",
    description:
      "पूर्वजों की आत्मिक शांति, वंश वृद्धि में बाधा निवारण, सुख-समृद्धि एवं घर में स्थायी बरकत हेतु विशेष पितृ तर्पण।",
    seoKeywords: "पितृ दोष निवारण पूजा, पितृ शांति अनुष्ठान नलखेड़ा धाम",
    icon: (
      /* Ancestral Lineage / Generations */
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5c0d15]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-5 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm10 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-5 3c-1.86 0-3.5.75-4.7 1.95C6.1 16.15 5.5 17.5 5.5 19v1h13v-1c0-1.5-.6-2.85-1.8-3.95C15.5 13.75 13.86 13 12 13z" />
      </svg>
    ),
  },
  {
    number: "10",
    title: "Navgraha Shanti",
    hindiTitle: "नवग्रह शांति पूजन",
    description:
      "शनि की साढ़ेसाती, ढैय्या, राहु-केतु की महादशा व प्रतिकूल ग्रहों के दुष्प्रभावों को शांत कर भाग्योदय का मार्ग प्रशस्त।",
    seoKeywords: "नवग्रह शांति पूजन, शनि राहु केतु निवारण पूजा",
    icon: (
      /* Celestial Planet with Planetary Orbit */
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5c0d15]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3C7.03 3 3 7.03 3 12c0 1.25.26 2.44.73 3.52L2.09 17.16c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.64-1.64C6.22 19.14 8.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
        <path d="M21.71 6.29a1 1 0 00-1.41 0L18.47 8.12C16.88 5.6 14.13 4 11 4c-.7 0-1.38.08-2.03.24L7.54 2.81c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.32 1.32C5.9 7.02 5 9.4 5 12c0 2.21.72 4.25 1.93 5.91l-1.64 1.64a1 1 0 001.41 1.41l1.79-1.79C10.08 20.35 12 21 14 21c4.97 0 9-4.03 9-9 0-2.02-.67-3.88-1.8-5.38l1.51-1.51c.39-.39.39-1.03 0-1.42z" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: "11",
    title: "Sarva Karya Siddhi Puja",
    hindiTitle: "सर्व कार्य सिद्धि महापूजा",
    description:
      "लंबे समय से रुके हुए जटिल कार्यों में अप्रत्याशित गति, व्यापार में लाभ एवं समस्त मनोकामनाओं की निर्विघ्न सिद्धि।",
    seoKeywords: "सर्व कार्य सिद्धि पूजा, मनोकामना पूर्ति अनुष्ठान नलखेड़ा",
    icon: (
      /* Radiant Sacred Lotus of Auspicious Accomplishment */
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5c0d15]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2c-1.5 2.5-3 5-3 7 0 1.66 1.34 3 3 3s3-1.34 3-3c0-2-1.5-4.5-3-7zm-4.5 5c-.83 1.5-1.5 3-1.5 4.5 0 2.21 1.79 4 4 4 .7 0 1.36-.18 1.94-.5-1.16-.68-1.94-1.95-1.94-3.4 0-1.6 1.05-3.3 2.5-4.6-.9-.3-1.9-.3-2.8.2-.8.5-1.7 2-2.2 3.8zm11 4.5c0-1.5-.67-3-1.5-4.5-.5-1.8-1.4-3.3-2.2-3.8-.9-.5-1.9-.5-2.8-.2 1.45 1.3 2.5 3 2.5 4.6 0 1.45-.78 2.72-1.94 3.4.58.32 1.24.5 1.94.5 2.21 0 4-1.79 4-4z" />
      </svg>
    ),
  },
  {
    number: "12",
    title: "Vishesh Sankalp Puja",
    hindiTitle: "विशेष व्यक्तिगत संकल्प पूजा",
    description:
      "आपकी किसी भी विशिष्ट अथवा गोपनीय मनोकामना व पारिवारिक संकट के समाधान हेतु व्यक्तिगत नाम-गोत्र संकल्प अनुष्ठान।",
    seoKeywords: "विशेष संकल्प पूजा, व्यक्तिगत अनुष्ठान नलखेड़ा धाम",
    icon: (
      /* Sacred ॐ (Om) */
      <span className="font-serif font-bold text-2xl sm:text-[1.7rem] text-[#5c0d15] select-none leading-none" aria-hidden="true">
        ॐ
      </span>
    ),
  },
];

const TRUST_PILLARS = [
  {
    label: "Swayam Guruji dwara sampann",
    hindi: "स्वयं गुरुजी द्वारा संपन्न",
    icon: (
      <svg className="w-4 h-4 text-[#8b0000]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L9 7h6l-3-5zm0 6l-2 3h4l-2-3zm-7 6l2-2h10l2 2v6H5v-6z" />
      </svg>
    ),
  },
  {
    label: "Maa Bagalamukhi Mandir, Nalkheda",
    hindi: "माँ बगलामुखी मंदिर, नलखेड़ा",
    icon: (
      <svg className="w-4 h-4 text-[#8b0000]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-1.5 2.5-3 5-3 7 0 1.66 1.34 3 3 3s3-1.34 3-3c0-2-1.5-4.5-3-7z" />
      </svg>
    ),
  },
  {
    label: "Prachin parampara aur vaidik vidhi",
    hindi: "प्राचीन परंपरा और वैदिक विधि",
    icon: (
      <svg className="w-4 h-4 text-[#8b0000]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    label: "Hazaron shraddhaluon ka vishwas",
    hindi: "हज़ारों श्रद्धालुओं का विश्वास",
    icon: (
      <svg className="w-4 h-4 text-[#8b0000]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
];

/**
 * GurujiServicesGrid Component
 * - Background Image: /service/service.png with rich sacred temple sanctum ambience
 * - Complete 12 Vishesh Anushthan cards grid matching user UI image
 * - Optimized, emotionally engaging Vedic copywriting
 * - Full SEO Schema.org ItemList / Service metadata
 * - High-converting direct WhatsApp and Call CTA buttons
 * - 100% mobile-first optimized and responsive
 */
export default function GurujiServicesGrid() {
  const whatsappBaseUrl = `https://wa.me/${DEFAULT_CONTACT.phone.replace(/[^0-9]/g, "")}`;

  const createServiceWhatsappUrl = (serviceTitle: string) => {
    return `${whatsappBaseUrl}?text=${encodeURIComponent(
      `जय माँ बगलामुखी! मुझे "${serviceTitle}" अनुष्ठान एवं पूजन के संबंध में परामर्श तथा संकल्प बुक करना है।`
    )}`;
  };

  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "माँ बगलामुखी नलखेड़ा धाम - 12 विशेष अनुष्ठान एवं सिद्धियाँ",
    "description":
      "विश्वप्रसिद्ध सिद्धपीठ नलखेड़ा धाम में पूज्य गुरुजी द्वारा संपादित 12 प्रमुख वैदिक तंत्र अनुष्ठान एवं सिद्धियाँ।",
    "itemListElement": SERVICES_LIST.map((service, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "alternateName": service.hindiTitle,
        "description": service.description,
        "provider": {
          "@type": "Person",
          "name": "पूज्य पंडित शुभम शर्मा जी (गुरुजी)",
          "jobTitle": "माँ बगलामुखी उपासक",
        },
        "areaServed": "Nalkheda, Madhya Pradesh, India",
      },
    })),
  };

  return (
    <section
      id="services"
      className="relative isolate w-full py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-[#fffcf7] via-[#fffaf2] to-[#fff8e7] overflow-hidden"
      aria-label="गुरुजी द्वारा की जाने वाली प्रमुख सेवाएँ एवं 12 विशेष अनुष्ठान"
      itemScope
      itemType="https://schema.org/OfferCatalog"
    >
      {/* Schema.org Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">

        {/* ============================================================
            2. HEADER SECTION (Mobile-First Optimized)
            ============================================================ */}
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto mb-7 sm:mb-9 lg:mb-11">

          {/* Left Decorative Floating Card (Desktop only) */}
          <div className="hidden xl:flex absolute -left-36 top-2 flex-col items-center bg-[#fffbf2]/95 border border-[#deb881]/80 rounded-2xl px-4 py-3 shadow-[0_4px_16px_rgba(216,155,24,0.15)] select-none text-left max-w-[190px]">
            <p className="font-serif font-bold text-[#4a0d16] text-[0.88rem] leading-tight">
              माँ बगलामुखी की कृपा
            </p>
            <p className="font-serif text-[#7c2d12] text-xs leading-tight mt-0.5">
              से हर संकट का समाधान
            </p>
            <span className="text-[#d89b18] text-xs mt-1">🪷</span>
          </div>

          {/* Right Calligraphic Spiritual Seal (Desktop only) */}
          <div className="hidden xl:block absolute -right-32 top-1 select-none text-center">
            <p className="font-serif italic font-bold text-[#6b1622] text-xl lg:text-2xl leading-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
              ॥ सेवा ही साधना है ॥
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d89b18] to-transparent mx-auto mt-1" />
          </div>

          {/* Top Pill Tag: ॐ ॥ SEVA SUCHI ॥ ॥ */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 rounded-full bg-[#fdf5e2] border border-[#d89b18]/60 shadow-[0_2px_8px_rgba(216,155,24,0.12)] mb-2 sm:mb-2.5">
            <span className="font-serif text-[#8b0000] text-[0.72rem] sm:text-xs font-bold tracking-widest">
              ॐ ॥ SEVA SUCHI ॥ ॥
            </span>
          </div>

          {/* Main Title: Guruji Dwara Ki Jaane Wali Sevayein */}
          <h2
            className="font-serif font-bold text-[#5c0d15] text-xl sm:text-2xl md:text-3xl lg:text-[2.4rem] tracking-wide leading-tight px-1"
            itemProp="name"
          >
            Guruji Dwara Ki Jaane Wali Sevayein
          </h2>

          {/* Subtitle */}
          <p className="font-serif text-[#663b1f] text-xs sm:text-sm md:text-[0.95rem] mt-1 sm:mt-1.5 px-2 max-w-xl font-medium leading-relaxed">
            Sabhi pujayen Maa Bagalamukhi Mandir, Nalkheda mein swayam Guruji dwara sankalp ke saath ki jaati hain.
          </p>

          {/* Ornate Lotus Divider */}
          <div className="w-36 sm:w-52 my-2 sm:my-2.5">
            <LotusDivider />
          </div>

          {/* Central Pill Badge: 12 VISHESH ANUSHTHAN */}
          <div className="inline-flex items-center justify-center px-5 sm:px-6 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#42080f] via-[#5c0d15] to-[#42080f] border border-[#d89b18]/70 shadow-[0_3px_10px_rgba(92,13,21,0.35)]">
            <span className="font-serif text-[#ffe8b3] text-[0.7rem] sm:text-[0.78rem] font-bold tracking-[0.18em] uppercase">
              12 VISHESH ANUSHTHAN
            </span>
          </div>
        </div>

        {/* ============================================================
            3. THE 12 CARDS GRID (Mobile-First Optimized)
            ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4 xl:gap-5 mb-7 sm:mb-9">
          {SERVICES_LIST.map((service) => {
            const cardWhatsappUrl = createServiceWhatsappUrl(service.title);

            return (
              <a
                key={service.number}
                href={cardWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white hover:bg-[#fffdfa] border border-[#ebd9b8]/90 hover:border-[#d89b18] shadow-[0_2px_10px_rgba(216,155,24,0.06)] hover:shadow-[0_8px_22px_rgba(139,0,0,0.12)] active:scale-[0.99] transition-all duration-300 overflow-hidden"
                aria-label={`${service.title} - ${service.hindiTitle}`}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                {/* Subtle Sheen on Hover */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

                {/* Top Row: Number Tag (Left) & Medallion Icon (Right/Center) */}
                <div className="flex items-start gap-3 mb-2.5">
                  {/* Number Badge */}
                  <span className="font-serif text-[0.68rem] sm:text-[0.72rem] font-bold text-[#8a6840] bg-[#f7ebd4] border border-[#ebd9b8] px-2 py-0.5 rounded-full select-none flex-shrink-0">
                    {service.number}
                  </span>

                  {/* Circular Medallion Icon */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full aspect-square flex items-center justify-center bg-[radial-gradient(circle_at_center,#ffffff_20%,#fbf2db_75%,#f2dfbe_100%)] border border-[#dfc599] shadow-sm group-hover:scale-105 group-hover:border-[#c99542] transition-all duration-300 flex-shrink-0">
                    {service.icon}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="font-serif font-bold text-[#420c14] group-hover:text-[#8b0000] text-[0.95rem] sm:text-[1.02rem] leading-snug transition-colors duration-200" itemProp="name">
                      {service.title}
                    </h3>
                    <p className="font-serif text-[0.72rem] sm:text-xs text-[#b45309] font-medium mt-0.5">
                      {service.hindiTitle}
                    </p>
                  </div>
                </div>

                {/* Enriched Vedic Description */}
                <p className="font-serif text-[#633a1e] text-[0.78rem] sm:text-[0.8rem] leading-relaxed mb-2.5 flex-1">
                  {service.description}
                </p>

                {/* Bottom Row: Sanskrit Tag & Action Arrow Circle */}
                <div className="flex items-center justify-between pt-2 border-t border-[#ebd9b8]/50 mt-auto">
                  <span className="font-serif text-[0.66rem] text-[#9a6e3a] font-medium tracking-wide">
                    शास्त्रोक्त विधि
                  </span>

                  {/* Action Arrow Button */}
                  <div className="w-6 h-6 rounded-full bg-[#fbf0dc] group-hover:bg-[#8b0000] border border-[#e2cca4] group-hover:border-[#8b0000] flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5 text-[#6e4e2a] group-hover:text-white transition-colors duration-200" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* ============================================================
            4. TRUST BAR (Mobile-First 4 Sacred Guarantees)
            ============================================================ */}
        <div className="w-full bg-[#fffbf2]/95 border border-[#e8d7b8] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 shadow-sm mb-6 sm:mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-2 items-center md:divide-x md:divide-[#deb881]/50">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-left px-1 sm:px-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#fdeecf] border border-[#d89b18]/40 flex items-center justify-center flex-shrink-0 shadow-inner">
                  {pillar.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-serif font-bold text-[#4a0d16] text-[0.72rem] sm:text-xs leading-tight">
                    {pillar.label}
                  </p>
                  <p className="font-serif text-[#8f6a42] text-[0.65rem] sm:text-[0.7rem] leading-tight mt-0.5 truncate">
                    {pillar.hindi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        

      </div>
    </section>
  );
}
