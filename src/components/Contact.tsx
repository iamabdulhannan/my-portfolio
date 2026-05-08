"use client";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check, MapPin } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const socials = [
  { label: "LinkedIn", href: personalInfo.linkedin, Icon: LinkedinIcon, hint: "Connect" },
  { label: "GitHub", href: personalInfo.github, Icon: GithubIcon, hint: "Code" },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 mesh-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1100px] h-[520px] bg-primary/8 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[0.7rem] uppercase tracking-[0.18em] text-primary mb-6">
            <span className="w-1 h-1 rounded-full bg-primary" />
            Contact · 05
          </span>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-[8rem] font-extrabold text-white tracking-[-0.045em] leading-[0.9]">
            Let&apos;s build
            <br />
            <span className="font-serif italic font-normal gradient-text">
              something real
            </span>
            <span className="text-primary">.</span>
          </h2>
          <p className="text-dark-200 text-lg sm:text-xl max-w-xl mt-6 leading-relaxed">
            Open to senior IC roles and ambitious product collaborations. If
            you&apos;re shipping something real — let&apos;s talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl mb-6"
        >
          <div className="relative glass-strong rounded-3xl p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl glass-strong flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-dark-300 mb-1">
                  Drop me a line
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-display text-xl sm:text-2xl font-semibold text-white hover:text-primary transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={copy}
                className="btn-secondary !py-2.5 !px-4 text-sm"
                aria-label="Copy email"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary !py-2.5 !px-5 text-sm"
              >
                <span className="relative z-10">Send mail</span>
                <ArrowUpRight className="w-4 h-4 relative z-10" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid sm:grid-cols-3 gap-3"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              className="group relative glass rounded-2xl px-6 py-5 flex items-center justify-between gap-3 hover:border-primary/50 hover:bg-dark-800/70 transition-colors overflow-hidden sheen"
            >
              <div className="flex items-center gap-3">
                <s.Icon className="w-5 h-5 text-dark-100 group-hover:text-white transition-colors" />
                <div>
                  <div className="font-display text-base font-semibold text-white">
                    {s.label}
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[0.18em] text-dark-300 font-mono">
                    {s.hint}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-dark-300 group-hover:text-primary group-hover:rotate-[20deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </motion.a>
          ))}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
            className="group relative glass rounded-2xl px-6 py-5 flex items-center justify-between gap-3 overflow-hidden sheen"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-dark-100" />
              <div>
                <div className="font-display text-base font-semibold text-white">
                  Remote
                </div>
                <div className="text-[0.65rem] uppercase tracking-[0.18em] text-dark-300 font-mono">
                  UK · US time zones
                </div>
              </div>
            </div>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
