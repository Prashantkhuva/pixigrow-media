export interface VideoItem {
  id: string;
  title: string;
  client: string;
  category: string;
  gumletId: string;
  caseStudySlug?: string;
}

export const videos: VideoItem[] = [
  {
    id: "aaloki",
    title: "Aaloki Brand Launch",
    client: "Aaloki",
    category: "Branding",
    gumletId: "6aabe04d4b9588fb8c4cb642",
    caseStudySlug: "aaloki-brand-launch",
  },
  {
    id: "kurkure",
    title: "Kurkure Campaign",
    client: "Kurkure",
    category: "Content Creation",
    gumletId: "6aabe04d490dbfc4f4b44e25",
  },
  {
    id: "lenovo",
    title: "Lenovo Collaboration",
    client: "Lenovo",
    category: "Performance Marketing",
    gumletId: "6aabe04d490dbfc4f4b44e23",
  },
  {
    id: "poojara",
    title: "Poojara x Samsung",
    client: "Poojara",
    category: "Social Media",
    gumletId: "6aabe04d490dbfc4f4b44e24",
  },
  {
    id: "ramanta",
    title: "Ramanta x Tara Sutaria",
    client: "Ramanta",
    category: "Celebrity PR",
    gumletId: "6aabe04d4b9588fb8c4cb643",
  },
  {
    id: "sidecash",
    title: "Sidecase AI",
    client: "Sidecase AI",
    category: "Brand Strategy",
    gumletId: "6aabe04d490dbfc4f4b44e22",
  },
];
