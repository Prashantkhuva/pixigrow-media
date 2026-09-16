import clsx from "clsx";

interface IconBoxProps {
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}

export default function IconBox({ children, size = "md", className }: IconBoxProps) {
  return (
    <div
      className={clsx(
        "bg-accent flex items-center justify-center rounded-lg",
        {
          "w-12 h-12 text-xl": size === "md",
          "w-16 h-16 text-2xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
