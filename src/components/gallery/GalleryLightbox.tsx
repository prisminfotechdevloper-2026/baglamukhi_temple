"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Flame,
} from "lucide-react";
import { GalleryItem } from "./types";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const { t } = useLanguage();
  const isOpen =
    currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  // Keyboard shortcut navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-2 sm:p-4 md:p-6 transition-all animate-in fade-in duration-200"
    >
      {/* Background click to close */}
      <div
        className="absolute inset-0 z-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Lightbox Frame - Warm Royal Golden Brown Theme */}
      <div className="relative z-10 w-full max-w-5xl max-h-[96vh] flex flex-col rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#2e1d13] via-[#20130a] to-[#180e07] border-2 border-[#d89b18] shadow-[0_20px_70px_rgba(0,0,0,0.9)] overflow-hidden text-[#fff8e7]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 bg-[#3a2416]/95 border-b border-[#d89b18]/40 flex-shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
            <span className="text-[#ffd700] text-sm sm:text-base font-serif font-bold flex-shrink-0">
              ॥ ॐ ॥
            </span>
            <div className="min-w-0">
              <h3 className="font-serif font-bold text-sm sm:text-base md:text-lg text-[#fff3d6] truncate">
                {currentItem.title}
              </h3>
              <div className="flex items-center gap-2 text-[0.70rem] sm:text-xs text-[#faebd0]/80 font-serif">
                <span className="text-[#ffd700] font-medium">
                  {currentItem.categoryLabel}
                </span>
                {currentItem.location && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#faebd0]/90">
                      <MapPin className="w-3 h-3 text-[#d89b18]" />
                      {currentItem.location}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Image Counter */}
            <span className="hidden xs:inline-block px-3 py-1 rounded-full bg-[#4e311e] border border-[#d89b18]/60 text-xs font-serif font-bold text-[#ffd700]">
              {(currentIndex ?? 0) + 1} / {items.length}
            </span>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-full bg-[#4e311e] hover:bg-[#684128] text-[#ffd700] border border-[#d89b18]/60 hover:border-[#ffd700] transition-colors focus:outline-none cursor-pointer"
              aria-label={t.gallery.lightboxClose}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Central Visual Stage */}
        <div className="relative flex-1 flex items-center justify-center p-3 sm:p-5 bg-gradient-to-b from-[#180e07] via-[#120a05] to-[#180e07] overflow-hidden select-none">
          {/* Previous Arrow Button */}
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-[#3d2414]/85 hover:bg-[#5a361e] text-[#ffd700] border border-[#d89b18]/70 hover:border-[#ffd700] shadow-xl transition-all hover:scale-110 active:scale-90 focus:outline-none cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-[#3d2414]/85 hover:bg-[#5a361e] text-[#ffd700] border border-[#d89b18]/70 hover:border-[#ffd700] shadow-xl transition-all hover:scale-110 active:scale-90 focus:outline-none cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container with fixed responsive height */}
          <div className="relative w-full h-[360px] xs:h-[420px] sm:h-[480px] md:h-[540px] max-h-[62vh] flex items-center justify-center">
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)]"
            />
          </div>

          {/* Sacred Corner Medallions */}
          <div className="absolute top-2 left-2 text-[#ffd700]/50 text-xs font-serif pointer-events-none">
            ॥ ॐ ॥
          </div>
          <div className="absolute top-2 right-2 text-[#ffd700]/50 text-xs font-serif pointer-events-none">
            ॥ ॐ ॥
          </div>
        </div>

        {/* Bottom Details Strip */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#2e1c10] border-t border-[#d89b18]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 flex-shrink-0">
          <div className="w-full min-w-0">
            {currentItem.mantra && (
              <div className="flex items-center gap-1.5 text-[0.72rem] sm:text-xs font-serif text-[#ffd700] font-semibold mb-1 italic">
                <Flame className="w-3.5 h-3.5 flex-shrink-0 text-[#ffd700]" />
                <span className="truncate">{currentItem.mantra}</span>
              </div>
            )}
            <p className="text-xs sm:text-sm text-[#faebd0]/90 font-serif leading-relaxed line-clamp-2 md:line-clamp-3">
              {currentItem.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
