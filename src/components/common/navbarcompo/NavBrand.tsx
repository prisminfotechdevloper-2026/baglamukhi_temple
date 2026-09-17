"use client";

import Image from "next/image";
import Link from "next/link";
import LotusDivider from "./LotusDivider";
import { useLanguage } from "@/context/LanguageContext";

interface NavBrandProps {
  className?: string;
}

/**
 * NavBrand - Brand Logo, Deity/Priest Titles, and Sacred Lotus Divider.
 * Fully optimized with comfortable vertical padding, larger royal emblem logo,
 * and multilingual dynamic titles.
 */
export default function NavBrand({ className = "" }: NavBrandProps) {
  const { t } = useLanguage();

  return (
    <Link
      href="/"
      className={`flex items-center gap-2 xs:gap-2.5 sm:gap-4 md:gap-4.5 group text-decoration-none min-w-0 ${className}`}
      aria-label={`${t.nav.brandTitle} ${t.nav.brandName} - ${t.nav.brandLocation}`}
      itemProp="url"
    >
      {/* Circular Mata Bagalamukhi Emblem with Gold Halo Ring */}
      <div className="temple-logo-frame w-[46px] h-[46px] xs:w-[52px] xs:h-[52px] sm:w-[60px] sm:h-[60px] md:w-[66px] md:h-[66px] flex-shrink-0 shadow-[0_0_12px_rgba(216,155,24,0.4)]">
        <Image
          src="/logo.png"
          alt="माँ बगलामुखी नलखेड़ा धाम - पंडित शुभम शर्मा"
          width={90}
          height={90}
          priority
          itemProp="image"
          className="temple-logo-crop-img"
        />
      </div>

      {/* Brand Titles & Ornamental Lotus Divider */}
      <div className="flex flex-col items-start justify-center min-w-0 overflow-hidden py-0.5">
        {/* Main Title */}
        <span
          className="font-serif font-bold tracking-[0.015em] xs:tracking-[0.025em] sm:tracking-[0.04em] text-[#4a0c16] text-[0.68rem] xs:text-[0.76rem] sm:text-[0.98rem] md:text-[1.14rem] uppercase leading-tight group-hover:text-[#680f1e] transition-colors whitespace-nowrap truncate max-w-full"
          itemProp="name"
        >
          {t.nav.brandTitle}
        </span>

        {/* Subtitle - Guruji & Dham */}
        <div className="flex items-center text-[#c21f27] font-serif font-semibold text-[0.64rem] xs:text-[0.72rem] sm:text-[0.90rem] md:text-[1.04rem] mt-0.5 leading-tight whitespace-nowrap">
          <span itemProp="founder">{t.nav.brandName}</span>
          <span className="text-[#d89b18] mx-1 xs:mx-1.5 text-xs font-bold">·</span>
          <span itemProp="addressLocality">{t.nav.brandLocation}</span>
        </div>

        {/* Dynamic Edge-to-Edge Sacred Lotus Divider */}
        <LotusDivider className="mt-1 sm:mt-1.5 w-full" />
      </div>
    </Link>
  );
}
