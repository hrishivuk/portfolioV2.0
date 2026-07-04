"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";
import Navbar from "./components/navbar";
import PageContainer from "./components/PageContainer";
import { useTheme } from "./contexts/ThemeContext";

export default function Error({ error, reset }) {
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("Application error:", error);
    }
  }, [error]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--bg-primary)]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <div className="studio-grid absolute inset-0" />
        <div className="studio-cursor-glow absolute inset-[-10%]" />
      </div>

      <div className="relative z-10">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />

        <section className="min-h-screen pt-32 flex items-center">
          <PageContainer>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-5xl"
            >
              <p className="studio-kicker mb-5">Error</p>
              <h1 className="studio-display">Something slipped in the interface.</h1>
              <p className="studio-subheading mt-7 max-w-2xl">
                The page hit an unexpected state. Try reloading this view, or jump
                back to the work while the issue is checked.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={reset}
                  className="studio-button studio-button-primary"
                >
                  Try again
                  <FiRefreshCw aria-hidden />
                </button>
                <Link href="/works" className="studio-button studio-button-ghost">
                  View work
                </Link>
              </div>
            </motion.div>
          </PageContainer>
        </section>
      </div>
    </main>
  );
}
