"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { NavLinkItem, ContactInfo } from "./types";

interface MobileMenuProps {
  links: NavLinkItem[];
  contact: ContactInfo;
}

/**
 * MobileMenu - Client Component for Mobile Hamburger Toggle & Slide-out Drawer.
 * Renders dynamically from props passed by parent Navbar.
 */
export default function MobileMenu({ links, contact }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="flex items-center gap-2.5 md:hidden">
      {/* Quick Mobile Call Button */}
      <a
        href={`tel:${contact.phone}`}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white shadow-md active:scale-95 transition-transform"
        aria-label={`Call Pandit Ji at ${contact.displayPhone}`}
      >
        <Phone className="w-4 h-4 fill-white" />
      </a>

      {/* Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-[#4a2618] hover:text-[#8b0000] hover:bg-amber-100/60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          <div
            className="mobile-nav-backdrop"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            className="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            {/* Drawer Top Header */}
            <div className="flex items-center justify-between pb-4  border-b border-amber-200">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-amber-500 shadow-sm relative">
                  <Image
                    src="/logo.png"
                    alt="Maa Bagalamukhi Logo"
                    fill
                    className="temple-logo-crop-img"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#4a0c16] text-xs leading-tight uppercase">
                    Maa Bagalamukhi
                  </h4>
                  <p className="text-[11px] text-red-700 font-serif font-semibold">
                    Pt. Shubham Sharma
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-stone-600 hover:text-red-700 rounded-full hover:bg-amber-100/60 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-1 py-6">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-[#4a2618] hover:text-[#8b0000] hover:bg-amber-100/60 font-serif text-lg font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Contact & Call CTA */}
            <div className="mt-auto pt-6 border-t border-amber-200">
              {contact.label && (
                <p className="text-xs text-[#795548] mb-3 text-center font-medium">
                  {contact.label}
                </p>
              )}
              <a
                href={`tel:${contact.phone}`}
                className="temple-call-btn w-full py-3.5 flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>{contact.displayPhone}</span>
              </a>
              {contact.subtitle && (
                <p className="text-[11px] text-stone-500 text-center mt-3 font-serif">
                  {contact.subtitle}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
