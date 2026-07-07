"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  FiActivity,
  FiArrowUpRight,
  FiClock,
  FiCloud,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMusic,
  FiRadio,
  FiSend,
} from "react-icons/fi";
import Navbar from "./components/navbar";
import PageContainer from "./components/PageContainer";
import ProjectTransitionLink from "./components/ProjectTransitionLink";
import { getSortedProjects, projects } from "../data/projects";

const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const particles = [
  { left: "6%", top: "18%", size: 2, delay: 0.1, duration: 9.2 },
  { left: "16%", top: "78%", size: 1, delay: 1.6, duration: 10.4 },
  { left: "28%", top: "38%", size: 2, delay: 2.2, duration: 11.8 },
  { left: "42%", top: "12%", size: 2, delay: 0.8, duration: 8.8 },
  { left: "58%", top: "84%", size: 1, delay: 2.9, duration: 12.1 },
  { left: "70%", top: "32%", size: 2, delay: 1.2, duration: 9.8 },
  { left: "82%", top: "68%", size: 1, delay: 3.1, duration: 10.8 },
  { left: "94%", top: "22%", size: 2, delay: 0.4, duration: 12.4 },
  { left: "88%", top: "90%", size: 1, delay: 2.4, duration: 9.6 },
  { left: "52%", top: "52%", size: 1, delay: 1.8, duration: 11.2 },
];

const heroRoles = [
  ["Frontend", "Developer"],
  ["UI/UX", "Designer"],
  ["Digital Media", "Analyst"],
];

const skills = [
  {
    group: "Frontend",
    items: [
      { name: "JavaScript", icon: "/images/TechIcons/JavaScript.png" },
      { name: "TypeScript", icon: "/images/TechIcons/TypeScript.png" },
      { name: "React", icon: "/images/TechIcons/React.png" },
      { name: "Next.js", icon: "/images/TechIcons/Next.js.png" },
      { name: "Vue.js", icon: "/images/TechIcons/Vue.js.png" },
      { name: "Vite", icon: "/images/TechIcons/Vite.js.png" },
      { name: "Tailwind CSS", icon: "/images/TechIcons/Tailwind CSS.png" },
      { name: "Sass", icon: "/images/TechIcons/Sass.png" },
      { name: "Bootstrap", icon: "/images/TechIcons/Bootstrap.png" },
    ],
  },
  {
    group: "Backend & Tools",
    items: [
      { name: "Firebase", icon: "/images/TechIcons/Firebase.png" },
      { name: "Git", icon: "/images/TechIcons/Git.png" },
      { name: "GitHub", icon: "/images/TechIcons/GitHub.png" },
      { name: "NPM", icon: "/images/TechIcons/NPM.png" },
      { name: "Jira", icon: "/images/TechIcons/Jira.png" },
    ],
  },
  {
    group: "Design",
    items: [
      { name: "Figma", icon: "/images/TechIcons/Figma.png" },
      { name: "Ant Design", icon: "/images/TechIcons/Ant Design.png" },
    ],
  },
  {
    group: "Currently Learning",
    items: [
      { name: "Three.js", icon: "/images/TechIcons/Three.js.png" },
      { name: "GraphQL", icon: "/images/TechIcons/GraphQL.png" },
      { name: "GSAP", fallback: "GS" },
      { name: "PostgreSQL", icon: "/images/TechIcons/PostgresSQL.png" },
    ],
  },
];

const workItems = [
  {
    title: "Frontend Developer - Contract",
    place: "Pixel Forge Design Limited - Dublin, Ireland",
    period: "May 2025 - October 2025",
  },
  {
    title: "Frontend Developer - Freelance",
    place: "Remote - India / Ireland",
    period: "October 2024 - March 2025",
  },
  {
    title: "Associate Frontend Developer",
    place: "Experion Technologies - India",
    period: "May 2023 - August 2024",
  },
  {
    title: "Frontend Developer Intern",
    place: "Experion Technologies - India",
    period: "Nov 2022 - March 2023",
  },
];

