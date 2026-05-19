"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";
import SectionHeading from "./SectionHeading";

const fade = { duration: 0.35, ease: "easeOut" };

export default function ContactSection({ isLoaded }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-3 py-2.5 text-sm rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-white/20";

  return (
    <section className="py-10 sm:py-14 pb-16 border-t border-white/5">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={fade}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let's talk"
                description="Open to internships, graduate roles, and freelance projects. I usually reply within 24 hours."
              />
              <div className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                <p>
                  <span className="page-eyebrow text-[10px] block mb-0.5">Email</span>
                  <a
                    href="mailto:officialhrishivuk@gmail.com"
                    className="font-medium hover:underline"
                    style={{ color: "var(--text-primary)" }}
                  >
                    officialhrishivuk@gmail.com
                  </a>
                </p>
                <p>
                  <span className="page-eyebrow text-[10px] block mb-0.5">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/hrishivuk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                    style={{ color: "var(--text-primary)" }}
                  >
                    linkedin.com/in/hrishivuk
                  </a>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={inputClass}
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      borderColor: "var(--border-primary)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={inputClass}
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      borderColor: "var(--border-primary)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-medium mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={inputClass}
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Role, project, or hello"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={`${inputClass} resize-y`}
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              {submitStatus === "success" && (
                <p className="text-sm text-green-400">Message sent — I&apos;ll be in touch soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Email me directly instead.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg border text-sm font-medium disabled:opacity-50 min-h-[44px]"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                  color: "var(--text-primary)",
                }}
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}
