"use client";
import { motion } from "framer-motion";

export default function ScrollIndicator({ showScrollIndicator, isLoaded }) {
  if (!showScrollIndicator) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[60]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.8, duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center space-y-3">
        {/* Animated arrow pointing down */}
        <motion.div
          className="relative"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="transform rotate-90"
            style={{ color: "var(--text-secondary)" }}
          >
            <motion.path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                pathLength: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>

        {/* Subtle text */}
        <motion.span
          className="text-xs font-medium tracking-wider uppercase"
          style={{ color: "var(--text-muted)" }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Explore
        </motion.span>
      </div>
    </motion.div>
  );
}
