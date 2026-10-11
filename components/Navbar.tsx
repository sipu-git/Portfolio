"use client";

import { useEffect, useState } from "react";
import { Code2, Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { scrollToHash, useLenis } from "@/components/SmoothScroller";
import { useTheme } from "@/components/ui/ThemeProvider";
import type { ThemeMode } from "@/lib/theme";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const cycle: ThemeMode[] = ["light", "dark", "system"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const { mode, setMode, resolvedTheme } = useTheme();
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((node): node is Element => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target.id) return;
        const match = navLinks.find((link) => link.href === `#${visible.target.id}`);
        if (match) setActive(match.label);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (href: string, label: string) => {
    setActive(label);
    setIsOpen(false);
    scrollToHash(href, lenis);
  };

  const nextMode = () => {
    const index = cycle.indexOf(mode);
    setMode(cycle[(index + 1) % cycle.length]);
  };

  const ModeIcon = mode === "system" ? Monitor : resolvedTheme === "dark" ? Sun : Moon;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-2"
            onClick={(event) => {
              event.preventDefault();
              goTo("#home", "Home");
            }}
          >
            <span className="w-8 h-8 bg-[linear-gradient(135deg,var(--primary),var(--accent))] rounded-lg flex items-center justify-center shadow-md">
              <Code2 size={16} className="text-white" />
            </span>
            <span className="font-bold text-lg gradient-text">{personalInfo.name.split(" ")[0]}</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    goTo(link.href, link.label);
                  }}
                  aria-current={active === link.label ? "page" : undefined}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active === link.label
                      ? "bg-[color-mix(in_srgb,var(--primary)_18%,transparent)] text-[var(--primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={nextMode}
              aria-label={`Color mode: ${mode}. Click to change.`}
              className="p-2.5 rounded-xl glass text-[var(--text-primary)]"
            >
              <ModeIcon size={18} />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="md:hidden p-2.5 rounded-xl glass text-[var(--text-primary)]"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-nav" className="md:hidden glass border-t border-[var(--border-color)]">
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    goTo(link.href, link.label);
                  }}
                  className="block w-full text-left px-4 py-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
