"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiBookOpen,
  FiCheckCircle,
} from "react-icons/fi";
import PageContainer from "../../components/PageContainer";

function getProjectName(title) {
  return title.split("–")[0].trim();
}

function getProjectDescriptor(title) {
  return title.split("–").slice(1).join("–").trim();
}

function Reveal({ children, delay = 0, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 26, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.28, margin: "-6% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ShowcaseSection({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`border-t border-white/10 py-14 sm:py-18 ${className}`}>
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
          {eyebrow}
        </p>
        {title ? (
          <h2 className="mt-3 text-[clamp(1.65rem,3.2vw,3rem)] font-black uppercase leading-[0.96] tracking-normal text-white">
            {title}
          </h2>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function MetadataPill({ label, value }) {
  if (!value) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold leading-6 text-white">{value}</p>
    </div>
  );
}

function TextCard({ title, children }) {
  return (
    <article className="rounded-[24px] border border-white/10 bg-white/[0.025] p-5 sm:p-6">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
        {title}
      </p>
      <p className="text-base font-semibold leading-8 text-[var(--text-secondary)]">
        {children}
      </p>
    </article>
  );
}

function ScreenshotCard({ screenshot, index }) {
  const portrait = screenshot.aspect === "portrait";
  const banner = screenshot.aspect === "banner";

  return (
    <Reveal delay={index * 0.05}>
      <article
        className={`group overflow-hidden rounded-[28px] border border-white/10 bg-black/28 ${
          banner ? "lg:col-span-2" : ""
        }`}
      >
        <div
          className={`relative mx-auto bg-[#071014] ${
            portrait
              ? "aspect-[9/16] max-w-[24rem]"
              : banner
                ? "aspect-[16/5] max-w-4xl"
                : "aspect-[16/10]"
          }`}
        >
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            sizes={
              banner
                ? "(min-width: 1024px) 70vw, 100vw"
                : "(min-width: 1024px) 32vw, 100vw"
            }
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.025]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
        </div>
        <div className="border-t border-white/10 p-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            {String(index + 1).padStart(2, "0")} / {screenshot.placement}
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-[var(--text-secondary)]">
            {screenshot.alt}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export default function BrightspaceShowcase({ project }) {
  const reduceMotion = useReducedMotion();
  const projectName = getProjectName(project.title);
  const descriptor = getProjectDescriptor(project.title);
  const primaryTools = (project.technologies || []).slice(0, 7);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050608]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
        <div className="studio-grid absolute inset-0" />
        <div className="studio-cursor-glow absolute inset-[-10%]" />
        <div className="spider-noise absolute inset-0 opacity-35" />
      </div>

      <div className="relative z-10">
        <PageContainer>
          <header className="flex min-h-[80px] items-center justify-between py-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-100/70 hover:text-cyan-100"
            >
              <FiArrowLeft aria-hidden />
              Back to home
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold tracking-normal text-[var(--text-primary)]"
            >
              hrishi.
            </Link>
          </header>

          <section className="pb-14 pt-10 sm:pb-20 sm:pt-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(24rem,0.5fr)] lg:items-center">
              <Reveal>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-secondary)]">
                  Product design showcase
                </p>
                <h1 className="max-w-5xl text-[clamp(2.75rem,5.1vw,5.2rem)] font-black uppercase leading-[0.86] tracking-normal text-white">
                  {projectName}
                </h1>
                {descriptor ? (
                  <p className="mt-4 max-w-xl text-xl font-black uppercase leading-none text-white/82">
                    {descriptor}
                  </p>
                ) : null}
                <p className="mt-6 max-w-lg text-sm font-semibold leading-6 text-cyan-50/78 sm:text-[0.95rem] sm:leading-7">
                  {project.summary}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <MetadataPill label="Timeline" value={project.timeline} />
                  <MetadataPill label="Role" value={project.role} />
                  <MetadataPill label="Team" value={project.team} />
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {primaryTools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-cyan-100/12 bg-cyan-100/[0.045] px-3 py-1.5 text-xs font-bold text-cyan-50/90"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {project.documentLinks?.[0] ? (
                  <Link
                    href={project.documentLinks[0].href}
                    target="_blank"
                    className="mt-8 inline-flex min-h-[3.2rem] items-center justify-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-5 text-sm font-bold text-white shadow-[0_0_30px_rgba(53,214,255,0.12)] transition-transform hover:-translate-y-0.5"
                  >
                    View case study
                    <FiArrowUpRight aria-hidden />
                  </Link>
                ) : null}
              </Reveal>

              <motion.div
                className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-[#061014] shadow-[0_32px_110px_rgba(0,0,0,0.46)] sm:min-h-[520px]"
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, scale: 0.96, filter: "blur(10px)" }
                }
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(53,214,255,0.16),transparent_42%),radial-gradient(circle_at_84%_92%,rgba(77,255,181,0.12),transparent_44%)]" />
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${projectName} product screens`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-contain p-5 sm:p-8"
                  />
                ) : null}
              </motion.div>
            </div>
          </section>

          <ShowcaseSection eyebrow="Overview" title="Career growth inside Pulse.">
            <div className="grid gap-5 lg:grid-cols-3">
              <TextCard title="What it is">{project.showcaseOverview}</TextCard>
              <TextCard title="Problem">{project.problem}</TextCard>
              <TextCard title="Solution">{project.solution}</TextCard>
            </div>
          </ShowcaseSection>

          <ShowcaseSection eyebrow="My contributions" title="Research to prototype.">
            <div className="grid gap-5 lg:grid-cols-2">
              {Object.entries(project.contributions || {}).map(
                ([group, items], groupIndex) => (
                  <Reveal key={group} delay={groupIndex * 0.08}>
                    <article className="h-full rounded-[28px] border border-white/10 bg-white/[0.025] p-5 sm:p-7">
                      <h3 className="text-2xl font-black uppercase leading-none text-white">
                        {group}
                      </h3>
                      <div className="mt-7 space-y-4">
                        {items.map((item) => (
                          <p
                            key={item}
                            className="flex gap-3 text-sm font-semibold leading-7 text-[var(--text-secondary)] sm:text-base"
                          >
                            <FiCheckCircle
                              className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-secondary)]"
                              aria-hidden
                            />
                            {item}
                          </p>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                ),
              )}
            </div>
          </ShowcaseSection>

          <ShowcaseSection eyebrow="Key features" title="Resume Builder scope.">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {(project.keyFeatures || []).map((feature, index) => (
                <Reveal key={feature} delay={index * 0.03}>
                  <article className="flex min-h-[7rem] items-end rounded-[22px] border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-cyan-100/25 hover:bg-cyan-100/[0.045]">
                    <p className="text-base font-black leading-tight text-white">
                      {feature}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </ShowcaseSection>

          {project.screenshots?.length ? (
            <ShowcaseSection eyebrow="Product screens" title="Selected design moments.">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {project.screenshots.map((screenshot, index) => (
                  <ScreenshotCard
                    key={screenshot.src}
                    screenshot={screenshot}
                    index={index}
                  />
                ))}
              </div>
            </ShowcaseSection>
          ) : null}

          {project.documentLinks?.length ? (
            <ShowcaseSection
              eyebrow="Learn more"
              title="Open the full case study."
              className="pb-20 sm:pb-28"
            >
              {project.documentLinks.map((document, index) => (
                <Reveal key={document.href} delay={index * 0.08}>
                  <Link
                    href={document.href}
                    target="_blank"
                    className="group flex min-h-[18rem] flex-col justify-between rounded-[32px] border border-cyan-100/14 bg-[linear-gradient(140deg,rgba(53,214,255,0.12),rgba(77,255,181,0.055),rgba(255,255,255,0.02))] p-5 transition-transform hover:-translate-y-1 hover:border-cyan-100/30 sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100/15 bg-cyan-100/10 text-[var(--accent-secondary)]">
                        <FiBookOpen className="h-5 w-5" aria-hidden />
                      </span>
                      <FiArrowUpRight
                        className="h-5 w-5 text-[var(--accent-secondary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        aria-hidden
                      />
                    </div>
                    <div className="mt-10 max-w-3xl">
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        {document.type}
                      </p>
                      <h3 className="text-2xl font-black uppercase leading-none text-white sm:text-4xl">
                        {document.title}
                      </h3>
                      <p className="mt-4 text-base font-semibold leading-7 text-[var(--text-secondary)]">
                        {document.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-50">
                        View PDF
                        <FiArrowUpRight aria-hidden />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ShowcaseSection>
          ) : null}
        </PageContainer>
      </div>
    </main>
  );
}
