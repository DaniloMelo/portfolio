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
          jobTitle={data.jobTitle}
          introduction={data.introduction}
        />

        <Projects />

        <About about={data.about} />

        <Contact
          email={data.contacts.email}
          phone={data.contacts.phone}
          linkedInProfileUrl={data.contacts.linkedInProfileUrl}
        />
      </main>

      <BottonNavigation />
    </>
  );
}
