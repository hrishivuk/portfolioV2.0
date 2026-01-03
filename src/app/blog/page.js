"use client";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import { useTheme } from "../contexts/ThemeContext";
import { useLayout } from "../contexts/LayoutContext";

export default function Blog() {
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();
  const { maxWidth } = useLayout();

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

        <section
          className="h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
          style={{
            backgroundColor:
              currentTheme === "ghostMouse"
                ? "rgba(10, 10, 10, 0.3)"
                : "transparent",
          }}
        >
          <div className="mx-auto" style={{ maxWidth }}>
            <motion.div
              className="text-center flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight mb-4"
                style={{ color: "var(--text-primary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              >
                Blog
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                No posts yet. I&apos;m currently focused on building projects and
                case studies. Writing will land here once I have stories worth
                sharing.
              </motion.p>

              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/10 inline-flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              >
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  ✍️
                </span>
                <div className="text-left">
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Empty state
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Check back soon for articles on frontend, UI, and UX.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
