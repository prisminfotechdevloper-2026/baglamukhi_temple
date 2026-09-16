"use client";

import React from "react";
import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck, Flame, Sparkles, Video, Award, CheckCircle2 } from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";
import { DEFAULT_CONTACT } from "@/components/common/navbarcompo/constants";
import gurujiImage from "../../../public/guruji.png";

/**
 * GurujiBioSection Component - Redesigned
 * - Right Side: Circular Guruji portrait (border-radius: 50%) encircled by an infinite 360-degree rotating Vedic Service Wheel (SVG textPath) and orbiting blessing badges
 * - Left Side: Prestigious, authoritative Vedic biography, experience statistics, key anushthan specializations, and luxury CTA buttons
 * - 100% Mobile & All-Screen Responsive with pure SVG icons and Schema.org SEO Structured Data
 */
export default function GurujiBioSection() {
  const whatsappUrl = `https://wa.me/${DEFAULT_CONTACT.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "जय माँ बगलामुखी! पूज्य गुरुजी (पंडित शुभम शर्मा जी), मुझे सिद्धपीठ नलखेड़ा धाम में पूजन एवं अनुष्ठान संकल्प बुक करना है।"
  )}`;

  // Schema.org Structured Data for Pujya Pandit Shubham Sharma Ji (SEO)
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "पंडित शुभम शर्मा जी (गुरुजी)",
    alternateName: "Pt. Shubham Sharma - Maa Bagalamukhi Upasak",
    jobTitle: "पंजीकृत वरिष्ठ पुरोहित एवं माँ बगलामुखी मुख्य उपासक",
    worksFor: {
      "@type": "HinduTemple",
      name: "विश्वप्रसिद्ध सिद्धपीठ माँ बगलामुखी मंदिर, नलखेड़ा धाम",
      address: {
        "@type": "PostalAddress",
        streetAddress: "लखुंदर नदी तट, माँ बगलामुखी मंदिर",
        addressLocality: "Nalkheda",
        addressRegion: "Madhya Pradesh",
        postalCode: "465445",
        addressCountry: "IN",
      },
    },
    telephone: DEFAULT_CONTACT.phone,
    image: "https://bagalamukhinalkhedadham.com/guruji.png",
    description:
      "विश्वप्रसिद्ध सिद्धपीठ माँ बगलामुखी मंदिर नलखेड़ा धाम के समर्पित पंजीकृत वरिष्ठ पुरोहित। शास्त्रोक्त विधि से महाहवन, शत्रु स्तम्भन, सवा लाख जाप, कालसर्प व नवग्रह शांति अनुष्ठान विशेषज्ञ।",
    knowsAbout: [
      "Maa Bagalamukhi Tantra & Hawan",
      "Vedic Rituals & Anushthan",
      "Shatru Stambhan Sadhana",
      "Kaal Sarp & Navgraha Shanti",
      "Vedic Astrology & Kundali Consultation",
    ],
  };

  return (
    <section
      id="guruji"
      className="relative isolate w-full max-w-full overflow-hidden bg-gradient-to-b from-[#fff9eb] via-[#fffbf4] to-[#fff4da] py-3 sm:py-5 lg:py-3 border-b border-[#ebdcb9]/80 z-10"
      aria-label="माँ बगलामुखी उपासक पूज्य पंडित शुभम शर्मा जी - परिचय एवं संकल्प"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Schema.org Structured Data for Google Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Atmospheric Sacred Glow Background */}
      <div className="absolute top-1/4 left-5 w-[380px] h-[380px] bg-[#ffd778]/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-5 w-[420px] h-[420px] bg-[#fcd57e]/18 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* ============================================================
              LEFT COLUMN: VEDIC AUTHORITY, BIO, STATS & CONTACT ACTIONS (7 cols)
              ============================================================ */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Sacred Saffron Pill: NALKHEDA DHAM */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#faedd2] border border-[#d89b18]/80 shadow-[0_2px_8px_rgba(216,155,24,0.16)] mb-2.5 sm:mb-3">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b77900] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C11 5 8 8 5 9c3 1 5 3 6 6 1-3 3-5 6-6-3-1-5-4-5-7z M12 14c-1.5 2-4 3.5-7 4 3 .5 5.5 2 7 4 1.5-2 4-3.5 7-4-3-.5-5.5-2-7-4z" />
              </svg>
              <span className="font-serif text-[#78350f] text-[0.72rem] sm:text-xs md:text-[0.80rem] font-bold tracking-[0.14em] uppercase">
                ॥ विश्वप्रसिद्ध सिद्धपीठ • माँ बगलामुखी धाम नलखेड़ा ॥
              </span>
            </div>

            {/* Sacred Devanagari Salutation */}
            <div className="flex items-center gap-2 mb-1 text-[#8b0000]">
              <span className="text-xs sm:text-sm font-serif font-bold text-[#b77900]">॥ ॐ ॥</span>
              <h3 className="font-serif font-bold text-xs sm:text-sm md:text-base tracking-widest uppercase">
                माँ बगलामुखी मुख्य उपासक
              </h3>
              <span className="text-xs sm:text-sm font-serif font-bold text-[#b77900]">॥ ॐ ॥</span>
            </div>

            {/* Main Primary Heading */}
            <h2
              className="font-serif font-bold text-[#420a10] text-2xl xs:text-3xl sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem] leading-[1.14] tracking-tight mb-1.5 sm:mb-2"
              itemProp="name"
            >
              पूज्य पंडित शुभम शर्मा जी
            </h2>

            {/* English Authority Subtitle */}
            <p className="font-serif font-semibold text-[#8b0000] text-sm xs:text-base sm:text-lg mb-2.5 sm:mb-3 leading-snug">
              Panjikrit Senior Purohit & Tantra Hawan Specialist
            </p>

            {/* Enriched Vedic Description */}
            <p
              className="font-serif text-[#523220] text-xs sm:text-sm md:text-[0.94rem] leading-relaxed mb-4 sm:mb-5 max-w-2xl"
              itemProp="description"
            >
              विश्वप्रसिद्ध <strong className="text-[#420a10] font-bold">सिद्धपीठ माँ बगलामुखी मंदिर (नलखेड़ा धाम, आगर मालवा, म.प्र.)</strong> के समर्पित पंजीकृत पुरोहित। शास्त्रोक्त वैदिक पद्धति द्वारा माँ बगलामुखी महाहवन, शत्रु स्तम्भन, कोर्ट-कचहरी विजय, सवा लाख महामंत्र जाप, कालसर्प व नवग्रह शांति अनुष्ठान पूर्ण श्रद्धा, संकल्प और वैदिक मर्यादा के साथ संपन्न कराए जाते हैं।
            </p>

            {/* 3 Prestigious Authority Stats Pillars */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 w-full max-w-lg mb-4 sm:mb-5">
              <div className="flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl bg-[#faebd0]/85 border border-[#deb881] shadow-sm">
                <span className="font-serif font-extrabold text-[#700913] text-base xs:text-lg sm:text-2xl leading-none mb-0.5">
                  15+ वर्ष
                </span>
                <span className="font-serif text-[#78350f] text-[0.62rem] sm:text-xs font-semibold text-center leading-tight">
                  अखंड साधना व अनुभव
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl bg-[#faebd0]/85 border border-[#deb881] shadow-sm">
                <span className="font-serif font-extrabold text-[#700913] text-base xs:text-lg sm:text-2xl leading-none mb-0.5">
                  51,000+
                </span>
                <span className="font-serif text-[#78350f] text-[0.62rem] sm:text-xs font-semibold text-center leading-tight">
                  सफल यजमान संकल्प
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl bg-[#faebd0]/85 border border-[#deb881] shadow-sm">
                <span className="font-serif font-extrabold text-[#700913] text-base xs:text-lg sm:text-2xl leading-none mb-0.5">
                  100%
                </span>
                <span className="font-serif text-[#78350f] text-[0.62rem] sm:text-xs font-semibold text-center leading-tight">
                  शास्त्रोक्त विधान
                </span>
              </div>
            </div>

            {/* Key Service Features List */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2 w-full max-w-lg mb-5 text-left">
              {[
                "प्रत्यक्ष व ऑनलाइन लाइव संकल्प सुविधा",
                "योग्य वैदिक ब्राह्मणों द्वारा सवा लाख जाप",
                "गोत्र-नाम सहित शास्त्रोक्त अखंड आहुति",
                "सिद्ध अभिमंत्रित रक्षा कवच व प्रसाद प्रेषण",
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[0.74rem] sm:text-[0.82rem] text-[#523220] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Two High-Impact Direct Action Buttons */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 w-full xs:w-auto mb-5">
              {/* WhatsApp Button (Red Gradient Pill with sheen) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-gradient-to-r from-[#880e1a] via-[#a31222] to-[#700913] text-white font-serif font-bold text-xs xs:text-sm sm:text-base shadow-[0_4px_16px_rgba(139,0,0,0.32)] border border-[#ffd778]/60 hover:shadow-[0_6px_22px_rgba(139,0,0,0.45)] active:scale-95 transition-all duration-200"
                aria-label="Book puja on WhatsApp with Pandit Ji"
              >
                {/* Sheen sweep animation */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent button-sheen-sweep pointer-events-none" />

                {/* WhatsApp official SVG icon */}
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.961.828 2.796.828 3.182 0 5.768-2.587 5.768-5.766.001-3.181-2.585-5.815-5.768-5.815zm3.433 8.243c-.145.408-.838.749-1.164.797-.325.048-.745.074-2.395-.572-1.428-.56-2.346-2.008-2.417-2.103-.071-.096-.583-.775-.583-1.479 0-.703.367-1.05.498-1.194.131-.144.286-.18.382-.18.095 0 .191.002.274.006.089.004.208-.034.325.247.12.287.408 1.002.444 1.074.036.072.06.156.012.251-.048.096-.072.156-.144.239-.072.084-.152.187-.217.251-.072.072-.147.151-.063.295.084.144.373.616.802.998.552.492 1.017.644 1.161.716.144.072.228.06.313-.036.084-.096.36-419.456-.563.096-.144.192-.12.324-.072.132.048.838.395.982.467.144.072.24.108.276.168.036.06.036.348-.109.756z" />
                  </svg>
                </div>
                <span>WhatsApp Par Sankalp Book Karein</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffd778] group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>

              {/* Call Button (Warm Ivory Pill with Gold Rim) */}
              <a
                href={`tel:${DEFAULT_CONTACT.phone}`}
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[#fffcf5] text-[#420a10] font-serif font-bold text-xs xs:text-sm sm:text-base border-2 border-[#d89b18] shadow-[0_2px_10px_rgba(216,155,24,0.18)] hover:bg-[#faebd0] hover:text-[#8b0000] active:scale-95 transition-all duration-200"
                aria-label={`Call Guruji at ${DEFAULT_CONTACT.displayPhone}`}
                itemProp="telephone"
              >
                {/* Sheen sweep animation */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#d89b18]/15 to-transparent button-sheen-sweep pointer-events-none" />

                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#8b0000]/10 border border-[#8b0000]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8b0000]" />
                </div>
                <span>Guruji Se Direct Baat Karein</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8b0000] group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </div>

            {/* Lotus Divider */}
            <div className="w-full max-w-sm">
              <LotusDivider />
            </div>

          </div>

          {/* ============================================================
              RIGHT COLUMN: CIRCULAR GURUJI PORTRAIT & 360° INFINITE ROTATING SERVICE WHEEL (5 cols)
              ============================================================ */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-4 lg:mt-0 select-none">

            {/* Circular Orbit & Rotating Wheel Container (Enlarged) */}
            <div className="relative w-[320px] h-[320px] xs:w-[360px] xs:h-[360px] sm:w-[440px] sm:h-[440px] md:w-[480px] md:h-[480px] lg:w-[530px] lg:h-[530px] xl:w-[560px] xl:h-[560px] flex items-center justify-center group my-2 sm:my-0">

              {/* 1. Concentric Golden Atmospheric Glow Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ffd778]/30 via-[#fde3ab]/20 to-[#d89b18]/30 blur-2xl pointer-events-none animate-aura-pulse" />
              <div className="absolute inset-2 sm:inset-3 rounded-full border border-[#d89b18]/45 border-dashed pointer-events-none" />
              <div className="absolute inset-5 sm:inset-7 rounded-full border border-[#deb881]/50 pointer-events-none" />

              {/* 2. 360-DEGREE INFINITE ROTATING VEDIC SERVICE TEXT WHEEL (SVG textPath - Left to Right Reverse Rotation) */}
              <svg
                className="absolute inset-0 w-full h-full animate-spin-reverse-slow group-hover:[animation-play-state:paused] transition-all duration-300 pointer-events-none"
                viewBox="0 0 560 560"
              >
                <defs>
                  {/* Circular path around the center with radius = 245 (circumference = 1539.4px) */}
                  <path
                    id="serviceTextCircle"
                    d="M 280, 280 m -245, 0 a 245,245 0 1,1 490,0 a 245,245 0 1,1 -490,0"
                  />
                </defs>

                {/* Outer Dashed Orbit Track */}
                <circle
                  cx="280"
                  cy="280"
                  r="245"
                  fill="none"
                  stroke="#d89b18"
                  strokeWidth="1.5"
                  strokeDasharray="8 6"
                  opacity="0.45"
                />

                {/* Rotating Sanskrit & Hindi Service Names with Distinct Spacing & Sacred ॐ Separators */}
                <text
                  xmlSpace="preserve"
                  className="font-serif font-bold text-[13.5px] sm:text-[14.5px] fill-[#700913] tracking-wide"
                >
                  <textPath href="#serviceTextCircle" startOffset="0%">
                    {"\u00A0\u00A0॥ ॐ ॥\u00A0\u00A0 माँ बगलामुखी महाहवन \u00A0\u00A0॥ ॐ ॥\u00A0\u00A0 शत्रु स्तम्भन अनुष्ठान \u00A0\u00A0॥ ॐ ॥\u00A0\u00A0 कोर्ट-कचहरी विजय \u00A0\u00A0॥ ॐ ॥\u00A0\u00A0 सवा लाख महामंत्र जाप \u00A0\u00A0॥ ॐ ॥\u00A0\u00A0 कालसर्प दोष शांति \u00A0\u00A0॥ ॐ ॥\u00A0\u00A0 व्यापार वृद्धि अनुष्ठान \u00A0\u00A0॥ ॐ ॥\u00A0\u00A0 नवग्रह बाधा निवारण \u00A0\u00A0॥ ॐ ॥\u00A0\u00A0 पितृ दोष शांति \u00A0\u00A0"}
                  </textPath>
                </text>
              </svg>

              {/* 3. Cardinal Sacred ॐ Motifs on Orbit (Top, Right, Bottom, Left - Pure Vedic ॐ Symbols) */}
              {/* TOP CARDINAL OM */}
              <div className="absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-[#ffe7a3] via-[#d89b18] to-[#8f5d00] border-2 border-white shadow-[0_2px_8px_rgba(216,155,24,0.6)] flex items-center justify-center">
                  <span className="font-serif font-extrabold text-white text-xs sm:text-sm drop-shadow-sm">ॐ</span>
                </div>
              </div>

              {/* RIGHT CARDINAL OM */}
              <div className="absolute top-1/2 -right-1.5 sm:-right-2 -translate-y-1/2 z-20 flex items-center justify-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-[#ffe7a3] via-[#d89b18] to-[#8f5d00] border-2 border-white shadow-[0_2px_8px_rgba(216,155,24,0.6)] flex items-center justify-center">
                  <span className="font-serif font-extrabold text-white text-xs sm:text-sm drop-shadow-sm">ॐ</span>
                </div>
              </div>

              {/* BOTTOM CARDINAL OM */}
              <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-[#ffe7a3] via-[#d89b18] to-[#8f5d00] border-2 border-white shadow-[0_2px_8px_rgba(216,155,24,0.6)] flex items-center justify-center">
                  <span className="font-serif font-extrabold text-white text-xs sm:text-sm drop-shadow-sm">ॐ</span>
                </div>
              </div>

              {/* LEFT CARDINAL OM */}
              <div className="absolute top-1/2 -left-1.5 sm:-left-2 -translate-y-1/2 z-20 flex items-center justify-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-[#ffe7a3] via-[#d89b18] to-[#8f5d00] border-2 border-white shadow-[0_2px_8px_rgba(216,155,24,0.6)] flex items-center justify-center">
                  <span className="font-serif font-extrabold text-white text-xs sm:text-sm drop-shadow-sm">ॐ</span>
                </div>
              </div>

              {/* 4. THE 50% BORDER RADIUS CIRCULAR GURUJI PORTRAIT (ENLARGED) */}
              <div className="relative w-[220px] h-[220px] xs:w-[250px] xs:h-[250px] sm:w-[310px] sm:h-[310px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden p-2 sm:p-2.5 bg-gradient-to-b from-[#fae29c] via-[#d89b18] to-[#8a5900] shadow-[0_20px_50px_rgba(139,0,0,0.32),0_0_45px_rgba(216,155,24,0.4)] ring-4 ring-[#fff6dc] ring-offset-4 ring-offset-[#fff8e7] z-10 group-hover:scale-[1.02] transition-transform duration-500">

                {/* Inner Circular Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#240307]">
                  <Image
                    src={gurujiImage}
                    alt="माँ बगलामुखी उपासक पूज्य पंडित शुभम शर्मा जी (गुरुजी) - नलखेड़ा धाम"
                    fill
                    priority
                    quality={95}
                    placeholder="blur"
                    sizes="(max-width: 640px) 250px, (max-width: 1024px) 380px, 420px"
                    itemProp="image"
                    className="object-cover object-[center_10%] scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle Inner Glow Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0204]/85 via-transparent via-55% to-[#1a0204]/20 pointer-events-none" />

                  {/* Bottom Ribbon on the circular portrait */}
                  <div className="absolute bottom-2.5 sm:bottom-3 inset-x-3 sm:inset-x-6 py-1 px-2.5 text-center bg-gradient-to-r from-[#4a0000]/95 via-[#850811]/95 to-[#4a0000]/95 rounded-full border border-[#f4d58d]/80 shadow-md backdrop-blur-sm">
                    <p className="font-serif font-bold text-white text-[0.62rem] xs:text-[0.70rem] sm:text-[0.80rem] tracking-wider drop-shadow-sm truncate">
                      ॥ श्री बगलामुखी देव्यै नमः ॥
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Live Puja & Darshan Badge below the circle on all devices */}
            <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#faebd0]/90 border border-[#d89b18]/70 shadow-sm backdrop-blur-sm">
               <span className="font-serif text-[#700913] text-[0.70rem] sm:text-xs font-bold tracking-wide">
                प्रत्यक्ष मंदिर व ऑनलाइन लाइव वीडियो अनुष्ठान उपलब्ध
              </span>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
}
