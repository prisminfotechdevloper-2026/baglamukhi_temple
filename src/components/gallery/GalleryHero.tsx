"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Eye,
  ShieldCheck,
  Flame,
  MapPin,
  ArrowDown,
  Camera,
} from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSlide {
  id: number;
  image: string;
  titleHi: string;
  titleEn: string;
  subtitleHi: string;
  subtitleEn: string;
  badgeHi: string;
  badgeEn: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "/mandir/mandir-complex-panoramic.jpg",
    titleHi: "नलखेड़ा धाम विहंगम परिसर",
    titleEn: "Nalkheda Dham Panoramic Complex",
    subtitleHi: "सिद्ध शक्तिपीठ माँ बगलामुखी का भव्य व पावन प्रांगण",
    subtitleEn: "Grand, auspicious courtyard of Siddha Shaktipeeth",
    badgeHi: "महाशक्तिपीठ परिसर",
    badgeEn: "Maha Shaktipeeth Courtyard",
    alt: "Maa Baglamukhi Mandir Nalkheda Panoramic Darshan",
  },
  {
    id: 2,
    image: "/mandir/baglamukhi-divine-darshan.jpg",
    titleHi: "पावन गर्भगृह दिव्य दर्शन",
    titleEn: "Sacred Sanctum Sanctorum",
    subtitleHi: "स्वर्ण मुकुट, त्रिशक्ति विग्रह व दिव्य पीताम्बरा स्वरूप",
    subtitleEn: "Golden crown, Tri-Shakti deity & divine Pitambara form",
    badgeHi: "साक्षात दिव्य दर्शन",
    badgeEn: "Direct Divine Darshan",
    alt: "Maa Baglamukhi Garbhagriha Darshan",
  },
  {
    id: 3,
    image: "/mandir/mandir-night-darshan.jpg",
    titleHi: "रात्रि महाआरती एवं दीप प्रभा",
    titleEn: "Night Illumination & Maha Aarti",
    subtitleHi: "दिव्य स्वर्णिम आभा, दीप प्रकाश एवं अखंड ज्योति दर्शन",
    subtitleEn: "Golden aura, sacred oil lamps & eternal flame",
    badgeHi: "रात्रि दीप दर्शन",
    badgeEn: "Night Lamp Darshan",
    alt: "Maa Baglamukhi Temple Night Deep Darshan",
  },
  {
    id: 4,
    image: "/mandir/mandir-main-facade.jpg",
    titleHi: "प्राचीन मंदिर मुख्य शिखर",
    titleEn: "Ancient Temple Main Shikhara",
    subtitleHi: "महाभारत कालीन पावन ध्वजा, स्वर्ण कलश एवं वास्तुकला",
    subtitleEn: "Mahabharata era flag, golden pinnacle & architecture",
    badgeHi: "प्राचीन शिखर दर्शन",
    badgeEn: "Ancient Shikhara",
    alt: "Maa Baglamukhi Temple Main Shikhara",
  },
  {
    id: 5,
    image: "/mandir/temple-view-front.jpg",
    titleHi: "सिद्ध प्रांगण एवं यज्ञशाला",
    titleEn: "Sacred Courtyard & Yajnashala",
    subtitleHi: "लखुंदर नदी तट पर स्थित जागृत महायज्ञ तपोभूमि",
    subtitleEn: "Energized sacred yajna grounds along Lakhundar river",
    badgeHi: "अखंड तपोभूमि",
    badgeEn: "Sacred Tapobhoomi",
    alt: "Maa Baglamukhi Temple Yajnashala",
  },
];

const SLIDE_INTERVAL_MS = 3000;

