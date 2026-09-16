export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  included: string[];
  whyItMatters: string;
}

export const services: Service[] = [
  {
    slug: "content-creation",
    title: "Content Creation",
    tagline: "Scroll-stopping content that converts",
    description:
      "We create high-quality videos, reels, graphics, and copy that your audience actually wants to engage with. From AI-powered video editing to campaign creatives — we handle it all.",
    icon: "🎬",
    included: [
      "Short-form video (Reels, Shorts, TikTok)",
      "Long-form video (YouTube, brand films)",
      "Social media graphics & carousels",
      "Ad creatives (static + video)",
      "Copywriting & captions",
      "AI-powered video editing",
    ],
    whyItMatters:
      "Content is the fuel for every marketing channel. Without great content, even the best strategy falls flat. We make sure your brand stands out in crowded feeds.",
  },
  {
    slug: "social-media",
    title: "Social Media Marketing",
    tagline: "Build community, drive engagement",
    description:
      "Complete social media management — from strategy and content calendar to posting and community management. We grow your presence on Instagram, YouTube, LinkedIn, and beyond.",
    icon: "📱",
    included: [
      "Instagram management & growth",
      "YouTube channel management",
      "LinkedIn B2B marketing",
      "Content calendar planning",
      "Community management & DMs",
      "Hashtag & trend research",
    ],
    whyItMatters:
      "Social media is where your customers spend their time. A strong presence builds trust, drives traffic, and generates leads — all while you focus on your business.",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Data-driven ads that deliver ROI",
    description:
      "We run targeted ad campaigns on Meta, Google, and YouTube that maximize your budget. Every rupee is tracked, every conversion is measured.",
    icon: "📈",
    included: [
      "Meta Ads (Instagram + Facebook)",
      "Google Ads (Search + Display)",
      "YouTube Ads",
      "Retargeting campaigns",
      "A/B testing & optimization",
      "Conversion tracking setup",
    ],
    whyItMatters:
      "Organic reach has limits. Paid ads put your brand in front of the right people at the right time. We ensure every campaign delivers measurable results.",
  },
  {
    slug: "branding",
    title: "Branding & Creative",
    tagline: "Brand identity that resonates",
    description:
      "From logo design to complete brand systems — we build brands that look premium and feel authentic. Your visual identity, tone of voice, and brand guidelines, all under one roof.",
    icon: "🎨",
    included: [
      "Logo design & brand identity",
      "Brand guidelines & style guide",
      "Color palette & typography",
      "Business cards & stationery",
      "Brand messaging & tone of voice",
      "Brand audit & refresh",
    ],
    whyItMatters:
      "A strong brand creates instant recognition and trust. We help you stand out from competitors with a cohesive visual identity that tells your story.",
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    tagline: "Smart marketing with AI power",
    description:
      "We leverage AI tools for content creation, video editing, analytics, and automation. Stay ahead of the curve with cutting-edge AI-powered marketing solutions.",
    icon: "🤖",
    included: [
      "AI video generation & editing",
      "AI-powered content suggestions",
      "Chatbot & automation setup",
      "Predictive analytics",
      "AI-driven ad optimization",
      "CRM & business automation",
    ],
    whyItMatters:
      "AI is transforming marketing. We help you use it intelligently — saving time, reducing costs, and improving results without losing the human touch.",
  },
  {
    slug: "crm-automation",
    title: "CRM & Business Automation",
    tagline: "Automate, nurture, convert",
    description:
      "Set up CRM systems, email funnels, and WhatsApp automation to nurture leads and convert prospects into customers. We streamline your sales process.",
    icon: "⚙️",
    included: [
      "CRM setup & integration",
      "Email marketing funnels",
      "WhatsApp Business automation",
      "Lead scoring & nurturing",
      "Sales pipeline optimization",
      "Reporting dashboards",
    ],
    whyItMatters:
      "Getting leads is half the battle. Nurturing them into customers requires systematic follow-up. We automate the process so no lead falls through the cracks.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
