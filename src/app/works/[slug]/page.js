"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import Navbar from "../../components/navbar";
import PageContainer from "../../components/PageContainer";
import { useTheme } from "../../contexts/ThemeContext";
import { getSortedProjects, projects } from "../../../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function splitProjectTitle(title) {
  const [name, ...rest] = title.split("–");
  return {
    name: name.trim(),
    descriptor: rest.join("–").trim(),
  };
}

function getFallbackCaseStudy(project) {
  return {
    eyebrow: "Case study",
    timeline: project.year,
    status: project.featured ? "Featured work" : "Portfolio project",
    problem: project.description,
    opportunity:
      "Shape the product so the user goal, interface decisions, and implementation details are easy to understand.",
    users: ["End users", "Product teams", "Recruiters reviewing the work"],
    productThinking: project.highlights || [],
    designDecisions: project.responsibilities?.slice(0, 3) || [],
    engineeringDecisions: project.responsibilities?.slice(3) || project.technologies || [],
    outcome: project.summary,
    reflection:
      "This project is part of the broader story: combining product judgment, interface design, and frontend implementation.",
  };
}

function CaseStudySection({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`studio-section border-t studio-hairline ${className}`}>
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="studio-kicker mb-4">{eyebrow}</p>
            <h2 className="studio-heading">{title}</h2>
          </div>
          <div>{children}</div>
        </div>
      </PageContainer>
    </section>
  );
}

function BulletList({ items }) {
  if (!items?.length) return null;

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item} className="grid grid-cols-[12px_1fr] gap-4">
          <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent-secondary)]" />
          <p className="studio-text">{item}</p>
        </div>
      ))}
    </div>
  );
}

