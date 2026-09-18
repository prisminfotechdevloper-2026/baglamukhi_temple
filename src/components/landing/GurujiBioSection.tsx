"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";
import { useLanguage } from "@/context/LanguageContext";
import gurujiImage from "../../../public/guruji.png";

export default function GurujiBioSection() {
  const { t } = useLanguage();

  return (
    <section
      id="guruji"
      className="relative isolate w-full max-w-full overflow-hidden bg-gradient-to-b from-[#fff9eb] via-[#fffbf4] to-[#fff4da] py-3 sm:py-5 lg:py-3 border-b border-[#ebdcb9]/80 z-10"
      aria-label="माँ बगलामुखी उपासक पूज्य पंडित शुभम शर्मा जी - परिचय एवं संकल्प"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Atmospheric Sacred Glow Background */}
      <div className="absolute top-1/4 left-5 w-[380px] h-[380px] bg-[#ffd778]/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-5 w-[420px] h-[420px] bg-[#fcd57e]/18 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* LEFT COLUMN: VEDIC AUTHORITY, BIO, STATS & CONTACT ACTIONS (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Sacred Saffron Pill: NALKHEDA DHAM */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#faedd2] border border-[#d89b18]/80 shadow-[0_2px_8px_rgba(216,155,24,0.16)] mb-2.5 sm:mb-3">
              
              <span className="font-serif text-[#78350f] text-[0.72rem] sm:text-xs md:text-[0.80rem] font-bold tracking-[0.14em] uppercase">
                {t.gurujiBio.peethBadge}
              </span>
            </div>

            {/* Sacred Salutation (Single Line Guarantee) */}
            <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mb-1.5 text-[#8b0000] text-center lg:text-left whitespace-nowrap max-w-full">
              <span className="text-xs sm:text-sm font-serif font-bold text-[#b77900] shrink-0 select-none">
                {t.gurujiBio.omDevanagari}
              </span>
              <h3 className="font-serif font-bold text-[0.66rem] xs:text-[0.72rem] sm:text-[0.80rem] md:text-[0.88rem] lg:text-[0.92rem] tracking-wider uppercase leading-none truncate">
                {t.gurujiBio.titleSalutation}
              </h3>
              <span className="text-xs sm:text-sm font-serif font-bold text-[#b77900] shrink-0 select-none">
                {t.gurujiBio.omDevanagari}
              </span>
            </div>

            {/* Main Primary Heading */}
            <h2
              className="font-serif font-bold text-[#420a10] text-2xl xs:text-3xl sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem] leading-[1.14] tracking-tight mb-1.5 sm:mb-2"
              itemProp="name"
            >
              {t.gurujiBio.name}
            </h2>

            {/* Subtitle */}
            <p className="font-serif font-semibold text-[#8b0000] text-sm xs:text-base sm:text-lg mb-2.5 sm:mb-3 leading-snug">
              {t.gurujiBio.subtitle}
            </p>

            {/* Enriched Vedic Description */}
            <p
              className="font-serif text-[#523220] text-xs sm:text-sm md:text-[0.94rem] leading-relaxed mb-4 sm:mb-5 max-w-2xl"
              itemProp="description"
            >
              {t.gurujiBio.bioText}
            </p>

            {/* 3 Authority Stats Pillars */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 w-full max-w-lg mb-4 sm:mb-5">
              <div className="flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl bg-white border border-[#ebd9b8] border-l-[3.5px] sm:border-l-[4px] border-l-[#c2841f] shadow-xs">
                <span className="font-serif font-extrabold text-[#700913] text-base xs:text-lg sm:text-2xl leading-none mb-0.5">
                  {t.gurujiBio.stat1Num}
                </span>
                <span className="font-serif text-[#78350f] text-[0.62rem] sm:text-xs font-semibold text-center leading-tight">
                  {t.gurujiBio.stat1Label}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl bg-white border border-[#ebd9b8] border-l-[3.5px] sm:border-l-[4px] border-l-[#c2841f] shadow-xs">
                <span className="font-serif font-extrabold text-[#700913] text-base xs:text-lg sm:text-2xl leading-none mb-0.5">
                  {t.gurujiBio.stat2Num}
                </span>
                <span className="font-serif text-[#78350f] text-[0.62rem] sm:text-xs font-semibold text-center leading-tight">
                  {t.gurujiBio.stat2Label}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl bg-white border border-[#ebd9b8] border-l-[3.5px] sm:border-l-[4px] border-l-[#c2841f] shadow-xs">
                <span className="font-serif font-extrabold text-[#700913] text-base xs:text-lg sm:text-2xl leading-none mb-0.5">
                  {t.gurujiBio.stat3Num}
                </span>
                <span className="font-serif text-[#78350f] text-[0.62rem] sm:text-xs font-semibold text-center leading-tight">
                  {t.gurujiBio.stat3Label}
                </span>
              </div>
            </div>

            {/* Key Service Features List */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2 w-full max-w-lg mb-5 text-left">
              {t.gurujiBio.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[0.74rem] sm:text-[0.82rem] text-[#523220] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Lotus Divider */}
            <div className="w-full max-w-sm mt-1">
              <LotusDivider />
            </div>

          </div>

          {/* RIGHT COLUMN: CIRCULAR GURUJI PORTRAIT & 360° INFINITE ROTATING SERVICE WHEEL (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-3 sm:mt-4 lg:mt-0 select-none">

            {/* Circular Orbit & Rotating Wheel Container */}
            <div className="relative w-[310px] h-[310px] xs:w-[350px] xs:h-[350px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] lg:w-[500px] lg:h-[500px] max-w-[94vw] flex items-center justify-center group my-1 sm:my-0">

              {/* Concentric Golden Glow Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ffd778]/30 via-[#fde3ab]/20 to-[#d89b18]/30 blur-2xl pointer-events-none animate-aura-pulse" />
              <div className="absolute inset-1 sm:inset-2 rounded-full border border-[#d89b18]/40 border-dashed pointer-events-none" />
              <div className="absolute inset-4 sm:inset-6 rounded-full border border-[#deb881]/45 pointer-events-none" />

              {/* 360-DEGREE ROTATING SERVICE TEXT WHEEL (SEAMLESS 360° LOOP) */}
              <svg
                className="absolute inset-0 w-full h-full animate-spin-reverse-slow group-hover:[animation-play-state:paused] transition-all duration-300 pointer-events-none transform-gpu"
                viewBox="0 0 600 600"
              >
                <defs>
                  <path
                    id="serviceTextCircle"
                    d="M 300, 300 m -232, 0 a 232,232 0 1,1 464,0 a 232,232 0 1,1 -464,0"
                  />
                </defs>

                <circle
                  cx="300"
                  cy="300"
                  r="232"
                  fill="none"
                  stroke="#d89b18"
                  strokeWidth="1.2"
                  strokeDasharray="8 6"
                  opacity="0.35"
                />

                <circle
                  cx="300"
                  cy="300"
                  r="280"
                  fill="none"
                  stroke="#deb881"
                  strokeWidth="1"
                  opacity="0.4"
                />

                <text
                  xmlSpace="preserve"
                  className="font-serif font-bold text-[13px] sm:text-[13.5px] fill-[#700913] tracking-wide"
                >
                  <textPath
                    href="#serviceTextCircle"
                    xlinkHref="#serviceTextCircle"
                    startOffset="0%"
                    textLength="1457"
                    lengthAdjust="spacing"
                  >
                    {t.gurujiBio.rotatingWheelText}
                  </textPath>
                </text>
              </svg>

              {/* Cardinal Sacred ॐ Motifs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-b from-[#ffe7a3] via-[#d89b18] to-[#8f5d00] border border-white shadow-[0_2px_8px_rgba(216,155,24,0.6)] flex items-center justify-center">
                  <span className="font-serif font-extrabold text-white text-[0.65rem] sm:text-xs drop-shadow-sm">ॐ</span>
                </div>
              </div>

              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-b from-[#ffe7a3] via-[#d89b18] to-[#8f5d00] border border-white shadow-[0_2px_8px_rgba(216,155,24,0.6)] flex items-center justify-center">
                  <span className="font-serif font-extrabold text-white text-[0.65rem] sm:text-xs drop-shadow-sm">ॐ</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-b from-[#ffe7a3] via-[#d89b18] to-[#8f5d00] border border-white shadow-[0_2px_8px_rgba(216,155,24,0.6)] flex items-center justify-center">
                  <span className="font-serif font-extrabold text-white text-[0.65rem] sm:text-xs drop-shadow-sm">ॐ</span>
                </div>
              </div>

              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-b from-[#ffe7a3] via-[#d89b18] to-[#8f5d00] border border-white shadow-[0_2px_8px_rgba(216,155,24,0.6)] flex items-center justify-center">
                  <span className="font-serif font-extrabold text-white text-[0.65rem] sm:text-xs drop-shadow-sm">ॐ</span>
                </div>
              </div>

              {/* 50% BORDER RADIUS CIRCULAR GURUJI PORTRAIT */}
              <div className="relative w-[205px] h-[205px] xs:w-[235px] xs:h-[235px] sm:w-[280px] sm:h-[280px] md:w-[310px] md:h-[310px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden p-2 sm:p-2.5 bg-gradient-to-b from-[#fae29c] via-[#d89b18] to-[#8a5900] shadow-[0_18px_45px_rgba(139,0,0,0.3),0_0_40px_rgba(216,155,24,0.38)] ring-4 ring-[#fff6dc] ring-offset-3 ring-offset-[#fff8e7] z-10 group-hover:scale-[1.02] transition-transform duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#240307]">
                  <Image
                    src={gurujiImage}
                    alt="माँ बगलामुखी मंदिर नलखेड़ा पुजारी पंडित शुभम शर्मा (Pujari Shubham Sharma / Shubham Pandit Nalkheda)"
                    fill
                    loading="lazy"
                    quality={85}
                    placeholder="blur"
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 340px, 380px"
                    itemProp="image"
                    className="object-cover object-[center_10%] scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0204]/85 via-transparent via-55% to-[#1a0204]/20 pointer-events-none" />

                  <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 w-[82%] xs:w-[80%] sm:w-[78%] max-w-[250px] py-0.5 sm:py-1 px-2 text-center bg-gradient-to-r from-[#4a0000]/95 via-[#850811]/95 to-[#4a0000]/95 rounded-full border border-[#f4d58d]/80 shadow-md backdrop-blur-sm flex items-center justify-center pointer-events-none">
                    <p className="font-serif font-bold text-white text-[0.62rem] xs:text-[0.68rem] sm:text-[0.76rem] md:text-[0.80rem] tracking-wider drop-shadow-sm whitespace-nowrap">
                      {t.gurujiBio.circleRibbon}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Live Puja & Darshan Badge */}
            <div className="mt-2.5 sm:mt-3.5 inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#faebd0]/90 border border-[#d89b18]/70 shadow-sm backdrop-blur-sm">
              <span className="font-serif text-[#700913] text-[0.70rem] sm:text-xs font-bold tracking-wide">
                {t.gurujiBio.liveBadge}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
