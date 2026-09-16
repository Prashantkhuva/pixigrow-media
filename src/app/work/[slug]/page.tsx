import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: study.title,
    description: study.overview,
    openGraph: {
      title: `${study.title} | PixiGrow Media`,
      description: study.overview,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return <div>Case study not found</div>;
  }

  return <CaseStudyDetailClient study={study} />;
}
