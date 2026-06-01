"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
  delay?: number;
};

export function AnimatedHeadline({
  children,
  className,
  as: Tag = "h1",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    registerGsap();

    const el = ref.current;
    const ctx = gsap.context(() => {
      let targets: HTMLElement[] | NodeListOf<Element> | null = null;

      try {
        const SplitText = (gsap as any).SplitText;
        if (SplitText) {
          const split = new SplitText(el, { type: "lines,words" });
          targets = split.words as HTMLElement[];
          gsap.from(targets, {
            y: 80,
            opacity: 0,
            rotateX: -90,
            stagger: 0.05,
            duration: 0.9,
            delay,
            ease: "back.out(1.4)",
          });
          return;
        }
      } catch {}

      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay,
        ease: "power3.out",
      });
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <Tag ref={ref as any} className={cn("overflow-hidden", className)}>
      {children}
    </Tag>
  );
}
