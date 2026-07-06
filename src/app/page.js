"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FiActivity,
  FiArrowUpRight,
  FiClock,
  FiCloud,
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
import { getSortedProjects, projects } from "../data/projects";

const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
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

const skills = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS", "Framer Motion"],
  },
  {
    group: "Backend & Data",
    items: ["Firebase", "Supabase", "Firestore", "APIs"],
  },
  {
    group: "Design & Tools",
    items: ["Figma", "UX Research", "Prototyping", "Design Systems"],
  },
];

const experienceItems = [
  {
    label: "Dublin",
    title: "Finding opportunities by building and reaching out",
    meta: "Remote, hybrid, relocation-ready",
    body: "Since moving to Dublin for my MSc, I have connected with people through LinkedIn and turned those conversations into freelance and contract work.",
  },
  {
    label: "2025",
    title: "First Class Honours MSc in Creative Digital Media & UX",
    meta: "Technological University Dublin",
    body: "A stronger foundation in UX, prototyping, research, and creative digital media now sits beside my frontend engineering practice.",
  },
  {
    label: "3 years",
    title: "Frontend development practice",
    meta: "React, Next.js, React Native, Tailwind, APIs",
    body: "Around 3 years building user-facing web applications, mobile flows, dashboards, and product workflows with design thinking baked in.",
  },
];

const inputBase =
  "w-full rounded-2xl border px-4 py-3.5 text-sm outline-none transition-colors focus:border-cyan-200/40 focus:ring-2 focus:ring-cyan-200/10";

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

function scrollToSection(id) {
  const node = document.getElementById(id);
  if (!node) return;
  node.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionShell({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <PageContainer>
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-12 grid gap-5 lg:grid-cols-[0.32fr_0.68fr] lg:items-end">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/58">
              <span className="text-2xl leading-none text-[var(--accent-secondary)]">*</span>
              {eyebrow}
            </p>
            <h2 className="max-w-5xl text-[clamp(2.5rem,7vw,6.1rem)] font-black leading-[0.9] tracking-[-0.045em] text-white">
              {title}
            </h2>
          </div>
          {children}
        </motion.div>
      </PageContainer>
    </section>
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
        }).format(new Date())
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
        <FiClock className="h-3.5 w-3.5 text-[var(--accent-secondary)]" aria-hidden />
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

function FloatingCard({ className = "", title, children, icon: Icon, delay = 0 }) {
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
        y: { duration: 6.5 + delay, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_18%_0%,rgba(53,214,255,0.14),transparent_52%)]" />
      <div className="relative">
        <div className="mb-2.5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-cyan-100/55 sm:text-[10px]">
          {Icon ? <Icon className="h-3.5 w-3.5 text-[var(--accent-secondary)]" aria-hidden /> : null}
          {title}
        </div>
        {children}
      </div>
    </motion.article>
  );
}

