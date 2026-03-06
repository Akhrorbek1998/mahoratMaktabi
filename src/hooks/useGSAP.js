import { useEffect, useRef } from 'react';

/**
 * useGSAP — GSAP animation hook with automatic cleanup
 * Loads GSAP dynamically from CDN and provides a context-based API.
 * @param {Function} callback - (gsap, ScrollTrigger) => cleanup fn
 * @param {Array} deps - Dependencies array
 */
export function useGSAP(callback, deps = []) {
  const cleanupRef = useRef(null);

  useEffect(() => {
    const run = () => {
      if (window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        cleanupRef.current = callback(window.gsap, window.ScrollTrigger);
      }
    };

    if (window.gsap && window.ScrollTrigger) {
      run();
      return () => { if (typeof cleanupRef.current === 'function') cleanupRef.current(); };
    }

    const srcs = [
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
    ];

    let loaded = 0;
    srcs.forEach((src) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        loaded++;
        if (loaded === srcs.length) run();
        return;
      }
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = () => { loaded++; if (loaded === srcs.length) run(); };
      document.head.appendChild(s);
    });

    return () => { if (typeof cleanupRef.current === 'function') cleanupRef.current(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
