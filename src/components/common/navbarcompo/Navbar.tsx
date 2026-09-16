import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import CallButton from "./CallButton";
import MobileMenu from "./MobileMenu";
import { DEFAULT_NAV_LINKS, DEFAULT_CONTACT } from "./constants";
import { NavbarProps } from "./types";

/**
 * Navbar - Server Component Orchestrator.
 * Keeps structural markup server-side rendered (RSC) for premier SEO performance,
 * while importing and orchestrating modular client components (NavLinks, CallButton, MobileMenu)
 * with dynamic props.
 */
export default function Navbar({
  links = DEFAULT_NAV_LINKS,
  contact = DEFAULT_CONTACT,
  className = "",
}: NavbarProps) {
  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#fffdfa]/95 backdrop-blur-md border-b border-[#ebdcb9]/70 shadow-[0_2px_14px_rgba(92,0,0,0.06)] ${className}`}
      itemScope
      itemType="https://schema.org/Place"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Server-Side Brand Identity (Logo + Deity Name + Sacred Lotus) */}
          <NavBrand />

          {/* Desktop Navigation & Call CTA (Client Components driven by dynamic props) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <NavLinks links={links} />
            <CallButton contact={contact} />
          </div>

          {/* Mobile Navigation Drawer (Client Component driven by dynamic props) */}
          <MobileMenu links={links} contact={contact} />
        </div>
      </div>
    </header>
  );
}
