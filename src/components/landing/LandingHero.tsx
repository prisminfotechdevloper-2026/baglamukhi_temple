"use client";

import Image from "next/image";
import { Phone, ShieldCheck, Flame, CheckCircle2 } from "lucide-react";
import LotusDivider from "@/components/common/navbarcompo/LotusDivider";
import { DEFAULT_CONTACT } from "@/components/common/navbarcompo/constants";
import { useLanguage } from "@/context/LanguageContext";
import maaDarshanImg from "../../../public/image.png";

/**
 * LandingHero Component with Multilingual Support.
 * - Left Side: Maa Bagalamukhi authentic Beej Mantra, Vedic Anushthan benefits, and direct Contact CTA buttons
 * - Right Side: maaDarshanImg (Trishakti Bagalamukhi Divya Darshan) with sacred glowing golden aura
 */
export default function LandingHero() {
  const { t, language } = useLanguage();

  const whatsappMessage =
    language === "hi"
      ? "जय माँ बगलामुखी! मुझे पूजा, अनुष्ठान एवं दर्शन सम्बन्धी परामर्श चाहिए।"
      : "Jai Maa Bagalamukhi! I would like to consult regarding Puja, Anushthan and Darshan.";

  const whatsappUrl = `https://wa.me/${DEFAULT_CONTACT.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="mandir"
      className="relative isolate w-full overflow-hidden pt-3 sm:pt-5 md:pt-6 lg:pt-8 pb-4 sm:pb-6 md:pb-7 lg:pb-8 border-b border-[#d89b18]/40"
      aria-label="माँ बगलामुखी नलखेड़ा धाम - मुख्य पृष्ठ"
    >
      {/* ============================================================
          1. BACKGROUND IMAGE & ATMOSPHERIC SACRED OVERLAYS
          ============================================================ */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {/* Mobile Background Image (Phone Viewport: visible on < md screens) */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <Image
            src="/hero/mobile-hero.webp"
            alt="माँ बगलामुखी नलखेड़ा धाम - मोबाइल दर्शन"
            fill
            priority
            quality={85}
            sizes="(max-width: 767px) 100vw, 1px"
            className="object-cover object-top select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent via-50% to-black/45 pointer-events-none" />
        </div>

        {/* Large / Desktop Background Image (Tablet & Desktop Viewport) */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src="/hero/hero.webp"
            alt="माँ बगलामुखी मंदिर नलखेड़ा धाम गर्भगृह"
            fill
            priority
            quality={85}
            sizes="(min-width: 768px) 100vw, 1px"
            className="object-cover object-center lg:object-[center_28%] select-none transition-transform duration-700 ease-out scale-100"
          />
          {/* Directional Vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#180205]/95 via-[#250409]/80 via-48% to-[#180205]/35 lg:from-[#180205]/92 lg:via-[#250409]/72 lg:via-46% lg:to-transparent" />
        </div>

        {/* Top subtle navbar shadow */}
        <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-[#140204]/30 to-transparent" />
      </div>

      {/* ============================================================
          2. HERO CONTENT GRID (Left: Mantra & CTA | Right: Maa Darshan)
          ============================================================ */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">

          {/* ------------------------------------------------------------
              LEFT COLUMN: SACRED MANTRA, PEETH INFO & CONTACT BUTTONS
              ------------------------------------------------------------ */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Sacred Peeth Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4a0000]/90 border border-[#d89b18] shadow-[0_2px_12px_rgba(216,155,24,0.35)] backdrop-blur-md mb-1.5 sm:mb-2">
              <Flame className="w-3.5 h-3.5 text-[#f4d58d]" />
              <span className="font-serif text-[#fbe9b9] text-xs sm:text-[0.82rem] tracking-wide font-semibold">
                {t.hero.badge}
              </span>
            </div>

            {/* Main Sacred Heading */}
            <h1 className="font-serif font-bold text-white tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] leading-[1.18] drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)]">
              {t.hero.titlePart1}{" "}
              <span className="bg-gradient-to-r from-[#ffe49e] via-[#f7c85f] to-[#d89b18] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(216,155,24,0.5)]">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Sub-headline / Blessing promise */}
            <p className="font-serif text-[#ffedd5] text-xs sm:text-sm md:text-base mt-1 max-w-xl font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
              {t.hero.subtitle}
            </p>

            {/* Ornate Lotus Divider */}
            <div className="w-full max-w-md my-1.5 sm:my-2">
              <LotusDivider />
            </div>

            {/* Sacred Mantra Box */}
            <div className="w-full max-w-xl bg-gradient-to-br from-[#2a0408]/95 via-[#1a0204]/98 to-[#2a0408]/95 border border-[#d89b18]/60 rounded-2xl p-3 sm:p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-md mb-2.5 sm:mb-3 text-left relative overflow-hidden group">
              {/* Radiant golden accent top line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d89b18] to-transparent opacity-90" />

              {/* Mantra Title with sacred diya icon */}
              <div className="flex items-center gap-2 mb-1">
                <Flame className="w-3.5 h-3.5 text-[#f7c85f] flex-shrink-0" />
                <span className="font-serif text-[#f4d58d] text-xs sm:text-sm font-semibold tracking-wide">
                  {t.hero.mantraBoxTitle}
                </span>
              </div>

              {/* The Sacred Sanskrit Mantra in prominent glowing Devanagari */}
              <p className="font-serif text-[0.98rem] sm:text-[1.12rem] md:text-[1.2rem] font-bold leading-relaxed tracking-wide text-center sm:text-left py-0.5 text-transparent bg-clip-text bg-gradient-to-r from-[#fff7d6] via-[#fce293] to-[#f4d58d] drop-shadow-[0_2px_8px_rgba(216,155,24,0.4)]">
                ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा॥
              </p>

              {/* Key Anushthan tags */}
              <div className="mt-2 pt-1.5 border-t border-[#d89b18]/30 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-[#eed6a8]">
                <span className="inline-flex items-center gap-1 bg-[#42080f]/80 px-2.5 py-0.5 rounded-full border border-[#d89b18]/35 font-medium text-[11px] sm:text-xs">
                  <ShieldCheck className="w-3 h-3 text-[#f7c85f]" /> {t.hero.tagStambhan}
                </span>
                <span className="inline-flex items-center gap-1 bg-[#42080f]/80 px-2.5 py-0.5 rounded-full border border-[#d89b18]/35 font-medium text-[11px] sm:text-xs">
                  • {t.hero.tagCourt}
                </span>
                <span className="inline-flex items-center gap-1 bg-[#42080f]/80 px-2.5 py-0.5 rounded-full border border-[#d89b18]/35 font-medium text-[11px] sm:text-xs">
                  • {t.hero.tagBusiness}
                </span>
                <span className="inline-flex items-center gap-1 bg-[#42080f]/80 px-2.5 py-0.5 rounded-full border border-[#d89b18]/35 font-medium text-[11px] sm:text-xs">
                  • {t.hero.tagPeace}
                </span>
              </div>
            </div>

            {/* CONTACT ACTION BUTTONS (CALL & WHATSAPP) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">

              {/* Button 1: Call Now */}
              <a
                href={`tel:${DEFAULT_CONTACT.phone}`}
                className="relative overflow-hidden w-full sm:w-auto min-w-[190px] sm:min-w-[215px] inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ba1616] via-[#8c0608] to-[#4e0204] text-white shadow-[0_4px_16px_rgba(139,0,0,0.38)] hover:brightness-110 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 group"
                aria-label={`Call Now - ${DEFAULT_CONTACT.displayPhone}`}
              >
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent button-sheen-sweep" />
                <Phone className="relative z-10 w-4.5 h-4.5 text-white fill-[#b84724] stroke-[2.2] transform -rotate-12 flex-shrink-0" />
                <div className="relative z-10 flex flex-col text-left">
                  <span className="text-white font-serif font-bold text-sm sm:text-base leading-tight tracking-wide">
                    {t.hero.callNow}
                  </span>
                  <span className="text-white/90 text-xs font-medium tracking-wide leading-tight mt-0.5">
                    {t.hero.callSubtitle}
                  </span>
                </div>
              </a>

              {/* Button 2: WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-full sm:w-auto min-w-[190px] sm:min-w-[215px] inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-[#fffcf7] hover:bg-white text-[#38040b] border border-[#ead6b3] shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:border-[#dfc38c] hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 group"
                aria-label="WhatsApp - Chat with Us"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#25D366]/25 to-transparent button-sheen-sweep" />
                <svg
                  className="relative z-10 w-5 h-5 flex-shrink-0 text-[#25D366]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 1.95.56 3.77 1.53 5.31L2.5 21.5l4.33-1.01A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                    stroke="#25D366"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.8 8.8c-.2 0-.44.07-.67.33-.23.26-.88.85-.88 2.08s.9 2.41 1.02 2.58c.12.17 1.73 2.76 4.28 3.79 2.12.85 2.55.68 3.01.64.46-.05 1.48-.61 1.69-1.19.21-.59.21-1.09.15-1.19-.06-.11-.23-.17-.48-.3s-1.48-.73-1.71-.81c-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8 1-.15.17-.29.19-.54.06s-1.07-.39-2.04-1.25c-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.5-.41-.43-.57-.44h-.48z"
                    fill="#25D366"
                  />
                </svg>
                <div className="relative z-10 flex flex-col text-left">
                  <span className="text-[#38040b] font-serif font-bold text-sm sm:text-base leading-tight tracking-wide">
                    {t.hero.whatsapp}
                  </span>
                  <span className="text-[#6b5247] text-xs font-medium leading-tight mt-0.5">
                    {t.hero.whatsappSubtitle}
                  </span>
                </div>
              </a>

            </div>

            {/* Pandit Ji Trust Guarantee */}
            <p className="text-[#f4d58d] text-xs mt-2.5 font-serif flex items-center justify-center lg:justify-start gap-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              <CheckCircle2 className="w-4 h-4 text-[#f7c85f] flex-shrink-0" />
              <span>{t.hero.trustGuarantee}</span>
            </p>
          </div>

          {/* ------------------------------------------------------------
              RIGHT COLUMN: ROYAL SANCTUM DARSHAN
              ------------------------------------------------------------ */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-3 lg:mt-0">
            <div className="relative w-[250px] sm:w-[310px] md:w-[350px] lg:w-[390px] xl:w-[420px] aspect-square flex items-center justify-center group">
              
              {/* Divine Multi-Layer Golden Glow / Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d89b18]/30 via-[#f4d58d]/25 to-[#e59a17]/15 blur-2xl lg:blur-3xl animate-aura-pulse pointer-events-none" />
              <div className="absolute inset-4 rounded-full bg-amber-500/20 blur-xl pointer-events-none" />

              {/* The Divine Deity Image */}
              <div className="relative z-10 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src={maaDarshanImg}
                  alt={t.hero.darshanAlt}
                  priority
                  quality={85}
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 310px, (max-width: 1024px) 350px, 420px"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.75)] drop-shadow-[0_0_35px_rgba(216,155,24,0.35)] select-none"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
