"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  poster?: string;
  title: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  poster,
  title,
}: VideoModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(contentRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    });
    tl.to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      },
      "-=0.1"
    );
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(contentRef.current, { scale: 0.95, opacity: 0 });

    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(contentRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.35,
      ease: "power3.out",
      delay: 0.05,
    });

    // Auto-play
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/80 backdrop-blur-sm p-4"
      onClick={close}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Title */}
        <p className="text-white/60 text-sm mb-3 text-center">{title}</p>

        {/* Video Player */}
        <div className="rounded-xl overflow-hidden bg-black shadow-2xl">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="w-full aspect-video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
