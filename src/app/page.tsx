"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Projects />

        <About />

        <Contact />
      </main>
    </>
  );
}
