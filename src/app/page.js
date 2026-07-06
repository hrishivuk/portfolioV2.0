"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FiActivity,
  FiArrowUpRight,
  FiChevronRight,
  FiClock,
  FiCloud,
  FiMail,
  FiMusic,
  FiRadio,
} from "react-icons/fi";
import { useTheme } from "./contexts/ThemeContext";
import Navbar from "./components/navbar";
import PageContainer from "./components/PageContainer";

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

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function MagneticLink({ href, children, variant = "primary" }) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex min-h-[3.35rem] items-center justify-center overflow-hidden rounded-full border px-5 text-sm font-bold tracking-normal transition duration-300 hover:-translate-y-1 ${
        variant === "primary"
          ? "border-cyan-200/30 bg-cyan-200/10 text-white shadow-[0_0_32px_rgba(53,214,255,0.14)]"
          : "border-white/12 bg-white/[0.025] text-[var(--text-secondary)]"
      }`}
    >
      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(77,255,181,0.18),transparent_55%)]" />
      <span className="relative flex items-center gap-2">
        {children}
        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </Link>
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

function CreativeKeyArt() {
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
  const particles = useMemo(
    () => [
      { left: "12%", top: "18%", size: 3, delay: 0.1, duration: 7.2 },
      { left: "28%", top: "72%", size: 2, delay: 1.4, duration: 8.4 },
      { left: "42%", top: "14%", size: 2, delay: 2.2, duration: 7.8 },
      { left: "68%", top: "78%", size: 3, delay: 0.8, duration: 9.2 },
      { left: "84%", top: "28%", size: 2, delay: 1.9, duration: 8.8 },
      { left: "76%", top: "52%", size: 2, delay: 3.1, duration: 7.4 },
      { left: "18%", top: "48%", size: 2, delay: 2.7, duration: 8.1 },
      { left: "52%", top: "88%", size: 3, delay: 1.1, duration: 9.6 },
    ],
    []
  );

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
      className="group relative min-h-[720px] overflow-hidden rounded-[30px] border border-cyan-100/10 bg-[#03080b]/88 shadow-[0_34px_120px_rgba(0,0,0,0.48)] sm:min-h-[640px] lg:min-h-[660px]"
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
        className="absolute inset-0 bg-[radial-gradient(circle_at_58%_36%,rgba(53,214,255,0.2),transparent_34%),radial-gradient(circle_at_28%_76%,rgba(77,255,181,0.13),transparent_30%),radial-gradient(circle_at_78%_72%,rgba(255,31,61,0.11),transparent_26%)]"
        animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.78], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(53,214,255,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(53,214,255,0.26)_1px,transparent_1px)] bg-[size:30px_30px]"
        animate={reduceMotion ? undefined : { backgroundPosition: ["0px 0px", "30px 30px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div className="spider-noise absolute inset-0 opacity-45" />

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
          animate={reduceMotion ? undefined : { y: [0, -22, 0], opacity: [0.14, 0.74, 0.14] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

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
        <div className="absolute left-1/2 top-1/2 flex w-[min(78%,330px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:w-[360px]">
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

      <motion.div
        className="absolute left-8 top-1/2 h-28 w-px bg-gradient-to-b from-transparent via-cyan-200/30 to-transparent"
        animate={reduceMotion ? undefined : { opacity: [0.16, 0.48, 0.16] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-8 top-1/3 h-36 w-px bg-gradient-to-b from-transparent via-emerald-200/25 to-transparent"
        animate={reduceMotion ? undefined : { opacity: [0.36, 0.12, 0.36] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <LiveClock />
    </motion.div>
  );
}

export default function Home() {
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-[#050608]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
        <div className="studio-grid absolute inset-0" />
        <div className="studio-cursor-glow absolute inset-[-10%]" />
        <div className="spider-noise absolute inset-0 opacity-35" />
      </div>

      <div className="relative z-10">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />

        <section className="min-h-[92vh] pt-32 sm:pt-36 pb-16 flex items-center">
          <PageContainer>
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.82fr)]">
              <motion.div
                variants={reveal}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
                  Frontend engineer - UX-minded product builder
                </p>
                <h1 className="max-w-4xl text-[clamp(2.75rem,5.2vw,5.4rem)] font-black leading-[0.94] tracking-[-0.04em] text-white">
                  I design and build digital products from idea to interface.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                  I&apos;m Hrishikesh Varma, a frontend engineer in Dublin building
                  web, mobile, and AI-assisted product experiences with design
                  thinking baked in.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <MagneticLink href="/works">View work</MagneticLink>
                  <a
                    href="mailto:officialhrishivuk@gmail.com"
                    className="group relative inline-flex min-h-[3.35rem] items-center justify-center overflow-hidden rounded-full border border-white/12 bg-white/[0.025] px-5 text-sm font-bold text-[var(--text-secondary)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:text-white"
                  >
                    <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(53,214,255,0.16),transparent_60%)]" />
                    <span className="relative flex items-center gap-2">
                      Contact me
                      <FiMail aria-hidden />
                    </span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              >
                <CreativeKeyArt />
              </motion.div>
            </div>
          </PageContainer>
        </section>

        <section id="process" className="studio-section border-y border-white/10 bg-white/[0.012]">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="lg:sticky lg:top-32">
                <p className="studio-kicker mb-4">Process</p>
                <h2 className="text-[clamp(2.35rem,4.5vw,4.25rem)] font-black leading-[0.94] tracking-[-0.035em] text-white">
                  How I move from problem to product.
                </h2>
                <p className="studio-text mt-5 max-w-xl">
                  This is the part of the homepage worth keeping: it explains why
                  the portfolio is not just a list of React projects.
                </p>
              </div>

              <div className="space-y-1">
                {processSteps.map((step) => (
                  <motion.article
                    key={step.number}
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="group grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[88px_1fr]"
                  >
                    <p className="font-mono text-sm font-bold text-[var(--accent-secondary)]">
                      {step.number}
                    </p>
                    <div>
                      <h3 className="text-xl font-bold tracking-[-0.015em] text-white sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                        {step.body}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="studio-section">
          <PageContainer>
            <div className="mb-8 max-w-3xl">
              <p className="studio-kicker mb-4">Next</p>
              <h2 className="text-[clamp(2.25rem,4.2vw,4rem)] font-black leading-[0.96] tracking-[-0.035em] text-white">
                Choose what you want to know.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {nextLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.025] p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_24%_0%,rgba(77,255,181,0.14),transparent_58%)]" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold tracking-[-0.015em] text-white">
                        {item.label}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                        {item.body}
                      </p>
                    </div>
                    <FiChevronRight className="mt-1 shrink-0 text-[var(--accent-secondary)] transition-transform group-hover:translate-x-1" />
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
