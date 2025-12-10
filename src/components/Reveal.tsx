"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type Variant = "fade-in" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  delayMs?: number;
};

const variantClasses: Record<Variant, { from: string; to: string }> = {
  "fade-in": { from: "opacity-0", to: "opacity-100" },
  "fade-up": { from: "opacity-0 translate-y-6", to: "opacity-100 translate-y-0" },
  "fade-down": { from: "opacity-0 -translate-y-6", to: "opacity-100 translate-y-0" },
  "fade-left": { from: "opacity-0 -translate-x-6", to: "opacity-100 translate-x-0" },
  "fade-right": { from: "opacity-0 translate-x-6", to: "opacity-100 translate-x-0" },
  "zoom-in": { from: "opacity-0 scale-95", to: "opacity-100 scale-100" },
};

export const Reveal = ({ children, className, variant = "fade-up", delayMs = 0 }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
  const v = variantClasses[variant];
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "transform-gpu transition-all duration-700 ease-out will-change-transform",
        inView ? v.to : v.from,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;


