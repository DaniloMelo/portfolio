"use client";

import Theme from "../Theme";
import Container from "../Container";
import { cn } from "@/utils/cn";
import { useNavigation } from "@/contexts/NavigationContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import AnchorLink from "../AnchorLink";

export default function Header() {
  useActiveSection();
  const { activeSection } = useNavigation();

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
            <AnchorLink
              sectionId="hero"
              className={cn(
                activeSection === "hero" && "text-accent dark:text-accent",
              )}
            >
              Início
            </AnchorLink>

            <AnchorLink
              sectionId="projects"
              className={cn(
                activeSection === "projects" && "text-accent dark:text-accent",
              )}
            >
              Projetos
            </AnchorLink>

            <AnchorLink
              sectionId="about"
              className={cn(
                activeSection === "about" && "text-accent dark:text-accent",
              )}
            >
              Sobre
            </AnchorLink>

            <AnchorLink
              sectionId="contact"
              className={cn(
                activeSection === "contact" && "text-accent dark:text-accent",
              )}
            >
              Contato
            </AnchorLink>
          </nav>

          <Theme />
        </div>
      </Container>
    </header>
  );
}
