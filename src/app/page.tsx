import About from "@/components/About";
import BottonNavigation from "@/components/BottonNavigation";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { getProfile } from "@/services/me/getProfile";

export default async function Home() {
  const data = await getProfile();

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
          email={data.email}
          phone={data.phone}
          linkedInProfileUrl={data.linkedInProfileUrl}
        />
      </main>

      <BottonNavigation />
    </>
  );
}
