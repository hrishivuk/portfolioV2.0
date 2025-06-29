import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hrishikesh Varma - Frontend Developer & UX Designer",
  description:
    "Frontend Developer & Creative Digital Media enthusiast based in Dublin. Specializing in React, Next.js, UI/UX design, and creating intuitive digital experiences.",
  keywords:
    "Frontend Developer, UX Designer, React, Next.js, Dublin, Web Development, UI Design",
  authors: [{ name: "Hrishikesh Varma" }],
  creator: "Hrishikesh Varma",
  openGraph: {
    title: "Hrishikesh Varma - Frontend Developer & UX Designer",
    description:
      "Frontend Developer & Creative Digital Media enthusiast based in Dublin",
    url: "https://your-domain.com",
    siteName: "Hrishikesh Varma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hrishikesh Varma - Frontend Developer & UX Designer",
    description:
      "Frontend Developer & Creative Digital Media enthusiast based in Dublin",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-100`}
      >
        {children}
      </body>
    </html>
  );
}
