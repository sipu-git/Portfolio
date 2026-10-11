"use client";

import { Parallax } from "@/components/ui/Parallax";
import { ScrollScene } from "@/components/ui/ScrollScene";

export function HeroBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <ScrollScene className="absolute inset-0">
        <Parallax speed={0.08} className="absolute inset-0">
          <div className="hero-orb hero-orb-a scroll-layer" />
          <div className="hero-orb hero-orb-b" />
          <div className="hero-orb hero-orb-c" />
        </Parallax>
        <div className="hero-grid" />
        <div className="hero-perspective">
          <div className="hero-ring" />
          <div className="hero-ring hero-ring-inner" />
          <div className="hero-shard hero-shard-one scroll-layer" />
          <div className="hero-shard hero-shard-two" />
        </div>
      </ScrollScene>
    </div>
  );
}
