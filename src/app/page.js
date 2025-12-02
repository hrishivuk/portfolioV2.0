"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./contexts/ThemeContext";
import Navbar from "./components/navbar";
import ScrollIndicator from "./components/ScrollIndicator";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturedWorks from "./components/FeaturedWorks";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Initialize loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll detection for scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      // Show scroll indicator only on the first section (hero)
      setShowScrollIndicator(scrollY < heroHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: currentTheme === "ghostMouse" ? "transparent" : "var(--bg-primary)",
        scrollSnapType: "y mandatory",
        overflowY: "scroll",
        height: "100vh",
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />

        {/* Scroll Indicator */}
        <ScrollIndicator
          showScrollIndicator={showScrollIndicator}
          isLoaded={isLoaded}
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