function ScreenshotCarousel({ shots }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-4 sm:p-5">
      <div className="flex gap-4 overflow-x-auto scroll-smooth pb-2">
        {shots.map((shot, index) => {
          const isPortrait = shot.aspect === "portrait";

          return (
            <figure
              key={shot.src}
              className={`shrink-0 overflow-hidden rounded-[22px] border border-white/10 bg-black/25 ${
                isPortrait ? "w-[230px] sm:w-[260px]" : "w-[min(78vw,520px)]"
              }`}
            >
              <div
                className={`relative ${
                  isPortrait ? "aspect-[412/917]" : "aspect-[3/2]"
                }`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes={isPortrait ? "260px" : "520px"}
                  className="object-contain"
                  priority={index < 2}
                />
              </div>
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-[var(--text-secondary)]">
                {shot.alt}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

function MenuComparison({ shots }) {
  if (!shots.length) return null;

  return (
    <div className="mb-6 grid gap-4 sm:grid-cols-2">
      {shots.map((shot, index) => (
        <figure
          key={shot.src}
          className="overflow-hidden rounded-[18px] border border-white/10 bg-black/25"
        >
          <div className="relative aspect-[16/6]">
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(min-width: 640px) 360px, 100vw"
              className="object-contain"
              priority={index < 2}
            />
          </div>
          <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-[var(--text-secondary)]">
            {shot.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();

  const sortedProjects = useMemo(() => getSortedProjects(projects), []);
  const project = useMemo(
    () => sortedProjects.find((item) => item.id === params.slug),
    [params.slug, sortedProjects]
  );

  const nextProject = useMemo(() => {
    if (!project) return null;
    const currentIndex = sortedProjects.findIndex((item) => item.id === project.id);
    return sortedProjects[(currentIndex + 1) % sortedProjects.length];
  }, [project, sortedProjects]);

  if (!project) {
    return (
      <main className="min-h-screen bg-[var(--bg-primary)]">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />
        <section className="min-h-screen pt-32 flex items-center">
          <PageContainer>
            <div className="max-w-xl">
              <p className="studio-kicker mb-4">404</p>
              <h1 className="studio-heading">Project not found.</h1>
              <button
                type="button"
                onClick={() => router.push("/works")}
                className="studio-button studio-button-primary mt-8"
              >
                Back to work
                <FiArrowLeft aria-hidden />
              </button>
            </div>
          </PageContainer>
        </section>
      </main>
    );
  }

  const caseStudy = project.caseStudy || getFallbackCaseStudy(project);
  const { name, descriptor } = splitProjectTitle(project.title);
  const screenshots = project.screenshots || [];
  const primaryScreens = screenshots.filter((shot) => shot.placement === "overview");
  const featureScreens = screenshots.filter((shot) => shot.placement === "features");
  const processScreens = screenshots.filter((shot) => shot.placement === "process");
  const visibleScreens = [...primaryScreens, ...featureScreens, ...processScreens];
  const menuScreens = visibleScreens.filter((shot) => shot.presentation === "comparison");
  const carouselScreens = visibleScreens.filter((shot) => shot.presentation !== "comparison");
  const heroImageClass =
    project.heroFit === "contain"
      ? "object-contain p-4 sm:p-8"
      : "object-cover";
  const heroMinHeight =
    project.heroFit === "contain"
      ? "min-h-[300px] sm:min-h-[460px]"
      : "min-h-[360px] sm:min-h-[520px]";

  return (
    <main className="relative overflow-x-hidden bg-[var(--bg-primary)]">
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

        <section className="pt-32 sm:pt-36 pb-16">
          <PageContainer>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <Link
                href="/works"
                className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                <FiArrowLeft aria-hidden />
                Back to work
              </Link>

              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                <div>
                  <p className="studio-kicker mb-5">{caseStudy.eyebrow}</p>
                  <h1 className="studio-display">{name}</h1>
                  {descriptor && (
                    <p className="studio-subheading mt-5 max-w-2xl">
                      {descriptor}
                    </p>
                  )}
                </div>
                <div>
                  <p className="studio-subheading">{project.summary}</p>
                  <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                      ["Role", project.role],
                      ["Timeline", caseStudy.timeline || project.year],
                      ["Status", caseStudy.status],
                      ["Type", project.category],
                    ].map(([label, value]) => (
                      <div key={label} className="border-t pt-4 studio-hairline">
                        <p className="page-eyebrow mb-2">{label}</p>
                        <p className="text-sm font-medium leading-5 text-[var(--text-primary)]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 overflow-hidden rounded-[32px] studio-panel">
                <div className={`relative ${heroMinHeight}`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="100vw"
                      className={heroImageClass}
                      priority
                    />
                  ) : (
                    <div className="flex h-full min-h-[360px] items-center justify-center text-[var(--text-muted)]">
                      Product preview coming soon
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          </PageContainer>
        </section>

        <CaseStudySection eyebrow="Overview" title="What this project needed to solve.">
          <div className="space-y-8">
            <div>
              <p className="page-eyebrow mb-3">Problem</p>
              <p className="studio-subheading">{caseStudy.problem}</p>
            </div>
            <div>
              <p className="page-eyebrow mb-3">Opportunity</p>
              <p className="studio-text">{caseStudy.opportunity}</p>
            </div>
            {caseStudy.users?.length > 0 && (
              <div>
                <p className="page-eyebrow mb-4">Primary users</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.users.map((user) => (
                    <span key={user} className="studio-pill">
                      {user}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow={caseStudy.productSectionEyebrow || "Product thinking"}
          title={caseStudy.productSectionTitle || "The decisions before the interface."}
          className="bg-white/[0.015]"
        >
          <BulletList items={caseStudy.productThinking} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow={caseStudy.designSectionEyebrow || "Design"}
          title={caseStudy.designSectionTitle || "How the experience was shaped."}
        >
          <BulletList items={caseStudy.designDecisions} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Engineering"
          title="How the product became real."
          className="bg-white/[0.015]"
        >
          <div className="space-y-8">
            <BulletList items={caseStudy.engineeringDecisions} />
            {project.technologies?.length > 0 && (
              <div>
                <p className="page-eyebrow mb-4">Tech and tools</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="studio-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="flex flex-col gap-3 sm:flex-row">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="studio-button studio-button-primary"
                >
                  Live project
                  <FiExternalLink aria-hidden />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="studio-button studio-button-ghost"
                >
                  GitHub
                  <FiGithub aria-hidden />
                </a>
              )}
            </div>
          </div>
        </CaseStudySection>

        {visibleScreens.length > 0 && (
          <section className="studio-section border-t studio-hairline">
            <PageContainer>
              <div className="mb-10 max-w-4xl">
                <p className="studio-kicker mb-4">Interface</p>
                <h2 className="studio-heading">Screens that show the product in motion.</h2>
                <p className="studio-text mt-4 max-w-2xl">
                  A compact look through the key screens without turning the case
                  study into a long image dump.
                </p>
              </div>
              <MenuComparison shots={menuScreens} />
              {carouselScreens.length > 0 && (
                <ScreenshotCarousel shots={carouselScreens} />
              )}
            </PageContainer>
          </section>
        )}

        <CaseStudySection
          eyebrow="Outcome"
          title="What this project proves."
          className="bg-white/[0.015]"
        >
          <div className="space-y-8">
            <div>
              <p className="page-eyebrow mb-3">Result</p>
              <p className="studio-subheading">{caseStudy.outcome}</p>
            </div>
            <div>
              <p className="page-eyebrow mb-3">Reflection</p>
              <p className="studio-text">{caseStudy.reflection}</p>
            </div>
          </div>
        </CaseStudySection>

        {nextProject && (
          <section className="studio-section">
            <PageContainer>
              <Link
                href={`/works/${nextProject.id}`}
                className="group block rounded-[32px] p-6 sm:p-10 lg:p-14 studio-panel"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p className="studio-kicker mb-4">Next project</p>
                    <h2 className="studio-heading max-w-5xl">
                      {nextProject.title}
                    </h2>
                    <p className="studio-text mt-5 max-w-2xl">
                      {nextProject.summary}
                    </p>
                  </div>
                  <span className="studio-button studio-button-primary w-fit">
                    Open
                    <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </PageContainer>
          </section>
        )}
      </div>
    </main>
  );
}
