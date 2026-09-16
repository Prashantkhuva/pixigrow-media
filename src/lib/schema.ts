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
