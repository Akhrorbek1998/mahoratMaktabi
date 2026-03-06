import { useState, useEffect } from 'react';

/**
 * useCountUp — Animated number counter
 * @param {string|number} target - Target value (can include %, +)
 * @param {number} duration - Animation duration in ms
 * @param {boolean} start - Whether to start the animation
 */
export function useCountUp(target, duration = 1600, start = false) {
  const [count, setCount] = useState('0');

  useEffect(() => {
    if (!start) return;
    const numeric = parseFloat(String(target).replace(/[^0-9.]/g, ''));
    if (isNaN(numeric)) { setCount(String(target)); return; }
    let current = 0;
    const steps = Math.ceil(duration / 16);
    const increment = numeric / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numeric) {
        setCount(String(target));
        clearInterval(timer);
      } else {
        setCount(String(Math.floor(current)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);

  return count;
}
