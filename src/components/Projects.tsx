"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects, Project } from "@/data/portfolio";

const categories = [
  { key: "all", label: "All Projects" },
  { key: "enterprise", label: "Enterprise" },
  { key: "saas", label: "SaaS" },
  { key: "fintech", label: "Fintech" },
  { key: "creative", label: "Creative" },
];

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass rounded-2xl overflow-hidden glow-hover group cursor-pointer"
      onClick={onSelect}
    >
      {/* Colored top bar */}
      <div
        className="h-1.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.color}, ${project.color}88)`,
        }}
      />

      <div className="p-6 sm:p-8">
        {/* Icon and category */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{project.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-dark-300 mt-0.5">
                {project.tagline}
              </p>
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg hover:bg-dark-500 transition-colors text-dark-200 hover:text-primary"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-dark-200 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="tech-badge text-xs">
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="tech-badge text-xs opacity-60">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* View details prompt */}
        <div className="flex items-center gap-2 text-sm text-dark-300 group-hover:text-primary transition-colors">
          <span>View details</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative glass rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient bar */}
        <div
          className="h-2 w-full rounded-t-3xl"
          style={{
            background: `linear-gradient(90deg, ${project.color}, ${project.color}88)`,
          }}
        />

        <div className="p-6 sm:p-10">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-dark-500 transition-colors text-dark-200 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{project.icon}</span>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-dark-200">{project.tagline}</p>
            </div>
          </div>

          {/* Long description */}
          <p className="text-dark-100 leading-relaxed mb-8">
            {project.longDescription}
          </p>

          {/* Highlights */}
          <h4 className="text-lg font-semibold text-white mb-4">
            Key Highlights
          </h4>
          <ul className="space-y-3 mb-8">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: project.color }}
                />
                <span className="text-dark-200 text-sm">{h}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <h4 className="text-lg font-semibold text-white mb-4">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>

          {/* Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-dark-900 font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Visit Live Site
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8" />
          <p className="text-dark-200 text-lg max-w-2xl mx-auto">
            A collection of production-grade platforms I&apos;ve architected and built
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.key
                  ? "bg-primary text-dark-900"
                  : "glass text-dark-200 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onSelect={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
