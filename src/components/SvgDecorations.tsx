"use client";

import clsx from "clsx";

interface DecorativeLeafProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "sm" | "md" | "lg";
}

export function DecorativeLeaf({
  className,
  position = "top-right",
  size = "md",
}: DecorativeLeafProps) {
  const sizeClasses = {
    sm: "w-8 h-8 md:w-12 md:h-12",
    md: "w-12 h-12 md:w-16 md:h-16",
    lg: "w-16 h-16 md:w-24 md:h-24",
  };

  const positionClasses = {
    "top-left": "top-4 left-4 md:top-8 md:left-8",
    "top-right": "top-4 right-4 md:top-8 md:right-8",
    "bottom-left": "bottom-4 left-4 md:bottom-8 md:left-8",
    "bottom-right": "bottom-4 right-4 md:bottom-8 md:right-8",
  };

  return (
    <div
      className={clsx(
        "absolute opacity-30 pointer-events-none",
        sizeClasses[size],
        positionClasses[position],
        className
      )}
    >
      <img
        src="/decorative-leaf.svg"
        alt=""
        className="w-full h-full object-contain"
      />
    </div>
  );
}

interface DecorativeTextureProps {
  className?: string;
  opacity?: number;
}

export function DecorativeTexture({
  className,
  opacity = 0.05,
}: DecorativeTextureProps) {
  return (
    <div
      className={clsx(
        "absolute inset-0 pointer-events-none overflow-hidden",
        className
      )}
    >
      <img
        src="/decorative-texture.svg"
        alt=""
        className="w-full h-full object-cover"
        style={{ opacity }}
      />
    </div>
  );
}

interface DecorativeDotsProps {
  className?: string;
  columns?: number;
  rows?: number;
}

export function DecorativeDots({
  className,
  columns = 5,
  rows = 5,
}: DecorativeDotsProps) {
  return (
    <div
      className={clsx(
        "absolute pointer-events-none opacity-20",
        className
      )}
    >
      <svg
        width={columns * 24}
        height={rows * 24}
        viewBox={`0 0 ${columns * 24} ${rows * 24}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: columns }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 24 + 12}
              cy={row * 24 + 12}
              r="3"
              fill="currentColor"
            />
          ))
        )}
      </svg>
    </div>
  );
}

interface DecorativeSquiggleProps {
  className?: string;
  color?: string;
}

export function DecorativeSquiggle({
  className,
  color = "#2a3bf5",
}: DecorativeSquiggleProps) {
  return (
    <div className={clsx("absolute pointer-events-none opacity-20", className)}>
      <svg
        width="120"
        height="40"
        viewBox="0 0 120 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 20C15 5 25 35 35 20C45 5 55 35 65 20C75 5 85 35 95 20C105 5 115 35 115 20"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
