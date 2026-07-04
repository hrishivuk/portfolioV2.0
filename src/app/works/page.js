"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";
import FeaturedWorkCarousel from "../components/FeaturedWorkCarousel";
import Navbar from "../components/navbar";
import PageContainer from "../components/PageContainer";
import { getSortedProjects, projects } from "../../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function getProjectName(title) {
  return title.split("–")[0].trim();
}

function getProjectDescriptor(title) {
  return title.split("–").slice(1).join("–").trim();
}

export default function WorksPage() {
  const { setCurrentTheme, themes, showThemeArrow, currentTheme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const sortedProjects = useMemo(() => getSortedProjects(projects), []);
  const flagship =
    sortedProjects.find((project) => project.id === "coach-canvas") ||
    sortedProjects[0];

  const carouselProjects = useMemo(
    () =>
      [
        "findaside-football-planner",
        "brightspace-learning-experience",
        "flexsave-smart-savings",
      ]
        .map((id) => sortedProjects.find((project) => project.id === id))
        .filter(Boolean),
    [sortedProjects]
  );

  return (
    <main className="relative overflow-x-hidden bg-[var(--bg-primary)]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <div className="studio-grid absolute inset-0" />
        <div className="studio-cursor-glow absolute inset-[-10%]" />
      </div>

      <div className="relative z-10 pb-16">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />

        <section className="pt-32 sm:pt-36 pb-14">
          <PageContainer>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-6xl"
            >
              <p className="studio-kicker mb-5">Selected work</p>
              <h1 className="studio-display">
                Product stories, not just project cards.
              </h1>
              <p className="studio-subheading mt-7 max-w-3xl">
                A focused collection of web, mobile, and UX projects showing how
                I move from messy workflows to designed and shipped interfaces.
              </p>
            </motion.div>
          </PageContainer>
        </section>

        {flagship && (
          <section className="pb-8">
            <PageContainer>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              >
                <Link
                  href={`/works/${flagship.id}`}
                  className="group grid overflow-hidden rounded-[32px] p-4 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8 studio-panel"
                >
                  <div className="flex flex-col justify-between gap-10 p-2 sm:p-4">
                    <div>
                      <div className="mb-5 flex flex-wrap gap-2">
                        <span className="studio-pill">Start here</span>
                        <span className="studio-pill">
                          {flagship.caseStudy?.status || "Featured work"}
                        </span>
                      </div>
                      <p className="page-eyebrow mb-3">{flagship.category}</p>
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-none tracking-normal text-[var(--text-primary)]">
                        {getProjectName(flagship.title)}
                      </h2>
                      {getProjectDescriptor(flagship.title) && (
                        <p className="studio-subheading mt-4">
                          {getProjectDescriptor(flagship.title)}
                        </p>
                      )}
                      <p className="studio-text mt-6 max-w-2xl">
                        {flagship.summary}
                      </p>
                    </div>

                    <div>
                      <div className="grid gap-4 border-t pt-6 studio-hairline sm:grid-cols-3">
                        <div>
                          <p className="page-eyebrow mb-2">Role</p>
                          <p className="text-sm font-medium leading-5 text-[var(--text-primary)]">
                            {flagship.role}
                          </p>
                        </div>
                        <div>
                          <p className="page-eyebrow mb-2">Year</p>
                          <p className="text-sm font-medium leading-5 text-[var(--text-primary)]">
                            {flagship.year}
                          </p>
                        </div>
                        <div>
                          <p className="page-eyebrow mb-2">Story</p>
                          <p className="text-sm font-medium leading-5 text-[var(--text-primary)]">
                            Product design + mobile engineering
                          </p>
                        </div>
                      </div>
                      <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-secondary)]">
                        Open flagship case study
                        <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </div>
                  </div>

                  <div className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-white/10 bg-black/30">
                    {flagship.image && (
                      <Image
                        src={flagship.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        priority
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </Link>
              </motion.div>
            </PageContainer>
          </section>
        )}

        <section className="studio-section pt-10">
          <PageContainer>
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="studio-kicker mb-3">Also featured</p>
                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-[var(--text-primary)]">
                  Three focused stories after CoachCanvas
                </h2>
                <p className="studio-text mt-3 max-w-2xl">
                  A rotating look at the work that rounds out the portfolio:
                  freelance product building, UX redesign, and rapid app design.
                </p>
              </div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] px-4 py-6 sm:px-6 lg:px-8"
            >
              <FeaturedWorkCarousel projects={carouselProjects} />
            </motion.div>
          </PageContainer>
        </section>
      </div>
    </main>
  );
}
