"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    setIsDownloading(true);
    setError(null);

    try {
      // Check if file exists by attempting to fetch it
      const response = await fetch("/resume/Hrishikesh_Varma_Resume.pdf", {
        method: "HEAD",
      });

      if (!response.ok) {
        throw new Error("Resume file not found. Please add the PDF file to /public/resume/");
      }

      // Create a temporary link and trigger download
      const link = document.createElement("a");
      link.href = "/resume/Hrishikesh_Varma_Resume.pdf";
      link.download = "Hrishikesh_Varma_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      setError(error.message);
      if (process.env.NODE_ENV === "development") {
        console.error("Download failed:", error);
      }
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl border text-center"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="mb-4">
        <svg
          className="w-16 h-16 mx-auto"
          style={{ color: "var(--text-primary)" }}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <h3
        className="text-xl font-bold mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        Download Resume
      </h3>

      <p
        className="mb-6 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        Get a copy of my latest resume with detailed work experience and skills.
      </p>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 rounded-lg text-xs"
          style={{
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            borderColor: "rgba(239, 68, 68, 0.3)",
            color: "#f87171",
          }}
        >
          {error}
        </motion.div>
      )}

      <motion.button
        onClick={handleDownload}
        disabled={isDownloading}
        className="w-full px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        style={{
          backgroundColor: "var(--bg-primary)",
          borderColor: "var(--border-primary)",
          color: "var(--text-primary)",
          border: "1px solid",
        }}
        whileHover={!isDownloading ? { scale: 1.02 } : {}}
        whileTap={!isDownloading ? { scale: 0.98 } : {}}
        aria-label="Download resume PDF"
      >
        {isDownloading ? (
          <>
            <svg
              className="animate-spin w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Downloading...</span>
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Download PDF</span>
          </>
        )}
      </motion.button>
    </motion.div>
  );
}
