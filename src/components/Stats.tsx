"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components";
import { DecorativeLeaf, DecorativeDots } from "./SvgDecorations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years in Business" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: value,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              if (ref.current) {
                ref.current.textContent = Math.round(obj.val) + suffix;
              }
            },
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      0{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <DecorativeLeaf position="top-left" size="sm" className="opacity-20" />
      <DecorativeLeaf position="bottom-right" size="md" className="opacity-15" />
      <DecorativeDots className="top-10 right-10 hidden md:block" columns={5} rows={4} />

      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
