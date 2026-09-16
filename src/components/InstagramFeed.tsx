"use client";

// Phase 1: Placeholder gradient grid
// Phase 2: Integrate with Instagram Basic Display API or Behold.so widget
// https://developers.instagram.com/docs/instagram-basic-display-api/

import { Section, Container } from "@/components";

const posts = [
  { id: 1, gradient: "from-primary to-accent" },
  { id: 2, gradient: "from-accent to-primary" },
  { id: 3, gradient: "from-primary to-accent" },
  { id: 4, gradient: "from-accent to-primary" },
  { id: 5, gradient: "from-primary to-accent" },
  { id: 6, gradient: "from-accent to-primary" },
  { id: 7, gradient: "from-primary to-accent" },
  { id: 8, gradient: "from-accent to-primary" },
  { id: 9, gradient: "from-primary to-accent" },
];

export default function InstagramFeed() {
  return (
    <Section bg="white">
      <Container>
        <h2 className="text-xl font-semibold text-dark text-center">
          Latest from Instagram
        </h2>

        <div className="mt-8 grid grid-cols-3 gap-4 max-w-[600px] mx-auto">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/pixigrowmedia"
              target="_blank"
              rel="noopener noreferrer"
              className={`aspect-square bg-gradient-to-br ${post.gradient} rounded-lg hover:opacity-80 transition-opacity`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://instagram.com/pixigrowmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Follow us on Instagram
          </a>
        </div>
      </Container>
    </Section>
  );
}
