"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap } from "@/lib/gsap";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
};

export function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  duration = 2.2,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    registerGsap();

    const el = ref.current;
    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: to,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (!el) return;
          el.textContent = `${prefix}${obj.val
            .toFixed(decimals)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${suffix}`;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [to, prefix, suffix, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
