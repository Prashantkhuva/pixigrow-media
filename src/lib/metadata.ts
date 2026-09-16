import { Metadata } from "next";

const baseUrl = "https://pixigrowmedia.com";

interface PageSEO {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export const seoData: Record<string, PageSEO> = {
  home: {
    title: "PixiGrow Media - 360° Brand Agency Rajkot | Strategy, Celebs, PR & IPs",
    description: "Strategy, Celebs, PR & IPs. We do it all. PixiGrow Media helps brands grow through strategic marketing, creative content, and data-driven campaigns.",
    path: "/",
    image: "/og-image.png",
  },
  services: {
    title: "Our Services - Strategy, Content, PR, Production | PixiGrow Media",
    description: "Full-spectrum brand transformation. Strategy, social content, celebrity partnerships, PR, production, and performance marketing.",
    path: "/services",
    image: "/og-services.png",
  },
  work: {
    title: "Recent Work & Case Studies | PixiGrow Media",
    description: "See our portfolio of successful brand campaigns and transformations across industries.",
    path: "/work",
    image: "/og-work.png",
  },
  about: {
    title: "About PixiGrow Media - Rajkot Brand Agency",
    description: "Meet the team behind PixiGrow Media. Rajkot-born, India-wide brand agency.",
    path: "/about",
    image: "/og-about.png",
  },
  contact: {
    title: "Contact PixiGrow Media - Get in Touch",
    description: "Let's talk strategy. Drop us a line and we'll get back to you in 24 hours.",
    path: "/contact",
    image: "/og-contact.png",
  },
};

export function generatePageMetadata(page: keyof typeof seoData): Metadata {
  const data = seoData[page];

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${baseUrl}${data.path}`,
      type: "website",
      locale: "en_US",
      siteName: "PixiGrow Media",
      images: [
        {
          url: `${baseUrl}${data.image}`,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [`${baseUrl}${data.image}`],
    },
    alternates: {
      canonical: `${baseUrl}${data.path}`,
    },
  };
}
