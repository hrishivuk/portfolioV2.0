"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext();
const THEME_HINT_KEY = "portfolio-theme-hint-dismissed";
const THEME_STORAGE_KEY = "portfolio-theme";

export const themes = {
  midnight: {
    name: "Midnight",
    bgPrimary: "#0a0a0b",
    bgSecondary: "#141416",
    textPrimary: "#fafafa",
    textSecondary: "#d4d4d8",
    textMuted: "#a1a1aa",
    borderPrimary: "#27272a",
    accentPrimary: "#22d3ee",
    mesh1: "rgba(34, 211, 238, 0.35)",
    mesh2: "rgba(99, 102, 241, 0.25)",
    mesh3: "rgba(168, 85, 247, 0.15)",
  },
  slate: {
    name: "Slate",
    bgPrimary: "#18181b",
    bgSecondary: "#27272a",
    textPrimary: "#e4e4e7",
    textSecondary: "#d4d4d8",
    textMuted: "#a1a1aa",
    borderPrimary: "#3f3f46",
    accentPrimary: "#a78bfa",
    mesh1: "rgba(167, 139, 250, 0.3)",
    mesh2: "rgba(96, 165, 250, 0.2)",
    mesh3: "rgba(129, 140, 248, 0.12)",
  },
  paper: {
    name: "Paper",
    bgPrimary: "#f8f7f4",
    bgSecondary: "#ffffff",
    textPrimary: "#18181b",
    textSecondary: "#3f3f46",
    textMuted: "#71717a",
    borderPrimary: "#e4e4e7",
    accentPrimary: "#2563eb",
    mesh1: "rgba(37, 99, 235, 0.12)",
    mesh2: "rgba(14, 165, 233, 0.1)",
    mesh3: "rgba(99, 102, 241, 0.08)",
  },
  forest: {
    name: "Forest",
    bgPrimary: "#1a2421",
    bgSecondary: "#243029",
    textPrimary: "#e8ede9",
    textSecondary: "#c5d0c7",
    textMuted: "#8fa392",
    borderPrimary: "#354a3f",
    accentPrimary: "#6ee7b7",
    mesh1: "rgba(110, 231, 183, 0.22)",
    mesh2: "rgba(52, 211, 153, 0.15)",
    mesh3: "rgba(34, 197, 94, 0.1)",
  },
};

const THEME_KEYS = Object.keys(themes);

function getInitialTheme() {
  if (typeof window === "undefined") return "midnight";

  const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === "ghostMouse") return "midnight";
  if (saved && THEME_KEYS.includes(saved)) return saved;

  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "paper";
  }
  return "midnight";
}

function applyThemeToDocument(themeKey) {
  const theme = themes[themeKey];
  if (!theme) return;

  const root = document.documentElement;
  root.style.setProperty("--bg-primary", theme.bgPrimary);
  root.style.setProperty("--bg-secondary", theme.bgSecondary);
  root.style.setProperty("--text-primary", theme.textPrimary);
  root.style.setProperty("--text-secondary", theme.textSecondary);
  root.style.setProperty("--text-muted", theme.textMuted);
  root.style.setProperty("--border-primary", theme.borderPrimary);
  root.style.setProperty("--accent-primary", theme.accentPrimary);
  root.style.setProperty("--mesh-1", theme.mesh1);
  root.style.setProperty("--mesh-2", theme.mesh2);
  root.style.setProperty("--mesh-3", theme.mesh3);
  root.dataset.theme = themeKey;
}

export function ThemeProvider({ children }) {
  const pathname = usePathname();
  const [currentTheme, setCurrentThemeState] = useState("midnight");
  const [isHydrated, setIsHydrated] = useState(false);
  const [themeHintDismissed, setThemeHintDismissed] = useState(true);
  const [showThemeArrowOnScroll, setShowThemeArrowOnScroll] = useState(true);
  const isHomePage = pathname === "/";

  useEffect(() => {
    const initial = getInitialTheme();
    setCurrentThemeState(initial);
    applyThemeToDocument(initial);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    applyThemeToDocument(currentTheme);
  }, [currentTheme, isHydrated]);

  useEffect(() => {
    if (!THEME_KEYS.includes(currentTheme)) {
      setCurrentThemeState("midnight");
    }
  }, [currentTheme]);

  useEffect(() => {
    setThemeHintDismissed(
      window.localStorage.getItem(THEME_HINT_KEY) === "true"
    );
  }, []);

  const setCurrentTheme = useCallback((themeKey) => {
    if (!THEME_KEYS.includes(themeKey)) return;
    setCurrentThemeState(themeKey);
    window.localStorage.setItem(THEME_STORAGE_KEY, themeKey);
    window.localStorage.setItem(THEME_HINT_KEY, "true");
    setThemeHintDismissed(true);
  }, []);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setShowThemeArrowOnScroll(window.scrollY < window.innerHeight * 0.15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const showThemeArrow =
    isHomePage && !themeHintDismissed && showThemeArrowOnScroll;

  const value = {
    currentTheme,
    setCurrentTheme,
    themes,
    showThemeArrow,
    isHydrated,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
