"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { projects, Project } from "@/data/portfolio";

const FEATURED = ["lifecycle-plm", "lifecycle-adobe", "revops", "vsignal", "apex"];

interface CardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function StackCard({ project, index, total, progress }: CardProps) {
  // Each card owns a 1/total slice. We extend an entry/exit "halo" beyond its
  // slice so neighbouring cards visibly overlap during the transition.
  const seg = 1 / total;
  const start = index * seg;
  const end = (index + 1) * seg;
  const enterStart = Math.max(0, start - seg * 0.55);
  const exitEnd = Math.min(1, end + seg * 0.55);

  // Crossfade with subtle scale + parallax-y. Resting state = scale 1, y 0.
  const opacity = useTransform(
    progress,
    [enterStart, start, end, exitEnd],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    progress,
    [enterStart, start, end, exitEnd],
    [0.92, 1, 1, 0.88]
  );
  const y = useTransform(
    progress,
    [enterStart, start, end, exitEnd],
    [70, 0, 0, -50]
  );
  const blurValue = useTransform(
    progress,
    [enterStart, start - seg * 0.05, end + seg * 0.05, exitEnd],
    [10, 0, 0, 10]
  );
  const filter = useTransform(blurValue, (b) => `blur(${b}px)`);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        filter,
        zIndex: 10 + index,
      }}
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 will-change-transform pointer-events-none"
    >
      <div className="relative w-full max-w-6xl mx-auto pointer-events-auto">
        <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-10 items-center rounded-3xl glass-strong overflow-hidden p-5 sm:p-7 lg:p-8 shadow-2xl shadow-black/60 max-h-[82vh]">
          {/* Banner-tinted background */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.banner}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-110 opacity-25"
              loading="lazy"
            />
            <div
              className="absolute inset-0 mix-blend-overlay opacity-60"
              style={{
                background: `linear-gradient(135deg, ${project.color}88, transparent 60%)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/85 to-dark-800/70" />
            <div className="absolute inset-0 dotted-bg opacity-30" />
          </div>

          {/* LEFT: editorial copy */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="px-2.5 py-0.5 rounded-full glass-strong text-[0.6rem] font-mono uppercase tracking-[0.18em]"
                style={{ color: project.color }}
              >
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full glass-strong text-[0.6rem] font-mono text-dark-200">
                {project.year}
              </span>
              <span className="ml-auto text-[0.6rem] font-mono text-dark-400 tracking-[0.18em]">
                0{index + 1} / 0{total}
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.045em] leading-[0.95] mb-2">
              {project.title}
            </h3>
            <p className="font-serif italic text-lg sm:text-xl text-dark-100 mb-3">
              {project.tagline}
            </p>
            <p className="text-dark-200 text-sm sm:text-base leading-relaxed max-w-xl mb-4 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4 max-w-xl">
              {project.tech.slice(0, 5).map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
              {project.tech.length > 5 && (
                <span className="tech-badge opacity-60">
                  +{project.tech.length - 5}
                </span>
              )}
            </div>

            <ul className="space-y-1 mb-5 max-w-xl">
              {project.highlights.slice(0, 2).map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-xs sm:text-sm text-dark-100 leading-relaxed"
                >
                  <CheckCircle2
                    className="w-3.5 h-3.5 mt-0.5 shrink-0"
                    style={{ color: project.color }}
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline-glow"
              >
                Read full case study
                <ArrowUpRight className="w-4 h-4" />
              </button>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-dark-100 hover:text-white transition-colors"
                >
                  Visit live <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* RIGHT: browser-window mockup */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-dark-500/40 bg-dark-800"
            >
              {/* Browser chrome */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-dark-800/95 backdrop-blur flex items-center gap-1.5 px-3 z-10 border-b border-dark-500/40">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                <span className="ml-3 text-[0.6rem] font-mono text-dark-300 truncate">
                  {project.link
                    ? project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")
                    : `${project.id}.app`}
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.banner}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover pt-8"
                loading="lazy"
              />
              <div
                className="absolute inset-0 mix-blend-overlay opacity-25"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, transparent 60%)`,
                }}
              />
            </motion.div>

            {/* Floating metric chip */}
            <motion.div
              whileHover={{ y: -3, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="absolute -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 glass-strong rounded-2xl p-4 shadow-xl shadow-black/40"
            >
              <div
                className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight"
                style={{ color: project.color }}
              >
                {project.caseStudy.metrics[0]?.value}
              </div>
              <div className="text-[0.6rem] uppercase tracking-[0.18em] text-dark-300 mt-1">
                {project.caseStudy.metrics[0]?.label}
              </div>
            </motion.div>

            {/* Floating "Live" tag */}
            {project.link && (
              <motion.div
                whileHover={{ y: -3 }}
                className="absolute -top-3 -right-3 glass-strong rounded-2xl px-3 py-1.5 shadow-xl shadow-black/40 flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.18em] text-dark-100">
                  Live
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressDot({
  index,
  total,
  progress,
  label,
  color,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  label: string;
  color: string;
}) {
  const seg = 1 / total;
  const start = index * seg;
  const end = (index + 1) * seg;
  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.05)],
    [0.35, 1, 1, 0.35]
  );
  const width = useTransform(
    progress,
    [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.05)],
    [16, 36, 36, 16]
  );

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[0.6rem] tabular-nums tracking-[0.18em] text-dark-300 w-8 shrink-0 text-right">
        0{index + 1}
      </span>
      <motion.div
        style={{ opacity, width, background: color }}
        className="h-1 rounded-full"
      />
      <span className="font-display text-[0.7rem] text-dark-200 truncate">
        {label}
      </span>
    </div>
  );
}

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  // Manual scroll-progress driver. Framer's useScroll({ target }) was silently
  // falling back to document-level progress (likely a hydration timing issue),
  // which made later cards never reach opacity 1.
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const range = rect.height - vh;
      if (range <= 0) {
        scrollYProgress.set(rect.top <= 0 ? 1 : 0);
        return;
      }
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / range));
      scrollYProgress.set(p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [scrollYProgress]);

  const featured = FEATURED.map((id) =>
    projects.find((p) => p.id === id)
  ).filter((p): p is Project => Boolean(p));

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative"
      style={{ height: `${featured.length * 100}vh` }}
      aria-label="Featured projects showcase"
    >
      {/* Single sticky stage — entire showcase happens here */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

        {/* Stacked cards (absolutely positioned, scroll-driven crossfade) */}
        {featured.map((p, i) => (
          <StackCard
            key={p.id}
            project={p}
            index={i}
            total={featured.length}
            progress={scrollYProgress}
          />
        ))}

        {/* Top header overlay */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 inset-x-0 pt-24 px-5 sm:px-8 z-50 pointer-events-none"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 pointer-events-auto">
            <div className="flex items-center gap-3">
              <span className="w-10 divider-glow" />
              <span className="text-[0.7rem] uppercase tracking-[0.28em] text-dark-200 font-mono inline-flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-primary" />
                Showcase · scroll to explore
              </span>
            </div>
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-dark-300 font-mono hidden sm:inline">
              <span className="text-white font-bold">{featured.length}</span>{" "}
              featured
            </span>
          </div>
        </motion.div>

        {/* Side dots indicator (desktop) */}
        <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 z-50 pointer-events-auto">
          <div className="flex flex-col gap-3 glass-strong rounded-2xl py-5 pl-3 pr-5">
            {featured.map((p, i) => (
              <ProgressDot
                key={p.id}
                index={i}
                total={featured.length}
                progress={scrollYProgress}
                label={p.title}
                color={p.color}
              />
            ))}
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <div className="text-[0.6rem] font-mono uppercase tracking-[0.22em] text-dark-300 flex items-center gap-2">
            <span className="w-6 divider-glow" />
            Scroll
            <span className="w-6 divider-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
