import Button from "@/components/Button";
import Container from "@/components/Container";
import ProjectCarrousel from "@/components/ProjectCarousel";
import RenderMarkdown from "@/components/RenderMarkdown";
import Technology from "@/components/Technology";
import Theme from "@/components/Theme";
import { getProjectDetails } from "@/services/project/getProjectDetails";
import { listProjectsSlugs } from "@/services/project/listProjectsSlugs";
import { TechnologyName } from "@/types/technologies";
import Link from "next/link";
import { LuCodeXml, LuLaptop } from "react-icons/lu";

export const dynamicParams = true;
export async function generateStaticParams() {
  return await listProjectsSlugs();
}

interface ProjectPageParams {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageParams) {
  const { slug } = await params;
  const data = await getProjectDetails(slug);

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
          <div className="w-full lg:w-4xl">
            <ProjectCarrousel images={data.images} variant="detail" />
          </div>

          <div className="w-full lg:w-[30%] flex flex-col text-secondary-text dark:text-secondary-text">
            <p className="mb-12 lg:mb-6">{data.description}</p>

            <span>Tecnologias utilizadas:</span>
            <div className="flex gap-5 flex-wrap mt-2">
              {data?.technologies.map((tech) => (
                <Technology
                  name={tech.name as TechnologyName}
                  key={tech.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {data.testPassword && (
            <div>
              <p className="mt-10 mb-5 text-secondary-text dark:text-secondary-text">
                Não quer criar uma conta? Use as credenciais de teste abaixo.
              </p>

              {data.testUser && (
                <p className="font-bold">
                  Nome de usuário:{" "}
                  <span className="font-light text-secondary-text dark:text-secondary-text">
                    {data.testUser}
                  </span>
                </p>
              )}
              {data.testEmail && (
                <p className="font-bold">
                  E-mail:{" "}
                  <span className="font-light text-secondary-text dark:text-secondary-text">
                    {data.testEmail}
                  </span>
                </p>
              )}
              {data.testUser && (
                <p className="font-bold">
                  Senha:{" "}
                  <span className="font-light text-secondary-text dark:text-secondary-text">
                    {data.testPassword}
                  </span>
                </p>
              )}
            </div>
          )}

          <div className="flex justify-center gap-10 my-10 lg:justify-start">
            <a href={data.repositoryCodeUrl} target="_blank">
              <Button
                icon={<LuCodeXml size={20} />}
                className="text-[clamp(.9rem,2vw,1rem)] py-2 lg:w-fit lg:py-1"
              >
                Ver código
              </Button>
            </a>

            <a href={data.deployUrl} target="_blank">
              <Button
                icon={<LuLaptop size={20} />}
                className="text-[clamp(.9rem,2vw,1rem)] py-2 lg:w-fit lg:py-1"
              >
                Acessar projeto
              </Button>
            </a>
          </div>
        </div>

        <div className="my-10">
          <p className="text-center lg:text-start text-2xl font-bold">
            Sobre o projeto
          </p>
          <RenderMarkdown markdown={data.about} />
        </div>
      </Container>
    </main>
  );
}
