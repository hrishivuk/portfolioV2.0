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
      date: "Dec 2025",
      period: "Completed",
      company: "Technological University Dublin",
      role: "MSc Creative Digital Media & UX",
      type: "Education",
      description:
        "Started my MSc in Sept 2024. Began my final major project in June 2025 and completed it in Dec 2025, focusing on the intersection of creative media, UX, and technology.",
    },
    {
      date: "Jan 2025",
      period: "2025",
      company: "Freelance – Dublin, Ireland",
      role: "UI & UX Designer / Developer (Contract)",
      type: "Work",
      description:
        "Working on freelance contract projects in Dublin, designing and building UI and UX for digital products alongside my masters.",
    },
    {
      date: "Sept 2024",
      period: "2024",
      company: "Technological University Dublin",
      role: "Started MSc Creative Digital Media & UX",
      type: "Education",
      description:
        "Moved to Dublin and began my MSc in Creative Digital Media and UX at TUD, focusing on human-centered design and creative technologies.",
    },
    {
      date: "Aug 2024",
      period: "2024",
      company: "Freelance – Kochi, India",
      role: "Frontend Developer & Designer",
      type: "Work",
      description:
        "Started freelancing in Kochi after Experion, collaborating with clients to design and develop frontend experiences.",
    },
    {
      date: "May 2023 – Aug 2024",
      period: "2023–2024",
      company: "Experion Technologies, Kerala, India",
      role: "Associate Frontend Developer",
      type: "Work",
      description:
        "Joined Experion full time as an Associate Frontend Developer, building production-ready interfaces and refining my skills in modern frontend technologies.",
    },
    {
      date: "Dec 2022 – May 2023",
      period: "2022–2023",
      company: "Experion Technologies, Kerala, India",
      role: "Frontend Developer Intern",
      type: "Work",
      description:
        "Started my industry journey as an intern at Experion, working with real-world projects and learning professional development workflows.",
    },
    {
      date: "2022",
      period: "Graduated",
      company: "B.Tech Computer Science Engineering",
      role: "Undergraduate Studies",
      type: "Education",
      description:
        "Completed my B.Tech in Computer Science Engineering, building a strong foundation in programming, problem-solving, and software engineering.",
    },
  ];

  // Update active index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // Use rounded progress so the last item reliably becomes active
      const maxIndex = timelineData.length - 1;
      const newIndex = Math.min(
        maxIndex,
        Math.max(0, Math.round(latest * maxIndex))
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
        backgroundColor:
          currentTheme === "ghostMouse"
            ? "rgba(10, 10, 10, 0.3)"
            : "transparent",
        zIndex: 10,
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
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
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
                          className={`text-[10px] sm:text-xs md:text-sm font-medium px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full ${
                            item.type === "Education"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {item.type}
                        </span>
                        <h3
                          className={`text-lg sm:text-xl md:text-2xl font-bold mt-3 mb-2 ${
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
                          className="text-sm sm:text-base md:text-lg font-medium mb-2"
                          style={{
                            color: isActive
                              ? "var(--accent-primary)"
                              : "var(--text-muted)",
                          }}
                        >
                          {item.role}
                        </p>
                        <p
                          className="text-xs sm:text-sm leading-relaxed"
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
                      className="text-2xl sm:text-3xl font-bold"
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
                      className="text-xs sm:text-sm font-medium mt-2"
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