function SpiderHeroArt() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useMotionValue(160);
  const glowY = useMotionValue(160);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 24 });
  const artX = useTransform(smoothX, [-1, 1], reduceMotion ? [0, 0] : [-18, 18]);
  const artY = useTransform(smoothY, [-1, 1], reduceMotion ? [0, 0] : [-12, 12]);
  const cardX = useTransform(smoothX, [-1, 1], reduceMotion ? [0, 0] : [10, -10]);
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
        animate={reduceMotion ? undefined : { scale: [0.78, 1.18, 0.78], opacity: [0.2, 0.58, 0.2] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_58%_36%,rgba(53,214,255,0.2),transparent_34%),radial-gradient(circle_at_28%_76%,rgba(77,255,181,0.13),transparent_30%),radial-gradient(circle_at_78%_72%,rgba(255,31,61,0.1),transparent_26%)]"
        animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.78], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(53,214,255,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(53,214,255,0.26)_1px,transparent_1px)] bg-[size:30px_30px]"
        animate={reduceMotion ? undefined : { backgroundPosition: ["0px 0px", "30px 30px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div className="spider-noise absolute inset-0 opacity-45" />

      <motion.div className="absolute inset-0" style={{ x: cardX, y: cardY }}>
        <FloatingCard className="left-3 top-4 w-[calc(50%-1rem)] sm:left-5 sm:top-6 sm:w-48" icon={FiRadio} title="CURRENT STATUS" delay={0.16}>
          <div className="flex items-center gap-2">
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(77,255,181,0.85)]"
              animate={{ scale: [1, 1.35, 1], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-sm font-bold text-white">Open to Work</p>
          </div>
          <p className="mt-1 text-xs font-semibold text-cyan-100/58">EU & Remote</p>
        </FloatingCard>

        <FloatingCard className="right-3 top-4 w-[calc(50%-1rem)] sm:right-5 sm:top-12 sm:w-52" icon={FiMusic} title="CURRENTLY VIBING" delay={0.28}>
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">
              <motion.p
                className="truncate text-sm font-bold text-white"
                animate={{ opacity: [0.78, 1, 0.78] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              >
                After Dark
              </motion.p>
              <p className="mt-1 truncate text-xs font-semibold text-cyan-100/58">Mr.Kitty</p>
            </div>
            <Equalizer />
          </div>
        </FloatingCard>

        <FloatingCard className="bottom-16 left-3 w-[calc(50%-1rem)] sm:bottom-20 sm:left-5 sm:w-48" icon={FiCloud} title="DUBLIN" delay={0.4}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-2xl font-black leading-none text-white">14°C</p>
              <p className="mt-1.5 text-xs font-semibold leading-5 text-cyan-100/58">Perfect coding weather.</p>
            </div>
            <WeatherIcon />
          </div>
        </FloatingCard>

        <FloatingCard className="bottom-16 right-3 w-[calc(50%-1rem)] sm:bottom-28 sm:right-5 sm:w-52" icon={FiActivity} title="CURRENT MOOD" delay={0.52}>
          <div className="space-y-2">
            {["Building.", "Playing Football.", "Learning."].map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-2 text-xs font-bold text-white/84"
                animate={{ opacity: [0.54, 1, 0.64] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.42 }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(53,214,255,0.8)]" />
                {item}
              </motion.div>
            ))}
          </div>
        </FloatingCard>
      </motion.div>

      <motion.div className="absolute inset-0 z-20" style={{ x: artX, y: artY }}>
        <div className="absolute left-1/2 top-1/2 flex w-[min(74%,330px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:w-[360px]">
          <motion.div
            className="absolute top-4 h-72 w-72 rounded-full border border-cyan-200/10 bg-cyan-200/[0.025] shadow-[0_0_80px_rgba(53,214,255,0.16)] sm:h-80 sm:w-80"
            animate={reduceMotion ? undefined : { scale: [1, 1.05, 1], rotate: [0, -2, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative h-72 w-60 sm:h-80 sm:w-72"
            animate={reduceMotion ? undefined : { y: [0, -14, 0], rotate: [-2.4, 2.2, -2.4] }}
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

function ProgressIndicator({ activeSection }) {
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
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center justify-end gap-2 text-right"
            aria-label={`Scroll to ${section.label}`}
          >
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                activeSection === section.id ? "text-cyan-100/80" : "text-transparent"
              }`}
            >
              {section.label}
            </span>
            <span
              className={`h-1.5 rounded-full transition-all ${
                activeSection === section.id
                  ? "w-6 bg-[var(--accent-secondary)] shadow-[0_0_14px_rgba(77,255,181,0.75)]"
                  : "w-1.5 bg-white/22 group-hover:bg-cyan-100/50"
              }`}
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
      className="fixed bottom-8 left-5 z-40 hidden origin-left -rotate-90 text-xs font-semibold tracking-[0.18em] text-cyan-100/55 transition hover:text-cyan-100 lg:block"
    >
      officialhrishivuk@gmail.com
    </a>
  );
}

function AmbientParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-cyan-100/70 shadow-[0_0_14px_rgba(53,214,255,0.72)]"
          style={{
            left: particle.left,
            top: particle.top,
            height: particle.size,
            width: particle.size,
          }}
          animate={{ y: [0, -24, 0], opacity: [0.12, 0.72, 0.12] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
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
  const [activeSection, setActiveSection] = useState("home");
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
      ["coach-canvas", "findaside-football-planner", "brightspace-learning-experience", "flexsave-smart-savings"]
        .map((id) => sortedProjects.find((project) => project.id === id))
        .filter(Boolean),
    [sortedProjects]
  );

  useEffect(() => {
    const observers = navSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.12, 0.35, 0.6] }
    );

    observers.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
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

  return (
    <main className="relative overflow-x-hidden bg-[#050608]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
        <div className="studio-grid absolute inset-0" />
        <div className="studio-cursor-glow absolute inset-[-10%]" />
        <div className="spider-noise absolute inset-0 opacity-35" />
      </div>
      <AmbientParticles />
      <ProgressIndicator activeSection={activeSection} />
      <EmailRail />

      <div className="relative z-10">
        <Navbar activeSection={activeSection} sections={navSections} onNavigate={scrollToSection} />

        <section id="home" className="relative flex min-h-screen scroll-mt-24 items-center pt-28 pb-16">
          <PageContainer>
            <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,0.82fr)_minmax(520px,0.88fr)]">
              <motion.div
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-secondary)]">
                  Frontend engineer - UX-minded product builder
                </p>
                <h1 className="max-w-5xl text-[clamp(4rem,10vw,8.6rem)] font-black uppercase leading-[0.78] tracking-[-0.055em] text-white">
                  Frontend
                  <span className="block text-transparent [-webkit-text-stroke:1px_rgba(244,247,250,0.88)]">
                    Developer
                  </span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                  I&apos;m Hrishikesh Varma, a frontend engineer in Dublin building
                  web, mobile, and AI-assisted product experiences with design
                  thinking baked in.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="group relative inline-flex min-h-[3.35rem] items-center justify-center overflow-hidden rounded-full border border-cyan-200/30 bg-cyan-200/10 px-5 text-sm font-bold text-white shadow-[0_0_32px_rgba(53,214,255,0.14)] transition duration-300 hover:-translate-y-1"
                  >
                    <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(77,255,181,0.18),transparent_55%)]" />
                    <span className="relative flex items-center gap-2">
                      Let&apos;s talk
                      <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </button>
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100/62">
                    <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_14px_rgba(77,255,181,0.8)]" />
                    Available for full-time opportunities
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 34, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
              >
                <SpiderHeroArt />
              </motion.div>
            </div>
          </PageContainer>
        </section>

        <SectionShell
          id="about"
          eyebrow="About"
          title="User-centered interfaces with a product engineer's eye."
        >
          <div className="grid gap-10 border-t border-white/10 pt-9 lg:grid-cols-[0.42fr_0.58fr]">
            <div>
              <p className="text-[clamp(2rem,4vw,3.6rem)] font-black leading-none tracking-[-0.035em] text-white">
                Hi, I&apos;m Hrishikesh.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="studio-pill gap-2">
                  <FiMapPin aria-hidden />
                  Dublin / Remote / Hybrid
                </span>
                <span className="studio-pill">Around 3 years</span>
                <span className="studio-pill">First Class Honours MSc</span>
              </div>
            </div>
            <div className="space-y-5 text-lg leading-8 text-[var(--text-secondary)]">
              <p>
                I&apos;m a frontend developer based in Dublin, Ireland, focused on
                building thoughtful digital products that combine clean engineering
                with great user experience.
              </p>
              <p>
                I enjoy user-facing web applications, AI-powered products, and SaaS
                platforms. I&apos;m interested in UX research, wireframing, prototyping,
                and design systems, but I like keeping those close to the product.
              </p>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="skills" eyebrow="My stack" title="Tools I use to shape and ship interfaces.">
          <div className="space-y-14 border-t border-white/10 pt-9">
            {skills.map((group) => (
              <div key={group.group} className="grid gap-5 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
                <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-none tracking-[-0.035em] text-white/78">
                  {group.group}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ y: -4, borderColor: "rgba(53,214,255,0.35)" }}
                      className="rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-4 text-lg font-bold text-white/86 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
                    >
                      <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_14px_rgba(77,255,181,0.75)]" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="experience" eyebrow="Experience" title="The path behind the product work.">
          <div className="space-y-10 border-t border-white/10 pt-9">
            {experienceItems.map((item, index) => (
              <motion.article
                key={item.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
                className="grid gap-5 border-b border-white/10 pb-10 lg:grid-cols-[0.32fr_0.68fr]"
              >
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-cyan-100/52">{item.meta}</p>
                </div>
                <div>
                  <h3 className="text-[clamp(2rem,5vw,4.25rem)] font-black leading-[0.92] tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
                    {item.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="projects" eyebrow="Selected projects" title="Product stories, reduced to the signal.">
          <div className="grid gap-8 border-t border-white/10 pt-9">
            {selectedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
                className="group grid gap-6 overflow-hidden border-b border-white/10 pb-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-center"
              >
                <div className="grid gap-5 sm:grid-cols-[56px_1fr]">
                  <p className="font-mono text-sm font-bold text-cyan-100/42">
                    {String(index + 1).padStart(2, "0")}.
                  </p>
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
                      {project.category} / {project.year}
                    </p>
                    <h3 className="text-[clamp(2.4rem,7vw,5.5rem)] font-black leading-[0.86] tracking-[-0.05em] text-white transition-colors group-hover:text-cyan-100">
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
                        <span key={tool} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-cyan-100/58">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative min-h-[240px] overflow-hidden rounded-[24px] border border-white/10 bg-black/30 sm:min-h-[320px]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 34vw, 100vw"
                      className={`transition-transform duration-700 group-hover:scale-[1.04] ${
                        project.heroFit === "contain" ? "object-contain p-6" : "object-cover"
                      }`}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </motion.article>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="contact" eyebrow="Contact" title="Have a product, role, or idea?">
          <div className="grid gap-10 border-t border-white/10 pt-9 lg:grid-cols-[0.38fr_0.62fr]">
            <aside className="space-y-8">
              <p className="text-lg leading-8 text-[var(--text-secondary)]">
                I&apos;m open to frontend, product, UX engineering, design engineering,
                and creative technology opportunities.
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
                  <FiArrowUpRight className="text-[var(--accent-secondary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
                  <FiArrowUpRight className="text-[var(--accent-secondary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
                  <FiArrowUpRight className="text-[var(--accent-secondary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="rounded-[28px] border border-white/10 bg-white/[0.025] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
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

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.p
                    className="mt-5 text-sm font-medium text-[var(--accent-secondary)]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    Message sent. I&apos;ll be in touch soon.
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    className="mt-5 text-sm font-medium text-red-300"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    Something went wrong. Email me directly instead.
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-7 inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-5 text-sm font-bold text-white transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-50"
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
