import { prisma } from "@/libs/prisma/client";
import { Project } from "@/types/project";

export async function create(project: Project): Promise<Project> {
  const data = await prisma.project.create({
    data: {
      slug: project.slug,
      title: project.title,
      description: project.description,
      about: project.about,
      repositoryCodeUrl: project.repositoryCodeUrl,
      deployUrl: project.deployUrl,
      position: project.position,
      testUser: project.testUser,
      testEmail: project.testEmail,
      testPassword: project.testPassword,

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
      slug: true,
      title: true,
      description: true,
      about: true,
      repositoryCodeUrl: true,
      deployUrl: true,
      position: true,
      testUser: true,
      testEmail: true,
      testPassword: true,

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
    slug: data.slug,
    title: data.title,
    description: data.description,
    about: data.about,
    repositoryCodeUrl: data.repositoryCodeUrl,
    deployUrl: data.deployUrl,
    position: data.position,
    testUser: data.testUser || undefined,
    testEmail: data.testEmail || undefined,
    testPassword: data.testPassword || undefined,
    images: data.images,
    technologies: data.projectTechnologies.map(
      (projectTech) => projectTech.technology,
    ),
  };
}
