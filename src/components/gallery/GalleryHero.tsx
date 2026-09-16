"use client";

import Link from "next/link";
import { Sparkles, Phone, MessageCircle, ChevronRight, Eye, ShieldCheck, Flame, Compass } from "lucide-react";

export default function GalleryHero() {
  const whatsappUrl =
    "https://wa.me/919340605235?text=" +
    encodeURIComponent("जय माँ बगलामुखी! पंडित जी, मुझे नलखेड़ा धाम दर्शन एवं पूजा अनुष्ठान के संबंध में जानकारी चाहिए।");

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#38040b] via-[#4d0711] to-[#2a0207] text-[#fff8e7] pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 lg:pb-20 border-b border-[#ebdcb9]/30">
      {/* Background Divine Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-b from-[#d89b18]/20 via-[#c31b1b]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#d89b18]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-5 right-10 w-80 h-80 bg-[#c31b1b]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Traditional Geometric Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#f6dd9f 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-[#f6dd9f]/80 mb-6 sm:mb-8 font-serif"
        >
          <Link
            href="/"
            className="hover:text-[#ffd700] transition-colors flex items-center gap-1.5"
          >
            <span>मुख्य पृष्ठ</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#d89b18]" />
          <span className="text-[#ffd700] font-semibold">
            दिव्य चित्र दीर्घा (Gallery)
          </span>
        </nav>

        {/* Top Sacred OM Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-[#5a0b16]/80 border border-[#d89b18]/60 shadow-[0_4px_18px_rgba(216,155,24,0.25)] backdrop-blur-md mb-4 sm:mb-6">
          <span className="text-[#ffd700] text-sm sm:text-base font-serif font-bold">
            ॥ ॐ ॥
          </span>
          <span className="text-xs sm:text-sm font-serif font-medium tracking-wide text-[#fff3d6]">
            विश्व विख्यात सिद्ध पीठ • नलखेड़ा धाम (म.प्र.)
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#ffd700] animate-pulse" />
        </div>

        {/* Hero Main Heading & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#fff7e6] via-[#ffd983] to-[#f4be47] leading-[1.2] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            माँ बगलामुखी दिव्य दर्शन <br className="hidden sm:block" />
            <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#fce8b3]">
              एवं पावन मंदिर चित्र दीर्घा
            </span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#faebd0]/90 font-serif leading-relaxed max-w-3xl">
            महाभारत कालीन स्वयंभू त्रिशक्ति पीठ माँ पीताम्बरा बगलामुखी मंदिर के पावन गर्भगृह, 
            दिव्य विग्रह, प्राचीन वास्तुकला, अखंड महाहवन एवं विशेष तांत्रिक अनुष्ठानों के अलौकिक दर्शन 
            का सजीव अनुभव प्राप्त करें।
          </p>
        </div>

        {/* Vedic Key Highlights & Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 max-w-4xl">
          <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-[#530c17]/70 to-[#3b060e]/80 border border-[#d89b18]/40 backdrop-blur-md shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d89b18]/20 flex items-center justify-center flex-shrink-0 border border-[#f6dd9f]/50 text-[#ffd700]">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold font-serif text-[#ffd700] leading-none">
                18+
              </div>
              <div className="text-[0.72rem] sm:text-xs text-[#faebd0]/80 font-serif mt-0.5">
                दिव्य पावन दर्शन
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-[#530c17]/70 to-[#3b060e]/80 border border-[#d89b18]/40 backdrop-blur-md shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d89b18]/20 flex items-center justify-center flex-shrink-0 border border-[#f6dd9f]/50 text-[#ffd700]">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold font-serif text-[#ffd700] leading-none">
                अखंड
              </div>
              <div className="text-[0.72rem] sm:text-xs text-[#faebd0]/80 font-serif mt-0.5">
                महाहवन व अनुष्ठान
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-[#530c17]/70 to-[#3b060e]/80 border border-[#d89b18]/40 backdrop-blur-md shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d89b18]/20 flex items-center justify-center flex-shrink-0 border border-[#f6dd9f]/50 text-[#ffd700]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold font-serif text-[#ffd700] leading-none">
                नलखेड़ा
              </div>
              <div className="text-[0.72rem] sm:text-xs text-[#faebd0]/80 font-serif mt-0.5">
                लखुंदर नदी तट
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-[#530c17]/70 to-[#3b060e]/80 border border-[#d89b18]/40 backdrop-blur-md shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d89b18]/20 flex items-center justify-center flex-shrink-0 border border-[#f6dd9f]/50 text-[#ffd700]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold font-serif text-[#ffd700] leading-none">
                100%
              </div>
              <div className="text-[0.72rem] sm:text-xs text-[#faebd0]/80 font-serif mt-0.5">
                शास्त्रोक्त विधान
              </div>
            </div>
          </div>
        </div>

        {/* Action Quick Links for Devotees */}
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 mt-7 sm:mt-9">
          <a
            href="tel:+919340605235"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#d89b18] via-[#e5b338] to-[#c6890c] text-[#3d0309] font-serif font-bold text-sm sm:text-base shadow-[0_6px_22px_rgba(216,155,24,0.4)] hover:shadow-[0_8px_30px_rgba(216,155,24,0.6)] hover:scale-[1.03] active:scale-95 transition-all duration-200 border border-[#ffe8a3]"
          >
            <Phone className="w-4.5 h-4.5 fill-[#3d0309]" />
            <span>पूजा व अनुष्ठान संकल्प कराएं</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#25D366]/20 text-[#60e38e] border border-[#25D366]/60 hover:bg-[#25D366]/30 hover:text-white font-serif font-semibold text-sm sm:text-base shadow-sm hover:scale-[1.03] active:scale-95 transition-all duration-200"
          >
            <MessageCircle className="w-4.5 h-4.5" />
            <span>WhatsApp परामर्श</span>
          </a>
        </div>
      </div>
    </section>
  );
}
