"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLayout } from "../contexts/LayoutContext";

export default function Navbar({
  currentTheme,
  setCurrentTheme,
  themes,
  showThemeArrow = true,
}) {
  const { maxWidth } = useLayout();
  const pathname = usePathname();
  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) => pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowThemeSwitcher(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center text-sm sm:text-base md:text-lg px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-2xl sm:rounded-[28px] md:rounded-[36px] w-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)] shadow-lg backdrop-blur-md border"
        style={{
          maxWidth,
          backgroundColor: "color-mix(in srgb, var(--bg-secondary) 88%, transparent)",
          borderColor: "var(--border-primary)",
          color: "var(--text-primary)",
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          className="font-bold text-sm sm:text-base md:text-lg"
          style={{ color: "var(--text-primary)" }}
        >
          hrishi.
        </Link>

      {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
        {[
          { href: "/", label: "home." },
          { href: "/works", label: "works." },
          { href: "/aboutme", label: "about me." },
          { href: "/blog", label: "blog." },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="transition-opacity hover:opacity-80"
            style={{
              color: isActive(href) ? "var(--text-primary)" : "var(--text-muted)",
              fontWeight: isActive(href) ? 600 : 400,
            }}
          >
            {label}
          </Link>
        ))}
          {/* Theme Switcher */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowThemeSwitcher(!showThemeSwitcher)}
              className="flex items-center space-x-2 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-1 rounded"
              style={{ color: "var(--text-muted)" }}
              aria-label="Toggle theme selector"
              aria-expanded={showThemeSwitcher}
              aria-haspopup="true"
            >
              <div
                className="w-4 h-4 rounded-full border overflow-hidden flex shrink-0"
                style={{ borderColor: "var(--border-primary)" }}
                aria-hidden
              >
                <span
                  className="flex-1 h-full"
                  style={{
                    backgroundColor:
                      themes?.[currentTheme]?.bgPrimary || "#0a0a0b",
                  }}
                />
                <span
                  className="w-1.5 h-full"
                  style={{
                    backgroundColor:
                      themes?.[currentTheme]?.accentPrimary || "#22d3ee",
                  }}
                />
              </div>
              <span className="text-sm">theme</span>
            </button>

            {/* Arrow indicator when dropdown is closed */}
            <AnimatePresence>
              {!showThemeSwitcher && showThemeArrow && (
                <motion.div
                  className="absolute -top-1 -right-48 mt-3 flex flex-col items-right z-50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.img
                    src="/arrow.png"
                    alt="Arrow pointing down"
                    className="w-16 h-16 opacity-90 scale-y-[-1] -rotate-90"
                    style={{
                      filter: currentTheme === "paper" ? "none" : "invert(1)",
                    }}
                    initial={{ opacity: 0.9 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.p
                    className="text-xs mt-2 mr-10 whitespace-nowrap px-2 py-1 rounded"
                    style={{
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-dynapuff)",
                    }}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    Choose your theme here
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Theme Dropdown */}
            {showThemeSwitcher && (
              <div
                className="absolute top-full right-0 mt-2 w-52 rounded-xl shadow-lg border overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <div
                  className="px-4 py-2 border-b"
                  style={{ borderColor: "var(--border-primary)" }}
                >
                  <p
                    className="text-xs text-center"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Choose a theme
                  </p>
                </div>
                {Object.entries(themes).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setCurrentTheme(key);
                      setShowThemeSwitcher(false);
                    }}
                    className="w-full px-4 py-3 flex items-center space-x-3 text-left transition-colors"
                    style={{
                      backgroundColor:
                        currentTheme === key
                          ? "color-mix(in srgb, var(--accent-primary) 12%, var(--bg-secondary))"
                          : "transparent",
                      color: "var(--text-primary)",
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full border overflow-hidden flex shrink-0"
                      style={{ borderColor: theme.borderPrimary }}
                    >
                      <span
                        className="flex-1 h-full"
                        style={{ backgroundColor: theme.bgPrimary }}
                      />
                      <span
                        className="w-2 h-full"
                        style={{ backgroundColor: theme.accentPrimary }}
                      />
                    </div>
                    <span className="text-sm font-medium">{theme.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 -mr-1 touch-manipulation"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
            <div
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                showMobileMenu ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                showMobileMenu ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                showMobileMenu ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            ></div>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowMobileMenu(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>

            {/* Menu Panel */}
            <motion.div
              className="relative h-full w-full flex flex-col"
              style={{ backgroundColor: "var(--bg-primary)" }}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {/* Top Navbar - Exact same as main navbar */}
              <div
                className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center bg-neutral-900 text-sm sm:text-base md:text-lg px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-2xl sm:rounded-[28px] md:rounded-[36px] w-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)] shadow-lg backdrop-blur-sm"
                style={{ maxWidth }}
              >
                {/* Brand */}
                <Link
                  href="/"
                  className="font-bold text-white"
                  onClick={() => setShowMobileMenu(false)}
                >
                  hrishi.
        </Link>

                {/* Close Button */}
                <button
                  onClick={() => setShowMobileMenu(false)}
                  className="text-white p-2"
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <div className="w-5 h-0.5 bg-white rotate-45 translate-y-0.5 transition-all duration-300"></div>
                    <div className="w-5 h-0.5 bg-white -rotate-45 -translate-y-0.5 transition-all duration-300"></div>
                  </div>
                </button>
      </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 pt-16 sm:pt-20">
                <nav className="space-y-3 sm:space-y-4 md:space-y-6">
        <motion.div
                    initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        >
            <Link
              href="/"
                      onClick={() => setShowMobileMenu(false)}
                      className="group flex items-center space-x-3 sm:space-x-4 md:space-x-6 py-3 sm:py-4 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 active:scale-95 touch-manipulation min-h-[44px]"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                    >
                      <span
                        className="text-lg sm:text-xl md:text-2xl font-bold"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        01
                      </span>
                      <span
                        className="text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300"
                        style={{ color: "var(--text-primary)" }}
                      >
                        HOME
                      </span>
            </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                  >
            <Link
              href="/works"
                      onClick={() => setShowMobileMenu(false)}
                      className="group flex items-center space-x-3 sm:space-x-4 md:space-x-6 py-3 sm:py-4 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 active:scale-95 touch-manipulation min-h-[44px]"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                    >
                      <span
                        className="text-lg sm:text-xl md:text-2xl font-bold"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        02
                      </span>
                      <span
                        className="text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300"
                        style={{ color: "var(--text-primary)" }}
                      >
                        WORKS
                      </span>
            </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                  >
            <Link
              href="/aboutme"
                      onClick={() => setShowMobileMenu(false)}
                      className="group flex items-center space-x-3 sm:space-x-4 md:space-x-6 py-3 sm:py-4 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 active:scale-95 touch-manipulation min-h-[44px]"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                    >
                      <span
                        className="text-lg sm:text-xl md:text-2xl font-bold"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        03
                      </span>
                      <span
                        className="text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300"
                        style={{ color: "var(--text-primary)" }}
                      >
                        ABOUT
                      </span>
            </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                  >
            <Link
              href="/blog"
                      onClick={() => setShowMobileMenu(false)}
                      className="group flex items-center space-x-3 sm:space-x-4 md:space-x-6 py-3 sm:py-4 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 active:scale-95 touch-manipulation min-h-[44px]"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                    >
                      <span
                        className="text-lg sm:text-xl md:text-2xl font-bold"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        04
                      </span>
                      <span
                        className="text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300"
                        style={{ color: "var(--text-primary)" }}
                      >
                        BLOG
                      </span>
            </Link>
                  </motion.div>
                </nav>
              </div>

              {/* Theme Switcher */}
              <motion.div
                className="px-4 sm:px-6 md:px-8 py-4 sm:py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
              >
                <div
                  className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-primary)",
                  }}
                >
                  <h3
                    className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Choose Theme
                  </h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {Object.entries(themes).map(([key, theme]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setCurrentTheme(key);
                        }}
                        className={`p-2 sm:p-3 rounded-lg border-2 transition-all duration-300 active:scale-95 touch-manipulation min-h-[44px] ${
                          currentTheme === key
                            ? "border-current"
                            : "border-transparent active:border-current"
                        }`}
                        style={{
                          borderColor:
                            currentTheme === key
                              ? theme.accentPrimary
                              : undefined,
                          backgroundColor:
                            currentTheme === key
                              ? theme.bgPrimary
                              : "var(--bg-primary)",
                        }}
                      >
                        <div className="flex items-center space-x-2">
                          <div
                            className="w-4 h-4 rounded-full border border-white/30"
                            style={{ backgroundColor: theme.bgPrimary }}
                          ></div>
                          <span
                            className="text-sm font-medium"
                            style={{
                              color:
                                currentTheme === key
                                  ? theme.textPrimary
                                  : "var(--text-primary)",
                            }}
                          >
                            {theme.name}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
          </div>
              </motion.div>
            </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
