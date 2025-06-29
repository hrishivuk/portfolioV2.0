"use client";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import ProjectCardWithPopup from "../components/projectCard";
import Brightspace from "../../../public/images/brightspace.png";
import flexsave from "../../../public/images/flexsave.png";
import FigmaEmbed from "../components/figmaEmbed";

export default function Works() {
  const projects = [
    {
      name: "Task Management Dashboard",
      image: "/images/task-dashboard.png",
      category: "Development",
      description:
        "A comprehensive task management solution built with React and Node.js",
    },
    {
      name: "E-commerce Mobile App",
      image: "/images/ecommerce-mobile.png",
      category: "Design & Development",
      description:
        "Complete e-commerce solution with React Native and modern UI/UX",
    },
    {
      name: "Restaurant Booking System",
      image: "/images/restaurant-booking.png",
      category: "Full Stack",
      description: "Real-time table booking system with payment integration",
    },
    {
      name: "Personal Finance Tracker",
      image: "/images/finance-tracker.png",
      category: "Web Application",
      description:
        "Track expenses and budgets with interactive charts and analytics",
    },
  ];

  const categories = ["All", "Design", "Development", "Full Stack"];

  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-4 mt-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-neutral-100 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            My Work
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            A collection of projects showcasing my skills in web development,
            UI/UX design, and creative problem-solving.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-700 text-neutral-100 hover:from-primary-600 hover:to-accent-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Project - Brightspace */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <motion.div
            className="bg-neutral-900 rounded-[36px] overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  className="flex items-center space-x-2 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-neutral-400 text-sm">Design</span>
                </motion.div>
                <motion.h2
                  className="text-2xl lg:text-3xl font-bold text-neutral-100 dark:text-neutral-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  Brightspace Pulse - Growth Section
                </motion.h2>
                <motion.p
                  className="text-neutral-300 dark:text-neutral-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  Enhancing the Brightspace Pulse app with a new Growth section
                  for career development, bridging the gap between academic
                  learning and professional growth.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <div className="flex items-center space-x-4 text-sm text-neutral-400">
                    <span>UX/UI Design</span>
                    <span>•</span>
                    <span>Figma</span>
                  </div>
                  <motion.button
                    className="bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                </motion.div>
              </div>
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 lg:rounded-none lg:rounded-r-[36px]">
                <div className="absolute inset-0 bg-black/5"></div>
                <motion.div
                  className="relative h-full flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.0 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-8xl mb-4"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        transition: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      🎨
                    </motion.div>
                    <div className="flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-white/80 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 2.4 + 0.15 * index,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-neutral-800 rounded-[36px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div
                className={`relative h-48 flex items-center justify-center ${
                  project.category === "Design"
                    ? "bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500"
                    : project.category === "Development"
                    ? "bg-gradient-to-br from-accent-500 via-accent-600 to-success-500"
                    : "bg-gradient-to-br from-success-500 via-primary-500 to-accent-500"
                }`}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <motion.div
                  className="text-5xl relative z-10"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  {project.category === "Design"
                    ? "🎨"
                    : project.category === "Development"
                    ? "💻"
                    : "🚀"}
                </motion.div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <motion.span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === "Design"
                        ? "bg-primary-100 text-primary-700"
                        : project.category === "Development"
                        ? "bg-accent-100 text-accent-700"
                        : "bg-success-100 text-success-700"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.category}
                  </motion.span>
                </div>

                <h3 className="text-lg font-bold text-neutral-100 mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-neutral-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-medium">
                    Modern Stack
                  </span>
                  <motion.span
                    className="text-primary-400 font-medium cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    View Details →
                  </motion.span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="bg-neutral-800 rounded-[36px] p-8 mb-12 shadow-lg"
        >
          <motion.h3
            className="text-2xl font-bold text-neutral-100 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.7 }}
          >
            What People Say
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="bg-neutral-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 3.9 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  JD
                </motion.div>
                <div className="ml-3">
                  <h4 className="font-semibold text-neutral-100">John Doe</h4>
                  <p className="text-neutral-400 text-sm">Product Manager</p>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                "Hrishikesh delivered an exceptional web application that
                exceeded our expectations. His attention to detail and creative
                problem-solving skills are outstanding."
              </p>
            </motion.div>

            <motion.div
              className="bg-neutral-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  SM
                </motion.div>
                <div className="ml-3">
                  <h4 className="font-semibold text-neutral-100">
                    Sarah Miller
                  </h4>
                  <p className="text-neutral-400 text-sm">Startup Founder</p>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                "Working with Hrishi was a pleasure. He brought our vision to
                life with a beautiful, user-friendly interface that our
                customers love."
              </p>
            </motion.div>

            <motion.div
              className="bg-neutral-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 4.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-success-500 to-success-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  AR
                </motion.div>
                <div className="ml-3">
                  <h4 className="font-semibold text-neutral-100">
                    Alex Rodriguez
                  </h4>
                  <p className="text-neutral-400 text-sm">Tech Lead</p>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                "Hrishikesh's technical expertise and design sense make him a
                valuable asset to any project. Highly recommended for complex
                web applications."
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Featured Project - FlexSave */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.5 }}
          className="mb-16"
        >
          <motion.div
            className="bg-neutral-900 dark:bg-neutral-100 rounded-[36px] overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-accent-500 via-accent-600 to-success-500 lg:rounded-none lg:rounded-l-[36px]">
                <div className="absolute inset-0 bg-black/5 dark:bg-white/5"></div>
                <motion.div
                  className="relative h-full flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 4.7 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-8xl mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      💰
                    </motion.div>
                    <div className="flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-white/80 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  className="flex items-center space-x-2 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 4.9 }}
                >
                  <span className="bg-gradient-to-r from-accent-600 to-success-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-neutral-400 dark:text-neutral-600 text-sm">
                    UX/UI Design
                  </span>
                </motion.div>
                <motion.h2
                  className="text-2xl lg:text-3xl font-bold text-neutral-100 dark:text-neutral-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 5.1 }}
                >
                  Flex Save - Coupon App
                </motion.h2>
                <motion.p
                  className="text-neutral-300 dark:text-neutral-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 5.3 }}
                >
                  A modern coupon-swiping app inspired by dating apps, designed
                  for Gen Z with swipe features and digital wallet
                  functionality.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 5.5 }}
                >
                  <div className="flex items-center space-x-4 text-sm text-neutral-400 dark:text-neutral-600">
                    <span>Mobile App</span>
                    <span>•</span>
                    <span>Figma Prototype</span>
                  </div>
                  <motion.button
                    className="bg-gradient-to-r from-success-600 to-success-700 hover:from-success-700 hover:to-success-800 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Prototype
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
