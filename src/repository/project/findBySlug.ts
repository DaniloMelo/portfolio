import { prisma } from "@/libs/prisma/client";

export async function findBySlug(slug: string) {
  const data = await prisma.project.findUnique({
    where: {
      slug,
    },
    include: {
      images: true,
      projectTechnologies: {
        include: {
          technology: true,
        },
      },
    },
  });

  if (!data) return null;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: data.description,
    about: data.about,
    repositoryCodeUrl: data.repositoryCodeUrl,
    deployUrl: data.deployUrl,
    position: data.position,

    images: data.images.map((image) => ({
      id: image.id,
      src: image.src,
      alt: image.alt,
    })),

    technologies: data.projectTechnologies.map((pt) => ({
      id: pt.technology.id,
      name: pt.technology.name,
    })),
  };
}
