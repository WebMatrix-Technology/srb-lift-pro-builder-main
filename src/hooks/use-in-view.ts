import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
}) {
  const { root = null, rootMargin = "0px 0px -10% 0px", threshold = 0.1, once = true } = options || {};
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (inView && once) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { root, rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold, once, inView]);

  return { ref, inView };
}


