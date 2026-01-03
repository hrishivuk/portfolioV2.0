"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLayout } from "../contexts/LayoutContext";
import { useTheme } from "../contexts/ThemeContext";
import Navbar from "../components/navbar";
import ScrollIndicator from "../components/ScrollIndicator";
import Link from "next/link";
import { projects } from "../../data/projects";

export default function WorksPage() {
  const { maxWidth } = useLayout();
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const isGhostTheme = currentTheme === "ghostMouse";

  // Initialize loading state
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

  // Define category order
  const categoryOrder = [
    "Frontend Development",
    "Android Development",
    "UX Design",
    "Creative Digital Media",
  ];

  // Get unique categories from projects and order them
  const uniqueCategories = [
    ...new Set(projects.map((project) => project.category)),
  ];
  const orderedCategories = categoryOrder.filter((cat) =>
    uniqueCategories.includes(cat)
  );
  const categories = ["All", ...orderedCategories];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main
      className="h-screen relative overflow-hidden snap-y snap-mandatory overflow-y-scroll"
      style={{
        backgroundColor:
          currentTheme === "ghostMouse" ? "transparent" : "var(--bg-primary)",
        zIndex: 1,
      }}
    >
      {/* Content */}
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

        {/* Hero Section */}
        <section
          className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative snap-start"
          style={{
            backgroundColor:
              currentTheme === "ghostMouse"
                ? "rgba(10, 10, 10, 0.3)"
                : "transparent",
          }}
        >
          <div className="mx-auto relative z-10" style={{ maxWidth }}>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight mb-8"
                style={{ color: "var(--text-primary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              >
                MY WORKS
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                A collection of projects showcasing my work in frontend
                development, mobile apps, UX design, and creative digital media.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          className="min-h-screen flex flex-col justify-center py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative snap-start"
          style={{
            backgroundColor:
              currentTheme === "ghostMouse"
                ? "rgba(10, 10, 10, 0.3)"
                : "transparent",
          }}
        >
          <div className="mx-auto relative z-10" style={{ maxWidth }}>
            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    selectedCategory === category
                      ? "scale-105"
                      : "hover:scale-105"
                  }`}
                  style={{
                    backgroundColor: isGhostTheme
                      ? selectedCategory === category
                        ? "rgba(255,255,255,0.12)"
                        : "rgba(255,255,255,0.03)"
                      : selectedCategory === category
                      ? "var(--bg-secondary)"
                      : "var(--bg-primary)",
                    borderColor: isGhostTheme
                      ? "rgba(255,255,255,0.16)"
                      : "var(--border-primary)",
                    color: "var(--text-primary)",
                    "--tw-ring-color": "rgba(255, 255, 255, 0.5)",
                  }}
                  aria-label={`Filter projects by ${category}`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{
                      delay: 0.8 + index * 0.1,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    <Link href={`/works/${project.id}`}>
                      <div
                        className="p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col backdrop-blur-sm"
                        style={{
                          backgroundColor: isGhostTheme
                            ? "rgba(255,255,255,0.04)"
                            : "var(--bg-secondary)",
                          borderColor: isGhostTheme
                            ? "rgba(255,255,255,0.16)"
                            : "var(--border-primary)",
                        }}
                      >
                        {/* Project Image */}
                        <div
                          className="w-full h-56 rounded-xl mb-4 flex items-center justify-center overflow-hidden"
                          style={{
                            backgroundColor: isGhostTheme
                              ? "rgba(0,0,0,0.35)"
                              : "var(--bg-primary)",
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

                        {/* Project Info - Minimal */}
                        <div className="flex-1 flex flex-col">
                          <div className="mb-2">
                            <span
                              className="text-xs font-medium px-3 py-1 rounded-full border inline-block"
                              style={{
                                backgroundColor: "var(--bg-primary)",
                                borderColor: "var(--border-primary)",
                                color: "var(--text-secondary)",
                              }}
                            >
                              {project.category}
                            </span>
                          </div>

                          <h3
                            className="text-lg lg:text-xl font-bold mb-2"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {project.title}
                          </h3>

                          {/* One-liner (summary) */}
                          <p
                            className="text-sm leading-relaxed mb-3 flex-1"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {project.summary}
                          </p>

                          {/* Role */}
                          {project.role && (
                            <p
                              className="text-xs mt-auto pt-2"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {project.role}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              >
                <p
                  className="text-xl mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  No projects found in this category.
                </p>
                <p className="text-base" style={{ color: "var(--text-muted)" }}>
                  Projects will appear here once you add them to the projects
                  array.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
