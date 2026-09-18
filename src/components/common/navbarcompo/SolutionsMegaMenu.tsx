"use client";

import React from "react";
import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  ChevronRight,
  Phone,
  MessageCircle,
  Flame,
} from "lucide-react";
import { getAllCategories } from "@/data/solutionsData";
import { useLanguage } from "@/context/LanguageContext";

interface SolutionsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Scale,
  ShieldCheck,
  Briefcase,
  TrendingUp,
};

export default function SolutionsMegaMenu({
  isOpen,
  onClose,
}: SolutionsMegaMenuProps) {
  const { language, t } = useLanguage();
  const isHi = language === "hi";
  const categories = getAllCategories();

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 w-[96vw] max-w-[1240px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseLeave={onClose}
    >
      {/* Invisible hover bridge to prevent menu from closing when mouse moves over gap */}
      <div className="absolute -top-3 inset-x-0 h-3 bg-transparent" />

      {/* Main Container styled with App Default Background (Warm Temple Cream & Gold) */}
      <div className="relative rounded-2xl bg-[#fffdfa] border-2 border-[#d89b18] shadow-[0_20px_50px_rgba(92,13,21,0.18)] p-5 sm:p-6 lg:p-7 text-[#4a2618] overflow-hidden">
        {/* Top Sacred Golden Decorative Accent Line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#d89b18] to-transparent" />

        {/* 4-Column Solutions Grid (1 Column per Category, Exactly 10 Curated Working Links) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 pb-5 border-b border-[#ebdcb9]">
          {categories.map((cat) => {
            const Icon = ICON_MAP[cat.iconName] || Flame;
            const catName = isHi ? cat.nameHi : cat.nameEn;

            return (
              <div key={cat.id} className="text-left">
                {/* Category Header */}
                <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-[#ebdcb9]">
                  <div className="w-6 h-6 rounded-md bg-[#fdf2d6] border border-[#d89b18]/40 flex items-center justify-center flex-shrink-0 text-[#720e18]">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="font-serif font-bold text-xs sm:text-[0.84rem] text-[#720e18] uppercase tracking-wider leading-tight">
                    {catName}
                  </h4>
                </div>

                {/* Category Items */}
                <ul className="space-y-1 font-serif text-[0.80rem] sm:text-[0.85rem] text-[#553622]">
                  {cat.items.map((item) => {
                    const itemTitle = isHi ? item.titleHi : item.titleEn;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={`/solutions/${item.slug}`}
                          onClick={onClose}
                          className="group flex items-start gap-1.5 py-1.5 px-2 rounded-lg hover:bg-[#fbf4e4] hover:text-[#720e18] transition-all"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-[#d89b18] group-hover:text-[#720e18] group-hover:translate-x-0.5 flex-shrink-0 mt-0.5 transition-transform" />
                          <span className="font-medium group-hover:underline underline-offset-2 leading-snug">
                            {itemTitle}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Urgent Guidance & Direct Guruji Consultation Ribbon */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-serif bg-[#fbf5e6]/60 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 lg:-mx-7 lg:-mb-7 p-4 border-t border-[#ebdcb9]">
          <div className="text-[#663b1f] text-center sm:text-left">
            <span className="font-medium">
              {isHi
                ? "क्या आपकी कोई विशेष समस्या है? पूज्य पंडित शुभम शर्मा जी से सीधे परामर्श करें:"
                : "Need urgent spiritual remedy? Connect directly with Pujya Pandit Shubham Sharma Ji:"}
            </span>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            {/* Direct Call */}
            <a
              href="tel:+919340605235"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#d89b18] via-[#e5ab2a] to-[#c78b12] text-[#220104] font-bold shadow-sm hover:scale-105 active:scale-95 transition-all text-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{isHi ? "कॉल: +91 93406 05235" : "Call: +91 93406 05235"}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/919340605235?text=${encodeURIComponent(
                "जय माँ बगलामुखी! पंडित जी, मुझे विशेष अनुष्ठान परामर्श चाहिए।"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold shadow-sm hover:scale-105 active:scale-95 transition-all text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* All Solutions Hub Link */}
            <Link
              href="/solutions"
              onClick={onClose}
              className="text-[#720e18] hover:text-[#b8860b] underline underline-offset-4 text-xs font-bold pl-2"
            >
              {t.nav.allSolutions} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
