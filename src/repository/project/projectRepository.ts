import { prisma } from "@/libs/prisma/client";
import { Project, ProjectsPosition } from "@/types/project";

export async function createProject(project: Project): Promise<Project> {
  const data = await prisma.project.create({
    data: {
      slug: project.slug,
      title: project.title,
      description: project.description,
      about: project.about,
      repositoryCodeUrl: project.repositoryCodeUrl,
      deployUrl: project.deployUrl,
      position: project.position,

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
      // id: true,
      slug: true,
      title: true,
      description: true,
      about: true,
      repositoryCodeUrl: true,
      deployUrl: true,
      position: true,

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
    // id: data.id,
    slug: data.slug,
    title: data.title,
    description: data.description,
    about: data.about,
    repositoryCodeUrl: data.repositoryCodeUrl,
    deployUrl: data.deployUrl,
    position: data.position,
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
    orderBy: {
      position: "asc",
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

export async function findProjectsPosition() {
  return await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      position: true,
    },
  });
}

export async function findLastProjectPosition(): Promise<number> {
  const { _max } = await prisma.project.aggregate({
    _max: {
      position: true,
    },
  });

  const position = _max.position ?? 0;

  return position;
}

export async function repositionProjects(projects: ProjectsPosition[]) {
  await prisma.$transaction(
    projects.map((project) =>
      prisma.project.update({
        where: { id: project.id },
        data: { position: project.position },
      }),
    ),
  );
}

export async function findTechnologies() {
  return await prisma.technology.findMany();
}
