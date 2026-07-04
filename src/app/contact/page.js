"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import Navbar from "../components/navbar";
import PageContainer from "../components/PageContainer";
import { useTheme } from "../contexts/ThemeContext";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const roleFit = [
  "Frontend Engineer",
  "Product Engineer",
  "UX Engineer",
  "Design Engineer",
  "Creative Developer",
  "Creative Technologist",
];

const inputBase =
  "w-full rounded-2xl border px-4 py-3.5 text-sm outline-none transition-colors focus:border-[var(--border-secondary)] focus:ring-2 focus:ring-white/10";

export default function Contact() {
  const { currentTheme, setCurrentTheme, themes, showThemeArrow } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.035)",
    borderColor: "var(--border-primary)",
    color: "var(--text-primary)",
  };

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

        <section className="pt-32 sm:pt-36 pb-16">
          <PageContainer>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
            >
              <div>
                <p className="studio-kicker mb-5">Contact</p>
                <h1 className="studio-display">Have a product, role, or idea?</h1>
              </div>
              <div>
                <p className="studio-subheading">
                  I&apos;m open to frontend, product, UX engineering, design
                  engineering, and creative technology opportunities. Send a
                  note if the work needs someone who can think through the
                  product and build the interface.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:officialhrishivuk@gmail.com"
                    className="studio-button studio-button-primary"
                  >
                    Email directly
                    <FiMail aria-hidden />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hrishivuk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="studio-button studio-button-ghost"
                  >
                    LinkedIn
                    <FiArrowUpRight aria-hidden />
                  </a>
                </div>
              </div>
            </motion.div>
          </PageContainer>
        </section>

        <section className="studio-section border-t studio-hairline bg-white/[0.015]">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="studio-kicker mb-4">Role fit</p>
                <h2 className="studio-heading">The kind of work I&apos;m looking for.</h2>
              </div>
              <div className="flex flex-wrap content-start gap-3">
                {roleFit.map((role) => (
                  <span key={role} className="studio-pill">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="studio-section">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <aside className="space-y-8">
                <div>
                  <p className="studio-kicker mb-4">Direct links</p>
                  <div className="space-y-3">
                    <a
                      href="mailto:officialhrishivuk@gmail.com"
                      className="group flex items-center justify-between rounded-2xl p-4 studio-surface"
                    >
                      <span className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)]">
                        <FiMail aria-hidden />
                        officialhrishivuk@gmail.com
                      </span>
                      <FiArrowUpRight className="text-[var(--text-secondary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hrishivuk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl p-4 studio-surface"
                    >
                      <span className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)]">
                        <FiLinkedin aria-hidden />
                        LinkedIn
                      </span>
                      <FiArrowUpRight className="text-[var(--text-secondary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                    <a
                      href="https://github.com/hrishivuk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl p-4 studio-surface"
                    >
                      <span className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)]">
                        <FiGithub aria-hidden />
                        GitHub
                      </span>
                      <FiArrowUpRight className="text-[var(--text-secondary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>

                <div className="rounded-[24px] p-6 studio-panel">
                  <p className="page-eyebrow mb-3">Usually useful context</p>
                  <p className="studio-text">
                    Role, team/product context, timeline, and the kind of
                    interface or product problem you want help with.
                  </p>
                </div>
              </aside>

              <form onSubmit={handleSubmit} className="rounded-[28px] p-5 sm:p-8 studio-surface">
                <div className="mb-8">
                  <p className="studio-kicker mb-3">Message</p>
                  <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-[var(--text-primary)]">
                    Send a note
                  </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="page-eyebrow mb-2 block">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={inputBase}
                      style={fieldStyle}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="page-eyebrow mb-2 block">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={inputBase}
                      style={fieldStyle}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="subject" className="page-eyebrow mb-2 block">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={inputBase}
                    style={fieldStyle}
                    placeholder="Role, product, or hello"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="page-eyebrow mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={7}
                    className={`${inputBase} resize-y`}
                    style={fieldStyle}
                    placeholder="Tell me what you are building or hiring for..."
                  />
                </div>

                {submitStatus === "success" && (
                  <p className="mt-5 text-sm font-medium text-[var(--accent-secondary)]">
                    Message sent. I&apos;ll be in touch soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="mt-5 text-sm font-medium text-red-300">
                    Something went wrong. Email me directly instead.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="studio-button studio-button-primary mt-7 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  <FiSend aria-hidden />
                </button>
              </form>
            </div>
          </PageContainer>
        </section>
      </div>
    </main>
  );
}
