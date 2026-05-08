import type { Metadata } from "next";
import { Archivo, Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import CommandPaletteProvider from "@/components/CommandPaletteProvider";
import ScrollProgress from "@/components/ScrollProgress";
import CursorSpotlight from "@/components/CursorSpotlight";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
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
      className={`${archivo.variable} ${space.variable} ${jetbrains.variable} ${instrument.variable} h-full antialiased`}
      style={{ overflowX: "clip" }}
    >
      <body
        id="top"
        className="min-h-full flex flex-col noise-bg selection:bg-primary/30 selection:text-white"
        style={{ overflowX: "clip" }}
      >
        <CursorSpotlight />
        <ScrollProgress />
        <CommandPaletteProvider>{children}</CommandPaletteProvider>
      </body>
    </html>
  );
}
