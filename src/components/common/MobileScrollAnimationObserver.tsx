"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * MobileScrollAnimationObserver
 * - Ultra-lightweight, 60fps/120fps GPU-accelerated scroll reveal for mobile devices (< 768px).
 * - Elements visible on initial screen load are active immediately without any blank/wait delay.
 * - Below-the-fold cards trigger smoothly with pre-emptive rootMargin so scrolling is never stuck or laggy.
 */
export default function MobileScrollAnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    // Only apply on mobile/tablet viewports
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    // Run within requestAnimationFrame for optimal frame rendering
    let observer: IntersectionObserver | null = null;

    const frameId = requestAnimationFrame(() => {
      const cardSelectors = [
        ".reveal-card-mobile",
        "article",
        "section:not(#mandir):not([aria-label*='Hero']):not([aria-label*='hero']) .grid > div",
        "section:not(#mandir):not([aria-label*='Hero']):not([aria-label*='hero']) .grid > a",
        "section:not(#mandir):not([aria-label*='Hero']):not([aria-label*='hero']) .grid > article",
        "[class*='rounded-2xl'][class*='border-l-']",
        "[class*='rounded-3xl'][class*='border-l-']",
      ];

      const potentialCards = document.querySelectorAll<HTMLElement>(
        cardSelectors.join(",")
      );

      if (!potentialCards.length) return;

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              obs.unobserve(entry.target); // Unobserve immediately to free memory
            }
          });
        },
        {
          // Pre-trigger slightly before entering view for zero-stutter feel
          threshold: 0.02,
          rootMargin: "40px 0px 0px 0px",
        }
      );

      potentialCards.forEach((card) => {
        // Skip hero sections or navigation docks
        if (
          card.closest("nav") ||
          card.closest("header") ||
          card.closest("#mandir") ||
          card.closest("[aria-label*='Hero']") ||
          card.closest("[aria-label*='hero']")
        ) {
          return;
        }

        const rect = card.getBoundingClientRect();

        // If card is already visible on the phone screen
        if (rect.top < viewportHeight) {
          card.classList.add("is-revealed");
        } else {
          // Below the fold: attach smooth GPU reveal
          card.classList.add("reveal-card-mobile");
          observer?.observe(card);
        }
      });
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
