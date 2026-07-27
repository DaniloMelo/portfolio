import { projectsMock } from "@/data/projects.mocks";
import { Project } from "@/types/project";

interface ProjectPageParams {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageParams) {
  const { slug } = await params;

  // TODO: Quando implementar o backend/banco, uma nova requisição deve ser feita aqui, buscando dados necessários (getDetailedProjectData, por exemplo)
  const data = temp(projectsMock, slug);

  return (
    <div>
      <h1>Title: {data?.title}</h1>

      <p>desc: {data?.description}</p>

      <p>techs: {data?.technologies}</p>

      <p>sobre: {data?.about}</p>
    </div>
  );
}

function temp(projects: Project[], slug: string): Project | null {
  const data = projects.find((project) => project.slug === slug);

  if (!data) return null;

  return data;
}
