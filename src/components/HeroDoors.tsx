import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type HeroDoorsProps = {
  className?: string;
  cycleMs?: number;
  enableAutoCycle?: boolean;
};

const HeroDoors = ({ className, cycleMs = 6000, enableAutoCycle = true }: HeroDoorsProps) => {
  const [open, setOpen] = useState(false);
  const cycleRef = useRef<number | null>(null);

  useEffect(() => {
    // Auto-open shortly after mount, then cycle open/close
    const t = setTimeout(() => setOpen(true), 500);
    if (enableAutoCycle) {
      const id = window.setInterval(() => setOpen((v) => !v), cycleMs);
      cycleRef.current = id;
    }
    return () => {
      clearTimeout(t);
      if (cycleRef.current) {
        clearInterval(cycleRef.current);
        cycleRef.current = null;
      }
    };
  }, [cycleMs, enableAutoCycle]);

  // Listen for global hero toggle events; allows parent container clicks without blocking CTAs
  useEffect(() => {
    const handler = () => {
      if (cycleRef.current) {
        clearInterval(cycleRef.current);
        cycleRef.current = null;
      }
      setOpen((v) => !v);
    };
    window.addEventListener("toggle-hero-doors", handler as EventListener);
    return () => window.removeEventListener("toggle-hero-doors", handler as EventListener);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-10 flex items-stretch justify-center",
        className,
      )}
      aria-hidden
    >
      {/* Left door */}
      <div
        className={cn(
          "h-full w-1/2 bg-gradient-to-r from-slate-900/90 to-slate-700/70 backdrop-blur-[1px] border-r border-white/20 transition-transform duration-700 ease-in-out",
          open ? "-translate-x-full" : "translate-x-0",
        )}
      />
      {/* Right door */}
      <div
        className={cn(
          "h-full w-1/2 bg-gradient-to-l from-slate-900/90 to-slate-700/70 backdrop-blur-[1px] border-l border-white/20 transition-transform duration-700 ease-in-out",
          open ? "translate-x-full" : "translate-x-0",
        )}
      />
    </div>
  );
};

export default HeroDoors;


