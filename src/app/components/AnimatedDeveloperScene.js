"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const techStack = ["React", "Next.js", "TypeScript", "Tailwind", "Firebase"];
const building = ["HouseWars", "MatchAI", "Coach Canvas"];

function FloatingPanel({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute rounded-2xl border border-white/10 bg-white/[0.065] p-4 shadow-2xl shadow-black/25 backdrop-blur-xl ${className}`}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -10, 0],
              rotate: [0, 0.6, 0],
            }
      }
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.025,
              borderColor: "rgba(77, 255, 181, 0.32)",
            }
      }
    >
      {children}
    </motion.div>
  );
}

function Particle({ className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={`absolute h-1.5 w-1.5 rounded-full bg-[var(--accent-secondary)]/60 shadow-[0_0_18px_rgba(77,255,181,0.55)] ${className}`}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -28, 0],
              opacity: [0.25, 0.8, 0.25],
            }
      }
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function AnimatedDeveloperScene() {
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 22 });

  const sceneX = useTransform(smoothX, [-1, 1], reduceMotion ? [0, 0] : [-12, 12]);
  const sceneY = useTransform(smoothY, [-1, 1], reduceMotion ? [0, 0] : [-10, 10]);
  const cardX = useTransform(smoothX, [-1, 1], reduceMotion ? [0, 0] : [10, -10]);
  const cardY = useTransform(smoothY, [-1, 1], reduceMotion ? [0, 0] : [8, -8]);

  function handlePointerMove(event) {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      aria-label="Animated developer workspace illustration"
      className="relative mx-auto h-[420px] w-full max-w-[650px] overflow-hidden rounded-[32px] border border-white/10 bg-[#050708]/55 shadow-2xl shadow-black/30 backdrop-blur sm:h-[520px] lg:h-[580px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_42%,rgba(53,214,255,0.16),transparent_34%),radial-gradient(circle_at_72%_66%,rgba(77,255,181,0.16),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <Particle className="left-[12%] top-[22%]" delay={0.2} />
      <Particle className="right-[18%] top-[18%]" delay={1.2} />
      <Particle className="left-[20%] bottom-[26%]" delay={2.1} />
      <Particle className="right-[12%] bottom-[34%]" delay={3.2} />
      <Particle className="left-[52%] top-[12%]" delay={4.1} />

      <motion.div className="absolute inset-0" style={{ x: sceneX, y: sceneY }}>
        <FloatingPanel className="left-4 top-5 w-[210px] sm:left-8 sm:top-8" delay={0.1}>
          <div className="mb-3 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
          </div>
          <pre className="whitespace-pre-wrap font-mono text-[11px] leading-5 text-slate-200">
            git commit -m{"\n"}&quot;building ideas&quot;{"\n"}
            <span className="text-[var(--accent-secondary)]">✓ shipped</span>
          </pre>
        </FloatingPanel>

        <FloatingPanel className="right-4 top-16 hidden w-[240px] sm:block lg:right-8" delay={0.9}>
          <pre className="font-mono text-[11px] leading-5 text-slate-200">
            <span className="text-cyan-300">function</span> Portfolio() {"{"}
            {"\n"} <span className="text-emerald-300">return</span>{" "}
            &lt;Ideas into=&quot;interfaces&quot; /&gt;
            {"\n"}
            {"}"}
            <motion.span
              className="ml-1 inline-block h-4 w-1 translate-y-0.5 bg-[var(--accent-secondary)]"
              animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </pre>
        </FloatingPanel>

        <FloatingPanel className="left-5 top-[43%] w-[155px] sm:left-10" delay={1.4}>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
            Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/25 px-2 py-1 text-[10px] font-semibold text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </FloatingPanel>

        <FloatingPanel className="right-4 top-[46%] w-[168px] sm:right-9" delay={1.9}>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
            Currently
          </p>
          <div className="space-y-2">
            {building.map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-secondary)]" />
                {item}
              </div>
            ))}
          </div>
        </FloatingPanel>

        <motion.div
          className="absolute bottom-8 left-1/2 w-[250px] -translate-x-1/2 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] px-5 py-3 text-center text-sm font-semibold text-emerald-100 shadow-[0_0_40px_rgba(77,255,181,0.12)] backdrop-blur-xl sm:bottom-10"
          style={{ x: cardX, y: cardY }}
        >
          Ideas - Code - Impact
        </motion.div>

        <div className="absolute bottom-[76px] left-1/2 h-[170px] w-[360px] -translate-x-1/2 sm:bottom-[92px] sm:h-[210px] sm:w-[440px]">
          <div className="absolute bottom-0 left-1/2 h-6 w-[92%] -translate-x-1/2 rounded-full bg-black/45 blur-xl" />

          <div className="absolute bottom-0 left-1/2 h-16 w-[86%] -translate-x-1/2 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.025))] shadow-2xl shadow-black/30" />

          <div className="absolute bottom-10 left-10 h-16 w-12 rounded-b-2xl rounded-t-md border border-white/10 bg-cyan-950/70">
            <div className="mx-auto mt-2 h-8 w-7 rounded-b-xl border border-cyan-200/25 bg-cyan-300/10" />
            <div className="absolute -right-4 top-5 h-6 w-5 rounded-r-full border border-white/10" />
          </div>

          <div className="absolute bottom-10 right-10 h-20 w-16 rounded-2xl border border-white/10 bg-emerald-950/60">
            <div className="absolute left-1/2 top-3 h-10 w-1 -translate-x-1/2 rounded-full bg-emerald-300/50" />
            <div className="absolute left-4 top-2 h-8 w-5 -rotate-12 rounded-full bg-emerald-300/35" />
            <div className="absolute right-4 top-2 h-8 w-5 rotate-12 rounded-full bg-emerald-300/35" />
            <div className="absolute bottom-2 left-1/2 h-6 w-10 -translate-x-1/2 rounded-lg bg-black/35" />
          </div>

          <div className="absolute bottom-[72px] left-1/2 h-[118px] w-[230px] -translate-x-1/2 rounded-[22px] border border-white/12 bg-slate-950 shadow-2xl shadow-emerald-950/40 sm:h-[145px] sm:w-[280px]">
            <motion.div
              className="absolute inset-2 rounded-[16px] border border-emerald-300/20 bg-[radial-gradient(circle_at_50%_20%,rgba(77,255,181,0.25),rgba(6,8,10,0.96)_60%)]"
              animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.72] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute left-4 top-4 h-2 w-16 rounded-full bg-emerald-300/50" />
              <div className="absolute left-4 top-8 h-2 w-28 rounded-full bg-cyan-300/25" />
              <div className="absolute left-4 top-12 h-2 w-20 rounded-full bg-white/16" />
              <div className="absolute bottom-4 left-4 h-7 w-[calc(100%-2rem)] rounded-xl border border-white/10 bg-white/[0.04]" />
            </motion.div>
          </div>

          <div className="absolute bottom-[56px] left-1/2 h-24 w-28 -translate-x-1/2 sm:bottom-[66px]">
            <div className="absolute left-1/2 top-3 h-14 w-14 -translate-x-1/2 rounded-full border border-white/10 bg-[linear-gradient(160deg,#23313a,#11181d)]" />
            <div className="absolute left-[35px] top-1 h-5 w-4 rounded-full bg-slate-800" />
            <div className="absolute right-[35px] top-1 h-5 w-4 rounded-full bg-slate-800" />
            <div className="absolute left-4 top-[58px] h-20 w-20 rounded-t-[34px] border border-white/10 bg-[linear-gradient(160deg,rgba(53,214,255,0.22),rgba(77,255,181,0.10))]" />
            <div className="absolute left-[40px] top-8 h-1.5 w-1.5 rounded-full bg-emerald-200" />
            <div className="absolute right-[40px] top-8 h-1.5 w-1.5 rounded-full bg-emerald-200" />
            <div className="absolute left-1/2 top-11 h-1 w-6 -translate-x-1/2 rounded-full bg-white/30" />
          </div>

          <div className="absolute bottom-[112px] right-[86px] hidden rotate-3 rounded-xl border border-yellow-200/20 bg-yellow-200/10 px-3 py-2 text-[10px] font-semibold leading-4 text-yellow-100 shadow-xl shadow-black/20 sm:block">
            build
            <br />
            learn
            <br />
            repeat
          </div>

          <div className="absolute bottom-[150px] left-[82px] hidden h-14 w-14 rounded-full border border-white/10 bg-white/[0.04] text-center text-[10px] font-semibold leading-[3.5rem] text-slate-300 backdrop-blur sm:block">
            09:41
          </div>
        </div>
      </motion.div>
    </section>
  );
}
