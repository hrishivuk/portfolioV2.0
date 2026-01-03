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
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center bg-neutral-900 text-lg px-6 md:px-8 py-4 rounded-[36px] w-[calc(100%-2rem)] shadow-lg backdrop-blur-sm"
        style={{ maxWidth }}
      >
        {/* Brand */}
        <Link href="/" className="font-bold text-white">
          hrishi.
        </Link>

      {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className={
            isActive("/")
                ? "text-white"
                : "text-neutral-400 hover:text-white transition-colors"
          }
        >
          home.
        </Link>
        <Link
          href="/works"
          className={
            isActive("/works")
                ? "text-white"
                : "text-neutral-400 hover:text-white transition-colors"
          }
        >
          works.
        </Link>
        <Link
          href="/aboutme"
          className={
            isActive("/aboutme")
                ? "text-white"
                : "text-neutral-400 hover:text-white transition-colors"
          }
        >
          about me.
        </Link>
        <Link
          href="/blog"
          className={
            isActive("/blog")
                ? "text-white"
                : "text-neutral-400 hover:text-white transition-colors"
          }
        >
          blog.
        </Link>
          {/* Theme Switcher */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowThemeSwitcher(!showThemeSwitcher)}
              className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
              aria-label="Toggle theme selector"
              aria-expanded={showThemeSwitcher}
              aria-haspopup="true"
            >
              <div
                className="w-4 h-4 rounded-full border-2 border-current"
                style={{
                  backgroundColor:
                    themes?.[currentTheme]?.bgPrimary || "#0a0a0a",
                }}
              ></div>
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
                    style={{ filter: "invert(1)" }}
                    initial={{ opacity: 0.9 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.p
                    className="text-xs text-neutral-300 mt-2 mr-10 whitespace-nowrap px-2 py-1 rounded"
                    style={{ fontFamily: "var(--font-dynapuff)" }}
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
              <div className="absolute top-full right-0 mt-2 w-48 bg-neutral-800 rounded-xl shadow-lg border border-neutral-700 overflow-hidden">
                {/* Choose Theme Text */}
                <div className="px-4 py-2 bg-neutral-700 border-b border-neutral-600">
                  <p className="text-xs text-neutral-300 text-center">
                    Choose your theme here
                  </p>
                </div>
                {Object.entries(themes).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setCurrentTheme(key);
                      setShowThemeSwitcher(false);
                    }}
                    className={`w-full px-4 py-3 flex items-center space-x-3 text-left hover:bg-neutral-700 transition-colors ${
                      currentTheme === key ? "bg-neutral-700" : ""
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-full border-2 border-neutral-500"
                      style={{ backgroundColor: theme.bgPrimary }}
                    ></div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">
                        {theme.name}
                      </span>
                      <div className="flex space-x-1">
                        <div
                          className="w-3 h-2 rounded-sm"
                          style={{ backgroundColor: theme.bgPrimary }}
                        ></div>
                        <div
                          className="w-3 h-2 rounded-sm"
                          style={{ backgroundColor: theme.textPrimary }}
                        ></div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
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
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center bg-neutral-900 text-lg px-6 py-4 rounded-[36px] w-[calc(100%-2rem)] shadow-lg backdrop-blur-sm"
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
              <div className="flex-1 flex flex-col justify-center px-8 pt-20">
                <nav className="space-y-6">
        <motion.div
                    initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        >
            <Link
              href="/"
                      onClick={() => setShowMobileMenu(false)}
                      className="group flex items-center space-x-6 py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                    >
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        01
                      </span>
                      <span
                        className="text-3xl font-bold transition-colors duration-300"
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
                      className="group flex items-center space-x-6 py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                    >
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        02
                      </span>
                      <span
                        className="text-3xl font-bold transition-colors duration-300"
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
                      className="group flex items-center space-x-6 py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                    >
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        03
                      </span>
                      <span
                        className="text-3xl font-bold transition-colors duration-300"
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
                      className="group flex items-center space-x-6 py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                    >
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        04
                      </span>
                      <span
                        className="text-3xl font-bold transition-colors duration-300"
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
                className="px-8 py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
              >
                <div
                  className="mb-6 p-4 rounded-xl"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-primary)",
                  }}
                >
                  <h3
                    className="text-lg font-semibold mb-4 text-center"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Choose Theme
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(themes).map(([key, theme]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setCurrentTheme(key);
                        }}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                          currentTheme === key
                            ? "border-current"
                            : "border-transparent hover:border-current"
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
