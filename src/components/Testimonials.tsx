"use client";

import { useEffect, useRef } from "react";
import { Container, Heading } from "@/components";
import { caseStudies } from "@/data/caseStudies";
import { DecorativeLeaf, DecorativeSquiggle } from "./SvgDecorations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = caseStudies
  .filter((cs) => cs.testimonial)
  .map((cs) => ({
    ...cs.testimonial!,
    client: cs.client,
    category: cs.category,
  }));

function StarRating() {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#D4F53B"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".testimonial-card");
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(cards, { opacity: 0, y: 40 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, cardsRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-light overflow-hidden">
      {/* Decorative elements */}
      <DecorativeLeaf position="top-right" size="md" className="opacity-20" />
      <DecorativeSquiggle className="bottom-10 left-10 hidden md:block" color="#2a3bf5" />

      <Container>
        <Heading variant="h2" center>
          What our clients say
        </Heading>
        <p className="mt-4 text-secondary text-center max-w-2xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
        </p>

        <div ref={cardsRef} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card relative bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-colors"
            >
              {/* Sticker badge */}
              <div className="absolute -top-3 -right-3 bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full transform rotate-6">
                {testimonial.category}
              </div>

              <StarRating />

              <blockquote className="text-dark leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-secondary">
                    {testimonial.role} at {testimonial.client}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
