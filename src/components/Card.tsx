import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={clsx(
        "bg-white border border-border rounded-lg p-6 transition-all duration-300",
        hover && "hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-primary hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
