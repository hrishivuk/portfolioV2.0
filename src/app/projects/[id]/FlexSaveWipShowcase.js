"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import PageContainer from "../../components/PageContainer";

function getProjectName(title) {
  return title.split("–")[0].trim();
}

function getProjectDescriptor(title) {
  return title.split("–").slice(1).join("–").trim();
}

function WipBanner({ label }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-yellow-300/75 bg-yellow-300 shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
      <div className="relative h-5 overflow-hidden bg-yellow-300" aria-hidden>
        <motion.div
          className="absolute inset-y-0 left-0 w-[220%]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #000 0 14px, transparent 14px 30px)",
          }}
          animate={reduceMotion ? undefined : { x: ["0%", "-14%"] }}
          transition={{ duration: 10.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="flex flex-col gap-3 bg-yellow-300 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-black/70">
            Work in progress
          </p>
          <h1 className="mt-2 text-[clamp(2rem,4vw,3.6rem)] font-black uppercase leading-none text-black">
            {label}
          </h1>
        </div>
        <div className="rounded-full border-2 border-black/75 bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-yellow-300">
          Rebuild active
        </div>
      </div>
      <div className="relative h-5 overflow-hidden bg-yellow-300" aria-hidden>
        <motion.div
          className="absolute inset-y-0 right-0 w-[220%]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #000 0 14px, transparent 14px 30px)",
          }}
          animate={reduceMotion ? undefined : { x: ["0%", "14%"] }}
          transition={{ duration: 10.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}

export default function FlexSaveWipShowcase({ project }) {
  const reduceMotion = useReducedMotion();
  const projectName = getProjectName(project.title);
  const descriptor = getProjectDescriptor(project.title);
  const previewScreens = (project.screenshots || []).slice(0, 3);

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

          <section className="pb-16 pt-10 sm:pb-24 sm:pt-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(24rem,0.52fr)] lg:items-center">
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
                  Case study page
                </p>
                <h2 className="max-w-4xl text-[clamp(3rem,5.8vw,5.8rem)] font-black uppercase leading-[0.84] tracking-normal text-white">
                  {projectName}
                </h2>
                {descriptor ? (
                  <p className="mt-4 max-w-xl text-lg font-black uppercase leading-tight text-white/78">
                    {descriptor}
                  </p>
                ) : null}
                <p className="mt-6 max-w-lg text-sm font-semibold leading-6 text-cyan-50/78 sm:text-[0.95rem] sm:leading-7">
                  This project is being reworked into a stronger, cleaner case
                  study. The detailed write-up has been intentionally removed
                  for now so the page does not present unfinished project
                  storytelling as final.
                </p>
              </div>

              <motion.div
                className="relative min-h-[340px] overflow-hidden rounded-[32px] border border-white/10 bg-[#061014] shadow-[0_32px_110px_rgba(0,0,0,0.46)] sm:min-h-[500px]"
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, scale: 0.96, filter: "blur(10px)" }
                }
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(250,204,21,0.18),transparent_42%),radial-gradient(circle_at_84%_92%,rgba(77,255,181,0.09),transparent_44%)]" />
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${projectName} preview`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-contain p-5 sm:p-8"
                  />
                ) : null}
              </motion.div>
            </div>
          </section>

          <section className="border-t border-white/10 py-12 sm:py-16">
            <WipBanner
              label={project.workInProgressLabel || "Case study rebuild in progress"}
            />
          </section>

          {previewScreens.length ? (
            <section className="border-t border-white/10 py-12 sm:py-16">
              <div className="mb-8 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
                  Preview only
                </p>
                <h2 className="mt-3 text-[clamp(1.65rem,3.2vw,3rem)] font-black uppercase leading-[0.96] tracking-normal text-white">
                  Existing visuals are parked here.
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {previewScreens.map((screen, index) => (
                  <article
                    key={screen.src}
                    className="overflow-hidden rounded-[24px] border border-white/10 bg-black/28"
                  >
                    <div className="relative aspect-[16/11] bg-[#071014]">
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="object-contain p-4 opacity-80"
                      />
                    </div>
                    <div className="border-t border-white/10 p-4">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="border-t border-white/10 pb-20 pt-12 sm:pb-28">
            <Link
              href="/"
              className="inline-flex min-h-[3.2rem] items-center justify-center gap-2 rounded-full border border-yellow-300/55 bg-yellow-300/10 px-5 text-sm font-bold text-yellow-100 transition-transform hover:-translate-y-0.5"
            >
              Back to selected work
              <FiArrowUpRight aria-hidden />
            </Link>
          </section>
        </PageContainer>
      </div>
    </main>
  );
}
