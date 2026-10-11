"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor").then((mod) => mod.CustomCursor), {
  ssr: false,
});

const ThemeToggle = dynamic(() => import("@/components/ui/ThemeToggle").then((mod) => mod.ThemeToggle), {
  ssr: false,
});

export function ClientChrome() {
  return (
    <>
      <CustomCursor />
      <ThemeToggle />
    </>
  );
}
