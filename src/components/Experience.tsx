"use client";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 dotted-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[0.7rem] uppercase tracking-[0.18em] text-primary mb-5">
            <span className="w-1 h-1 rounded-full bg-primary" />
            Career · 03
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-[-0.04em] leading-[0.95]">
            Where I&apos;ve <span className="font-serif italic font-normal gradient-text-warm">made things</span>
            <span className="text-primary">.</span>
          </h2>
          <p className="text-dark-200 text-base sm:text-lg max-w-xl">
            Two ongoing engagements building real products for UK & US startups
            — and the impact along the way.
          </p>
        </motion.div>

        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-pink-500/30" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -24 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-[26px] sm:-left-[42px] top-2 w-6 h-6 rounded-full bg-dark-900 border-2 border-primary flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </div>

              <motion.div
                whileHover={{ y: -3 }}
                className="glass rounded-3xl p-7 sm:p-8 glow-hover relative overflow-hidden sheen"
              >
                <div
                  className="absolute -top-px right-0 w-1/2 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(88,166,255,0.5), transparent)",
                  }}
                />
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[0.7rem] font-mono">
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[0.7rem] font-mono inline-flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                      Current
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded-full bg-dark-700/60 text-dark-200 text-[0.7rem] font-mono">
                    {exp.location}
                  </span>
                  <span className="ml-auto font-mono text-[0.6rem] tracking-[0.18em] text-dark-400">
                    / 0{i + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {exp.role}
                </h3>
                <p className="font-serif italic text-lg text-primary mb-4 inline-flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  {exp.company}
                </p>
                <p className="text-dark-200 text-base mb-5 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2.5">
                  {exp.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2.5 text-sm text-dark-100 leading-relaxed"
                    >
                      <ArrowRight className="w-3.5 h-3.5 mt-1 shrink-0 text-primary" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-dark-500/30 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-dark-400 font-mono">
                  <Sparkles className="w-3 h-3 text-primary" />
                  Building daily
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
