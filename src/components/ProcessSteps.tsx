"use client";

import { useEffect, useRef } from "react";
import { Section, Container, Heading, Grid } from "@/components";
import { DecorativeLeaf, DecorativeSquiggle } from "./SvgDecorations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    title: "Strategy",
    description:
      "We understand your business, audience, and goals. Then we build a data-driven strategy tailored to your brand.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "Content creation, brand design, ad creatives — we produce everything your brand needs to stand out.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Launch campaigns, manage social media, run ads. We handle the day-to-day so you can focus on your business.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Track results, optimize performance, scale what works. We continuously improve to maximize your ROI.",
  },
];

export default function ProcessSteps() {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stepsRef.current) return;

    const steps = stepsRef.current.querySelectorAll(".process-step");
    if (steps.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(steps, { opacity: 0, y: 40 });

      gsap.to(steps, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, stepsRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-light overflow-hidden">
      {/* Decorative elements */}
      <DecorativeLeaf position="top-right" size="sm" className="opacity-25" />
      <DecorativeSquiggle className="bottom-20 right-10 hidden md:block" color="#d4f53b" />

      <Container>
        <Heading variant="h2" center>
          How we work
        </Heading>
        <p className="mt-4 text-secondary text-center max-w-2xl mx-auto">
          A simple, proven process that delivers results every time.
        </p>

        <div ref={stepsRef} className="mt-12">
          <Grid cols={4}>
            {steps.map((step) => (
              <div
                key={step.number}
                className="process-step text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
}
