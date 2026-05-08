"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const COMPANIES = [
  { name: "Lifecycle PLM", role: "AI-driven PLM · UK", current: true },
  { name: "Orbiqon", role: "Senior Eng & AI · US", current: true },
  { name: "Adobe Exchange", role: "Extension publisher", current: false },
  { name: "Capiwise", role: "Fintech dashboards", current: false },
  { name: "Outfts", role: "Social commerce", current: false },
  { name: "Bonus9ja", role: "High-traffic SaaS", current: false },
  { name: "RevOps AI", role: "AI revenue ops", current: false },
];

export default function TrustedBy() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="w-12 divider-glow" />
          <span className="text-[0.7rem] uppercase tracking-[0.28em] text-dark-200 font-mono">
            Trusted by teams shipping real products
          </span>
          <span className="w-12 divider-glow" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px rounded-2xl overflow-hidden border border-dark-500/30 bg-dark-500/30">
          {COMPANIES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 14 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              className="relative group bg-dark-900/85 px-5 py-7 flex flex-col items-center justify-center gap-1.5 text-center hover:bg-dark-800 transition-colors"
            >
              {c.current && (
                <span className="absolute top-2.5 right-2.5 flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
              )}
              <div className="font-display text-base font-semibold text-white tracking-tight group-hover:text-primary transition-colors">
                {c.name}
              </div>
              <div className="text-[0.6rem] uppercase tracking-[0.18em] text-dark-300 font-mono">
                {c.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
