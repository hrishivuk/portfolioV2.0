"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLayout } from "../contexts/LayoutContext";

const defaultSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({
  activeSection = "home",
  sections = defaultSections,
  onNavigate,
}) {
  const { maxWidth } = useLayout();
  const [isOpen, setIsOpen] = useState(false);

  function navigate(id) {
    setIsOpen(false);

    if (onNavigate) {
      onNavigate(id);
      return;
    }

    const node = document.getElementById(id);
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-4 z-50 px-3 sm:px-4">
        <nav
          className="mx-auto flex min-h-[56px] items-center justify-between rounded-full border px-4 backdrop-blur-xl sm:px-5"
          style={{
            maxWidth,
            backgroundColor:
              "color-mix(in srgb, var(--bg-primary) 72%, transparent)",
            borderColor: "var(--border-primary)",
            color: "var(--text-primary)",
          }}
          aria-label="Primary navigation"
        >
          <button
            type="button"
            className="text-sm font-semibold tracking-normal text-[var(--text-primary)]"
            onClick={() => navigate("home")}
          >
            hrishi.
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {sections.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  color:
                    activeSection === item.id
                      ? "var(--text-primary)"
                      : "var(--text-muted)",
                  backgroundColor:
                    activeSection === item.id
                      ? "rgba(255,255,255,0.06)"
                      : "transparent",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border transition hover:border-cyan-200/40 hover:text-white"
            style={{
              borderColor: "var(--border-primary)",
              color: "var(--text-primary)",
            }}
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#050608]/96 px-4 pt-24 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="mx-auto flex max-w-xl flex-col gap-3" aria-label="Menu navigation">
              {sections.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => navigate(item.id)}
                  className="group flex min-h-[68px] items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-5 text-left text-2xl font-black text-white transition hover:border-cyan-200/30"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                >
                  <span>{item.label}</span>
                  <span
                    className={`font-mono text-sm ${
                      activeSection === item.id
                        ? "text-[var(--accent-secondary)]"
                        : "text-cyan-100/36"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </motion.button>
              ))}
              <a
                href="mailto:officialhrishivuk@gmail.com"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex min-h-[56px] items-center justify-center rounded-full border border-cyan-200/25 text-sm font-bold text-white"
              >
                Let&apos;s talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
