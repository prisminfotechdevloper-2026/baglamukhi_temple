"use client";

import React from "react";
import { Flame, Clock, Compass, ShieldAlert, CheckCircle2 } from "lucide-react";
import { SolutionItem } from "@/data/solutionsData";
import { useLanguage } from "@/context/LanguageContext";

interface SolutionMantraCardProps {
  solution: SolutionItem;
}

export default function SolutionMantraCard({ solution }: SolutionMantraCardProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const mantraMeaning = isHi ? solution.mantraMeaningHi : solution.mantraMeaningEn;
  const bestTime = isHi ? solution.bestTimeHi : solution.bestTimeEn;
  const malaType = isHi ? solution.malaTypeHi : solution.malaTypeEn;
  const direction = isHi ? solution.directionHi : solution.directionEn;

  return (
    <section className="py-12 sm:py-16 bg-[#fff8e7] text-[#4a2618] border-b border-[#ebdcb9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf2d6] border border-[#d89b18]/60 text-[#8b0000] text-xs font-serif font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span>{isHi ? "सिद्ध पीताम्बरा महामंत्र" : "Consecrated Pitambara Maha Mantra"}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#5c0d15] mb-3 leading-tight">
            {isHi
              ? "इस संकट से मुक्ति हेतु अमोघ सिद्ध मंत्र"
              : "The Auspicious Stambhan Mantra for This Remedy"}
          </h2>
          <p className="font-serif text-xs sm:text-sm text-[#5c3a21] leading-relaxed">
            {isHi
              ? "माँ बगलामुखी का यह बीज-मंत्र साक्षात् जागृत तंत्र शक्ति है, जिसके शुद्ध उच्चारण व नियमित जाप से अभीष्ट सिद्धि प्राप्त होती है:"
              : "This consecrated seed-mantra vibrates with the active Stambhan energy of Maa Bagalamukhi, removing roadblocks when recited under scriptural discipline:"}
          </p>
        </div>

        {/* Sacred Mantra Display Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-[#fffcf2] via-[#fdf7e8] to-[#faf0d7] border-2 border-[#d89b18] p-6 sm:p-8 md:p-10 shadow-[0_12px_36px_rgba(92,13,21,0.08)] text-center relative overflow-hidden mb-8">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#d89b18] to-transparent" />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#d89b18]/10 blur-2xl pointer-events-none rounded-full" />

          {/* Devanagari Mantra Text */}
          <div className="relative z-10 my-4 sm:my-6">
            <p className="font-serif font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#720e18] leading-relaxed tracking-wide drop-shadow-sm">
              {solution.mantraDevanagari}
            </p>
          </div>

          {/* English Transliteration */}
          <div className="relative z-10 inline-block px-4 py-2.5 rounded-xl bg-white/90 border border-[#d89b18]/45 max-w-2xl my-2 shadow-xs">
            <p className="font-mono text-xs sm:text-sm text-[#5c3a21] italic leading-relaxed">
              &quot;{solution.mantraEnglish}&quot;
            </p>
          </div>

          {/* Meaning / Bhavartha */}
          <div className="relative z-10 mt-6 pt-5 border-t border-[#ebdcb9] text-left max-w-2xl mx-auto">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#8b0000] mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>{isHi ? "मंत्र का पावन भावार्थ:" : "Spiritual Meaning:"}</span>
            </h4>
            <p className="font-serif text-xs sm:text-sm text-[#4a2618] leading-relaxed">
              {mantraMeaning}
            </p>
          </div>
        </div>

        {/* Mantra Rules & Jaap Specifications Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 font-serif text-xs sm:text-sm">
          {/* Jaap Count */}
          <div className="p-4 rounded-xl bg-white border border-[#ebdcb9] hover:border-[#d89b18] shadow-sm flex flex-col justify-between transition-colors">
            <span className="text-[#7c4d29] text-[0.74rem] uppercase tracking-wider flex items-center gap-1 font-semibold">
              <Flame className="w-3.5 h-3.5 text-[#b8860b]" />
              {isHi ? "अनुशंसित जाप संख्या" : "Jaap Count"}
            </span>
            <span className="text-[#720e18] font-bold text-sm sm:text-base mt-2">
              {solution.jaapCount}
            </span>
          </div>

          {/* Best Time */}
          <div className="p-4 rounded-xl bg-white border border-[#ebdcb9] hover:border-[#d89b18] shadow-sm flex flex-col justify-between transition-colors">
            <span className="text-[#7c4d29] text-[0.74rem] uppercase tracking-wider flex items-center gap-1 font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#b8860b]" />
              {isHi ? "शुभ मुहूर्त काल" : "Auspicious Time"}
            </span>
            <span className="text-[#720e18] font-bold text-xs sm:text-sm mt-2">
              {bestTime}
            </span>
          </div>

          {/* Mala Type */}
          <div className="p-4 rounded-xl bg-white border border-[#ebdcb9] hover:border-[#d89b18] shadow-sm flex flex-col justify-between transition-colors">
            <span className="text-[#7c4d29] text-[0.74rem] uppercase tracking-wider flex items-center gap-1 font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-[#b8860b]" />
              {isHi ? "माला एवं आसन" : "Rosary & Asana"}
            </span>
            <span className="text-[#720e18] font-bold text-xs sm:text-sm mt-2">
              {malaType}
            </span>
          </div>

          {/* Direction */}
          <div className="p-4 rounded-xl bg-white border border-[#ebdcb9] hover:border-[#d89b18] shadow-sm flex flex-col justify-between transition-colors">
            <span className="text-[#7c4d29] text-[0.74rem] uppercase tracking-wider flex items-center gap-1 font-semibold">
              <Compass className="w-3.5 h-3.5 text-[#b8860b]" />
              {isHi ? "साधना दिशा" : "Sacred Direction"}
            </span>
            <span className="text-[#720e18] font-bold text-xs sm:text-sm mt-2">
              {direction}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
