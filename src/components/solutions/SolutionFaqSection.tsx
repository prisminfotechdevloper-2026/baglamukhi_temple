"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { SolutionItem } from "@/data/solutionsData";
import { useLanguage } from "@/context/LanguageContext";

interface SolutionFaqSectionProps {
  solution: SolutionItem;
}

export default function SolutionFaqSection({ solution }: SolutionFaqSectionProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#fff8e7] text-[#4a2618] border-b border-[#ebdcb9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2d6] border border-[#d89b18]/60 text-[#8b0000] text-xs font-serif font-bold uppercase tracking-wider mb-2.5 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{isHi ? "जिज्ञासा व समाधान" : "Common Questions"}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#5c0d15] mb-2">
            {isHi ? "भक्तों द्वारा पूछे जाने वाले प्रमुख प्रश्न (FAQ)" : "Frequently Asked Questions"}
          </h2>
          <p className="font-serif text-xs sm:text-sm text-[#5c3a21]">
            {isHi
              ? "इस अनुष्ठान एवं संकल्प से संबंधित आवश्यक जानकारियां:"
              : "Essential answers regarding this Vedic ritual and Sankalp:"}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 font-serif">
          {solution.faqs.map((faq, idx) => {
            const question = isHi ? faq.questionHi : faq.questionEn;
            const answer = isHi ? faq.answerHi : faq.answerEn;
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-[#ebdcb9] hover:border-[#d89b18] shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:text-[#720e18] transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-[#5c0d15]">
                    {question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#d89b18] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 text-xs sm:text-sm text-[#4a2618] leading-relaxed border-t border-[#f0e2cd] bg-[#fffdfa]">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
