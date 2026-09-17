"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

export default function LanguageSwitcher({
  className = "",
  variant = "desktop",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === "mobile") {
    return (
      <div
        className={`inline-flex items-center bg-[#fff8e7] p-0.5 rounded-full border border-[#deb881]/80 shadow-[0_1px_6px_rgba(216,155,24,0.18)] ${className}`}
        role="group"
        aria-label="Language selection"
      >
        <button
          type="button"
          onClick={() => setLanguage("hi")}
          className={`px-2 py-0.5 rounded-full text-[11px] font-serif font-bold transition-all duration-200 ${
            language === "hi"
              ? "bg-gradient-to-r from-[#8b0000] to-[#b91c1c] text-white shadow-xs"
              : "text-[#5c3e32] hover:text-[#8b0000]"
          }`}
          aria-pressed={language === "hi"}
        >
          हिन्दी
        </button>

        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`px-2 py-0.5 rounded-full text-[11px] font-serif font-bold transition-all duration-200 ${
            language === "en"
              ? "bg-gradient-to-r from-[#8b0000] to-[#b91c1c] text-white shadow-xs"
              : "text-[#5c3e32] hover:text-[#8b0000]"
          }`}
          aria-pressed={language === "en"}
        >
          EN
        </button>
      </div>
    );
  }

  // Desktop Variant - Elegant Golden-Trimmed Segmented Pill
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-1.5 py-1 rounded-full bg-[#fffdf8] border border-[#d89b18]/70 shadow-[0_2px_10px_rgba(216,155,24,0.15)] hover:border-[#d89b18] transition-all select-none ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <div className="w-5 h-5 rounded-full bg-[#faedd2] text-[#8b0000] flex items-center justify-center ml-0.5 flex-shrink-0">
        <Globe className="w-3.5 h-3.5 text-[#8b0000]" />
      </div>

      <div className="flex items-center gap-0.5">
        <button
          type="button"
          onClick={() => setLanguage("hi")}
          className={`px-2.5 py-1 rounded-full text-xs font-serif font-bold tracking-wide transition-all duration-200 cursor-pointer ${
            language === "hi"
              ? "bg-gradient-to-r from-[#8b0000] via-[#a3121b] to-[#7a0000] text-[#fff8e7] shadow-xs scale-102"
              : "text-[#5c3e32] hover:text-[#8b0000] hover:bg-[#faedd2]/50"
          }`}
          aria-pressed={language === "hi"}
          title="हिन्दी में देखें"
        >
          हिन्दी
        </button>

        <span className="text-[#deb881] text-xs font-semibold select-none">|</span>

        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`px-2.5 py-1 rounded-full text-xs font-serif font-bold tracking-wide transition-all duration-200 cursor-pointer ${
            language === "en"
              ? "bg-gradient-to-r from-[#8b0000] via-[#a3121b] to-[#7a0000] text-[#fff8e7] shadow-xs scale-102"
              : "text-[#5c3e32] hover:text-[#8b0000] hover:bg-[#faedd2]/50"
          }`}
          aria-pressed={language === "en"}
          title="Switch to English"
        >
          English
        </button>
      </div>
    </div>
  );
}
