"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  CheckCircle2,
  Calendar,
  Sparkles,
  Users,
  Clock,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects, Project } from "@/data/portfolio";

const categories = [
  { key: "all", label: "All" },
  { key: "enterprise", label: "Enterprise" },
  { key: "saas", label: "SaaS" },
  { key: "fintech", label: "Fintech" },
  { key: "creative", label: "Creative" },
  { key: "ai", label: "AI" },
];

const CARD_SPRING = { type: "spring" as const, stiffness: 300, damping: 30, mass: 0.7 };

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={CARD_SPRING}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl overflow-hidden glass cursor-pointer"
      onClick={onSelect}
    >
      <motion.div
        layoutId={`banner-${project.id}`}
        transition={CARD_SPRING}
        className="relative aspect-[16/10] overflow-hidden bg-dark-800"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.banner}
          alt={`${project.title} preview`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-50"
          style={{
            background: `linear-gradient(135deg, ${project.color}aa 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full glass-strong text-[0.65rem] font-mono uppercase tracking-[0.15em] text-dark-100">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full glass-strong text-[0.65rem] font-mono text-dark-200 inline-flex items-center gap-1">
            <Calendar className="w-2.5 h-2.5" />
            {project.year}
          </span>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Open ${project.title} live`}
            className="absolute top-4 right-4 w-9 h-9 rounded-full glass-strong flex items-center justify-center text-dark-100 hover:text-white hover:bg-primary hover:border-primary transition-all opacity-0 group-hover:opacity-100 translate-y-[-4px] group-hover:translate-y-0 duration-300"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </motion.div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <motion.h3
              layoutId={`title-${project.id}`}
              transition={CARD_SPRING}
              className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors"
            >
              {project.title}
            </motion.h3>
            <p className="text-xs uppercase tracking-[0.18em] text-dark-300 mt-1">
              {project.tagline}
            </p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-dark-300 group-hover:text-primary group-hover:rotate-12 transition-all shrink-0 mt-1" />
        </div>

        <p className="text-dark-200 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-badge opacity-60">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-dark-300 group-hover:text-primary transition-colors">
          <Sparkles className="w-3 h-3" />
          <span>Read case study</span>
        </div>
      </div>
    </motion.div>
  );
}

