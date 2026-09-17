"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Flame, Landmark, Images } from "lucide-react";
import { NavLinkItem, ContactInfo } from "./types";

interface MobileBottomNavProps {
  links?: NavLinkItem[];
  contact?: ContactInfo;
  className?: string;
}

/**
 * MobileBottomNav - Client Component for Fixed Mobile Navigation Dock.
 * Aligns primary temple links at the bottom of mobile screens,
 * delivering an ultra-fast, native-app feel with gold & crimson sacred accents.
 */
export default function MobileBottomNav({
  className = "",
}: MobileBottomNavProps) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      setActiveHash(href.replace("/", ""));
      const target = document.querySelector(href.replace("/", ""));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setActiveHash("");
    }
  };

  // 4 Balanced Sacred Tabs for Mobile Bottom Navigation
  const navTabs = [
    {
      label: "Home",
      subLabel: "Home",
      href: "/",
      icon: Home,
    },
    {
      label: "Gallery",
      subLabel: "Gallery",
      href: "/gallery",
      icon: Images,
    },
    {
      label: "Services",
      subLabel: "Services",
      href: "/#services",
      icon: Flame,
    },
    {
      label: "Mandir",
      subLabel: "Mandir",
      href: "/#mandir",
      icon: Landmark,
    },
  ];

  return (
    <nav
      className={`fixed bottom-0 inset-x-0 z-50 md:hidden w-full max-w-full overflow-hidden bg-[#fffdf8]/96 backdrop-blur-xl border-t border-[#ebd8b4] shadow-[0_-5px_24px_rgba(74,38,24,0.12)] pb-[max(env(safe-area-inset-bottom),0.4rem)] pt-1.5 px-2 transition-all select-none ${className}`}
      aria-label="Mobile Bottom Navigation Bar"
      role="navigation"
    >
      {/* Top micro gold line accent */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d89b18] to-transparent opacity-80" />

      <div className="grid grid-cols-4 items-center justify-items-center max-w-md mx-auto">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isExactRoute =
            tab.href === pathname ||
            (tab.href === "/" && pathname === "/" && !activeHash);
          const isHashActive =
            pathname === "/" &&
            tab.href.startsWith("/#") &&
            activeHash === tab.href.replace("/", "");
          const isActive = isExactRoute || isHashActive;

          return (
            <Link
              key={tab.label}
              href={tab.href}
              onClick={() => handleNavClick(tab.href)}
              className={`group flex flex-col items-center justify-center w-full py-1 text-center transition-all duration-150 active:scale-90 focus:outline-none ${
                isActive
                  ? "text-[#8b0000]"
                  : "text-[#6c483b] hover:text-[#8b0000]"
              }`}
            >
              {/* Tab Icon with subtle active background */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? "bg-[#faebd0] text-[#8b0000] scale-110 shadow-sm"
                    : "group-hover:bg-[#faebd0]/60"
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-transform ${
                    isActive ? "stroke-[2.5px]" : "stroke-[1.8px]"
                  }`}
                />
              </div>

              {/* Devanagari & English Labels */}
              <span
                className={`font-serif text-[0.66rem] mt-0.5 leading-none transition-colors ${
                  isActive
                    ? "font-bold text-[#8b0000]"
                    : "font-medium text-[#5c3e32]"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
