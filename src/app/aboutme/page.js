"use client";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import GridItem from "../components/gridItem";
import Image from "next/image";
import angular from "../../../public/images/Skills/angular.svg";
import figma from "../../../public/images/Skills/figma.svg";
import framer_motion from "../../../public/images/Skills/framer_motion.svg";
import js from "../../../public/images/Skills/js.svg";
import nextjs from "../../../public/images/Skills/nextjs.svg";
import photoshop from "../../../public/images/Skills/photoshop.svg";
import react from "../../../public/images/Skills/react.svg";
import tailwind from "../../../public/images/Skills/tailwind.svg";
import typescript from "../../../public/images/Skills/typescript.svg";
import git from "../../../public/images/Skills/git.svg";
import nodejs from "../../../public/images/Skills/nodejs.svg";

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-4 mt-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-neutral-100 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Learn more about my journey, skills, and passion for creating
            exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-[36px] p-8 md:p-12 mb-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-6 lg:mb-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full animate-pulse"></div>
                <div className="relative w-full h-full bg-neutral-800 rounded-full flex items-center justify-center border-4 border-neutral-700">
                  <span className="text-6xl">👨‍💻</span>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent-500 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-success-500 rounded-full"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-neutral-100 mb-6">
                Frontend Developer & Designer
              </h2>
              <div className="space-y-4 text-neutral-300 leading-relaxed">
                <p>
                  I'm a passionate Frontend Developer and UI/UX Designer based
                  in Dublin, Ireland. With a strong foundation in modern web
                  technologies and a keen eye for design, I create digital
                  experiences that are both beautiful and functional.
                </p>
                <p>
                  My journey in tech began with a fascination for how design and
                  code could work together to solve real-world problems. I
                  specialize in React, Next.js, and modern JavaScript
                  frameworks, while also bringing creative design solutions to
                  life through tools like Figma and Adobe Creative Suite.
                </p>
                <p>
                  When I'm not coding or designing, you'll find me exploring
                  Dublin's vibrant tech scene, experimenting with new
                  technologies, or working on personal projects that push the
                  boundaries of what's possible on the web.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "HTML5",
                  "CSS3",
                  "Tailwind CSS",
                  "Figma",
                  "Node.js",
                  "Git",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-neutral-700 text-neutral-200 rounded-full text-sm font-medium shadow-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div
            className="bg-neutral-800 rounded-[36px] p-8 text-center shadow-lg"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="text-4xl font-bold text-primary-400 mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              3+
            </motion.div>
            <h3 className="text-xl font-bold text-neutral-100 mb-4">
              Years Experience
            </h3>
            <p className="text-neutral-400">
              Building digital products and honing my craft in frontend
              development
            </p>
          </motion.div>

          <motion.div
            className="bg-neutral-800 rounded-[36px] p-8 text-center shadow-lg"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="text-4xl font-bold text-accent-400 mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              15+
            </motion.div>
            <h3 className="text-xl font-bold text-neutral-100 mb-4">
              Projects Completed
            </h3>
            <p className="text-neutral-400">
              From concept to deployment, delivering solutions that matter
            </p>
          </motion.div>

          <motion.div
            className="bg-neutral-800 rounded-[36px] p-8 text-center shadow-lg"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="text-4xl font-bold text-success-400 mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              100%
            </motion.div>
            <h3 className="text-xl font-bold text-neutral-100 mb-4">
              Client Satisfaction
            </h3>
            <p className="text-neutral-400">
              Committed to exceeding expectations on every project
            </p>
          </motion.div>
        </motion.div>

        {/* Education & Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="bg-neutral-800 rounded-[36px] p-8 mb-12 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-neutral-100 mb-8 text-center">
            My Journey
          </h3>

          <div className="space-y-8">
            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              <div className="flex-shrink-0 w-4 h-4 bg-primary-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-100">
                  Frontend Developer
                </h4>
                <p className="text-accent-400 font-medium">Present - 2022</p>
                <p className="text-neutral-400 mt-2">
                  Developing modern web applications with React, Next.js, and
                  TypeScript. Focus on creating responsive, accessible, and
                  performant user interfaces.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
            >
              <div className="flex-shrink-0 w-4 h-4 bg-accent-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-100">
                  UI/UX Design Specialization
                </h4>
                <p className="text-accent-400 font-medium">2022 - 2021</p>
                <p className="text-neutral-400 mt-2">
                  Completed comprehensive training in user experience design,
                  design thinking methodologies, and modern design tools.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
            >
              <div className="flex-shrink-0 w-4 h-4 bg-success-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-100">
                  Computer Science Education
                </h4>
                <p className="text-accent-400 font-medium">2021 - 2019</p>
                <p className="text-neutral-400 mt-2">
                  Built a strong foundation in programming fundamentals,
                  algorithms, and software development principles.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-[36px] p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Ready to bring your ideas to life? I'm always excited to
              collaborate on meaningful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => (window.location.href = "/contact")}
                className="bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
              <motion.button
                onClick={() => (window.location.href = "/works")}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
