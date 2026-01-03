"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import { useTheme } from "./contexts/ThemeContext";

export default function Error({ error, reset }) {
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();

  useEffect(() => {
    // Log error to error reporting service in production
    if (process.env.NODE_ENV === "production") {
      // You can integrate error reporting here (e.g., Sentry, LogRocket)
      // console.error("Application error:", error);
    } else {
      console.error("Application error:", error);
    }
  }, [error]);

  return (
    <main
      className="min-h-screen relative"
      style={{
        backgroundColor:
          currentTheme === "ghostMouse" ? "transparent" : "var(--bg-primary)",
        zIndex: 1,
      }}
    >
      <div className="relative z-10">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />

        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-6xl lg:text-7xl font-black mb-4"
                style={{ color: "var(--text-primary)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Something went wrong
              </motion.h1>

              <motion.p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                We encountered an unexpected error. Don&apos;t worry, this has been
                logged and we&apos;ll look into it.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <button
                  onClick={reset}
                  className="px-6 py-3 rounded-lg border font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                  }}
                >
                  Try Again
                </button>
                <Link
                  href="/"
                  className="px-6 py-3 rounded-lg border font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                  }}
                >
                  Go Home
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

