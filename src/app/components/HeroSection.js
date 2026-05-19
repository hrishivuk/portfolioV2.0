"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";

const roles = [
  "UI/UX Designer",
  "Frontend Developer",
  "Android Developer",
];

const fade = { duration: 0.35, ease: "easeOut" };

export default function HeroSection({ isLoaded }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 sm:pt-28 pb-10 sm:pb-12">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={fade}
        >
          <p className="page-eyebrow mb-3">Open to frontend & UX roles · Dublin</p>

          <h1 className="leading-tight">
            <span
              className="block text-sm sm:text-base font-normal mb-1"
              style={{ color: "var(--text-secondary)" }}
            >
              Hi, I&apos;m
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Hrishikesh Varma
            </span>
          </h1>

          <p
            className="mt-2 text-lg sm:text-xl font-semibold min-h-[1.75rem]"
            style={{ color: "var(--text-secondary)" }}
          >
            <span className="role-text" key={roleIndex}>
              {roles[roleIndex]}
            </span>
          </p>

          <p className="page-lead mt-4 max-w-xl">
            I build web and mobile products where design and code meet — from a
            shipped football club app to freelance platforms and UX case studies.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-6">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium min-h-[44px] transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-primary)",
                color: "var(--text-primary)",
              }}
            >
              View my work
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent-primary)" }}
              />
            </Link>
            <Link
              href="/aboutme"
              className="inline-flex items-center px-4 py-2.5 rounded-lg border text-sm font-medium min-h-[44px] transition-opacity hover:opacity-90"
              style={{
                borderColor: "var(--border-primary)",
                color: "var(--text-primary)",
              }}
            >
              About me
            </Link>
            <a
              href="mailto:officialhrishivuk@gmail.com"
              className="inline-flex items-center px-4 py-2.5 rounded-lg border text-sm font-medium min-h-[44px] transition-opacity hover:opacity-90"
              style={{
                borderColor: "var(--border-primary)",
                color: "var(--text-secondary)",
              }}
            >
              Email me
            </a>
          </div>

          <motion.div
            className="flex items-center gap-3 sm:gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ ...fade, delay: 0.1 }}
          >
            {[
              { href: "https://www.linkedin.com/in/hrishivuk/", label: "LinkedIn" },
              { href: "https://github.com/hrishivuk", label: "GitHub" },
              { href: "https://twitter.com/hrishikesh49657", label: "Twitter" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-medium underline-offset-4 hover:underline"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Quick facts — single row */}
        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ ...fade, delay: 0.12 }}
        >
          {[
            { label: "Based in", value: "Dublin, IE" },
            { label: "Experience", value: "2+ years" },
            { label: "Studying", value: "MSc CDM & UX" },
            { label: "Stack", value: "React · RN · Figma" },
          ].map((item) => (
            <li
              key={item.label}
              className="p-3 sm:p-4 rounded-xl border"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-primary)",
              }}
            >
              <p className="page-eyebrow text-[10px] mb-1">{item.label}</p>
              <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                {item.value}
              </p>
            </li>
          ))}
        </motion.ul>
      </PageContainer>
    </section>
  );
}
