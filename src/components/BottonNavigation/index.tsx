"use-client";

import Link from "next/link";
import Theme from "../Theme";
import { cn } from "@/utils/cn";
import { LuHouse, LuLaptop, LuPhone } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import Container from "../Container";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";

export default function BottonNavigation() {
  const [hidden, setHidden] = useState(false);

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
          <Link
            href="/#hero"
            className="flex flex-col justify-center items-center gap-0.5 text-xs"
          >
            <LuHouse size={25} />
            Início
          </Link>

          <Link
            href="/#projects"
            className="flex flex-col justify-center items-center gap-0.5 text-xs"
          >
            <LuLaptop size={25} />
            Projetos
          </Link>

          <Link
            href="/#about"
            className="flex flex-col justify-center items-center gap-0.5 text-xs"
          >
            <GoPerson size={25} />
            Sobre
          </Link>

          <Link
            href="/#contact"
            className="flex flex-col justify-center items-center gap-0.5 text-xs"
          >
            <LuPhone size={25} />
            Contato
          </Link>
        </nav>

        <div
          className={cn(
            "w-full",
            hidden ? "flex justify-center items-center" : "hidden",
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
