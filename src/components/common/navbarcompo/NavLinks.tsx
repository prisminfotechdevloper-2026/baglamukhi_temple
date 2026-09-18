"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NavLinkItem } from "./types";
import { useLanguage } from "@/context/LanguageContext";
import SolutionsMegaMenu from "./SolutionsMegaMenu";

interface NavLinksProps {
  links?: NavLinkItem[];
  className?: string;
  onLinkClick?: (link: NavLinkItem) => void;
}

/**
 * NavLinks - Interactive Desktop Navigation Links with Multilingual Support
 * & Solutions Mega Dropdown Menu.
 */
export default function NavLinks({
  className = "",
  onLinkClick,
}: NavLinksProps) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Close mega menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMegaMenuOpen(false);
  }

  const handleMouseEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  const isSolutionsActive = pathname.startsWith("/solutions");

  const localizedLinks: NavLinkItem[] = [
    { label: t.nav.home, href: "/" },
    // Solutions is handled separately as a Mega Dropdown
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.faq, href: "/#faq" },
    { label: t.nav.gallery, href: "/gallery" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav
      className={`flex items-center gap-3 lg:gap-6 ${className}`}
      aria-label="Main Temple Navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      {/* 1. Home Link */}
      {(() => {
        const homeLink = localizedLinks[0];
        const isHomeActive =
          (pathname === "/" || pathname === "/home") && !activeHash;
        return (
          <Link
            key={homeLink.href}
            href={homeLink.href}
            onClick={() => {
              setActiveHash("");
              if (onLinkClick) onLinkClick(homeLink);
            }}
            className={`temple-nav-link text-[0.94rem] lg:text-[1.02rem] font-serif font-semibold transition-colors duration-200 ${
              isHomeActive
                ? "text-[#8b0000] active-nav-link font-bold"
                : "text-[#3d2314] hover:text-[#8b0000]"
            }`}
            itemProp="url"
          >
            <span itemProp="name">{homeLink.label}</span>
          </Link>
        );
      })()}

      {/* 2. Solutions Mega Dropdown Trigger */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
          className={`temple-nav-link text-[0.94rem] lg:text-[1.02rem] font-serif font-semibold transition-colors duration-200 inline-flex items-center gap-1 cursor-pointer select-none py-2 ${
            isSolutionsActive || isMegaMenuOpen
              ? "text-[#8b0000] font-bold"
              : "text-[#3d2314] hover:text-[#8b0000]"
          }`}
          aria-expanded={isMegaMenuOpen}
          aria-haspopup="true"
        >
          <span>{t.nav.solutions}</span>
          <ChevronDown
            className={`w-4 h-4 text-[#d89b18] transition-transform duration-200 ${
              isMegaMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Mega Menu Dropdown */}
        <SolutionsMegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
      </div>

      {/* 3. Remaining Nav Links (Services, Gallery, Mandir, Contact) */}
      {localizedLinks.slice(1).map((link) => {
        const isExactRoute = link.href === pathname;
        const isHashActive =
          (pathname === "/" || pathname === "/home") &&
          link.href.startsWith("/#") &&
          activeHash === link.href.replace("/", "");
        const isActive = isExactRoute || isHashActive;

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => {
              if (link.href.startsWith("/#")) {
                setActiveHash(link.href.replace("/", ""));
              } else {
                setActiveHash("");
              }
              if (onLinkClick) onLinkClick(link);
            }}
            className={`temple-nav-link text-[0.94rem] lg:text-[1.02rem] font-serif font-semibold transition-colors duration-200 ${
              isActive
                ? "text-[#8b0000] active-nav-link font-bold"
                : "text-[#3d2314] hover:text-[#8b0000]"
            }`}
            itemProp="url"
          >
            <span itemProp="name">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

