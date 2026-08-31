import { prisma } from "@/libs/prisma/client";
import { UpdateTechnology } from "@/types/technologies";

export async function updateTechnologyRepository(tech: UpdateTechnology) {
  return await prisma.technology.update({
    where: {
      id: tech.id,
    },
    data: {
      name: tech.name,
    },
  });
}
