"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorSpotlight() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness: 90, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 90, damping: 18, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed top-0 left-0 z-0 w-[480px] h-[480px] rounded-full opacity-60 mix-blend-screen"
    >
      <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(88,166,255,0.18)_0%,rgba(124,58,237,0.10)_30%,rgba(0,0,0,0)_70%)] blur-2xl" />
    </motion.div>
  );
}
