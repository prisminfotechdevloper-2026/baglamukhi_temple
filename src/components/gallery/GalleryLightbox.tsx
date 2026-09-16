"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Phone, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { GalleryItem } from "./types";

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
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
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

  const whatsappText = encodeURIComponent(
    `जय माँ बगलामुखी! पंडित जी, मैंने गैलरी में "${currentItem.title}" दर्शन देखा। मुझे इस संबंध में पूजा संकल्प व अनुष्ठान की विधि जाननी है।`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl p-2 sm:p-4 md:p-6 transition-all animate-in fade-in duration-200"
    >
      {/* Background click to close */}
      <div
        className="absolute inset-0 z-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Lightbox Frame */}
      <div className="relative z-10 w-full max-w-5xl max-h-[96vh] flex flex-col rounded-2xl bg-gradient-to-b from-[#2d050c] to-[#1a0206] border-2 border-[#d89b18]/60 shadow-[0_16px_60px_rgba(0,0,0,0.85)] overflow-hidden text-[#fff8e7]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 bg-[#400710]/90 border-b border-[#ebdcb9]/20 flex-shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
            <span className="text-[#ffd700] text-sm sm:text-base font-serif font-bold flex-shrink-0">
              ॥ ॐ ॥
            </span>
            <div className="min-w-0">
              <h3 className="font-serif font-bold text-sm sm:text-base md:text-lg text-[#fff3d6] truncate">
                {currentItem.title}
              </h3>
              <div className="flex items-center gap-2 text-[0.70rem] sm:text-xs text-[#faebd0]/70 font-serif">
                <span className="text-[#ffd700] font-medium">{currentItem.categoryLabel}</span>
                {currentItem.location && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
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
            <span className="hidden xs:inline-block px-3 py-1 rounded-full bg-[#5a0b16] border border-[#d89b18]/40 text-xs font-serif font-semibold text-[#ffd700]">
              {(currentIndex ?? 0) + 1} / {items.length}
            </span>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-full bg-[#5a0b16] hover:bg-[#780e1e] text-[#ffd700] border border-[#d89b18]/40 hover:border-[#ffd700] transition-colors focus:outline-none"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Central Visual Stage */}
        <div className="relative flex-1 min-h-[300px] xs:min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex items-center justify-center p-2 sm:p-4 bg-black/40 overflow-hidden select-none">
          {/* Previous Arrow Button */}
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-[#38040b]/80 hover:bg-[#5a0b16] text-[#ffd700] border border-[#d89b18]/50 hover:border-[#ffd700] shadow-lg transition-all hover:scale-110 active:scale-90 focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-[#38040b]/80 hover:bg-[#5a0b16] text-[#ffd700] border border-[#d89b18]/50 hover:border-[#ffd700] shadow-lg transition-all hover:scale-110 active:scale-90 focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image */}
          <div className="relative w-full h-full max-h-[60vh] sm:max-h-[65vh] flex items-center justify-center">
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px"
              priority
              className="object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]"
            />
          </div>

          {/* Sacred Corner Medallions */}
          <div className="absolute top-2 left-2 text-[#ffd700]/40 text-xs font-serif pointer-events-none">
            ॥ ॐ ॥
          </div>
          <div className="absolute top-2 right-2 text-[#ffd700]/40 text-xs font-serif pointer-events-none">
            ॥ ॐ ॥
          </div>
        </div>

        {/* Bottom Details & Devotee Booking Strip */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#2f040a] border-t border-[#ebdcb9]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 flex-shrink-0">
          <div className="max-w-2xl min-w-0">
            {currentItem.mantra && (
              <div className="flex items-center gap-1.5 text-[0.72rem] sm:text-xs font-serif text-[#ffd700] font-semibold mb-1 italic">
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{currentItem.mantra}</span>
              </div>
            )}
            <p className="text-xs sm:text-sm text-[#faebd0]/90 font-serif leading-relaxed line-clamp-2 md:line-clamp-3">
              {currentItem.caption}
            </p>
          </div>

          {/* Action CTAs inside modal */}
          <div className="flex items-center gap-2.5 sm:gap-3 w-full md:w-auto flex-shrink-0 pt-1 md:pt-0">
            <a
              href="tel:+919340605235"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#d89b18] to-[#b8800b] text-[#3d0309] font-serif font-bold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-[#3d0309]" />
              <span>पंडित जी से बात करें</span>
            </a>

            <a
              href={`https://wa.me/919340605235?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#25D366]/20 text-[#5fe18c] border border-[#25D366]/60 hover:bg-[#25D366]/30 font-serif font-semibold text-xs sm:text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
