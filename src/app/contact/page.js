"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import { useTheme } from "../contexts/ThemeContext";
import { useLayout } from "../contexts/LayoutContext";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();
  const { maxWidth } = useLayout();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="min-h-screen relative"
      style={{
        backgroundColor:
          currentTheme === "ghostMouse" ? "transparent" : "var(--bg-primary)",
        zIndex: 1,
      }}
    >
      <div className="relative z-10">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />

        <ContactSection isLoaded={isLoaded} />
      </div>
    </main>
  );
}
