"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TRANSITION_DURATION = 0.58;

export default function ProjectTransitionLink({
  href,
  className = "",
  children,
  label = "Opening case study",
}) {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [isLeaving, setIsLeaving] = useState(false);

  function handleClick(event) {
    if (
      reduceMotion ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    setIsLeaving(true);
    sessionStorage.setItem("studio-route-curtain", "project");

    window.setTimeout(() => {
      router.push(href);
    }, TRANSITION_DURATION * 1000 - 90);
  }

  return (
    <>
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>

      <AnimatePresence>
        {isLeaving ? (
          <motion.div
            className="fixed inset-0 z-[120] overflow-hidden bg-[#050608]"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            exit={{ opacity: 0 }}
            transition={{
              duration: TRANSITION_DURATION,
              ease: [0.76, 0, 0.24, 1],
            }}
            aria-live="polite"
            aria-label={label}
          >
            <div className="absolute inset-0 studio-grid opacity-55" />
            <div className="absolute inset-0 spider-noise opacity-30" />
            <motion.div
              className="absolute bottom-0 top-0 w-px bg-[var(--accent-secondary)] shadow-[0_0_28px_rgba(77,255,181,0.75)]"
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{
                duration: TRANSITION_DURATION,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
            <div className="absolute inset-x-6 top-1/2 flex -translate-y-1/2 items-center justify-between gap-8 text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/54 sm:inset-x-12">
              <span>Case study</span>
              <span className="hidden text-[var(--accent-secondary)] sm:block">
                Loading
              </span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
