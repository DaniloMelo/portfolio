import { prisma } from "@/libs/prisma/client";
import { Project } from "@/types/project";

export async function findProjectPreviews() {
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
  });
}

export async function findProjectBySlug(slug: string): Promise<Project | null> {
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

    images: data.images.map((image) => ({
      id: image.id,
      src: image.src,
      alt: image.alt,
    })),

    technologies: data.projectTechnologies.map(
      (projectTechnology) => projectTechnology.technology.name,
    ),
  };
}
