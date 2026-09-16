"use client";

import { Section, Container, Heading, Grid, Card, IconBox, Button } from "@/components";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="white">
        <Container>
          <Heading variant="h1" center>
            What we offer
          </Heading>
          <p className="mt-4 text-lg text-secondary text-center max-w-2xl mx-auto">
            Full-spectrum brand transformation. From content creation to AI-powered automation — everything your brand needs to grow.
          </p>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section bg="light">
        <Container>
          <Grid cols={2}>
            {services.map((service) => (
              <a key={service.slug} href={`/services/${service.slug}`}>
                <Card className="p-8 h-full hover:border-primary transition-colors cursor-pointer">
                  <IconBox size="lg">{service.icon}</IconBox>
                  <h3 className="mt-6 text-xl font-semibold text-dark">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary font-medium">
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-sm text-secondary">
                    {service.description}
                  </p>
                </Card>
              </a>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section bg="primary">
        <Container>
          <div className="text-center">
            <Heading variant="h2" className="text-white">
              Ready to grow?
            </Heading>
            <p className="mt-4 text-white/80">
              Let&apos;s discuss your project and create something that makes an impact.
            </p>
            <div className="mt-8">
              <Button variant="secondary" size="lg" href="/contact">
                Get in touch
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
