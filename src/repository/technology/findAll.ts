import { prisma } from "@/libs/prisma/client";

export async function findAll() {
  return await prisma.technology.findMany();
}
