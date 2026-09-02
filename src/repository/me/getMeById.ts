import { prisma } from "@/libs/prisma/client";

export async function getMeById(id: string) {
  return await prisma.me.findUnique({
    where: {
      id,
    },
  });
}
