"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Flame, Landmark, HelpCircle, Phone } from "lucide-react";
import { NavLinkItem, ContactInfo } from "./types";

interface MobileBottomNavProps {
  links?: NavLinkItem[];
  contact: ContactInfo;
  className?: string;
}

/**
 * MobileBottomNav - Client Component for Fixed Mobile Navigation Dock.
 * Aligns primary temple links & direct Call CTA at the bottom of mobile screens,
 * delivering an ultra-fast, native-app feel with gold & crimson sacred accents.
 */
export default function MobileBottomNav({
  links = [],
  contact,
  className = "",
}: MobileBottomNavProps) {
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "/");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHash(href);
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // 5 Balanced Sacred Tabs for Mobile Bottom Navigation
  const navTabs = [
    {
      label: "मुख्य",
      subLabel: "Home",
      href: "/",
      icon: Home,
      isAction: false,
    },
    {
      label: "सेवाएं",
      subLabel: "Sevayein",
      href: "#sevayein",
      icon: Flame,
      isAction: false,
    },
    {
      label: "कॉल करें",
      subLabel: "Call",
      href: `tel:${contact.phone}`,
      icon: Phone,
      isAction: true, // Center Elevated Primary CTA
    },
    {
      label: "मंदिर",
      subLabel: "Mandir",
      href: "#mandir",
      icon: Landmark,
      isAction: false,
    },
    {
      label: "FAQ",
      subLabel: "प्रश्नोत्तरी",
      href: "#faq",
      icon: HelpCircle,
      isAction: false,
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

      <div className="grid grid-cols-5 items-end justify-items-center max-w-md mx-auto">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeHash === tab.href;

          if (tab.isAction) {
            // Elevated Center Direct Call Button
            return (
              <a
                key={tab.label}
                href={tab.href}
                className="group relative -top-3 flex flex-col items-center justify-center focus:outline-none"
                aria-label={`Call Pandit Ji at ${contact.displayPhone}`}
              >
                {/* Center Action Circle */}
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#c31b1b] via-[#a30b15] to-[#750000] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(139,0,0,0.45)] border-2 border-[#f6dd9f] active:scale-90 group-hover:scale-105 transition-all duration-200">
                  {/* Subtle animated pulse ring */}
                  <span className="absolute -inset-1 rounded-full bg-[#c31b1b]/30 animate-ping opacity-60 pointer-events-none" />
                  <Icon className="w-5 h-5 fill-white flex-shrink-0" />
                </div>
                <span className="font-serif font-bold text-[0.64rem] text-[#8b0000] mt-1 leading-none tracking-tight">
                  {tab.label}
                </span>
              </a>
            );
          }

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
