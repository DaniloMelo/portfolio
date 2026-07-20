"use client";

import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

export default function Theme() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  console.log(resolvedTheme);

  if (!mounted) {
    return (
      <button
        className="h-10 w-10 rounded-lg bg-muted/20"
        aria-label="Carregando tema"
      />
    );
  }
  return (
    <button
      className={cn(
        "flex justify-center items-center rounded-full w-10 h-10",
        "border-2 border-secondary-border text-primary-text",
        "dark:border-primary-border dark:text-primary-text",
      )}
      onClick={() =>
        resolvedTheme === "light" ? setTheme("dark") : setTheme("light")
      }
    >
      {resolvedTheme === "light" ? <LuSun size={23} /> : <LuMoon size={20} />}
    </button>
  );
}
