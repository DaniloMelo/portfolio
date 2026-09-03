import { deleteById } from "@/repository/project/deleteById";

export async function deleteProject(id: string) {
  await deleteById(id);
}
