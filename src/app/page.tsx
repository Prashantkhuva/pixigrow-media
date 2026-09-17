import {
  Hero,
  BrandStrip,
  Stats,
  ServicesGrid,
  RecentWork,
  VideoShowcase,
  ProcessSteps,
  Testimonials,
  Faq,
  InstagramFeed,
  CTABand,
} from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <Stats />
      <ServicesGrid />
      <RecentWork />
      <VideoShowcase />
      <ProcessSteps />
      <Testimonials />
      <InstagramFeed />
      <Faq />
      <CTABand />
    </>
  );
}
