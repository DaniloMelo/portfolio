import { create } from "@/repository/technology/create";
import { Technology } from "@/types/technologies";

export async function createTechnology(technology: Technology) {
  await create(technology);
}
