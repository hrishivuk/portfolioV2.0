"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export default function TimelineSection() {
  const { currentTheme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const timelineData = [
    {
      date: "Sept 2024",
      period: "Current",
      company: "Technological University Dublin",
      role: "MSc Creative Digital Media & UX",
      type: "Education",
      description:
        "Mastering the intersection of technology and human-centered design. Exploring emerging technologies and design methodologies.",
    },
    {
      date: "Jan 2024",
      period: "Recent",
      company: "Freelance Projects",
      role: "Frontend Developer",
      type: "Work",
      description:
        "Building responsive web applications and mobile interfaces for various clients using React and modern web technologies.",
    },
    {
      date: "2023",
      period: "Past",
      company: "Personal Projects",
      role: "Android Developer",
      type: "Work",
      description:
        "Developing mobile applications and exploring Android development for my final university project.",
    },
    {
      date: "2022",
      period: "Past",
      company: "University Studies",
      role: "Computer Science Student",
      type: "Education",
      description:
        "Building foundation in computer science, programming fundamentals, and software development principles.",
    },
    {
      date: "2021",
      period: "Past",
      company: "Learning Journey",
      role: "Self-Taught Developer",
      type: "Education",
      description:
        "Started learning web development, exploring HTML, CSS, JavaScript, and discovering my passion for creating digital experiences.",
    },
  ];

  // Update active index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const newIndex = Math.min(
        Math.floor(latest * timelineData.length),
        timelineData.length - 1
      );
      setActiveIndex(newIndex);
    });

    return unsubscribe;
  }, [scrollYProgress, timelineData.length]);

  return (
    <section
      ref={containerRef}
      className="py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative"
      style={{ 
        minHeight: "200vh",
        backgroundColor: currentTheme === "ghostMouse" ? "rgba(10, 10, 10, 0.3)" : "transparent",
        zIndex: 10
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            My Journey
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            A timeline of my education and professional development
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
            <motion.div
              className="w-full"
              style={{
                background: `linear-gradient(to bottom, 
                  var(--accent-primary) 0%, 
                  var(--accent-primary) ${
                    (activeIndex / (timelineData.length - 1)) * 100
                  }%, 
                  var(--text-muted) ${
                    (activeIndex / (timelineData.length - 1)) * 100
                  }%, 
                  var(--text-muted) 100%)`,
              }}
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-32">
            {timelineData.map((item, index) => {
              const isActive = index === activeIndex;
              const isPast = index > activeIndex;
              const isFuture = index < activeIndex;

              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {/* Content */}
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                    }`}
                  >
                    <motion.div
                      className={`p-6 rounded-2xl border transition-all duration-500 ${
                        isActive
                          ? "scale-105 shadow-lg"
                          : isPast
                          ? "opacity-60"
                          : "opacity-80"
                      }`}
                      style={{
                        backgroundColor: isActive
                          ? "var(--bg-secondary)"
                          : "var(--bg-primary)",
                        borderColor: isActive
                          ? "var(--accent-primary)"
                          : "var(--border-primary)",
                      }}
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        opacity: isActive ? 1 : isPast ? 0.6 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`${
                          index % 2 === 0 ? "text-right" : "text-left"
                        }`}
                      >
                        <span
                          className={`text-sm font-medium px-3 py-1 rounded-full ${
                            item.type === "Education"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {item.type}
                        </span>
                        <h3
                          className={`text-2xl font-bold mt-3 mb-2 ${
                            isActive ? "text-white" : "text-gray-300"
                          }`}
                          style={{
                            color: isActive
                              ? "var(--text-primary)"
                              : "var(--text-secondary)",
                          }}
                        >
                          {item.company}
                        </h3>
                        <p
                          className="text-lg font-medium mb-2"
                          style={{
                            color: isActive
                              ? "var(--accent-primary)"
                              : "var(--text-muted)",
                          }}
                        >
                          {item.role}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                        isActive
                          ? "bg-white border-white scale-125"
                          : isPast
                          ? "bg-gray-600 border-gray-600"
                          : "bg-gray-400 border-gray-400"
                      }`}
                      animate={{
                        scale: isActive ? 1.25 : 1,
                        backgroundColor: isActive
                          ? "var(--text-primary)"
                          : isPast
                          ? "var(--text-muted)"
                          : "var(--text-secondary)",
                        borderColor: isActive
                          ? "var(--text-primary)"
                          : isPast
                          ? "var(--text-muted)"
                          : "var(--text-secondary)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Date */}
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pl-12 text-left" : "pr-12 text-right"
                    }`}
                  >
                    <motion.div
                      className="text-3xl font-bold"
                      style={{
                        color: isActive
                          ? "var(--text-primary)"
                          : isPast
                          ? "var(--text-muted)"
                          : "var(--text-secondary)",
                      }}
                      animate={{
                        color: isActive
                          ? "var(--text-primary)"
                          : isPast
                          ? "var(--text-muted)"
                          : "var(--text-secondary)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.date}
                    </motion.div>
                    <motion.div
                      className="text-sm font-medium mt-2"
                      style={{
                        color: isActive
                          ? "var(--accent-primary)"
                          : "var(--text-muted)",
                      }}
                      animate={{
                        color: isActive
                          ? "var(--accent-primary)"
                          : "var(--text-muted)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.period}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
