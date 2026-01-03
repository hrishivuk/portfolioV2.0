"use client";
import { motion } from "framer-motion";
import { useLayout } from "../contexts/LayoutContext";

export default function AboutSection({ isLoaded }) {
  const { maxWidth } = useLayout();

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 snap-start">
      <div className="mx-auto" style={{ maxWidth }}>
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Side - Title and CTA */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.h2
              className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight mb-8"
              style={{ color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
            >
              ABOUT ME
            </motion.h2>

            <motion.button
              className="inline-flex items-center space-x-3 px-6 py-4 rounded-lg border transition-all duration-300 hover:scale-105 self-start"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-primary)",
                color: "var(--text-primary)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2.2, duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-sm font-medium">Download CV</span>
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--accent-primary)" }}
              />
            </motion.button>
          </div>

          {/* Right Side - About Content */}
          <div className="lg:w-1/2">
            {/* Main About Card */}
            <motion.div
              className="p-8 lg:p-10 rounded-2xl border mb-8 transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-primary)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2.4, duration: 0.6, ease: "easeOut" }}
            >
              <span
                className="text-sm font-medium mb-4 block"
                style={{ color: "var(--text-secondary)" }}
              >
                [01]
              </span>
              <h3
                className="text-2xl lg:text-3xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Creative Thinker
              </h3>
              <p
                className="text-base lg:text-lg leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                I&apos;m a creative thinker who finds solutions to problems people
                usually don&apos;t see. I understand how humans work with things and
                create better ways for them to understand. Not your regular
                developer – I&apos;m building something everyone will want and use to
                make life better.
              </p>
              <div className="flex flex-wrap gap-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                  }}
                >
                  Frontend Dev
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                  }}
                >
                  Android Dev
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                  }}
                >
                  UX Design
                </span>
              </div>
            </motion.div>

            {/* Two Column Grid for Skills and Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current Focus */}
              <motion.div
                className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 2.6, duration: 0.6, ease: "easeOut" }}
              >
                <span
                  className="text-sm font-medium mb-3 block"
                  style={{ color: "var(--text-secondary)" }}
                >
                  [02]
                </span>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Current Focus
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Frontend developer focusing on Android development for my
                  final university project. Passionate about design and planning
                  to dive deeper into UX soon.
                </p>
              </motion.div>

              {/* Academic Journey */}
              <motion.div
                className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 2.8, duration: 0.6, ease: "easeOut" }}
              >
                <span
                  className="text-sm font-medium mb-3 block"
                  style={{ color: "var(--text-secondary)" }}
                >
                  [03]
                </span>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Academic Journey
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Pursuing MSc in Creative Digital Media and UX at Technological
                  University Dublin (Sept 2024 - Jan 2026), mastering the
                  intersection of technology and human-centered design.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
