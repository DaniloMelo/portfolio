import { cn } from "@/utils/cn";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface CvButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  icon: ReactNode;
}

export default function CvButton({ children, icon, ...rest }: CvButtonProps) {
  return (
    <a
      className={cn(
        "flex justify-center items-center gap-2 py-1 px-4 rounded-3xl cursor-pointer",
        "transition-colors",
        "border-2 border-accent hover:bg-accent/30",
        "dark:border-accent dark:hover:bg-accent/30",
      )}
      {...rest}
    >
      {icon}
      {children}
    </a>
  );
}
