"use client";
import { useLayout } from "../contexts/LayoutContext";

/**
 * Matches the navbar width, centering, and horizontal padding exactly.
 */
export function pageContainerClassName(extra = "") {
  return [
    "w-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)]",
    "mx-auto px-3 sm:px-4 md:px-6 lg:px-8",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

export default function PageContainer({ children, className = "", style = {} }) {
  const { maxWidth } = useLayout();

  return (
    <div
      className={pageContainerClassName(className)}
      style={{ maxWidth, ...style }}
    >
      {children}
    </div>
  );
}
