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

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  badge: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "/mandir/mandir-complex-panoramic.jpg",
    title: "नलखेड़ा धाम विहंगम परिसर",
    subtitle: "सिद्ध शक्तिपीठ माँ बगलामुखी का भव्य व पावन प्रांगण",
    badge: "महाशक्तिपीठ परिसर",
    alt: "माँ बगलामुखी मंदिर नलखेड़ा धाम विहंगम दृश्य",
  },
  {
    id: 2,
    image: "/mandir/baglamukhi-divine-darshan.jpg",
    title: "पावन गर्भगृह दिव्य दर्शन",
    subtitle: "स्वर्ण मुकुट, त्रिशक्ति विग्रह व दिव्य पीताम्बरा स्वरूप",
    badge: "साक्षात दिव्य दर्शन",
    alt: "माँ बगलामुखी गर्भगृह पावन दर्शन",
  },
  {
    id: 3,
    image: "/mandir/mandir-night-darshan.jpg",
    title: "रात्रि महाआरती एवं दीप प्रभा",
    subtitle: "दिव्य स्वर्णिम आभा, दीप प्रकाश एवं अखंड ज्योति दर्शन",
    badge: "रात्रि दीप दर्शन",
    alt: "माँ बगलामुखी मंदिर रात्रि दीप दर्शन",
  },
  {
    id: 4,
    image: "/mandir/mandir-main-facade.jpg",
    title: "प्राचीन मंदिर मुख्य शिखर",
    subtitle: "महाभारत कालीन पावन ध्वजा, स्वर्ण कलश एवं वास्तुकला",
    badge: "प्राचीन शिखर दर्शन",
    alt: "माँ बगलामुखी मंदिर मुख्य शिखर व कलश",
  },
  {
    id: 5,
    image: "/mandir/temple-view-front.jpg",
    title: "सिद्ध प्रांगण एवं यज्ञशाला",
    subtitle: "लखुंदर नदी तट पर स्थित जागृत महायज्ञ तपोभूमि",
    badge: "अखंड तपोभूमि",
    alt: "माँ बगलामुखी मंदिर प्रांगण व यज्ञशाला",
  },
];

const SLIDE_INTERVAL_MS = 3000; // Continuous 3-second interval

