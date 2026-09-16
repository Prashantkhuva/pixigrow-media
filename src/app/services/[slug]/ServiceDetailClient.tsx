"use client";

import Link from "next/link";
import { Service } from "@/data/services";
import { Section, Container, Heading, Button } from "@/components";

export default function ServiceDetailClient({
  service,
}: {
  service: Service;
}) {
  return (
    <>
      {/* Hero */}
      <Section bg="white">
        <Container>
          <nav className="text-sm text-secondary mb-8">
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span className="text-dark">{service.title}</span>
          </nav>

          <div className="flex items-start gap-8">
            <div className="w-20 h-20 bg-accent rounded-lg flex items-center justify-center text-3xl">
              {service.icon}
            </div>
            <div>
              <Heading variant="h1">{service.title}</Heading>
              <p className="mt-2 text-lg text-primary font-medium">
                {service.tagline}
              </p>
              <p className="mt-4 text-lg text-secondary">
                {service.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section bg="light">
        <Container>
          <Heading variant="h2">What&apos;s included</Heading>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.included.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-border"
              >
                <span className="text-primary mt-1">✓</span>
                <span className="text-dark">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why It Matters */}
      <Section bg="white">
        <Container>
          <Heading variant="h2">Why it matters</Heading>
          <div className="mt-8">
            <p className="text-dark leading-relaxed text-lg">
              {service.whyItMatters}
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section bg="primary">
        <Container>
          <div className="text-center">
            <Heading variant="h2" className="text-white">
              Let&apos;s discuss your needs
            </Heading>
            <p className="mt-4 text-white/80">
              Every brand is unique. Let&apos;s talk about what&apos;s right for
              you.
            </p>
            <div className="mt-8">
              <Button variant="secondary" size="lg" href="/contact">
                Schedule consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
