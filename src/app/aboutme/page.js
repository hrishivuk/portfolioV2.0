"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import Navbar from "../components/navbar";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Responsive web interfaces — clean code, performance, and accessible interactions.",
    label: "Tech Stack",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "Angular",
    ],
    icon: "browser",
  },
  {
    title: "UX & Interaction Design",
    description:
      "Research-driven flows, prototypes, and interfaces tuned for real user behaviour.",
    label: "Skills",
    skills: [
      "Wireframing",
      "User Research",
      "Prototyping",
      "UI Design",
      "Usability Testing",
    ],
    icon: "ux",
  },
  {
    title: "Android Development",
    description:
      "React Native apps with Firebase backends and role-based mobile experiences.",
    label: "Tech Stack",
    skills: [
      "React Native",
      "Firebase",
      "Firestore",
      "Mobile UI/UX",
    ],
    icon: "mobile",
  },
  {
    title: "Creative Digital Media",
    description:
      "VR/AR, interaction design, and digital storytelling from my MSc programme.",
    label: "Practice",
    skills: [
      "VR/AR",
      "Game Prototyping",
      "Motion Design",
      "Digital Storytelling",
    ],
    icon: "media",
  },
];

function SkillIcon({ type }) {
  const color = "var(--accent-primary)";
  if (type === "browser") {
    return (
      <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ color }} aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (type === "mobile") {
    return (
      <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ color }} aria-hidden>
        <rect x="7" y="3" width="10" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="17.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (type === "media") {
    return (
      <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ color }} aria-hidden>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="10,9 16,12 10,15" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ color }} aria-hidden>
      <rect x="4" y="4" width="10" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M14 14L18 20L22 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function AboutMePage() {
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const cardStyle = {
    backgroundColor: "var(--bg-secondary)",
    borderColor: "var(--border-primary)",
  };

  return (
    <main
      className="relative overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-primary)", zIndex: 1 }}
    >
      <div className="relative z-10 pb-16">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />

        <PageContainer>
          <PageHeader
            eyebrow="Profile"
            title="About Me"
            description="Frontend developer and UX designer in Dublin. I ship mobile apps and web products where engineering and design work as one discipline."
            isLoaded={isLoaded}
          />

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 pb-10 sm:pb-12 border-b"
            style={{ borderColor: "var(--border-primary)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <div
              className="rounded-xl border overflow-hidden h-64 sm:h-72"
              style={{ backgroundColor: "#0a0a0a", borderColor: cardStyle.borderColor }}
            >
              <div
                className="flex items-center gap-2 px-4 py-2.5 border-b"
                style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(0,0,0,0.3)" }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] ml-2 font-mono text-neutral-500">about-me.ts</span>
              </div>
              <div className="p-4 font-mono text-xs sm:text-sm space-y-2.5 overflow-auto h-[calc(100%-40px)]">
                <p><span className="text-green-400">{"> "}</span><span className="text-neutral-200"> whoami</span></p>
                <p className="ml-3 text-neutral-200">Hrishikesh Varma</p>
                <p><span className="text-green-400">{"> "}</span><span className="text-neutral-200"> role</span></p>
                <p className="ml-3 text-neutral-200">Frontend Developer × UX Designer</p>
                <p><span className="text-green-400">{"> "}</span><span className="text-neutral-200"> status</span></p>
                <p className="ml-3 text-neutral-200">Open to roles · Dublin / Remote EU</p>
                <p><span className="text-green-400">{"> "}</span><span className="text-green-400 animate-pulse">▌</span></p>
              </div>
            </div>

            <div>
              <h2 className="section-title mb-4">My Story</h2>
              <div className="space-y-3 page-lead">
                <p>
                  I combine frontend engineering with UX thinking — shipped mobile apps,
                  freelance web platforms, and rapid university design sprints.
                </p>
                <p>
                  MSc Creative Digital Media & UX at TU Dublin (2024–2026). I care about
                  interfaces that are fast to use, clear to maintain, and grounded in how
                  people actually behave.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {["React", "React Native", "Figma", "Next.js", "Firebase"].map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-full text-xs font-medium border"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border-primary)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <section className="pt-10 sm:pt-12">
            <SectionHeading
              eyebrow="Capabilities"
              title="Skills & Expertise"
              description="What I bring to product teams and client projects."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {skillGroups.map((group) => (
                <article key={group.title} className="p-4 sm:p-5 rounded-xl border" style={cardStyle}>
                  <div
                    className="w-9 h-9 rounded-lg mb-3 flex items-center justify-center"
                    style={{ backgroundColor: "var(--bg-primary)" }}
                  >
                    <SkillIcon type={group.icon} />
                  </div>
                  <h3 className="text-base font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>
                    {group.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                    {group.description}
                  </p>
                  <p className="text-[11px] font-semibold mb-2 uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-full text-[11px] font-medium border"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          borderColor: "var(--border-primary)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </PageContainer>
      </div>
    </main>
  );
}
