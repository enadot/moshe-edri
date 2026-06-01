"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap } from "@/lib/gsap";

export function HeroGsap({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    registerGsap();

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.7 },
      });

      tl.from(".hero-badge", { opacity: 0, y: 12 }, 0)
        .from(".hero-headline", { opacity: 0, y: 24 }, 0.1)
        .from(".hero-sub", { opacity: 0, y: 16 }, 0.25)
        .from(
          ".hero-portrait",
          { opacity: 0, y: 32, scale: 0.96, duration: 1 },
          0.2
        )
        .from(".hero-cta", { opacity: 0, y: 16 }, 0.55)
        .from(".hero-trust", { opacity: 0, y: 12 }, 0.65)
        .from(".hero-stats > *", { opacity: 0, y: 20, stagger: 0.08 }, 0.7);

      gsap.to(".hero-orb", {
        scale: 1.15,
        opacity: 0.6,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