const educationItems = [
  {
    title: "MSc in Creative Digital Media & UX",
    place: "Technological University Dublin, Ireland",
    period: "2024 - 2026",
  },
  {
    title: "Bachelor of Technology in Computer Science",
    place: "APJ Abdul Kalam Technological University, Kerala, India",
    period: "2018 - 2022",
  },
];

const inputBase =
  "w-full rounded-2xl border px-4 py-3.5 text-sm outline-none focus:border-cyan-200/40 focus:ring-2 focus:ring-cyan-200/10";

function scrollToSection(id) {
  const node = document.getElementById(id);
  if (!node) return;
  node.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionShell({ id, eyebrow, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-24 sm:py-32 ${className}`}
    >
      <PageContainer>
        <div>
          <div className="mb-10">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/58">
              <span className="text-2xl leading-none text-[var(--accent-secondary)]">
                *
              </span>
              {eyebrow}
            </p>
          </div>
          {children}
        </div>
      </PageContainer>
    </section>
  );
}

function HeroTitle({ roleIndex }) {
  return (
    <h1 className="relative min-h-[calc(clamp(3.6rem,8.4vw,7.25rem)*1.6)] max-w-5xl overflow-hidden text-[clamp(3.6rem,8.4vw,7.25rem)] font-black uppercase leading-[0.8] tracking-[-0.05em] text-white">
      <AnimatePresence mode="wait">
        <motion.span
          key={roleIndex}
          className="absolute inset-0 block"
          initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -34, filter: "blur(8px)" }}
          transition={{ duration: 0.48, ease: "easeOut" }}
        >
          {heroRoles[roleIndex][0]}
          <span className="block text-transparent [-webkit-text-stroke:1px_rgba(244,247,250,0.88)]">
            {heroRoles[roleIndex][1]}
          </span>
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}

const skillGroupReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.02,
    },
  },
};

const skillItemReveal = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(3px)",
    transition: { duration: 0.32, ease: "easeIn" },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.42, ease: "easeOut" },
  },
};

const roadmapPanelReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const roadmapItemReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function SkillIcon({ skill }) {
  if (skill.icon) {
    return (
      <Image
        src={skill.icon}
        alt=""
        width={36}
        height={36}
        className="h-8 w-8 object-contain"
      />
    );
  }

  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-secondary)] text-xs font-black leading-none text-[#06100c]">
      {skill.fallback || skill.name.slice(0, 2)}
    </span>
  );
}

function RoadmapPanel({ title, items }) {
  return (
    <motion.div
      className="rounded-[28px] border border-white/10 bg-white/[0.018] p-5 sm:p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.38, margin: "-8% 0px -12% 0px" }}
      variants={roadmapPanelReveal}
    >
      <motion.p
        variants={roadmapItemReveal}
        className="mb-7 text-sm font-bold uppercase tracking-[0.18em] text-cyan-100/58"
      >
        {title}
      </motion.p>

      <div className="relative">
        <motion.span
          className="absolute left-0 top-2 h-full w-px origin-top bg-cyan-100/14"
          variants={{
            hidden: { scaleY: 0 },
            visible: {
              scaleY: 1,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        />

        <div className="space-y-6">
          {items.map((item) => (
            <motion.article
              key={`${title}-${item.title}`}
              variants={roadmapItemReveal}
              className="relative grid gap-3 pl-5"
            >
              <motion.span
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_16px_rgba(77,255,181,0.75)]"
                variants={{
                  hidden: { scale: 0.45, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.32, ease: "easeOut" },
                  },
                }}
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h4 className="text-lg font-black leading-tight tracking-[-0.015em] text-white">
                  {item.title}
                </h4>
                <p className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.12em] text-cyan-100/48">
                  {item.period}
                </p>
              </div>
              <p className="text-sm font-semibold leading-6 text-[var(--text-secondary)]">
                {item.place}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SkillsStack() {
  return (
    <div className="space-y-12">
      <div>
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/58">
          <span className="text-2xl leading-none text-[var(--accent-secondary)]">
            *
          </span>
          My stack
        </p>
      </div>

      {skills.map((group) => (
        <motion.div
          key={group.group}
          className="grid gap-5 lg:grid-cols-[0.28fr_0.72fr] lg:items-start"
          variants={skillGroupReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.42, margin: "-8% 0px -12% 0px" }}
        >
          <motion.h3
            variants={skillItemReveal}
            className="text-[clamp(1.6rem,2.9vw,2.65rem)] font-black uppercase leading-none tracking-normal text-white/70"
          >
            {group.group}
          </motion.h3>

          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
            {group.items.map((skill) => (
              <motion.div
                key={skill.name}
                variants={skillItemReveal}
                className="flex min-h-10 items-center gap-3 text-base font-semibold leading-tight text-white/82 sm:text-lg"
              >
                <SkillIcon skill={skill} />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      setTime(
        new Intl.DateTimeFormat("en-IE", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Europe/Dublin",
        }).format(new Date()),
      );
    }

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
      <motion.div
        className="flex items-center gap-2 rounded-full border border-cyan-200/12 bg-black/24 px-3 py-2 text-[10px] font-bold text-cyan-100/55 shadow-[0_0_24px_rgba(53,214,255,0.08)] backdrop-blur-md"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.45 }}
      >
        <FiClock
          className="h-3.5 w-3.5 text-[var(--accent-secondary)]"
          aria-hidden
        />
        <span>DUBLIN</span>
        <span className="font-mono text-cyan-50/80">{time || "00:00:00"}</span>
      </motion.div>
    </div>
  );
}

function Equalizer() {
  return (
    <div className="flex h-7 items-end gap-1" aria-hidden>
      {[0, 1, 2, 3, 4].map((bar) => (
        <motion.span
          key={bar}
          className="w-1.5 rounded-full bg-gradient-to-t from-cyan-300 to-emerald-300 shadow-[0_0_12px_rgba(53,214,255,0.6)]"
          animate={{ height: ["32%", "88%", "44%", "70%", "32%"] }}
          transition={{
            duration: 1.05 + bar * 0.08,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar * 0.1,
          }}
        />
      ))}
    </div>
  );
}

function WeatherIcon() {
  return (
    <motion.div
      className="relative h-9 w-11"
      animate={{ y: [0, -3, 0], rotate: [0, 2, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <motion.span
        className="absolute left-1 top-0 h-6 w-6 rounded-full bg-cyan-200/90 shadow-[0_0_22px_rgba(53,214,255,0.75)]"
        animate={{ opacity: [0.72, 1, 0.72], scale: [1, 1.08, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="absolute bottom-1 left-2 h-4 w-8 rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.28)]" />
      <span className="absolute bottom-1 left-0 h-3 w-5 rounded-full bg-white/70" />
    </motion.div>
  );
}

function getWeatherLine(weather) {
  if (!weather) return "Loading Dublin weather.";
  if (weather._fallback) return "Weather fallback active.";

  const condition = weather.weather?.[0]?.main || "Current weather";
  return `${condition} in ${weather.name || "Dublin"}.`;
}

function FloatingCard({
  className = "",
  title,
  children,
  icon: Icon,
  delay = 0,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`absolute z-30 rounded-2xl border border-cyan-200/14 bg-[#071014]/70 p-3.5 text-left shadow-[0_22px_80px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-4 ${className}`}
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{
        opacity: 1,
        y: reduceMotion ? 0 : [0, -8, 0],
        scale: 1,
      }}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.025 }}
      transition={{
        opacity: { duration: 0.45, delay },
        scale: { type: "spring", stiffness: 180, damping: 20, delay },
        y: {
          duration: 6.5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_18%_0%,rgba(53,214,255,0.14),transparent_52%)]" />
      <div className="relative">
        <div className="mb-2.5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-cyan-100/55 sm:text-[10px]">
          {Icon ? (
            <Icon
              className="h-3.5 w-3.5 text-[var(--accent-secondary)]"
              aria-hidden
            />
          ) : null}
          {title}
        </div>
        {children}
      </div>
    </motion.article>
  );
}

