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
    <section className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 snap-start">
      <div className="mx-auto" style={{ maxWidth }}>
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Side - Title and CTA */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.h2
              className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight mb-8"
              style={{ color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
            >
              FEATURED WORKS
            </motion.h2>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
            >
              <Link
                href="/works"
                className="inline-flex items-center space-x-3 px-6 py-4 rounded-lg border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                  color: "var(--text-primary)",
                }}
              >
                <span className="text-sm font-medium">View All Works</span>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 px-6 py-4 rounded-lg border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  borderColor: "var(--border-primary)",
                  color: "var(--text-primary)",
                }}
              >
                <span className="text-sm font-medium">Get in Touch</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Featured Works Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col"
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
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <span
                        className="text-[11px] font-medium px-3 py-1 rounded-full border"
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
                      className="text-base lg:text-lg font-semibold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-xs lg:text-sm leading-relaxed mb-4 flex-1"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.summary.length > 150
                        ? `${project.summary.slice(0, 147)}...`
                        : project.summary}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {(project.technologies || [])
                          .slice(0, 2)
                          .map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full text-[11px] font-medium"
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
                        className="flex items-center justify-center w-8 h-8 rounded-full border text-sm"
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
