"use client";

import Image from "next/image";
import { motion } from "motion/react";

export const skills = [
  {
    group: "UX/UI Design",
    items: [
      { name: "Figma", icon: "/images/TechIcons/Figma.png" },
      { name: "User Flows", fallback: "UF" },
      { name: "Wireframing", fallback: "WF" },
      { name: "Prototyping", fallback: "PT" },
      { name: "Interaction Design", fallback: "ID" },
      { name: "Design Systems", fallback: "DS" },
      { name: "Accessibility", fallback: "A11Y" },
    ],
  },
  {
    group: "UX Research",
    items: [
      { name: "User Research", fallback: "UR" },
      { name: "Competitor Analysis", fallback: "CA" },
      { name: "Usability Testing", fallback: "UT" },
      { name: "Research Synthesis", fallback: "RS" },
      { name: "Problem Definition", fallback: "PD" },
    ],
  },
  {
    group: "Frontend Development",
    items: [
      { name: "JavaScript", icon: "/images/TechIcons/JavaScript.png" },
      { name: "TypeScript", icon: "/images/TechIcons/TypeScript.png" },
      { name: "React", icon: "/images/TechIcons/React.png" },
      { name: "Next.js", icon: "/images/TechIcons/Next.js.png" },
      { name: "Vue.js", icon: "/images/TechIcons/Vue.js.png" },
      { name: "Responsive Development", fallback: "RD" },
    ],
  },
  {
    group: "Tools & Technology",
    items: [
      { name: "Firebase", icon: "/images/TechIcons/Firebase.png" },
      { name: "Git", icon: "/images/TechIcons/Git.png" },
      { name: "GitHub", icon: "/images/TechIcons/GitHub.png" },
      { name: "Jira", icon: "/images/TechIcons/Jira.png" },
    ],
  },
];

const groupReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.065, delayChildren: 0.02 },
  },
};

const itemReveal = {
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

export default function SkillsStack() {
  return (
    <div className="space-y-12">
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
        <span className="text-2xl leading-none text-[var(--accent-secondary)]">*</span>
        Skills &amp; capabilities
      </p>

      {skills.map((group) => (
        <motion.div
          key={group.group}
          className="grid gap-5 lg:grid-cols-[0.28fr_0.72fr] lg:items-start"
          variants={groupReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.42, margin: "-8% 0px -12% 0px" }}
        >
          <motion.h3
            variants={itemReveal}
            className="text-[clamp(1.6rem,2.9vw,2.65rem)] font-black uppercase leading-none tracking-normal text-white/70"
          >
            {group.group}
          </motion.h3>

          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
            {group.items.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemReveal}
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
