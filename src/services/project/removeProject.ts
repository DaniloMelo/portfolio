import { deleteProject } from "@/repository/project/projectRepository";

export async function removeProject(slug: string) {
  console.log("SERVICE DELETE: ", slug);

  await deleteProject(slug);
}
