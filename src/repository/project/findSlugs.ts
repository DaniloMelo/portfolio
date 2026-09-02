import { prisma } from "@/libs/prisma/client";

export async function findSlugs() {
  return await prisma.project.findMany({
    select: {
      slug: true,
    },
  });
}
