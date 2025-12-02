"use client";
import { motion } from "framer-motion";
import { useLayout } from "../contexts/LayoutContext";

export default function FeaturedWorks({ isLoaded }) {
  const { maxWidth } = useLayout();

  return (
    <section
      className="h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="mx-auto" style={{ maxWidth }}>
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Side - Title and CTA */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.h2
              className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight mb-8"
              style={{ color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
            >
              FEATURED WORKS
            </motion.h2>

            <motion.button
              className="inline-flex items-center space-x-3 px-6 py-4 rounded-lg border transition-all duration-300 hover:scale-105 self-start"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-primary)",
                color: "var(--text-primary)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-sm font-medium">Get in Touch</span>
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--accent-primary)" }}
              />
            </motion.button>
          </div>

          {/* Right Side - Works Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Work 1 */}
              <motion.div
                className="p-6 rounded-2xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 2.2, duration: 0.6, ease: "easeOut" }}
              >
                <span
                  className="text-sm font-medium mb-3 block"
                  style={{ color: "var(--text-secondary)" }}
                >
                  [01]
                </span>
                <h3
                  className="text-xl lg:text-2xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  3D Animation & Motion Design
                </h3>
                <p
                  className="text-sm lg:text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  High-quality animations for products, effects, branding, and
                  storytelling.
                </p>
              </motion.div>

              {/* Work 2 */}
              <motion.div
                className="p-6 rounded-2xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 2.4, duration: 0.6, ease: "easeOut" }}
              >
                <span
                  className="text-sm font-medium mb-3 block"
                  style={{ color: "var(--text-secondary)" }}
                >
                  [02]
                </span>
                <h3
                  className="text-xl lg:text-2xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  3D Visualization & Rendering
                </h3>
                <p
                  className="text-sm lg:text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Realistic renders for products, environments, and concept
                  designs.
                </p>
              </motion.div>

              {/* Work 3 */}
              <motion.div
                className="p-6 rounded-2xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 2.6, duration: 0.6, ease: "easeOut" }}
              >
                <span
                  className="text-sm font-medium mb-3 block"
                  style={{ color: "var(--text-secondary)" }}
                >
                  [03]
                </span>
                <h3
                  className="text-xl lg:text-2xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Visual Design
                </h3>
                <p
                  className="text-sm lg:text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Creative assets for UI design, Branding and promotional
                  content.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
