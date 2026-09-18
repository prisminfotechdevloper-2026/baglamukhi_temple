"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Flame, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { DEFAULT_CONTACT } from "@/components/common/navbarcompo/constants";

import { HOME_FAQS, HomeFaqItem } from "@/data/homeFaqData";

export { HOME_FAQS };
export type { HomeFaqItem };

export default function HomeFaqSection() {
  const { language } = useLanguage();
  const isHi = language === "hi";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappMessage = isHi
    ? "जय माँ बगलामुखी! पूज्य गुरुजी, मुझे नलखेड़ा धाम में महाहवन एवं अनुष्ठान सम्बन्धी परामर्श चाहिए।"
    : "Jai Maa Baglamukhi! Respected Guruji, I would like guidance regarding Hawan and Anushthan at Nalkheda Dham.";

  const whatsappUrl = `https://wa.me/${DEFAULT_CONTACT.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="faq"
      className="relative isolate w-full max-w-full overflow-hidden bg-gradient-to-b from-[#fffaf0] via-[#fff4dc] to-[#fffaef] pt-5 sm:pt-8 md:pt-12 pb-8 sm:pb-12 md:pb-16 border-b border-[#ebdcb9] scroll-mt-20"
      aria-label="माँ बगलामुखी मंदिर नलखेड़ा एवं पंडित शुभम शर्मा प्रश्नोत्तरी"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* Sacred background aura */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-[#ffd778]/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faedd2] border border-[#d89b18]/80 shadow-xs mb-2.5">
            <HelpCircle className="w-4 h-4 text-[#8b0000]" />
            <span className="font-serif text-[#78350f] text-xs sm:text-[0.82rem] font-bold tracking-wider uppercase">
              {isHi ? "॥ अक्सर पूछे जाने वाले प्रश्न ॥" : "॥ FREQUENTLY ASKED QUESTIONS ॥"}
            </span>
          </div>

          <h2 className="font-serif font-bold text-[#420a10] text-2xl xs:text-3xl sm:text-4xl leading-tight mb-2.5">
            {isHi ? (
              <>
                माँ बगलामुखी मंदिर नलखेड़ा एवं{" "}
                <span className="bg-gradient-to-r from-[#9b111e] via-[#b77900] to-[#8b0000] bg-clip-text text-transparent">
                  पंडित शुभम शर्मा
                </span>{" "}
                मार्गदर्शन
              </>
            ) : (
              <>
                Maa Baglamukhi Temple Nalkheda &{" "}
                <span className="bg-gradient-to-r from-[#9b111e] via-[#b77900] to-[#8b0000] bg-clip-text text-transparent">
                  Pandit Shubham Sharma
                </span>{" "}
                FAQ Guide
              </>
            )}
          </h2>

          <p className="font-serif text-[#5c3a21] text-xs sm:text-sm md:text-[0.92rem] leading-relaxed">
            {isHi
              ? "सिद्धपीठ नलखेड़ा धाम, माँ बगलामुखी महाहवन, शत्रु स्तम्भन, दर्शन समय, एवं पूज्य गुरुजी (शुभम पंडित जी) से संबंधित समस्त महत्वपूर्ण जानकारियाँ।"
              : "Comprehensive answers regarding Siddhapeeth Nalkheda Dham, authentic Maha Hawan, timings, and direct consultation with Pujari Shubham Sharma."}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {HOME_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const question = isHi ? faq.questionHi : faq.questionEn;
            const answer = isHi ? faq.answerHi : faq.answerEn;

            return (
              <div
                key={idx}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white shadow-xs ${
                  isOpen
                    ? "border-[#d89b18] ring-2 ring-[#d89b18]/20"
                    : "border-[#edd9b9] hover:border-[#d89b18]/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between gap-3 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#fcedc7] border border-[#d89b18]/50 text-[#8b0000] font-serif font-bold text-xs sm:text-sm flex items-center justify-center flex-shrink-0">
                      Q{idx + 1}
                    </span>
                    <span
                      itemProp="name"
                      className="font-serif font-bold text-sm sm:text-base text-[#38040b] group-hover:text-[#8b0000] transition-colors leading-snug"
                    >
                      {question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#b77900] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#8b0000]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-[#543422] font-serif text-xs sm:text-sm leading-relaxed border-t border-[#f4e4c7] bg-[#fffdfa]"
                  >
                    <p itemProp="text" className="pl-9 sm:pl-10">
                      {answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Ribbon below FAQs */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#38040b] via-[#5c0812] to-[#38040b] text-white border border-[#d89b18]/70 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f4d58d]/20 border border-[#f4d58d] flex items-center justify-center flex-shrink-0">
              <Flame className="w-5 h-5 text-[#ffd778]" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm sm:text-base text-[#ffd778]">
                {isHi ? "कोई अन्य प्रश्न अथवा व्यक्तिगत समस्या है?" : "Have a specific problem or inquiry?"}
              </p>
              <p className="font-serif text-xs text-[#eed3b0] mt-0.5">
                {isHi
                  ? "पूज्य पंडित शुभम शर्मा जी (शुभम पंडित नलखेड़ा) से सीधे निःशुल्क परामर्श प्राप्त करें"
                  : "Speak directly with Pujari Shubham Sharma (Shubham Pandit Nalkheda) today"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center">
            <a
              href={`tel:${DEFAULT_CONTACT.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ba1616] to-[#8c0608] text-white font-serif font-bold text-xs sm:text-sm hover:brightness-110 shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{isHi ? "कॉल करें: +91 93406 05235" : "Call Pandit Ji"}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white font-serif font-bold text-xs sm:text-sm hover:bg-[#20bd5a] shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
