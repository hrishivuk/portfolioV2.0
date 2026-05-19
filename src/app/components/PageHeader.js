"use client";
import { motion } from "framer-motion";

/**
 * Compact page header — no horizontal padding (use inside PageContainer).
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  isLoaded = true,
  children,
}) {
  return (
    <header className="pt-24 sm:pt-28 pb-8 sm:pb-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {eyebrow && <p className="page-eyebrow mb-2">{eyebrow}</p>}
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-lead mt-3 max-w-2xl">{description}</p>}
        {children}
      </motion.div>
    </header>
  );
}
