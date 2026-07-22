"use client";

import { useNavigation } from "@/contexts/NavigationContext";
import { useEffect } from "react";

export function useActiveSection() {
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // rootMargin: "-25% 0px -25% 0px",
        rootMargin: "-50% 0px -50% 0px", // região central da view port
        threshold: 0,
      },
    );

    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveSection]);
}
