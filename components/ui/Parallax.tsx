"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useLenis } from "@/components/SmoothScroller";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({ children, className = "", speed = 0.18 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    let visible = false;
    const update = (scroll: number) => {
      if (!visible) return;
      node.style.transform = `translate3d(0, ${scroll * speed}px, 0)`;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) update(window.scrollY);
      },
      { rootMargin: "20% 0px" },
    );
    observer.observe(node);

    if (lenis) {
      const unsubscribe = lenis.on("scroll", (instance) => update(instance.scroll));
      return () => {
        observer.disconnect();
        unsubscribe();
      };
    }

    const onScroll = () => update(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [lenis, reducedMotion, speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