function CaseStudy({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[80] overflow-y-auto bg-dark-900/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <motion.article
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ ...CARD_SPRING, delay: 0.05 }}
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto my-6 sm:my-10 w-full max-w-5xl rounded-3xl glass-strong overflow-hidden shadow-2xl shadow-black/60"
      >
        {/* Hero banner with shared element */}
        <motion.div
          layoutId={`banner-${project.id}`}
          transition={CARD_SPRING}
          className="relative aspect-[2.4/1] overflow-hidden bg-dark-800"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.banner}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 mix-blend-overlay opacity-55"
            style={{
              background: `linear-gradient(135deg, ${project.color}cc, transparent 60%)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/95 via-dark-900/30 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="absolute top-5 right-5 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-dark-100 hover:text-white transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full glass-strong text-[0.65rem] font-mono uppercase tracking-[0.18em] text-dark-100">
                {project.category}
              </span>
              <span className="px-2.5 py-1 rounded-full glass-strong text-[0.65rem] font-mono text-dark-200">
                {project.year}
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-white text-dark-900 text-xs font-semibold inline-flex items-center gap-1 hover:shadow-lg hover:shadow-white/20 transition-all"
                >
                  Visit live <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <motion.h3
              layoutId={`title-${project.id}`}
              transition={CARD_SPRING}
              className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.02em]"
            >
              {project.title}
            </motion.h3>
            <p className="text-dark-100 mt-1 text-sm sm:text-base">
              {project.tagline}
            </p>
          </div>
        </motion.div>

        {/* Body */}
        <div className="px-5 sm:px-10 py-7 sm:py-10">
          {/* Meta strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...CARD_SPRING, delay: 0.18 }}
            className="grid grid-cols-3 gap-4 mb-8 pb-7 border-b border-dark-500/40"
          >
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.18em] text-dark-300 font-mono mb-1 inline-flex items-center gap-1">
                <Users className="w-3 h-3" /> Role
              </div>
              <div className="text-sm text-dark-100">
                {project.caseStudy.role}
              </div>
            </div>
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.18em] text-dark-300 font-mono mb-1 inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Team
              </div>
              <div className="text-sm text-dark-100">
                {project.caseStudy.team}
              </div>
            </div>
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.18em] text-dark-300 font-mono mb-1 inline-flex items-center gap-1">
                <Clock className="w-3 h-3" /> Duration
              </div>
              <div className="text-sm text-dark-100">
                {project.caseStudy.duration}
              </div>
            </div>
          </motion.div>

          {/* Problem / Approach / Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...CARD_SPRING, delay: 0.25 }}
            className="grid md:grid-cols-3 gap-4 mb-9"
          >
            {[
              { label: "Problem", body: project.caseStudy.problem, color: "#ef4444" },
              { label: "Approach", body: project.caseStudy.approach, color: project.color },
              { label: "Outcome", body: project.caseStudy.outcome, color: "#22c55e" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...CARD_SPRING, delay: 0.28 + i * 0.04 }}
                className="rounded-2xl p-5 bg-dark-700/50 border border-dark-500/40"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-dark-300 font-mono">
                    {s.label}
                  </span>
                </div>
                <p className="text-dark-100 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...CARD_SPRING, delay: 0.36 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
          >
            {project.caseStudy.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...CARD_SPRING, delay: 0.4 + i * 0.04 }}
                className="rounded-2xl p-4 glass overflow-hidden relative"
              >
                <div
                  className="absolute -inset-px rounded-2xl opacity-20"
                  style={{
                    background: `radial-gradient(circle at 30% 0%, ${project.color}, transparent 70%)`,
                  }}
                />
                <div className="relative">
                  <div
                    className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight"
                    style={{ color: project.color }}
                  >
                    {m.value}
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[0.16em] text-dark-300 mt-1">
                    {m.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="space-y-6 mb-10"
          >
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-dark-300">
              How it was built
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {project.caseStudy.sections.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...CARD_SPRING, delay: 0.5 + i * 0.05 }}
                  className="rounded-2xl p-5 bg-dark-800/40 border border-dark-500/30 hover:border-primary/40 transition-colors"
                >
                  <h5 className="font-display text-base font-semibold text-white mb-2">
                    {s.title}
                  </h5>
                  <p className="text-dark-200 text-sm leading-relaxed">
                    {s.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights + Tech */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="grid md:grid-cols-2 gap-7"
          >
            <div>
              <h4 className="font-display text-sm uppercase tracking-[0.2em] text-dark-300 mb-4">
                Key highlights
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: project.color }}
                    />
                    <span className="text-dark-100 text-sm leading-relaxed">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm uppercase tracking-[0.2em] text-dark-300 mb-4">
                Tech stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {project.link && (
            <div className="mt-10 pt-7 border-t border-dark-500/30 flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm text-dark-200">
                Want a closer look?
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span className="relative z-10">Visit live site</span>
                <ExternalLink className="w-4 h-4 relative z-10" />
              </a>
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (selected) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [selected]);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 dotted-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={CARD_SPRING}
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[0.7rem] uppercase tracking-[0.18em] text-primary mb-4">
            <span className="w-1 h-1 rounded-full bg-primary" />
            Selected work
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-[-0.04em] leading-[0.95]">
            The full <span className="font-serif italic font-normal gradient-text">archive</span>
            <span className="text-primary">.</span>
          </h2>
          <p className="text-dark-200 text-base sm:text-lg max-w-2xl">
            Every project I&apos;ve shipped — tap any card for the full case study:
            problem, approach, outcome, metrics, and how each piece was built.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ ...CARD_SPRING, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const isActive = filter === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  isActive ? "text-dark-900" : "text-dark-200 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filterActive"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white"
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 rounded-full glass" />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={() => setSelected(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {selected && (
              <CaseStudy
                project={selected}
                onClose={() => setSelected(null)}
              />
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}
