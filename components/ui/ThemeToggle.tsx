"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Moon, Palette, Sun, X } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";
import { accents, type ThemeMode } from "@/lib/theme";

export function ThemeToggle() {
  const { mode, accent, resolvedTheme, setMode, setAccent } = useTheme();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const modes: { id: ThemeMode; label: string; icon: typeof Sun }[] = [
    { id: "light", label: "Light", icon: Sun },
    { id: "dark", label: "Dark", icon: Moon },
    { id: "system", label: "System", icon: resolvedTheme === "dark" ? Moon : Sun },
  ];

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusables = () =>
      panel
        ? Array.from(panel.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])"))
        : [];
    focusables()[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !panel) return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [open]);

  return (
    <div ref={panelRef} className="fixed bottom-5 right-5 z-50">
      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label="Theme customization"
          className="mb-3 w-[min(18.5rem,calc(100vw-2.5rem))] glass rounded-2xl border border-[var(--border-color)] p-4 shadow-xl"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-[var(--text-primary)]">Appearance</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label="Close theme panel"
            >
              <X size={16} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4" role="group" aria-label="Color mode">
            {modes.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                aria-pressed={mode === id}
                className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2.5 text-xs font-medium border transition-colors ${
                  mode === id
                    ? "border-transparent text-white bg-[linear-gradient(135deg,var(--primary),var(--accent))]"
                    : "glass border-[var(--border-color)] text-[var(--text-secondary)]"
                }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
          <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">Accent</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Accent color">
            {accents.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setAccent(item.id)}
                aria-pressed={accent === item.id}
                aria-label={item.label}
                className={`h-8 w-8 rounded-full border-2 transition-transform ${
                  accent === item.id ? "scale-110 border-[var(--text-primary)]" : "border-transparent"
                }`}
                style={{ background: `linear-gradient(135deg, ${item.primary}, ${item.secondary})` }}
              />
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Customize theme"
        className="ml-auto flex h-12 w-12 items-center justify-center rounded-full glass border border-[var(--border-color)] text-[var(--text-primary)] shadow-lg glow-primary"
      >
        <Palette size={18} />
      </button>
    </div>
  );
}
