import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Hannan — Senior Software Engineer | Full-Stack & AI Systems",
  description:
    "Senior Full-Stack Software Engineer with 4+ years of experience building production-grade SaaS platforms, workflow-driven systems, and AI-enabled applications. React, TypeScript, Python, NestJS.",
  keywords: [
    "Abdul Hannan",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "React",
    "TypeScript",
    "Next.js",
    "NestJS",
    "Python",
    "AI",
    "SaaS",
  ],
  authors: [{ name: "Abdul Hannan" }],
  openGraph: {
    title: "Abdul Hannan — Senior Software Engineer",
    description:
      "Building production-grade SaaS platforms, workflow-driven systems, and AI-enabled applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise-bg">{children}</body>
    </html>
  );
}
