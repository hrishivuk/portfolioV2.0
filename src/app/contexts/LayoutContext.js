"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [maxWidth, setMaxWidth] = useState("1400px");

  // Calculate dynamic max width based on viewport
  useEffect(() => {
    // Guard against SSR - only run on client
    if (typeof window === "undefined") return;

    const updateMaxWidth = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth >= 1920) {
        setMaxWidth("1600px"); // Extra large screens
      } else if (viewportWidth >= 1536) {
        setMaxWidth("1400px"); // 2xl screens
      } else if (viewportWidth >= 1280) {
        setMaxWidth("1200px"); // xl screens
      } else if (viewportWidth >= 1024) {
        setMaxWidth("1000px"); // lg screens
      } else if (viewportWidth >= 768) {
        setMaxWidth("800px"); // md screens
      } else {
        setMaxWidth("100%"); // Small screens
      }
    };

    updateMaxWidth();
    window.addEventListener("resize", updateMaxWidth);
    return () => window.removeEventListener("resize", updateMaxWidth);
  }, []);

  const value = {
    maxWidth,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}
