'use client';

import { useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function CountUp({
  value,
  duration = 1.4,
  prefix = '',
  suffix = '',
  className
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const reducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }

    let raf = 0;
    let start = 0;

    const step = (timestamp: number) => {
      if (!start) {
        start = timestamp;
      }

      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setDisplayValue(Math.floor(value * eased));

      if (progress < 1) {
        raf = window.requestAnimationFrame(step);
      }
    };

    raf = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, [duration, isInView, reducedMotion, value]);

  return (
    <span className={className} ref={ref}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}
