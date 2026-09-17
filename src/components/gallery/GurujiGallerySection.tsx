"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  Flame,
  Award,
  Maximize2,
  X,
  Video,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";

interface GurujiPhoto {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  mantra: string;
}

const GURUJI_PHOTOS: GurujiPhoto[] = [
  {
    id: 1,
    image: "/guruji.png",
    title: "माँ बगलामुखी मुख्य उपासक",
    subtitle: "पूज्य पंडित शुभम शर्मा जी - सिद्धपीठ नलखेड़ा धाम",
    badge: "मुख्य पुरोहित",
    description:
      "माँ पीताम्बरा बगलामुखी के अनन्य साधक एवं सिद्धपीठ नलखेड़ा धाम के अधिकृत वरिष्ठ पुरोहित। 15+ वर्षों से लाखों श्रद्धालुओं को प्रत्यक्ष एवं ऑनलाइन माध्यम से मार्गदर्शन प्रदान कर रहे हैं।",
    mantra: "ॐ ह्लीं बगलामुख्यै सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा॥",
  },
  {
    id: 2,
    image: "/guruji2.png",
    title: "शास्त्रोक्त महाहवन एवं संकल्प",
    subtitle: "अखंड वैदिक आहुति एवं तांत्रिक सिद्धि विधान",
    badge: "यज्ञ साधना",
    description:
      "यज्ञशाला में विशेष वैदिक औषधियों, पीली सरसों व 1008 महामंत्रों की अखंड आहुतियों द्वारा शत्रु बाधा निवारण, कोर्ट-कचहरी विजय एवं व्यापार वृद्धि महायज्ञ संपन्न कराते हुए।",
    mantra: "ॐ ऐं ह्रीं श्रीं क्लीं पीताम्बरायै नमः स्वाहा॥",
  },
  {
    id: 3,
    image: "/guruji3.png",
    title: "आध्यात्मिक परामर्श एवं मार्गदर्शन",
    subtitle: "जन्मकुंडली विश्लेषण, गृह शांति व दोष निवारण",
    badge: "ज्योतिष व तंत्र परामर्श",
    description:
      "जातक के जीवन में कालसर्प, पितृ दोष, मांगलिक दोष, राहु-केतु पीड़ा अथवा व्यापारिक घाटे का वैदिक ज्योतिष एवं तंत्रोक्त पद्धतियों द्वारा अचूक समाधान।",
    mantra: "सर्वबाधाप्रशमनं त्रैलोक्यस्याखिलेश्वरि। एवमेव त्वया कार्यमस्मद्वैरिविनाशनम्॥",
  },
  {
    id: 4,
    image: "/guruji4.png",
    title: "सवा लाख महामंत्र सिद्ध अनुष्ठान",
    subtitle: "11 व 21 दिवसीय अखण्ड साधना सान्निध्य",
    badge: "सिद्ध अनुष्ठान",
    description:
      "कठिन से कठिन समस्याओं के समाधान हेतु विधिवत संकल्पित होकर ब्राह्मणों द्वारा संपन्न कराया जाने वाला सवा लाख महामंत्र जाप अनुष्ठान।",
    mantra: "ॐ ह्रीं क्लीं ह्रीं बगलामुख्यै नमः॥",
  },
];

