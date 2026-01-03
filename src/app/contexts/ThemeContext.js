"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState("ghostMouse");
  const [showThemeArrow, setShowThemeArrow] = useState(true);

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

  // Reset theme if current theme doesn't exist (safety check)
  useEffect(() => {
    if (!themes[currentTheme]) {
      setCurrentTheme("ghostMouse");
    }
  }, []);

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

  // Handle scroll detection for theme arrow
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setShowThemeArrow(scrollY < heroHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
