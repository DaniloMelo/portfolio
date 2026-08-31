import { prisma } from "@/libs/prisma/client";

export async function findTechnologiesRepository() {
  return await prisma.technology.findMany();
}
