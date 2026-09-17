"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Flame,
  ChevronRight,
  MapPin,
  Clock,
  ShieldCheck,
  Compass,
  ArrowDown,
  Train,
  Car,
  Plane,
  Send,
} from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactHero() {
  const { t } = useLanguage();

  const TRANSIT_HIGHLIGHTS = [
    {
      id: "train",
      title: t.contact.transitQuickTitleTrain,
      detail: t.contact.transitQuickDetailTrain,
      icon: Train,
      href: "#how-to-reach",
    },
    {
      id: "road",
      title: t.contact.transitQuickTitleRoad,
      detail: t.contact.transitQuickDetailRoad,
      icon: Car,
      href: "#how-to-reach",
    },
    {
      id: "air",
      title: t.contact.transitQuickTitleAir,
      detail: t.contact.transitQuickDetailAir,
      icon: Plane,
      href: "#how-to-reach",
    },
    {
      id: "darshan",
      title: t.contact.transitQuickTitleDarshan,
      detail: t.contact.transitQuickDetailDarshan,
      icon: Clock,
      href: "#contact-form-section",
    },
  ];

  return (
    <section
      className="relative isolate w-full overflow-hidden pt-3 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-6 md:pb-7 lg:pb-8 border-b border-[#d89b18]/40"
      aria-label="माँ बगलामुखी नलखेड़ा धाम संपर्क एवं यात्रा मार्ग"
    >
      {/* 1. SACRED TEMPLE BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <Image
          src="/mandir/mandir-complex-panoramic.jpg"
          alt="माँ बगलामुखी मंदिर नलखेड़ा धाम विहंगम परिसर"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75 z-10 pointer-events-none" />
      </div>

      {/* 2. MAJESTIC CONTACT HERO CONTENT */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-30 flex flex-col items-center text-center">
        
        {/* Top Navigation Row */}
        <div className="w-full flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs sm:text-[0.82rem] text-[#f6dd9f]/90 font-serif"
          >
            <Link
              href="/"
              className="hover:text-[#ffd700] transition-colors flex items-center gap-1"
            >
              <span>{t.contact.breadcrumbHome}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#d89b18]" />
            <span className="text-[#ffd700] font-semibold">{t.contact.breadcrumbContact}</span>
          </nav>

          {/* Active Timing Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 border border-[#d89b18]/70 shadow-xs text-[11px] sm:text-xs font-serif text-[#ffd700] backdrop-blur-md">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f4d58d]" />
            <span className="font-bold">{t.contact.activeTiming}</span>
          </div>
        </div>

        {/* Sacred Peeth Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d89b18] shadow-[0_2px_12px_rgba(0,0,0,0.5)] backdrop-blur-md mb-1.5 sm:mb-2">
          <Flame className="w-3.5 h-3.5 text-[#f4d58d] flex-shrink-0" />
          <span className="font-serif text-[#fbe9b9] text-xs sm:text-[0.82rem] tracking-wide font-semibold">
            {t.contact.heroBadge}
          </span>
        </div>

        {/* Main Sacred Heading */}
        <h1 className="font-serif font-bold text-white tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] leading-[1.18] drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] max-w-4xl">
          {t.contact.heroTitle}{" "}
          <span className="bg-gradient-to-r from-[#ffe49e] via-[#f7c85f] to-[#d89b18] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(216,155,24,0.5)]">
            {t.contact.heroHighlight}
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="font-serif text-[#ffedd5] text-xs sm:text-sm md:text-base mt-1 max-w-3xl font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] leading-relaxed">
          {t.contact.heroSubtitle}
        </p>

        {/* Ornate Lotus Divider */}
        <div className="w-full max-w-md my-1.5 sm:my-2">
          <LotusDivider />
        </div>

        {/* 3. 4 SACRED HIGHLIGHTS CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full max-w-3xl my-1.5 sm:my-2">
          <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-black/55 backdrop-blur-md border border-[#d89b18]/45 border-l-[3.5px] sm:border-l-[4px] border-l-[#d89b18] shadow-md text-left">
            <div className="w-7 h-7 rounded-lg bg-[#3d080e] border border-[#d89b18]/60 flex items-center justify-center text-[#ffd700] flex-shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[#eed6a8] font-serif font-medium leading-none">{t.contact.statLocation}</p>
              <p className="text-xs font-serif font-bold text-white truncate mt-0.5">{t.contact.statLocationVal}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-black/55 backdrop-blur-md border border-[#d89b18]/45 border-l-[3.5px] sm:border-l-[4px] border-l-[#d89b18] shadow-md text-left">
            <div className="w-7 h-7 rounded-lg bg-[#3d080e] border border-[#d89b18]/60 flex items-center justify-center text-[#ffd700] flex-shrink-0">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[#eed6a8] font-serif font-medium leading-none">{t.contact.statTimings}</p>
              <p className="text-xs font-serif font-bold text-white truncate mt-0.5">{t.contact.statTimingsVal}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-black/55 backdrop-blur-md border border-[#d89b18]/45 border-l-[3.5px] sm:border-l-[4px] border-l-[#d89b18] shadow-md text-left">
            <div className="w-7 h-7 rounded-lg bg-[#3d080e] border border-[#d89b18]/60 flex items-center justify-center text-[#ffd700] flex-shrink-0">
              <Compass className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[#eed6a8] font-serif font-medium leading-none">{t.contact.statStation}</p>
              <p className="text-xs font-serif font-bold text-white truncate mt-0.5">{t.contact.statStationVal}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-black/55 backdrop-blur-md border border-[#d89b18]/45 border-l-[3.5px] sm:border-l-[4px] border-l-[#d89b18] shadow-md text-left">
            <div className="w-7 h-7 rounded-lg bg-[#3d080e] border border-[#d89b18]/60 flex items-center justify-center text-[#ffd700] flex-shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[#eed6a8] font-serif font-medium leading-none">{t.contact.statVidhi}</p>
              <p className="text-xs font-serif font-bold text-white truncate mt-0.5">{t.contact.statVidhiVal}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col xs:flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full xs:w-auto my-2 sm:my-2.5">
          <a
            href="#contact-form-section"
            className="w-full xs:w-auto min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#d89b18] via-[#e5b338] to-[#c6890c] text-[#3d0309] font-serif font-bold text-xs sm:text-sm md:text-base shadow-[0_4px_18px_rgba(216,155,24,0.45)] hover:shadow-[0_6px_25px_rgba(216,155,24,0.65)] hover:scale-[1.02] active:scale-95 transition-all duration-200 border border-[#ffe8a3]"
          >
            <Send className="w-3.5 h-3.5 text-[#3d0309]" />
            <span>{t.contact.btnForm}</span>
          </a>

          <a
            href="#how-to-reach"
            className="w-full xs:w-auto min-w-[190px] inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-black/60 hover:bg-black/80 text-[#ffd700] font-serif font-bold text-xs sm:text-sm md:text-base border border-[#d89b18]/60 shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-200 backdrop-blur-md"
          >
            <span>{t.contact.btnRoutes}</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#ffd700] animate-bounce" />
          </a>
        </div>

        {/* 4. 4-SEGMENT TRANSIT QUICK CARDS */}
        <div className="w-full max-w-4xl mt-2.5 sm:mt-3 pt-2.5 border-t border-[#d89b18]/30">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {TRANSIT_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="group relative text-left rounded-xl overflow-hidden p-2 sm:p-2.5 transition-all duration-200 border border-[#d89b18]/35 border-l-[3.5px] sm:border-l-[4px] border-l-[#d89b18] bg-black/55 hover:bg-black/75 hover:border-[#ffd700] backdrop-blur-md shadow-md flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#3d080e] border border-[#d89b18]/60 flex items-center justify-center text-[#ffd700] group-hover:scale-110 transition-all flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] sm:text-xs font-serif font-bold text-white group-hover:text-[#ffd700] transition-colors truncate">
                      {item.title}
                    </p>
                    <p className="text-[9px] sm:text-[10px] font-serif font-medium text-[#f6dd9f]/90 truncate">
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
