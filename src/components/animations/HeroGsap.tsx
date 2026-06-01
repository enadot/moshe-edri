"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap } from "@/lib/gsap";

export function HeroGsap({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    registerGsap();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: -20,
        scale: 0.8,
        duration: 0.6,
      })
        .from(
          ".hero-headline > *",
          {
            opacity: 0,
            y: 60,
            stagger: 0.12,
            duration: 0.9,
          },
          "-=0.3"
        )
        .from(
          ".hero-sub",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-cta > *",
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
            stagger: 0.1,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".hero-stat",
          {
            opacity: 0,
            y: 40,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(
          ".hero-form",
          {
            opacity: 0,
            x: -40,
            duration: 0.8,
          },
          "-=0.8"
        );

      gsap.to(".hero-glow", {
        scale: 1.2,
        opacity: 0.5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
