import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function Button({ children, icon, className }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex justify-center items-center gap-2 py-1 px-4 rounded-3xl cursor-pointer",
        "transition-colors",
        "bg-accent/20 dark:bg-accent/20 ",
        "border-2 border-accent hover:bg-accent/40",
        "dark:border-accent dark:hover:bg-accent/40",
        className,
      )}
    >
      {icon}
      {children}
    </button>
  );
}
