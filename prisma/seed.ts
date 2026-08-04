import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { meMock } from "@/data/me.mock";
import { projectsMock } from "@/data/projects.mocks";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function seedMe() {
  const me = await prisma.me.upsert({
    where: {
      id: "me-example-id",
    },
    update: {
      name: meMock.name,
      jobTitle: meMock.jobTitle,
      introduction: meMock.introduction,
      about: meMock.about,
    },
    create: {
      id: "me-example-id",
      name: meMock.name,
      jobTitle: meMock.jobTitle,
      introduction: meMock.introduction,
      about: meMock.about,
    },
  });

  return me;
}

async function seedContact(meId: string) {
  const contact = await prisma.contact.upsert({
    where: {
      meId: meId,
    },
    update: {
      email: meMock.contacts.email,
      phone: meMock.contacts.phone,
      linkedInProfileUrl: meMock.contacts.linkedInProfileUrl,
    },
    create: {
      meId: meId,
      email: meMock.contacts.email,
      phone: meMock.contacts.phone,
      linkedInProfileUrl: meMock.contacts.linkedInProfileUrl,
    },
  });

  return contact;
}

async function seedTechnologies() {
  const technologyNames = [
    "HTML5",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "tailwindcss",
    "React",
    "Next.js",
    "NestJS",
    "Docker",
  ];

  for (const name of technologyNames) {
    await prisma.technology.upsert({
      where: {
        name: name,
      },
      update: {},
      create: {
        name: name,
      },
    });
  }
}

async function seedProjects() {
  const technologies = await prisma.technology.findMany();

  const technologiesIdsMap = new Map(
    technologies.map((technology) => [technology.name, technology.id]),
  );

  for (const project of projectsMock) {
    await prisma.project.upsert({
      where: {
        id: project.id,
      },
      update: {
        slug: project.slug,
        title: project.title,
        description: project.description,
        about: project.about,
        repositoryCodeUrl: project.repositoryCodeUrl,
        deployUrl: project.deployUrl,
      },
      create: {
        id: project.id,
        slug: project.slug,
        title: project.title,
        description: project.description,
        about: project.about,
        repositoryCodeUrl: project.repositoryCodeUrl,
        deployUrl: project.deployUrl,
      },
    });

    // Deleta todas as imagens anteriores antes de criar novas para evitar duplicatas
    await prisma.image.deleteMany({
      where: {
        projectId: project.id,
      },
    });

    await prisma.image.createMany({
      data: project.images.map((image) => ({
        id: image.id,
        src: image.src,
        alt: image.alt,
        projectId: project.id,
      })),
    });

    // Deleta todas as tecnologias anteriores antes de criar novas para evitar duplicatas (joining table da relação N:N)
    await prisma.projectTechnology.deleteMany({
      where: {
        projectId: project.id,
      },
    });

    const projectTechnologies = project.technologies.map((technologyName) => {
      const technologyId = technologiesIdsMap.get(technologyName);

      if (!technologyId) {
        throw new Error(`Technology "${technologyName}" not found`);
      }

      return {
        projectId: project.id,
        technologyId,
      };
    });

    await prisma.projectTechnology.createMany({
      data: projectTechnologies,
    });
  }
}

async function main() {
  const me = await seedMe();
  await seedContact(me.id);
  await seedTechnologies();
  await seedProjects();
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
