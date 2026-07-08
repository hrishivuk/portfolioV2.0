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
  title: "Hrishikesh Varma - Frontend Engineer & Product Designer",
  description:
    "Frontend engineer and UX-minded product builder in Dublin designing and building web, mobile, and AI-assisted product experiences.",
  keywords:
    "Frontend Engineer, Product Engineer, UX Engineer, Design Engineer, React, Next.js, React Native, Dublin",
  authors: [{ name: "Hrishikesh Varma" }],
  creator: "Hrishikesh Varma",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Hrishikesh Varma - Frontend Engineer & Product Designer",
    description:
      "Frontend engineer and UX-minded product builder in Dublin designing and building web, mobile, and AI-assisted product experiences.",
    url: siteUrl,
    siteName: "Hrishikesh Varma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hrishikesh Varma - Frontend Engineer & Product Designer",
    description:
      "Frontend engineer and UX-minded product builder in Dublin",
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
