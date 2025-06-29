"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Function to check if the link is active
  const isActive = (path) => pathname === path;

  return (
    <nav className="flex justify-between items-center bg-neutral-900 text-lg px-4 md:px-10 py-4 rounded-[36px] max-w-[1200px] my-0 mx-auto relative shadow-lg">
      {/* Left Side - Brand */}
      <div className="font-bold text-neutral-100">
        <Link href="/">hrishi.</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-neutral-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <Link
          href="/"
          className={
            isActive("/")
              ? "text-neutral-100"
              : "text-neutral-400 hover:text-neutral-100 transition-colors"
          }
        >
          home.
        </Link>
        <Link
          href="/works"
          className={
            isActive("/works")
              ? "text-neutral-100"
              : "text-neutral-400 hover:text-neutral-100 transition-colors"
          }
        >
          works.
        </Link>
        <Link
          href="/aboutme"
          className={
            isActive("/aboutme")
              ? "text-neutral-100"
              : "text-neutral-400 hover:text-neutral-100 transition-colors"
          }
        >
          about me.
        </Link>
        <Link
          href="/blog"
          className={
            isActive("/blog")
              ? "text-neutral-100"
              : "text-neutral-400 hover:text-neutral-100 transition-colors"
          }
        >
          blog.
        </Link>
        <Link
          href="/contact"
          className={
            isActive("/contact")
              ? "text-neutral-100"
              : "text-neutral-400 hover:text-neutral-100 transition-colors"
          }
        >
          contact.
        </Link>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-neutral-900 rounded-[36px] p-4 md:hidden shadow-lg"
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={
                isActive("/")
                  ? "text-neutral-100"
                  : "text-neutral-400 hover:text-neutral-100 transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              home.
            </Link>
            <Link
              href="/works"
              className={
                isActive("/works")
                  ? "text-neutral-100"
                  : "text-neutral-400 hover:text-neutral-100 transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              works.
            </Link>
            <Link
              href="/aboutme"
              className={
                isActive("/aboutme")
                  ? "text-neutral-100"
                  : "text-neutral-400 hover:text-neutral-100 transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              about me.
            </Link>
            <Link
              href="/blog"
              className={
                isActive("/blog")
                  ? "text-neutral-100"
                  : "text-neutral-400 hover:text-neutral-100 transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              blog.
            </Link>
            <Link
              href="/contact"
              className={
                isActive("/contact")
                  ? "text-neutral-100"
                  : "text-neutral-400 hover:text-neutral-100 transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              contact.
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
