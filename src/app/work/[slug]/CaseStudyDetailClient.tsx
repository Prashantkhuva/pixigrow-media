"use client";

import Link from "next/link";
import { CaseStudy } from "@/data/caseStudies";
import { Section, Container, Heading, Button } from "@/components";
import { videos } from "@/data/videos";

export default function CaseStudyDetailClient({
  study,
}: {
  study: CaseStudy;
}) {
  const video = videos.find((v) => v.caseStudySlug === study.slug);

  return (
    <>
      {/* Hero — Video or Gradient */}
      {video ? (
        <div className="bg-dark">
          <div className="max-w-5xl mx-auto">
            <video
              src={video.videoSrc}
              poster={video.poster}
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ) : (
        <div
          className={`h-[300px] md:h-[500px] bg-gradient-to-br ${study.gradient}`}
        />
      )}

      {/* Overview Block */}
      <Section bg="white">
        <Container>
          <nav className="text-sm text-secondary mb-8">
            <Link href="/work" className="hover:text-primary">
              Work
            </Link>
            <span className="mx-2">›</span>
            <span className="text-dark">{study.title}</span>
          </nav>

          <Heading variant="h1">{study.title}</Heading>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Client
              </h3>
              <p className="mt-2 text-dark">{study.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Category
              </h3>
              <p className="mt-2 text-dark">{study.category}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Year
              </h3>
              <p className="mt-2 text-dark">{study.year}</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-lg text-secondary">{study.overview}</p>
          </div>
        </Container>
      </Section>

      {/* Challenge & Solution */}
      <Section bg="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Heading variant="h2">The challenge</Heading>
              <p className="mt-4 text-dark leading-relaxed">
                {study.challenge}
              </p>
            </div>
            <div>
              <Heading variant="h2">Our solution</Heading>
              <p className="mt-4 text-dark leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Results Block */}
      <Section bg="white">
        <Container>
          <Heading variant="h2" center>Results</Heading>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((result, index) => (
              <div key={index} className="text-center p-6 bg-light rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary">
                  {result.value}
                </p>
                <p className="mt-2 text-sm text-secondary">{result.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Client Testimonial */}
      {study.testimonial && (
        <Section bg="primary">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-white italic">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <p className="mt-6 text-white/80">
                — {study.testimonial.author}, {study.testimonial.role}
              </p>
            </div>
          </Container>
        </Section>
      )}

      {/* Next Case Study */}
      <Section bg="light">
        <Container>
          <div className="text-center">
            <Link
              href="/work"
              className="inline-flex items-center text-primary font-medium hover:underline group"
            >
              View all projects
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
