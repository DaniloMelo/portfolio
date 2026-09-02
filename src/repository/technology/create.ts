import { prisma } from "@/libs/prisma/client";
import { Technology } from "@/types/technologies";

export async function create(technology: Technology) {
  return await prisma.technology.create({
    data: {
      name: technology.name,
    },
  });
}
