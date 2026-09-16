"use client";

import { Section, Container, Heading, Grid, Card, IconBox } from "@/components";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-light">
      <Container>
        <Heading variant="h2" center>
          What we do
        </Heading>
        <p className="mt-4 text-secondary text-center max-w-2xl mx-auto">
          Full-spectrum brand transformation. Everything your brand needs to grow — from content to AI automation.
        </p>

        <div className="mt-12">
          <Grid cols={3}>
            {services.map((service, index) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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
