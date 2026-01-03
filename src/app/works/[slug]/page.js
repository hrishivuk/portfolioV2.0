"use client";

import { useMemo, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Navbar from "../../components/navbar";
import { useTheme } from "../../contexts/ThemeContext";
import { useLayout } from "../../contexts/LayoutContext";
import { projects } from "../../../data/projects";
import ScrollIndicator from "../../components/ScrollIndicator";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();
  const { maxWidth } = useLayout();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showDeepDive, setShowDeepDive] = useState(false);

  const project = useMemo(
    () => projects.find((p) => p.id === params.slug),
    [params.slug]
  );

  const isGhostTheme = currentTheme === "ghostMouse";

  const screenshots = project?.screenshots || [];
  const overviewScreens = screenshots.filter(
    (shot) => shot.placement === "overview"
  );
  const featureScreens = screenshots.filter(
    (shot) => shot.placement === "features"
  );
  const processScreens = screenshots.filter(
    (shot) => shot.placement === "process"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Show scroll indicator only near the top hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setShowScrollIndicator(scrollY < heroHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <main
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundColor:
            currentTheme === "ghostMouse"
              ? "transparent"
              : "var(--bg-primary)",
        }}
      >
        <div className="text-center px-4">
          <p
            className="text-xl mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Project not found.
          </p>
          <button
            onClick={() => router.push("/works")}
            className="px-4 py-2 rounded-lg border text-sm font-medium"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-primary)",
              color: "var(--text-primary)",
            }}
          >
            Back to Works
          </button>
        </div>
      </main>
    );
  }

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

        <ScrollIndicator
          showScrollIndicator={showScrollIndicator}
          isLoaded={isLoaded}
        />

        {/* Hero Section - Above the fold, minimal */}
        <section
          className="min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
          style={{
            backgroundColor: isGhostTheme
              ? "rgba(10, 10, 10, 0.3)"
              : "transparent",
          }}
        >
          <div className="mx-auto w-full" style={{ maxWidth }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
            >
              {/* Left: Title & Meta */}
              <div className="flex-1">
                <button
                  onClick={() => router.push("/works")}
                  className="mb-6 inline-flex items-center text-xs font-medium uppercase tracking-[0.18em] rounded-full px-4 py-2 border"
                  style={{
                    borderColor: "var(--border-primary)",
                    color: "var(--text-secondary)",
                    backgroundColor: isGhostTheme
                      ? "rgba(0,0,0,0.4)"
                      : "var(--bg-secondary)",
                  }}
                >
                  ← Back to works
                </button>

                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full border"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      borderColor: "var(--border-primary)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {project.category}
                  </span>
                  {project.year && (
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full border"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        borderColor: "var(--border-primary)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {project.year}
                    </span>
                  )}
                </div>

                {project.role && (
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.role}
                  </p>
                )}

                <p
                  className="text-base sm:text-lg leading-relaxed max-w-2xl"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.summary}
                </p>
              </div>

              {/* Right: Hero Image / Preview */}
              <div className="w-full lg:w-[420px] xl:w-[480px] flex-shrink-0">
                <div
                  className="rounded-3xl border overflow-hidden aspect-video flex items-center justify-center"
                  style={{
                    backgroundColor: isGhostTheme
                      ? "rgba(0,0,0,0.4)"
                      : "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                  }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span
                      className="text-4xl"
                      style={{ color: "var(--text-muted)" }}
                    >
                      🚀
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section
          className="pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
          style={{
            backgroundColor: isGhostTheme
              ? "rgba(10, 10, 10, 0.3)"
              : "transparent",
          }}
        >
          <div className="mx-auto" style={{ maxWidth }}>
            {/* TL;DR Section - What I did & why it mattered */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                What I did & why it mattered
              </h2>
              <ul className="space-y-3">
                {project.highlights?.slice(0, 5).map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base md:text-lg"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--accent-primary)" }}
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Screens Section - Primary content */}
            {overviewScreens.length > 0 && (
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Onboarding
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--text-muted)" }}
                >
                  {overviewScreens[0]?.alt || "First-time user experience"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {overviewScreens.map((shot) => (
                    <div
                      key={shot.src}
                      className="rounded-3xl border overflow-hidden bg-[var(--bg-primary)] flex items-center justify-center mx-auto"
                      style={{
                        borderColor: "var(--border-primary)",
                        aspectRatio: "9 / 19",
                        maxWidth: 260,
                      }}
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        className="h-full w-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Feature-focused screens */}
            {featureScreens.length > 0 && (
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Core flows & features
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--text-muted)" }}
                >
                  {featureScreens[0]?.alt || "Key user flows and functionality"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featureScreens.map((shot) => (
                    <div
                      key={shot.src}
                      className="rounded-3xl border overflow-hidden bg-[var(--bg-primary)] flex items-center justify-center mx-auto"
                      style={{
                        borderColor: "var(--border-primary)",
                        aspectRatio: "9 / 19",
                        maxWidth: 260,
                      }}
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        className="h-full w-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Process / flows screens */}
            {processScreens.length > 0 && (
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Flows & process
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--text-muted)" }}
                >
                  {processScreens[0]?.alt || "Workflow and process screens"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {processScreens.map((shot) => (
                    <div
                      key={shot.src}
                      className="rounded-3xl border overflow-hidden bg-[var(--bg-primary)] flex items-center justify-center mx-auto"
                      style={{
                        borderColor: "var(--border-primary)",
                        aspectRatio: "9 / 19",
                        maxWidth: 260,
                      }}
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        className="h-full w-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tech Stack - Compressed */}
            {project.technologies && project.technologies.length > 0 && (
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Tech & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        borderColor: "var(--border-primary)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Optional Deep Dive Section */}
            <motion.div
              className="border-t pt-12"
              style={{ borderColor: "var(--border-primary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            >
              <button
                onClick={() => setShowDeepDive(!showDeepDive)}
                className="w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 hover:scale-[1.01]"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <span
                  className="text-lg font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Process & implementation details
                </span>
                {showDeepDive ? (
                  <FiChevronUp style={{ color: "var(--text-secondary)" }} />
                ) : (
                  <FiChevronDown style={{ color: "var(--text-secondary)" }} />
                )}
              </button>

              <AnimatePresence>
                {showDeepDive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 space-y-8">
                      {/* Overview */}
                      {project.description && (
                        <div>
                          <h4
                            className="text-lg font-bold mb-3"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Overview
                          </h4>
                          <p
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {project.description}
                          </p>
                        </div>
                      )}

                      {/* Responsibilities */}
                      {project.responsibilities &&
                        project.responsibilities.length > 0 && (
                          <div>
                            <h4
                              className="text-lg font-bold mb-3"
                              style={{ color: "var(--text-primary)" }}
                            >
                              What I worked on
                            </h4>
                            <ul className="space-y-2 text-sm md:text-base">
                              {project.responsibilities.map((item, idx) => (
                                <li
                                  key={idx}
                                  style={{ color: "var(--text-secondary)" }}
                                >
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}


