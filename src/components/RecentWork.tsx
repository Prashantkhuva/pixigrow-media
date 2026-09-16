"use client";

import { useEffect, useRef } from "react";
import { Section, Container, Heading, Button } from "@/components";
import { caseStudies } from "@/data/caseStudies";
import { DecorativeLeaf, DecorativeSquiggle } from "./SvgDecorations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RecentWork() {
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemsRef.current) return;

    const items = itemsRef.current.querySelectorAll(".work-item");
    if (items.length === 0) return;

    gsap.set(items, { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemsRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <DecorativeLeaf position="top-left" size="sm" className="opacity-20" />
      <DecorativeSquiggle className="bottom-10 left-10 hidden md:block" color="#2a3bf5" />

      <Container>
        <Heading variant="h2" center>
          Recent work
        </Heading>
        <p className="mt-4 text-secondary text-center max-w-2xl mx-auto">
          Real results for real brands. Here&apos;s how we&apos;ve helped businesses grow.
        </p>

        <div ref={itemsRef} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.slice(0, 2).map((study) => (
            <a
              key={study.slug}
              href={`/work/${study.slug}`}
              className="work-item group"
            >
              <div className="bg-light rounded-lg border border-border overflow-hidden hover:border-primary transition-colors">
                <div
                  className={`h-48 bg-gradient-to-br ${study.gradient}`}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary">
                      {study.category}
                    </span>
                    <span className="text-xs text-secondary">·</span>
                    <span className="text-xs text-secondary">{study.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary line-clamp-2">
                    {study.overview}
                  </p>

                  <div className="mt-4 flex gap-6">
                    {study.results.slice(0, 2).map((result) => (
                      <div key={result.label}>
                        <p className="text-lg font-bold text-primary">
                          {result.value}
                        </p>
                        <p className="text-xs text-secondary">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" href="/work">
            View all work
          </Button>
        </div>
      </Container>
    </section>
  );
}
