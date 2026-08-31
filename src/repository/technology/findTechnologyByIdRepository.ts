import { prisma } from "@/libs/prisma/client";

export async function findTechnologyByIdRepository(id: string) {
  return await prisma.technology.findUnique({
    where: { id },
  });
}
