import clsx from "clsx";

interface HeadingProps {
  variant?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

export default function Heading({ variant = "h1", children, className, center = false }: HeadingProps) {
  return (
    <>
      {variant === "h1" && (
        <h1
          className={clsx(
            "text-3xl md:text-[48px] lg:text-[56px] font-bold leading-tight text-dark tracking-tight",
            center && "text-center",
            className
          )}
        >
          {children}
        </h1>
      )}
      {variant === "h2" && (
        <h2
          className={clsx(
            "text-2xl md:text-[36px] font-bold leading-tight text-dark",
            center && "text-center",
            className
          )}
        >
          {children}
        </h2>
      )}
      {variant === "h3" && (
        <h3
          className={clsx(
            "text-lg font-semibold text-dark",
            center && "text-center",
            className
          )}
        >
          {children}
        </h3>
      )}
    </>
  );
}
