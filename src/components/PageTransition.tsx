"use client";

import { useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Skip animation on first load
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      gsap.set(container, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });

    // Exit animation
    gsap.to(container, {
      opacity: 0,
      y: -15,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        // Enter animation
        gsap.fromTo(
          container,
          { opacity: 0, y: 25, scale: 0.99 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
            clearProps: "all",
          }
        );
      },
    });
  }, [pathname]);

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  );
}
