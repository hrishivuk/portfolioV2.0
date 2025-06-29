"use client";
import { motion } from "framer-motion";
import GridItem from "./components/gridItem";
import Navbar from "./components/navbar";

import Weather from "./components/weather";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-4 mt-10">
        {/* Main Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-neutral-900 rounded-[36px] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-neutral-400 text-sm">Portfolio</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Hi, I'm Hrishikesh Varma
                </h1>

                {/* Fixed height container for typewriter to prevent jumping */}
                <div className="h-[60px] mb-6 flex items-center">
                  <div className="text-2xl lg:text-3xl font-semibold text-primary-400">
                    <Typewriter
                      options={{
                        strings: [
                          "Frontend Developer",
                          "UI/UX Designer",
                          "Creative Thinker",
                        ],
                        autoStart: true,
                        loop: true,
                        cursor: "_",
                        delay: 100,
                        deleteSpeed: 50,
                      }}
                    />
                  </div>
                </div>

                <p className="text-neutral-300 mb-8 leading-relaxed text-lg">
                  Passionate about creating beautiful, functional digital
                  experiences that bring ideas to life. Based in Dublin,
                  specializing in modern web technologies and user-centered
                  design.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => (window.location.href = "/works")}
                    className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => (window.location.href = "/contact")}
                    className="border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Get in Touch
                  </button>
                </div>

                <div className="flex items-center space-x-6 mt-8 pt-6 border-t border-neutral-700">
                  <div className="flex items-center space-x-2 text-sm text-neutral-400">
                    <span>📍</span>
                    <span>Dublin, Ireland</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-neutral-400">
                    <span>💼</span>
                    <span>Available for freelance</span>
                  </div>
                </div>
              </div>

              <div className="relative h-96 lg:h-auto bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 lg:rounded-none lg:rounded-r-[36px]">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="text-6xl">👨‍💻</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-center space-x-3">
                        <div className="w-3 h-3 bg-white/40 rounded-full animate-bounce"></div>
                        <div
                          className="w-3 h-3 bg-white/60 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-3 h-3 bg-white/80 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <p className="text-white/80 text-sm font-medium">
                        Crafting Digital Experiences
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What I Offer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-100 mb-4">
            What I Offer
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Interactive experiences and professional services tailored to bring
            your digital vision to life.
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-neutral-800 rounded-[36px] p-6 col-span-1 hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700 rounded-[24px] flex items-center justify-center mb-4">
              <div className="text-4xl text-white">💻</div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-2">
                Web Development
              </h3>
              <p className="text-sm text-neutral-400">
                Modern, responsive websites built with React, Next.js, and
                cutting-edge technologies
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-neutral-800 rounded-[36px] p-6 col-span-1 hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <div className="relative h-48 bg-gradient-to-br from-accent-500 to-accent-700 rounded-[24px] flex items-center justify-center mb-4">
              <div className="text-4xl text-white">🎨</div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-2">
                UI/UX Design
              </h3>
              <p className="text-sm text-neutral-400">
                User-centered design solutions that combine aesthetics with
                functionality
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-neutral-800 rounded-[36px] p-6 col-span-1 hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <div className="relative h-48 bg-gradient-to-br from-success-500 to-success-700 rounded-[24px] flex items-center justify-center mb-4">
              <div className="text-4xl text-white">⚡</div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-2">
                Performance Optimization
              </h3>
              <p className="text-sm text-neutral-400">
                Lightning-fast websites optimized for speed, SEO, and user
                experience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-[36px] p-6 col-span-full md:col-span-2 hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <div className="relative h-48 bg-white/10 backdrop-blur-sm rounded-[24px] flex items-center justify-center mb-4 border border-white/20">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="text-3xl">🚀</div>
                </div>
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
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-2">
                Interactive Experiences
              </h3>
              <p className="text-sm text-white/90">
                Dynamic animations and engaging interfaces that captivate users
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-neutral-800 rounded-[36px] overflow-hidden col-span-full md:col-span-1 hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Weather />
          </motion.div>
        </div>

        {/* Recent Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-neutral-800 rounded-[36px] p-8 mb-12 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Featured Projects
            </h3>
            <p className="text-neutral-400 max-w-md mx-auto">
              A glimpse into my latest work and creative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-neutral-700 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-md">
              <div className="w-full h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-3xl text-white">🎨</div>
              </div>
              <h4 className="font-semibold text-white mb-2">
                Brightspace Pulse
              </h4>
              <p className="text-neutral-400 text-sm mb-4">
                Enhanced learning management system with career development
                features
              </p>
              <button className="text-accent-400 hover:text-accent-300 text-sm font-medium transition-colors">
                View Project →
              </button>
            </div>

            <div className="bg-neutral-700 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-md">
              <div className="w-full h-32 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-3xl text-white">💰</div>
              </div>
              <h4 className="font-semibold text-white mb-2">Flex Save</h4>
              <p className="text-neutral-400 text-sm mb-4">
                Modern coupon app with swipe functionality for Gen Z users
              </p>
              <button className="text-accent-400 hover:text-accent-300 text-sm font-medium transition-colors">
                View Project →
              </button>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/works")}
                className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                View All Projects
              </button>
              <button
                onClick={() => (window.location.href = "/blog")}
                className="border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Read My Blog
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
