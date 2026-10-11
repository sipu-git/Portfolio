"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className = "", maxTilt = 9 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
    node.style.willChange = "auto";
  };

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const node = ref.current;
    if (!node) return;
    node.style.willChange = "transform";
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * (maxTilt * 2);
    const rotateX = (0.5 - y) * (maxTilt * 2);
    node.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`;
  };

  return (
    <div className="tilt-scene">
      <div
        ref={ref}
        className={`tilt-card ${className}`}
        onMouseMove={onMove}
        onMouseLeave={reset}
        onBlur={reset}
      >
        {children}
      </div>
    </div>
  );
}
