import { prisma } from "@/libs/prisma/client";

export async function findPositions() {
  return await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      position: true,
    },
  });
}
