"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Flame,
  ShieldCheck,
  Train,
  Plane,
  Car,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="relative isolate w-full max-w-full overflow-hidden bg-gradient-to-b from-[#1a0205] via-[#240307] to-[#120103] text-[#f7e7ce] border-t-2 border-[#d89b18]/60 shadow-[0_-8px_30px_rgba(0,0,0,0.6)] pt-6 sm:pt-7 lg:pt-8 pb-20 sm:pb-24 md:pb-6 lg:pb-6 z-20 flex-shrink-0 mt-auto"
      aria-label="मंदिर संपर्क, दर्शन समय एवं गुरुजी विवरण"
      itemScope
      itemType="https://schema.org/HinduTemple"
    >
      {/* Atmospheric Golden Glow on Top Border */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#ffd572] to-transparent opacity-90" />
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-28 bg-[#d89b18]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">

        {/* MAIN FOOTER GRID (Balanced 4-Column Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6 xl:gap-8 pb-5 sm:pb-6 border-b border-[#d89b18]/25 items-start">

          {/* COL 1: BRAND, GURUJI IDENTITY & DHAM SANCTUM */}
          <div className="flex flex-col items-start text-left bg-[#2a0408]/50 sm:bg-transparent border border-[#d89b18]/25 sm:border-0 rounded-xl p-3.5 sm:p-0 w-full">
            {/* Temple Brand Emblem & Title */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="temple-logo-frame w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#d89b18] shadow-[0_0_10px_rgba(216,155,24,0.35)] flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="माँ बगलामुखी नलखेड़ा धाम - पंडित शुभम शर्मा"
                  width={90}
                  height={90}
                  className="temple-logo-crop-img"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-serif font-bold text-[#ffd778] text-sm sm:text-[0.95rem] leading-tight uppercase tracking-wide">
                  {t.footer.brandName}
                </h4>
                <p className="font-serif text-[#fca5a5] text-[0.72rem] sm:text-xs font-semibold mt-0.5">
                  {t.footer.priestName}
                </p>
              </div>
            </div>

            {/* Sacred Description */}
            <p className="font-serif text-[#dfc4a4] text-[0.74rem] sm:text-[0.78rem] leading-relaxed mb-3">
              {t.footer.description}
            </p>

            {/* Trust Highlights */}
            <div className="flex flex-col gap-1.5 w-full pt-2.5 border-t border-[#d89b18]/20 text-[0.72rem] sm:text-[0.75rem] text-[#ebd5b5] font-serif">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f7c85f] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{t.footer.trustVedic}</span>
              </div>
              <div className="flex items-start gap-2">
                <Flame className="w-3.5 h-3.5 text-[#f7c85f] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{t.footer.trustOnline}</span>
              </div>
            </div>
          </div>

          {/* COL 2: SACRED SERVICES & ANUSHTHAN */}
          <div className="flex flex-col items-start text-left bg-[#2a0408]/50 sm:bg-transparent border border-[#d89b18]/25 sm:border-0 rounded-xl p-3.5 sm:p-0 w-full">
            <h4 className="font-serif font-bold text-[#ffd778] text-xs sm:text-sm uppercase tracking-wider mb-2.5 pb-1 border-b border-[#d89b18]/30 w-full flex items-center justify-between">
              <span>{t.footer.servicesHeading}</span>
              <span className="text-[#d89b18] text-xs">ॐ</span>
            </h4>

            <ul className="flex flex-col gap-1 w-full font-serif text-[0.74rem] sm:text-[0.78rem]">
              {t.footer.servicesList.map((name, idx) => (
                <li key={idx}>
                  <Link
                    href="/#services"
                    className="flex items-center gap-1.5 text-[#dfc4a4] hover:text-[#ffd778] hover:translate-x-1 transition-all duration-150 py-0.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#d89b18] group-hover:text-[#ffe49e] flex-shrink-0 transition-transform group-hover:scale-110" />
                    <span className="group-hover:text-[#ffd778] transition-colors leading-snug">
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: TEMPLE TIMINGS & AARTI SCHEDULE (Clean Stacked Layout - No Overflow) */}
          <div className="flex flex-col items-start text-left bg-[#2a0408]/50 sm:bg-transparent border border-[#d89b18]/25 sm:border-0 rounded-xl p-3.5 sm:p-0 w-full">
            <h4 className="font-serif font-bold text-[#ffd778] text-xs sm:text-sm uppercase tracking-wider mb-2.5 pb-1 border-b border-[#d89b18]/30 w-full flex items-center justify-between">
              <span>{t.footer.timingsHeading}</span>
              <Clock className="w-3.5 h-3.5 text-[#d89b18]" />
            </h4>

            <div className="w-full bg-gradient-to-b from-[#32040a]/80 to-[#220205]/90 border border-[#d89b18]/30 rounded-xl p-3 space-y-2.5 font-serif text-[0.74rem] sm:text-xs shadow-inner">
              {/* Morning Aarti */}
              <div className="pb-2 border-b border-[#d89b18]/20">
                <div className="flex items-center gap-1.5 text-[#ffd778] font-medium text-xs mb-1">
                  <Sun className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{t.footer.morningAarti}</span>
                </div>
                <div className="pl-5">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#180103]/90 border border-[#d89b18]/30 text-[#fde68a] font-mono font-bold text-[0.70rem] sm:text-[0.74rem] tracking-tight shadow-sm">
                    <Clock className="w-3 h-3 text-[#d89b18]" />
                    {t.footer.morningTime}
                  </span>
                </div>
              </div>

              {/* Evening Aarti */}
              <div className="pb-2 border-b border-[#d89b18]/20">
                <div className="flex items-center gap-1.5 text-[#ffd778] font-medium text-xs mb-1">
                  <Moon className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                  <span>{t.footer.eveningAarti}</span>
                </div>
                <div className="pl-5">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#180103]/90 border border-[#d89b18]/30 text-[#fde68a] font-mono font-bold text-[0.70rem] sm:text-[0.74rem] tracking-tight shadow-sm">
                    <Clock className="w-3 h-3 text-[#d89b18]" />
                    {t.footer.eveningTime}
                  </span>
                </div>
              </div>

              {/* Hawan Info */}
              <div className="pt-0.5">
                <div className="flex items-center gap-1.5 text-[#f59e0b] font-medium text-xs mb-1">
                  <Flame className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{t.footer.hawanInfo}</span>
                </div>
                <p className="text-[#dfc4a4] text-[0.70rem] sm:text-[0.74rem] leading-snug pl-5 border-l border-[#d89b18]/30 ml-1.5">
                  {t.footer.hawanTiming}
                </p>
              </div>
            </div>
          </div>

          {/* COL 4: DHAM LOCATION & TRANSIT GUIDE */}
          <div className="flex flex-col items-start text-left bg-[#2a0408]/50 sm:bg-transparent border border-[#d89b18]/25 sm:border-0 rounded-xl p-3.5 sm:p-0 w-full">
            <h4 className="font-serif font-bold text-[#ffd778] text-xs sm:text-sm uppercase tracking-wider mb-2.5 pb-1 border-b border-[#d89b18]/30 w-full flex items-center justify-between">
              <span>{t.footer.locationHeading}</span>
              <MapPin className="w-3.5 h-3.5 text-[#d89b18]" />
            </h4>

            {/* Address & Transit Guide */}
            <div className="text-[0.74rem] sm:text-xs font-serif text-[#dfc4a4] space-y-2.5 w-full">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#f87171] flex-shrink-0 mt-0.5" />
                <p className="leading-snug text-[#ecd4b2] text-[0.72rem] sm:text-[0.76rem]">
                  {t.footer.address}
                </p>
              </div>

              {/* Transit Details */}
              <div className="pt-2 border-t border-[#d89b18]/20 space-y-1.5 text-[0.70rem] sm:text-[0.74rem] text-[#cbb190]">
                <div className="flex items-start gap-1.5">
                  <Train className="w-3.5 h-3.5 text-[#f7c85f] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{t.footer.railTransit}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-[#f7c85f] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{t.footer.airTransit}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#f7c85f] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{t.footer.roadTransit}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SACRED MANTRARTHA & CHANT BAR - Sleek, Horizontal Ribbon */}
        <div className="my-2.5 sm:my-3 py-2 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-transparent via-[#33050c]/80 to-transparent border-y border-[#d89b18]/25 text-center">
          <div className="flex items-center justify-center gap-2 max-w-4xl mx-auto">
            <span className="hidden sm:inline-block w-1.5 h-1.5 rotate-45 bg-[#d89b18] shadow-[0_0_6px_rgba(216,155,24,0.6)] flex-shrink-0" />
            <p className="font-serif font-semibold text-xs sm:text-[0.82rem] text-transparent bg-clip-text bg-gradient-to-r from-[#ffe49e] via-[#fce293] to-[#ffd778] tracking-wide leading-relaxed">
              {t.footer.mantra}
            </p>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rotate-45 bg-[#d89b18] shadow-[0_0_6px_rgba(216,155,24,0.6)] flex-shrink-0" />
          </div>
          <p className="font-serif text-[#b89c7c] text-[0.66rem] sm:text-[0.70rem] tracking-widest uppercase mt-0.5">
            {t.footer.peethTag}
          </p>
        </div>

        {/* COPYRIGHT, DESIGN CREDIT & QUICK LINKS ROW */}
        <div className="pt-3 border-t border-[#d89b18]/20 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-[0.70rem] sm:text-xs font-serif text-[#9e8366]">
          {/* Left Block: Copyright & Prism Infotech Solution Attribution */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2.5 gap-y-1">
            <p className="leading-snug">
              © {currentYear} {t.footer.copyright}
            </p>
            <span className="hidden sm:inline text-[#d89b18]/50">|</span>
            <p className="leading-snug text-[#bba184]">
              Design by{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ffd778] via-[#fff0c2] to-[#f59e0b] tracking-wide">
                Prism Infotech Solution
              </span>
            </p>
          </div>

          {/* Right Block: Quick Links */}
          <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 text-[#c5a884] flex-shrink-0">
            <Link href="/#services" className="hover:text-[#ffd778] transition-colors">
              {t.footer.linksServices}
            </Link>
            <span className="text-[#d89b18]/40">•</span>
            <Link href="/gallery" className="hover:text-[#ffd778] transition-colors">
              {t.footer.linksDarshan}
            </Link>
            <span className="text-[#d89b18]/40">•</span>
            <Link href="/contact" className="hover:text-[#ffd778] transition-colors">
              {t.footer.linksContact}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
