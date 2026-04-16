"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, stats } from "@/data/portfolio";

function TypingEffect({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.slice(0, currentText.length + 1));
          if (currentText.length === word.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(word.slice(0, currentText.length - 1));
          if (currentText.length === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="gradient-text">
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

// Static particles with fully percentage-based positions — hidden on mobile via CSS
const PARTICLES = [
  { id: 0, delay: 0.2, left: "8%", top: "20%" },
  { id: 1, delay: 1.8, left: "15%", top: "55%" },
  { id: 2, delay: 3.1, left: "25%", top: "75%" },
  { id: 3, delay: 0.7, left: "35%", top: "30%" },
  { id: 4, delay: 2.4, left: "50%", top: "65%" },
  { id: 5, delay: 1.1, left: "65%", top: "25%" },
  { id: 6, delay: 3.6, left: "75%", top: "70%" },
  { id: 7, delay: 0.4, left: "85%", top: "40%" },
  { id: 8, delay: 2.9, left: "92%", top: "60%" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent/5 rounded-full blur-[100px] sm:blur-[120px]" />
      </div>

      {/* Floating particles — hidden on mobile, percentage-based positions */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{ left: p.left, top: p.top }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 5,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(88,166,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(88,166,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 sm:mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-xs sm:text-sm text-dark-200">
              Available for exciting opportunities
            </span>
          </motion.div>

          {/* Profile image — explicitly centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-6 sm:mb-8"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-gradient p-[3px] animate-pulse-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/profile.png"
                  alt="Abdul Hannan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6 min-h-[1.8rem] sm:min-h-[2.5rem]"
          >
            <TypingEffect words={personalInfo.roles} />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-dark-200 text-sm sm:text-base lg:text-lg max-w-xl lg:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto mb-12 sm:mb-16"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 sm:py-3.5 rounded-full bg-primary text-dark-900 font-semibold text-sm sm:text-base overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/25 text-center"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 sm:py-3.5 rounded-full border border-dark-400 text-dark-100 font-semibold text-sm sm:text-base hover:border-primary/50 hover:text-primary transition-all text-center"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full max-w-sm sm:max-w-xl lg:max-w-3xl"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
                className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 glow-hover"
              >
                <div className="text-xl sm:text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-[0.65rem] sm:text-xs lg:text-sm text-dark-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — fixed to viewport bottom, hides on scroll */}
      <ScrollIndicator />
    </section>
  );
}

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-dark-400 flex justify-center pt-1.5 sm:pt-2"
      >
        <motion.div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary" />
      </motion.div>
    </motion.div>
  );
}
