"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NavLinkItem } from "./types";

interface NavLinksProps {
  links: NavLinkItem[];
  className?: string;
  onLinkClick?: (link: NavLinkItem) => void;
}

/**
 * NavLinks - Client Component for Interactive Desktop Navigation Links.
 * Manages active hash highlighting and smooth client-side navigation.
 * Renders dynamically from props passed by the parent server Navbar.
 */
export default function NavLinks({
  links,
  className = "",
  onLinkClick,
}: NavLinksProps) {
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    // Sync active hash on mount and hash changes
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
        const isActive = activeHash === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => {
              setActiveHash(link.href);
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
