import { prisma } from "@/libs/prisma/client";
import { UpdateProject } from "@/types/project";

export async function update(project: UpdateProject) {
  await prisma.project.update({
    where: {
      id: project.id,
    },
    data: {
      slug: project.slug,
      title: project.title,
      description: project.description,
      about: project.about,
      repositoryCodeUrl: project.repositoryCodeUrl,
      deployUrl: project.deployUrl,
      position: project.position,

      images: {
        deleteMany: {},
        create: project.images.map((image) => ({
          src: image.src,
          alt: image.alt,
        })),
      },

      projectTechnologies: {
        deleteMany: {},
        create: project.technologies.map((technology) => ({
          technology: {
            connect: {
              name: technology.name,
            },
          },
        })),
      },
    },
  });
}
