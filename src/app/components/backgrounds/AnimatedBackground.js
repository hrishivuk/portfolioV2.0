"use client";
import { motion } from "framer-motion";

/**
 * AnimatedBackground Component
 *
 * Currently hidden but kept in project for future use.
 * To re-enable: Set showAnimatedBackground = true in HeroSection.js
 *
 * Features:
 * - Animated gradient waves
 * - Floating particles with organized streams
 * - Animated lines
 * - Gradient orbs
 * - Subtle noise overlay
 */
export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient waves */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))`,
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px opacity-20"
            style={{
              backgroundColor: "var(--accent-secondary)",
              top: `${20 + i * 15}%`,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating particles - Organized streams */}
      <div className="absolute inset-0">
        {/* Left stream */}
        <div className="absolute left-1/4 top-0 w-px h-full">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`left-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: "var(--text-primary)",
                left: "0%",
                opacity: 0.3,
              }}
              animate={{
                y: ["0vh", "100vh"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: i * 2.4,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Right stream */}
        <div className="absolute right-1/4 top-0 w-px h-full">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`right-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: "var(--text-primary)",
                left: "0%",
                opacity: 0.3,
              }}
              animate={{
                y: ["0vh", "100vh"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: i * 3 + 1,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Center stream */}
        <div className="absolute left-1/2 top-0 w-px h-full">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`center-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: "var(--text-primary)",
                left: "0%",
                opacity: 0.3,
              }}
              animate={{
                y: ["0vh", "100vh"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                delay: i * 4.5 + 0.5,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Diagonal streams */}
        <div className="absolute inset-0">
          {/* Top-left to bottom-right */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`diag1-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: "var(--accent-primary)",
                opacity: 0.2,
              }}
              animate={{
                x: ["-10vw", "110vw"],
                y: ["-10vh", "110vh"],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                delay: i * 8,
                ease: "linear",
              }}
            />
          ))}

          {/* Top-right to bottom-left */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`diag2-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: "var(--accent-secondary)",
                opacity: 0.2,
              }}
              animate={{
                x: ["110vw", "-10vw"],
                y: ["-10vh", "110vh"],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                delay: i * 10 + 5,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-5"
          style={{
            background: `radial-gradient(circle, var(--accent-primary), transparent)`,
            left: "10%",
            top: "20%",
          }}
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-5"
          style={{
            background: `radial-gradient(circle, var(--accent-secondary), transparent)`,
            right: "15%",
            bottom: "30%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