function SpiderHeroArt({ weather }) {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useMotionValue(160);
  const glowY = useMotionValue(160);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 24 });
  const artX = useTransform(
    smoothX,
    [-1, 1],
    reduceMotion ? [0, 0] : [-18, 18],
  );
  const artY = useTransform(
    smoothY,
    [-1, 1],
    reduceMotion ? [0, 0] : [-12, 12],
  );
  const cardX = useTransform(
    smoothX,
    [-1, 1],
    reduceMotion ? [0, 0] : [10, -10],
  );
  const cardY = useTransform(smoothY, [-1, 1], reduceMotion ? [0, 0] : [7, -7]);

  function handlePointerMove(event) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    mouseX.set((pointerX / rect.width) * 2 - 1);
    mouseY.set((pointerY / rect.height) * 2 - 1);
    glowX.set(pointerX - 160);
    glowY.set(pointerY - 160);
    cursorX.set(pointerX - 4);
    cursorY.set(pointerY - 4);
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      className="group relative min-h-[650px] overflow-hidden rounded-[30px] border border-cyan-100/10 bg-[#03080b]/88 shadow-[0_34px_120px_rgba(0,0,0,0.48)] sm:min-h-[620px] xl:min-h-[680px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Interactive Spider-Verse inspired hero artwork"
    >
      <motion.div
        className="pointer-events-none absolute h-80 w-80 rounded-full bg-cyan-300/18 blur-3xl"
        style={{ x: glowX, y: glowY }}
      />
      <motion.div
        className="pointer-events-none absolute h-2 w-2 rounded-full bg-cyan-100 opacity-0 shadow-[0_0_18px_rgba(53,214,255,0.95)] transition-opacity duration-300 group-hover:opacity-80"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        className="pointer-events-none absolute h-8 w-8 rounded-full border border-cyan-200/20 opacity-0 shadow-[0_0_30px_rgba(53,214,255,0.18)] transition-opacity duration-300 group-hover:opacity-100"
        style={{ x: cursorX, y: cursorY }}
        animate={
          reduceMotion
            ? undefined
            : { scale: [0.78, 1.18, 0.78], opacity: [0.2, 0.58, 0.2] }
        }
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_58%_36%,rgba(53,214,255,0.2),transparent_34%),radial-gradient(circle_at_28%_76%,rgba(77,255,181,0.13),transparent_30%),radial-gradient(circle_at_78%_72%,rgba(255,31,61,0.1),transparent_26%)]"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.72, 1, 0.78], scale: [1, 1.04, 1] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(53,214,255,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(53,214,255,0.26)_1px,transparent_1px)] bg-[size:30px_30px]"
        animate={
          reduceMotion
            ? undefined
            : { backgroundPosition: ["0px 0px", "30px 30px"] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div className="spider-noise absolute inset-0 opacity-45" />

      <motion.div className="absolute inset-0" style={{ x: cardX, y: cardY }}>
        <FloatingCard
          className="left-3 top-4 w-[calc(50%-1rem)] sm:left-5 sm:top-6 sm:w-48"
          icon={FiRadio}
          title="CURRENT STATUS"
          delay={0.16}
        >
          <div className="flex items-center gap-2">
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(77,255,181,0.85)]"
              animate={{ scale: [1, 1.35, 1], opacity: [0.75, 1, 0.75] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <p className="text-sm font-bold text-white">Open to Work</p>
          </div>
          <p className="mt-1 text-xs font-semibold text-cyan-100/58">
            EU & Remote
          </p>
        </FloatingCard>

        <FloatingCard
          className="right-3 top-4 w-[calc(50%-1rem)] sm:right-5 sm:top-12 sm:w-52"
          icon={FiMusic}
          title="CURRENTLY VIBING"
          delay={0.28}
        >
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">
              <motion.p
                className="truncate text-sm font-bold text-white"
                animate={{ opacity: [0.78, 1, 0.78] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Humble
              </motion.p>
              <p className="mt-1 truncate text-xs font-semibold text-cyan-100/58">
                Kendrick Lamar
              </p>
            </div>
            <Equalizer />
          </div>
        </FloatingCard>

        <FloatingCard
          className="bottom-16 left-3 w-[calc(50%-1rem)] sm:bottom-20 sm:left-5 sm:w-48"
          icon={FiCloud}
          title={(weather?.name || "Dublin").toUpperCase()}
          delay={0.4}
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-2xl font-black leading-none text-white">
                {weather?.main?.temp ?? 14}°C
              </p>
              <p className="mt-1.5 text-xs font-semibold leading-5 text-cyan-100/58">
                {getWeatherLine(weather)}
              </p>
            </div>
            <WeatherIcon />
          </div>
        </FloatingCard>

        <FloatingCard
          className="bottom-16 right-3 w-[calc(50%-1rem)] sm:bottom-28 sm:right-5 sm:w-52"
          icon={FiActivity}
          title="CURRENT MOOD"
          delay={0.52}
        >
          <div className="space-y-2">
            {["Building.", "Playing Football.", "Learning."].map(
              (item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 text-xs font-bold text-white/84"
                  animate={{ opacity: [0.54, 1, 0.64] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.42,
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(53,214,255,0.8)]" />
                  {item}
                </motion.div>
              ),
            )}
          </div>
        </FloatingCard>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20"
        style={{ x: artX, y: artY }}
      >
        <div className="absolute left-1/2 top-1/2 flex w-[min(74%,330px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:w-[360px]">
          <motion.div
            className="absolute top-4 h-72 w-72 rounded-full border border-cyan-200/10 bg-cyan-200/[0.025] shadow-[0_0_80px_rgba(53,214,255,0.16)] sm:h-80 sm:w-80"
            animate={
              reduceMotion
                ? undefined
                : { scale: [1, 1.05, 1], rotate: [0, -2, 0] }
            }
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative h-72 w-60 sm:h-80 sm:w-72"
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -14, 0], rotate: [-2.4, 2.2, -2.4] }
            }
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={reduceMotion ? undefined : { scale: 1.035, rotate: 0 }}
          >
            <div className="absolute inset-8 rounded-full bg-cyan-300/18 blur-3xl" />
            <div className="absolute inset-10 rounded-full bg-red-500/12 blur-2xl" />
            <Image
              src="/images/spiderverse.png"
              alt="Original stylized spider emblem"
              fill
              priority
              sizes="(min-width: 1024px) 320px, 70vw"
              className="object-contain drop-shadow-[0_0_24px_rgba(53,214,255,0.55)]"
            />
          </motion.div>
        </div>
      </motion.div>

      <LiveClock />
    </motion.div>
  );
}

function ProgressIndicator({ activeSection, onNavigate }) {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <aside className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-4 xl:flex">
      <div className="relative h-32 w-1 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="absolute left-0 top-0 h-full w-full origin-top rounded-full bg-[var(--accent-secondary)] shadow-[0_0_18px_rgba(77,255,181,0.75)]"
          style={{ scaleY }}
        />
      </div>
      <div className="flex flex-col gap-2">
        {navSections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => onNavigate(section.id)}
            className="group relative flex min-h-5 items-center justify-end gap-2 text-right"
            aria-label={`Scroll to ${section.label}`}
          >
            {activeSection === section.id ? (
              <motion.span
                layoutId="progress-active-glow"
                className="absolute -right-1 h-5 w-12 rounded-full bg-cyan-100/[0.035]"
                transition={{ type: "spring", stiffness: 430, damping: 36 }}
              />
            ) : null}
            <motion.span
              className="relative z-10 text-[10px] font-bold uppercase tracking-[0.18em]"
              animate={{
                color:
                  activeSection === section.id
                    ? "rgba(207,250,254,0.8)"
                    : "rgba(207,250,254,0)",
                x: activeSection === section.id ? 0 : 6,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            >
              {section.label}
            </motion.span>
            <motion.span
              className="relative z-10 h-1.5 rounded-full"
              animate={{
                width: activeSection === section.id ? 24 : 6,
                backgroundColor:
                  activeSection === section.id
                    ? "var(--accent-secondary)"
                    : "rgba(255,255,255,0.22)",
                boxShadow:
                  activeSection === section.id
                    ? "0 0 14px rgba(77,255,181,0.75)"
                    : "0 0 0 rgba(77,255,181,0)",
              }}
              transition={{ type: "spring", stiffness: 430, damping: 34 }}
            />
          </button>
        ))}
      </div>
    </aside>
  );
}

