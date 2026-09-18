"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

/**
 * SmoothScrollProvider - Ultra-smooth momentum scrolling powered by Lenis.
 * Delivers a luxurious, silky-smooth 60fps/120fps scrolling feel across mobile and desktop,
 * while automatically coordinating with Next.js navigation and hash anchors.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis with tailored silky smooth physics
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Attach to global window for external access if needed
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // Handle route change / anchor hash jumps smoothly
  useEffect(() => {
    if (lenisRef.current) {
      if (typeof window !== "undefined" && window.location.hash) {
        const targetId = window.location.hash;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          lenisRef.current.scrollTo(targetElement as HTMLElement, {
            offset: -70,
            duration: 1.2,
          });
          return;
        }
      }
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
