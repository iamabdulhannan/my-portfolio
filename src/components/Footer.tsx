"use client";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-dark-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-300 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-dark-100 font-medium">
              {personalInfo.name}
            </span>
            . Built with Next.js & Framer Motion.
          </p>
          <p className="text-dark-300 text-sm">
            Designed & crafted with{" "}
            <span className="text-red-400">&#9829;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
