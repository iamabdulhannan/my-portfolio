"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8" />
          <p className="text-dark-200 text-lg max-w-2xl mx-auto">
            Technologies I use to build production-grade applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.2 }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor:
                      ci === 0 ? "#58A6FF" : ci === 1 ? "#7C3AED" : "#10B981",
                  }}
                />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: ci * 0.2 + si * 0.05 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-600/50 border border-dark-400/30 hover:border-primary/30 transition-all cursor-default"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span className="text-sm font-medium text-dark-100">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
