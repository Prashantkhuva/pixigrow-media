const baseUrl = "https://pixigrowmedia.com";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PixiGrow Media",
  description: "360° brand agency offering strategy, celebrity partnerships, PR, production, and performance marketing.",
  url: baseUrl,
  telephone: "contact@pixigrowmedia.com",
  email: "contact@pixigrowmedia.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.3039",
    longitude: "70.8022",
  },
  sameAs: [
    "https://instagram.com/pixigrowmedia",
    "https://linkedin.com/company/pixigrowmedia",
  ],
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PixiGrow Media",
  url: baseUrl,
  logo: `${baseUrl}/logo.svg`,
  description: "360° brand agency. Strategy, Celebs, PR & IPs.",
  sameAs: [
    "https://instagram.com/pixigrowmedia",
    "https://linkedin.com/company/pixigrowmedia",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contact@pixigrowmedia.com",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PixiGrow Media",
  url: baseUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does PixiGrow Media offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer content creation, social media marketing, performance marketing, branding, AI solutions, and CRM automation. Everything your brand needs to grow — all under one roof.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to work with PixiGrow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our pricing depends on the scope of work and services required. We offer flexible packages starting from ₹25,000/month for social media management to custom enterprise solutions. Contact us for a free quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see initial results within 2-4 weeks of launching campaigns. However, meaningful growth typically takes 2-3 months of consistent effort. We focus on sustainable, long-term results.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside Rajkot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! While we're based in Rajkot, we work with clients across India and internationally. Our remote-first approach allows us to serve clients from anywhere.",
      },
    },
    {
      "@type": "Question",
      name: "What makes PixiGrow different from other agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We combine AI-powered tools with human creativity to deliver premium results at startup-friendly costs. Our integrated approach means all your marketing works together, delivering results that compound.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try your services before committing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer a free strategy session and proposal before any commitment. This gives you a clear understanding of our approach and what we can deliver for your brand.",
      },
    },
  ],
};
