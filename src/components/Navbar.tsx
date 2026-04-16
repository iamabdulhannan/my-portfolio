"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.a
              href="#"
              className="text-xl sm:text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              AH
            </motion.a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    activeSection === href.slice(1)
                      ? "text-primary"
                      : "text-dark-200 hover:text-white"
                  }`}
                >
                  {label}
                  {activeSection === href.slice(1) && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </a>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-2 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all"
              >
                Resume
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white rounded-full"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass md:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-dark-100 hover:text-primary transition-colors"
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-8 py-3 text-lg font-semibold rounded-full bg-primary/10 text-primary border border-primary/30"
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
