import { Geist, Geist_Mono, DynaPuff } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LayoutProvider } from "./contexts/LayoutContext";
import GlobalGhostMouseBackground from "./components/GlobalGhostMouseBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dynaPuff = DynaPuff({
  variable: "--font-dynapuff",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Get site URL from environment variable or use default
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hrishikeshvarma.dev";

export const metadata = {
  title: "Hrishikesh Varma - Frontend Developer & UX Designer",
  description:
    "Frontend Developer & Creative Digital Media enthusiast based in Dublin. Specializing in React, Next.js, UI/UX design, and creating intuitive digital experiences.",
  keywords:
    "Frontend Developer, UX Designer, React, Next.js, Dublin, Web Development, UI Design",
  authors: [{ name: "Hrishikesh Varma" }],
  creator: "Hrishikesh Varma",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Hrishikesh Varma - Frontend Developer & UX Designer",
    description:
      "Frontend Developer & Creative Digital Media enthusiast based in Dublin. Specializing in React, Next.js, UI/UX design, and creating intuitive digital experiences.",
    url: siteUrl,
    siteName: "Hrishikesh Varma Portfolio",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Hrishikesh Varma - Frontend Developer & UX Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hrishikesh Varma - Frontend Developer & UX Designer",
    description:
      "Frontend Developer & Creative Digital Media enthusiast based in Dublin",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dynaPuff.variable} antialiased bg-neutral-950 text-neutral-100`}
      >
        <ThemeProvider>
          <LayoutProvider>
            <GlobalGhostMouseBackground />
        {children}
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
