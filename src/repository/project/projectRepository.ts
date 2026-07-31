import { projectsMock } from "@/data/projects.mocks";
import { Project } from "@/types/project";

// TODO: provavelmente o retorno (Promise<Project[]>) será desnecessário quando implementar o prisma, pois ele ira retornar os dados em outro formato dependendo de como o banco de dados for desenhado.
export async function findProjects(): Promise<Project[]> {
  const data = projectsMock;

  return data;
}

// TODO: provavelmente o retorno (Promise<Project | null/undefined>) será desnecessário quando implementar o prisma, pois ele ira retornar os dados em outro formato dependendo de como o banco de dados for desenhado.
export async function findProjectBySlug(
  slug: string,
): Promise<Project | undefined> {
  const data = projectsMock.find((project) => project.slug === slug);

  return data;
}
