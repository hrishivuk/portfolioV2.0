"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext();
const THEME_HINT_KEY = "portfolio-theme-hint-dismissed";

export function ThemeProvider({ children }) {
  const pathname = usePathname();
  const [currentTheme, setCurrentThemeState] = useState("ghostMouse");
  const [themeHintDismissed, setThemeHintDismissed] = useState(true);
  const [showThemeArrowOnScroll, setShowThemeArrowOnScroll] = useState(true);
  const isHomePage = pathname === "/";

  // Theme definitions
  const themes = {
    ghostMouse: {
      name: "Ghost Mouse",
      bgPrimary: "#0a0a0a",
      bgSecondary: "#1a1a1a",
      textPrimary: "#ffffff",
      textSecondary: "#e0e0e0",
      textMuted: "#a0a0a0",
    },
    forestGreen: {
      name: "Forest Green",
      bgPrimary: "#275f55",
      bgSecondary: "#1e4a42",
      textPrimary: "#e6ebdd",
      textSecondary: "#d4dcc8",
      textMuted: "#c2cdb3",
    },
    electricBlue: {
      name: "Electric Blue",
      bgPrimary: "#1e40af",
      bgSecondary: "#1d4ed8",
      textPrimary: "#fef3c7",
      textSecondary: "#fde68a",
      textMuted: "#fcd34d",
    },
    deepPurple: {
      name: "Deep Purple",
      bgPrimary: "#4c1d95",
      bgSecondary: "#5b21b6",
      textPrimary: "#e0e7ff",
      textSecondary: "#c7d2fe",
      textMuted: "#a5b4fc",
    },
  };

  useEffect(() => {
    if (!themes[currentTheme]) {
      setCurrentThemeState("ghostMouse");
    }
  }, [currentTheme]);

  // Update CSS variables when theme changes
  useEffect(() => {
    const theme = themes[currentTheme];
    if (!theme) return;
    document.documentElement.style.setProperty("--bg-primary", theme.bgPrimary);
    document.documentElement.style.setProperty(
      "--bg-secondary",
      theme.bgSecondary
    );
    document.documentElement.style.setProperty(
      "--text-primary",
      theme.textPrimary
    );
    document.documentElement.style.setProperty(
      "--text-secondary",
      theme.textSecondary
    );
    document.documentElement.style.setProperty("--text-muted", theme.textMuted);
  }, [currentTheme]);

  useEffect(() => {
    setThemeHintDismissed(
      window.localStorage.getItem(THEME_HINT_KEY) === "true"
    );
  }, []);

  const setCurrentTheme = useCallback((themeKey) => {
    setCurrentThemeState(themeKey);
    window.localStorage.setItem(THEME_HINT_KEY, "true");
    setThemeHintDismissed(true);
  }, []);

  // Theme hint only on home, near top of page, and only until dismissed
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
