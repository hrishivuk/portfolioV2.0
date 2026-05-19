"use client";

/** Vertical section spacing only — horizontal alignment comes from PageContainer */
export default function PageSection({
  children,
  className = "",
  ghostOverlay = false,
}) {
  return (
    <section
      className={`py-8 sm:py-10 md:py-12 relative ${className}`}
      style={{
        backgroundColor: ghostOverlay ? "rgba(10, 10, 10, 0.3)" : "transparent",
      }}
    >
      {children}
    </section>
  );
}
