import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LayoutProvider } from "./contexts/LayoutContext";
import AmbientBackground from "./components/AmbientBackground";

// Get site URL from environment variable or use default
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hrishivuk.com";

export const metadata = {
  title: "Hrishikesh Varma - Frontend Engineer & Product Designer",
  description:
    "Frontend engineer and UX-minded product builder in Dublin designing and building web, mobile, and AI-assisted product experiences.",
  keywords:
    "Frontend Engineer, Product Engineer, UX Engineer, Design Engineer, React, Next.js, React Native, Dublin",
  authors: [{ name: "Hrishikesh Varma" }],
  creator: "Hrishikesh Varma",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Hrishikesh Varma - Frontend Engineer & Product Designer",
    description:
      "Frontend engineer and UX-minded product builder in Dublin designing and building web, mobile, and AI-assisted product experiences.",
    url: siteUrl,
    siteName: "Hrishikesh Varma Portfolio",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Hrishikesh Varma - Frontend Engineer & Product Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hrishikesh Varma - Frontend Engineer & Product Designer",
    description:
      "Frontend engineer and UX-minded product builder in Dublin",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <ThemeProvider>
          <LayoutProvider>
            <AmbientBackground />
        {children}
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
