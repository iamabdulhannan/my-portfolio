"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  ArrowUpRight,
  MapPin,
  Zap,
  Layers3,
} from "lucide-react";
import { personalInfo, projects, stats } from "@/data/portfolio";
import { useCommandPalette } from "./CommandPaletteProvider";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const TECH_MARQUEE = [
  "React",
  "TypeScript",
  "Next.js",
  "NestJS",
  "GraphQL",
  "Three.js",
  "OpenAI",
  "Python",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "Socket.io",
  "Tailwind CSS",
  "Framer Motion",
  "Adobe CEP",
  "AWS",
  "Docker",
];

const FEATURED_IDS = ["lifecycle-plm", "revops", "lifecycle-adobe"];

const SPRING = { type: "spring" as const, stiffness: 220, damping: 28, mass: 0.7 };

function SplitWord({
  word,
  delay = 0,
  className = "",
}: {
  word: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`inline-block whitespace-nowrap ${className}`}>
      {word.split("").map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-bottom"
          style={{ lineHeight: 1.05 }}
        >
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 26,
              mass: 0.6,
              delay: delay + i * 0.04,
            }}
            className="inline-block"
          >
            {ch === " " ? " " : ch}
          </motion.span>
        </span>
      ))}
      <span className="sr-only">{word}</span>
    </span>
  );
}

