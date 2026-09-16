"use client";

import { useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Skip animation on first load
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
      return;
    }

    // Reset for page transition
    container.style.opacity = "0";
    container.style.transform = "translateY(20px)";

    // Animate in
    requestAnimationFrame(() => {
      container.style.transition = "opacity 0.4s ease-out, transform 0.4s ease-out";
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
    });

    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      style={{ opacity: 1, transform: "translateY(0)" }}
    >
      {children}
    </div>
  );
}
