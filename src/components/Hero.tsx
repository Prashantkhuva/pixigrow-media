"use client";

import { useEffect, useRef } from "react";
import { Button, Container } from "@/components";
import {
  DecorativeLeaf,
  DecorativeDots,
  DecorativeSquiggle,
} from "./SvgDecorations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const decorativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !decorativeRef.current) return;

    // Parallax effect for decorative elements
    gsap.to(decorativeRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative min-h-[500px] md:min-h-[85vh] flex items-center bg-white overflow-hidden">
      {/* Lime accent circle */}
      <div className="absolute -top-[150px] -right-[150px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-accent/20 blur-3xl" />

      {/* Decorative elements with parallax */}
      <div ref={decorativeRef} className="absolute inset-0 pointer-events-none">
        <DecorativeLeaf position="top-right" size="lg" className="opacity-40" />
        <DecorativeLeaf position="bottom-left" size="md" className="opacity-20" />
        <DecorativeDots className="top-20 right-20 hidden md:block" columns={6} rows={4} />
        <DecorativeSquiggle className="bottom-32 right-10 hidden md:block" color="#2a3bf5" />
      </div>

      <Container className="relative z-10 py-12 md:py-0">
        <div ref={contentRef} className="max-w-3xl">
          <p className="text-sm font-semibold text-primary mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            RAJKOT&apos;S AI-FIRST BRAND AGENCY
          </p>
          <h1
            className="text-4xl md:text-[48px] lg:text-[64px] font-bold leading-tight text-dark tracking-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Aapki growth ke liye, PixiGrow ki services kaafi hain
          </h1>
          <p
            className="mt-6 text-lg md:text-xl text-secondary animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            We help businesses, creators, startups, and personal brands grow with the right strategy. Content creation, social media, performance marketing, AI solutions — all under one roof.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button variant="primary" size="lg" href="/contact">
              Get a free quote
            </Button>
            <Button variant="outline" size="lg" href="/work">
              See our work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
