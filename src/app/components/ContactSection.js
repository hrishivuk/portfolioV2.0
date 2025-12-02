"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLayout } from "../contexts/LayoutContext";

export default function ContactSection({ isLoaded }) {
  const { maxWidth } = useLayout();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

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
          transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Side - Title and Contact Info */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.h2
              className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight mb-8"
              style={{ color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2.2, duration: 0.6, ease: "easeOut" }}
            >
              CONTACT ME
            </motion.h2>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2.4, duration: 0.6, ease: "easeOut" }}
            >
              <div
                className="p-6 rounded-2xl border"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Let's Work Together
                </h3>
                <p
                  className="text-sm lg:text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  I'm always interested in new opportunities and creative
                  projects. Whether you have a question or just want to say hi,
                  I'll try my best to get back to you!
                </p>
              </div>

              <div
                className="p-6 rounded-2xl border"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Quick Response
                </h3>
                <p
                  className="text-sm lg:text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  I typically respond within 24 hours. For urgent inquiries,
                  feel free to reach out directly via email.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2.6, duration: 0.6, ease: "easeOut" }}
            >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                    focusRingColor: "var(--accent-primary)",
                  }}
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                    focusRingColor: "var(--accent-primary)",
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                    focusRingColor: "var(--accent-primary)",
                  }}
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-vertical"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                    focusRingColor: "var(--accent-primary)",
                  }}
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-6 py-4 rounded-lg border transition-all duration-300 hover:scale-105 font-medium"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                  color: "var(--text-primary)",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
