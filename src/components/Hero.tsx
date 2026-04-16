"use client";
import { useEffect, useState, useMemo } from "react";
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

// Pre-computed static particle positions (no Math.random on every render)
const PARTICLES = [
  { id: 0, delay: 0.2, xPct: 5, y: 220 },
  { id: 1, delay: 1.8, xPct: 12, y: 380 },
  { id: 2, delay: 3.1, xPct: 20, y: 500 },
  { id: 3, delay: 0.7, xPct: 28, y: 260 },
  { id: 4, delay: 2.4, xPct: 35, y: 440 },
  { id: 5, delay: 1.1, xPct: 42, y: 320 },
  { id: 6, delay: 3.6, xPct: 50, y: 540 },
  { id: 7, delay: 0.4, xPct: 58, y: 280 },
  { id: 8, delay: 2.9, xPct: 65, y: 460 },
  { id: 9, delay: 1.5, xPct: 72, y: 350 },
  { id: 10, delay: 3.3, xPct: 80, y: 520 },
  { id: 11, delay: 0.9, xPct: 88, y: 240 },
  { id: 12, delay: 2.1, xPct: 95, y: 400 },
];

function FloatingParticle({ delay, xPct, y }: { delay: number; xPct: number; y: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-primary/30"
      style={{ left: `${xPct}%`, top: y }}
      initial={{ opacity: 0 }}
      animate={{
        y: [0, -100, 0],
        opacity: [0, 0.8, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/3 rounded-full blur-[150px]" />
      </div>

      {/* Floating particles — static data, no re-render loops */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <FloatingParticle key={p.id} delay={p.delay} xPct={p.xPct} y={p.y} />
        ))}
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(88,166,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(88,166,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm text-dark-200">
              Available for exciting opportunities
            </span>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative inline-block mb-8"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-gradient p-[3px] mx-auto animate-pulse-glow">
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
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 min-h-[2.5rem]"
          >
            <TypingEffect words={personalInfo.roles} />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-dark-200 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3.5 rounded-full bg-primary text-dark-900 font-semibold text-base overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-dark-400 text-dark-100 font-semibold text-base hover:border-primary/50 hover:text-primary transition-all"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
                className="glass rounded-2xl p-4 sm:p-5 glow-hover"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-dark-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — fixed to viewport bottom, not document bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ScrollIndicator />
      </motion.div>
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
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-6 h-10 rounded-full border-2 border-dark-400 flex justify-center pt-2"
    >
      <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
    </motion.div>
  );
}
