import { findProjectPreviews } from "@/repository/project/projectRepository";
import { ProjectPreview } from "@/types/project";

export async function getProjectPreview(): Promise<ProjectPreview[]> {
  const data = await findProjectPreviews();

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
