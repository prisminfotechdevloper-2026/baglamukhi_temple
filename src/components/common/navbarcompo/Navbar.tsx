"use client";

import { useState } from "react";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import MobileBottomNav from "./MobileBottomNav";
import MobileSolutionsDrawer from "./MobileSolutionsDrawer";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { DEFAULT_NAV_LINKS, DEFAULT_CONTACT } from "./constants";
import { NavbarProps } from "./types";

/**
 * Navbar Component.
 * On Mobile: Renders Logo + Title, Compact Language Switcher, and Mobile Dock.
 * On Desktop: Renders full horizontal NavLinks + Golden Segmented Language Switcher.
 */
export default function Navbar({
  links = DEFAULT_NAV_LINKS,
  contact = DEFAULT_CONTACT,
  className = "",
}: NavbarProps) {
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  return (
    <>
      {/* ============================================================
          TOP STICKY NAVBAR
          ============================================================ */}
      <header
        className={`sticky top-0 z-40 w-full max-w-full bg-[#fffdfa]/96 backdrop-blur-md border-b border-[#ebdcb9]/80 shadow-[0_3px_16px_rgba(92,0,0,0.07)] ${className}`}
        itemScope
        itemType="https://schema.org/Place"
      >
        <div className="max-w-[1400px] w-full mx-auto px-2.5 xs:px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 xs:h-20 sm:h-22 md:h-24 gap-2 xs:gap-3 sm:gap-6">
            {/* Brand Identity (Logo + Deity Name + Sacred Lotus) */}
            <NavBrand />

            {/* Mobile Actions: Language Switcher Only */}
            <div className="flex md:hidden items-center flex-shrink-0">
              <LanguageSwitcher variant="mobile" />
            </div>

            {/* Desktop Navigation & Switcher (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-4 lg:gap-7 flex-shrink-0">
              <NavLinks links={links} />
              <LanguageSwitcher variant="desktop" />
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          MOBILE SOLUTIONS DRAWER / DROPDOWN
          ============================================================ */}
      <MobileSolutionsDrawer
        isOpen={isMobileSolutionsOpen}
        onClose={() => setIsMobileSolutionsOpen(false)}
      />

      {/* ============================================================
          MOBILE BOTTOM NAVIGATION DOCK (Fixed at viewport bottom)
          ============================================================ */}
      <MobileBottomNav
        links={links}
        contact={contact}
        onOpenSolutions={() => setIsMobileSolutionsOpen(true)}
      />
    </>
  );
}
