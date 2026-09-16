export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
  gradient: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "aaloki-brand-launch",
    title: "Aaloki — Complete Brand Launch",
    client: "Aaloki",
    category: "Branding & Social Media",
    year: "2024",
    overview:
      "Aaloki needed a full brand identity and social media presence from scratch. We handled everything — logo, guidelines, content strategy, and launch campaign.",
    challenge:
      "New luxury brand entering a competitive market with zero digital presence. Needed to establish premium positioning and build audience from day one.",
    solution:
      "Developed complete brand identity system, created 30-day content calendar, launched with influencer partnerships, and ran targeted Meta Ads to build initial following.",
    results: [
      { label: "Instagram Followers", value: "12K+" },
      { label: "Engagement Rate", value: "8.4%" },
      { label: "Brand Searches", value: "340%" },
      { label: "Campaign ROAS", value: "4.2x" },
    ],
    testimonial: {
      quote: "PixiGrow turned our vision into a brand that people actually recognize and trust. The launch was seamless.",
      author: "Aaloki Team",
      role: "Brand Founders",
    },
    gradient: "from-[#2A3BF5] to-[#D4F53B]",
  },
  {
    slug: "malabar-performance",
    title: "Malabar — Performance Marketing",
    client: "Malabar",
    category: "Performance Marketing",
    year: "2024",
    overview:
      "Malabar wanted to scale their e-commerce sales through paid ads. We built a full-funnel ad strategy across Meta and Google.",
    challenge:
      "High competition in the jewelry space. Rising ad costs. Needed to improve ROAS while scaling spend.",
    solution:
      "Implemented advanced audience segmentation, created video-first ad creatives, set up retargeting funnels, and optimized landing pages for conversions.",
    results: [
      { label: "ROAS", value: "5.8x" },
      { label: "Cost Per Acquisition", value: "-42%" },
      { label: "Monthly Revenue", value: "+180%" },
      { label: "Ad Spend Scale", value: "3x" },
    ],
    testimonial: {
      quote: "Our online sales tripled in 4 months. The team really understands performance marketing.",
      author: "Malabar Team",
      role: "Marketing Director",
    },
    gradient: "from-[#D4F53B] to-[#2A3BF5]",
  },
  {
    slug: "oppo-content-strategy",
    title: "Oppo — Content & Social Strategy",
    client: "Oppo",
    category: "Content Creation",
    year: "2024",
    overview:
      "Oppo needed fresh, engaging content for their social channels. We created a content engine that delivers consistent, high-quality posts.",
    challenge:
      "Technical product (smartphones) that needed to be made relatable. Content fatigue from competitors. Needed to stand out in a crowded feed.",
    solution:
      "Developed content pillars around lifestyle, tech tips, and user stories. Created 60+ pieces of content monthly including reels, carousels, and stories.",
    results: [
      { label: "Content Pieces/Month", value: "60+" },
      { label: "Engagement Growth", value: "215%" },
      { label: "Video Views", value: "2.4M" },
      { label: "Follower Growth", value: "+45K" },
    ],
    gradient: "from-[#2A3BF5] to-[#D4F53B]",
  },
  {
    slug: "k-lust-social-growth",
    title: "K-Lust — Social Media Growth",
    client: "K-Lust",
    category: "Social Media Marketing",
    year: "2024",
    overview:
      "K-Lust wanted to build a strong social media presence and community. We handled their complete social media management.",
    challenge:
      "Low engagement, inconsistent posting, no clear brand voice. Competitors were dominating the social space.",
    solution:
      "Created brand guidelines, established posting schedule, developed engaging content mix (educational, entertaining, promotional), and actively managed community.",
    results: [
      { label: "Instagram Growth", value: "+8.5K" },
      { label: "Engagement Rate", value: "12%" },
      { label: "Avg. Reach/Post", value: "15K" },
      { label: "DM Leads", value: "200+" },
    ],
    gradient: "from-[#D4F53B] to-[#2A3BF5]",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
