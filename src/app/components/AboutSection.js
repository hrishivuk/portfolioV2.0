"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";
import SectionHeading from "./SectionHeading";

const fade = { duration: 0.35, ease: "easeOut" };

export default function AboutSection({ isLoaded }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Hrishikesh_Varma_Resume.pdf";
    link.download = "Hrishikesh_Varma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-10 sm:py-12 border-t border-white/5">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={fade}
        >
          <SectionHeading
            eyebrow="Background"
            title="About me"
            description="Creative problem-solver with a foot in both design and engineering."
            action={
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium shrink-0 min-h-[44px]"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                  color: "var(--text-primary)",
                }}
              >
                Download CV
              </button>
            }
          />

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              {
                tag: "Approach",
                title: "Design × Code",
                body: "I don't stop at mockups or pull requests — I take ideas from research and wireframes through to working software.",
              },
              {
                tag: "Now",
                title: "MSc at TU Dublin",
                body: "Creative Digital Media & UX (2024–2026), deepening prototyping, research, and emerging media alongside client-ready dev skills.",
              },
              {
                tag: "Focus",
                title: "Mobile & Web",
                body: "Recent work includes CoachCanvas (React Native + Firebase) and Findaside (React) — real products for real communities.",
              },
            ].map((card) => (
              <article
                key={card.tag}
                className="p-4 rounded-xl border"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <p className="page-eyebrow text-[10px] mb-2">{card.tag}</p>
                <h3 className="text-base font-bold mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {card.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-5 text-sm" style={{ color: "var(--text-muted)" }}>
            Want the full story?{" "}
            <Link href="/aboutme" className="underline underline-offset-2 hover:opacity-80">
              Read more on About me →
            </Link>
          </p>
        </motion.div>
      </PageContainer>
    </section>
  );
}
