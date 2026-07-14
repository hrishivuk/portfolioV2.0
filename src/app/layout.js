import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LayoutProvider } from "./contexts/LayoutContext";
import AmbientBackground from "./components/AmbientBackground";
import CustomCursor from "./components/CustomCursor";
import RouteCurtainReveal from "./components/RouteCurtainReveal";

// Get site URL from environment variable or use default
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hrishivuk.com";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Hrishikesh Varma — UX/UI Designer, UX Researcher & Frontend Developer",
  description:
    "Dublin-based UX/UI designer, UX researcher, and frontend developer creating user-centred web and mobile product experiences.",
  keywords:
    "UX/UI Designer, UX Researcher, Frontend Developer, Product Design, User Research, Usability Testing, Figma, React, Next.js, Dublin",
  authors: [{ name: "Hrishikesh Varma" }],
  creator: "Hrishikesh Varma",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Hrishikesh Varma — UX/UI Designer, UX Researcher & Frontend Developer",
    description:
      "Dublin-based UX/UI designer, UX researcher, and frontend developer creating user-centred web and mobile product experiences.",
    url: siteUrl,
    siteName: "Hrishikesh Varma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hrishikesh Varma — UX/UI Designer, UX Researcher & Frontend Developer",
    description:
      "Dublin-based UX/UI designer, UX researcher, and frontend developer creating user-centred digital products.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <ThemeProvider>
          <LayoutProvider>
            <AmbientBackground />
            <CustomCursor />
            <RouteCurtainReveal />
            {children}
            <Analytics />
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
