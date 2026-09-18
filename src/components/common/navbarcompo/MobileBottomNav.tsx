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
      className={`fixed bottom-0 inset-x-0 z-50 md:hidden w-full max-w-full overflow-hidden bg-[#fffdf8]/98 backdrop-blur-xl border-t border-[#ebd8b4] shadow-[0_-6px_28px_rgba(74,38,24,0.15)] pb-[max(env(safe-area-inset-bottom),0.45rem)] pt-1.5 px-1 sm:px-2 transition-all select-none ${className}`}
      aria-label="Mobile Bottom Navigation Bar"
      role="navigation"
    >
      {/* Top micro gold line accent */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d89b18] to-transparent opacity-85" />

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
              className={`group flex flex-col items-center justify-center w-full py-1 text-center transition-all duration-150 active:scale-95 focus:outline-none ${
                isActive
                  ? "text-[#8b0000]"
                  : "text-[#5c3e32] hover:text-[#8b0000]"
              }`}
            >
              {/* Tab Icon with subtle active background */}
              <div
                className={`w-7.5 h-7.5 xs:w-8 xs:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? "bg-[#faebd0] text-[#8b0000] scale-105 shadow-xs border border-[#d89b18]/40"
                    : "group-hover:bg-[#faebd0]/60 text-[#6c483b]"
                }`}
              >
                <Icon
                  className={`w-4 h-4 xs:w-[18px] xs:h-[18px] transition-transform ${
                    isActive ? "stroke-[2.4px]" : "stroke-[1.9px]"
                  }`}
                />
              </div>

              {/* Readable Hindi / English Label */}
              <span
                className={`text-[0.72rem] xs:text-[0.76rem] sm:text-[0.82rem] mt-0.5 leading-tight tracking-tight transition-colors text-center px-0.5 ${
                  isActive
                    ? "font-bold text-[#8b0000] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
                    : "font-semibold text-[#4a2618]"
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
