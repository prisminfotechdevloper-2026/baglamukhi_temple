import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ChevronRight,
  MapPin,
  Clock,
  ShieldCheck,
  Compass,
  ArrowDown,
  Train,
  Car,
  Plane,
} from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";

export default function ContactHero() {
  const TRANSIT_HIGHLIGHTS = [
    {
      id: "train",
      title: "ट्रेन द्वारा (Rail)",
      detail: "उज्जैन (98 किमी), नागदा (85 किमी)",
      icon: Train,
      href: "#how-to-reach",
    },
    {
      id: "road",
      title: "सड़क मार्ग (Road)",
      detail: "इंदौर, उज्जैन, भोपाल, कोटा",
      icon: Car,
      href: "#how-to-reach",
    },
    {
      id: "air",
      title: "वायु मार्ग (Air)",
      detail: "इंदौर एयरपोर्ट (156 किमी)",
      icon: Plane,
      href: "#how-to-reach",
    },
    {
      id: "darshan",
      title: "दर्शन व आरती",
      detail: "05:30 AM - 09:30 PM",
      icon: Clock,
      href: "#contact-form-section",
    },
  ];

  return (
    <section
      className="relative isolate w-full overflow-hidden pt-3 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-6 md:pb-7 lg:pb-8 border-b border-[#d89b18]/40"
      aria-label="माँ बगलामुखी नलखेड़ा धाम संपर्क एवं यात्रा मार्ग"
    >
      {/* ============================================================
          1. FULL-WIDTH BACKGROUND (MATCHING GALLERY HERO AESTHETICS)
          ============================================================ */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <Image
          src="/mandir/mandir-complex-panoramic.jpg"
          alt="माँ बगलामुखी मंदिर नलखेड़ा धाम विहंगम परिसर"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center filter brightness-95 scale-102 select-none"
        />
        {/* Clean Neutral Dark Scrim for Crystal Clear Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75 z-20 pointer-events-none" />
      </div>

      {/* ============================================================
          2. MAJESTIC CONTACT HERO CONTENT
          ============================================================ */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-30 flex flex-col items-center text-center">
        
        {/* Top Navigation Row */}
        <div className="w-full flex flex-wrap items-center justify-between gap-2 mb-1.5 sm:mb-2">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs sm:text-[0.82rem] text-[#f6dd9f]/90 font-serif"
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

          {/* Active Timing Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-[#d89b18]/70 shadow-[0_2px_12px_rgba(0,0,0,0.5)] backdrop-blur-md text-xs font-serif text-[#fbe9b9]">
            <Clock className="w-3.5 h-3.5 text-[#ffd700]" />
            <span className="font-bold text-[#ffd700]">दैनिक दर्शन:</span>
            <span className="text-[#fff8e7]">05:30 AM - 09:30 PM</span>
          </div>
        </div>

        {/* Sacred Peeth Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d89b18] shadow-[0_2px_12px_rgba(0,0,0,0.5)] backdrop-blur-md mb-1.5 sm:mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#f4d58d] animate-pulse flex-shrink-0" />
          <span className="font-serif text-[#fbe9b9] text-xs sm:text-[0.82rem] tracking-wide font-semibold">
            ॥ ॐ ॥ विश्वप्रसिद्ध सिद्ध शक्तिपीठ • नलखेड़ा धाम (म.प्र.)
          </span>
        </div>

        {/* Main Sacred Heading */}
        <h1 className="font-serif font-bold text-white tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] leading-[1.18] drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] max-w-4xl">
          मंदिर संपर्क, दर्शन समय{" "}
          <span className="bg-gradient-to-r from-[#ffe49e] via-[#f7c85f] to-[#d89b18] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(216,155,24,0.5)]">
            एवं पावन यात्रा मार्ग
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="font-serif text-[#ffedd5] text-xs sm:text-sm md:text-base mt-1 max-w-3xl font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] leading-relaxed">
          महाभारत कालीन स्वयंभू शक्तिपीठ माँ बगलामुखी नलखेड़ा धाम में पूजन, विशेष महाहवन, 
          सवा लाख जाप संकल्प, दर्शन व्यवस्था एवं धाम पहुँचने के समस्त सड़क, रेल व वायु मार्ग का प्रामाणिक विवरण।
        </p>

        {/* Ornate Lotus Divider */}
        <div className="w-full max-w-md my-1.5 sm:my-2">
          <LotusDivider />
        </div>

        {/* 4 Sacred Highlights Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl my-1.5 sm:my-2">
          <span className="inline-flex items-center gap-1.5 bg-black/60 border border-[#d89b18]/45 px-3 py-1 rounded-full text-xs font-serif text-[#ffd700] shadow-xs backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#ffd700]" /> लखुंदर नदी तट, नलखेड़ा
          </span>
          <span className="inline-flex items-center gap-1.5 bg-black/60 border border-[#d89b18]/45 px-3 py-1 rounded-full text-xs font-serif text-[#ffd700] shadow-xs backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-[#ffd700]" /> प्रातः 05:30 से रात्रि 09:30 PM
          </span>
          <span className="inline-flex items-center gap-1.5 bg-black/60 border border-[#d89b18]/45 px-3 py-1 rounded-full text-xs font-serif text-[#ffd700] shadow-xs backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#ffd700]" /> उज्जैन (98 किमी) • इंदौर (156 किमी)
          </span>
          <span className="inline-flex items-center gap-1.5 bg-black/60 border border-[#d89b18]/45 px-3 py-1 rounded-full text-xs font-serif text-[#ffd700] shadow-xs backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ffd700]" /> 100% शास्त्रोक्त संकल्प
          </span>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-2 sm:my-2.5">
          {/* Button 1: Explore Transit Routes */}
          <a
            href="#how-to-reach"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 rounded-full bg-gradient-to-r from-[#d89b18] via-[#e5b338] to-[#c6890c] text-[#3d0309] font-serif font-bold text-xs sm:text-sm md:text-base shadow-[0_4px_18px_rgba(216,155,24,0.45)] hover:shadow-[0_6px_25px_rgba(216,155,24,0.65)] hover:scale-[1.02] active:scale-95 transition-all duration-200 border border-[#ffe8a3]"
          >
            <span>संपूर्ण यात्रा मार्ग देखें</span>
            <ArrowDown className="w-4 h-4 text-[#3d0309] animate-bounce" />
          </a>

          {/* Button 2: Fill Consultation Form */}
          <a
            href="#contact-form-section"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-black/60 hover:bg-black/80 text-[#ffd700] font-serif font-bold text-xs sm:text-sm md:text-base border border-[#d89b18]/70 hover:border-[#ffd700] shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            <span>परामर्श व संकल्प फॉर्म</span>
          </a>
        </div>

        {/* ============================================================
            3. 4-SEGMENT TRANSIT & TIMING QUICK BAR (MATCHING GALLERY SLIDER BAR)
            ============================================================ */}
        <div className="w-full max-w-4xl mt-2.5 sm:mt-3 pt-2.5 border-t border-[#d89b18]/30">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {TRANSIT_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="group relative text-left rounded-xl overflow-hidden p-2 sm:p-2.5 transition-all duration-200 border bg-black/50 border-[#d89b18]/30 hover:border-[#ffd700] hover:bg-black/75 shadow-md flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#3d080e] border border-[#d89b18]/60 flex items-center justify-center text-[#ffd700] group-hover:scale-110 group-hover:bg-[#8b0000] transition-all flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] sm:text-xs font-serif font-bold text-[#ffd700] truncate group-hover:text-white transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[9px] sm:text-[10px] font-serif text-[#faebd0]/80 truncate">
                      {item.detail}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
