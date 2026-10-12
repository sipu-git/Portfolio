"use client";

import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  FolderKanban,
  House,
  Mail,
  Moon,
  Sparkles,
  Sun,
  UserRound,
  Wrench,
} from "lucide-react";
import { FloatingNav, type FloatingNavItem } from "@/components/ui/floating-navbar";
import { useTheme } from "@/components/ui/ThemeProvider";
import type { ThemeMode } from "@/lib/theme";

const navItems: FloatingNavItem[] = [
  { name: "Home", link: "#home", icon: <House size={16} /> },
  { name: "About", link: "#about", icon: <UserRound size={16} /> },
  { name: "Skills", link: "#skills", icon: <Wrench size={16} /> },
  { name: "Experience", link: "#experience", icon: <BriefcaseBusiness size={16} /> },
  { name: "Projects", link: "#projects", icon: <FolderKanban size={16} /> },
  { name: "Services", link: "#services", icon: <Sparkles size={16} /> },
  { name: "Contact", link: "#contact", icon: <Mail size={16} /> },
];

const cycle: ThemeMode[] = ["light", "dark", "system"];

export function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const { mode, setMode, resolvedTheme } = useTheme();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.link))
      .filter((node): node is Element => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (active?.target.id) setActiveLink(`#${active.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const nextMode = () => {
    const index = cycle.indexOf(mode);
    setMode(cycle[(index + 1) % cycle.length]);
  };

  const ModeIcon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <FloatingNav
      navItems={navItems}
      activeLink={activeLink}
      actions={
        <button
          type="button"
          onClick={nextMode}
          aria-label={`Color mode: ${mode}. Click to change.`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[var(--text-secondary)] transition-colors hover:bg-[color-mix(in_srgb,var(--primary)_14%,transparent)] hover:text-[var(--text-primary)]"
        >
          <ModeIcon size={18} />
        </button>
      }
    />
  );
}
