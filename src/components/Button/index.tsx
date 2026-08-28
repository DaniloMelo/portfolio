import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  icon,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex justify-center items-center gap-2 py-1 px-4 rounded-3xl cursor-pointer",
        "transition-colors",
        disabled
          ? "bg-zinc-600 text-zinc-300 pointer-events-none"
          : "bg-accent/20 dark:bg-accent/20 border-2 border-accent hover:bg-accent/40 dark:border-accent dark:hover:bg-accent/40 text-indigo-900 dark:text-primary-text",
        className,
      )}
    >
      {icon}
      {children}
    </button>
  );
}
