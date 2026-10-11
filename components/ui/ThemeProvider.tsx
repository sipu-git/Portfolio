"use client";

import {createContext,useCallback,useContext, useEffect,useMemo,useState,type ReactNode,
} from "react";
import {DEFAULT_ACCENT,DEFAULT_THEME_MODE,THEME_ACCENT_KEY,THEME_MODE_KEY,isAccentId,isThemeMode,
  resolveTheme,
  type AccentId,
  type ResolvedTheme,
  type ThemeMode,
} from "@/lib/theme";

interface ThemeContextValue {
  mode: ThemeMode;
  accent: AccentId;
  resolvedTheme: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
  setAccent: (accent: AccentId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(mode: ThemeMode, accent: AccentId) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = resolveTheme(mode, prefersDark);
  const root = document.documentElement;
  root.setAttribute("data-theme", resolved);
  root.setAttribute("data-accent", accent);
  root.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(DEFAULT_THEME_MODE);
  const [accent, setAccentState] = useState<AccentId>(DEFAULT_ACCENT);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");

  useEffect(() => {
    const storedMode = localStorage.getItem(THEME_MODE_KEY);
    const storedAccent = localStorage.getItem(THEME_ACCENT_KEY);
    const nextMode = isThemeMode(storedMode) ? storedMode : DEFAULT_THEME_MODE;
    const nextAccent = isAccentId(storedAccent) ? storedAccent : DEFAULT_ACCENT;
    setModeState(nextMode);
    setAccentState(nextAccent);
    applyTheme(nextMode, nextAccent);
    setResolvedTheme(resolveTheme(nextMode, window.matchMedia("(prefers-color-scheme: dark)").matches));
  }, []);

  useEffect(() => {
    applyTheme(mode, accent);
    setResolvedTheme(resolveTheme(mode, window.matchMedia("(prefers-color-scheme: dark)").matches));
  }, [mode, accent]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (mode === "system") {
        applyTheme(mode, accent);
        setResolvedTheme(media.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [mode, accent]);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    localStorage.setItem(THEME_MODE_KEY, next);
  }, []);

  const setAccent = useCallback((next: AccentId) => {
    setAccentState(next);
    localStorage.setItem(THEME_ACCENT_KEY, next);
  }, []);

  const value = useMemo(
    () => ({ mode, accent, resolvedTheme, setMode, setAccent }),
    [mode, accent, resolvedTheme, setMode, setAccent],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
