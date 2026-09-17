"use client";

import React from "react";
import { CheckCircle2, Quote } from "lucide-react";
import { SolutionItem } from "@/data/solutionsData";
import { useLanguage } from "@/context/LanguageContext";

interface SolutionBenefitsSectionProps {
  solution: SolutionItem;
}

export default function SolutionBenefitsSection({
  solution,
}: SolutionBenefitsSectionProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const benefits = isHi ? solution.benefitsHi : solution.benefitsEn;

  return (
    <section className="py-12 sm:py-16 bg-[#fffaf0] text-[#4a2618] border-b border-[#ebdcb9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf2d6] border border-[#d89b18]/60 text-[#8b0000] text-xs font-serif font-bold uppercase tracking-wider mb-3 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#8b0000]" />
            <span>{isHi ? "अलौकिक फल व लाभ" : "Spiritual & Material Blessings"}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#5c0d15] mb-3 leading-tight">
            {isHi
              ? "माँ बगलामुखी अनुष्ठान से प्राप्त होने वाले दिव्य लाभ"
              : "Transformative Benefits of Maa Bagalamukhi Worship"}
          </h2>
          <p className="font-serif text-xs sm:text-sm text-[#5c3a21] leading-relaxed">
            {isHi
              ? "श्रद्धापूर्वक संकल्प और विधि-विधान से अनुष्ठान पूर्ण होने के उपरांत साधक को जीवन में निम्नलिखित स्पष्ट परिवर्तन व विजय प्राप्त होती है:"
              : "Upon sincere scriptural completion of this Maha Anushthan, devotees traditionally report significant spiritual relief and positive life shifts:"}
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 max-w-5xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-white border border-[#ebdcb9] hover:border-[#d89b18] shadow-sm flex items-start gap-4 hover:shadow-md transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-[#fdf2d6] text-[#720e18] border border-[#d89b18]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-[#8b0000]" />
              </div>
              <p className="font-serif text-sm sm:text-base text-[#4a2618] leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Guruji's Sacred Message Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#fdf6e6] via-[#faf0d7] to-[#fcf4e2] border-2 border-[#d89b18]/70 text-center relative overflow-hidden shadow-[0_8px_24px_rgba(92,13,21,0.06)]">
          <Quote className="w-10 h-10 text-[#d89b18]/40 mx-auto mb-2" />
          <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#5c0d15] leading-relaxed mb-4 max-w-3xl mx-auto font-medium">
            {isHi
              ? "“माँ बगलामुखी धर्म व सत्य के मार्ग पर चलने वाले प्रत्येक भक्त की रक्षक हैं। जब सांसारिक उपाय समाप्त हो जाते हैं, तब पीताम्बरा की अमोघ शक्ति असंभव को भी संभव कर देती है। मन में निष्कपट भाव और दृढ़ विश्वास रखकर किया गया संकल्प कभी निष्फल नहीं जाता।”"
              : "“Maa Bagalamukhi is the unfailing protector of all who walk the path of truth and righteousness. When worldly solutions fail, the Golden Mother's Stambhan Shakti renders the impossible possible. A sincere Sankalp made with unshakeable faith is never unanswered.”"}
          </p>
          <p className="font-serif font-bold text-xs sm:text-sm text-[#8b0000] uppercase tracking-wider">
            {isHi ? "— पूज्य पंडित शुभम शर्मा जी (मुख्य उपासक, नलखेड़ा धाम)" : "— Pujya Pandit Shubham Sharma Ji (Chief Priest, Nalkheda Dham)"}
          </p>
        </div>
      </div>
    </section>
  );
}
