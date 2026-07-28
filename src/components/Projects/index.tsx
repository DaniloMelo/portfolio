import { projectsMock } from "@/data/projects.mocks";
import ProjectCarrousel from "../ProjectCarousel";
import Container from "../Container";
import Link from "next/link";
import Button from "../Button";
import { LuFileText, LuCodeXml, LuLaptop } from "react-icons/lu";

export default function Projects() {
  // TODO: Quando implementar o backend/banco, o repository deve trazer somente os dados necessários (getPreviewProjectData, por exemplo)
  const data = projectsMock;

  return (
    <section
      className="bg-primary-background dark:bg-primary-background"
      id="projects"
    >
      <Container>
        <h2 className="text-center mb-20 text-[clamp(1rem,5vw,2rem)]">
          Meus projetos
        </h2>

        {data.map((project) => (
          <div
            className="
              flex flex-col items-center gap-5 mb-50 lg:flex-row lg:items-start lg:gap-10"
            key={project.id}
          >
            <div className="w-80 lg:w-100">
              <ProjectCarrousel
                images={project.images}
                key={project.id}
                variant="preview"
              />
            </div>
            <div className="w-[80%] flex flex-col">
              <div>
                <h3 className="text-center text-[clamp(1.3rem,3vw,1.6rem)] font-bold mb-3 lg:text-start">
                  {project.title}
                </h3>

                <p className="text-center text-secondary-text dark:text-secondary-text lg:text-start">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 mt-12 md:flex-row md:justify-center lg:justify-start">
                <Button
                  icon={<LuFileText size={20} className="" />}
                  className="text-[clamp(.9rem,2vw,1rem)] w-60 py-2 lg:w-fit lg:py-1"
                >
                  <Link href={`/project/${project.slug}`}>
                    Detalhes do projeto
                  </Link>
                </Button>

                <Button
                  icon={<LuCodeXml size={20} />}
                  className="text-[clamp(.9rem,2vw,1rem)] w-60 py-2 lg:w-fit lg:py-1"
                >
                  <a href={project.repositoryCodeUrl}>Ver código</a>
                </Button>

                <Button
                  icon={<LuLaptop size={20} />}
                  className="text-[clamp(.9rem,2vw,1rem)] w-60 py-2 lg:w-fit lg:py-1"
                >
                  <a href={project.deployUrl}>Acessar projeto</a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
