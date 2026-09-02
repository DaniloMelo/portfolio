import { update } from "@/repository/technology/update";
import { UpdateTechnology } from "@/types/technologies";

export async function updateTechnology(tech: UpdateTechnology) {
  await update(tech);
}
