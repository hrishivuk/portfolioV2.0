"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./contexts/ThemeContext";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturedWorks from "./components/FeaturedWorks";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);


  return (
    <main
      className="relative overflow-x-hidden"
      style={{
        backgroundColor:
          currentTheme === "ghostMouse" ? "transparent" : "var(--bg-primary)",
      }}
    >
      {/* Content */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />

        {/* Hero Section */}
        <HeroSection isLoaded={isLoaded} />

        {/* About Section */}
        <AboutSection isLoaded={isLoaded} />

        {/* Featured Works Section */}
        <FeaturedWorks isLoaded={isLoaded} />

        {/* Contact Section */}
        <ContactSection isLoaded={isLoaded} />
      </div>
    </main>
  );
}
