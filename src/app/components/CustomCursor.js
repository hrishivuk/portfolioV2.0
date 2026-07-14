"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "summary",
  "[role='button']",
  "[data-cursor='hover']",
].join(",");

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const cursorX = useMotionValue(-80);
  const cursorY = useMotionValue(-80);
  const ringX = useSpring(cursorX, { stiffness: 420, damping: 34, mass: 0.55 });
  const ringY = useSpring(cursorY, { stiffness: 420, damping: 34, mass: 0.55 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const visibleRef = useRef(false);
  const hoveringRef = useRef(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    function syncEnabled() {
      setEnabled(finePointer.matches && !reduceMotion);
    }

    syncEnabled();
    finePointer.addEventListener("change", syncEnabled);

    return () => finePointer.removeEventListener("change", syncEnabled);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("has-custom-cursor");
      return undefined;
    }

    document.documentElement.classList.add("has-custom-cursor");

    function handlePointerMove(event) {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      const hovering = Boolean(event.target.closest(INTERACTIVE_SELECTOR));
      if (hovering !== hoveringRef.current) {
        hoveringRef.current = hovering;
        setIsHovering(hovering);
      }
    }

    function handlePointerLeave() {
      visibleRef.current = false;
      hoveringRef.current = false;
      setVisible(false);
      setIsHovering(false);
      setIsPressed(false);
    }

    function handlePointerDown() {
      setIsPressed(true);
    }

    function handlePointerUp() {
      setIsPressed(false);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [cursorX, cursorY, enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[140] mix-blend-difference"
      aria-hidden
    >
      <motion.div
        className="custom-cursor__ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: isPressed ? 0.82 : isHovering ? 1.85 : 1,
        }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="custom-cursor__dot"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: isPressed ? 0.76 : isHovering ? 1.35 : 1,
        }}
        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.svg
        className="custom-cursor__arrow"
        style={{ x: cursorX, y: cursorY }}
        viewBox="0 0 32 32"
        animate={{
          opacity: visible && !isHovering ? 1 : 0,
          scale: isPressed ? 0.9 : 1,
          rotate: isPressed ? -18 : -10,
        }}
        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
      >
        <path
          d="M25 30c-.35 0-.72-.06-1.09-.17l-.2-.07-7.36-3.48a.72.72 0 0 0-.35-.08.78.78 0 0 0-.33.07l-7.43 3.27a.66.66 0 0 1-.2.06 5.17 5.17 0 0 1-1 .15 3.6 3.6 0 0 1-3.29-5L12.68 4.2a3.59 3.59 0 0 1 6.58 0l9 20.74A3.6 3.6 0 0 1 25 30Z"
          fill="var(--text-primary)"
        />
        <path
          d="M16 3a2.59 2.59 0 0 1 2.34 1.6l9 20.74A2.59 2.59 0 0 1 25 29a5.42 5.42 0 0 1-.86-.15l-7.37-3.48a1.84 1.84 0 0 0-.77-.17 1.69 1.69 0 0 0-.73.16l-7.4 3.31a5.89 5.89 0 0 1-.79.12 2.59 2.59 0 0 1-2.37-3.62L13.6 4.6A2.58 2.58 0 0 1 16 3m0-2a4.58 4.58 0 0 0-4.24 2.8L2.84 24.33A4.58 4.58 0 0 0 7 30.75a6.08 6.08 0 0 0 1.21-.17 1.87 1.87 0 0 0 .4-.13L16 27.18l7.29 3.44a1.64 1.64 0 0 0 .39.14A6.37 6.37 0 0 0 25 31a4.59 4.59 0 0 0 4.21-6.41l-9-20.75A4.62 4.62 0 0 0 16 1Z"
          fill="var(--accent-secondary)"
        />
      </motion.svg>
    </div>
  );
}
