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
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="relative isolate w-full max-w-full overflow-hidden bg-gradient-to-b from-[#1a0205] via-[#240307] to-[#120103] text-[#f7e7ce] border-t-2 border-[#d89b18]/60 shadow-[0_-12px_40px_rgba(0,0,0,0.7)] pt-8 sm:pt-12 lg:pt-14 pb-28 sm:pb-32 md:pb-12 lg:pb-14 z-20"
      aria-label="मंदिर संपर्क, दर्शन समय एवं गुरुजी विवरण"
      itemScope
      itemType="https://schema.org/HinduTemple"
    >
      {/* Atmospheric Golden Glow on Top Border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ffd572] to-transparent opacity-90" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#d89b18]/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 pb-8 sm:pb-12 border-b border-[#d89b18]/25">

          {/* COL 1: BRAND, GURUJI IDENTITY & DHAM SANCTUM */}
          <div className="flex flex-col items-start text-left bg-[#2a0408]/60 sm:bg-transparent border border-[#d89b18]/30 sm:border-0 rounded-2xl p-4 sm:p-0">
            {/* Temple Brand Emblem & Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="temple-logo-frame w-13 h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#d89b18] shadow-[0_0_12px_rgba(216,155,24,0.4)] flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="माँ बगलामुखी नलखेड़ा धाम - पंडित शुभम शर्मा"
                  width={90}
                  height={90}
                  className="temple-logo-crop-img"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-[#ffd778] text-base sm:text-lg leading-tight uppercase tracking-wide">
                  {t.footer.brandName}
                </h4>
                <p className="font-serif text-[#f87171] text-xs sm:text-sm font-semibold mt-0.5">
                  {t.footer.priestName}
                </p>
              </div>
            </div>

            {/* Sacred Description */}
            <p className="font-serif text-[#e4c9a8] text-xs sm:text-[0.84rem] leading-relaxed mb-3.5">
              {t.footer.description}
            </p>

            {/* Trust Highlights */}
            <div className="flex flex-col gap-2 w-full pt-2.5 border-t border-[#d89b18]/25 text-xs text-[#ebd5b5] font-serif">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f7c85f] flex-shrink-0" />
                <span>{t.footer.trustVedic}</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#f7c85f] flex-shrink-0" />
                <span>{t.footer.trustOnline}</span>
              </div>
            </div>
          </div>

          {/* COL 2: SACRED SERVICES & ANUSHTHAN */}
          <div className="flex flex-col items-start text-left bg-[#2a0408]/60 sm:bg-transparent border border-[#d89b18]/30 sm:border-0 rounded-2xl p-4 sm:p-0 w-full">
            <h4 className="font-serif font-bold text-[#ffd778] text-sm sm:text-base uppercase tracking-wider mb-3 pb-1 border-b border-[#d89b18]/40 w-full flex items-center justify-between">
              <span>{t.footer.servicesHeading}</span>
              <span className="text-[#d89b18] text-xs">ॐ</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 w-full font-serif text-xs sm:text-[0.84rem]">
              {t.footer.servicesList.map((name, idx) => (
                <Link
                  key={idx}
                  href="/#services"
                  className="flex items-center gap-1.5 p-1.5 sm:p-0 rounded-lg bg-[#38060c]/50 sm:bg-transparent border border-[#d89b18]/20 sm:border-0 text-[#e2c7a6] hover:text-[#ffd778] hover:translate-x-0.5 transition-all duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#d89b18] flex-shrink-0" />
                  <span className="truncate">{name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* COL 3: TEMPLE TIMINGS & AARTI SCHEDULE */}
          <div className="flex flex-col items-start text-left bg-[#2a0408]/60 sm:bg-transparent border border-[#d89b18]/30 sm:border-0 rounded-2xl p-4 sm:p-0 w-full">
            <h4 className="font-serif font-bold text-[#ffd778] text-sm sm:text-base uppercase tracking-wider mb-3 pb-1 border-b border-[#d89b18]/40 w-full flex items-center justify-between">
              <span>{t.footer.timingsHeading}</span>
              <Clock className="w-4 h-4 text-[#d89b18]" />
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 w-full font-serif">
              {/* Morning Timing Card */}
              <div className="bg-[#38060c]/70 border border-[#d89b18]/30 rounded-xl p-2.5 w-full flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-[#ffd778] text-xs sm:text-sm font-bold mb-1">
                  <Sun className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="truncate">{t.footer.morningAarti}</span>
                </div>
                <p className="text-[#f5deb3] text-[0.72rem] sm:text-xs">{t.footer.morningTime}</p>
              </div>

              {/* Evening Timing Card */}
              <div className="bg-[#38060c]/70 border border-[#d89b18]/30 rounded-xl p-2.5 w-full flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-[#ffd778] text-xs sm:text-sm font-bold mb-1">
                  <Moon className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                  <span className="truncate">{t.footer.eveningAarti}</span>
                </div>
                <p className="text-[#f5deb3] text-[0.72rem] sm:text-xs">{t.footer.eveningTime}</p>
              </div>
            </div>

            {/* Hawan Timings Info */}
            <div className="mt-3 pt-2 border-t border-[#d89b18]/25 text-[0.74rem] sm:text-xs text-[#cbb190] leading-snug w-full font-serif">
              <p className="font-semibold text-[#ffd778] flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" /> {t.footer.hawanInfo}
              </p>
              <p className="mt-0.5">{t.footer.hawanTiming}</p>
            </div>
          </div>

          {/* COL 4: DHAM LOCATION & TRANSIT GUIDE */}
          <div className="flex flex-col items-start text-left bg-[#2a0408]/60 sm:bg-transparent border border-[#d89b18]/30 sm:border-0 rounded-2xl p-4 sm:p-0 w-full">
            <h4 className="font-serif font-bold text-[#ffd778] text-sm sm:text-base uppercase tracking-wider mb-3 pb-1 border-b border-[#d89b18]/40 w-full flex items-center justify-between">
              <span>{t.footer.locationHeading}</span>
              <MapPin className="w-4 h-4 text-[#d89b18]" />
            </h4>

            {/* Address Box */}
            <div className="text-xs sm:text-[0.82rem] font-serif text-[#e4c9a8] space-y-2.5 w-full">
              <div className="flex items-start gap-2 bg-[#38060c]/50 sm:bg-transparent p-2 sm:p-0 rounded-lg border border-[#d89b18]/20 sm:border-0">
                <MapPin className="w-4 h-4 text-[#f87171] flex-shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {t.footer.address}
                </p>
              </div>

              {/* Transit Details */}
              <div className="pt-2 border-t border-[#d89b18]/25 space-y-1.5 text-[0.72rem] sm:text-[0.76rem] text-[#c9ae8f] w-full">
                <div className="flex items-center gap-2">
                  <Train className="w-3.5 h-3.5 text-[#f7c85f] flex-shrink-0" />
                  <span>{t.footer.railTransit}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="w-3.5 h-3.5 text-[#f7c85f] flex-shrink-0" />
                  <span>{t.footer.airTransit}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-[#f7c85f] flex-shrink-0" />
                  <span>{t.footer.roadTransit}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SACRED MANTRARTHA & CHANT BAR */}
        <div className="py-6 text-center">
          <div className="w-full max-w-sm sm:max-w-md mx-auto mb-3">
            <LotusDivider />
          </div>

          <p className="font-serif font-bold text-sm sm:text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#ffe49e] via-[#fce293] to-[#ffd778] tracking-wide px-2 leading-relaxed">
            {t.footer.mantra}
          </p>

          <p className="font-serif text-[#b89c7c] text-[0.74rem] sm:text-xs tracking-widest uppercase mt-1">
            {t.footer.peethTag}
          </p>
        </div>

        {/* COPYRIGHT & LEGAL BAR */}
        <div className="pt-4 border-t border-[#d89b18]/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[0.74rem] sm:text-xs font-serif text-[#a88d6e]">
          <p>
            © {currentYear} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-4 text-[#cfb28e]">
            <Link href="/#services" className="hover:text-[#ffd778] transition-colors">
              {t.footer.linksServices}
            </Link>
            <span>•</span>
            <Link href="/gallery" className="hover:text-[#ffd778] transition-colors">
              {t.footer.linksDarshan}
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#ffd778] transition-colors">
              {t.footer.linksContact}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
