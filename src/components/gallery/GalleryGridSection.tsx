"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  MapPin,
} from "lucide-react";
import { GALLERY_ITEMS } from "./galleryData";
import GalleryLightbox from "./GalleryLightbox";

export default function GalleryGridSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === 0 ? GALLERY_ITEMS.length - 1 : (prev ?? 1) - 1
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === GALLERY_ITEMS.length - 1 ? 0 : (prev ?? 0) + 1
    );
  };

  return (
    <section
      id="gallery-grid"
      className="relative w-full py-4 sm:py-6 md:py-8 bg-gradient-to-b from-[#fff8e7] via-[#fdf4dc] to-[#fff8e7] text-[#4a2618] overflow-hidden"
    >
      {/* Background Sacred Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[500px] bg-gradient-to-b from-[#faebd0]/60 via-[#f7dfa5]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#d89b18]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#8b0000]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            EQUAL 3-COLUMN GALLERY GRID (CLEAN & UNCLUTTERED)
            ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 auto-rows-[330px] sm:auto-rows-[360px]">
          {GALLERY_ITEMS.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-[#24140a] border-2 border-[#d89b18]/50 shadow-[0_8px_24px_rgba(74,38,24,0.12)] hover:shadow-[0_20px_50px_rgba(180,120,30,0.35)] hover:border-[#ffd700] transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Decorative Inner Golden Rim */}
                <div className="absolute inset-1.5 sm:inset-2.5 z-10 rounded-xl sm:rounded-2xl border border-[#ffd700]/30 pointer-events-none group-hover:border-[#ffd700]/70 transition-colors" />

                {/* Image Container with Smooth Zoom on Hover */}
                <div className="relative w-full h-full overflow-hidden bg-[#180e07]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay for Readability - Warm Golden Brown */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180e07] via-[#24140a]/45 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Top Badge Pill - Clean, UI-Friendly Glassmorphic Tag */}
                {item.badge && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#fff8e7] text-[11px] sm:text-xs font-serif font-semibold tracking-wide shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Center Hover Indicator - View Darshan Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8b5a1b] via-[#b87c24] to-[#6d4310] border-2 border-[#ffd700] text-[#fffdf8] font-serif font-bold text-xs sm:text-sm shadow-[0_8px_25px_rgba(216,155,24,0.45)] transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4 text-[#ffd700]" />
                    <span>View Darshan</span>
                  </div>
                </div>

                {/* Bottom Divine Info Card Overlay */}
                <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-5 flex flex-col justify-end text-[#fff8e7]">
                  <div className="flex items-center gap-2 text-[0.72rem] sm:text-xs text-[#ffd700] font-serif mb-1">
                    <span className="font-semibold">{item.categoryLabel}</span>
                    {item.location && (
                      <>
                        <span className="text-[#faebd0]/60">•</span>
                        <span className="flex items-center gap-1 text-[#faebd0]/85">
                          <MapPin className="w-3 h-3 text-[#d89b18]" />
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
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
