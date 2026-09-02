import { prisma } from "@/libs/prisma/client";

export async function findById(id: string) {
  return await prisma.me.findUnique({
    where: {
      id,
    },
  });
}
