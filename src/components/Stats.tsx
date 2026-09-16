"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components";
import { DecorativeLeaf, DecorativeDots } from "./SvgDecorations";

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
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  function animateCount() {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  }

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}
      {suffix}
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
