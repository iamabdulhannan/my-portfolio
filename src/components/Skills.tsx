"use client";
import { motion } from "framer-motion";
import { Layers3, Server, Database } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { skillCategories } from "@/data/portfolio";

const categoryIcons = [Layers3, Server, Database];
const categoryAccents = [
  "from-primary/30 to-cyan-400/10",
  "from-accent/30 to-pink-400/10",
  "from-emerald-500/30 to-teal-400/10",
];
const categoryGlows = [
  "0 0 32px rgba(88,166,255,0.25)",
  "0 0 32px rgba(124,58,237,0.25)",
  "0 0 32px rgba(34,197,94,0.25)",
];

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[0.7rem] uppercase tracking-[0.18em] text-primary mb-5">
            <span className="w-1 h-1 rounded-full bg-primary" />
            Tech Stack · 04
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-[-0.04em] leading-[0.95]">
            Tools of the <span className="font-serif italic font-normal gradient-text">trade</span>
            <span className="text-primary">.</span>
          </h2>
          <p className="text-dark-200 text-base sm:text-lg max-w-2xl">
            Battle-tested technologies I reach for to ship reliable, scalable
            production software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, ci) => {
            const Icon = categoryIcons[ci] ?? Layers3;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: ci * 0.15 }}
                whileHover={{ y: -4 }}
                className="group relative glass rounded-3xl p-7 sm:p-8 overflow-hidden sheen"
              >
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${categoryAccents[ci]} opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 -z-10`}
                />
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl glass-strong flex items-center justify-center"
                    style={{ boxShadow: categoryGlows[ci] }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <div className="text-[0.6rem] font-mono uppercase tracking-[0.18em] text-dark-300 mt-0.5">
                      / {category.skills.length} tools
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.35,
                        delay: ci * 0.15 + si * 0.04,
                      }}
                      whileHover={{ y: -3, scale: 1.03 }}
                      className="px-3 py-1.5 rounded-lg bg-dark-700/60 border border-dark-500/50 hover:border-primary/40 transition-colors text-sm font-medium text-dark-100 cursor-default flex items-center gap-2"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
