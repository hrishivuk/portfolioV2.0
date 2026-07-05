"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";
import Navbar from "../components/navbar";
import PageContainer from "../components/PageContainer";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const buildInterests = [
  {
    title: "Design Systems",
    body: "Components, tokens, states, and interface rules that make products feel clear and consistent.",
  },
  {
    title: "AI Interfaces",
    body: "Products where AI is useful because the interface makes the output understandable, editable, and practical.",
  },
  {
    title: "Product Dashboards",
    body: "User-facing SaaS surfaces where people can scan, compare, decide, and act without friction.",
  },
  {
    title: "Mobile Apps",
    body: "Onboarding, navigation, roles, and app flows that feel natural on smaller screens.",
  },
];

const personalityNotes = [
  "Real Madrid fan. I can talk about football for far longer than planned.",
  "Running helps me reset when I have been staring at a tricky UI problem for too long.",
  "Cooking is one of the few things where I enjoy experimenting without needing a browser tab open.",
  "I learn fastest by building real projects, not by only following tutorials.",
];

const nowItems = [
  "Brainstorming SaaS product ideas.",
  "Exploring MatchAI, an in-progress AI product for lineups and team analysis.",
  "Building Housewar, a simple house-based game with points and friendly competition.",
  "Sharpening how I present product thinking in my case studies.",
];

const timeline = [
  {
    label: "Dublin",
    title: "Finding opportunities by building and reaching out",
    body: "Since moving to Dublin for my MSc, I have connected with people through LinkedIn and turned those conversations into freelance and contract work.",
  },
  {
    label: "2025",
    title: "First Class Honours MSc in Creative Digital Media & UX",
    body: "Graduated from Technological University Dublin, with a stronger foundation in UX, prototyping, research, and creative digital media.",
  },
  {
    label: "3 years",
    title: "Frontend development practice",
    body: "Around 3 years building user-facing web applications with React, Next.js, JavaScript, TypeScript, Tailwind CSS, APIs, and product workflows.",
  },
];

export default function AboutMePage() {
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="relative overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
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
              className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center"
            >
              <div className="max-w-5xl">
                <p className="studio-kicker mb-5">About me</p>
                <h1 className="studio-display">
                  Frontend developer. Product thinker. UX-minded builder.
                </h1>
                <p className="studio-subheading mt-7 max-w-3xl">
                  I&apos;m Hrishikesh Varma, a frontend developer based in
                  Dublin, Ireland, focused on building thoughtful digital
                  products that combine clean engineering with great user
                  experience.
                </p>
                <p className="studio-text mt-5 max-w-2xl">
                  I have around 3 years of experience and a First Class Honours
                  MSc in Creative Digital Media & UX from Technological
                  University Dublin.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="studio-pill gap-2">
                    <FiMapPin aria-hidden />
                    Dublin / Remote / Hybrid / Relocation
                  </span>
                  <span className="studio-pill">Around 3 years</span>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[360px] lg:ml-auto">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025]">
                  <Image
                    src="/images/Hrishi-portfolio.png"
                    alt="Hrishikesh Varma"
                    fill
                    sizes="(min-width: 1024px) 360px, 88vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </PageContainer>
        </section>

        <section className="studio-section border-y studio-hairline bg-white/[0.015]">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="lg:sticky lg:top-32">
                <p className="studio-kicker mb-4">What I do</p>
                <h2 className="studio-heading">
                  Useful products with a bit of personality.
                </h2>
              </div>
              <div>
                <p className="studio-subheading max-w-3xl">
                  I enjoy user-facing web applications, AI-powered products, and
                  SaaS platforms. I&apos;m interested in UX research, wireframing,
                  prototyping, and design systems, but I like keeping those close
                  to the product instead of turning them into process theatre.
                </p>
                <p className="studio-text mt-5 max-w-2xl">
                  My favorite way to learn is to build something real, hit the
                  awkward parts, and figure out the technology through the
                  project.
                </p>
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="studio-section">
          <PageContainer>
            <div className="mb-8 max-w-3xl">
              <p className="studio-kicker mb-4">Things I enjoy building</p>
              <h2 className="studio-heading">
                The product ideas that keep coming back.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {buildInterests.map((item) => (
                <article key={item.title} className="p-5 studio-surface">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="studio-text mt-3">{item.body}</p>
                </article>
              ))}
            </div>
          </PageContainer>
        </section>

        <section className="studio-section border-y studio-hairline bg-white/[0.015]">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="studio-kicker mb-4">Personality</p>
                <h2 className="studio-heading">Some non-portfolio evidence.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {personalityNotes.map((note) => (
                  <article key={note} className="p-5 studio-surface">
                    <p className="studio-text">{note}</p>
                  </article>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="studio-section">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="studio-kicker mb-4">Now</p>
                <h2 className="studio-heading">Current focus.</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {nowItems.map((item) => (
                  <span key={item} className="studio-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="studio-section border-y studio-hairline bg-white/[0.015]">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="lg:sticky lg:top-32">
                <p className="studio-kicker mb-4">Path</p>
                <h2 className="studio-heading">How I got here.</h2>
              </div>
              <div className="space-y-2">
                {timeline.map((item) => (
                  <article
                    key={item.title}
                    className="grid gap-3 border-b py-5 studio-hairline sm:grid-cols-[120px_1fr]"
                  >
                    <p className="text-sm font-semibold text-[var(--accent-secondary)]">
                      {item.label}
                    </p>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
                        {item.title}
                      </h3>
                      <p className="studio-text mt-2">{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="studio-section pb-20">
          <PageContainer>
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10 studio-panel">
              <div>
                <p className="studio-kicker mb-4">Next</p>
                <h2 className="studio-heading max-w-5xl">
                  The clearest proof is in the work.
                </h2>
                <p className="studio-text mt-5 max-w-2xl">
                  The case studies show how I turn ideas into user-facing
                  products across web, mobile, AI, dashboards, and UX-focused
                  interfaces.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/works" className="studio-button studio-button-primary">
                  View work
                  <FiArrowUpRight aria-hidden />
                </Link>
                <a
                  href="/resume/Hrishikesh_Varma_Resume.pdf"
                  download
                  className="studio-button studio-button-ghost"
                >
                  Download CV
                  <FiDownload aria-hidden />
                </a>
              </div>
            </div>
          </PageContainer>
        </section>
      </div>
    </main>
  );
}
