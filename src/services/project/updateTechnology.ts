import { updateTechnologyRepository } from "@/repository/project/projectRepository";
import { UpdateTechnology } from "@/types/technologies";

export async function updateTechnology(tech: UpdateTechnology) {
  await updateTechnologyRepository(tech);
}
