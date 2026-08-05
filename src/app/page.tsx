import About from "@/components/About";
import BottonNavigation from "@/components/BottonNavigation";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { getMe } from "@/services/me/getMe";

export default async function Home() {
  const data = await getMe();

  return (
    <>
      <Header />

      <main>
        <Hero
          name={data.name}
          avatarUrl={data.avatarUrl}
          jobTitle={data.jobTitle}
          introduction={data.introduction}
        />

        <Projects />

        <About about={data.about} />

        <Contact
          email={data.contact.email}
          phone={data.contact.phone}
          linkedInProfileUrl={data.contact.linkedInProfileUrl}
        />
      </main>

      <BottonNavigation />
    </>
  );
}
