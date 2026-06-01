"use client";

import { useEffect } from "react";
import { registerGsap, gsap, ScrollTrigger } from "@/lib/gsap";

export function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-gsap='fade-up']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='fade-in']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='scale-in']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.85,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils
        .toArray<HTMLElement>("[data-gsap='stagger-children']")
        .forEach((parent) => {
          const children = parent.children;
          if (!children.length) return;
          gsap.from(children, {
            opacity: 0,
            y: 40,
            stagger: 0.12,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: parent,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });

      gsap.utils.toArray<HTMLElement>("[data-gsap='counter']").forEach((el) => {
        const target = parseFloat(el.dataset.target || "0");
        const decimals = parseInt(el.dataset.decimals || "0");
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${obj.val.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${suffix}`;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='parallax']").forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0.3");
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='reveal-x']").forEach((el) => {
        const dir = el.dataset.dir === "left" ? -1 : 1;
        gsap.from(el, {
          opacity: 0,
          x: 80 * dir,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
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
