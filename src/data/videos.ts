export interface VideoItem {
  id: string;
  title: string;
  client: string;
  category: string;
  videoSrc: string;
  poster: string;
  caseStudySlug?: string;
}

export const videos: VideoItem[] = [
  {
    id: "aaloki",
    title: "Aaloki Brand Launch",
    client: "Aaloki",
    category: "Branding",
    videoSrc: "/videos/aaloki.mp4",
    poster: "/videos/aaloki-poster.jpg",
    caseStudySlug: "aaloki-brand-launch",
  },
  {
    id: "kurkure",
    title: "Kurkure Campaign",
    client: "Kurkure",
    category: "Content Creation",
    videoSrc: "/videos/kurkure.mp4",
    poster: "/videos/kurkure-poster.jpg",
  },
  {
    id: "lenovo",
    title: "Lenovo Collaboration",
    client: "Lenovo",
    category: "Performance Marketing",
    videoSrc: "/videos/Lenovo.mp4",
    poster: "/videos/lenovo-poster.jpg",
  },
  {
    id: "poojara",
    title: "Poojara x Samsung",
    client: "Poojara",
    category: "Social Media",
    videoSrc: "/videos/poojara%20x%20samsung.mp4",
    poster: "/videos/poojara-poster.jpg",
  },
  {
    id: "ramanta",
    title: "Ramanta x Tara Sutaria",
    client: "Ramanta",
    category: "Celebrity PR",
    videoSrc: "/videos/Ramanta%20x%20tara%20sutaria.mp4",
    poster: "/videos/ramanta-poster.jpg",
  },
  {
    id: "sidecash",
    title: "Sidecase AI",
    client: "Sidecase AI",
    category: "Brand Strategy",
    videoSrc: "/videos/sidecase%20ai.mp4",
    poster: "/videos/sidecash-ai-poster.jpg",
  },
];
