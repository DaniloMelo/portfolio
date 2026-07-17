"use client";

import Link from "next/link";
import Theme from "../Theme";
import Container from "../Container";
import { cn } from "@/utils/cn";

export default function Header() {
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
            <Link href="/#hero">Início</Link>

            <Link href="/#projects">Projetos</Link>

            <Link href="/#about">Sobre</Link>

            <Link href="/#contact">Contato</Link>
          </nav>

          <Theme />
        </div>
      </Container>
    </header>
  );
}
