import { prisma } from "@/libs/prisma/client";

export async function findTitlesAndSlugs() {
  return prisma.project.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
    },
  });
}
