"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import Navbar from "../components/navbar";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import Link from "next/link";
import { projects, getSortedProjects } from "../../data/projects";

export default function WorksPage() {
  const { setCurrentTheme, themes, showThemeArrow, currentTheme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const categoryOrder = [
    "Frontend Development",
    "Android Development",
    "UX Design",
    "Creative Digital Media",
  ];

  const sortedProjects = useMemo(() => getSortedProjects(projects), []);

  const uniqueCategories = [
    ...new Set(sortedProjects.map((project) => project.category)),
  ];
  const categories = [
    "All",
    ...categoryOrder.filter((cat) => uniqueCategories.includes(cat)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === selectedCategory);

  return (
    <main
      className="relative overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-primary)", zIndex: 1 }}
    >
      <div className="relative z-10 pb-16">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />

        <PageContainer>
          <PageHeader
            eyebrow="Portfolio"
            title="Works"
            description="Frontend, mobile, and UX projects built for real users — from shipped apps to design case studies."
            isLoaded={isLoaded}
          >
            <p className="page-meta mt-3">
              {sortedProjects.length} projects · Select a category or open a case study
            </p>
          </PageHeader>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <div
              className="flex flex-wrap gap-2 mb-8"
              role="group"
              aria-label="Filter projects by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 focus:outline-none focus:ring-2 min-h-[40px]"
                  style={{
                    backgroundColor:
                      selectedCategory === category
                        ? "var(--bg-secondary)"
                        : "var(--bg-primary)",
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                  }}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/works/${project.id}`}
                    className="block h-full group"
                  >
                    <article
                      className="p-4 rounded-2xl border transition-all duration-200 group-hover:-translate-y-0.5 h-full flex flex-col"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        borderColor: "var(--border-primary)",
                      }}
                    >
                      <div
                        className="w-full aspect-[16/10] rounded-xl mb-3 overflow-hidden"
                        style={{ backgroundColor: "var(--bg-primary)" }}
                      >
                        {project.image ? (
                          <img
                            src={project.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span
                            className="flex items-center justify-center h-full text-2xl"
                            style={{ color: "var(--text-muted)" }}
                            aria-hidden
                          >
                            🚀
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full border"
                          style={{
                            backgroundColor: "var(--bg-primary)",
                            borderColor: "var(--border-primary)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {project.category}
                        </span>
                        {project.year && (
                          <span className="page-meta">{project.year}</span>
                        )}
                        {project.featured && (
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: "var(--accent-primary)",
                              color: "var(--bg-primary)",
                            }}
                          >
                            Featured
                          </span>
                        )}
                      </div>

                      <h2 className="text-base sm:text-lg font-bold mb-1.5 group-hover:underline underline-offset-4 decoration-1">
                        {project.title}
                      </h2>

                      <p
                        className="text-xs sm:text-sm leading-relaxed flex-1 line-clamp-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {project.summary}
                      </p>

                      {project.role && (
                        <p
                          className="page-meta mt-3 pt-2 border-t"
                          style={{ borderColor: "var(--border-primary)" }}
                        >
                          {project.role}
                        </p>
                      )}
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center py-12 page-lead">
                No projects in this category.
              </p>
            )}
          </motion.div>
        </PageContainer>
      </div>
    </main>
  );
}
