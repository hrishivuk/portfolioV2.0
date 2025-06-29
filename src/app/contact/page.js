"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import GridItem from "../components/gridItem";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  // Social Media Links
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/hrishikesh-varma",
    },
    {
      name: "GitHub",
      icon: "💻",
      url: "https://github.com/hrishikesh-varma",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/hrishikesh_v",
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "https://instagram.com/hrishikesh.varma",
    },
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What's your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website project takes 2-4 weeks, while larger applications can take 6-12 weeks.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! I work with clients globally and am comfortable with remote collaboration across different time zones.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in React, Next.js, TypeScript, Node.js, and modern CSS frameworks like Tailwind CSS. I also have experience with design tools like Figma.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, I offer ongoing maintenance and support packages to keep your website updated, secure, and performing optimally.",
    },
    {
      question: "Can you help with existing projects?",
      answer:
        "Absolutely! I can help improve, optimize, or add new features to existing websites and applications.",
    },
    {
      question: "What's your preferred communication method?",
      answer:
        "I prefer email for detailed discussions and video calls for project kickoffs and important milestones. I'm also available via messaging platforms.",
    },
  ];

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
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have a project in mind? Let's collaborate and create something
            amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-[36px] p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-neutral-100 mb-6">
              Send me a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg ${
                  isSubmitting
                    ? "bg-neutral-600 text-neutral-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 hover:shadow-xl"
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-lg bg-green-500/20 text-green-400 border border-green-500/30"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30"
              >
                Something went wrong. Please try again or contact me directly.
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-neutral-800 rounded-[36px] p-8 shadow-lg">
              <h3 className="text-xl font-bold text-neutral-100 mb-6">
                Let's Connect
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-100">Email</h4>
                    <p className="text-neutral-400">
                      hrishikesh.varma@example.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-100">Phone</h4>
                    <p className="text-neutral-400">+353 XX XXX XXXX</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-100">Location</h4>
                    <p className="text-neutral-400">Dublin, Ireland</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-neutral-800 rounded-[36px] p-8 shadow-lg">
              <h3 className="text-xl font-bold text-neutral-100 mb-6">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-700 hover:bg-neutral-600 p-4 rounded-lg transition-all duration-300 text-center group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100 transition-colors">
                      {social.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="bg-gradient-to-r from-success-600 to-success-700 rounded-[36px] p-8 text-center shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <h3 className="text-lg font-bold text-white mb-2">
                Available for Work
              </h3>
              <p className="text-white/90 text-sm">
                Currently accepting new projects and collaborations
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-neutral-800 rounded-[36px] p-8 mb-12 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-neutral-100 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={`faq-${index}`}
                className="bg-neutral-700 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold text-neutral-100 mb-3">
                  {faq.question}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
