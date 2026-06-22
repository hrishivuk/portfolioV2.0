"use client";

/**
 * Shared ambient layer: soft mesh gradients + subtle grain.
 * Pure CSS — no WebGL. Respects prefers-reduced-motion.
 */
export default function AmbientBackground() {
  return (
    <div
      className="ambient-background fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <div className="ambient-mesh" />
      <div className="ambient-grain" />
    </div>
  );
}
