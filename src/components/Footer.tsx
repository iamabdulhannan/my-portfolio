"use client";
import { Command, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { useCommandPalette } from "./CommandPaletteProvider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
  const { setOpen } = useCommandPalette();
  const { ref, isVisible } = useScrollReveal();
  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-dark-500/30">
      <div className="absolute inset-0 mesh-bg opacity-25 pointer-events-none" />

      {/* Massive brand mark */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
          className="select-none mask-reveal"
        >
          <h2 className="font-display font-extrabold tracking-[-0.06em] leading-[0.85] text-[18vw] sm:text-[16vw] lg:text-[14vw] text-white/90">
            ABDUL <span className="font-serif italic font-normal gradient-text">Hannan</span>
            <span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="mt-12 pb-10 grid sm:grid-cols-2 gap-8 sm:items-end">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-dark-100 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-dark-500">·</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-dark-100 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-dark-500">·</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm text-dark-100 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              Email <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="flex sm:justify-end items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-dark-500/70 bg-dark-800/40 text-xs text-dark-200 hover:text-white hover:border-primary/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-all duration-300"
            >
              <Command className="w-3 h-3 transition-transform duration-300 group-hover:rotate-[10deg]" />
              <kbd className="font-mono text-[0.65rem]">K</kbd>
              <span>Quick nav</span>
            </button>
          </div>
        </div>

        <div className="h-divider" />

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-dark-300">
            © {new Date().getFullYear()}{" "}
            <span className="text-dark-100 font-medium">
              {personalInfo.name}
            </span>
            . All rights reserved.
          </p>
          <p className="text-dark-400 font-mono uppercase tracking-[0.18em]">
            Senior Engineer · UK · US
          </p>
        </div>
      </div>
    </footer>
  );
}
