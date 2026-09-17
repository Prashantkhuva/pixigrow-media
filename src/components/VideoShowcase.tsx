"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container, Heading } from "@/components";
import { videos } from "@/data/videos";
import { DecorativeLeaf, DecorativeSquiggle } from "./SvgDecorations";
import VideoModal from "./VideoModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VideoShowcase() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState<{
    src: string;
    poster?: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".video-card");
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.set(card, { opacity: 0, y: 40 });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none none",
            once: true,
          },
          delay: i * 0.08,
        });
      });
    }, gridRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <DecorativeLeaf position="top-right" size="sm" className="opacity-20" />
      <DecorativeSquiggle
        className="bottom-10 left-10 hidden md:block"
        color="#2a3bf5"
      />

      <Container>
        <Heading variant="h2" center>
          Our work in action
        </Heading>
        <p className="mt-4 text-secondary text-center max-w-2xl mx-auto">
          See the brands we&apos;ve collaborated with and the content we&apos;ve
          created.
        </p>

        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {videos.map((video) => (
            <button
              key={video.id}
              className="video-card group text-left"
              onClick={() =>
                setModal({
                  src: video.videoSrc,
                  poster: video.poster,
                  title: video.title,
                })
              }
            >
              <div className="relative rounded-xl overflow-hidden border border-border hover:border-primary transition-colors bg-light">
                {/* Poster / Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.poster}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-dark/20 group-hover:bg-dark/40 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-dark ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <span className="text-xs font-medium text-primary">
                    {video.category}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-dark group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Container>

      {/* Video Modal */}
      <VideoModal
        isOpen={modal !== null}
        onClose={() => setModal(null)}
        videoSrc={modal?.src ?? ""}
        poster={modal?.poster}
        title={modal?.title ?? ""}
      />
    </section>
  );
}
