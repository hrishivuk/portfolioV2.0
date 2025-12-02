"use client";
import { useTheme } from "../contexts/ThemeContext";
import { usePathname } from "next/navigation";
import GhostMouseBackground from "./backgrounds/GhostMouseBackground";

/**
 * GlobalGhostMouseBackground Component
 *
 * A wrapper component that conditionally renders the Ghost Mouse background
 * across the entire application based on the current theme and page.
 *
 * Features:
 * - Only shows when Ghost Mouse theme is active
 * - Different intensity based on page (full for hero, subtle for others)
 * - Covers entire viewport
 * - Fixed positioning for global coverage
 */
export default function GlobalGhostMouseBackground() {
  const { currentTheme } = useTheme();
  const pathname = usePathname();

  // Only render when Ghost Mouse theme is active
  if (currentTheme !== "ghostMouse") {
    return null;
  }

  console.log("GlobalGhostMouseBackground: Rendering with theme:", currentTheme);

  // Determine intensity based on page
  const getIntensity = () => {
    // Full intensity for home page (hero section gets priority)
    if (pathname === "/") {
      return "full";
    }
    // Subtle intensity for other pages
    return "subtle";
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none" 
      style={{ 
        zIndex: 0,
        width: "100vw",
        height: "100vh"
      }}
    >
      <GhostMouseBackground intensity={getIntensity()} />
    </div>
  );
}
