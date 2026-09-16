"use client";

import { Section, Container, Heading, Button } from "@/components";
import { caseStudies } from "@/data/caseStudies";

export default function RecentWork() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <Heading variant="h2" center>
          Recent work
        </Heading>
        <p className="mt-4 text-secondary text-center max-w-2xl mx-auto">
          Real results for real brands. Here&apos;s how we&apos;ve helped businesses grow.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.slice(0, 2).map((study, index) => (
            <a
              key={study.slug}
              href={`/work/${study.slug}`}
              className="work-item group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
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
