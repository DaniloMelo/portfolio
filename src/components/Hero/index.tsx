import Image from "next/image";
import CvButton from "../CvButton";
import { LuEye, LuDownload } from "react-icons/lu";
import Container from "../Container";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        h-screen flex items-center 
        bg-linear-to-br from-primary-background from-0% via-accent/50 via-70% to-accent to-100% 
        dark:from-primary-background dark:from-50% dark:via-accent/10 dark:via-70% dark:to-accent/40 dark:to-100%
      "
    >
      <Container>
        <div className="flex justify-center items-center gap-x-6">
          <Image
            className="rounded-full border-8 border-accent dark:border-accent"
            src="https://github.com/DaniloMelo.png"
            alt="foto de perfil"
            width="400"
            height="400"
            loading="eager"
          />

          <div>
            <h1 className="text-5xl font-bold mb-2 text-accent dark:text-accent">
              Danilo Marques de Melo
            </h1>

            <p className="mb-4 text-2xl font-bold">Desenvolvedor Full Stack</p>

            <p>Transformando idéias em realidade através do código</p>

            <div className="flex items-center gap-4 mt-10">
              <CvButton
                href="/Danilo-Marques-de-Melo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                icon={<LuEye />}
              >
                Ver CV
              </CvButton>

              <CvButton
                href="/Danilo-Marques-de-Melo.pdf"
                download="Danilo-Marques-de-Melo.pdf"
                icon={<LuDownload />}
              >
                Baixar CV
              </CvButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// dark:from-primary-background dark:from-0% dark:via-accent/20 dark:via-50% dark:to-primary-background dark:to-100%
