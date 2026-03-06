import { useState, useEffect, useRef } from 'react';

/**
 * useInView — Intersection Observer hook for scroll-triggered animations
 * @param {number} threshold - Visibility threshold (0–1)
 * @param {boolean} once - Trigger only once (default: true)
 */
export function useInView(threshold = 0.15, once = true) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  return [ref, inView];
}
