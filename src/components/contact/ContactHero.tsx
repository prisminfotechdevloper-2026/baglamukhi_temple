import Link from "next/link";
import Image from "next/image";
import { Sparkles, ChevronRight, MapPin, Clock, ShieldCheck, Compass } from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";

export default function ContactHero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 border-b border-[#d89b18]/40"
      aria-label="माँ बगलामुखी नलखेड़ा धाम संपर्क एवं यात्रा मार्ग"
    >
      {/* Background Image & Atmospheric Scrim */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <Image
          src="/mandir/mandir-complex-panoramic.jpg"
          alt="माँ बगलामुखी मंदिर नलखेड़ा धाम परिसर"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center filter brightness-90 select-none scale-105"
        />
        {/* Neutral Dark Overlay for Rich Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85 z-10" />
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-20 flex flex-col items-center text-center">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs sm:text-[0.82rem] text-[#f6dd9f]/90 font-serif mb-3"
        >
          <Link
            href="/"
            className="hover:text-[#ffd700] transition-colors flex items-center gap-1"
          >
            <span>मुख्य पृष्ठ</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#d89b18]" />
          <span className="text-[#ffd700] font-semibold">संपर्क (Contact Us)</span>
        </nav>

        {/* Sacred Peeth Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#d89b18] shadow-[0_2px_12px_rgba(0,0,0,0.5)] backdrop-blur-md mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-[#f4d58d] animate-pulse" />
          <span className="font-serif text-[#fbe9b9] text-xs sm:text-[0.82rem] tracking-wide font-semibold">
            ॥ ॐ ॥ विश्वप्रसिद्ध सिद्ध शक्तिपीठ • नलखेड़ा धाम (म.प्र.)
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif font-bold text-white tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.18] drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] max-w-4xl">
          मंदिर संपर्क, दर्शन समय{" "}
          <span className="bg-gradient-to-r from-[#ffe49e] via-[#f7c85f] to-[#d89b18] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(216,155,24,0.5)]">
            एवं पावन यात्रा मार्ग
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="font-serif text-[#ffedd5] text-xs sm:text-sm md:text-base mt-2 max-w-3xl font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] leading-relaxed">
          माँ पीताम्बरा बगलामुखी शक्तिपीठ नलखेड़ा धाम में पूजन, विशेष महाहवन, सवा लाख जाप संकल्प, 
          दर्शन व्यवस्था एवं धाम पहुँचने के समस्त सड़क, रेल व वायु मार्ग का प्रामाणिक विवरण।
        </p>

        {/* Lotus Divider */}
        <div className="w-full max-w-md my-3 sm:my-3.5">
          <LotusDivider />
        </div>

        {/* 4 Sacred Info Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl">
          <span className="inline-flex items-center gap-1.5 bg-black/60 border border-[#d89b18]/50 px-3 py-1 rounded-full text-xs font-serif text-[#ffd700] shadow-xs backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#ffd700]" /> लखुंदर नदी तट, नलखेड़ा (465445)
          </span>
          <span className="inline-flex items-center gap-1.5 bg-black/60 border border-[#d89b18]/50 px-3 py-1 rounded-full text-xs font-serif text-[#ffd700] shadow-xs backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-[#ffd700]" /> प्रातः 05:30 AM से रात्रि 09:30 PM
          </span>
          <span className="inline-flex items-center gap-1.5 bg-black/60 border border-[#d89b18]/50 px-3 py-1 rounded-full text-xs font-serif text-[#ffd700] shadow-xs backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#ffd700]" /> उज्जैन (98 किमी) • इंदौर (156 किमी)
          </span>
          <span className="inline-flex items-center gap-1.5 bg-black/60 border border-[#d89b18]/50 px-3 py-1 rounded-full text-xs font-serif text-[#ffd700] shadow-xs backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ffd700]" /> 100% शास्त्रीय संकल्प विधान
          </span>
        </div>
      </div>
    </section>
  );
}
