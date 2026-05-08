"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import CommandPalette from "./CommandPalette";

type Ctx = { open: boolean; setOpen: (v: boolean) => void; toggle: () => void };

const CommandPaletteCtx = createContext<Ctx | null>(null);

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteCtx);
  if (!ctx)
    throw new Error("useCommandPalette must be used within CommandPaletteProvider");
  return ctx;
}

export default function CommandPaletteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isModK =
        (e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey);
      const isSlash = e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey;
      const target = e.target as HTMLElement | null;
      const inField =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (isModK) {
        e.preventDefault();
        toggle();
      } else if (isSlash && !inField) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <CommandPaletteCtx.Provider value={{ open, setOpen, toggle }}>
      {children}
      <CommandPalette open={open} onClose={() => setOpen(false)} />
    </CommandPaletteCtx.Provider>
  );
}
