"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let instance: Lenis | null = null;
    let rafId = 0;

    const start = () => {
      if (instance || media.matches) return;
      instance = new Lenis({
        duration: 1.05,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.4,
      });

      const raf = (time: number) => {
        instance?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
      setLenis(instance);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      instance?.destroy();
      instance = null;
      setLenis(null);
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.length < 2) return;
      const destination = document.querySelector(href);
      if (!destination) return;
      event.preventDefault();
      if (instance) {
        instance.scrollTo(destination as HTMLElement, { offset: -72, duration: 1.05 });
        return;
      }
      destination.scrollIntoView({ behavior: media.matches ? "auto" : "smooth", block: "start" });
    };

    const onMotionChange = () => {
      stop();
      if (!media.matches) start();
    };

    if (!media.matches) start();
    media.addEventListener("change", onMotionChange);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      media.removeEventListener("change", onMotionChange);
      document.removeEventListener("click", handleAnchorClick);
      stop();
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export function scrollToHash(href: string, lenis?: Lenis | null) {
  const destination = document.querySelector(href);
  if (!destination) return;
  if (lenis) {
    lenis.scrollTo(destination as HTMLElement, { offset: -72, duration: 1.05 });
    return;
  }
  destination.scrollIntoView({ behavior: "smooth", block: "start" });
}
