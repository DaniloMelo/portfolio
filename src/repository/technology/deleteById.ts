import { prisma } from "@/libs/prisma/client";

export async function deleteById(id: string) {
  await prisma.technology.delete({
    where: { id },
  });
}
