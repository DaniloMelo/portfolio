import { createTechnologyRepository } from "@/repository/technology/createTechnologyRepository";
import { Technology } from "@/types/technologies";

export async function createTechnologyService(technology: Technology) {
  await createTechnologyRepository(technology);
}
