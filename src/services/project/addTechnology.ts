import { createTechnology } from "@/repository/project/projectRepository";
import { AddTechnology } from "@/types/technologies";

export async function addTechnology(newTech: AddTechnology) {
  await createTechnology(newTech);
}
