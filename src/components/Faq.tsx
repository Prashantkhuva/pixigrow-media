"use client";

import { useState } from "react";
import { Container, Heading } from "@/components";
import { DecorativeLeaf, DecorativeDots } from "./SvgDecorations";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What services does PixiGrow Media offer?",
    answer:
      "We offer content creation, social media marketing, performance marketing, branding, AI solutions, and CRM automation. Everything your brand needs to grow — all under one roof.",
  },
  {
    question: "How much does it cost to work with PixiGrow?",
    answer:
      "Our pricing depends on the scope of work and services required. We offer flexible packages starting from ₹25,000/month for social media management to custom enterprise solutions. Contact us for a free quote.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see initial results within 2-4 weeks of launching campaigns. However, meaningful growth typically takes 2-3 months of consistent effort. We focus on sustainable, long-term results.",
  },
  {
    question: "Do you work with businesses outside Rajkot?",
    answer:
      "Absolutely! While we're based in Rajkot, we work with clients across India and internationally. Our remote-first approach allows us to serve clients from anywhere.",
  },
  {
    question: "What makes PixiGrow different from other agencies?",
    answer:
      "We combine AI-powered tools with human creativity to deliver premium results at startup-friendly costs. Our integrated approach means all your marketing works together, delivering results that compound.",
  },
  {
    question: "Can I try your services before committing?",
    answer:
      "Yes! We offer a free strategy session and proposal before any commitment. This gives you a clear understanding of our approach and what we can deliver for your brand.",
  },
];

function FaqAccordion({ item, isOpen, onClick }: { item: FaqItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left bg-white hover:bg-light transition-colors"
      >
        <span className="font-semibold text-dark pr-4">{item.question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 md:p-6 pt-0 text-secondary">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <DecorativeLeaf position="top-left" size="sm" className="opacity-20" />
      <DecorativeDots className="bottom-10 right-10 hidden md:block" columns={4} rows={3} />

      <Container>
        <Heading variant="h2" center>
          Frequently asked questions
        </Heading>
        <p className="mt-4 text-secondary text-center max-w-2xl mx-auto">
          Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
        </p>

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FaqAccordion
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
