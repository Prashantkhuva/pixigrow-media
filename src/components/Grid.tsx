import clsx from "clsx";

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  className?: string;
}

export default function Grid({ children, cols = 3, className }: GridProps) {
  return (
    <div
      className={clsx(
        "grid gap-6",
        {
          "grid-cols-1": cols === 1,
          "grid-cols-1 md:grid-cols-2": cols === 2,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": cols === 3,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": cols === 4,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
