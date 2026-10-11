"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ScrollSceneProps {
  children: ReactNode;
  className?: string;
}

export function ScrollScene({ children, className = "" }: ScrollSceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    let rafId = 0;
    let active = false;

    const update = () => {
      if (!active) return;
      const rect = node.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const progress = Math.min(1, Math.max(-1, (view / 2 - center) / view));
      node.style.setProperty("--scroll-p", progress.toFixed(4));
      rafId = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) {
          cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(update);
        } else {
          cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0, rootMargin: "12% 0px" },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  return (
    <div ref={ref} className={`scroll-scene ${className}`}>
      {children}
    </div>
  );
}
