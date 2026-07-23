import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Google Sans Flex — the single typeface. Variable font; we only use 300–600.
const googleSans = localFont({
  src: "./fonts/google-sans-flex.woff2",
  variable: "--font-google-sans",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI Slides | AI Presentation Maker & Website Builder",
  description:
    "Create standout presentations, websites, and more with AI Slides, your all-in-one AI-powered design partner. No coding or design experience required.",
  openGraph: {
    title: "AI Slides | AI Presentation Maker & Website Builder",
    description:
      "Create standout presentations, websites, and more with AI Slides, your all-in-one AI-powered design partner.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={googleSans.variable}>
      <body>{children}</body>
    </html>
  );
}
