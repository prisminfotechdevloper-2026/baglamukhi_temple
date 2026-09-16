"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkItem } from "./types";

interface NavLinksProps {
  links: NavLinkItem[];
  className?: string;
  onLinkClick?: (link: NavLinkItem) => void;
}

/**
 * NavLinks - Client Component for Interactive Desktop Navigation Links.
 * Manages active route (/gallery) and hash (#sevayein, #mandir) highlighting.
 */
export default function NavLinks({
  links,
  className = "",
  onLinkClick,
}: NavLinksProps) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <nav
      className={`flex items-center gap-5 lg:gap-8 ${className}`}
      aria-label="Main Temple Navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      {links.map((link) => {
        // Active state checking: match exact path OR match hash on homepage
        const isExactRoute =
          link.href === pathname ||
          (link.href === "/" && pathname === "/" && !activeHash);
        const isHashActive =
          pathname === "/" &&
          link.href.startsWith("/#") &&
          activeHash === link.href.replace("/", "");
        const isActive = isExactRoute || isHashActive;

        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => {
              if (link.href.startsWith("/#")) {
                setActiveHash(link.href.replace("/", ""));
              } else {
                setActiveHash("");
              }
              if (onLinkClick) onLinkClick(link);
            }}
            className={`temple-nav-link text-[1rem] lg:text-[1.05rem] font-serif font-semibold transition-colors duration-200 ${
              isActive
                ? "text-[#8b0000] active-nav-link"
                : "text-[#3d2314] hover:text-[#8b0000]"
            }`}
            itemProp="url"
            target={link.isExternal ? "_blank" : undefined}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
          >
            <span itemProp="name">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

