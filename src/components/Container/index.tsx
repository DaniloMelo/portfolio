import { cn } from "@/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl",
        "px-4 sm:px-6 sm:py-3 lg:px-8 lg:py-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
