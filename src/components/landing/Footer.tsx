import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Flame,
  ShieldCheck,
  Sparkles,
  Train,
  Plane,
  Car,
  ChevronRight,
  Sun,
  Moon,
  ExternalLink,
} from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";
import { DEFAULT_CONTACT } from "@/components/common/navbarcompo/constants";

/**
 * Footer Component
 * 100% Mobile & Multi-Screen Optimized:
 * - Mobile (<640px): Balanced 2-column internal grids for Services and Aarti timings, zero right-side blank gaps.
 * - Tablet (640px - 1023px): Symmetrical 2-Column Grid.
 * - Desktop (>=1024px): 4-Column Royal Vedic Sanctum Layout.
 * - Colors: Royal Deep Maroon (#1a0205, #240307), Gold (#d89b18, #ffd778), and Cream Ivory (#f7e7ce).
 * - Full SEO Schema.org HinduTemple, PostalAddress, Person, and LocalBusiness microdata.
 */
export default function Footer() {
  const whatsappUrl = `https://wa.me/${DEFAULT_CONTACT.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "जय माँ बगलामुखी! मुझे सिद्धपीठ नलखेड़ा धाम में पूजन, अनुष्ठान एवं दर्शन सम्बन्धी जानकारी प्राप्त करनी है।"
  )}`;

  const currentYear = new Date().getFullYear();

  // Structured Data for Temple Location & Priest Contact (SEO Schema.org)
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "HinduTemple",
    "name": "माँ बगलामुखी नलखेड़ा सिद्धपीठ धाम",
    "alternateName": "Maa Bagalamukhi Nalkheda Dham",
    "description":
      "विश्वप्रसिद्ध सिद्धपीठ माँ बगलामुखी मंदिर नलखेड़ा धाम—पूज्य पंडित शुभम शर्मा जी के सानिध्य में 100% शास्त्रोक्त वैदिक अनुष्ठान, हवन एवं शत्रु बाधा निवारण।",
    "url": "https://bagalamukhinalkhedadham.com",
    "telephone": DEFAULT_CONTACT.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "सिद्धपीठ माँ बगलामुखी मंदिर, लखुंदर नदी तट",
      "addressLocality": "Nalkheda",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "465445",
      "addressCountry": "IN",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "05:30",
        "closes": "21:30",
      },
    ],
    "founder": {
      "@type": "Person",
      "name": "पूज्य पंडित शुभम शर्मा जी",
      "jobTitle": "माँ बगलामुखी उपासक",
      "telephone": DEFAULT_CONTACT.phone,
    },
  };

  const SACRED_SERVICES_LINKS = [
    { name: "बगलामुखी महाहवन", href: "#sevayein" },
    { name: "सवा लाख जाप अनुष्ठान", href: "#sevayein" },
    { name: "सर्व शत्रु स्तम्भन", href: "#sevayein" },
    { name: "महालक्ष्मी साधना", href: "#sevayein" },
    { name: "राजनैतिक पद प्रतिष्ठा", href: "#sevayein" },
    { name: "असाध्य रोग निवारण", href: "#sevayein" },
    { name: "कालसर्प व नवग्रह शांति", href: "#sevayein" },
    { name: "विशेष तांत्रिक रक्षा कवच", href: "#sevayein" },
  ];

  return (
    <footer
      id="contact"
      className="relative isolate w-full max-w-full overflow-hidden bg-gradient-to-b from-[#1a0205] via-[#240307] to-[#120103] text-[#f7e7ce] border-t-2 border-[#d89b18]/60 shadow-[0_-12px_40px_rgba(0,0,0,0.7)] pt-8 sm:pt-12 lg:pt-14 pb-28 sm:pb-32 md:pb-12 lg:pb-14 z-20"
      aria-label="मंदिर संपर्क, दर्शन समय एवं गुरुजी विवरण"
      itemScope
      itemType="https://schema.org/HinduTemple"
    >
      {/* Schema.org Microdata for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Atmospheric Golden Glow on Top Border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ffd572] to-transparent opacity-90" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#d89b18]/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">

        {/* ============================================================
            MAIN FOOTER GRID (Optimized for 100% Mobile Width Utilization)
            ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 pb-8 sm:pb-12 border-b border-[#d89b18]/25">

          {/* ------------------------------------------------------------
              COL 1: BRAND, GURUJI IDENTITY & DHAM SANCTUM
              ------------------------------------------------------------ */}
          <div className="flex flex-col items-start text-left bg-[#2a0408]/60 sm:bg-transparent border border-[#d89b18]/30 sm:border-0 rounded-2xl p-4 sm:p-0">
            {/* Temple Brand Emblem & Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="temple-logo-frame w-13 h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#d89b18] shadow-[0_0_12px_rgba(216,155,24,0.4)] flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="माँ बगलामुखी नलखेड़ा धाम - पंडित शुभम शर्मा"
                  width={90}
                  height={90}
                  className="temple-logo-crop-img"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-[#ffd778] text-base sm:text-lg leading-tight uppercase tracking-wide">
                  माँ बगलामुखी नलखेड़ा धाम
                </h4>
                <p className="font-serif text-[#f87171] text-xs sm:text-sm font-semibold mt-0.5">
                  पूज्य पंडित शुभम शर्मा जी (उपासक)
                </p>
              </div>
            </div>

            {/* Sacred Description */}
            <p className="font-serif text-[#e4c9a8] text-xs sm:text-[0.84rem] leading-relaxed mb-3.5">
              विश्वप्रसिद्ध सिद्धपीठ माँ बगलामुखी धाम, नलखेड़ा (म.प्र.) में लखुंदर नदी के पावन तट पर स्थित त्रिशक्ति पीठ। यहाँ पूज्य गुरुजी के सानिध्य में 100% शास्त्रीय संकल्प एवं वैदिक तांत्रिक पद्धति से अनुष्ठान संपन्न कराए जाते हैं।
            </p>

            {/* Trust Highlights */}
            <div className="flex flex-col gap-2 w-full pt-2.5 border-t border-[#d89b18]/25 text-xs text-[#ebd5b5] font-serif">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f7c85f] flex-shrink-0" />
                <span>100% शास्त्रोक्त वैदिक एवं तांत्रिक पूजन विधि</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#f7c85f] flex-shrink-0" />
                <span>प्रत्यक्ष व ऑनलाइन लाइव संकल्प सुविधा उपलब्ध</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------
              COL 2: SACRED SERVICES & ANUSHTHAN (2 Columns on Mobile)
              ------------------------------------------------------------ */}
          <div className="flex flex-col items-start text-left bg-[#2a0408]/60 sm:bg-transparent border border-[#d89b18]/30 sm:border-0 rounded-2xl p-4 sm:p-0 w-full">
            <h4 className="font-serif font-bold text-[#ffd778] text-sm sm:text-base uppercase tracking-wider mb-3 pb-1 border-b border-[#d89b18]/40 w-full flex items-center justify-between">
              <span>प्रमुख अनुष्ठान एवं सेवाएँ</span>
              <span className="text-[#d89b18] text-xs">ॐ</span>
            </h4>

            {/* 2-Column Grid on Mobile to fill screen evenly without right-side blank gaps */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 w-full font-serif text-xs sm:text-[0.84rem]">
              {SACRED_SERVICES_LINKS.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-1.5 p-1.5 sm:p-0 rounded-lg bg-[#38060c]/50 sm:bg-transparent border border-[#d89b18]/20 sm:border-0 text-[#e2c7a6] hover:text-[#ffd778] hover:translate-x-0.5 transition-all duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#d89b18] flex-shrink-0" />
                  <span className="truncate">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------
              COL 3: TEMPLE TIMINGS & AARTI SCHEDULE (2 Cards on Mobile)
              ------------------------------------------------------------ */}
          <div className="flex flex-col items-start text-left bg-[#2a0408]/60 sm:bg-transparent border border-[#d89b18]/30 sm:border-0 rounded-2xl p-4 sm:p-0 w-full">
            <h4 className="font-serif font-bold text-[#ffd778] text-sm sm:text-base uppercase tracking-wider mb-3 pb-1 border-b border-[#d89b18]/40 w-full flex items-center justify-between">
              <span>दर्शन एवं आरती समय</span>
              <Clock className="w-4 h-4 text-[#d89b18]" />
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 w-full font-serif">
              {/* Morning Timing Card */}
              <div className="bg-[#38060c]/70 border border-[#d89b18]/30 rounded-xl p-2.5 w-full flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-[#ffd778] text-xs sm:text-sm font-bold mb-1">
                  <Sun className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="truncate">प्रातः दर्शन व पूजन</span>
                </div>
                <p className="text-[#f5deb3] text-[0.72rem] sm:text-xs">05:30 AM - 12:30 PM</p>
              </div>

              {/* Evening Timing Card */}
              <div className="bg-[#38060c]/70 border border-[#d89b18]/30 rounded-xl p-2.5 w-full flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-[#ffd778] text-xs sm:text-sm font-bold mb-1">
                  <Moon className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                  <span className="truncate">संध्या महाआरती</span>
                </div>
                <p className="text-[#f5deb3] text-[0.72rem] sm:text-xs">06:30 PM - 09:30 PM</p>
              </div>
            </div>

            {/* Hawan Timings Info */}
            <div className="mt-3 pt-2 border-t border-[#d89b18]/25 text-[0.74rem] sm:text-xs text-[#cbb190] leading-snug w-full font-serif">
              <p className="font-semibold text-[#ffd778] flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" /> अखंड महाहवन समय:
              </p>
              <p className="mt-0.5">दैनिक प्रातः 07:00 AM से (संकल्प मुहूर्त अनुसार)</p>
            </div>
          </div>

          {/* ------------------------------------------------------------
              COL 4: DHAM LOCATION & TRANSIT GUIDE
              ------------------------------------------------------------ */}
          <div className="flex flex-col items-start text-left bg-[#2a0408]/60 sm:bg-transparent border border-[#d89b18]/30 sm:border-0 rounded-2xl p-4 sm:p-0 w-full">
            <h4 className="font-serif font-bold text-[#ffd778] text-sm sm:text-base uppercase tracking-wider mb-3 pb-1 border-b border-[#d89b18]/40 w-full flex items-center justify-between">
              <span>मंदिर स्थल व यात्रा मार्ग</span>
              <MapPin className="w-4 h-4 text-[#d89b18]" />
            </h4>

            {/* Address Box */}
            <div className="text-xs sm:text-[0.82rem] font-serif text-[#e4c9a8] space-y-2.5 w-full">
              <div className="flex items-start gap-2 bg-[#38060c]/50 sm:bg-transparent p-2 sm:p-0 rounded-lg border border-[#d89b18]/20 sm:border-0">
                <MapPin className="w-4 h-4 text-[#f87171] flex-shrink-0 mt-0.5" />
                <p className="leading-snug">
                  सिद्धपीठ माँ बगलामुखी मंदिर, लखुंदर नदी तट, नलखेड़ा, जिला - आगर मालवा (म.प्र.) - 465445
                </p>
              </div>

              {/* Transit Details */}
              <div className="pt-2 border-t border-[#d89b18]/25 space-y-1.5 text-[0.72rem] sm:text-[0.76rem] text-[#c9ae8f] w-full">
                <div className="flex items-center gap-2">
                  <Train className="w-3.5 h-3.5 text-[#f7c85f] flex-shrink-0" />
                  <span>रेलवे: उज्जैन जं. (90 किमी), नागदा (85 किमी)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="w-3.5 h-3.5 text-[#f7c85f] flex-shrink-0" />
                  <span>एयरपोर्ट: इंदौर देवी अहिल्याबाई (165 किमी)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-[#f7c85f] flex-shrink-0" />
                  <span>इंदौर व उज्जैन से नियमित बस व टैक्सी सेवा</span>
                </div>
              </div>

              {/* Direct Call & WhatsApp Quick Buttons for Mobile & Desktop */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#d89b18]/25 w-full">
                <a
                  href={`tel:${DEFAULT_CONTACT.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-gradient-to-r from-[#c31b1b] to-[#880000] text-white font-serif font-bold text-[0.72rem] shadow-sm active:scale-95 transition-transform"
                  aria-label="Direct Phone Call"
                >
                  <Phone className="w-3 h-3 fill-white" />
                  <span>कॉल करें</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-gradient-to-r from-[#16a34a] to-[#14532d] text-white font-serif font-bold text-[0.72rem] shadow-sm active:scale-95 transition-transform"
                  aria-label="WhatsApp Consultation"
                >
                  <MessageCircle className="w-3 h-3 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================
            3. SACRED MANTRARTHA & CHANT BAR
            ============================================================ */}
        <div className="py-6 text-center">
          <div className="w-full max-w-sm sm:max-w-md mx-auto mb-3">
            <LotusDivider />
          </div>

          <p className="font-serif font-bold text-sm sm:text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#ffe49e] via-[#fce293] to-[#ffd778] tracking-wide px-2 leading-relaxed">
            ॥ ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥
          </p>

          <p className="font-serif text-[#b89c7c] text-[0.74rem] sm:text-xs tracking-widest uppercase mt-1">
            श्री माँ बगलामुखी त्रि-शक्ति सिद्धपीठ धाम • नलखेड़ा (आगर मालवा)
          </p>
        </div>

        {/* ============================================================
            4. COPYRIGHT & LEGAL BAR
            ============================================================ */}
        <div className="pt-4 border-t border-[#d89b18]/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[0.74rem] sm:text-xs font-serif text-[#a88d6e]">
          <p>
            © {currentYear} माँ बगलामुखी नलखेड़ा धाम | पूज्य पंडित शुभम शर्मा जी (उपासक). सर्वाधिकार सुरक्षित।
          </p>
          <div className="flex items-center gap-4 text-[#cfb28e]">
            <Link href="#sevayein" className="hover:text-[#ffd778] transition-colors">
              सेवाएं
            </Link>
            <span>•</span>
            <Link href="#mandir" className="hover:text-[#ffd778] transition-colors">
              धाम दर्शन
            </Link>
            <span>•</span>
            <a href={`tel:${DEFAULT_CONTACT.phone}`} className="hover:text-[#ffd778] transition-colors">
              संपर्क
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}


