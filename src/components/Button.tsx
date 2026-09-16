"use client";

import { forwardRef } from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, href, ...props }, ref) => {
    const baseStyles = clsx(
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg cursor-pointer",
      "focus:outline-none focus:ring-2 focus:ring-primary/50",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      {
        "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]":
          variant === "primary",
        "bg-accent text-dark hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]":
          variant === "secondary",
        "bg-transparent text-primary border border-border hover:bg-primary/5 active:scale-[0.98]":
          variant === "ghost",
        "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white active:scale-[0.98]":
          variant === "outline",
      },
      {
        "text-sm px-4 py-2": size === "sm",
        "text-base px-6 py-3": size === "md",
        "text-lg px-8 py-4": size === "lg",
      },
      className
    );

    if (href) {
      return (
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseStyles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
