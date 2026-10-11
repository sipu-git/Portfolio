export const THEME_MODE_KEY = "portfolio-color-mode";
export const THEME_ACCENT_KEY = "portfolio-accent";

export const themeModes = ["light", "dark", "system"] as const;
export type ThemeMode = (typeof themeModes)[number];
export type ResolvedTheme = "light" | "dark";

export const accents = [
  { id: "violet", label: "Violet", primary: "#8B5CF6", secondary: "#06B6D4" },
  { id: "cyan", label: "Cyan", primary: "#06B6D4", secondary: "#6366F1" },
  { id: "emerald", label: "Emerald", primary: "#10B981", secondary: "#06B6D4" },
  { id: "amber", label: "Amber", primary: "#F59E0B", secondary: "#F97316" },
  { id: "rose", label: "Rose", primary: "#F43F5E", secondary: "#EC4899" },
  { id: "blue", label: "Blue", primary: "#3B82F6", secondary: "#06B6D4" },
] as const;

export type AccentId = (typeof accents)[number]["id"];

export const DEFAULT_THEME_MODE: ThemeMode = "system";
export const DEFAULT_ACCENT: AccentId = "violet";

export function isThemeMode(value: string | null): value is ThemeMode {
  return themeModes.includes(value as ThemeMode);
}

export function isAccentId(value: string | null): value is AccentId {
  return accents.some((accent) => accent.id === value);
}

export function resolveTheme(mode: ThemeMode, prefersDark: boolean): ResolvedTheme {
  if (mode === "system") return prefersDark ? "dark" : "light";
  return mode;
}

export const themeInitScript = `(function(){
  try {
    var modeKey = "${THEME_MODE_KEY}";
    var accentKey = "${THEME_ACCENT_KEY}";
    var storedMode = localStorage.getItem(modeKey);
    var storedAccent = localStorage.getItem(accentKey);
    var mode = storedMode === "light" || storedMode === "dark" || storedMode === "system" ? storedMode : "system";
    var accents = ${JSON.stringify(accents.map((a) => a.id))};
    var accent = accents.indexOf(storedAccent) >= 0 ? storedAccent : "${DEFAULT_ACCENT}";
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var resolved = mode === "system" ? (prefersDark ? "dark" : "light") : mode;
    var root = document.documentElement;
    root.setAttribute("data-theme", resolved);
    root.setAttribute("data-accent", accent);
    root.style.colorScheme = resolved;
  } catch (e) {}
})();`;