function RotatingRole({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, [words.length]);
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");
  return (
    <span className="relative inline-block align-baseline overflow-hidden h-[1.05em]">
      <span aria-hidden className="invisible whitespace-nowrap">
        {longest}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{
            y: { type: "spring", stiffness: 240, damping: 26, mass: 0.6 },
            opacity: { duration: 0.35 },
            filter: { duration: 0.35 },
          }}
          className="absolute inset-0 gradient-text whitespace-nowrap font-serif italic"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function MagneticButton({
  children,
  className = "",
  onClick,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <motion.button
      ref={ref}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const x = (e.clientX - rect.left - rect.width / 2) * 0.22;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.22;
        setPos({ x, y });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos}
      transition={{ type: "spring", stiffness: 220, damping: 15, mass: 0.4 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

function HeroProductShowcase() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), {
    stiffness: 180,
    damping: 22,
  });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), {
    stiffness: 180,
    damping: 22,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const lifecycle = projects.find((p) => p.id === "lifecycle-plm");
  const adobe = projects.find((p) => p.id === "lifecycle-adobe");
  const revops = projects.find((p) => p.id === "revops");

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 1400,
      }}
      className="relative w-full max-w-[520px] mx-auto"
    >
      {/* Floating "Available" pill — top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.55 }}
        className="absolute -top-4 -right-3 sm:-right-6 z-30 rounded-2xl"
      >
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-strong shadow-xl shadow-black/40 float-soft">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <div className="text-[0.7rem] leading-tight">
            <div className="text-white font-semibold">Available</div>
            <div className="text-dark-300 text-[0.6rem] uppercase tracking-[0.18em]">
              Senior IC
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating location chip — mid right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...SPRING, delay: 0.85 }}
        className="absolute top-[28%] -right-4 sm:-right-10 z-30 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full glass-strong shadow-xl shadow-black/40 float-soft"
        style={{ animationDelay: "0.8s" }}
      >
        <MapPin className="w-3 h-3 text-primary" />
        <span className="text-[0.65rem] text-dark-100 font-mono">UK · US</span>
      </motion.div>

      {/* Stack tag — left mid */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...SPRING, delay: 0.9 }}
        className="absolute top-[58%] -left-3 sm:-left-10 z-30 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full glass-strong shadow-xl shadow-black/40 float-soft"
        style={{ animationDelay: "1.4s" }}
      >
        <Sparkles className="w-3 h-3 text-accent" />
        <span className="text-[0.65rem] text-dark-100 font-mono">
          React · NestJS · OpenAI
        </span>
      </motion.div>

      {/* Featured project label — top left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.5 }}
        className="absolute -top-4 left-2 sm:-left-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full glass-strong shadow-xl shadow-black/40"
      >
        <Layers3 className="w-3 h-3 text-primary" />
        <span className="text-[0.6rem] uppercase tracking-[0.22em] text-dark-100 font-mono">
          Featured · Enterprise PLM
        </span>
      </motion.div>

      {/* Main browser-window mockup */}
      <motion.a
        href={lifecycle?.link ?? "#projects"}
        target={lifecycle?.link ? "_blank" : undefined}
        rel={lifecycle?.link ? "noopener noreferrer" : undefined}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.4 }}
        className="relative block aspect-[16/12] rounded-3xl overflow-hidden bg-dark-700 shadow-2xl shadow-black/70 group border border-dark-500/40"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 h-9 bg-dark-800/95 backdrop-blur flex items-center gap-1.5 px-3.5 z-10 border-b border-dark-500/40">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
          <span className="ml-3 text-[0.65rem] font-mono text-dark-300">
            lifecycleplm.com
          </span>
          <ArrowUpRight className="ml-auto w-3.5 h-3.5 text-dark-300 group-hover:text-white group-hover:rotate-12 transition-all" />
        </div>

        {/* Banner image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/projects/lifecycle-plm.jpg"
          alt="Lifecycle PLM"
          className="absolute inset-0 w-full h-full object-cover pt-9 transition-transform duration-700 group-hover:scale-105"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-900/90 to-transparent pointer-events-none" />

        {/* Bottom signature inside mockup */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
          <div>
            <div className="text-[0.55rem] uppercase tracking-[0.22em] text-white/65 font-mono">
              Featured product
            </div>
            <div className="text-white font-display text-base sm:text-lg font-semibold leading-tight">
              {lifecycle?.title}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[0.55rem] uppercase tracking-[0.22em] text-white/65 font-mono">
              Stack
            </div>
            <div className="text-white font-mono text-xs">
              {lifecycle?.tech.length}+ tech
            </div>
          </div>
        </div>
      </motion.a>

      {/* "Currently shipping" chip — bottom left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.75 }}
        className="absolute -bottom-5 -left-3 sm:-left-7 z-30 flex items-center gap-2 px-3 py-2 rounded-2xl glass-strong shadow-xl shadow-black/40 max-w-[260px]"
      >
        <div
          className="w-7 h-7 rounded-lg shrink-0 grid place-items-center"
          style={{ background: lifecycle?.color ?? "#58A6FF" }}
        >
          <Zap className="w-3.5 h-3.5 text-dark-900" strokeWidth={2.5} />
        </div>
        <div className="text-[0.7rem] leading-tight min-w-0">
          <div className="text-dark-300 text-[0.6rem] uppercase tracking-[0.18em]">
            Currently shipping
          </div>
          <div className="text-white font-semibold truncate">
            {lifecycle?.title}
          </div>
        </div>
      </motion.div>

      {/* Mini secondary mockups — fanned cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.95 }}
        className="grid grid-cols-2 gap-3 mt-7"
      >
        {[adobe, revops].map(
          (p) =>
            p && (
              <motion.a
                key={p.id}
                href={p.link ?? "#projects"}
                target={p.link ? "_blank" : undefined}
                rel={p.link ? "noopener noreferrer" : undefined}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="group relative aspect-[16/10] rounded-xl overflow-hidden glass shadow-xl shadow-black/40"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.banner}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 mix-blend-overlay opacity-50"
                  style={{
                    background: `linear-gradient(135deg, ${p.color}aa, transparent 60%)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />
                <div className="absolute bottom-1.5 left-2 right-2">
                  <div className="font-display text-[0.7rem] font-semibold text-white truncate">
                    {p.title}
                  </div>
                </div>
                <ArrowUpRight className="absolute top-1.5 right-1.5 w-3 h-3 text-white/80 group-hover:rotate-12 transition-all" />
              </motion.a>
            )
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { setOpen } = useCommandPalette();
  const [platformMod, setPlatformMod] = useState("⌘");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgParallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
      setPlatformMod(isMac ? "⌘" : "Ctrl");
    }
  }, []);

  const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 pb-14"
    >
      <motion.div style={{ y: bgParallaxY }} className="mesh-bg" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <motion.div
        style={{ y: heroParallaxY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8"
      >
        {/* Top status row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0 }}
          className="flex flex-wrap items-center justify-between gap-3 mb-10"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-dark-100 font-mono">
              <span className="text-dark-300">Issue №</span>
              <span className="text-white">07.05.26</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-dark-200">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Senior Software Engineer · UK · US
            </span>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-dark-200 hover:text-white hover:border-primary/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-primary transition-transform duration-300 group-hover:rotate-[14deg] group-hover:scale-110" />
            <span>Press</span>
            <kbd className="kbd">{platformMod}</kbd>
            <kbd className="kbd">K</kbd>
            <span className="text-dark-300 group-hover:text-dark-100">to navigate</span>
          </button>
        </motion.div>

        {/* Editorial split layout */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT: Massive editorial type */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 divider-glow" />
              <span className="text-[0.7rem] uppercase tracking-[0.28em] text-dark-200 font-mono">
                The Portfolio · 2026 Edition
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.08 }}
              className="font-serif italic text-2xl sm:text-3xl text-dark-100 mb-2"
            >
              Hello — I&apos;m
            </motion.p>

            <h1 className="text-display-2xl text-[3.2rem] sm:text-7xl lg:text-8xl xl:text-[8.5rem] text-white">
              <SplitWord word="Abdul" delay={0.15} />
              <br />
              <span className="font-serif italic font-normal text-white/95">
                <SplitWord word="Hannan" delay={0.35} />
              </span>
              <span className="text-primary">.</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.55 }}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium mt-6 mb-7 tracking-tight text-dark-100"
            >
              Building{" "}
              <RotatingRole
                words={[
                  "AI-native SaaS.",
                  "production systems.",
                  "creative tools.",
                  "fintech dashboards.",
                  "Adobe extensions.",
                ]}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.6 }}
              className="text-dark-200 text-base sm:text-lg max-w-xl leading-relaxed mb-9"
            >
              Senior full-stack engineer shipping production-grade systems for
              UK & US startups — from{" "}
              <span className="text-white font-medium">AI-driven PLM</span>{" "}
              to{" "}
              <span className="text-white font-medium">Adobe extensions</span>{" "}
              and{" "}
              <span className="text-white font-medium">fintech dashboards</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.66 }}
              className="flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                onClick={() =>
                  document
                    .getElementById("showcase")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                ariaLabel="View work"
                className="btn-primary"
              >
                <span className="relative z-10">View work</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </MagneticButton>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download className="w-4 h-4" />
                Résumé
              </a>
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="icon-btn glass text-dark-200 hover:text-white hover:border-primary/60"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="icon-btn glass text-dark-200 hover:text-white hover:border-primary/60"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.74 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 mt-10 max-w-xl pt-6 border-t border-dark-500/40"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[0.16em] text-dark-300 mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Product showcase (no portrait) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <HeroProductShowcase />
          </div>
        </div>

        {/* Featured strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.9 }}
          className="mt-16 sm:mt-20"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="w-10 divider-glow" />
              <span className="text-[0.7rem] uppercase tracking-[0.28em] text-dark-200 font-mono">
                Selected work · {projects.length} projects
              </span>
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("showcase")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-1.5 text-xs text-dark-200 hover:text-white transition-colors"
            >
              See all
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featured.map((p, idx) => (
              <motion.button
                key={p.id}
                onClick={() =>
                  document
                    .getElementById("showcase")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...SPRING, delay: 0.96 + idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden glass text-left cursor-pointer transition-colors hover:border-primary/40 sheen"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-dark-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.banner}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 mix-blend-overlay opacity-50"
                    style={{
                      background: `linear-gradient(135deg, ${p.color}aa, transparent 60%)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full glass-strong text-[0.6rem] font-mono uppercase tracking-[0.18em] text-dark-100">
                      {p.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full glass-strong text-[0.6rem] font-mono text-dark-200">
                      {p.year}
                    </span>
                  </div>
                  <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-dark-200 group-hover:text-white group-hover:rotate-12 transition-all" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold text-white tracking-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-dark-200 line-clamp-1 mt-1">
                    {p.tagline}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative w-full overflow-hidden mt-14"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex gap-3 whitespace-nowrap py-1 animate-marquee w-max">
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
              <span key={`${tech}-${i}`} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
