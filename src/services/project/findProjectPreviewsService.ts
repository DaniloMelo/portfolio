import { findProjectPreviewsRepository } from "@/repository/project/findProjectPreviewsRepository";
import { ProjectPreview } from "@/types/project";

export async function findProjectPreviewsService(): Promise<ProjectPreview[]> {
  const data = await findProjectPreviewsRepository();

  return data.map((project) => {
    return {
      id: project.id,
      slug: project.slug,
      title: project.title,
      description: project.description,
      repositoryCodeUrl: project.repositoryCodeUrl,
      deployUrl: project.deployUrl,
      images: project.images,
    };
  });
}
