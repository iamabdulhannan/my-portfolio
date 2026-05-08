"use client";
import { motion } from "framer-motion";
import {
  Building2,
  Sparkles,
  Zap,
  Palette,
  Rocket,
  Wind,
  MapPin,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { personalInfo } from "@/data/portfolio";

const highlights = [
  {
    title: "Enterprise SaaS",
    desc: "Built platforms with 50+ modules serving real production workloads.",
    icon: Building2,
    accent: "from-blue-500/30 to-cyan-400/10",
    color: "#58A6FF",
  },
  {
    title: "AI Integration",
    desc: "Hands-on with OpenAI, Runware, Replicate for generative features.",
    icon: Sparkles,
    accent: "from-purple-500/30 to-pink-400/10",
    color: "#7C3AED",
  },
  {
    title: "Real-Time Systems",
    desc: "Socket.io, Redis pub/sub, live collaboration — not just CRUD.",
    icon: Zap,
    accent: "from-amber-500/30 to-yellow-400/10",
    color: "#F59E0B",
  },
  {
    title: "Adobe Extension Dev",
    desc: "Bridging modern React with Adobe's CEP/ExtendScript ecosystem.",
    icon: Palette,
    accent: "from-orange-500/30 to-red-400/10",
    color: "#FF6B35",
  },
  {
    title: "Full Ownership",
    desc: "From database schema to deployment pipeline — I ship end to end.",
    icon: Rocket,
    accent: "from-emerald-500/30 to-green-400/10",
    color: "#22C55E",
  },
  {
    title: "Startup Speed",
    desc: "High-output environments where I wear multiple hats and deliver fast.",
    icon: Wind,
    accent: "from-sky-500/30 to-indigo-400/10",
    color: "#0EA5E9",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 mesh-bg-warm opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mb-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[0.7rem] uppercase tracking-[0.18em] text-primary mb-5">
              <span className="w-1 h-1 rounded-full bg-primary" />
              About · 01
            </span>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.04em] leading-[0.95]">
              Engineer who
              <br />
              <span className="font-serif italic font-normal gradient-text">
                actually ships
              </span>
              <span className="text-primary">.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-dark-100 text-lg sm:text-xl leading-relaxed">
              I&apos;m a{" "}
              <strong className="text-white font-semibold">
                Senior Full-Stack Software Engineer
              </strong>{" "}
              with 4+ years building production-grade SaaS, workflow-driven
              systems, and AI-enabled applications.
            </p>
            <p className="text-dark-200 text-base sm:text-lg leading-relaxed">
              I specialize in{" "}
              <span className="text-primary font-semibold">React</span>,{" "}
              <span className="text-primary font-semibold">TypeScript</span>,{" "}
              <span className="text-primary font-semibold">Python</span>, and
              scalable backend architectures — and I&apos;ve led projects from
              empty repo to live customers in production.
            </p>
            <div className="inline-flex items-center gap-2 pt-1 text-sm text-dark-200">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              {personalInfo.location}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-3xl p-7 glow-hover overflow-hidden sheen"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl glass-strong flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300"
                      style={{
                        boxShadow: `0 0 24px ${item.color}30`,
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: item.color }}
                      />
                    </div>
                    <span className="font-mono text-[0.6rem] tracking-[0.18em] text-dark-400">
                      / 0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-dark-200 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
