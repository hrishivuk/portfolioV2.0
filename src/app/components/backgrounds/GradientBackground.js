"use client";
import { motion } from "framer-motion";

/**
 * GradientBackground Component
 *
 * A smooth animated gradient background that cycles through multiple colors.
 * Based on the provided CSS animation with improved performance and customization.
 *
 * Features:
 * - Smooth gradient color transitions
 * - Customizable colors via CSS variables
 * - Optimized for performance
 * - Responsive design
 */
export default function GradientBackground() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        background: `linear-gradient(-45deg, 
          var(--gradient-color-1, #ee7752), 
          var(--gradient-color-2, #e73c7e), 
          var(--gradient-color-3, #23a6d5), 
          var(--gradient-color-4, #23d5ab)
        )`,
        backgroundSize: "400% 400%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
