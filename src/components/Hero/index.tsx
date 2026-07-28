import Image from "next/image";
import { LuEye, LuDownload } from "react-icons/lu";
import Container from "../Container";
import { TypeAnimation } from "react-type-animation";
import Button from "../Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        h-dvh flex items-center
        bg-linear-to-br from-primary-background from-0% via-accent/50 via-70% to-accent to-100% 
        dark:from-primary-background dark:from-50% dark:via-accent/10 dark:via-70% dark:to-accent/40 dark:to-100%
      "
    >
      <Container>
        <div className="flex flex-col items-center gap-5 lg:gap-20 lg:flex-row">
          <Image
            className="rounded-full border-8 size-[clamp(14rem,30vw,25rem)] border-accent dark:border-accent"
            src="https://github.com/DaniloMelo.png"
            alt="foto de perfil"
            width="400"
            height="400"
            loading="eager"
          />

          <div className="w-full flex flex-col items-center text-center lg:items-start">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-2 text-accent dark:text-accent">
              <TypeAnimation
                sequence={["Danilo Marques de Melo", 100]}
                wrapper="span"
                speed={60}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>

            <p className="mb-4 text-[clamp(1.2rem,2vw,1.5rem)] font-bold">
              Desenvolvedor Full Stack
            </p>

            <p>Transformando idéias em realidade através do código</p>

            <div className="flex items-center gap-4 mt-10">
              <Button icon={<LuEye />}>
                <a
                  href="/Danilo-Marques-de-Melo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver CV
                </a>
              </Button>

              <Button icon={<LuDownload />}>
                <a
                  href="/Danilo-Marques-de-Melo.pdf"
                  download="Danilo-Marques-de-Melo.pdf"
                >
                  Baixar CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
