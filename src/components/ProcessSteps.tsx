"use client";

import { Section, Container, Heading, Grid } from "@/components";

const steps = [
  {
    number: "01",
    title: "Strategy",
    description:
      "We understand your business, audience, and goals. Then we build a data-driven strategy tailored to your brand.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "Content creation, brand design, ad creatives — we produce everything your brand needs to stand out.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Launch campaigns, manage social media, run ads. We handle the day-to-day so you can focus on your business.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Track results, optimize performance, scale what works. We continuously improve to maximize your ROI.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-light">
      <Container>
        <Heading variant="h2" center>
          How we work
        </Heading>
        <p className="mt-4 text-secondary text-center max-w-2xl mx-auto">
          A simple, proven process that delivers results every time.
        </p>

        <div className="mt-12">
          <Grid cols={4}>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="process-step text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
}
