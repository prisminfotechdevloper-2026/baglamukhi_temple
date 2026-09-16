"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Sparkles,
  Maximize2,
  LayoutGrid,
  Grid3X3,
  MapPin,
  Eye,
  Flame,
  Search,
} from "lucide-react";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "./galleryData";
import { GalleryCategory, GalleryItem } from "./types";
import GalleryLightbox from "./GalleryLightbox";

export default function GalleryGridSection() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [viewMode, setViewMode] = useState<"mosaic" | "grid">("mosaic");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter items based on category and optional search query
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.caption.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : (prev ?? 1) - 1
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1
    );
  };

  return (
    <section
      id="gallery-grid"
      className="relative w-full py-12 sm:py-16 md:py-20 bg-[#fff8e7] text-[#4a2618] overflow-hidden"
    >
      {/* Background Sacred Motif Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] bg-gradient-to-b from-[#f7e3b5]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Decorative Divider */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#faebd0] border border-[#d89b18]/40 shadow-xs mb-3">
            <span className="text-[#8b0000] font-serif font-bold text-xs sm:text-sm">
              ॥ श्री बगलामुखी नमः ॥
            </span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-extrabold text-[#5c0a15] tracking-tight">
            पवित्र दर्शन एवं अनुष्ठान चित्र दीर्घा
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3 text-[#d89b18]">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#d89b18]" />
            <span className="font-serif font-bold text-xs sm:text-sm">॥ ॐ ॥</span>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#d89b18]" />
          </div>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#6d4330] font-serif">
            श्रेणी के अनुसार चयन करें अथवा किसी भी छवि पर क्लिक करके विस्तृत दर्शन एवं आध्यात्मिक विवरण देखें।
          </p>
        </div>

        {/* Filter Controls & View Toggle Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-[#ebdcb9]">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 w-full lg:w-auto">
            {GALLERY_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`group relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-serif text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? "bg-gradient-to-r from-[#8b0000] via-[#a30b15] to-[#750000] text-[#fff8e7] shadow-[0_4px_14px_rgba(139,0,0,0.35)] border border-[#ffd700]/70 scale-[1.02]"
                      : "bg-[#fffdf8] hover:bg-[#faebd0] text-[#5c3e32] border border-[#ebdcb9] hover:border-[#d89b18]/50 shadow-2xs"
                  }`}
                >
                  {isSelected && (
                    <Sparkles className="w-3.5 h-3.5 text-[#ffd700] animate-pulse" />
                  )}
                  <span>{cat.label}</span>
                  <span
                    className={`text-[0.68rem] px-1.5 py-0.5 rounded-full font-sans font-bold leading-none ${
                      isSelected
                        ? "bg-[#5a0b16] text-[#ffd700]"
                        : "bg-[#faebd0] text-[#8b0000]"
                    }`}
                  >
                    {cat.id === "all" ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter(i => i.category === cat.id).length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Toolbar: Search & Grid/Mosaic Switcher */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
            {/* View Mode Toggle */}
            <div className="inline-flex items-center p-1 rounded-xl bg-[#fffdf8] border border-[#ebdcb9] shadow-xs">
              <button
                onClick={() => setViewMode("mosaic")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-serif font-semibold transition-all ${
                  viewMode === "mosaic"
                    ? "bg-[#faebd0] text-[#8b0000] shadow-2xs"
                    : "text-[#6d4330] hover:text-[#8b0000]"
                }`}
                title="शाही मोज़ेक दृश्य (Mosaic Layout)"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">शाही मोज़ेक</span>
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-serif font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-[#faebd0] text-[#8b0000] shadow-2xs"
                    : "text-[#6d4330] hover:text-[#8b0000]"
                }`}
                title="समान ग्रिड दृश्य (Equal Grid Layout)"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">समान ग्रिड</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid / Mosaic */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#fffdf8] rounded-2xl border border-[#ebdcb9] p-8 max-w-lg mx-auto shadow-sm">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#faebd0] flex items-center justify-center text-[#8b0000] mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#5c0a15]">
              कोई छवि नहीं मिली
            </h3>
            <p className="text-xs sm:text-sm text-[#6d4330] font-serif mt-1">
              कृपया अन्य श्रेणी चुनें।
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#8b0000] text-white font-serif text-xs font-semibold shadow-sm"
            >
              सभी दर्शन देखें
            </button>
          </div>
        ) : (
          <div
            className={
              viewMode === "mosaic"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 auto-rows-[280px] xs:auto-rows-[310px] sm:auto-rows-[340px]"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 auto-rows-[320px] sm:auto-rows-[360px]"
            }
          >
            {filteredItems.map((item, index) => {
              // Dynamic spanning classes for Mosaic layout to make it look regal and professional
              let spanClass = "";
              if (viewMode === "mosaic") {
                if (item.spanType === "featured") {
                  spanClass = "sm:col-span-2 sm:row-span-2";
                } else if (item.spanType === "wide") {
                  spanClass = "sm:col-span-2";
                } else if (item.spanType === "tall") {
                  spanClass = "sm:row-span-2";
                }
              }

              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#240307] border-2 border-[#d89b18]/50 shadow-[0_6px_20px_rgba(74,38,24,0.12)] hover:shadow-[0_16px_40px_rgba(139,0,0,0.38)] hover:border-[#ffd700] transition-all duration-300 transform hover:-translate-y-1 ${spanClass}`}
                >
                  {/* Decorative Inner Golden Rim */}
                  <div className="absolute inset-1.5 sm:inset-2 z-10 rounded-xl border border-[#ffd700]/30 pointer-events-none group-hover:border-[#ffd700]/70 transition-colors" />

                  {/* 4 Sacred Corner Medallions (OM / Trishul aesthetic) */}
                  <div className="absolute top-3 left-3 z-20 text-[#ffd700] text-[0.65rem] font-serif font-bold bg-[#38040b]/80 px-1.5 py-0.5 rounded border border-[#d89b18]/60 shadow-xs pointer-events-none group-hover:scale-110 transition-transform">
                    ॥ ॐ ॥
                  </div>
                  <div className="absolute top-3 right-3 z-20 text-[#ffd700] text-[0.65rem] font-serif font-bold bg-[#38040b]/80 px-1.5 py-0.5 rounded border border-[#d89b18]/60 shadow-xs pointer-events-none group-hover:scale-110 transition-transform">
                    ॥ ॐ ॥
                  </div>

                  {/* Image Container with Smooth Zoom on Hover */}
                  <div className="relative w-full h-full overflow-hidden bg-[#180104]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b0104] via-[#240307]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                    {/* Subtle Radial Sunburst Hover Glow */}
                    <div className="absolute inset-0 bg-radial from-[#d89b18]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Top Badge Pill */}
                  {item.badge && (
                    <div className="absolute top-8 left-3 z-20">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#5a0b16]/90 border border-[#ffd700]/60 text-[#ffd700] text-[0.68rem] font-serif font-bold shadow-md backdrop-blur-xs">
                        <Sparkles className="w-2.5 h-2.5" />
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Center Interactive Quick "दर्शन करें" Zoom Indicator */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#5a0b16]/95 border-2 border-[#ffd700] text-[#fff8e7] font-serif font-bold text-xs sm:text-sm shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4 text-[#ffd700]" />
                      <span>दर्शन करें</span>
                    </div>
                  </div>

                  {/* Bottom Divine Info Card Overlay */}
                  <div className="absolute bottom-0 inset-x-0 z-20 p-3.5 sm:p-5 flex flex-col justify-end text-[#fff8e7]">
                    <div className="flex items-center gap-2 text-[0.70rem] text-[#ffd700] font-serif mb-1">
                      <span className="font-semibold">{item.categoryLabel}</span>
                      {item.location && (
                        <>
                          <span className="text-[#faebd0]/60">•</span>
                          <span className="flex items-center gap-0.5 text-[#faebd0]/80">
                            <MapPin className="w-2.5 h-2.5 text-[#d89b18]" />
                            {item.location}
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-sm xs:text-base sm:text-lg text-[#fff3d6] leading-snug drop-shadow-sm group-hover:text-[#ffd700] transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-[0.74rem] sm:text-xs text-[#faebd0]/85 font-serif line-clamp-1 mt-1 opacity-90 group-hover:opacity-100">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Sacred Footer Note in Gallery */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#42060e] via-[#5c0a15] to-[#42060e] border-2 border-[#d89b18]/60 text-center text-[#fff8e7] shadow-lg max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#ffd700] font-serif font-bold text-sm mb-2">
            <Flame className="w-4 h-4 text-[#ffd700]" />
            <span>माँ बगलामुखी नलखेड़ा धाम दर्शन एवं संकल्प</span>
            <Flame className="w-4 h-4 text-[#ffd700]" />
          </div>

          <h4 className="font-serif font-bold text-lg sm:text-2xl text-[#fff3d6]">
            क्या आप व्यक्तिगत नाम व गोत्र से विशेष अनुष्ठान कराना चाहते हैं?
          </h4>

          <p className="text-xs sm:text-sm text-[#faebd0]/90 font-serif mt-2 max-w-2xl mx-auto">
            माँ के पावन दरबार में शत्रु विजय, आर्थिक कष्ट निवारण, व्यापारिक संकट एवं 
            पारिवारिक शांति हेतु पूज्य गुरुजी पंडित शुभम शर्मा जी के सान्निध्य में पूजा संकल्प बुक कराएं।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5">
            <a
              href="tel:+919340605235"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d89b18] to-[#b8800b] text-[#3d0309] font-serif font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-all"
            >
              <span>कॉल पर संपर्क करें: +91 93406 05235</span>
            </a>

            <a
              href="https://wa.me/919340605235?text=%E0%A4%9C%E0%A4%AF%20%E0%A4%AE%E0%A4%BE%E0%A4%81%20%E0%A4%AC%E0%A4%97%E0%A4%B2%E0%A4%BE%E0%A4%AE%E0%A4%A1%E0%A4%96%E0%A5%80!%20%E0%A4%AA%E0%A4%82%E0%A4%A1%E0%A4%BF%E0%A4%A4%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%A8%E0%A4%B2%E0%A4%96%E0%A5%87%E0%A4%A1%E0%A4%BC%E0%A4%BE%20%E0%A4%A7%E0%A4%BE%E0%A4%AE%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%87%E0%A5%8D%E0%A4%A0%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A4%B0%E0%A4%BE%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88%E0%A5%A4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/20 text-[#61e490] border border-[#25D366]/60 hover:bg-[#25D366]/30 font-serif font-semibold text-xs sm:text-sm transition-all"
            >
              <span>WhatsApp पर संदेश भेजें</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
