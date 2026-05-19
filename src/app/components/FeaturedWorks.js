"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import PageContainer from "./PageContainer";
import SectionHeading from "./SectionHeading";
import { getSortedProjects } from "../../data/projects";

const fade = { duration: 0.35, ease: "easeOut" };

export default function FeaturedWorks({ isLoaded }) {
  const featuredProjects = getSortedProjects()
    .filter((p) => p.featured)
    .slice(0, 4);

  return (
    <section className="py-10 sm:py-12 border-t border-white/5">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={fade}
        >
          <SectionHeading
            eyebrow="Case studies"
            title="Selected work"
            description="Shipped apps and design projects — tap any card for process, screenshots, and outcomes."
            action={
              <Link
                href="/works"
                className="inline-flex items-center gap-1.5 text-sm font-medium shrink-0"
                style={{ color: "var(--text-secondary)" }}
              >
                All projects
                <FiChevronRight className="text-base" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ ...fade, delay: 0.05 * index }}
              >
                <Link
                  href={`/works/${project.id}`}
                  className="group flex gap-4 p-3 sm:p-4 rounded-xl border h-full transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                  }}
                >
                  <div
                    className="w-24 sm:w-28 h-20 sm:h-24 rounded-lg overflow-hidden shrink-0"
                    style={{ backgroundColor: "var(--bg-primary)" }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="flex items-center justify-center h-full text-xl opacity-40">
                        🚀
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full border"
                        style={{
                          borderColor: "var(--border-primary)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {project.category}
                      </span>
                      {project.year && (
                        <span className="page-meta">{project.year}</span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold leading-snug group-hover:underline underline-offset-2">
                      {project.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed mt-1 line-clamp-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.summary}
                    </p>
                  </div>
                  <FiChevronRight
                    className="shrink-0 self-center opacity-40 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--text-secondary)" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}
