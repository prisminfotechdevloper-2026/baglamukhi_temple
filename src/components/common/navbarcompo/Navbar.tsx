import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import CallButton from "./CallButton";
import MobileBottomNav from "./MobileBottomNav";
import { DEFAULT_NAV_LINKS, DEFAULT_CONTACT } from "./constants";
import { NavbarProps } from "./types";
import { Phone } from "lucide-react";

/**
 * Navbar - Server Component Orchestrator.
 * Keeps structural markup server-side rendered (RSC) for premier SEO performance.
 * On Mobile: Renders clean Top Bar (Logo + Title + Quick Call Button) & Bottom Dock Navigation.
 * On Desktop: Renders full horizontal NavLinks and CallButton.
 */
export default function Navbar({
  links = DEFAULT_NAV_LINKS,
  contact = DEFAULT_CONTACT,
  className = "",
}: NavbarProps) {
  return (
    <>
      {/* ============================================================
          TOP STICKY NAVBAR (Luxurious, spacious, mobile-optimized)
          ============================================================ */}
      <header
        className={`sticky top-0 z-40 w-full max-w-full bg-[#fffdfa]/96 backdrop-blur-md border-b border-[#ebdcb9]/80 shadow-[0_3px_16px_rgba(92,0,0,0.07)] ${className}`}
        itemScope
        itemType="https://schema.org/Place"
      >
        <div className="max-w-[1400px] w-full mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 xs:h-20 sm:h-22 md:h-24 gap-2.5 xs:gap-3 sm:gap-6">
            {/* Server-Side Brand Identity (Logo + Deity Name + Sacred Lotus) */}
            <NavBrand />

            {/* Desktop Navigation & Call CTA (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <NavLinks links={links} />
              <CallButton contact={contact} />
            </div>

            {/* Mobile Quick Call Button (Top Header on Mobile: Spacious 48px touch target with divine glow) */}
            <div className="flex md:hidden items-center flex-shrink-0">
              <a
                href={`tel:${contact.phone}`}
                className="group relative flex items-center justify-center w-11 h-11 xs:w-11.5 xs:h-11.5 rounded-full bg-gradient-to-br from-[#c31b1b] via-[#b21818] to-[#880000] text-white shadow-[0_4px_14px_rgba(139,0,0,0.38)] border-2 border-[#f6dd9f]/70 active:scale-90 hover:scale-105 transition-all duration-200"
                aria-label={`Call Pandit Shubham Sharma at ${contact.displayPhone}`}
                itemProp="telephone"
              >
                {/* Subtle pulse halo */}
                <span className="absolute -inset-1 rounded-full bg-red-500/25 animate-ping pointer-events-none opacity-50" />
                <Phone className="w-4.5 h-4.5 fill-white flex-shrink-0 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          MOBILE BOTTOM NAVIGATION DOCK (Fixed at viewport bottom)
          ============================================================ */}
      <MobileBottomNav links={links} contact={contact} />
    </>
  );
}

