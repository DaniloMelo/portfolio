import { findProjectBySlug } from "@/repository/project/projectRepository";
import { ProjectDetail } from "@/types/project";

export async function getProjectDetail(slug: string): Promise<ProjectDetail> {
  const data = await findProjectBySlug(slug);

  if (!data) {
    throw new Error("Projeto não encontrado");
  }

  return {
    title: data.title,
    description: data.description,
    about: data.about,
    technologies: data.technologies,
    images: data.images,
    repositoryCodeUrl: data.repositoryCodeUrl,
    deployUrl: data.deployUrl,
  };
}
