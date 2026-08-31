import { updateTechnologyRepository } from "@/repository/technology/updateTechnologyRepository";
import { UpdateTechnology } from "@/types/technologies";

export async function updateTechnologyService(tech: UpdateTechnology) {
  await updateTechnologyRepository(tech);
}
