import Button from "@/components/Button";
import Container from "@/components/Container";
import ProjectCarrousel from "@/components/ProjectCarousel";
import Technology from "@/components/Technology";
import Theme from "@/components/Theme";
import { projectsMock } from "@/data/projects.mocks";
import { Project } from "@/types/project";
import { TechnologyName } from "@/types/technologies";
import Link from "next/link";
import { LuCodeXml, LuLaptop } from "react-icons/lu";

interface ProjectPageParams {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageParams) {
  const { slug } = await params;

  // TODO: Quando implementar o backend/banco, uma nova requisição deve ser feita aqui, buscando dados necessários (getDetailedProjectData, por exemplo)
  const data = temp(projectsMock, slug)!;

  return (
    <main>
      <header className="bg-secondary-background dark:bg-secondary-background">
        <Container className="sm:py-0 lg:py-0">
          <div className="flex justify-end items-center gap-10 p-2">
            <Link href="/">Início</Link>
            <Theme />
          </div>
        </Container>
      </header>

      <Container>
        <h1 className="text-[clamp(1.5rem,4vw,2rem)] text-center font-bold mt-5 mb-10">
          {data.title}
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[70%]">
            <ProjectCarrousel images={data.images} variant="detail" />
          </div>

          <div className="w-full lg:w-[30%] flex flex-col">
            <p className="mb-6">{data.description}</p>

            <span>Tecnologias utilizadas:</span>
            <div className="flex gap-5 flex-wrap mt-2">
              {data?.technologies.map((tech) => (
                <Technology name={tech as TechnologyName} key={tech} />
              ))}
            </div>
          </div>
        </div>

        <p className="my-10">{data.about}</p>

        <div className="flex justify-center flex-wrap gap-10 my-5 lg:justify-start">
          <a href={data.repositoryCodeUrl}>
            <Button
              icon={<LuCodeXml size={20} />}
              className="text-[clamp(.9rem,2vw,1rem)] w-60 py-2 lg:w-fit lg:py-1"
            >
              Ver código
            </Button>
          </a>

          <a href={data.deployUrl}>
            <Button
              icon={<LuLaptop size={20} />}
              className="text-[clamp(.9rem,2vw,1rem)] w-60 py-2 lg:w-fit lg:py-1"
            >
              Acessar projeto
            </Button>
          </a>
        </div>
      </Container>
    </main>
  );
}

function temp(projects: Project[], slug: string): Project | null {
  const data = projects.find((project) => project.slug === slug);

  if (!data) return null;

  return data;
}
