"use client";

import Link from "next/link";
import Theme from "../Theme";
import Container from "../Container";

export default function Header() {
  return (
    <header className="">
      <Container className="px-0 sm:px-0 sm:py-0 lg:px-0 lg:py-0">
        <div className="flex items-center justify-end gap-x-6 p-2">
          <nav className="flex gap-6">
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

/*
  w-full fixed top-0 z-50 bg-secondary-background dark:bg-secondary-background
*/
