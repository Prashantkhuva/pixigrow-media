import clsx from "clsx";

interface IconBoxProps {
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
  variant?: "accent" | "primary";
}

export default function IconBox({
  children,
  size = "md",
  className,
  variant = "accent",
}: IconBoxProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-lg",
        {
          "w-12 h-12": size === "md",
          "w-16 h-16": size === "lg",
          "bg-accent text-dark": variant === "accent",
          "bg-primary text-white": variant === "primary",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
