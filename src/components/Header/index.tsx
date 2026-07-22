"use client";

import Link from "next/link";
import Theme from "../Theme";
import Container from "../Container";
import { cn } from "@/utils/cn";
import { useNavigation } from "@/contexts/NavigationContext";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Header() {
  useActiveSection();
  const { activeSection } = useNavigation();

  console.log(activeSection);

  return (
    <header
      className={cn(
        "w-full hidden lg:block fixed top-0 z-50",
        "bg-secondary-background dark:bg-secondary-background",
      )}
    >
      <Container className="px-0 sm:px-0 sm:py-0 lg:px-0 lg:py-0">
        <div className="flex items-center justify-end gap-20 p-2">
          <nav className="flex gap-10">
            <Link
              href="/#hero"
              className={cn(activeSection === "hero" && "text-blue-500")}
            >
              Início
            </Link>

            <Link
              href="/#projects"
              className={cn(activeSection === "projects" && "text-blue-500")}
            >
              Projetos
            </Link>

            <Link
              href="/#about"
              className={cn(activeSection === "about" && "text-blue-500")}
            >
              Sobre
            </Link>

            <Link
              href="/#contact"
              className={cn(activeSection === "contact" && "text-blue-500")}
            >
              Contato
            </Link>
          </nav>

          <Theme />
        </div>
      </Container>
    </header>
  );
}
