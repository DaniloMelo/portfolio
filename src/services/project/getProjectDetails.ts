import { findBySlug } from "@/repository/project/findBySlug";
import { ProjectDetail } from "@/types/project";

export async function getProjectDetails(slug: string): Promise<ProjectDetail> {
  const data = await findBySlug(slug);

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
