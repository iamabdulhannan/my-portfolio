"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { personalInfo } from "@/data/portfolio";

const highlights = [
  {
    title: "Enterprise SaaS",
    desc: "Built platforms with 50+ modules serving real production workloads",
    icon: "🏗️",
  },
  {
    title: "AI Integration",
    desc: "Hands-on with OpenAI, Runware, Replicate for generative features",
    icon: "🤖",
  },
  {
    title: "Real-Time Systems",
    desc: "Socket.io, Redis pub/sub, live collaboration — not just CRUD",
    icon: "⚡",
  },
  {
    title: "Adobe Extension Dev",
    desc: "Bridging modern React with Adobe's CEP/ExtendScript ecosystem",
    icon: "🎨",
  },
  {
    title: "Full Ownership",
    desc: "From database schema to deployment pipeline — I ship end to end",
    icon: "🚀",
  },
  {
    title: "Startup Speed",
    desc: "High-output environments where I wear multiple hats and deliver fast",
    icon: "💨",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8" />
          <p className="text-dark-200 text-lg max-w-3xl mx-auto leading-relaxed">
            I&apos;m a <strong className="text-white">Senior Full-Stack Software Engineer</strong> with
            4+ years of experience building production-grade SaaS platforms,
            workflow-driven systems, and AI-enabled applications. I specialize in{" "}
            <strong className="text-primary">React, TypeScript, Python</strong>, and
            scalable backend architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 glow-hover group cursor-default"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-dark-200 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm text-dark-200">
            <span className="text-base">📍</span> {personalInfo.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
