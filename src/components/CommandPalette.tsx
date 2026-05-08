"use client";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  ExternalLink,
  Mail,
  FileText,
  Home,
  User,
  Briefcase,
  Code2,
  GitFork,
  Send,
  CornerDownLeft,
  Command,
} from "lucide-react";
import { personalInfo, projects } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

type CmdItem = {
  id: string;
  label: string;
  hint?: string;
  group: "Navigate" | "Projects" | "Links" | "Actions";
  icon: React.ComponentType<{ className?: string }>;
  perform: () => void;
  keywords?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const items = useMemo<CmdItem[]>(() => {
    const goto = (hash: string) => () => {
      onClose();
      requestAnimationFrame(() => {
        document
          .querySelector(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };
    const open = (url: string) => () => {
      onClose();
      window.open(url, "_blank", "noopener,noreferrer");
    };
    return [
      { id: "nav-home", label: "Go to Home", group: "Navigate", icon: Home, perform: goto("#top") },
      { id: "nav-about", label: "Go to About", group: "Navigate", icon: User, perform: goto("#about") },
      { id: "nav-projects", label: "Go to Projects", group: "Navigate", icon: GitFork, perform: goto("#projects") },
      { id: "nav-experience", label: "Go to Experience", group: "Navigate", icon: Briefcase, perform: goto("#experience") },
      { id: "nav-skills", label: "Go to Tech Stack", group: "Navigate", icon: Code2, perform: goto("#skills") },
      { id: "nav-contact", label: "Go to Contact", group: "Navigate", icon: Send, perform: goto("#contact") },
      ...projects.map<CmdItem>((p) => ({
        id: `project-${p.id}`,
        label: p.title,
        hint: p.tagline,
        group: "Projects",
        icon: ArrowRight,
        keywords: `${p.tagline} ${p.tech.join(" ")} ${p.category}`,
        perform: () => {
          onClose();
          if (p.link) window.open(p.link, "_blank", "noopener,noreferrer");
          else
            requestAnimationFrame(() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            });
        },
      })),
      { id: "link-linkedin", label: "Open LinkedIn", group: "Links", icon: LinkedinIcon, perform: open(personalInfo.linkedin) },
      { id: "link-github", label: "Open GitHub", group: "Links", icon: GithubIcon, perform: open(personalInfo.github) },
      { id: "link-email", label: `Email ${personalInfo.email}`, group: "Actions", icon: Mail, perform: () => { onClose(); window.location.href = `mailto:${personalInfo.email}`; } },
      { id: "link-resume", label: "Download Résumé (PDF)", group: "Actions", icon: FileText, perform: open(personalInfo.resumeUrl) },
      { id: "action-copy-email", label: "Copy email to clipboard", group: "Actions", icon: Mail, perform: async () => { await navigator.clipboard.writeText(personalInfo.email); onClose(); } },
    ];
  }, [onClose]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) =>
      `${i.label} ${i.hint ?? ""} ${i.keywords ?? ""} ${i.group}`
        .toLowerCase()
        .includes(q)
    );
  }, [items, query]);

  const grouped = useMemo(() => {
    const groups: Record<string, CmdItem[]> = {};
    filtered.forEach((i) => {
      groups[i.group] ??= [];
      groups[i.group].push(i);
    });
    return groups;
  }, [filtered]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  useEffect(() => {
    setActive((a) => Math.min(a, Math.max(0, filtered.length - 1)));
  }, [filtered.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => (a + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => (a - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        filtered[active]?.perform();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, active, filtered, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
            className="relative w-full max-w-xl rounded-2xl border border-dark-500/60 bg-dark-700/95 shadow-2xl shadow-black/50 backdrop-blur-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-dark-500/60">
              <Search className="w-4 h-4 text-dark-300 shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, sections, links…"
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-dark-300"
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-dark-400/60 bg-dark-800/60 text-[0.65rem] text-dark-200 font-mono">
                ESC
              </kbd>
            </div>
            <div className="max-h-[55vh] overflow-y-auto px-2 py-2">
              {filtered.length === 0 ? (
                <div className="py-10 text-center text-sm text-dark-300">
                  No results for &ldquo;{query}&rdquo;
                </div>
              ) : (
                Object.entries(grouped).map(([group, list]) => (
                  <div key={group} className="py-1">
                    <div className="px-3 pt-2 pb-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-dark-300">
                      {group}
                    </div>
                    {list.map((i) => {
                      const idx = filtered.indexOf(i);
                      const isActive = idx === active;
                      const Icon = i.icon;
                      return (
                        <button
                          key={i.id}
                          onMouseEnter={() => setActive(idx)}
                          onClick={() => i.perform()}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                            isActive
                              ? "bg-primary/15 text-white"
                              : "text-dark-100 hover:bg-dark-600/50"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 shrink-0 ${
                              isActive ? "text-primary" : "text-dark-300"
                            }`}
                          />
                          <span className="flex-1 truncate">
                            <span className="text-sm">{i.label}</span>
                            {i.hint && (
                              <span className="ml-2 text-xs text-dark-300">
                                {i.hint}
                              </span>
                            )}
                          </span>
                          {isActive && (
                            <CornerDownLeft className="w-3.5 h-3.5 text-primary" />
                          )}
                          {i.id.startsWith("link-") && (
                            <ExternalLink className="w-3.5 h-3.5 text-dark-300" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-dark-500/60 text-[0.7rem] text-dark-300">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <kbd className="font-mono">↑</kbd>
                  <kbd className="font-mono">↓</kbd>
                  navigate
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="font-mono">↵</kbd>
                  select
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5">
                <Command className="w-3 h-3" /> + K to toggle
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
