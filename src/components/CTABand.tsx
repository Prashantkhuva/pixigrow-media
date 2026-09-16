"use client";

import { Section, Container, Button } from "@/components";

export default function CTABand() {
  return (
    <Section bg="primary">
      <Container>
        <div className="text-center">
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