export default function GurujiGallerySection() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! + 1) % GURUJI_PHOTOS.length);
  };

  const prevPhoto = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! - 1 + GURUJI_PHOTOS.length) % GURUJI_PHOTOS.length);
  };

  return (
    <section
      id="guruji-gallery"
      className="relative w-full py-3 sm:py-4 md:py-6 bg-gradient-to-b from-[#fffaf0] via-[#fffdfa] to-[#fff8e7] text-[#4a2618] overflow-hidden border-b border-[#ebdcb9]/80"
      aria-label="माँ बगलामुखी उपासक पूज्य पंडित शुभम शर्मा जी - चित्र दीर्घा व परिचय"
    >
      {/* Background Sacred Glows */}
      <div className="absolute top-1/4 left-5 w-[380px] h-[380px] bg-[#ffd778]/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-5 w-[420px] h-[420px] bg-[#fcd57e]/20 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            1. SECTION HEADER
            ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Top Peeth Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faedd2] border border-[#d89b18]/80 shadow-[0_2px_8px_rgba(216,155,24,0.16)] mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b77900] animate-pulse" />
            <span className="font-serif text-[#78350f] text-xs sm:text-sm font-bold tracking-wide">
              ॥ पूज्य गुरुजी दिव्य सान्निध्य ॥ • नलखेड़ा धाम
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-[2.65rem] font-serif font-bold text-[#420a10] tracking-tight leading-[1.2]">
            माँ बगलामुखी उपासक{" "}
            <span className="bg-gradient-to-r from-[#800000] via-[#b84724] to-[#d89b18] bg-clip-text text-transparent">
              पूज्य पंडित शुभम शर्मा जी
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#6d4330] font-serif leading-relaxed">
            सिद्धपीठ नलखेड़ा धाम में 15+ वर्षों से अखंड वैदिक सेवा, प्रत्यक्ष अनुष्ठान 
            एवं देश-विदेश के लाखों श्रद्धालुओं को माँ पीताम्बरा की कृपा से दिव्य मार्गदर्शन।
          </p>

          {/* Lotus Divider */}
          <div className="w-full max-w-md mx-auto my-3">
            <LotusDivider />
          </div>
        </div>

        {/* ============================================================
            2. GURUJI 4-PHOTO SHOWCASE GRID
            ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {GURUJI_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#ebdcb9] hover:border-[#d89b18] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(216,155,24,0.22)] transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Image Container with Gold Halo Frame */}
              <div className="relative aspect-[4/4.5] w-full bg-gradient-to-b from-[#fbf4e6] to-[#faeed7] overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top filter brightness-[1.02] contrast-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Soft Bottom Gradient for Text Readability */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#3d080e]/90 border border-[#ffd700]/70 text-[#ffd700] text-[10px] sm:text-xs font-serif font-bold shadow-md backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-[#ffd700]" />
                    <span>{photo.badge}</span>
                  </span>
                </div>

                {/* Zoom Icon Button (Hover) */}
                <div className="absolute bottom-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-black/60 border border-[#ffd700]/70 text-[#ffd700] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between bg-white border-t border-[#f4e6ca]">
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#420a10] group-hover:text-[#b84724] transition-colors leading-snug">
                    {photo.title}
                  </h3>
                  <p className="font-serif text-[11px] sm:text-xs text-[#78350f] font-medium mt-0.5 truncate">
                    {photo.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#f4e6ca] flex items-center justify-between text-[11px] font-serif text-[#8b4513]">
                  <span className="flex items-center gap-1 font-semibold text-[#b77900]">
                    <Flame className="w-3.5 h-3.5 text-[#d89b18]" />
                    <span>दर्शन एवं विवरण देखें</span>
                  </span>
                  <span className="text-[#d89b18] font-bold">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================
            3. GURUJI'S CREDENTIALS & VEDIC GUARANTEES
            ============================================================ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-8 sm:mb-10">
          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#ebdcb9] shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#faedd2] border border-[#d89b18]/60 flex items-center justify-center flex-shrink-0 text-[#b77900]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold font-serif text-[#420a10] leading-none">
                15+ वर्ष
              </div>
              <div className="text-[11px] sm:text-xs text-[#6d4330] font-serif mt-0.5">
                अखंड वैदिक साधना
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#ebdcb9] shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#faedd2] border border-[#d89b18]/60 flex items-center justify-center flex-shrink-0 text-[#b77900]">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold font-serif text-[#420a10] leading-none">
                25,000+
              </div>
              <div className="text-[11px] sm:text-xs text-[#6d4330] font-serif mt-0.5">
                सफल महाअनुष्ठान
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#ebdcb9] shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#faedd2] border border-[#d89b18]/60 flex items-center justify-center flex-shrink-0 text-[#b77900]">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold font-serif text-[#420a10] leading-none">
                लाइव संकल्प
              </div>
              <div className="text-[11px] sm:text-xs text-[#6d4330] font-serif mt-0.5">
                वीडियो कॉल दर्शन
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#ebdcb9] shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#faedd2] border border-[#d89b18]/60 flex items-center justify-center flex-shrink-0 text-[#b77900]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold font-serif text-[#420a10] leading-none">
                100%
              </div>
              <div className="text-[11px] sm:text-xs text-[#6d4330] font-serif mt-0.5">
                शास्त्रोक्त तंत्र विधि
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* ============================================================
          5. GURUJI LIGHTBOX MODAL
          ============================================================ */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-[#240307] border border-[#d89b18] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/70 border border-[#ffd700]/70 text-[#ffd700] hover:text-white flex items-center justify-center transition-transform hover:scale-110"
              aria-label="बंद करें"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image View */}
            <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto min-h-[280px] sm:min-h-[380px] bg-[#1a0204]">
              <Image
                src={GURUJI_PHOTOS[activePhotoIndex].image}
                alt={GURUJI_PHOTOS[activePhotoIndex].title}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#240307] via-transparent to-transparent md:hidden" />
            </div>

            {/* Right Details View */}
            <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-between text-[#fff8e7]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4a0810] border border-[#d89b18] text-[#ffd700] text-xs font-serif font-bold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
                  <span>{GURUJI_PHOTOS[activePhotoIndex].badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                  {GURUJI_PHOTOS[activePhotoIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#ffd700] font-serif mt-1 font-semibold">
                  {GURUJI_PHOTOS[activePhotoIndex].subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#faebd0]/90 font-serif mt-4 leading-relaxed">
                  {GURUJI_PHOTOS[activePhotoIndex].description}
                </p>

                {/* Mantra Box */}
                <div className="mt-4 p-3 rounded-xl bg-[#3d060e] border border-[#d89b18]/40 text-center">
                  <span className="text-[10px] uppercase font-serif tracking-widest text-[#ffd700] block mb-1">
                    ॥ दिव्य मंत्र ॥
                  </span>
                  <p className="font-serif text-xs sm:text-sm text-[#ffedd5] font-semibold leading-relaxed">
                    {GURUJI_PHOTOS[activePhotoIndex].mantra}
                  </p>
                </div>
              </div>

              {/* Lightbox Action Controls */}
              <div className="mt-6 pt-4 border-t border-[#d89b18]/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevPhoto}
                    className="w-8 h-8 rounded-full bg-[#3d060e] border border-[#d89b18]/60 text-[#ffd700] flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                    aria-label="पिछला चित्र"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="w-8 h-8 rounded-full bg-[#3d060e] border border-[#d89b18]/60 text-[#ffd700] flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                    aria-label="अगला चित्र"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <span className="text-xs font-serif font-bold text-[#ffd700]">
                  {activePhotoIndex + 1} / {GURUJI_PHOTOS.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
