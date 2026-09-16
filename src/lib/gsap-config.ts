import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

// Animation utilities
export function fadeInUp(element: HTMLElement, delay = 0) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, delay, ease: "power3.out" }
  );
}

export function staggerFadeIn(elements: HTMLElement[], delay = 0.15) {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: delay,
      ease: "power3.out",
    }
  );
}

export function countUp(element: HTMLElement, targetNum: number, duration = 2) {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: targetNum,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toString();
    },
  });
}

export function slideInFromSide(
  element: HTMLElement,
  direction: "left" | "right" = "left",
  delay = 0
) {
  const x = direction === "left" ? -100 : 100;
  return gsap.fromTo(
    element,
    { opacity: 0, x },
    { opacity: 1, x: 0, duration: 0.8, delay, ease: "power3.out" }
  );
}
