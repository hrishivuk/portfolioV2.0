"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiChevronRight, FiMail } from "react-icons/fi";
import { useTheme } from "./contexts/ThemeContext";
import AnimatedDeveloperScene from "./components/AnimatedDeveloperScene";
import Navbar from "./components/navbar";
import PageContainer from "./components/PageContainer";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const processSteps = [
  {
    number: "01",
    title: "Find the friction",
    body: "Start with the user, context, constraints, and the workflow that needs to improve.",
  },
  {
    number: "02",
    title: "Shape the flow",
    body: "Turn messy needs into journeys, states, wireframes, and clear interaction decisions.",
  },
  {
    number: "03",
    title: "Prototype the interface",
    body: "Make ideas tangible early so hierarchy, motion, and usability can be judged quickly.",
  },
  {
    number: "04",
    title: "Build the product",
    body: "Translate the experience into reliable frontend architecture, APIs, and responsive UI.",
  },
  {
    number: "05",
    title: "Refine and ship",
    body: "Polish edge cases, performance, accessibility, and the final product story.",
  },
];

const nextLinks = [
  {
    href: "/works",
    label: "View case studies",
    body: "CoachCanvas, Findaside, UX sprints, and product builds.",
  },
  {
    href: "/aboutme",
    label: "About me",
    body: "The design-engineering background behind the work.",
  },
  {
    href: "/contact",
    label: "Contact",
    body: "For roles, product ideas, freelance work, or a quick hello.",
  },
];

export default function Home() {
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 80);
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

      <div className="relative z-10">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />

        <section className="min-h-[92vh] pt-32 sm:pt-36 pb-14 flex items-center">
          <PageContainer>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.8fr)]"
            >
              <div className="max-w-5xl">
                <p className="studio-kicker mb-5">
                  Frontend engineer - UX-minded product builder
                </p>
                <h1 className="studio-display max-w-5xl">
                  I design and build digital products from idea to interface.
                </h1>
                <p className="studio-subheading mt-7 max-w-2xl">
                  I&apos;m Hrishikesh Varma, a frontend engineer in Dublin building
                  web, mobile, and AI-assisted product experiences with design
                  thinking baked in.
                </p>

                <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
                  <Link href="/works" className="studio-button studio-button-primary">
                    View work
                    <FiArrowUpRight aria-hidden />
                  </Link>
                  <a
                    href="mailto:officialhrishivuk@gmail.com"
                    className="studio-button studio-button-ghost"
                  >
                    Contact me
                    <FiMail aria-hidden />
                  </a>
                </div>

                <div
                  className="mt-10 flex flex-wrap gap-2 border-t pt-5 studio-hairline"
                  aria-label="Core tools"
                >
                  {["React", "Next.js", "React Native", "Firebase", "Supabase", "Figma"].map(
                    (tool) => (
                      <span key={tool} className="studio-pill">
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="hidden lg:block">
                <AnimatedDeveloperScene />
              </div>
            </motion.div>
          </PageContainer>
        </section>

        <section id="process" className="studio-section border-y studio-hairline bg-white/[0.015]">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="lg:sticky lg:top-32">
                <p className="studio-kicker mb-4">Process</p>
                <h2 className="studio-heading">How I move from problem to product.</h2>
                <p className="studio-text mt-5 max-w-xl">
                  This is the part of the homepage worth keeping: it explains why
                  the portfolio is not just a list of React projects.
                </p>
              </div>

              <div className="space-y-2">
                {processSteps.map((step) => (
                  <article
                    key={step.number}
                    className="grid gap-3 border-b py-5 studio-hairline sm:grid-cols-[76px_1fr]"
                  >
                    <p className="text-sm font-semibold text-[var(--accent-secondary)]">
                      {step.number}
                    </p>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                      <p className="studio-text mt-1 max-w-2xl">{step.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="studio-section">
          <PageContainer>
            <div className="mb-8 max-w-3xl">
              <p className="studio-kicker mb-4">Next</p>
              <h2 className="studio-heading">Choose what you want to know.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {nextLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[24px] p-5 transition-transform duration-200 hover:-translate-y-1 studio-surface"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                        {item.label}
                      </h3>
                      <p className="studio-text mt-3">{item.body}</p>
                    </div>
                    <FiChevronRight className="mt-1 shrink-0 text-[var(--text-secondary)] transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </PageContainer>
        </section>
      </div>
    </main>
  );
}