export default function GalleryHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { t, language } = useLanguage();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  useEffect(() => {
    const intervalTime = 50;
    const totalSteps = SLIDE_INTERVAL_MS / intervalTime;
    let currentStep = 0;

    progressTimerRef.current = setInterval(() => {
      currentStep += 1;
      setProgress(Math.min((currentStep / totalSteps) * 100, 100));
    }, intervalTime);

    timerRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [currentSlide, nextSlide]);

  return (
    <section
      className="relative isolate w-full overflow-hidden pt-3.5 sm:pt-6 md:pt-8 pb-5 sm:pb-7 md:pb-9 border-b border-[#d89b18]/40"
      aria-label="माँ बगलामुखी दिव्य चित्र दीर्घा"
    >
      {/* 1. FULL-WIDTH BACKGROUND SLIDER */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              style={{
                transition: "opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 4s ease-out",
                transform: isActive ? "scale(1.02)" : "scale(1.06)",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={95}
                sizes="100vw"
                className="object-cover object-center select-none"
              />
            </div>
          );
        })}

        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75 z-20 pointer-events-none" />
      </div>

      {/* 2. MAJESTIC GALLERY HERO CONTENT */}
      <div className="max-w-6xl mx-auto w-full px-3.5 sm:px-6 md:px-8 relative z-30 flex flex-col items-center text-center">

        {/* Top Navigation & Live Slide Indicator */}
        <div className="w-full flex items-center justify-between gap-2 mb-2 sm:mb-2.5">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs sm:text-[0.82rem] text-[#f6dd9f]/90 font-serif"
          >
            <Link
              href="/"
              className="hover:text-[#ffd700] transition-colors flex items-center gap-1"
            >
              <span>{t.gallery.breadcrumbHome}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#d89b18]" />
            <span className="text-[#ffd700] font-semibold">
              {t.gallery.breadcrumbGallery}
            </span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 border border-[#d89b18]/70 shadow-xs text-[11px] sm:text-xs font-serif text-[#ffd700] backdrop-blur-md">
            <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f4d58d]" />
            <span className="font-bold">
              {t.gallery.slideCounterLabel} {currentSlide + 1} / {HERO_SLIDES.length}
            </span>
          </div>
        </div>

        {/* Sacred Peeth Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d89b18] shadow-[0_2px_12px_rgba(0,0,0,0.5)] backdrop-blur-md mb-1.5 sm:mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#f4d58d] animate-pulse" />
          <span className="font-serif text-[#fbe9b9] text-xs sm:text-[0.82rem] tracking-wide font-semibold">
            {t.gallery.heroBadge}
          </span>
        </div>

        {/* Main Sacred Gallery Heading */}
        <h1 className="font-serif font-bold text-white tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] leading-[1.18] drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] max-w-4xl">
          {t.gallery.heroTitle}{" "}
          <span className="bg-gradient-to-r from-[#ffe49e] via-[#f7c85f] to-[#d89b18] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(216,155,24,0.5)]">
            {t.gallery.heroHighlight}
          </span>
        </h1>

        {/* Gallery Sub-headline */}
        <p className="font-serif text-[#ffedd5] text-xs sm:text-sm md:text-base mt-1.5 max-w-3xl font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] leading-relaxed">
          {t.gallery.heroSubtitle}
        </p>

        {/* Ornate Lotus Divider */}
        <div className="w-full max-w-xs sm:max-w-md my-2">
          <LotusDivider />
        </div>

        {/* 3. 4 SACRED HIGHLIGHTS CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full max-w-3xl my-2">
          <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-black/55 backdrop-blur-md border border-[#d89b18]/45 border-l-[3.5px] sm:border-l-[4px] border-l-[#d89b18] shadow-md text-left">
            <div className="w-7 h-7 rounded-lg bg-[#3d080e] border border-[#d89b18]/60 flex items-center justify-center text-[#ffd700] flex-shrink-0">
              <Eye className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[#eed6a8] font-serif font-medium leading-none">{t.gallery.statDarshan}</p>
              <p className="text-xs font-serif font-bold text-white truncate mt-0.5">{t.gallery.statDarshanVal}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-black/55 backdrop-blur-md border border-[#d89b18]/45 border-l-[3.5px] sm:border-l-[4px] border-l-[#d89b18] shadow-md text-left">
            <div className="w-7 h-7 rounded-lg bg-[#3d080e] border border-[#d89b18]/60 flex items-center justify-center text-[#ffd700] flex-shrink-0">
              <Flame className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[#eed6a8] font-serif font-medium leading-none">{t.gallery.statJyoti}</p>
              <p className="text-xs font-serif font-bold text-white truncate mt-0.5">{t.gallery.statJyotiVal}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-black/55 backdrop-blur-md border border-[#d89b18]/45 border-l-[3.5px] sm:border-l-[4px] border-l-[#d89b18] shadow-md text-left">
            <div className="w-7 h-7 rounded-lg bg-[#3d080e] border border-[#d89b18]/60 flex items-center justify-center text-[#ffd700] flex-shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[#eed6a8] font-serif font-medium leading-none">{t.gallery.statSangam}</p>
              <p className="text-xs font-serif font-bold text-white truncate mt-0.5">{t.gallery.statSangamVal}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-black/55 backdrop-blur-md border border-[#d89b18]/45 border-l-[3.5px] sm:border-l-[4px] border-l-[#d89b18] shadow-md text-left">
            <div className="w-7 h-7 rounded-lg bg-[#3d080e] border border-[#d89b18]/60 flex items-center justify-center text-[#ffd700] flex-shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[#eed6a8] font-serif font-medium leading-none">{t.gallery.statVidhi}</p>
              <p className="text-xs font-serif font-bold text-white truncate mt-0.5">{t.gallery.statVidhiVal}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col xs:flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full xs:w-auto my-2 sm:my-2.5">
          <a
            href="#gallery-grid"
            className="w-full xs:w-auto min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#d89b18] via-[#e5b338] to-[#c6890c] text-[#3d0309] font-serif font-bold text-xs sm:text-sm md:text-base shadow-[0_4px_18px_rgba(216,155,24,0.45)] hover:shadow-[0_6px_25px_rgba(216,155,24,0.65)] hover:scale-[1.02] active:scale-95 transition-all duration-200 border border-[#ffe8a3]"
          >
            <span>{t.gallery.btnExplore}</span>
            <ArrowDown className="w-4 h-4 text-[#3d0309] animate-bounce" />
          </a>
        </div>

        {/* 4. 5-SEGMENT INTERACTIVE SLIDER BAR */}
        <div className="w-full max-w-4xl mt-3 pt-2.5 border-t border-[#d89b18]/30">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous image"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-[#d89b18]/60 text-[#ffd700] hover:border-[#ffd700] hover:bg-black/80 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 flex-shrink-0 shadow-md cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="grid grid-cols-5 gap-1.5 sm:gap-2 flex-1">
              {HERO_SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                const slideTitle = language === "hi" ? slide.titleHi : slide.titleEn;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`group relative text-left rounded-lg overflow-hidden p-1 sm:p-1.5 transition-all duration-200 border cursor-pointer ${
                      isActive
                        ? "bg-black/80 border-[#ffd700] shadow-[0_0_15px_rgba(216,155,24,0.4)]"
                        : "bg-black/50 border-[#d89b18]/30 hover:border-[#ffd700]/60 hover:bg-black/70"
                    }`}
                    aria-label={`Slide ${index + 1}: ${slideTitle}`}
                  >
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-1">
                      <div
                        className={`h-full rounded-full ${
                          isActive
                            ? "bg-gradient-to-r from-[#ffd700] via-[#f59e0b] to-[#d89b18]"
                            : index < currentSlide
                            ? "bg-[#d89b18]/60"
                            : "bg-transparent"
                        }`}
                        style={{
                          width: isActive ? `${progress}%` : index < currentSlide ? "100%" : "0%",
                          transition: isActive ? "width 50ms linear" : "none",
                        }}
                      />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded overflow-hidden flex-shrink-0 border border-[#d89b18]/40 hidden xs:block">
                        <Image
                          src={slide.image}
                          alt={slideTitle}
                          fill
                          className="object-cover"
                          sizes="30px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-[9px] sm:text-[11px] font-serif truncate ${
                            isActive
                              ? "text-[#ffd700] font-bold"
                              : "text-[#faebd0]/80 font-medium"
                          }`}
                        >
                          {slideTitle}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next image"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-[#d89b18]/60 text-[#ffd700] hover:border-[#ffd700] hover:bg-black/80 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 flex-shrink-0 shadow-md cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
