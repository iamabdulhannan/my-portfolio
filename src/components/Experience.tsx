"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 sm:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 -translate-x-1/2 mt-8 sm:mt-0 sm:top-8">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse-glow" />
              </div>

              {/* Spacer */}
              <div className="hidden sm:block sm:w-1/2" />

              {/* Card */}
              <div className="ml-10 sm:ml-0 sm:w-1/2">
                <div className="glass rounded-2xl p-6 sm:p-8 glow-hover">
                  {/* Period badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-dark-300 text-sm mb-4">{exp.location}</p>
                  <p className="text-dark-200 text-sm mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2 text-sm text-dark-200"
                      >
                        <span className="text-primary mt-0.5 shrink-0">▸</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
