"use client";

import React from "react";
import { Compass, ShieldCheck, Flame } from "lucide-react";
import { SolutionItem } from "@/data/solutionsData";
import { useLanguage } from "@/context/LanguageContext";

interface SolutionSpiritualContextProps {
  solution: SolutionItem;
}

export default function SolutionSpiritualContext({
  solution,
}: SolutionSpiritualContextProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const causes = isHi ? solution.spiritualCauseHi : solution.spiritualCauseEn;
  const stambhanAction = isHi ? solution.stambhanActionHi : solution.stambhanActionEn;

  return (
    <section className="py-4 sm:py-5 bg-[#fffaf0] text-[#3d2314] border-b border-[#ebdcb9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2d6] border border-[#d89b18]/40 text-[#8b0000] text-xs font-serif font-bold uppercase tracking-wider mb-2.5">
            <Compass className="w-3.5 h-3.5 text-[#b8860b]" />
            <span>{isHi ? "वैदिक ज्योतिषीय एवं आध्यात्मिक परिप्रेक्ष्य" : "Vedic Spiritual & Astrological View"}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#720e18] mb-3 leading-tight">
            {isHi
              ? "यह बाधाएं क्यों उत्पन्न होती हैं? मूल कारणों का विश्लेषण"
              : "Why Do These Obstacles Arise? Root Cause Analysis"}
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#614532] leading-relaxed">
            {isHi
              ? "सनातन परंपरा के अनुसार किसी भी सांसारिक समस्या की जड़ें केवल बाह्य परिस्थितियों में नहीं, अपितु कुंडली के ग्रह योगों व कर्म चक्र में भी निहित होती हैं:"
              : "According to Vedic wisdom, worldly struggles are often rooted in planetary transits, house afflictions, and karmic energetic patterns:"}
          </p>
        </div>

        {/* 4 Spiritual Causes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10">
          {causes.map((cause, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-white border border-[#e8d5b5] shadow-[0_3px_12px_rgba(100,20,20,0.05)] hover:border-[#d89b18] hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#720e18]/10 border border-[#720e18]/25 text-[#720e18] flex items-center justify-center flex-shrink-0 font-serif font-bold text-base">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#720e18] mb-1.5">
                  {cause.title}
                </h3>
                <p className="font-serif text-xs sm:text-sm text-[#5a4233] leading-relaxed">
                  {cause.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Stambhan Resolution Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#fdf6e6] via-[#faf0d7] to-[#fcf4e2] text-[#4a2618] border-2 border-[#d89b18] shadow-[0_8px_24px_rgba(92,13,21,0.08)] relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-[#d89b18]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-[#8b0000] font-serif font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-[#d89b18]" />
                <span>{isHi ? "माँ बगलामुखी की दिव्य स्तम्भन शक्ति" : "Maa Bagalamukhi's Stambhan Shakti"}</span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#5c0d15] mb-2 leading-snug">
                {isHi
                  ? "समस्या की जड़ पर प्रहार: स्तम्भन द्वारा नकारात्मकता का पूर्ण शमन"
                  : "Striking The Root: Stambhan Neutralization"}
              </h3>
              <p className="font-serif text-xs sm:text-sm text-[#5a3a25] leading-relaxed">
                {stambhanAction}
              </p>
            </div>

            <a
              href="#consultation-booking"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#d89b18] via-[#e5ab2a] to-[#c78b12] text-[#220104] font-serif font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <Flame className="w-4 h-4 fill-current" />
              <span>{isHi ? "हवन संकल्प कराएं" : "Book Hawan Sankalp"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
