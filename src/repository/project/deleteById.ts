import { prisma } from "@/libs/prisma/client";

export async function deleteById(id: string) {
  return await prisma.project.delete({
    where: { id },
  });
}
