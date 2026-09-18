"use client";

import React from "react";
import Image from "next/image";
import { Flame, Check, Video, MapPin } from "lucide-react";
import { SolutionItem } from "@/data/solutionsData";
import { useLanguage } from "@/context/LanguageContext";

interface SolutionVidhiSectionProps {
  solution: SolutionItem;
}

export default function SolutionVidhiSection({ solution }: SolutionVidhiSectionProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const anushthanName = isHi ? solution.anushthanNameHi : solution.anushthanNameEn;
  const anushthanDetails = isHi
    ? solution.anushthanDetailsHi
    : solution.anushthanDetailsEn;

  return (
    <section className="py-4 sm:py-5 bg-[#fffdf7] text-[#3d2314] border-b border-[#ebdcb9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic Vedic Vidhi Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2d6] border border-[#d89b18]/40 text-[#8b0000] text-xs font-serif font-bold uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5 text-[#b8860b]" />
              <span>{isHi ? "शास्त्रोक्त अनुष्ठान विधान" : "Scriptural Ritual Method"}</span>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#720e18] mb-4 leading-tight">
              {anushthanName}
            </h2>

            <p className="font-serif text-sm sm:text-base text-[#614532] leading-relaxed mb-6">
              {isHi
                ? "नलखेड़ा धाम में स्थित माँ बगलामुखी का यह सिद्ध त्रिशक्ति पीठ विश्व का एकमात्र ऐसा स्थान है जहाँ भगवान श्रीकृष्ण के निर्देश पर युधिष्ठिर द्वारा महाभारत युद्ध में विजय हेतु अनुष्ठान संपन्न किया गया था। यहाँ पूज्य पंडित शुभम शर्मा जी के प्रत्यक्ष निर्देशन में निम्न चरणों में यह महाअनुष्ठान संपन्न कराया जाता है:"
                : "The sacred Siddhapeeth at Nalkheda Dham is the renowned ancient sanctum where, upon Lord Krishna's guidance, King Yudhishthira invoked Maa Bagalamukhi for triumph in the Mahabharata. Under the direct auspices of Pujya Pandit Shubham Sharma Ji, the sacred ceremony follows authentic scriptural steps:"}
            </p>

            {/* Step-by-step points */}
            <div className="space-y-3.5 w-full mb-6 font-serif text-xs sm:text-sm text-[#4a2e1d]">
              {anushthanDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e8d5b5] shadow-sm hover:border-[#d89b18] transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#720e18] text-[#ffd778] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="leading-snug pt-0.5">{detail}</p>
                </div>
              ))}
            </div>

            {/* Live Online Video Sankalp Highlight */}
            <div className="p-4 rounded-xl bg-[#fbf3e0] border border-[#d89b18]/45 flex items-start gap-3.5 text-xs sm:text-sm font-serif text-[#66462c] w-full">
              <div className="w-9 h-9 rounded-lg bg-[#d89b18]/20 border border-[#d89b18]/40 flex items-center justify-center flex-shrink-0 text-[#8b0000]">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#720e18] mb-0.5">
                  {isHi ? "प्रत्यक्ष अथवा ऑनलाइन लाइव वीडियो संकल्प" : "In-Person or Live Video Sankalp"}
                </h4>
                <p className="text-[0.76rem] sm:text-xs text-[#70523b] leading-relaxed">
                  {isHi
                    ? "यदि आप धाम आने में असमर्थ हैं, तो पंडित जी द्वारा लाइव वीडियो कॉल पर यजमान को जोड़कर संकल्प कराया जाता है तथा हवन की संपूर्ण वीडियो रिकॉर्डिंग व प्रसाद भेजा जाता है।"
                    : "If unable to visit Nalkheda in person, Guruji connects with you over direct live video call for your authentic Sankalp, followed by delivery of consecrated prasadam and kavach."}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hawan Kund Image & Temple Heritage Banner */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#d89b18]/60 shadow-[0_10px_30px_rgba(0,0,0,0.15)] bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/mandir/baglamukhi-siddha-anusthan.jpg"
                  alt="माँ बगलामुखी अखंड महाहवन अनुष्ठान नलखेड़ा धाम"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white font-serif text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold mb-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>लखुंदर नदी तट, नलखेड़ा धाम (म.प्र.)</span>
                  </div>
                  <p className="text-[#f7e7ce] text-[0.72rem]">
                    अखंड धूना व सिद्ध हवन कुंड जहाँ महाभारत काल से निरंतर आहुतियां अर्पित की जा रही हैं।
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Ribbon below image */}
            <div className="w-full mt-4 p-4 rounded-xl bg-gradient-to-r from-[#fdf6e6] to-[#faf0d7] text-[#4a2618] border border-[#d89b18]/60 text-center font-serif shadow-sm">
              <p className="text-xs text-[#663b1f] mb-1 font-medium">
                {isHi ? "अनुष्ठान की तिथियां व शुभ मुहूर्त जानने हेतु सीधे संपर्क करें:" : "For upcoming ritual dates and Muhurta:"}
              </p>
              <a
                href="tel:+919340605235"
                className="font-mono font-bold text-base sm:text-lg text-[#720e18] hover:underline"
              >
                +91 93406 05235
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
