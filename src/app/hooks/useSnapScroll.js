"use client";
import { useState, useEffect, useRef } from "react";

export function useSnapScroll() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const sectionsRef = useRef([]);

  const sections = ["hero", "about", "works", "contact"];

  // Register section elements
  const registerSection = (id, element) => {
    sectionsRef.current[id] = element;
  };

  // Navigate to specific section
  const goToSection = (sectionIndex) => {
    if (isScrolling || sectionIndex < 0 || sectionIndex >= sections.length)
      return;

    setIsScrolling(true);
    setCurrentSection(sectionIndex);

    const targetElement = sectionsRef.current[sections[sectionIndex]];
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Reset scrolling lock
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  // Handle wheel events
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(
        0,
        Math.min(sections.length - 1, currentSection + direction)
      );

      if (nextSection !== currentSection) {
        goToSection(nextSection);
      }
    };

    const handleKeyDown = (e) => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        const nextSection = Math.min(sections.length - 1, currentSection + 1);
        if (nextSection !== currentSection) {
          goToSection(nextSection);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        const nextSection = Math.max(0, currentSection - 1);
        if (nextSection !== currentSection) {
          goToSection(nextSection);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentSection, isScrolling]);

  return {
    currentSection,
    isScrolling,
    goToSection,
    registerSection,
    sections,
  };
}
