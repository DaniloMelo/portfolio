import { prisma } from "@/libs/prisma/client";
import { Project } from "@/types/project";

export async function createProject(project: Project): Promise<Project> {
  const data = await prisma.project.create({
    data: {
      slug: project.slug,
      title: project.title,
      description: project.description,
      about: project.about,
      repositoryCodeUrl: project.repositoryCodeUrl,
      deployUrl: project.deployUrl,

      images: {
        create: project.images.map((image) => ({
          src: image.src,
          alt: image.alt,
        })),
      },

      projectTechnologies: {
        create: project.technologies.map((technology) => ({
          technology: {
            connect: {
              name: technology.name,
            },
          },
        })),
      },
    },

    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      about: true,
      repositoryCodeUrl: true,
      deployUrl: true,

      images: {
        select: {
          id: true,
          src: true,
          alt: true,
        },
      },
      projectTechnologies: {
        select: {
          technology: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: data.description,
    about: data.about,
    repositoryCodeUrl: data.repositoryCodeUrl,
    deployUrl: data.deployUrl,
    images: data.images,
    technologies: data.projectTechnologies.map(
      (projectTech) => projectTech.technology,
    ),
  };
}

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

    technologies: data.projectTechnologies.map((pt) => ({
      id: pt.technology.id,
      name: pt.technology.name,
    })),
  };
}

export async function findTechnologies() {
  return await prisma.technology.findMany();
}
