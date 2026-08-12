"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!cursorRef.current || !followerRef.current) return;

    const setCursorX = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3.out" });
    const setCursorY = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3.out" });
    const setFollowerX = gsap.quickTo(followerRef.current, "x", { duration: 0.5, ease: "power3.out" });
    const setFollowerY = gsap.quickTo(followerRef.current, "y", { duration: 0.5, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      setCursorX(e.clientX - 10);
      setCursorY(e.clientY - 10);
      setFollowerX(e.clientX - 20);
      setFollowerY(e.clientY - 20);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden lg:block" />
      <div ref={followerRef} className="cursor-follower hidden lg:block" />
    </>
  );
}