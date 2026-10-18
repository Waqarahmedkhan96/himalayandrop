'use client';
// Lenis gives the whole page a smooth, weighted scroll and keeps GSAP's
// ScrollTrigger in sync with it. Also drives the gold progress bar at the top.
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';

export default function SmoothScroll() {
  const bar = useRef(null);

  useEffect(() => {
    const progress = gsap.quickSetter(bar.current, 'scaleX');
    const updateBar = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress(max > 0 ? window.scrollY / max : 0);
    };

    if (prefersReducedMotion()) {
      window.addEventListener('scroll', updateBar, { passive: true });
      return () => window.removeEventListener('scroll', updateBar);
    }

    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -72 } });
    window.__lenis = lenis; // lets other components pause scrolling (e.g. open cart)
    lenis.on('scroll', () => {
      ScrollTrigger.update();
      updateBar();
    });
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return <div className="progress" ref={bar} aria-hidden="true" />;
}
