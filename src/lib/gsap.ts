"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  try {
    gsap.registerPlugin(SplitText);
  } catch {
    // SplitText is a Club GreenSock plugin - safe fallback
  }
  registered = true;
}

export { gsap, ScrollTrigger };
