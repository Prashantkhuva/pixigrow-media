"use client";

import { useEffect, useRef } from "react";
import { Container, Heading } from "@/components";
import { videos } from "@/data/videos";
import { DecorativeLeaf, DecorativeSquiggle } from "./SvgDecorations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VideoShowcase() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".video-reel-card");
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.set(card, { opacity: 0, y: 40 });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none none",
            once: true,
          },
          delay: (i % 3) * 0.1,
        });
      });
    }, gridRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <DecorativeLeaf position="top-right" size="sm" className="opacity-20" />
      <DecorativeSquiggle
        className="bottom-10 left-10 hidden md:block"
        color="#2a3bf5"
      />

      <Container>
        <Heading variant="h2" center>
          Our work in action
        </Heading>
        <p className="mt-4 text-secondary text-center max-w-2xl mx-auto">
          See the brands we&apos;ve collaborated with and the content we&apos;ve
          created.
        </p>

        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-reel-card relative rounded-xl overflow-hidden border border-border bg-dark group"
            >
              {/* Portrait 9:16 aspect ratio */}
              <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
                <iframe
                  loading="lazy"
                  title={`${video.title} - PixiGrow Media`}
                  src={`https://play.gumlet.io/embed/${video.gumletId}?autoplay=true&loop=true&mute=true&controls=false`}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                  className="absolute inset-0 w-full h-full border-none"
                />

                {/* Subtle brand overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent p-3 sm:p-4 pointer-events-none">
                  <span className="text-[10px] sm:text-xs font-medium text-accent tracking-wide uppercase">
                    {video.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-semibold text-white mt-0.5 leading-tight">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
