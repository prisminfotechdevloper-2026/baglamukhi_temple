"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck, Flame } from "lucide-react";
import { SolutionItem } from "@/data/solutionsData";
import { useLanguage } from "@/context/LanguageContext";

interface SolutionHeroProps {
  solution: SolutionItem;
}

export default function SolutionHero({ solution }: SolutionHeroProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const title = isHi ? solution.titleHi : solution.titleEn;
  const heroTag = isHi ? solution.heroTagHi : solution.heroTagEn;
  const overview = isHi ? solution.overviewHi : solution.overviewEn;
  const categoryName = isHi ? solution.categoryNameHi : solution.categoryNameEn;

  const phoneNum = "+919340605235";
  const displayPhone = "+91 93406 05235";
  const whatsappUrl = `https://wa.me/919340605235?text=${encodeURIComponent(
    `जय माँ बगलामुखी! पंडित जी, मुझे ${title} के संबंध में विशेष अनुष्ठान व परामर्श हेतु मार्गदर्शन चाहिए।`
  )}`;

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#fff5e1] via-[#fffbf2] to-[#fff8e7] text-[#4a2618] border-b-2 border-[#d89b18]/60 py-4 sm:py-5 lg:py-6">
      {/* Background sacred ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[#d89b18]/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d89b18] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb path */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm font-serif text-[#7c4d29]">
            <li>
              <Link href="/" className="hover:text-[#720e18] transition-colors">
                {isHi ? "मुख्य पृष्ठ" : "Home"}
              </Link>
            </li>
            <li className="text-[#d89b18]">/</li>
            <li>
              <Link href="/solutions" className="hover:text-[#720e18] transition-colors">
                {isHi ? "समाधान" : "Solutions"}
              </Link>
            </li>
            <li className="text-[#d89b18]">/</li>
            <li className="text-[#720e18] font-bold truncate max-w-[200px] sm:max-w-none">
              {categoryName}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Divine Title & Sacred Overview */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Sacred Vedic Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf2d6] border border-[#d89b18]/60 text-[#8b0000] text-xs sm:text-sm font-serif font-bold shadow-sm mb-4">
              <Flame className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
              <span>{heroTag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#5c0d15] leading-tight mb-4 tracking-wide">
              {title}
            </h1>

            {/* Sacred Overview Narrative */}
            <p className="font-serif text-sm sm:text-base text-[#5c3a21] leading-relaxed mb-6 font-normal">
              {overview}
            </p>

            {/* Fast Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6">
              {/* Direct Call Button */}
              <a
                href={`tel:${phoneNum}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d89b18] via-[#e5ab2a] to-[#c78b12] text-[#220104] font-serif font-bold text-sm sm:text-base shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Phone className="w-4.5 h-4.5 fill-current" />
                <span>{isHi ? "गुरुजी से परामर्श करें" : "Speak with Guruji"}</span>
              </a>

              {/* WhatsApp Consultation */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-serif font-bold text-sm sm:text-base shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-current" />
                <span>{isHi ? "व्हाट्सएप परामर्श" : "WhatsApp Chat"}</span>
              </a>

              {/* Book Anushthan Quick Anchor */}
              <a
                href="#consultation-booking"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#fdf8ee] text-[#720e18] border border-[#d89b18]/70 font-serif font-bold text-sm shadow-sm transition-all"
              >
                <span>{isHi ? "संकल्प बुकिंग फॉर्म भरें ↓" : "Book Sankalp Form ↓"}</span>
              </a>
            </div>

            {/* Sacred Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-[#ebdcb9] text-xs sm:text-sm font-serif text-[#663b1f]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                <span>{isHi ? "100% गोपनीय व शास्त्रोक्त विधि" : "100% Confidential & Vedic"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                <span>{isHi ? "नलखेड़ा धाम प्रत्यक्ष महाहवन" : "Nalkheda Sanctum Hawan"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Holy Image Frame & Guruji Sanctum Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-[#d89b18]/60 bg-white shadow-[0_12px_36px_rgba(92,13,21,0.12)] group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={solution.image || "/mandir/baglamukhi-divine-darshan.jpg"}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 448px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
              </div>

              {/* Sanctum Priest Overlay Badge */}
              <div className="p-4 sm:p-5 relative z-10 -mt-8 bg-gradient-to-b from-[#fdf6e6] to-[#faf0d7] rounded-t-2xl border-t border-[#ebdcb9]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-[#d89b18] overflow-hidden flex-shrink-0 shadow-md">
                    <Image
                      src="/logo.png"
                      alt="पंडित शुभम शर्मा"
                      width={60}
                      height={60}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-[#720e18] text-sm sm:text-base leading-tight">
                      {isHi ? "पूज्य पंडित शुभम शर्मा जी" : "Pujya Pandit Shubham Sharma Ji"}
                    </h2>
                    <p className="font-serif text-[#8b0000] text-xs mt-0.5">
                      {isHi ? "मुख्य उपासक • सिद्धपीठ माँ बगलामुखी नलखेड़ा धाम" : "Chief Priest • Nalkheda Dham (M.P.)"}
                    </p>
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-[#ebdcb9] flex items-center justify-between text-xs font-serif text-[#663b1f]">
                  <span>{isHi ? "सीधा फोन परामर्श:" : "Direct Consultation:"}</span>
                  <a href={`tel:${phoneNum}`} className="text-[#720e18] font-bold hover:underline font-mono">
                    {displayPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
