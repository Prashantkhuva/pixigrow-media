"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import SectionReveal from "./SectionReveal";

interface SectionProps {
  children: ReactNode;
  bg?: "white" | "light" | "dark" | "primary";
  className?: string;
  id?: string;
  reveal?: boolean;
  revealDirection?: "up" | "down" | "left" | "right";
}

export default function Section({
  children,
  bg = "white",
  className,
  id,
  reveal = false,
  revealDirection = "up",
}: SectionProps) {
  const section = (
    <section
      id={id}
      className={clsx(
        "py-20 md:py-[80px] px-4 md:px-8",
        {
          "bg-white": bg === "white",
          "bg-light": bg === "light",
          "bg-dark text-white": bg === "dark",
          "bg-primary text-white": bg === "primary",
        },
        className
      )}
    >
      {children}
    </section>
  );

  if (reveal) {
    return (
      <SectionReveal direction={revealDirection}>
        {section}
      </SectionReveal>
    );
  }

  return section;
}
