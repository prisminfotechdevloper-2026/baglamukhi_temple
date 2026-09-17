"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Flame, ShieldCheck, Images, PhoneCall } from "lucide-react";
import { NavLinkItem, ContactInfo } from "./types";
import { useLanguage } from "@/context/LanguageContext";

interface MobileBottomNavProps {
  links?: NavLinkItem[];
  contact?: ContactInfo;
  className?: string;
  onOpenSolutions?: () => void;
}

/**
 * MobileBottomNav - Client Component for Fixed Mobile Navigation Dock.
 * Displays multilingual labels (Home, Services, Solutions, Gallery, Contact),
 * delivering an ultra-fast, native-app feel with gold & crimson sacred accents.
 */
export default function MobileBottomNav({
  className = "",
  onOpenSolutions,
}: MobileBottomNavProps) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");
  const { t } = useLanguage();

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href === "/solutions" && onOpenSolutions) {
      e.preventDefault();
      onOpenSolutions();
      return;
    }
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

  // 5 Balanced Sacred Tabs for Mobile Bottom Navigation
  const navTabs = [
    {
      label: t.nav.home,
      href: "/",
      icon: Home,
    },
    {
      label: t.nav.services,
      href: "/#services",
      icon: Flame,
    },
    {
      label: t.nav.solutions,
      href: "/solutions",
      icon: ShieldCheck,
    },
    {
      label: t.nav.gallery,
      href: "/gallery",
      icon: Images,
    },
    {
      label: t.nav.contact,
      href: "/contact",
      icon: PhoneCall,
    },
  ];

  return (
    <nav
      className={`fixed bottom-0 inset-x-0 z-50 md:hidden w-full max-w-full overflow-hidden bg-[#fffdf8]/96 backdrop-blur-xl border-t border-[#ebd8b4] shadow-[0_-5px_24px_rgba(74,38,24,0.12)] pb-[max(env(safe-area-inset-bottom),0.4rem)] pt-1 px-1 sm:px-2 transition-all select-none ${className}`}
      aria-label="Mobile Bottom Navigation Bar"
      role="navigation"
    >
      {/* Top micro gold line accent */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d89b18] to-transparent opacity-80" />

      <div className="grid grid-cols-5 items-center justify-items-center max-w-lg mx-auto">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isExactRoute =
            tab.href === pathname ||
            (tab.href === "/" && (pathname === "/" || pathname === "/home") && !activeHash) ||
            (tab.href === "/solutions" && pathname.startsWith("/solutions")) ||
            (tab.href === "/contact" && (pathname === "/contact" || pathname === "/contactus")) ||
            (tab.href === "/gallery" && pathname === "/gallery");
          const isHashActive =
            (pathname === "/" || pathname === "/home") &&
            tab.href.startsWith("/#") &&
            activeHash === tab.href.replace("/", "");
          const isActive = isExactRoute || isHashActive;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              onClick={(e) => handleNavClick(e, tab.href)}
              className={`group flex flex-col items-center justify-center w-full py-0.5 text-center transition-all duration-150 active:scale-90 focus:outline-none ${
                isActive
                  ? "text-[#8b0000]"
                  : "text-[#6c483b] hover:text-[#8b0000]"
              }`}
            >
              {/* Tab Icon with subtle active background */}
              <div
                className={`w-7 h-7 xs:w-8 xs:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? "bg-[#faebd0] text-[#8b0000] scale-105 shadow-xs"
                    : "group-hover:bg-[#faebd0]/60"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 xs:w-4 xs:h-4 transition-transform ${
                    isActive ? "stroke-[2.5px]" : "stroke-[1.8px]"
                  }`}
                />
              </div>

              {/* Label */}
              <span
                className={`font-serif text-[0.60rem] xs:text-[0.66rem] mt-0.5 leading-none transition-colors truncate max-w-full px-0.5 ${
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
