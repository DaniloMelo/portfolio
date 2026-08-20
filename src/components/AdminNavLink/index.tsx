"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AdminNavLinkProps {
  path: string;
  text: string;
}

export default function AdminNavLink({ path, text }: AdminNavLinkProps) {
  const pathname = usePathname();
  const isActive = path === pathname;

  return (
    <Link
      href={path}
      className={cn(
        "border-b border-transparent px-2",
        isActive && "text-accent border-b border-accent font-bold transform",
        "hover:border-accent",
      )}
    >
      {text}
    </Link>
  );
}