function EmailRail() {
  return (
    <a
      href="mailto:officialhrishivuk@gmail.com"
      className="fixed bottom-8 left-5 z-40 hidden origin-left -rotate-90 text-xs font-semibold tracking-[0.18em] text-cyan-100/55 hover:text-cyan-100 lg:block"
    >
      officialhrishivuk@gmail.com
    </a>
  );
}

function AmbientParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-cyan-100/70 shadow-[0_0_14px_rgba(53,214,255,0.72)]"
          style={{
            left: particle.left,
            top: particle.top,
            height: particle.size,
            width: particle.size,
            opacity: 0.28,
          }}
        />
      ))}
    </div>
  );
}

function getProjectName(title) {
  return title.split("–")[0].trim();
}

function getProjectDescriptor(title) {
  return title.split("–").slice(1).join("–").trim();
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("home");
  const [roleIndex, setRoleIndex] = useState(0);
  const [weather, setWeather] = useState(null);
  const pendingSectionRef = useRef(null);
  const pendingSectionTimerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sortedProjects = useMemo(() => getSortedProjects(projects), []);
  const selectedProjects = useMemo(
    () =>
      [
        "coach-canvas",
        "findaside-football-planner",
        "brightspace-learning-experience",
        "flexsave-smart-savings",
      ]
        .map((id) => sortedProjects.find((project) => project.id === id))
        .filter(Boolean),
    [sortedProjects],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % heroRoles.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let ignore = false;

    async function loadWeather() {
      try {
        const response = await fetch("/api/weather");
        if (!response.ok) throw new Error("Weather request failed");

        const data = await response.json();
        if (!ignore) setWeather(data);
      } catch {
        if (!ignore) {
          setWeather({
            name: "Dublin",
            main: { temp: 14 },
            weather: [{ main: "Cloudy" }],
            _fallback: true,
          });
        }
      }
    }

    loadWeather();
    const interval = window.setInterval(loadWeather, 5 * 60 * 1000);

    return () => {
      ignore = true;
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const sectionNodes = navSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    let frameId;

    function updateActiveSection() {
      const activationLine = window.innerHeight * 0.38;
      const currentSection = sectionNodes.reduce((active, node) => {
        const { top } = node.getBoundingClientRect();
        return top <= activationLine ? node.id : active;
      }, sectionNodes[0]?.id || "home");

      const pendingSection = pendingSectionRef.current;
      if (pendingSection && currentSection !== pendingSection) return;
      pendingSectionRef.current = null;
      window.clearTimeout(pendingSectionTimerRef.current);

      setActiveSection((current) =>
        current === currentSection ? current : currentSection,
      );
    }

    function requestUpdate() {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.clearTimeout(pendingSectionTimerRef.current);
    };
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.035)",
    borderColor: "var(--border-primary)",
    color: "var(--text-primary)",
  };

  function handleNavigate(id) {
    pendingSectionRef.current = id;
    window.clearTimeout(pendingSectionTimerRef.current);
    pendingSectionTimerRef.current = window.setTimeout(() => {
      pendingSectionRef.current = null;
    }, 1200);

    setActiveSection(id);
    scrollToSection(id);
  }

  return (
    <main className="relative overflow-x-hidden bg-[#050608]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
        <div className="studio-grid absolute inset-0" />
        <div className="studio-cursor-glow absolute inset-[-10%]" />
        <div className="spider-noise absolute inset-0 opacity-35" />
      </div>
      <AmbientParticles />
      <ProgressIndicator
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <EmailRail />

      <div className="relative z-10">
        <Navbar
          activeSection={activeSection}
          sections={navSections}
          onNavigate={handleNavigate}
        />

        <section
          id="home"
          className="relative flex min-h-screen scroll-mt-24 items-center pt-28 pb-16"
        >
          <PageContainer>
            <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,0.82fr)_minmax(520px,0.88fr)]">
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-secondary)]">
                  Creative digital product builder
                </p>
                <HeroTitle roleIndex={roleIndex} />
                <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                  I&apos;m Hrishikesh Varma, a Dublin-based builder working
                  across frontend engineering, UX, and digital media to shape
                  polished web, mobile, and AI-assisted product experiences.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="group relative inline-flex min-h-[3.35rem] items-center justify-center overflow-hidden rounded-full border border-cyan-200/30 bg-cyan-200/10 px-5 text-sm font-bold text-white shadow-[0_0_32px_rgba(53,214,255,0.14)]"
                  >
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(77,255,181,0.18),transparent_55%)]" />
                    <span className="relative flex items-center gap-2">
                      Let&apos;s talk
                      <FiArrowUpRight />
                    </span>
                  </button>
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100/62">
                    <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_14px_rgba(77,255,181,0.8)]" />
                    Available for full-time opportunities
                  </div>
                </div>
              </div>

              <div>
                <SpiderHeroArt weather={weather} />
              </div>
            </div>
          </PageContainer>
        </section>

        <SectionShell id="about" eyebrow="About">
          <div className="space-y-14 border-t border-white/10 pt-9">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
              <div>
                <p className="text-[clamp(1.75rem,3.1vw,2.8rem)] font-black leading-none tracking-[-0.025em] text-white">
                  Hi, I&apos;m Hrishi.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="studio-pill gap-2">
                    <FiMapPin aria-hidden />
                    Dublin / Remote / Hybrid
                  </span>
                  <span className="studio-pill">Around 3 years</span>
                  <span className="studio-pill">
                    Creative Digital Media & UX
                  </span>
                </div>
                <div className="mt-5">
                  <a
                    href="/resume/Hrishi_CV.pdf"
                    download
                    className="studio-button studio-button-primary shadow-[0_18px_44px_rgba(77,255,181,0.08)] transition-transform hover:-translate-y-0.5"
                    aria-label="Download Hrishikesh Varma resume PDF"
                  >
                    <FiDownload aria-hidden />
                    Download Resume
                  </a>
                </div>
              </div>
              <div className="space-y-5 text-lg leading-8 text-[var(--text-secondary)]">
                <p>
                  I&apos;m a frontend developer based in Dublin, Ireland,
                  focused on building thoughtful digital products that combine
                  clean engineering with great user experience.
                </p>
                <p>
                  I enjoy user-facing web applications, AI-powered products, and
                  SaaS platforms. I like keeping UX research, prototyping, and
                  design systems close to the product instead of treating them
                  as separate theatre.
                </p>
              </div>
            </div>

            <SkillsStack />

            <div className="grid gap-8 lg:grid-cols-2">
              {[
                { title: "Experience", items: workItems },
                { title: "Education", items: educationItems },
              ].map((group) => (
                <RoadmapPanel
                  key={group.title}
                  title={group.title}
                  items={group.items}
                />
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell id="projects" eyebrow="Selected projects">
          <div className="grid gap-8 border-t border-white/10 pt-9">
            {selectedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="group grid gap-6 overflow-hidden border-b border-white/10 pb-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-center"
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 42, filter: "blur(10px)" }
                }
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ amount: 0.28, once: false, margin: "-8% 0px" }}
                transition={{
                  duration: 0.72,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="grid gap-5 sm:grid-cols-[56px_1fr]">
                  <motion.p
                    className="font-mono text-sm font-bold text-cyan-100/42"
                    initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.4, once: false }}
                    transition={{
                      duration: 0.5,
                      delay: reduceMotion ? 0 : index * 0.08 + 0.12,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}.
                  </motion.p>
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
                      {project.category} / {project.year}
                    </p>
                    <h3 className="text-[clamp(2rem,4.8vw,4.15rem)] font-black leading-[0.9] tracking-[-0.04em] text-white group-hover:text-cyan-100">
                      {getProjectName(project.title)}
                    </h3>
                    {getProjectDescriptor(project.title) && (
                      <p className="mt-3 text-xl font-bold text-white/58">
                        {getProjectDescriptor(project.title)}
                      </p>
                    )}
                    <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {(project.technologies || []).slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-cyan-100/58"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <ProjectTransitionLink
                      href={`/projects/${project.id}`}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 text-sm font-bold text-white"
                    >
                      View case study
                      <FiArrowUpRight aria-hidden />
                    </ProjectTransitionLink>
                  </div>
                </div>
                <motion.div
                  className="relative min-h-[240px] overflow-hidden rounded-[24px] border border-white/10 bg-black/30 sm:min-h-[320px]"
                  whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 34vw, 100vw"
                      className={`${
                        project.heroFit === "contain"
                          ? "object-contain p-6"
                          : "object-cover"
                      }`}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
              </motion.article>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="contact" eyebrow="Contact">
          <div className="grid gap-10 border-t border-white/10 pt-9 lg:grid-cols-[0.38fr_0.62fr]">
            <aside className="space-y-8">
              <p className="text-lg leading-8 text-[var(--text-secondary)]">
                I&apos;m open to frontend, product, UX engineering, design
                engineering, and creative technology opportunities.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:officialhrishivuk@gmail.com"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold text-white">
                    <FiMail aria-hidden />
                    Email
                  </span>
                  <FiArrowUpRight className="text-[var(--accent-secondary)]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hrishivuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold text-white">
                    <FiLinkedin aria-hidden />
                    LinkedIn
                  </span>
                  <FiArrowUpRight className="text-[var(--accent-secondary)]" />
                </a>
                <a
                  href="https://github.com/hrishivuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold text-white">
                    <FiGithub aria-hidden />
                    GitHub
                  </span>
                  <FiArrowUpRight className="text-[var(--accent-secondary)]" />
                </a>
              </div>
            </aside>

            <form
              onSubmit={handleSubmit}
              className="rounded-[28px] border border-white/10 bg-white/[0.025] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="page-eyebrow mb-2 block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={inputBase}
                    style={fieldStyle}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="page-eyebrow mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={inputBase}
                    style={fieldStyle}
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="page-eyebrow mb-2 block">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={inputBase}
                  style={fieldStyle}
                  placeholder="Role, product, or hello"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="page-eyebrow mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={7}
                  className={`${inputBase} resize-y`}
                  style={fieldStyle}
                  placeholder="Tell me what you are building or hiring for..."
                />
              </div>

              {submitStatus === "success" && (
                <p className="mt-5 text-sm font-medium text-[var(--accent-secondary)]">
                  Message sent. I&apos;ll be in touch soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-5 text-sm font-medium text-red-300">
                  Something went wrong. Email me directly instead.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-7 inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <FiSend aria-hidden />
              </button>
            </form>
          </div>
        </SectionShell>
      </div>
    </main>
  );
}
