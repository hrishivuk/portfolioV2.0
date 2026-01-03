"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLayout } from "../contexts/LayoutContext";
import { useTheme } from "../contexts/ThemeContext";
import Navbar from "../components/navbar";
import ScrollIndicator from "../components/ScrollIndicator";

export default function AboutMePage() {
  const { maxWidth } = useLayout();
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Initialize loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Show scroll indicator only near the top hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setShowScrollIndicator(scrollY < heroHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="min-h-screen relative"
      style={{
        backgroundColor:
          currentTheme === "ghostMouse" ? "transparent" : "var(--bg-primary)",
        zIndex: 1,
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />

        <ScrollIndicator
          showScrollIndicator={showScrollIndicator}
          isLoaded={isLoaded}
        />

        {/* Hero Section */}
        <section
          className="h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative"
          style={{
            backgroundColor:
              currentTheme === "ghostMouse"
                ? "rgba(10, 10, 10, 0.3)"
                : "transparent",
          }}
        >
          <div className="mx-auto relative z-10" style={{ maxWidth }}>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight mb-8"
                style={{ color: "var(--text-primary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              >
                ABOUT ME
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                I'm a creative thinker who finds solutions to problems people
                usually don't see. I understand how humans work with things and
                create better ways for them to understand.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* My Story Section */}
        <section
          className="py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative"
          style={{
            backgroundColor:
              currentTheme === "ghostMouse"
                ? "rgba(10, 10, 10, 0.3)"
                : "transparent",
          }}
        >
          <div className="mx-auto relative z-10" style={{ maxWidth }}>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              {/* Left - Image Placeholder */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              >
                <div
                  className="w-full h-96 lg:h-[500px] rounded-2xl border"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                  }}
                >
                  <div className="flex items-center justify-center h-full">
                    <p
                      className="text-lg font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      [Your Photo Here]
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right - Story Content */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={
                  isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                }
                transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
              >
                <h2
                  className="text-4xl lg:text-5xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  My Story
                </h2>

                <div className="space-y-4">
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    I'm not your regular developer. I see things differently and
                    approach problems from angles that others might miss. My
                    journey started with curiosity about how things work and
                    evolved into a passion for making them work better.
                  </p>

                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Currently pursuing my MSc in Creative Digital Media and UX
                    at Technological University Dublin, I'm expanding my
                    knowledge in emerging technologies and design methodologies.
                    My goal is to build something that everyone will want and
                    use to make life better.
                  </p>

                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    I believe in the power of human-centered design and creative
                    problem-solving. Every project is an opportunity to create
                    something meaningful that resonates with people on a deeper
                    level.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section
          className="py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative"
          style={{
            backgroundColor:
              currentTheme === "ghostMouse"
                ? "rgba(10, 10, 10, 0.3)"
                : "transparent",
          }}
        >
          <div className="mx-auto relative z-10" style={{ maxWidth }}>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            >
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Skills & Expertise
              </h2>
              <p
                className="text-xl max-w-3xl mx-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                A blend of frontend development, creative media, and UX thinking
                that helps me bring ideas to life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend Development */}
              <motion.div
                className="p-8 rounded-2xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center"
                  style={{ backgroundColor: "var(--bg-primary)" }}
                >
                  {/* Simple browser/window icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    style={{ color: "var(--accent-primary)" }}
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      ry="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="3"
                      y1="9"
                      x2="21"
                      y2="9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="7" cy="7" r="0.9" fill="currentColor" />
                    <circle cx="10" cy="7" r="0.9" fill="currentColor" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Frontend Development
                </h3>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Building responsive, modern web interfaces with a focus on
                  clean code, performance, and user-friendly interactions.
                </p>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Angular",
                    "Vue.js",
                    "Next.js",
                    "JavaScript",
                    "TypeScript",
                    "Tailwind CSS",
                    "React Native",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium border"
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
              </motion.div>

              {/* UX & Interaction Design */}
              <motion.div
                className="p-8 rounded-2xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center"
                  style={{ backgroundColor: "var(--bg-primary)" }}
                >
                  {/* Cursor / wireframe icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    style={{ color: "var(--accent-primary)" }}
                    aria-hidden="true"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="10"
                      height="8"
                      rx="1.5"
                      ry="1.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M14 14L18 20L19.5 17.5L22 17"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  UX & Interaction Design
                </h3>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Designing intuitive, user-centered experiences backed by
                  research, prototyping, and usability principles.
                </p>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  Skills:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Wireframing",
                    "User Research",
                    "Prototyping",
                    "UI Design",
                    "Usability Testing",
                    "Information Architecture",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium border"
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
              </motion.div>

              {/* Android Development */}
              <motion.div
                className="p-8 rounded-2xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center"
                  style={{ backgroundColor: "var(--bg-primary)" }}
                >
                  {/* Mobile / phone icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    style={{ color: "var(--accent-primary)" }}
                    aria-hidden="true"
                  >
                    <rect
                      x="7"
                      y="3"
                      width="10"
                      height="18"
                      rx="2"
                      ry="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="17.5" r="1" fill="currentColor" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Android Development
                </h3>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Developing Android applications with a smooth UI and
                  consistent user flow using modern frameworks.
                </p>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "JavaScript",
                    "State Management",
                    "Mobile UI/UX",
                    "Firebase",
                    "Firestore",
                    "Authentication",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium border"
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
              </motion.div>
              {/* Creative Digital Media */}
              <motion.div
                className="p-8 rounded-2xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center"
                  style={{ backgroundColor: "var(--bg-primary)" }}
                >
                  {/* Play / media icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    style={{ color: "var(--accent-primary)" }}
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polygon points="10,9 16,12 10,15" fill="currentColor" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Creative Digital Media
                </h3>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Exploring interactive media through VR, AR, game design, and
                  digital storytelling as part of my MSc in Creative Digital
                  Media & UX.
                </p>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  Areas of Practice:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "VR/AR",
                    "Game Prototyping",
                    "Motion & Interaction Design",
                    "Digital Storytelling",
                    "Creative Production",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium border"
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Extra bottom spacing for smoother scroll */}
        <div className="h-24 md:h-32 lg:h-40" />
      </div>
    </main>
  );
}
