import { deleteProject } from "@/repository/project/projectRepository";

export async function removeProject(slug: string) {
  await deleteProject(slug);
}
