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
    <main className="relative overflow-x-hidden bg-[#eee9dd] text-[#191815]">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 12%, rgba(53, 214, 255, 0.16), transparent 28%), radial-gradient(circle at 82% 18%, rgba(77, 255, 181, 0.12), transparent 24%), linear-gradient(rgba(25, 24, 21, 0.045) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 100% 32px",
        }}
      />

      <div className="pointer-events-none fixed left-8 top-28 z-0 hidden rotate-[-8deg] text-sm font-semibold text-[#191815]/35 lg:block">
        notes / ideas / product mess
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
              animate={isLoaded ? "visible" : "hidden"}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="rounded-[28px] border border-[#191815]/15 bg-[#fffdf6] p-6 shadow-[0_24px_80px_rgba(25,24,21,0.12)] sm:p-8 lg:p-12"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(25,24,21,0.055) 1px, transparent 1px)",
                backgroundSize: "100% 34px",
              }}
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_0.68fr] lg:items-center">
                <div>
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#6f665a]">
                    About me
                  </p>
                  <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-[#191815] sm:text-6xl lg:text-7xl">
                    Frontend developer. Product thinker. Serial idea scribbler.
                  </h1>
                  <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4d463d]">
                    I&apos;m Hrishikesh Varma, a Frontend Developer based in
                    Dublin, Ireland, focused on building thoughtful digital
                    products that combine clean engineering with great user
                    experience.
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f574d]">
                    I have around 3 years of experience and a First Class Honours
                    MSc in Creative Digital Media & UX from Technological
                    University Dublin.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#191815]/20 bg-[#f7efd9] px-4 text-sm font-semibold text-[#191815]">
                      <FiMapPin aria-hidden />
                      Dublin / Remote / Hybrid / Relocation
                    </span>
                    <span className="inline-flex min-h-11 items-center rounded-full border border-[#191815]/20 bg-white px-4 text-sm font-semibold text-[#191815]">
                      Around 3 years
                    </span>
                  </div>
                </div>
                <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/Hrishi-portfolio.png"
                      alt="Hrishikesh Varma"
                      fill
                      sizes="(min-width: 1024px) 30vw, 88vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </PageContainer>
        </section>

        <section className="py-16 sm:py-20">
          <PageContainer>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[24px] border border-[#191815]/15 bg-[#191815] p-6 text-[#fffdf6]">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#4dffb5]">
                  What I do
                </p>
                <h2 className="text-4xl font-black leading-none sm:text-5xl">
                  I like useful products with a bit of personality.
                </h2>
              </div>
              <div className="rounded-[24px] border border-[#191815]/15 bg-[#fffdf6] p-6">
                <p className="text-lg leading-8 text-[#4d463d]">
                  I enjoy user-facing web applications, AI-powered products, and
                  SaaS platforms. I&apos;m interested in UX research, wireframing,
                  prototyping, and design systems, but I like keeping those close
                  to the product instead of turning them into process theatre.
                </p>
                <p className="mt-5 text-base leading-7 text-[#5f574d]">
                  My favorite way to learn is to build something real, hit the
                  awkward parts, and figure out the technology through the
                  project.
                </p>
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="py-16 sm:py-20">
          <PageContainer>
            <div className="mb-12 max-w-4xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#6f665a]">
                Things I enjoy building
              </p>
              <h2 className="text-4xl font-black leading-tight text-[#191815] sm:text-5xl">
                The sticky notes that keep coming back.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {buildInterests.map((item) => (
                <article
                  key={item.title}
                  className="rotate-[-0.5deg] rounded-[18px] border border-[#191815]/15 bg-[#fffdf6] p-5 shadow-[0_16px_40px_rgba(25,24,21,0.08)] even:rotate-[0.5deg]"
                >
                  <h3 className="text-2xl font-black text-[#191815]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#5f574d]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </PageContainer>
        </section>

        <section className="py-16 sm:py-20">
          <PageContainer>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[24px] border border-[#191815]/15 bg-[#f7efd9] p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#6f665a]">
                  Personality
                </p>
                <h2 className="text-4xl font-black leading-tight text-[#191815] sm:text-5xl">
                  Some non-portfolio evidence.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {personalityNotes.map((note) => (
                  <article
                    key={note}
                    className="rounded-[18px] border border-[#191815]/15 bg-[#fffdf6] p-5"
                  >
                    <p className="text-base leading-7 text-[#4d463d]">{note}</p>
                  </article>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="py-16 sm:py-20">
          <PageContainer>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#6f665a]">
                  Now
                </p>
                <h2 className="text-4xl font-black leading-tight text-[#191815] sm:text-5xl">
                  Current scribbles.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {nowItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex min-h-11 items-center rounded-full border border-[#191815]/20 bg-[#fffdf6] px-4 text-sm font-semibold text-[#191815]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="py-16 sm:py-20">
          <PageContainer>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="lg:sticky lg:top-32">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#6f665a]">
                  Path
                </p>
                <h2 className="text-4xl font-black leading-tight text-[#191815] sm:text-5xl">
                  How I got here.
                </h2>
              </div>
              <div className="space-y-4">
                {timeline.map((item) => (
                  <article
                    key={item.title}
                    className="grid gap-4 border-b border-[#191815]/15 py-6 sm:grid-cols-[120px_1fr]"
                  >
                    <p className="text-sm font-bold text-[#8a5b20]">
                      {item.label}
                    </p>
                    <div>
                      <h3 className="text-2xl font-black text-[#191815]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-[#5f574d]">
                        {item.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="pb-20 pt-4">
          <PageContainer>
            <div className="rounded-[28px] border border-[#191815]/15 bg-[#191815] p-6 text-[#fffdf6] sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#4dffb5]">
                    Next
                  </p>
                  <h2 className="max-w-5xl text-4xl font-black leading-tight sm:text-5xl">
                    The clearest proof is in the work.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-[#d9d3c8]">
                    The case studies show how I turn ideas into user-facing
                    products across web, mobile, AI, dashboards, and UX-focused
                    interfaces.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href="/works"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-sm font-bold text-white"
                  >
                    View work
                    <FiArrowUpRight aria-hidden />
                  </Link>
                  <a
                    href="/resume/Hrishikesh_Varma_Resume.pdf"
                    download
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-bold text-[#d9d3c8]"
                  >
                    Download CV
                    <FiDownload aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
      </div>
    </main>
  );
}
