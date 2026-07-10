import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import PageContainer from "../../components/PageContainer";
import BrightspaceShowcase from "./BrightspaceShowcase";
import CoachCanvasShowcase from "./CoachCanvasShowcase";
import FindasideShowcase from "./FindasideShowcase";
import FlexSaveWipShowcase from "./FlexSaveWipShowcase";
import { getProjectById, projects } from "../../../data/projects";

function getProjectName(title) {
  return title.split("–")[0].trim();
}

function getProjectDescriptor(title) {
  return title.split("–").slice(1).join("–").trim();
}

function DetailList({ title, items = [] }) {
  if (!items.length) return null;

  return (
    <section className="border-t border-white/10 pt-8">
      <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
        {title}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item}
            className="border-l border-cyan-100/12 pl-4 text-sm font-semibold leading-7 text-[var(--text-secondary)]"
          >
            <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_14px_rgba(77,255,181,0.75)]" />
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseStudySection({ eyebrow, title, items = [] }) {
  if (!items.length) return null;

  return (
    <section className="grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-[0.32fr_0.68fr]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
          {eyebrow}
        </p>
        {title ? (
          <h2 className="mt-3 text-2xl font-black leading-tight text-white">
            {title}
          </h2>
        ) : null}
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <p
            key={item}
            className="text-base font-semibold leading-8 text-[var(--text-secondary)]"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

function ScreenshotCard({ screenshot, index }) {
  const portrait = screenshot.aspect === "portrait";
  const banner = screenshot.aspect === "banner";

  return (
    <article
      className={`overflow-hidden rounded-[24px] border border-white/10 bg-black/28 ${
        screenshot.size === "large" && !screenshot.presentation
          ? "md:col-span-2"
          : ""
      }`}
    >
      <div
        className={`relative mx-auto ${
          portrait
            ? "aspect-[9/16] max-w-[21rem]"
            : banner
              ? "aspect-[16/5] max-w-[34rem]"
              : "aspect-[16/10] w-full"
        }`}
      >
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes={
            screenshot.size === "large" || banner
              ? "(min-width: 768px) 70vw, 100vw"
              : "(min-width: 768px) 34vw, 100vw"
          }
          className="object-contain p-4"
        />
      </div>
      <div className="border-t border-white/10 p-4">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
          {String(index + 1).padStart(2, "0")} / {screenshot.placement || "screen"}
        </p>
        <p className="mt-2 text-sm font-semibold leading-6 text-[var(--text-secondary)]">
          {screenshot.alt}
        </p>
      </div>
    </article>
  );
}

function ScreenshotGallery({ screenshots = [] }) {
  const comparisonScreenshots = screenshots.filter(
    (screenshot) => screenshot.presentation === "comparison",
  );
  const standardScreenshots = screenshots.filter(
    (screenshot) => screenshot.presentation !== "comparison",
  );

  return (
    <div className="space-y-6">
      {comparisonScreenshots.length ? (
        <div className="rounded-[24px] border border-white/10 bg-white/[0.018] p-4">
          <div className="mb-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Before / after
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[var(--text-secondary)]">
              Navigation comparison shown side by side for easier scanning.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {comparisonScreenshots.map((screenshot, index) => (
              <ScreenshotCard
                key={`${screenshot.src}-${index}`}
                screenshot={screenshot}
                index={index}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {standardScreenshots.map((screenshot, index) => (
          <ScreenshotCard
            key={`${screenshot.src}-${index}`}
            screenshot={screenshot}
            index={index + comparisonScreenshots.length}
          />
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${getProjectName(project.title)} - Hrishikesh Varma`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  if (project.id === "coach-canvas") {
    return <CoachCanvasShowcase project={project} />;
  }

  if (project.id === "findaside-football-planner") {
    return <FindasideShowcase project={project} />;
  }

  if (project.id === "brightspace-learning-experience") {
    return <BrightspaceShowcase project={project} />;
  }

  if (project.id === "flexsave-smart-savings") {
    return <FlexSaveWipShowcase project={project} />;
  }

  const caseStudy = project.caseStudy || {};
  const descriptor = getProjectDescriptor(project.title);

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

          <section className="py-12 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(16rem,0.32fr)] lg:items-end">
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-secondary)]">
                  {caseStudy.eyebrow || project.category}
                </p>
                <h1 className="max-w-5xl text-[clamp(2.75rem,5.6vw,5.8rem)] font-black uppercase leading-[0.86] tracking-normal text-white">
                  {getProjectName(project.title)}
                </h1>
                {descriptor ? (
                  <p className="mt-4 text-2xl font-bold text-white/85">
                    {descriptor}
                  </p>
                ) : null}
                <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                  {project.description || project.summary}
                </p>
              </div>

              <aside className="grid gap-3 rounded-[24px] border border-white/10 bg-white/[0.025] p-5 lg:justify-self-end">
                {[
                  ["Role", project.role],
                  ["Category", project.category],
                  ["Timeline", caseStudy.timeline || project.year],
                  ["Status", caseStudy.status],
                ]
                  .filter(([, value]) => value)
                  .map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-5 border-b border-white/10 py-3 last:border-b-0"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                        {label}
                      </p>
                      <p className="max-w-[12rem] text-right text-sm font-bold leading-6 text-white/90">
                        {value}
                      </p>
                    </div>
                  ))}
              </aside>
            </div>

            {project.image ? (
              <div className="relative mt-12 min-h-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-black/30 sm:min-h-[460px]">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className={project.heroFit === "contain" ? "object-contain p-8" : "object-cover"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            ) : null}
          </section>

          <section className="grid gap-6 border-t border-white/10 py-12 md:grid-cols-2">
            {[
              ["Problem", caseStudy.problem],
              ["Opportunity", caseStudy.opportunity],
              ["Outcome", caseStudy.outcome],
              ["Reflection", caseStudy.reflection],
            ]
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <article
                  key={label}
                  className="rounded-[24px] border border-white/10 bg-white/[0.018] p-5"
                >
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
                    {label}
                  </p>
                  <p className="text-base font-semibold leading-8 text-[var(--text-secondary)]">
                    {value}
                  </p>
                </article>
              ))}
          </section>

          {project.technologies?.length ? (
            <section className="border-t border-white/10 py-10">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-bold text-cyan-50/90"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          ) : null}

          <div className="space-y-12 py-10">
            <CaseStudySection
              eyebrow={caseStudy.productSectionEyebrow || "Product thinking"}
              title={caseStudy.productSectionTitle}
              items={caseStudy.productThinking}
            />
            <CaseStudySection
              eyebrow={caseStudy.designSectionEyebrow || "Design decisions"}
              title={caseStudy.designSectionTitle}
              items={caseStudy.designDecisions}
            />
            <CaseStudySection
              eyebrow="Engineering decisions"
              items={caseStudy.engineeringDecisions}
            />
            <DetailList title="Responsibilities" items={project.responsibilities} />
            <DetailList title="Highlights" items={project.highlights} />
          </div>

          {project.screenshots?.length ? (
            <section className="border-t border-white/10 py-12">
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
                    Screens
                  </p>
                  <h2 className="mt-3 text-2xl font-black uppercase leading-none text-white sm:text-3xl">
                    Product details
                  </h2>
                </div>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex gap-3">
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="studio-button studio-button-primary"
                      >
                        Live
                        <FiArrowUpRight aria-hidden />
                      </Link>
                    ) : null}
                    {project.githubUrl ? (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="studio-button studio-button-ghost"
                      >
                        GitHub
                        <FiArrowUpRight aria-hidden />
                      </Link>
                    ) : null}
                  </div>
                )}
              </div>

              <ScreenshotGallery screenshots={project.screenshots} />
            </section>
          ) : null}
        </PageContainer>
      </div>
    </main>
  );
}
