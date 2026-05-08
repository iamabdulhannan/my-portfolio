"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Menu, X, FileText } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useCommandPalette } from "./CommandPaletteProvider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { setOpen } = useCommandPalette();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div
          className={`max-w-6xl mx-auto px-3 sm:px-4 transition-all duration-300 ${
            scrolled ? "px-2" : ""
          }`}
        >
          <div
            className={`flex items-center justify-between h-14 px-3 sm:px-4 rounded-full transition-all duration-300 ${
              scrolled
                ? "glass-strong shadow-xl shadow-black/30"
                : "border border-transparent"
            }`}
          >
            <a
              href="#top"
              className="flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-accent to-pink-500 flex items-center justify-center font-display font-extrabold text-dark-900 text-sm tracking-tight">
                AH
              </span>
              <span className="hidden sm:block font-display font-semibold text-white tracking-tight">
                Abdul Hannan
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full ${
                    activeSection === href.slice(1)
                      ? "text-white"
                      : "text-dark-200 hover:text-white"
                  }`}
                >
                  {activeSection === href.slice(1) && (
                    <motion.span
                      layoutId="navIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-white/8 border border-white/10"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setOpen(true)}
                aria-label="Open command palette"
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-dark-500/70 bg-dark-800/40 text-xs text-dark-200 hover:text-white hover:border-primary/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-all duration-300"
              >
                <Command className="w-3 h-3" />
                <kbd className="font-mono text-[0.65rem]">K</kbd>
              </button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white text-dark-900 hover:shadow-lg hover:shadow-white/30 hover:-translate-y-0.5 hover:scale-[1.03] active:translate-y-0 active:scale-[0.97] transition-all duration-300 ease-out"
              >
                <FileText className="w-3 h-3 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110" />
                Résumé
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Open menu"
                className="md:hidden w-9 h-9 rounded-full glass flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-dark-900/85 backdrop-blur-xl" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="relative pt-24 px-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map(({ label, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-display font-bold text-white py-2"
                  >
                    {label}
                  </motion.a>
                ))}
                <div className="flex flex-col gap-3 mt-6">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setTimeout(() => setOpen(true), 200);
                    }}
                    className="btn-secondary w-full justify-center"
                  >
                    <Command className="w-4 h-4" />
                    Open Command Menu
                  </button>
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    <FileText className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Résumé</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
