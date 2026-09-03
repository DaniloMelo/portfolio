import { findBySlug } from "@/repository/project/findBySlug";
import { StoredProject } from "@/types/project";

export default async function getProject(slug: string): Promise<StoredProject> {
  const data = await findBySlug(slug);

  if (!data) {
    throw new Error("Projeto não encontrado");
  }

  return data;
}
