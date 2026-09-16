"use client";

import { Section, Container, Heading, Button } from "@/components";
import { caseStudies } from "@/data/caseStudies";

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="white">
        <Container>
          <Heading variant="h1" center>
            Our work
          </Heading>
          <p className="mt-4 text-lg text-secondary text-center max-w-2xl mx-auto">
            Real results for real brands. Here&apos;s how we&apos;ve helped businesses grow.
          </p>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section bg="light">
        <Container>
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <a
                key={study.slug}
                href={`/work/${study.slug}`}
                className="block group"
              >
                <div className="bg-white rounded-lg border border-border overflow-hidden hover:border-primary transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image/Gradient */}
                    <div
                      className={`h-64 md:h-auto bg-gradient-to-br ${study.gradient}`}
                    />

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-medium text-primary">
                          {study.category}
                        </span>
                        <span className="text-secondary">·</span>
                        <span className="text-sm text-secondary">
                          {study.year}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">
                        {study.title}
                      </h2>
                      <p className="mt-4 text-secondary">{study.overview}</p>

                      {/* Results Preview */}
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        {study.results.slice(0, 2).map((result) => (
                          <div key={result.label}>
                            <p className="text-2xl font-bold text-primary">
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
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section bg="primary">
        <Container>
          <div className="text-center">
            <Heading variant="h2" className="text-white">
              Want results like these?
            </Heading>
            <div className="mt-8">
              <Button variant="secondary" size="lg" href="/contact">
                Start your project
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
