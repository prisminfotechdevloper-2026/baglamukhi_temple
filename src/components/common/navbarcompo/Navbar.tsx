import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import MobileBottomNav from "./MobileBottomNav";
import { DEFAULT_NAV_LINKS, DEFAULT_CONTACT } from "./constants";
import { NavbarProps } from "./types";

/**
 * Navbar - Server Component Orchestrator.
 * Keeps structural markup server-side rendered (RSC) for premier SEO performance.
 * On Mobile: Renders clean Top Bar (Logo + Title) & Bottom Dock Navigation.
 * On Desktop: Renders full horizontal NavLinks.
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

            {/* Desktop Navigation (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <NavLinks links={links} />
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

