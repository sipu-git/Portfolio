"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    document.body.classList.add("has-custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let rafId = 0;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const hoverable = Boolean(
        target?.closest("a, button, input, textarea, select, [role='button'], [data-cursor='hover']"),
      );
      document.body.classList.toggle("cursor-hover", hoverable);
    };

    const lerp = () => {
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      rafId = requestAnimationFrame(lerp);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    rafId = requestAnimationFrame(lerp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("cursor-hover", "has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden lg:block" aria-hidden="true" />
      <div ref={followerRef} className="cursor-follower hidden lg:block" aria-hidden="true" />
    </>
  );
}
