"use client";

import React from "react";
import { AlertCircle, ArrowRight } from "lucide-react";
import { SolutionItem } from "@/data/solutionsData";
import { useLanguage } from "@/context/LanguageContext";

interface SolutionChallengesProps {
  solution: SolutionItem;
}

export default function SolutionChallenges({ solution }: SolutionChallengesProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const challenges = isHi ? solution.challengesHi : solution.challengesEn;

  return (
    <section className="py-12 sm:py-16 bg-[#fff8e7] text-[#4a2618] border-b border-[#ebdcb9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fee2e2] border border-red-200 text-[#991b1b] text-xs font-serif font-bold uppercase tracking-wider mb-2.5">
            <AlertCircle className="w-3.5 h-3.5 text-red-600" />
            <span>{isHi ? "बाधाओं की पहचान" : "Recognizing The Obstacles"}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#5c0d15] mb-3 leading-tight">
            {isHi
              ? "इस परिस्थिति में व्यक्ति किन संकटों व पीड़ाओं से जूझता है?"
              : "What Devotees Face During These Difficult Circumstances"}
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#5c3a21] leading-relaxed">
            {isHi
              ? "समय रहते सही आध्यात्मिक समाधान न मिलने पर यह बाधाएं मानसिक, आर्थिक व सामाजिक रूप से भारी क्षति पहुंचा सकती हैं:"
              : "When left spiritually unaddressed, these roadblocks compound into severe financial, emotional, and social strain:"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {challenges.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-[#ebdcb9] hover:border-[#d89b18] shadow-[0_4px_16px_rgba(92,13,21,0.06)] hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-[#fef2f2] border border-red-200 text-[#991b1b] flex items-center justify-center text-xs font-mono font-bold mb-3.5 group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#720e18] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-serif text-xs sm:text-sm text-[#5a3a25] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f0e2cd] flex items-center text-[0.74rem] text-[#8b0000] font-serif font-semibold">
                <span>{isHi ? "बगलामुखी स्तम्भन द्वारा समाधान संभव" : "Resolved via Bagalamukhi Stambhan"}</span>
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform text-[#d89b18]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
