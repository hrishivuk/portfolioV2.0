"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLayout } from "../contexts/LayoutContext";
import { useTheme } from "../contexts/ThemeContext";
import {
  AnimatedBackground,
  GradientBackground,
  GhostMouseBackground,
} from "./backgrounds";

export default function HeroSection({ isLoaded }) {
  const { maxWidth } = useLayout();
  const { currentTheme } = useTheme();

  // Background is now handled globally, but we can still have other backgrounds
  const selectedBackground = null; // No local background needed
  const roles = [
    "UI/UX Designer",
    "Web Developer",
    "Android Developer",
    "Creative Thinker",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div
      className="h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Background Animation */}
      {selectedBackground === "gradient" && <GradientBackground />}
      {selectedBackground === "animated" && <AnimatedBackground />}
      {selectedBackground === "ghostMouse" && (
        <GhostMouseBackground intensity="full" />
      )}
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32 relative z-10">
        <div className="w-full mx-auto" style={{ maxWidth }}>
          {/* New Layout: Left content + Right boxes */}
          <motion.div
            className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 h-full mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Left Side - Name and Roles */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-6 lg:mb-8">
                <h1 className="leading-none text-left">
                  <motion.span
                    className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal tracking-wide mb-1 sm:mb-2"
                    style={{ color: "var(--text-secondary)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  >
                    Hi! I'm
                  </motion.span>
                  <motion.span
                    className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-black leading-[0.85] tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  >
                    HRISHI
                  </motion.span>
                </h1>
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight tracking-wide text-left mt-2 sm:mt-4"
                  style={{ color: "var(--text-secondary)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                >
                  <span
                    className={`role-text ${isAnimating ? "exiting" : ""}`}
                    key={currentRoleIndex}
                  >
                    {roles[currentRoleIndex]}
                  </span>
                </motion.h2>
              </div>

              {/* Social Media Bar */}
              <motion.div
                className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-start sm:justify-center lg:justify-start space-x-3 sm:space-x-4 md:space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              >
                <a
                  href="https://linkedin.com/in/hrishikesh-varma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-200 group"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/hrishikesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-200 group"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/hrishikesh-varma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-200 group"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="mailto:hrishikesh@example.com"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-200 group"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Right Side - Cards Stack */}
            <motion.div
              className="w-full sm:w-80 lg:w-96 flex flex-col gap-4 sm:gap-6 lg:gap-8 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
            >
              {/* Location Card (Top) */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Location
                  </h3>
                </div>
                <p
                  className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl leading-relaxed font-normal text-left"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Based in Dublin. Currently pursuing MSc in Creative Digital
                  Media and UX in TUD.
                </p>
              </motion.div>

              {/* Experience Card (Bottom) */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Experience
                  </h3>
                </div>
                <p
                  className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl leading-relaxed font-normal text-left"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Over 3 years of experience in frontend development,
                  specializing in React.js, modern web technologies, and
                  creating responsive user interfaces.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
