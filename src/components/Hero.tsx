"use client";

import { Button, Container } from "@/components";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-screen flex items-center bg-white overflow-hidden">
      {/* Lime accent circle */}
      <div className="absolute -top-[150px] -right-[150px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-accent/20 blur-3xl" />

      <Container className="relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
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
