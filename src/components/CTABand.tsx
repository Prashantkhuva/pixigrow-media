"use client";

import { useEffect, useRef } from "react";
import { Section, Container, Button } from "@/components";
import { DecorativeLeaf, DecorativeDots } from "./SvgDecorations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTABand() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { opacity: 0, y: 30 });

      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, contentRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <Section bg="primary" className="relative overflow-hidden">
      {/* Decorative elements */}
      <DecorativeLeaf position="top-right" size="md" className="opacity-20" />
      <DecorativeLeaf position="bottom-left" size="sm" className="opacity-15" />
      <DecorativeDots className="top-10 left-10 hidden md:block" columns={5} rows={4} />

      <Container>
        <div ref={contentRef} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to grow loud?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Let&apos;s talk strategy.
          </p>
          <div className="mt-8">
            <Button variant="secondary" size="lg" href="/contact">
              Schedule a call
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
