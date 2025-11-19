import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

type CountUpProps = {
  end: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const CountUp = ({ end, durationMs = 1200, prefix = "", suffix = "", className }: CountUpProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.round(end * eased));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, durationMs]);

  return (
    <div ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </div>
  );
};

export default CountUp;


