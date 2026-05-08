"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const ITEMS = [
  "Available for senior IC roles",
  "Shipping production software",
  "AI · SaaS · Fintech · Creative tools",
  "UK & US remote",
  "React · TypeScript · Python",
  "Adobe extension engineer",
  "4+ years · 10+ products shipped",
];

export default function MarqueeBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);

  return (
    <section ref={ref} className="relative py-12 sm:py-16 overflow-hidden">
      {/* Top thin line */}
      <div className="h-divider mb-12 sm:mb-16" />

      {/* Top row — bigger, scrolls left */}
      <motion.div
        style={{ x: x1 }}
        className="flex whitespace-nowrap gap-12 will-change-transform"
      >
        {[...ITEMS, ...ITEMS].map((label, i) => (
          <span
            key={`top-${i}`}
            className="inline-flex items-center gap-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em]"
          >
            <span className={i % 2 === 0 ? "text-white" : "outline-text"}>
              {label}
            </span>
            <Sparkles className="w-7 h-7 text-primary shrink-0" />
          </span>
        ))}
      </motion.div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Bottom row — opposite direction, smaller */}
      <motion.div
        style={{ x: x2 }}
        className="flex whitespace-nowrap gap-10 will-change-transform"
      >
        {[...ITEMS.slice().reverse(), ...ITEMS.slice().reverse()].map(
          (label, i) => (
            <span
              key={`bottom-${i}`}
              className="inline-flex items-center gap-5 font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-dark-300 italic font-serif"
            >
              <span className="w-2 h-2 rounded-full bg-primary/60 shrink-0" />
              {label}
            </span>
          )
        )}
      </motion.div>

      <div className="h-divider mt-12 sm:mt-16" />
    </section>
  );
}