export default function GalleryHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

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

  // Continuous auto-slide every 3 seconds (runs continuously without pausing on mouse hover)
  useEffect(() => {
    const intervalTime = 50; // update progress every 50ms
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
      className="relative isolate w-full overflow-hidden pt-3 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-6 md:pb-7 lg:pb-8 border-b border-[#d89b18]/40"
      aria-label="माँ बगलामुखी दिव्य चित्र दीर्घा"
    >
      {/* ============================================================
          1. FULL-WIDTH BACKGROUND SLIDER (PURE NATURAL IMAGES, NO COLOR EFFECT)
          - 5 Mandir images continuously rotating every 3s
          - Pure neutral dark gradient overlay for crystal clear text readability
          ============================================================ */}
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

        {/* Clean Neutral Dark Scrim (No Colored Tint, Pure Photo Visibility) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75 z-20 pointer-events-none" />
      </div>

      {/* ============================================================
          2. MAJESTIC GALLERY HERO CONTENT
          ============================================================ */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-30 flex flex-col items-center text-center">

        {/* Top Navigation & Live Slide Indicator */}
        <div className="w-full flex flex-wrap items-center justify-between gap-2 mb-1.5 sm:mb-2">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs sm:text-[0.82rem] text-[#f6dd9f]/90 font-serif"
          >
            <Link
              href="/"
              className="hover:text-[#ffd700] transition-colors flex items-center gap-1"
            >
              <span>मुख्य पृष्ठ</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#d89b18]" />
            <span className="text-[#ffd700] font-semibold">
              चित्र दीर्घा (Gallery)
            </span>
          </nav>
        </div>

        {/* Sacred Peeth Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d89b18] shadow-[0_2px_12px_rgba(0,0,0,0.5)] backdrop-blur-md mb-1.5 sm:mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#f4d58d] animate-pulse" />
          <span className="font-serif text-[#fbe9b9] text-xs sm:text-[0.82rem] tracking-wide font-semibold">
            ॥ ॐ ॥ विश्वप्रसिद्ध सिद्ध शक्तिपीठ • नलखेड़ा धाम (म.प्र.)
          </span>
        </div>

        {/* Main Sacred Gallery Heading */}
        <h1 className="font-serif font-bold text-white tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] leading-[1.18] drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] max-w-4xl">
          माँ बगलामुखी दिव्य दर्शन{" "}
          <span className="bg-gradient-to-r from-[#ffe49e] via-[#f7c85f] to-[#d89b18] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(216,155,24,0.5)]">
            एवं पावन मंदिर चित्र दीर्घा
          </span>
        </h1>

        {/* Gallery Sub-headline */}
        <p className="font-serif text-[#ffedd5] text-xs sm:text-sm md:text-base mt-1 max-w-3xl font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] leading-relaxed">
          महाभारत कालीन स्वयंभू त्रिशक्ति पीठ माँ पीताम्बरा मंदिर के पावन गर्भगृह, 
          अखंड महाहवन, दिव्य विग्रह एवं ऐतिहासिक वास्तुकला के अलौकिक सजीव दर्शन।
        </p>

        {/* Ornate Lotus Divider */}
        <div className="w-full max-w-md my-1.5 sm:my-2">
          <LotusDivider />
        </div>

        {/* 4 Sacred Highlights Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl my-1.5 sm:my-2">
          <span className="inline-flex items-center gap-1.5 bg-black/60 border border-[#d89b18]/45 px-3 py-1 rounded-full text-xs font-serif text-[#ffd700] shadow-xs backdrop-blur-md">
            <Eye className="w-3.5 h-3.5 text-[#ffd700]" /> 18+ पावन चित्र दर्शन
          </span>
          <span className="inline-flex items-center gap-1.5 bg-black/60 border border-[#d89b18]/45 px-3 py-1 rounded-full text-xs font-serif text-[#ffd700] shadow-xs backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-[#ffd700]" /> अखंड महाहवन व अनुष्ठान
          </span>
          <span className="inline-flex items-center gap-1.5 bg-black/60 border border-[#d89b18]/45 px-3 py-1 rounded-full text-xs font-serif text-[#ffd700] shadow-xs backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#ffd700]" /> लखुंदर नदी तट, नलखेड़ा
          </span>
          <span className="inline-flex items-center gap-1.5 bg-black/60 border border-[#d89b18]/45 px-3 py-1 rounded-full text-xs font-serif text-[#ffd700] shadow-xs backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ffd700]" /> 100% शास्त्रोक्त विधान
          </span>
        </div>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-2 sm:my-2.5">
          {/* Button 1: Explore Gallery (Primary Gold Button) */}
          <a
            href="#gallery-grid"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 rounded-full bg-gradient-to-r from-[#d89b18] via-[#e5b338] to-[#c6890c] text-[#3d0309] font-serif font-bold text-xs sm:text-sm md:text-base shadow-[0_4px_18px_rgba(216,155,24,0.45)] hover:shadow-[0_6px_25px_rgba(216,155,24,0.65)] hover:scale-[1.02] active:scale-95 transition-all duration-200 border border-[#ffe8a3]"
          >
            <span>सम्पूर्ण गैलरी एक्सप्लोर करें</span>
            <ArrowDown className="w-4 h-4 text-[#3d0309] animate-bounce" />
          </a>
        </div>

        {/* ============================================================
            3. 5-SEGMENT INTERACTIVE SLIDER BAR
            ============================================================ */}
        <div className="w-full max-w-4xl mt-2.5 sm:mt-3 pt-2.5 border-t border-[#d89b18]/30">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            {/* Prev Arrow */}
            <button
              onClick={prevSlide}
              aria-label="पिछला चित्र"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-[#d89b18]/60 text-[#ffd700] hover:border-[#ffd700] hover:bg-black/80 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 flex-shrink-0 shadow-md"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* 5 Interactive Thumbnail / Progress Tabs */}
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2 flex-1">
              {HERO_SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`group relative text-left rounded-lg overflow-hidden p-1 sm:p-1.5 transition-all duration-200 border ${
                      isActive
                        ? "bg-black/80 border-[#ffd700] shadow-[0_0_15px_rgba(216,155,24,0.4)]"
                        : "bg-black/50 border-[#d89b18]/30 hover:border-[#ffd700]/60 hover:bg-black/70"
                    }`}
                    aria-label={`स्लाइड ${index + 1}: ${slide.title}`}
                  >
                    {/* Top 3s Animated Filling Progress Line */}
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

                    {/* Thumbnail + Title */}
                    <div className="flex items-center gap-1.5">
                      <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded overflow-hidden flex-shrink-0 border border-[#d89b18]/40 hidden xs:block">
                        <Image
                          src={slide.image}
                          alt={slide.title}
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
                          {slide.title}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              aria-label="अगला चित्र"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-[#d89b18]/60 text-[#ffd700] hover:border-[#ffd700] hover:bg-black/80 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 flex-shrink-0 shadow-md"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
