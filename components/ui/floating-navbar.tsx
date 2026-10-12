"use client";

import { useState, type ReactNode } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

const SHOW_AFTER_SCROLL = 24;

export type FloatingNavItem = {
  name: string;
  link: string;
  icon?: ReactNode;
};

type FloatingNavProps = {
  navItems: FloatingNavItem[];
  activeLink?: string;
  actions?: ReactNode;
  className?: string;
};

export const FloatingNav = ({ navItems, activeLink, actions, className }: FloatingNavProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? current;
    setVisible(current > SHOW_AFTER_SCROLL && current > previous);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-4 z-[5000] mx-auto flex w-fit max-w-[calc(100vw-1rem)] items-center",
        className,
      )}
      aria-hidden={!visible}
      inert={!visible}
    >
      <nav
        aria-label="Primary"
        className="flex min-w-0 max-w-full items-center gap-1 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-1.5 py-1 shadow-lg shadow-black/10 backdrop-blur-xl sm:gap-2 sm:px-2"
      >
        <div className="floating-nav-links flex min-w-0 items-center gap-0.5 overflow-x-auto sm:gap-1">
          {navItems.map((navItem) => {
            const active = activeLink === navItem.link;

            return (
              <a
                key={navItem.link}
                href={navItem.link}
                aria-current={active ? "location" : undefined}
                aria-label={navItem.name}
                title={navItem.name}
                className={cn(
                  "relative flex shrink-0 items-center gap-1 rounded-full px-2 py-2 text-sm font-medium transition-colors sm:px-3",
                  active
                    ? "bg-[color-mix(in_srgb,var(--primary)_16%,transparent)] text-[var(--primary)]"
                    : "text-[var(--text-secondary)] hover:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] hover:text-[var(--text-primary)]",
                )}
              >
                {navItem.icon ? <span className="inline-flex sm:hidden">{navItem.icon}</span> : null}
                <span className={cn(navItem.icon && "hidden sm:inline")}>{navItem.name}</span>
              </a>
            );
          })}
        </div>

        {actions ? (
          <>
            <span aria-hidden className="mx-0.5 h-5 w-px shrink-0 bg-[var(--border-color)] sm:mx-1" />
            {actions}
          </>
        ) : null}
      </nav>
    </motion.div>
  );
};
