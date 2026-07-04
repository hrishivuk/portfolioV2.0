"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useLayout } from "../contexts/LayoutContext";

const navItems = [
  { href: "/works", label: "Work" },
  { href: "/aboutme", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { maxWidth } = useLayout();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/works") return pathname.startsWith("/works");
    if (href === "/#process") return pathname === "/" && hash === "#process";
    return pathname === href;
  };

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
          <Link
            href="/"
            className="text-sm font-semibold tracking-normal text-[var(--text-primary)]"
            onClick={() => setIsOpen(false)}
          >
            hrishi.
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  color: isActive(item.href)
                    ? "var(--text-primary)"
                    : "var(--text-muted)",
                  backgroundColor:
                    isActive(item.href)
                      ? "rgba(255,255,255,0.06)"
                      : "transparent",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href="mailto:officialhrishivuk@gmail.com"
            className="hidden min-h-[40px] items-center rounded-full border px-4 text-sm font-semibold transition-transform hover:-translate-y-0.5 md:inline-flex"
            style={{
              borderColor: "var(--border-secondary)",
              color: "var(--text-primary)",
            }}
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border md:hidden"
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
            className="fixed inset-0 z-40 bg-[var(--bg-primary)]/96 px-4 pt-24 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="mx-auto flex max-w-sm flex-col gap-3" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex min-h-[64px] items-center justify-between rounded-2xl border px-5 text-xl font-semibold"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      borderColor: "var(--border-primary)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.label}
                    <span className="text-sm text-[var(--text-muted)]">
                      0{index + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <a
                href="mailto:officialhrishivuk@gmail.com"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex min-h-[56px] items-center justify-center rounded-full border text-sm font-semibold"
                style={{
                  borderColor: "var(--border-secondary)",
                  color: "var(--text-primary)",
                }}
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
