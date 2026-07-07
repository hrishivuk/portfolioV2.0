"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export default function RouteCurtainReveal() {
  const reduceMotion = useReducedMotion();
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    if (sessionStorage.getItem("studio-route-curtain") !== "project") return;

    sessionStorage.removeItem("studio-route-curtain");
    setShowCurtain(true);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {showCurtain ? (
        <motion.div
          className="fixed inset-0 z-[120] overflow-hidden bg-[#050608]"
          initial={{ clipPath: "inset(0 0% 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 100%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.62, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => setShowCurtain(false)}
          aria-hidden
        >
          <div className="absolute inset-0 studio-grid opacity-55" />
          <div className="absolute inset-0 spider-noise opacity-30" />
          <motion.div
            className="absolute bottom-0 top-0 w-px bg-[var(--accent-secondary)] shadow-[0_0_28px_rgba(77,255,181,0.75)]"
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 0.62, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
