import { prisma } from "@/libs/prisma/client";

export async function deleteTechnologyRepository(id: string) {
  await prisma.technology.delete({
    where: { id },
  });
}
