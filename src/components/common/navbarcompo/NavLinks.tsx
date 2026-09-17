"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkItem } from "./types";
import { useLanguage } from "@/context/LanguageContext";

interface NavLinksProps {
  links?: NavLinkItem[];
  className?: string;
  onLinkClick?: (link: NavLinkItem) => void;
}

/**
 * NavLinks - Interactive Desktop Navigation Links with Multilingual Support.
 * Manages active route (/gallery) and hash (#services, #mandir) highlighting.
 */
export default function NavLinks({
  className = "",
  onLinkClick,
}: NavLinksProps) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");
  const { t } = useLanguage();

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const localizedLinks: NavLinkItem[] = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.gallery, href: "/gallery" },
    { label: t.nav.mandir, href: "/#mandir" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav
      className={`flex items-center gap-4 lg:gap-7 ${className}`}
      aria-label="Main Temple Navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      {localizedLinks.map((link) => {
        const isExactRoute =
          link.href === pathname ||
          (link.href === "/" && (pathname === "/" || pathname === "/home") && !activeHash);
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
            className={`temple-nav-link text-[0.96rem] lg:text-[1.02rem] font-serif font-semibold transition-colors duration-200 ${
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
