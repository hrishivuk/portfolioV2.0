"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "./components/navbar";
import PageContainer from "./components/PageContainer";
import { useTheme } from "./contexts/ThemeContext";

export default function NotFound() {
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--bg-primary)]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <div className="studio-grid absolute inset-0" />
        <div className="studio-cursor-glow absolute inset-[-10%]" />
      </div>

      <div className="relative z-10">
        <Navbar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
          showThemeArrow={showThemeArrow}
        />

        <section className="min-h-screen pt-32 flex items-center">
          <PageContainer>
            <div className="max-w-5xl">
              <p className="studio-kicker mb-5">404</p>
              <h1 className="studio-display">This page moved off the canvas.</h1>
              <p className="studio-subheading mt-7 max-w-2xl">
                The route you opened does not exist anymore. The portfolio now
                lives as one continuous page.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/#projects" className="studio-button studio-button-primary">
                  View work
                  <FiArrowUpRight aria-hidden />
                </Link>
                <Link href="/" className="studio-button studio-button-ghost">
                  Go home
                </Link>
              </div>
            </div>
          </PageContainer>
        </section>
      </div>
    </main>
  );
}
