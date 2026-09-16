"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  stagger?: number;
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  stagger = 0.1,
}: SectionRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;
    if (children.length === 0) return;

    // Set initial state based on direction
    const getInitialState = () => {
      switch (direction) {
        case "down":
          return { opacity: 0, y: -40 };
        case "left":
          return { opacity: 0, x: -60 };
        case "right":
          return { opacity: 0, x: 60 };
        default:
          return { opacity: 0, y: 40 };
      }
    };

    const getFinalState = () => {
      switch (direction) {
        case "down":
          return { opacity: 1, y: 0 };
        case "left":
        case "right":
          return { opacity: 1, x: 0 };
        default:
          return { opacity: 1, y: 0 };
      }
    };

    // Set initial state immediately
    gsap.set(children, getInitialState());

    // Create ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    tl.to(children, {
      ...getFinalState(),
      duration: 0.7,
      stagger: stagger,
      delay: delay,
      ease: "power3.out",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [delay, direction, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
