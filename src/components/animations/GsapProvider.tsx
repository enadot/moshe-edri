"use client";

import { useEffect } from "react";
import { registerGsap, gsap, ScrollTrigger } from "@/lib/gsap";

export function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-gsap='fade-up']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='fade-in']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          duration: 0.9,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='scale-in']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.97,
          y: 20,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils
        .toArray<HTMLElement>("[data-gsap='stagger-children']")
        .forEach((parent) => {
          const children = Array.from(parent.children) as HTMLElement[];
          if (!children.length) return;
          gsap.from(children, {
            opacity: 0,
            y: 20,
            stagger: 0.08,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: parent,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        });

      gsap.utils.toArray<HTMLElement>("[data-gsap='parallax']").forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0.2");
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='reveal-x']").forEach((el) => {
        const dir = el.dataset.dir === "left" ? -1 : 1;
        gsap.from(el, {
          opacity: 0,
          x: 32 * dir,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return <>{children}</>;
}
