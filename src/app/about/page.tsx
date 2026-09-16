"use client";

import Image from "next/image";
import { Section, Container, Heading, Grid, Card, IconBox, Button } from "@/components";
import {
  ContentCreationIcon,
  PerformanceMarketingIcon,
  AiSolutionsIcon,
} from "@/components/icons/ServiceIcons";

const pillars = [
  {
    id: 1,
    icon: <ContentCreationIcon size={32} />,
    title: "Content That Converts",
    description:
      "We create scroll-stopping videos, reels, and graphics that your audience actually wants to engage with. AI-powered + human creativity.",
  },
  {
    id: 2,
    icon: <PerformanceMarketingIcon size={32} />,
    title: "Results, Not Vanity",
    description:
      "We don't do vanity metrics. Every campaign is measured against real business outcomes — leads, sales, and growth.",
  },
  {
    id: 3,
    icon: <AiSolutionsIcon size={32} />,
    title: "AI-First Approach",
    description:
      "We leverage AI for content creation, video editing, and analytics — delivering premium results at startup-friendly costs.",
  },
];

const teamMembers = [
  {
    name: "Founding Team",
    role: "Strategy & Vision",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=center",
  },
  {
    name: "Creative Team",
    role: "Content & Design",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&crop=center",
  },
  {
    name: "Performance Team",
    role: "Ads & Analytics",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center",
  },
];

const values = [
  "Bold ideas over safe choices",
  "Transparency in everything we do",
  "AI + Human creativity, not AI instead of creativity",
  "Your growth is our growth",
  "Data drives every decision",
  "Rajkot roots, global ambitions",
];

const stats = [
  { value: "50+", label: "Brands Served" },
  { value: "200+", label: "Campaigns Launched" },
  { value: "5M+", label: "Revenue Generated" },
  { value: "15+", label: "Team Members" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="white">
        <Container>
          <Heading variant="h1" center>
            We&apos;re PixiGrow Media
          </Heading>
          <p className="mt-4 text-lg text-secondary text-center max-w-2xl mx-auto">
            Rajkot&apos;s AI-first brand agency. We help businesses, creators, startups, and personal brands grow with the right strategy.
          </p>
        </Container>
      </Section>

      {/* Stats */}
      <Section bg="primary">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Origin Story */}
      <Section bg="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Heading variant="h2">Our story</Heading>
              <div className="mt-6 space-y-4">
                <p className="text-dark leading-relaxed">
                  PixiGrow Media was born from a simple observation: brands in India deserve world-class marketing without the big-agency price tag. We started in Rajkot with a mission to help local businesses compete on a national stage.
                </p>
                <p className="text-dark leading-relaxed">
                  Today, we&apos;re a full-service brand agency offering content creation, social media marketing, performance marketing, branding, AI solutions, and CRM automation. Our integrated approach means everything works together, delivering results that compound.
                </p>
                <p className="text-dark leading-relaxed">
                  We combine AI-powered tools with human creativity to deliver premium results at startup-friendly costs. From content creation to paid ads, we handle it all under one roof.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="PixiGrow Media team collaborating"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Why PixiGrow */}
      <Section bg="white">
        <Container>
          <Heading variant="h2" center>
            Why work with us
          </Heading>
          <div className="mt-12">
            <Grid cols={3}>
              {pillars.map((pillar) => (
                <Card key={pillar.id} className="p-8">
                  <IconBox size="lg">{pillar.icon}</IconBox>
                  <h3 className="mt-6 text-lg font-semibold text-dark">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary">
                    {pillar.description}
                  </p>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section bg="light">
        <Container>
          <Heading variant="h2" center>
            Meet the team
          </Heading>
          <p className="mt-4 text-secondary text-center max-w-2xl mx-auto">
            A lean, mean team of strategists, creators, and performance marketers.
          </p>
          <div className="mt-12">
            <Grid cols={3}>
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-dark">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm text-secondary">{member.role}</p>
                </div>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Values / Manifesto */}
      <Section bg="white">
        <Container>
          <Heading variant="h2" center>
            Our philosophy
          </Heading>
          <div className="mt-12 text-center">
            <p className="text-3xl md:text-4xl font-bold text-dark">
              &ldquo;Don&apos;t just scale. Grow Loud.&rdquo;
            </p>
            <ul className="mt-8 space-y-4 max-w-xl mx-auto text-left">
              {values.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-dark">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Clients */}
      <Section bg="light">
        <Container>
          <Heading variant="h2" center>
            Brands we&apos;ve worked with
          </Heading>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Aaloki", "K-Lust", "Malabar", "Oppo", "Ramanta"].map((brand) => (
              <div
                key={brand}
                className="text-2xl font-bold text-secondary/40 hover:text-primary transition-colors cursor-pointer"
              >
                {brand}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section bg="primary">
        <Container>
          <div className="text-center">
            <Heading variant="h2" className="text-white">
              Let&apos;s create something amazing together
            </Heading>
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
