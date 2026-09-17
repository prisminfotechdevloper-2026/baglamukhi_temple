"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  Scale,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  ArrowRight,
  Phone,
  MessageCircle,
  Flame,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { getAllCategories, getAllSolutions, SolutionItem } from "@/data/solutionsData";
import { useLanguage } from "@/context/LanguageContext";

interface MobileSolutionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORY_ICON_MAP: Record<string, React.ElementType> = {
  Scale,
  ShieldCheck,
  Briefcase,
  TrendingUp,
};

/**
 * MobileSolutionsDrawer - Dedicated Touch-Optimized Solutions Sheet for Mobile.
 * Displays all 4 categories and 10 curated scriptural solutions with instant
 * 1-tap navigation, direct Guruji call/WhatsApp actions, and authentic temple aesthetics.
 */
export default function MobileSolutionsDrawer({
  isOpen,
  onClose,
}: MobileSolutionsDrawerProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const categories = getAllCategories();
  const allSolutions = getAllSolutions();
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");

  const phoneNum = "+919340605235";
  const displayPhone = "+91 93406 05235";

  // Prevent background body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const displayedSolutions =
    activeCategoryId === "all"
      ? allSolutions
      : allSolutions.filter((s) => s.category === activeCategoryId);

  return (
    <div
      className="fixed inset-0 z-50 md:hidden flex flex-col justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="समस्त वैदिक समाधान मेनू"
    >
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-up bottom sheet container */}
      <div className="relative w-full max-h-[88vh] bg-[#fffdfa] rounded-t-3xl border-t-2 border-[#d89b18] shadow-[0_-10px_40px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden z-10 animate-in slide-in-from-bottom duration-300">
        {/* Top Handle bar */}
        <div className="pt-2.5 pb-1 flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-[#d8c39e]/70" />
        </div>

        {/* Drawer Header */}
        <div className="px-4 py-3 border-b border-[#ebdcb9] flex items-center justify-between bg-gradient-to-r from-[#fdf6e6] via-[#fffdfa] to-[#faf0d7]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#fdf2d6] border border-[#d89b18] flex items-center justify-center text-[#720e18] shadow-xs flex-shrink-0">
              <Flame className="w-4 h-4 text-[#8b0000]" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-sm xs:text-base text-[#720e18] leading-tight">
                {isHi ? "माँ बगलामुखी सिद्ध समाधान" : "Maa Bagalamukhi Solutions"}
              </h2>
              <p className="font-serif text-[0.68rem] text-[#8b5a2b]">
                {isHi ? "10 शास्त्रोक्त अनुष्ठान • नलखेड़ा धाम" : "10 Vedic Rituals • Nalkheda Dham"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close solutions menu"
            className="w-8 h-8 rounded-full bg-white border border-[#ebdcb9] text-[#720e18] hover:bg-[#faebd0] flex items-center justify-center transition-colors shadow-xs active:scale-95"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Horizontal Pills */}
        <div className="px-3 py-2.5 border-b border-[#ebdcb9]/70 bg-[#fff8e7]/50 overflow-x-auto scrollbar-none flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveCategoryId("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-serif whitespace-nowrap transition-all border ${
              activeCategoryId === "all"
                ? "bg-[#720e18] text-white border-[#720e18] font-bold shadow-xs"
                : "bg-white text-[#5c3e32] border-[#d8c39e] hover:border-[#720e18]"
            }`}
          >
            {isHi ? `सभी (${allSolutions.length})` : `All (${allSolutions.length})`}
          </button>

          {categories.map((cat) => {
            const Icon = CATEGORY_ICON_MAP[cat.iconName] || Flame;
            const isSelected = activeCategoryId === cat.id;
            const name = isHi ? cat.nameHi : cat.nameEn;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryId(cat.id)}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-serif whitespace-nowrap transition-all border ${
                  isSelected
                    ? "bg-[#720e18] text-white border-[#720e18] font-bold shadow-xs"
                    : "bg-white text-[#5c3e32] border-[#d8c39e] hover:border-[#720e18]"
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{name}</span>
                <span className="text-[0.65rem] opacity-80">({cat.items.length})</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Solutions List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2.5 divide-y divide-[#f2e6d0]">
          {displayedSolutions.map((sol: SolutionItem) => {
            const title = isHi ? sol.titleHi : sol.titleEn;
            const shortDesc = isHi ? sol.shortDescHi : sol.shortDescEn;
            const catName = isHi ? sol.categoryNameHi : sol.categoryNameEn;

            return (
              <div
                key={sol.slug}
                className="pt-2.5 first:pt-0 group flex flex-col bg-white rounded-xl border border-[#ebdcb9]/70 p-3 hover:border-[#d89b18] transition-all shadow-2xs"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="inline-block px-2 py-0.5 rounded-md bg-[#fdf2d6] text-[#720e18] border border-[#d89b18]/40 text-[0.65rem] font-serif font-bold">
                    {catName}
                  </span>

                  <a
                    href={`https://wa.me/919340605235?text=${encodeURIComponent(
                      `जय माँ बगलामुखी! पंडित जी, मुझे ${title} के संबंध में मार्गदर्शन चाहिए।`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[0.68rem] text-green-700 hover:text-green-800 font-bold bg-green-50 px-2 py-0.5 rounded-md border border-green-200"
                  >
                    <MessageCircle className="w-3 h-3 fill-current" />
                    <span>{isHi ? "पूछें" : "Chat"}</span>
                  </a>
                </div>

                <Link
                  href={`/solutions/${sol.slug}`}
                  onClick={onClose}
                  className="block group-hover:text-[#8b0000] transition-colors"
                >
                  <h3 className="font-serif font-bold text-sm text-[#720e18] group-hover:underline leading-snug flex items-center justify-between">
                    <span>{title}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#d89b18] flex-shrink-0" />
                  </h3>
                  <p className="font-serif text-[0.73rem] text-[#614532] line-clamp-2 mt-1 leading-relaxed">
                    {shortDesc}
                  </p>
                </Link>

                <div className="mt-2 pt-2 border-t border-[#f5ecdd] flex items-center justify-between text-[0.70rem] font-serif">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    onClick={onClose}
                    className="inline-flex items-center gap-1 font-bold text-[#8b0000] hover:text-[#d89b18]"
                  >
                    <span>{isHi ? "संपूर्ण विधान पढ़ें" : "View Details"}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <a
                    href={`tel:${phoneNum}`}
                    className="text-[#6d4330] hover:text-[#720e18] font-bold"
                  >
                    {isHi ? "फोन परामर्श" : "Call Guruji"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct CTA Footer */}
        <div className="p-3 bg-gradient-to-r from-[#fdf5e2] to-[#faeed2] border-t border-[#ebdcb9] flex flex-col gap-2 flex-shrink-0 pb-[max(env(safe-area-inset-bottom),0.75rem)]">
          <div className="flex items-center gap-2">
            <a
              href={`tel:${phoneNum}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#720e18] hover:bg-[#8b0000] text-white text-xs font-serif font-bold shadow-xs active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{isHi ? "गुरुजी से बात करें" : "Call Guruji"}</span>
            </a>

            <a
              href={`https://wa.me/919340605235?text=${encodeURIComponent(
                "जय माँ बगलामुखी! पंडित जी, मुझे माँ बगलामुखी के विशेष अनुष्ठान व समाधान के संबंध में जानकारी चाहिए।"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-green-700 hover:bg-green-800 text-white text-xs font-serif font-bold shadow-xs active:scale-95 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{isHi ? "व्हाट्सएप परामर्श" : "WhatsApp"}</span>
            </a>
          </div>

          <Link
            href="/solutions"
            onClick={onClose}
            className="w-full text-center text-xs font-serif font-bold text-[#720e18] hover:text-[#b8860b] py-1 border border-[#d89b18]/50 rounded-lg bg-white/70"
          >
            {isHi ? "समस्त 10 अनुष्ठानों का मुख्य पृष्ठ देखें →" : "View Full Solutions Hub Page →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
