import { findPreviews } from "@/repository/project/findPreviews";
import { ProjectPreview } from "@/types/project";

export async function listVisibleProjectsPreview(): Promise<ProjectPreview[]> {
  const data = await findPreviews();

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
