"use client";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import GridItem from "../components/gridItem";
import Image from "next/image";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Design: Trends to Watch in 2024",
      excerpt:
        "Exploring the latest trends in web design, from AI-powered interfaces to sustainable design practices that will shape the digital landscape.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Design",
      icon: "🎨",
      image: "/images/blog-web-design.jpg",
    },
    {
      id: 2,
      title: "Building Accessible React Components",
      excerpt:
        "A comprehensive guide to creating inclusive user interfaces that work for everyone, including best practices and code examples.",
      date: "March 8, 2024",
      readTime: "8 min read",
      category: "Development",
      icon: "💻",
      image: "/images/blog-accessibility.jpg",
    },
    {
      id: 3,
      title: "My Journey from Designer to Full-Stack Developer",
      excerpt:
        "Reflecting on the transition from UI/UX design to full-stack development and the lessons learned along the way.",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Career",
      icon: "🚀",
      image: "/images/blog-journey.jpg",
    },
    {
      id: 4,
      title: "Performance Optimization Techniques for Next.js",
      excerpt:
        "Practical tips and techniques to improve your Next.js application performance, from code splitting to image optimization.",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "Development",
      icon: "⚡",
      image: "/images/blog-nextjs.jpg",
    },
    {
      id: 5,
      title: "Design Systems: Building Consistency at Scale",
      excerpt:
        "How to create and maintain design systems that enable teams to build consistent, cohesive user experiences across products.",
      date: "February 12, 2024",
      readTime: "7 min read",
      category: "Design",
      icon: "🎯",
      image: "/images/blog-design-systems.jpg",
    },
    {
      id: 6,
      title: "The Art of Code Reviews: Best Practices",
      excerpt:
        "Effective code review strategies that improve code quality, team collaboration, and knowledge sharing in development teams.",
      date: "February 5, 2024",
      readTime: "4 min read",
      category: "Development",
      icon: "🔍",
      image: "/images/blog-code-reviews.jpg",
    },
  ];

  const categories = ["All", "Design", "Development", "Career"];

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
            My Blog
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Thoughts, tutorials, and insights about design, development, and the
            creative process.
          </motion.p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <motion.div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-[36px] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center space-x-2 mb-6"
                >
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-white/80 text-sm">Latest Post</span>
                </motion.div>

                <motion.h2
                  className="text-2xl lg:text-3xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  The Evolution of Frontend Development in 2024
                </motion.h2>

                <motion.p
                  className="text-white/90 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  Exploring the latest trends, frameworks, and best practices
                  that are shaping the future of web development.
                </motion.p>

                <motion.div
                  className="flex items-center space-x-4 text-sm text-white/80 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <span>Development</span>
                  <span>•</span>
                  <span>5 min read</span>
                  <span>•</span>
                  <span>Dec 15, 2024</span>
                </motion.div>

                <motion.button
                  className="bg-white text-primary-600 hover:bg-neutral-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg self-start"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  Read Full Article
                </motion.button>
              </div>

              <div className="relative h-64 lg:h-auto bg-white/10 backdrop-blur-sm lg:rounded-none lg:rounded-r-[36px]">
                <div className="absolute inset-0 bg-black/10"></div>
                <motion.div
                  className="relative h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <motion.div
                    className="text-8xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    📝
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-16 left-16 w-4 h-4 bg-white/40 rounded-full"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-16 right-16 w-3 h-3 bg-white/60 rounded-full"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-8 w-2 h-2 bg-white/80 rounded-full"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {["All", "Design", "Development", "Career"].map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-700 text-neutral-100 hover:from-primary-600 hover:to-accent-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-neutral-800 rounded-[36px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div
                className={`h-48 relative bg-gradient-to-br ${
                  post.category === "Design"
                    ? "from-primary-500 to-primary-700"
                    : post.category === "Development"
                    ? "from-accent-500 to-accent-700"
                    : "from-success-500 to-success-700"
                } flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <motion.div
                  className="text-5xl relative z-10"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {post.icon}
                </motion.div>

                {/* Floating dots around icon */}
                <motion.div
                  className="absolute top-8 left-8 w-2 h-2 bg-white/40 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <motion.div
                  className="absolute bottom-8 right-8 w-3 h-3 bg-white/30 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </div>

              <div className="p-6">
                <motion.span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    post.category === "Design"
                      ? "bg-primary-100 text-primary-700"
                      : post.category === "Development"
                      ? "bg-accent-100 text-accent-700"
                      : "bg-success-100 text-success-700"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {post.category}
                </motion.span>

                <h3 className="text-lg font-bold text-neutral-100 mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-neutral-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-medium">
                    {post.readTime}
                  </span>
                  <motion.span
                    className="text-primary-400 font-medium cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read more →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-[36px] p-8 text-center shadow-2xl mb-12"
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            Stay Updated
          </motion.h3>
          <motion.p
            className="text-white/90 mb-6 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            Get the latest posts and insights delivered directly to your inbox.
            No spam, unsubscribe at any time.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <motion.button
              className="bg-white text-primary-600 hover:bg-neutral-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
