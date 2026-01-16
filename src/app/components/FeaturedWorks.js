"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useLayout } from "../contexts/LayoutContext";
import { projects } from "../../data/projects";

export default function FeaturedWorks({ isLoaded }) {
  const { maxWidth } = useLayout();

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="min-h-screen flex items-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16">
      <div className="mx-auto w-full" style={{ maxWidth }}>
        <motion.div
          className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Side - Title and CTA */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight mb-6 sm:mb-8"
              style={{ color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
            >
              FEATURED WORKS
            </motion.h2>

            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
            >
              <Link
                href="/works"
                className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-lg border transition-all duration-300 active:scale-95 touch-manipulation min-h-[44px]"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                  color: "var(--text-primary)",
                }}
              >
                <span className="text-xs sm:text-sm font-medium">View All Works</span>
                <div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-lg border transition-all duration-300 active:scale-95 touch-manipulation min-h-[44px]"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  borderColor: "var(--border-primary)",
                  color: "var(--text-primary)",
                }}
              >
                <span className="text-xs sm:text-sm font-medium">Get in Touch</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Featured Works Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 active:scale-[0.98] cursor-pointer h-full flex flex-col touch-manipulation"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    delay: 2.2 + index * 0.15,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={`/works/${project.id}`}
                    className="flex-1 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
                      <span
                        className="text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full border"
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
                      className="text-sm sm:text-base md:text-lg font-semibold mb-1.5 sm:mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-[11px] sm:text-xs md:text-sm leading-relaxed mb-3 sm:mb-4 flex-1"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.summary.length > 150
                        ? `${project.summary.slice(0, 147)}...`
                        : project.summary}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-1">
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {(project.technologies || [])
                          .slice(0, 2)
                          .map((tech) => (
                            <span
                              key={tech}
                              className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-medium"
                              style={{
                                backgroundColor: "var(--bg-primary)",
                                color: "var(--text-muted)",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                      <span
                        className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border text-xs sm:text-sm"
                        style={{
                          borderColor: "var(--border-primary)",
                          color: "var(--text-secondary)",
                        }}
                        aria-hidden="true"
                      >
                        <FiChevronRight />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
