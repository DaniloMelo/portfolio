"use client";

import Theme from "../Theme";
import { cn } from "@/utils/cn";
import { LuHouse, LuLaptop, LuPhone } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import Container from "../Container";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { useNavigation } from "@/contexts/NavigationContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import AnchorLink from "../AnchorLink";

export default function BottonNavigation() {
  const [hidden, setHidden] = useState(false);

  useActiveSection();
  const { activeSection } = useNavigation();

  return (
    <div
      className={cn(
        "w-full min-h-15 flex items-center fixed bottom-0 z-50 py-2 lg:hidden",
        "bg-secondary-background dark:bg-secondary-background",
      )}
    >
      <Container className="flex px-0 sm:px-0 sm:py-0 lg:px-0 lg:py-0">
        <nav
          className={cn(
            "flex flex-1 justify-center gap-12",
            hidden && "hidden",
          )}
          aria-label="Navegação principal"
        >
          <AnchorLink
            sectionId="hero"
            className={cn(
              "flex flex-col justify-center items-center gap-0.5 text-xs",
              activeSection === "hero" && "text-accent dark:text-accent",
            )}
          >
            <LuHouse size={25} />
            Início
          </AnchorLink>

          <AnchorLink
            sectionId="projects"
            className={cn(
              "flex flex-col justify-center items-center gap-0.5 text-xs",
              activeSection === "projects" && "text-accent dark:text-accent",
            )}
          >
            <LuLaptop size={25} />
            Projetos
          </AnchorLink>

          <AnchorLink
            sectionId="about"
            className={cn(
              "flex flex-col justify-center items-center gap-0.5 text-xs",
              activeSection === "about" && "text-accent dark:text-accent",
            )}
          >
            <GoPerson size={25} />
            Sobre
          </AnchorLink>

          <AnchorLink
            sectionId="contact"
            className={cn(
              "flex flex-col justify-center items-center gap-0.5 text-xs",
              activeSection === "contact" && "text-accent dark:text-accent",
            )}
          >
            <LuPhone size={25} />
            Contato
          </AnchorLink>
        </nav>

        <div
          className={cn(
            "w-full",
            hidden ? "flex justify-center items-center pl-10" : "hidden",
          )}
        >
          <Theme />
        </div>

        <div
          className="flex items-center mr-2 px-2"
          onClick={() => setHidden(!hidden)}
        >
          <SlOptionsVertical size={25} />
        </div>
      </Container>
    </div>
  );
}
