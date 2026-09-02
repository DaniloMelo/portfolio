import { prisma } from "@/libs/prisma/client";

export async function findProjectPreviewsRepository() {
  return await prisma.project.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      repositoryCodeUrl: true,
      deployUrl: true,

      images: {
        select: {
          id: true,
          src: true,
          alt: true,
        },
      },
    },
    orderBy: {
      position: "asc",
    },
  });
}
