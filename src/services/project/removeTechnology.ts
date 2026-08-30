import { deleteTechnology } from "@/repository/project/projectRepository";
import { AddTechnology } from "@/types/technologies";

export async function removeTechnology(tech: AddTechnology) {
  await deleteTechnology(tech);
}
