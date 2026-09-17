"use client";

import { useEffect, useRef } from "react";
import { Section, Container, Heading, Grid, Card, IconBox } from "@/components";
import { services } from "@/data/services";
import { DecorativeLeaf, DecorativeDots } from "./SvgDecorations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesGrid() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".service-card");
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

    // Refresh after fonts/images load
    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-light overflow-hidden">
      {/* Decorative elements */}
      <DecorativeLeaf position="top-left" size="sm" className="opacity-25" />
      <DecorativeLeaf position="bottom-right" size="md" className="opacity-20" />
      <DecorativeDots className="bottom-10 left-10 hidden md:block" columns={4} rows={3} />

      <Container>
        <Heading variant="h2" center>
          What we do
        </Heading>
        <p className="mt-4 text-secondary text-center max-w-2xl mx-auto">
          Full-spectrum brand transformation. Everything your brand needs to grow — from content to AI automation.
        </p>

        <div ref={cardsRef} className="mt-12">
          <Grid cols={3}>
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card"
              >
                <Card className="p-6 h-full hover:border-primary transition-colors cursor-pointer">
                  <IconBox>{service.icon}</IconBox>
                  <h3 className="mt-4 text-lg font-semibold text-dark">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary">
                    {service.tagline}
                  </p>
                </Card>
              </a>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
}
